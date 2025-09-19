import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { getUserId } from "../lib/auth"
import { useToast } from "../components/ui/use-toast"
import { Button } from "../components/ui/button"
import { ArrowLeft, Play, Save, Plus } from "lucide-react"
import ReactFlow, {
  type Node,
  type Edge,
  addEdge,
  type Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
  type NodeTypes,
  ConnectionMode,
} from "reactflow"
import "reactflow/dist/style.css"
import WorkflowNode from "../components/WorkflowNode"
import NodeSidebar from "../components/NodeSidebar"

interface WorkflowData {
  id: string
  name: string
  isActive: boolean
  userId: string
}

interface WorkflowNodeData {
  id: string
  workflowId: string
  type: string
  parameters: Record<string, any>
  positionX: number
  positionY: number
}

interface WorkflowLink {
  id: string
  workflowId: string
  fromNodeId: string
  toNodeId: string
}

const nodeTypes: NodeTypes = {
  workflowNode: WorkflowNode,
}

const WorkflowEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { toast } = useToast()

  const [workflow, setWorkflow] = useState<WorkflowData | null>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [loading, setLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    if (id) {
      fetchWorkflowData()
    }
  }, [id, user])

  const fetchWorkflowData = async () => {
    const userId = getUserId()
    if (!id || !userId) return

    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      
      // Fetch workflow details
      const workflowResponse = await fetch(`${BASE_URL}/workflows?userId=${userId}`, {
        credentials: "include",
      })

      if (workflowResponse.ok) {
        const workflowData = await workflowResponse.json()
        const currentWorkflow = workflowData.workflows?.find((w: WorkflowData) => w.id === id)

        if (currentWorkflow) {
          setWorkflow(currentWorkflow)
        } else {
          throw new Error("Workflow not found")
        }
      }

      // Fetch workflow nodes
      const nodesResponse = await fetch(`${BASE_URL}/nodes?workflowId=${id}`, {
        credentials: "include",
      })

      if (nodesResponse.ok) {
        const nodesData = await nodesResponse.json()
        const workflowNodes = nodesData.data || []

        const reactFlowNodes: Node[] = workflowNodes.map((node: WorkflowNodeData) => ({
          id: node.id,
          type: "workflowNode",
          position: { x: node.positionX || 0, y: node.positionY || 0 },
          data: {
            label: node.type,
            nodeType: node.type,
            parameters: node.parameters,
            onDelete: () => handleDeleteNode(node.id),
            onEdit: () => handleEditNode(),
          },
        }))

        setNodes(reactFlowNodes)
      }

      // Fetch workflow links
      const linksResponse = await fetch(`${BASE_URL}/links?workflowId=${id}`, {
        credentials: "include",
      })

      if (linksResponse.ok) {
        const linksData = await linksResponse.json()
        const workflowLinks = linksData.data || []

        const reactFlowEdges: Edge[] = workflowLinks.map((link: WorkflowLink) => ({
          id: link.id,
          source: link.fromNodeId,
          target: link.toNodeId,
          type: "smoothstep",
        }))

        setEdges(reactFlowEdges)
      }
    } catch (error) {
      console.error("Failed to fetch workflow data:", error)
      toast({
        title: "Error",
        description: "Failed to load workflow data",
        variant: "destructive",
      })
      navigate("/workflows")
    } finally {
      setLoading(false)
    }
  }

  const onConnect = useCallback(
    async (params: Connection) => {
      if (!params.source || !params.target || !id) return

      try {
        const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
        const response = await fetch(`${BASE_URL}/links`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            workflowId: id,
            fromNodeId: params.source,
            toNodeId: params.target,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const newEdge: Edge = {
            id: data.link.id,
            source: params.source,
            target: params.target,
            type: "smoothstep",
          }
          setEdges((eds) => addEdge(newEdge, eds))
        } else {
          throw new Error("Failed to create connection")
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to create connection",
          variant: "destructive",
        })
      }
    },
    [id, setEdges, toast],
  )

  const handleAddNode = async (nodeType: string) => {
    if (!id) return

    const newPosition = {
      x: Math.random() * 400 + 100,
      y: Math.random() * 400 + 100,
    }

    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/nodes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          workflowId: id,
          type: nodeType,
          parameters: {},
          positionX: newPosition.x,
          positionY: newPosition.y,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const newNode: Node = {
          id: data.node.id,
          type: "workflowNode",
          position: newPosition,
          data: {
            label: nodeType,
            nodeType: nodeType,
            parameters: {},
            onDelete: () => handleDeleteNode(data.node.id),
            onEdit: () => handleEditNode(),
          },
        }

        setNodes((nds) => [...nds, newNode])
        setIsSidebarOpen(false)

        toast({
          title: "Success",
          description: "Node added successfully",
        })
      } else {
        throw new Error("Failed to create node")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add node",
        variant: "destructive",
      })
    }
  }

  const handleDeleteNode = async (nodeId: string) => {
    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/nodes/${nodeId}`, {
        method: "DELETE",
        credentials: "include",
      })

      if (response.ok) {
        setNodes((nds) => nds.filter((node) => node.id !== nodeId))
        setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId))

        toast({
          title: "Success",
          description: "Node deleted successfully",
        })
      } else {
        throw new Error("Failed to delete node")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete node",
        variant: "destructive",
      })
    }
  }

  const handleEditNode = () => {
    // TODO: Implement node editing functionality
    toast({
      title: "Info",
      description: "Node editing will be implemented soon",
    })
  }

  const handleSaveWorkflow = async () => {
    // Update node positions
    const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
    const updatePromises = nodes.map(async (node) => {
      try {
        await fetch(`${BASE_URL}/nodes/${node.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            type: node.data.nodeType,
            parameters: node.data.parameters,
            positionX: node.position.x,
            positionY: node.position.y,
          }),
        })
      } catch (error) {
        console.error("Failed to update node:", error)
      }
    })

    await Promise.all(updatePromises)

    toast({
      title: "Success",
      description: "Workflow saved successfully",
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!workflow) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">Workflow not found</h2>
        <Button onClick={() => navigate("/workflows")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Workflows
        </Button>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/workflows")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold text-card-foreground">{workflow.name}</h1>
            <p className="text-sm text-muted-foreground">Workflow Editor</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsSidebarOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Node
          </Button>
          <Button variant="outline" size="sm" onClick={handleSaveWorkflow}>
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button size="sm">
            <Play className="w-4 h-4 mr-2" />
            Run
          </Button>
        </div>
      </div>

      {/* Workflow Canvas */}
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          connectionMode={ConnectionMode.Loose}
          fitView
          className="bg-background"
        >
          <Controls className="bg-card border border-border" />
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} className="opacity-50" />
        </ReactFlow>

        {/* Node Sidebar */}
        <NodeSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onAddNode={handleAddNode} />
      </div>
    </div>
  )
}

export default WorkflowEditor

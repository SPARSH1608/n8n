import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useAuth } from "../context/AuthContext"
import { getUserId } from "../lib/auth"
import { useToast } from "../components/ui/use-toast"
import { useNavigate } from "react-router-dom"
import { Plus, Edit, Trash2, Workflow, Calendar, Activity } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { Badge } from "../components/ui/badge"
import { Switch } from "../components/ui/switch"

interface WorkflowItem {
  id: string
  name: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  userId: string
}

const Workflows: React.FC = () => {
  const { user } = useAuth()
  const { toast } = useToast()
  const navigate = useNavigate()
  const [workflows, setWorkflows] = useState<WorkflowItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newWorkflowName, setNewWorkflowName] = useState("")
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetchWorkflows()
  }, [user])

  const fetchWorkflows = async () => {
    const userId = getUserId()
    if (!userId) return

    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/workflows?userId=${userId}`, {
        credentials: "include",
      })

      if (response.ok) {
        const data = await response.json()
        setWorkflows(data.workflows || [])
      }
    } catch (error) {
      console.error("Failed to fetch workflows:", error)
      toast({
        title: "Error",
        description: "Failed to load workflows",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCreateWorkflow = async (e: React.FormEvent) => {
    e.preventDefault()
    const userId = getUserId()
    if (!userId || !newWorkflowName.trim()) return

    setSubmitting(true)

    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/workflows`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          userId: userId,
          name: newWorkflowName.trim(),
        }),
      })

      if (response.ok) {
        const data = await response.json()
        toast({
          title: "Success",
          description: "Workflow created successfully",
        })
        setIsCreateDialogOpen(false)
        setNewWorkflowName("")
        fetchWorkflows()
        // Navigate to the workflow editor
        navigate(`/workflows/${data.workflow.id}`)
      } else {
        const error = await response.json()
        throw new Error(error.message || "Failed to create workflow")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create workflow",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  const handleToggleActive = async (workflowId: string, isActive: boolean) => {
    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/workflows/${workflowId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: workflows.find((w) => w.id === workflowId)?.name,
          isActive: !isActive,
        }),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: `Workflow ${!isActive ? "activated" : "deactivated"} successfully`,
        })
        fetchWorkflows()
      } else {
        throw new Error("Failed to update workflow")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update workflow status",
        variant: "destructive",
      })
    }
  }

  const handleDeleteWorkflow = async (workflowId: string) => {
    if (!confirm("Are you sure you want to delete this workflow? This action cannot be undone.")) {
      return
    }

    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/workflows/${workflowId}`, {
        method: "DELETE",
        credentials: "include",
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Workflow deleted successfully",
        })
        fetchWorkflows()
      } else {
        throw new Error("Failed to delete workflow")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete workflow",
        variant: "destructive",
      })
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Workflows</h1>
          <p className="text-muted-foreground mt-2">Create and manage your automation workflows</p>
        </div>

        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Workflow
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Workflow</DialogTitle>
              <DialogDescription>Give your workflow a descriptive name to get started.</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleCreateWorkflow} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="workflowName">Workflow Name</Label>
                <Input
                  id="workflowName"
                  value={newWorkflowName}
                  onChange={(e) => setNewWorkflowName(e.target.value)}
                  placeholder="Enter workflow name"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit" disabled={submitting} className="flex-1">
                  {submitting ? "Creating..." : "Create Workflow"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {workflows.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Workflow className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <CardTitle className="mb-2">No workflows yet</CardTitle>
            <CardDescription className="mb-6">
              Create your first workflow to start automating your tasks
            </CardDescription>
            <Button onClick={() => setIsCreateDialogOpen(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Create Your First Workflow
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow) => (
            <Card key={workflow.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-balance">{workflow.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant={workflow.isActive ? "default" : "secondary"}>
                        {workflow.isActive ? "Active" : "Inactive"}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {formatDate(workflow.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Switch
                      checked={workflow.isActive}
                      onCheckedChange={() => handleToggleActive(workflow.id, workflow.isActive)}
                      className="data-[state=checked]:bg-primary"
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Activity className="w-4 h-4" />
                    <span>0 executions</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2 bg-transparent"
                    onClick={() => navigate(`/workflows/${workflow.id}`)}
                  >
                    <Edit className="w-3 h-3" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteWorkflow(workflow.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Workflows

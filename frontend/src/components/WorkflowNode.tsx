import type React from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Edit, Trash2, Zap, Webhook, Clock, MousePointer, CreditCard, MessageSquare, FileText } from "lucide-react"

interface WorkflowNodeData {
  label: string
  nodeType: string
  parameters: Record<string, any>
  onDelete: () => void
  onEdit: () => void
}

const getNodeIcon = (nodeType: string) => {
  switch (nodeType) {
    case "manual":
      return MousePointer
    case "webhook":
      return Webhook
    case "cron":
      return Clock
    case "payment":
      return CreditCard
    case "chat":
      return MessageSquare
    case "form":
      return FileText
    default:
      return Zap
  }
}

const getNodeColor = (nodeType: string) => {
  switch (nodeType) {
    case "manual":
      return "bg-blue-50 border-blue-200 text-blue-700"
    case "webhook":
      return "bg-green-50 border-green-200 text-green-700"
    case "cron":
      return "bg-purple-50 border-purple-200 text-purple-700"
    case "payment":
      return "bg-yellow-50 border-yellow-200 text-yellow-700"
    case "chat":
      return "bg-pink-50 border-pink-200 text-pink-700"
    case "form":
      return "bg-indigo-50 border-indigo-200 text-indigo-700"
    default:
      return "bg-gray-50 border-gray-200 text-gray-700"
  }
}

const WorkflowNode: React.FC<NodeProps<WorkflowNodeData>> = ({ data, selected }) => {
  const Icon = getNodeIcon(data.nodeType)
  const colorClass = getNodeColor(data.nodeType)

  return (
    <div className="relative">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-primary border-2 border-white" />

      <Card className={`w-48 ${selected ? "ring-2 ring-primary" : ""} ${colorClass} transition-all hover:shadow-md`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon className="w-4 h-4" />
              <CardTitle className="text-sm font-medium capitalize">{data.nodeType}</CardTitle>
            </div>
            <Badge variant="secondary" className="text-xs">
              Trigger
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="text-xs text-muted-foreground mb-3">
            {data.nodeType === "manual" && "Manual trigger"}
            {data.nodeType === "webhook" && "HTTP webhook"}
            {data.nodeType === "cron" && "Scheduled trigger"}
            {data.nodeType === "payment" && "Payment gateway"}
            {data.nodeType === "chat" && "Chat message"}
            {data.nodeType === "form" && "Form submission"}
          </div>

          <div className="flex gap-1">
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={data.onEdit}>
              <Edit className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 text-destructive hover:text-destructive"
              onClick={data.onDelete}
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-primary border-2 border-white" />
    </div>
  )
}

export default WorkflowNode

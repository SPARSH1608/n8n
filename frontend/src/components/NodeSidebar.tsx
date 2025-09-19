import type React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { X, MousePointer, Webhook, Clock, CreditCard, MessageSquare, FileText, Zap } from "lucide-react"

interface NodeSidebarProps {
  isOpen: boolean
  onClose: () => void
  onAddNode: (nodeType: string) => void
}

const nodeTypes = [
  {
    type: "manual",
    name: "Manual Trigger",
    description: "Manually trigger the workflow",
    icon: MousePointer,
    category: "Triggers",
  },
  {
    type: "webhook",
    name: "Webhook",
    description: "Trigger via HTTP webhook",
    icon: Webhook,
    category: "Triggers",
  },
  {
    type: "cron",
    name: "Cron Job",
    description: "Schedule-based trigger",
    icon: Clock,
    category: "Triggers",
  },
  {
    type: "payment",
    name: "Payment Gateway",
    description: "Trigger on payment events",
    icon: CreditCard,
    category: "Triggers",
  },
  {
    type: "chat",
    name: "Chat Message",
    description: "Trigger on chat messages",
    icon: MessageSquare,
    category: "Triggers",
  },
  {
    type: "form",
    name: "Form Submission",
    description: "Trigger on form submissions",
    icon: FileText,
    category: "Triggers",
  },
]

const NodeSidebar: React.FC<NodeSidebarProps> = ({ isOpen, onClose, onAddNode }) => {
  if (!isOpen) return null

  return (
    <div className="absolute top-0 right-0 h-full w-80 bg-background border-l border-border shadow-lg z-10">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Add Node</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-full">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Triggers</h3>
          <div className="space-y-2">
            {nodeTypes.map((nodeType) => {
              const Icon = nodeType.icon
              return (
                <Card
                  key={nodeType.type}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => onAddNode(nodeType.type)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-sm">{nodeType.name}</CardTitle>
                        <CardDescription className="text-xs">{nodeType.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Actions</h3>
          <Card className="cursor-pointer hover:shadow-md transition-shadow opacity-50">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <Zap className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <CardTitle className="text-sm">Action Nodes</CardTitle>
                  <CardDescription className="text-xs">Coming soon...</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default NodeSidebar

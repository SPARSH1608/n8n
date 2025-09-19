import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useAuth } from "../context/AuthContext"
import { getUserId } from "../lib/auth"
import { useToast } from "../components/ui/use-toast"
import { Plus, Trash2, Key, MessageSquare, Mail, Calendar, Bot, Phone } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { Badge } from "../components/ui/badge"

interface Credential {
  id: string
  name: string
  type: string
  data: Record<string, any>
  createdAt: string
  updatedAt: string
}

interface Integration {
  id: string
  name: string
  type: string
  icon: React.ComponentType<any>
  description: string
  fields: Array<{
    key: string
    label: string
    type: "text" | "password" | "email"
    placeholder: string
    required: boolean
  }>
  spinning?: boolean
}

const integrations: Integration[] = [
  {
    id: "telegram",
    name: "Telegram",
    type: "telegram",
    icon: MessageSquare,
    description: "Connect your Telegram bot",
    fields: [
      { key: "botToken", label: "Bot Token", type: "password", placeholder: "Enter your bot token", required: true },
      { key: "chatId", label: "Chat ID", type: "text", placeholder: "Enter chat ID (optional)", required: false },
    ],
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    type: "whatsapp",
    icon: Phone,
    description: "Connect WhatsApp Business API",
    fields: [
      {
        key: "phoneNumberId",
        label: "Phone Number ID",
        type: "text",
        placeholder: "Enter phone number ID",
        required: true,
      },
      {
        key: "accessToken",
        label: "Access Token",
        type: "password",
        placeholder: "Enter access token",
        required: true,
      },
    ],
  },
  {
    id: "slack",
    name: "Slack",
    type: "slack",
    icon: MessageSquare,
    description: "Connect your Slack workspace",
    fields: [
      { key: "botToken", label: "Bot Token", type: "password", placeholder: "xoxb-your-token", required: true },
      {
        key: "signingSecret",
        label: "Signing Secret",
        type: "password",
        placeholder: "Enter signing secret",
        required: true,
      },
    ],
  },
  {
    id: "gmail",
    name: "Gmail",
    type: "gmail",
    icon: Mail,
    description: "Connect your Gmail account",
    fields: [
      { key: "clientId", label: "Client ID", type: "text", placeholder: "Enter OAuth client ID", required: true },
      {
        key: "clientSecret",
        label: "Client Secret",
        type: "password",
        placeholder: "Enter client secret",
        required: true,
      },
      {
        key: "refreshToken",
        label: "Refresh Token",
        type: "password",
        placeholder: "Enter refresh token",
        required: true,
      },
    ],
  },
  {
    id: "cal",
    name: "Cal.com",
    type: "cal",
    icon: Calendar,
    description: "Connect your Cal.com calendar",
    fields: [
      { key: "apiKey", label: "API Key", type: "password", placeholder: "Enter your Cal.com API key", required: true },
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    type: "chatgpt",
    icon: Bot,
    description: "Connect OpenAI ChatGPT",
    fields: [
      { key: "apiKey", label: "API Key", type: "password", placeholder: "sk-...", required: true },
      { key: "model", label: "Model", type: "text", placeholder: "gpt-4 (optional)", required: false },
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    type: "gemini",
    icon: Bot,
    description: "Connect Google Gemini AI",
    fields: [
      { key: "apiKey", label: "API Key", type: "password", placeholder: "Enter Gemini API key", required: true },
    ],
  },
  {
    id: "claude",
    name: "Claude",
    type: "claude",
    icon: Bot,
    description: "Connect Anthropic Claude",
    fields: [
      { key: "apiKey", label: "API Key", type: "password", placeholder: "Enter Claude API key", required: true },
    ],
  },
]

const Credentials: React.FC = () => {
  const { user } = useAuth()
  const { toast } = useToast()
  const [credentials, setCredentials] = useState<Credential[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [credentialName, setCredentialName] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [spinningIntegrations, setSpinningIntegrations] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetchCredentials()
    // Start spinning animation for all integrations
    const allIntegrationIds = new Set(integrations.map((i) => i.id))
    setSpinningIntegrations(allIntegrationIds)
  }, [user])

  const fetchCredentials = async () => {
    const userId = getUserId()
    if (!userId) return

    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/credentials?userId=${userId}`, {
        credentials: "include",
      })

      if (response.ok) {
        const data = await response.json()
        setCredentials(data.credentials || [])
      }
    } catch (error) {
      console.error("Failed to fetch credentials:", error)
      toast({
        title: "Error",
        description: "Failed to load credentials",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleIntegrationClick = (integration: Integration) => {
    setSelectedIntegration(integration)
    setFormData({})
    setCredentialName(`${integration.name} - ${new Date().toLocaleDateString()}`)
    setIsDialogOpen(true)
  }

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const userId = getUserId()
    if (!selectedIntegration || !userId) return

    setSubmitting(true)

    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/credentials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          userId: userId,
          name: credentialName,
          type: selectedIntegration.type,
          data: formData,
        }),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Credential added successfully",
        })
        setIsDialogOpen(false)
        fetchCredentials()
      } else {
        const error = await response.json()
        throw new Error(error.message || "Failed to add credential")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add credential",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (credentialId: string) => {
    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/credentials/${credentialId}`, {
        method: "DELETE",
        credentials: "include",
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Credential deleted successfully",
        })
        fetchCredentials()
      } else {
        throw new Error("Failed to delete credential")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete credential",
        variant: "destructive",
      })
    }
  }

  const getCredentialsForIntegration = (integrationType: string) => {
    return credentials.filter((cred) => cred.type === integrationType)
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
          <h1 className="text-3xl font-bold text-foreground">Integrations</h1>
          <p className="text-muted-foreground mt-2">Connect your services and manage API credentials</p>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => {
          const integrationCredentials = getCredentialsForIntegration(integration.type)
          const isSpinning = spinningIntegrations.has(integration.id)

          return (
            <Card key={integration.id} className="hover:shadow-md transition-all cursor-pointer group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center ${isSpinning ? "animate-spin" : ""}`}
                    >
                      <integration.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {integrationCredentials.length} credential{integrationCredentials.length !== 1 ? "s" : ""}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm">{integration.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <Dialog
                  open={isDialogOpen && selectedIntegration?.id === integration.id}
                  onOpenChange={setIsDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => handleIntegrationClick(integration)}
                      className="w-full gap-2"
                      variant="outline"
                    >
                      <Plus className="w-4 h-4" />
                      Add Credential
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add {integration.name} Credential</DialogTitle>
                      <DialogDescription>
                        Enter your {integration.name} API credentials to connect this service.
                      </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="credentialName">Credential Name</Label>
                        <Input
                          id="credentialName"
                          value={credentialName}
                          onChange={(e) => setCredentialName(e.target.value)}
                          placeholder="Enter a name for this credential"
                          required
                        />
                      </div>

                      {integration.fields.map((field) => (
                        <div key={field.key} className="space-y-2">
                          <Label htmlFor={field.key}>
                            {field.label}
                            {field.required && <span className="text-destructive ml-1">*</span>}
                          </Label>
                          <Input
                            id={field.key}
                            type={field.type}
                            value={formData[field.key] || ""}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            placeholder={field.placeholder}
                            required={field.required}
                          />
                        </div>
                      ))}

                      <div className="flex gap-3 pt-4">
                        <Button type="submit" disabled={submitting} className="flex-1">
                          {submitting ? "Adding..." : "Add Credential"}
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>

                {/* Existing Credentials */}
                {integrationCredentials.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Existing Credentials</h4>
                    <div className="space-y-2">
                      {integrationCredentials.map((credential) => (
                        <div
                          key={credential.id}
                          className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                        >
                          <div className="flex items-center gap-2">
                            <Key className="w-3 h-3 text-muted-foreground" />
                            <span className="text-sm font-medium">{credential.name}</span>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(credential.id)}
                            className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Credentials

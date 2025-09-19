import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { useAuth } from "../context/AuthContext"
import { getUserId } from "../lib/auth"
import { Activity, Workflow, Key, Zap, Plus, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

interface DashboardStats {
  totalWorkflows: number
  activeWorkflows: number
  totalCredentials: number
  totalExecutions: number
}

const Dashboard: React.FC = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardStats>({
    totalWorkflows: 0,
    activeWorkflows: 0,
    totalCredentials: 0,
    totalExecutions: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardStats()
  }, [user])

  const fetchDashboardStats = async () => {
    const userId = getUserId()
    if (!userId) return

    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      
      // Fetch workflows
      const workflowsResponse = await fetch(`${BASE_URL}/workflows?userId=${userId}`, {
        credentials: "include",
      })

      // Fetch credentials
      const credentialsResponse = await fetch(`${BASE_URL}/credentials?userId=${userId}`, {
        credentials: "include",
      })

      if (workflowsResponse.ok) {
        const workflowsData = await workflowsResponse.json()
        const workflows = workflowsData.workflows || []
        const activeWorkflows = workflows.filter((w: any) => w.isActive).length

        setStats((prev) => ({
          ...prev,
          totalWorkflows: workflows.length,
          activeWorkflows,
        }))
      }

      if (credentialsResponse.ok) {
        const credentialsData = await credentialsResponse.json()
        const credentials = credentialsData.credentials || []

        setStats((prev) => ({
          ...prev,
          totalCredentials: credentials.length,
        }))
      }
    } catch (error) {
      console.error("Failed to fetch dashboard stats:", error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: "Total Workflows",
      value: stats.totalWorkflows,
      description: "Automation workflows created",
      icon: Workflow,
      color: "text-primary",
    },
    {
      title: "Active Workflows",
      value: stats.activeWorkflows,
      description: "Currently running workflows",
      icon: Activity,
      color: "text-secondary",
    },
    {
      title: "Integrations",
      value: stats.totalCredentials,
      description: "Connected services",
      icon: Key,
      color: "text-accent",
    },
    {
      title: "Total Executions",
      value: stats.totalExecutions,
      description: "Workflow runs this month",
      icon: TrendingUp,
      color: "text-muted-foreground",
    },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground text-balance">
            Welcome back, {user?.email?.split("@")[0]}!
          </h1>
          <p className="text-muted-foreground mt-2">Here's an overview of your automation platform</p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link to="/workflows" className="gap-2">
              <Plus className="w-4 h-4" />
              New Workflow
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">{stat.title}</CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Quick Start
            </CardTitle>
            <CardDescription>Get started with your automation journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start gap-3 bg-transparent">
                <Link to="/credentials">
                  <Key className="w-4 h-4" />
                  Connect your first integration
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-3 bg-transparent">
                <Link to="/workflows">
                  <Workflow className="w-4 h-4" />
                  Create your first workflow
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest workflow activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.totalWorkflows === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No recent activity</p>
                  <p className="text-sm">Create your first workflow to get started</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Workflows created</p>
                      <p className="text-xs text-muted-foreground">
                        {stats.totalWorkflows} workflow{stats.totalWorkflows !== 1 ? "s" : ""} in your account
                      </p>
                    </div>
                  </div>
                  {stats.totalCredentials > 0 && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Integrations connected</p>
                        <p className="text-xs text-muted-foreground">
                          {stats.totalCredentials} service{stats.totalCredentials !== 1 ? "s" : ""} connected
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

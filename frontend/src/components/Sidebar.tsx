import type React from "react"
import { NavLink } from "react-router-dom"
import { LayoutDashboard, Key, Workflow, Settings, Zap } from "lucide-react"
import { cn } from "../lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Credentials", href: "/credentials", icon: Key },
  { name: "Workflows", href: "/workflows", icon: Workflow },
  { name: "Settings", href: "/settings", icon: Settings },
]

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="flex items-center gap-2 p-6 border-b border-sidebar-border">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-sidebar-foreground">AutoFlow</span>
      </div>

      <nav className="mt-6 px-3">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground",
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

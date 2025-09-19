'use client'

import * as React from 'react'
import { cn } from '../../lib/utils'

// Placeholder chart component - recharts integration disabled for now
export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('w-full h-80', className)}
    {...props}
  />
))
ChartContainer.displayName = 'ChartContainer'

export const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded border bg-background p-2 shadow-md', className)}
    {...props}
  />
))
ChartTooltip.displayName = 'ChartTooltip'

export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('grid min-w-[8rem] gap-1.5', className)}
    {...props}
  />
))
ChartTooltipContent.displayName = 'ChartTooltipContent'

export const ChartLegend = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center justify-center gap-4', className)}
    {...props}
  />
))
ChartLegend.displayName = 'ChartLegend'

export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-1.5', className)}
    {...props}
  />
))
ChartLegendContent.displayName = 'ChartLegendContent'
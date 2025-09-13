import { cn } from "@/lib/utils";

interface DashboardWidgetProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass";
}

const DashboardWidget = ({ title, children, className, variant = "default" }: DashboardWidgetProps) => {
  return (
    <div className={cn(
      "rounded-xl p-6 enterprise-transition",
      variant === "glass" 
        ? "glass-card text-foreground shadow-[--shadow-glass]"
        : "bg-card text-card-foreground shadow-[--shadow-widget] border border-border/50",
      className
    )}>
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-primary">{title}</h3>
      )}
      {children}
    </div>
  );
};

export default DashboardWidget;
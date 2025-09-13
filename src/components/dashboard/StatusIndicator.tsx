import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "operational" | "warning" | "error";
  label: string;
  className?: string;
}

const StatusIndicator = ({ status, label, className }: StatusIndicatorProps) => {
  const statusColors = {
    operational: "bg-success status-pulse",
    warning: "bg-yellow-500 status-pulse",
    error: "bg-destructive status-pulse"
  };

  const statusText = {
    operational: "Operational",
    warning: "Warning", 
    error: "Error"
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("w-3 h-3 rounded-full", statusColors[status])} />
      <span className="text-success-foreground font-medium">{statusText[status]}</span>
      {label && <span className="text-muted-foreground">- {label}</span>}
    </div>
  );
};

export default StatusIndicator;
import DashboardWidget from "./DashboardWidget";

const ScheduleMatrix = () => {
  const scheduleData = [
    {
      day: "Monday",
      sessions: [
        { time: "8:00-9:30", subject: "Advanced Mathematics", type: "lecture" },
        { time: "10:00-11:30", subject: "Quantum Physics", type: "lab" }
      ]
    },
    {
      day: "Tuesday", 
      sessions: [
        { time: "8:30-10:00", subject: "Design Workshop", type: "workshop" },
        { time: "10:30-12:00", subject: "Innovation Lab", type: "lab" }
      ]
    },
    {
      day: "Wednesday",
      sessions: [
        { time: "9:00-10:30", subject: "Machine Learning", type: "lecture" },
        { time: "11:00-12:30", subject: "Research Methods", type: "seminar" }
      ]
    },
    {
      day: "Thursday",
      sessions: [
        { time: "8:00-9:30", subject: "Data Structures", type: "lecture" },
        { time: "10:00-11:30", subject: "Algorithm Design", type: "lab" }
      ]
    },
    {
      day: "Friday",
      sessions: [
        { time: "8:00-9:30", subject: "Success Review", type: "review" },
        { time: "10:00-11:00", subject: "Strategic Planning", type: "planning" }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      lecture: "bg-primary/20 text-primary",
      lab: "bg-success/20 text-success", 
      workshop: "bg-purple-500/20 text-purple-400",
      seminar: "bg-orange-500/20 text-orange-400",
      review: "bg-blue-500/20 text-blue-400",
      planning: "bg-pink-500/20 text-pink-400"
    };
    return colors[type as keyof typeof colors] || "bg-muted/20 text-foreground";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Schedule Matrix</h2>
      
      <DashboardWidget title="Weekly Overview">
        <div className="space-y-4">
          {scheduleData.map((day) => (
            <div key={day.day} className="space-y-2">
              <h4 className="font-semibold text-primary text-lg">{day.day}</h4>
              <div className="grid gap-2">
                {day.sessions.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg border border-border/30">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-muted-foreground min-w-[80px]">
                        {session.time}
                      </span>
                      <span className="text-foreground font-medium">
                        {session.subject}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(session.type)}`}>
                      {session.type.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DashboardWidget>

      <DashboardWidget title="Today's Focus">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h5 className="font-semibold text-primary mb-2">Current Session</h5>
            <p className="text-foreground">Advanced Mathematics</p>
            <p className="text-sm text-muted-foreground">8:00-9:30 • Room 204A</p>
          </div>
          <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
            <h5 className="font-semibold text-success mb-2">Next Session</h5>
            <p className="text-foreground">Quantum Physics Lab</p>
            <p className="text-sm text-muted-foreground">10:00-11:30 • Lab 301</p>
          </div>
        </div>
      </DashboardWidget>
    </div>
  );
};

export default ScheduleMatrix;
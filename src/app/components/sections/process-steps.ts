/** The five steps every engagement follows. Content mirrors the Terms of Service (written SOW, approvals). */
export const PROCESS_STEPS = [
  {
    title: "Discovery",
    body: "We review your business, competitors and current site to find the fastest wins.",
    items: ["Kick-off call", "Site and SEO audit", "Competitor scan"],
  },
  {
    title: "Strategy",
    body: "Scope, timeline, targets and budget, agreed in writing before any work starts.",
    items: ["Written statement of work", "Targets you can track", "Milestone plan"],
  },
  {
    title: "Design",
    body: "Designs and copy you review and approve before we build.",
    items: ["Clickable prototype", "Copy and visuals", "Revision rounds"],
  },
  {
    title: "Launch",
    body: "Built, tested and shipped, with speed, SEO and tracking checked before go-live.",
    items: ["QA and speed tests", "Analytics set up", "Go-live support"],
  },
  {
    title: "Improve",
    body: "Monthly reporting and improvements, with the same team you started with.",
    items: ["Monthly report", "Ongoing optimisation", "Priority support"],
  },
] as const;

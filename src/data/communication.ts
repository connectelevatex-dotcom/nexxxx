export interface CommunicationTool {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: 'blue' | 'purple' | 'green';
}

export const communicationTools: CommunicationTool[] = [
  {
    id: 1,
    name: "Slack",
    description: "For all the communications, updates, feedbacks and reviews!",
    icon: "/images/slack.svg",
    color: "blue"
  },
  {
    id: 2,
    name: "Notion",
    description: "For the project management and scheduling scheduling",
    icon: "/images/notion.svg",
    color: "purple"
  },
  {
    id: 3,
    name: "WhatsApp",
    description: "For Direct Communication if its urgent for you then",
    icon: "/images/whatsapp.svg",
    color: "green"
  }
];
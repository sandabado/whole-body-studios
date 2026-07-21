import {
  Camera,
  Landmark,
  Newspaper,
  Scale,
  Disc3,
  Globe,
  type LucideIcon,
} from "lucide-react";

export type AppStatus = "HERE" | "ACTIVE" | "LOCKED" | "INVESTOR";

export interface ConstellationApp {
  name: string;
  icon: LucideIcon;
  status: AppStatus;
  url: string;
  subtitle: string;
}

export const constellationApps: ConstellationApp[] = [
  {
    name: "Presence",
    icon: Camera,
    status: "LOCKED",
    url: "#",
    subtitle: "Q1 2027",
  },
  {
    name: "Foundation",
    icon: Landmark,
    status: "LOCKED",
    url: "#",
    subtitle: "Q1 2027",
  },
  {
    name: "Press",
    icon: Newspaper,
    status: "LOCKED",
    url: "#",
    subtitle: "Q1 2027",
  },
  {
    name: "Law",
    icon: Scale,
    status: "LOCKED",
    url: "#",
    subtitle: "Q1 2027",
  },
  {
    name: "Studios",
    icon: Disc3,
    status: "HERE",
    url: "/",
    subtitle: "Current",
  },
];

export const investorPortal: ConstellationApp = {
  name: "wholebody.earth",
  icon: Globe,
  status: "INVESTOR",
  url: "https://wholebody.earth",
  subtitle: "Investor Pitch",
};

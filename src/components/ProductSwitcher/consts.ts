export type AppStatus = "HERE" | "ACTIVE" | "LOCKED" | "INVESTOR";

export interface ConstellationApp {
  name: string;
  icon: string;
  element: string;
  status: AppStatus;
  url: string;
  subtitle: string;
}

export const constellationApps: ConstellationApp[] = [
  {
    name: "Presence",
    icon: "\u{1F702}", // 🜂 Fire
    element: "FIRE",
    status: "LOCKED",
    url: "#",
    subtitle: "Q1 2027",
  },
  {
    name: "Foundation",
    icon: "\u{1F703}", // 🜃 Earth
    element: "EARTH",
    status: "LOCKED",
    url: "#",
    subtitle: "Q1 2027",
  },
  {
    name: "Press",
    icon: "\u{1F701}", // 🜁 Air
    element: "AIR",
    status: "LOCKED",
    url: "#",
    subtitle: "Q1 2027",
  },
  {
    name: "Law",
    icon: "\u{2609}", // ☉ Ether/Sun
    element: "ETHER",
    status: "LOCKED",
    url: "#",
    subtitle: "Q1 2027",
  },
  {
    name: "Studios",
    icon: "\u{1F704}", // 🜄 Water
    element: "WATER",
    status: "HERE",
    url: "/",
    subtitle: "Current",
  },
];

export const investorPortal: ConstellationApp = {
  name: "wholebody.earth",
  icon: "\u{1F30D}", // 🌍
  element: "INVESTOR",
  status: "INVESTOR",
  url: "https://wholebody.earth",
  subtitle: "Investor Pitch",
};

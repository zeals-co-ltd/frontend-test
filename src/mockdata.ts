interface Bot {
  id: string;
  name: string;
  channel: string;
  userCount: number;
  tags?: string[];
}

export const botList: Bot[] = [
  {
    id: "1",
    name: "Hamasaki",
    channel: "line",
    userCount: 2_000,
    tags: ["fishing", "Michiko-san"],
  },
  {
    id: "2",
    name: "Suzuki",
    channel: "instagram",
    userCount: 80_000,
    tags: ["construction", "fishing"],
  },
  {
    id: "3",
    name: "Hachiro",
    channel: "facebook",
    userCount: 200,
  },
  {
    id: "4",
    name: "Michiko",
    channel: "whatsapp",
    userCount: 12_420,
  },
  {
    id: "5",
    name: "Koitaro",
    channel: "line",
    userCount: 20,
  },
  {
    id: "6",
    name: "Sasaki",
    channel: "instagram",
    userCount: 132_670_821,
  },
  {
    id: "7",
    name: "Maehara",
    channel: "line",
    userCount: 0,
  },
];

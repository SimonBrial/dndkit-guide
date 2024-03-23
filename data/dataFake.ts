import { DNDType } from "@/interface/interface";

export const dataFake: DNDType[] = [
  {
    id: `container-${crypto.randomUUID()}`,
    title: "container 1",
    items: [{ id: `item-${crypto.randomUUID()}`, title: "title 1-1" }],
  },
  {
    id: `container-${crypto.randomUUID()}`,
    title: "container 2",
    items: [
      { id: `item-${crypto.randomUUID()}`, title: "title 2-1" },
      { id: `item-${crypto.randomUUID()}`, title: "title 2-2" },
    ],
  },
  {
    id: `container-${crypto.randomUUID()}`,
    title: "container 3",
    items: [
      { id: `item-${crypto.randomUUID()}`, title: "title 3-1" },
      { id: `item-${crypto.randomUUID()}`, title: "title 3-2" },
      { id: `item-${crypto.randomUUID()}`, title: "title 3-3" },
    ],
  },
  {
    id: `container-${crypto.randomUUID()}`,
    title: "container 4",
    items: [
      { id: `item-${crypto.randomUUID()}`, title: "title 4-1" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-2" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-3" },
      { id: `item-${crypto.randomUUID()}`, title: "title 4-4" },
    ],
  },
]
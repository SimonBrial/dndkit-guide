interface itemsDataFake {
  id: string;
  title: string;
  description: string;
  container: string | number;
}

export const itemsDataFake: itemsDataFake[] = [
  {
    id: crypto.randomUUID(),
    title: "Title 1",
    description: "Description 1",
    container: 1
  },
  {
    id: crypto.randomUUID(),
    title: "Title 2",
    description: "Description 2",
    container: 4
  },
  {
    id: crypto.randomUUID(),
    title: "Title 3",
    description: "Description 3",
    container: 2
  },
  {
    id: crypto.randomUUID(),
    title: "Title 4",
    description: "Description 4",
    container: 2
  },
  {
    id: crypto.randomUUID(),
    title: "Title 5",
    description: "Description 5",
    container: 2
  },
  {
    id: crypto.randomUUID(),
    title: "Title 6",
    description: "Description 6",
    container: 3
  },
  {
    id: crypto.randomUUID(),
    title: "Title 7",
    description: "Description 7",
    container: 3
  },
  {
    id: crypto.randomUUID(),
    title: "Title 8",
    description: "Description 8",
    container: 3
  },
  {
    id: crypto.randomUUID(),
    title: "Title 9",
    description: "Description 9",
    container: 4
  },
  {
    id: crypto.randomUUID(),
    title: "Title 10",
    description: "Description 10",
    container: 4
  },
];

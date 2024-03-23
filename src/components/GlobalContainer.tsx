"use client";

import React, { useState } from "react";
import ColumnContainer from "./ColumnContainer";
import { UniqueIdentifier } from "@dnd-kit/core";

interface DNDType {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
  };
}

export default function GlobalContainer() {
  const [container, setContainer] = useState([]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [currentcontainerId, setCurrentContainerId] = useState<UniqueIdentifier>()

  return (
    <section className="h-[95%] grid grid-cols-4 gap-4 p-2">
      <ColumnContainer nro={1} key={crypto.randomUUID()} />
      <ColumnContainer nro={2} key={crypto.randomUUID()} />
      <ColumnContainer nro={3} key={crypto.randomUUID()} />
      <ColumnContainer nro={4} key={crypto.randomUUID()} />
    </section>
  );
}

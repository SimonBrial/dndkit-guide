import React from "react";
import ColumnContainer from "./ColumnContainer";

export default function GlobalContainer() {
  return (
    <section className="h-[95%] grid grid-cols-4 gap-4 p-2">
      <ColumnContainer nro={1} key={crypto.randomUUID()}/>
      <ColumnContainer nro={2} key={crypto.randomUUID()}/>
      <ColumnContainer nro={3} key={crypto.randomUUID()}/>
      <ColumnContainer nro={4} key={crypto.randomUUID()}/>
    </section>
  );
}

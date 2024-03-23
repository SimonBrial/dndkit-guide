import React from "react";
import { Item } from "./Item";
import { itemsDataFake } from "@/data/dataItems";

export default function ColumnContainer({ nro }: { nro: number }) {
  return (
    <div className="">
      <h2 className="text-lg font-bold text-center">Container #{nro}</h2>
      <div className="shadow-md rounded-md border-2 border-slate-200 h-full  p-2">
        <div className="p-2 h-full rounded-md flex flex-col gap-2">
          {itemsDataFake.map((item, index) => {
            const { container, description, id, title } = item;
            return <Item description={description} title={title} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { RiDraggable } from "react-icons/ri";

export const Item = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-2 border-2 border-slate-200 shadow-sm p-2 rounded-md bg-slate-100">
      <span className="text-lg text-slate-500 rounded-md hover:bg-slate-200/80 transition-all py-3 px-[0.5px] hover:cursor-pointer">
        <RiDraggable />
      </span>
      <div className="flex flex-col gap-0 cursor-default">
        <h3 className="text-md text-sky-600 font-bold">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

import React from "react";
import ContainerProps from "./container.type";
import { useSortable } from "@dnd-kit/sortable";
import clsx from "clsx";
import { Button } from "../Button";
import { ScrollArea } from "@mantine/core";

const Container = ({
  description,
  children,
  title,
  id,
}: ContainerProps) => {
  const { setNodeRef, isDragging } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });
  return (
    <div
      ref={setNodeRef}
      className={clsx(
        "w-full h-[25rem] p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4",
        isDragging && "opacity-50",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 text-xl">{title}</h1>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      <ScrollArea h={250} scrollbarSize={2}>
        {children}
      </ScrollArea>
    </div>
  );
};

export default Container;

import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { RiDraggable } from "react-icons/ri";

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
};

const Items = ({ id, title }: ItemsType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "px-2 py-4 bg-white shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer",
        isDragging && "opacity-50",
      )}
    >
      <div className="flex items-center justify-between gap-2 px-2">
        <div className="flex gap-2 items-center">
          <span
            {...listeners}
            className="py-3 px-1 hover:bg-slate-100 transition-all rounded-md"
          >
            <RiDraggable />
          </span>
          {title}
        </div>
        <button
          className="border-2 border-sky-300 bg-sky-100 rounded-md px-3 py-1 font-bold text-sky-500 hover:bg-sky-200 transition-all"
          onClick={() => alert(`Id --> ${id}`)}
        >
          modal
        </button>
      </div>
    </div>
  );
};

export default Items;

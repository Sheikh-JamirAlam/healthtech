"use client";

import { Icon } from "@iconify/react";

interface PropType {
  size: string;
}

export function ArrowButton({ size }: PropType): JSX.Element {
  return (
    <>
      <div className="w-[20px] h-[20px] rounded-full absolute right-[2px] z-0 hovering" />
      <Icon className="w-6 h-6 z-10" icon="uit:arrow-circle-right" />
    </>
  );
}

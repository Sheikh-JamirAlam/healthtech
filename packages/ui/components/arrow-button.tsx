"use client";

import { Icon } from "@iconify/react";

interface PropType {
  size: string;
}

export function ArrowButton({ size }: PropType): JSX.Element {
  return (
    <div className={`w-${size} h-${size} rounded-full border-2 border-primary-blue flex justify-center items-center transition-all hovering-icon`}>
      <Icon className="w-[100%] h-[100%] transition-all" icon="material-symbols:arrow-forward" />
    </div>
  );
}

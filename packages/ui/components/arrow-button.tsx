"use client";

import { Icon } from "@iconify/react";

interface PropType {
  size: string;
}

export function ArrowButton({ size }: PropType): JSX.Element {
  return <Icon className={`text-${size}`} icon="uit:arrow-circle-right" />;
}

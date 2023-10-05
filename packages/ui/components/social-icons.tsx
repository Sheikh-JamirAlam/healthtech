"use client";

import { Icon } from "@iconify/react";

export function SocialIcons(): JSX.Element {
  return (
    <div className="flex gap-6 text-2xl">
      <Icon className="hover:text-primary-blue transition-all duration-500 cursor-pointer" icon="mdi:twitter" />
      <Icon className="hover:text-primary-blue transition-all duration-500 cursor-pointer" icon="mdi:linkedin" />
    </div>
  );
}

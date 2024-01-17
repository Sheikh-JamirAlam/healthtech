"use client";

import { Icon } from "@iconify/react";

export function SocialIcons(): JSX.Element {
  return (
    <div className="flex gap-6 text-2xl">
      <a href="https://twitter.com/healthtech_1" target="_blank" rel="noopener">
        <Icon className="hover:text-primary-blue transition-all duration-500 cursor-pointer" icon="mdi:twitter" />
      </a>
      <a href="https://www.linkedin.com/company/healthtech-1" target="_blank" rel="noopener">
        <Icon className="hover:text-primary-blue transition-all duration-500 cursor-pointer" icon="mdi:linkedin" />
      </a>
    </div>
  );
}

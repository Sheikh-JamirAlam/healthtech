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

export function Registration(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="material-symbols:app-registration" />
    </div>
  );
}

export function BloodTest(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="streamline:checkup-medical-report-clipboard" />
    </div>
  );
}

export function Triage(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="fluent:patient-32-filled" />
    </div>
  );
}

export function CaseStudy(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="mdi:clipboard-text-search-outline" />
    </div>
  );
}

export function PracticeLove(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="mdi:hand-heart-outline" />
    </div>
  );
}

export function AboutUs(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="fluent:people-chat-20-regular" />
    </div>
  );
}

export function OpenRoles(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="material-symbols:person-search-outline-rounded" />
    </div>
  );
}

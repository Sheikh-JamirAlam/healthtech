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

export function LabReports(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="streamline:checkup-medical-report-clipboard" />
    </div>
  );
}

export function Triage(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="bi:file-medical" />
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
      <Icon className="text-darker-blue transition-all" icon="ph:hand-heart-bold" />
    </div>
  );
}

export function Team(): JSX.Element {
  return (
    <div className="text-2xl ml-3">
      <Icon className="text-darker-blue transition-all" icon="akar-icons:people-group" />
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

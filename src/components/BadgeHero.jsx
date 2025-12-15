import React from "react";
import { Sparkles } from "lucide-react";

export default function BadgeHero({ title }) {
  return (
    <div>
      <div className="flex flex-row items-center gap-2 rounded-full border border-blue-600 bg-blue-50 px-4 py-2 w-fit shadow-sm">
        <Sparkles className="w-5 h-5 text-blue-600" />
        <span className="text-blue-700 text-sm font-semibold">{title}</span>
      </div>
    </div>
  );
}

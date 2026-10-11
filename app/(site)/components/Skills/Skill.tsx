"use client";
import DynamicIcon from "@/lib/icons";
import type { Skill as SkillType } from "@/types/Skill";

function darkenColor(color: string, amount: number = 0.3): string {
  // Remove # if present
  const hex = color.replace("#", "");

  // Parse the hex color
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Darken each component
  const darkenedR = Math.max(0, Math.floor(r * (1 - amount)));
  const darkenedG = Math.max(0, Math.floor(g * (1 - amount)));
  const darkenedB = Math.max(0, Math.floor(b * (1 - amount)));

  // Convert back to hex
  return `#${darkenedR.toString(16).padStart(2, "0")}${darkenedG.toString(16).padStart(2, "0")}${darkenedB.toString(16).padStart(2, "0")}`;
}

function Skill({ skill }: { skill: SkillType }) {
  return (
    <div
      className="flex items-center justify-center py-[3px] px-[6px] rounded-base gap-[8px] whitespace-nowrap font-medium transition-all text-[0.9rem] border hover:scale-[1.02]"
      style={{
        backgroundColor: skill.color ? `#${skill.color}35` : undefined,
        color: skill.color ? darkenColor(`#${skill.color}`, 0.3) : undefined,
        borderColor: skill.color ? `${darkenColor(`#${skill.color}`, 0.3)}80` : undefined,
      }}>
      <DynamicIcon name={skill.icon} className="w-[0.9rem] h-[0.9rem] shrink-0" />
      <span>{skill.name}</span>
    </div>
  );
}

export default Skill;

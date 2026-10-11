import Skill from "./Skill";
import type { SkillGroup as SkillGroupType } from "@/types/SkillGroup";

function SkillGroup({ skillGroup }: { skillGroup: SkillGroupType }) {
  return (
    <div className="rounded-base border border-border shadow-card bg-light-primary select-none p-[25px] transition-all hover:bg-light-secondary hover:border-border-muted md:flex-[1_1_calc(50%-15px)] md:min-w-0">
      <h3 className="mb-[1.2rem]">{skillGroup.name}</h3>
      <div className="flex flex-wrap gap-[0.4rem]">
        {skillGroup.skills.map((skill) => {
          return <Skill key={skill._id} skill={skill} />;
        })}
      </div>
    </div>
  );
}

export default SkillGroup;

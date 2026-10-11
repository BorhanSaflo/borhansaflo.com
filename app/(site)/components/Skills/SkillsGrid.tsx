import SkillGroupComponent from "./SkillGroup";
import { SkillGroup } from "@/types/SkillGroup";

interface Props {
  skills: SkillGroup[];
}

function SkillsGrid({ skills }: Props) {
  return (
    <div className="flex flex-col gap-4 w-full md:flex-row md:flex-wrap">
      {skills.map((skillGroup) => {
        return <SkillGroupComponent key={skillGroup._id} skillGroup={skillGroup} />;
      })}
    </div>
  );
}

export default SkillsGrid;

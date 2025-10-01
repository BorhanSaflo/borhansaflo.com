export interface Skill extends SkillBody {
  _id: string;
  _type: "skill";
}

export type SkillBody = {
  name: string;
  icon: string;
  color: string;
};

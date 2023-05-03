import { Skill } from "./Skill";

export interface SkillGroup extends SkillGroupBody {
  _id: string;
  _type: "skillGroup";
  _createdAt: string;
  _updatedAt: string;
  order: number;
}
export type SkillGroupBody = {
  name: string;
  skills: Skill[];
};

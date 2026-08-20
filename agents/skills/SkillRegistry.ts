import { CodeEditSkill } from './CodeEditSkill';
import { WebSearchSkill } from './WebSearchSkill';

export type SkillInstance = CodeEditSkill | WebSearchSkill;

export class SkillRegistry {
  private skills: Map<string, SkillInstance>;

  constructor() {
    this.skills = new Map();
    this.register(new CodeEditSkill());
    this.register(new WebSearchSkill());
  }

  register(skill: SkillInstance): void {
    // @ts-expect-error name exists on all skills
    this.skills.set(skill.name, skill);
  }

  get(name: string): SkillInstance | undefined {
    return this.skills.get(name);
  }
}

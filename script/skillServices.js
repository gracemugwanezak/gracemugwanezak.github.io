export class SkillService {
  static getSkills = async () => {
    return await fetch("https://brand-backend-nrbf.onrender.com/skills");
  };
  static createSkill = async (skill) => {
    return await fetch("https://brand-backend-nrbf.onrender.com/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skill),
    });
  };
  static getSkillsByCategory = async (category) => {
    return await fetch(
      `https://brand-backend-nrbf.onrender.com/skills/filter/${category}`
    );
  };
}

export class EducationService {
  static getEducationInfo() {
    return fetch("https://brand-backend-nrbf.onrender.com/education");
  }
}

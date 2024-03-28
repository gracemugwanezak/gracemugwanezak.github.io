import { SkillService, EducationService } from "./skillServices.js";
document.addEventListener("DOMContentLoaded", async () => {
  const technicalResponse = await SkillService.getSkillsByCategory("Technical");
  const softResponse = await SkillService.getSkillsByCategory("Soft");
  if (technicalResponse.ok) {
    const technicalSkillsContainer =
      document.querySelector(".technical__skills");
    const { filteredSkills } = await technicalResponse.json();
    if (filteredSkills.length > 0) {
      filteredSkills.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill.name;
        technicalSkillsContainer.appendChild(li);
      });
    }
  }
  if (softResponse.ok) {
    const softContainer = document.querySelector(".soft__skills");
    const { filteredSkills } = await softResponse.json();
    if (filteredSkills.length > 0) {
      filteredSkills.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill.name;
        softContainer.appendChild(li);
      });
    }
  }

  //  handling the education section
  const educationResponse = await EducationService.getEducationInfo();
  if (educationResponse.ok) {
    const education__container = document.querySelector(
      ".education__container"
    );
    const resp = await educationResponse.json();
    if (resp.length > 0) {
      resp.forEach((el) => {
        const li = document.createElement("li");
        li.textContent = el.name;
        education__container.appendChild(li);
      });
    }
  }
});

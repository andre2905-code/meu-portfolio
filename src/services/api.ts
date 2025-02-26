const API_URL = "https://api.cosmicjs.com/v3/buckets/meu-portfolio-production-0dd27100-d3a3-11ef-8df0-1b5de07d528d/objects";

function getObjectsUrl(type: string): string {
  const params = new URLSearchParams({
    pretty: "true",
    limit: "10",
    skip: "0",
    read_key: "nXIkyNIhudxS6hyXi0VP5LNzQGSBtVokEhCcBfynoaN9kguOUb",
    depth: "1",
    props: "slug,title,metadata,type",
    query: JSON.stringify({ type }), // Transforma `{ type }` em uma string JSON
  });

  return `${API_URL}?${params.toString()}`;
}

const hardSkillsUrl = getObjectsUrl("hard-skills");
const projectsUrl = getObjectsUrl("projects");

export async function getProjects() {
  const response = await fetch(projectsUrl);
  const projects = await response.json();
  return projects.objects;
}

export const getHardSkills = async () => {
  const response = await fetch(hardSkillsUrl);
  const hardSkills = await response.json();
  return hardSkills.objects;
}

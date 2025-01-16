const API_URL =
  "https://api.cosmicjs.com/v3/buckets/meu-portfolio-production-0dd27100-d3a3-11ef-8df0-1b5de07d528d/objects?pretty=true&query=%7B%22type%22:%22projects%22%7D&limit=10&skip=0&read_key=nXIkyNIhudxS6hyXi0VP5LNzQGSBtVokEhCcBfynoaN9kguOUb&depth=1&props=slug,title,metadata,type,";

export async function getProjects() {
  const response = await fetch(API_URL);
  const projects = await response.json();
  return projects.objects;
}

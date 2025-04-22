import { IconType } from "react-icons";

export interface HardSkill {
  slug: string;
  title: string;
  type: string;
  metadata: {
    icon_name: IconType;     
  };
}

export interface Project {
	name: string;
	html_url: string;
	languages_url: string;
	
}
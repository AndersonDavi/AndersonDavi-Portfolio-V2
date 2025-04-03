export interface tecnologieCard{
  title: string;
  img: string;
}
export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  demo_url?: string;
  code_url?: string;
  mockup_url?: string;
  bg_img: string;
  logo_img?: string;
  technologies: tecnologieCard[];
  colors: string[];
  alt_imgs: string[];
}

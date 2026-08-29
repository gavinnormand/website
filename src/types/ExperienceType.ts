export interface ExperienceType {
  title: string;
  company: string;
  startDate: string;
  endDate: string | undefined;
  location: string;
  logo: {
    src: string;
    link: string;
  };
  description: string;
}

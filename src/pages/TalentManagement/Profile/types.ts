/**
 * TypeScript interfaces for Profile Page
 */

export interface ProfileUser {
  id: string;
  name: string;
  initials: string;
  title: string;
  pronouns: string;
  location: string;
  localTime: string;
  openToMentoring: boolean;
  avatarUrl?: string;
  about: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface Language {
  name: string;
  proficiency: string;
  level: number;
}

export interface MobilityPreference {
  label: string;
  value: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  skills: string[];
  iconColor: string;
}

export interface Manager {
  name: string;
  title: string;
  company: string;
  initials: string;
  avatarUrl?: string;
}

export interface Peer {
  id: string;
  name: string;
  initials: string;
  avatarUrl?: string;
}

export interface ContactLink {
  type: 'linkedin' | 'phone' | 'email';
  label: string;
  value: string;
  url?: string;
}

export interface Resume {
  id: string;
  filename: string;
  date: string;
  icon: string;
}

export interface EmployeeInfo {
  employeeId: string;
  businessUnit: string;
}

export interface ProfileData {
  user: ProfileUser;
  skills: Skill[];
  languages: Language[];
  mobility: MobilityPreference[];
  projects: Project[];
  manager: Manager;
  peers: Peer[];
  employeeInfo: EmployeeInfo;
  contactLinks: ContactLink[];
  resumes: Resume[];
}


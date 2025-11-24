export interface Person {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  avatar?: string;
  initials: string;
  manager: string;
  managerTitle: string;
  businessUnit: string;
  location: string;
  mentoringStatus: 'open' | 'not-available' | 'unavailable';
  connectionInfo?: string;
  participationInfo?: string;
  coffeeChat?: boolean;
}

export interface SearchFilters {
  searchQuery: string;
  locationQuery: string;
  skills?: string[];
  title?: string;
  workExperience?: string;
  businessUnit?: string;
  mentoring?: boolean;
}


import { ProfileData } from './types';

export const mockProfileData: ProfileData = {
  user: {
    id: '1',
    name: 'Sam Taylor',
    initials: 'ST',
    title: 'Senior UX Designer',
    pronouns: 'She/Her/Hers',
    location: 'Santa Clara, CA',
    localTime: '5:39 PM PDT',
    openToMentoring: true,
    avatarUrl: '/a8d12bf9dcce1b1fd1fd45acf4f5b1945f34d90f.png',
    about: "I'm passionate about people and optimizing work for them. My background is in HRTech but I am also learning AI and other business unit's technology so I can help them optimize operations.",
  },
  skills: [
    { id: '1', name: 'Deep learning' },
    { id: '2', name: 'Cloud database' },
    { id: '3', name: 'Big data' },
    { id: '4', name: 'Machine learning' },
    { id: '5', name: 'Python programming' },
    { id: '6', name: 'Methodology' },
  ],
  languages: [
    { name: 'English', proficiency: '5 – Native / Bilingual Proficiency', level: 5 },
    { name: 'Spanish', proficiency: '4 – Full Professional Proficiency', level: 4 },
  ],
  mobility: [
    { label: 'Willing to relocate', value: 'Willing to Relocate', icon: 'mdiPlus' },
    { label: 'Yes', value: 'Willing to Travel', icon: 'mdiAirplane' },
  ],
  projects: [
    {
      id: '1',
      title: 'Evaluation team next gen AI',
      date: 'Jan 2024',
      skills: ['Deep learning', 'Cloud database', 'Big data', 'Machine learning', 'Python programming', 'Methodology'],
      iconColor: '#054D7B',
    },
    {
      id: '2',
      title: 'Evaluation team next gen AI',
      date: 'Jan 2024',
      skills: ['Deep learning', 'Cloud database', 'Big data', 'Machine learning', 'Python programming', 'Methodology'],
      iconColor: '#054D7B',
    },
    {
      id: '3',
      title: 'Evaluation team next gen AI',
      date: 'Jan 2024',
      skills: ['Deep learning', 'Cloud database', 'Big data', 'Machine learning', 'Python programming', 'Methodology'],
      iconColor: '#054D7B',
    },
  ],
  manager: {
    name: 'Chris Anderson',
    title: 'UX Designer',
    company: 'Acme Corp',
    initials: 'CA',
  },
  peers: [
    { id: '1', name: 'Mia', initials: 'M' },
    { id: '2', name: 'Isabella', initials: 'I' },
    { id: '3', name: 'Amelia', initials: 'A' },
    { id: '4', name: 'Mary', initials: 'M' },
    { id: '5', name: 'Sanjana', initials: 'S' },
  ],
  employeeInfo: {
    employeeId: '992',
    businessUnit: 'HR',
  },
  contactLinks: [
    { type: 'linkedin', label: 'LinkedIn', value: 'http://linkedin.com/in/samtaylor', url: 'http://linkedin.com/in/samtaylor' },
    { type: 'phone', label: 'Phone', value: '(555) 123-4567' },
    { type: 'email', label: 'Email', value: 'staylor@acme.com' },
  ],
  resumes: [
    { id: '1', filename: 'pdf-sample.pdf', date: 'Nov 23, 2025', icon: 'mdiFilePdfBox' },
    { id: '2', filename: 'Resume_Sample.docx', date: 'Oct 29 2024', icon: 'mdiFileWord' },
  ],
};

import type { ATSProviderInfo, Job, CandidatesByType, DeployLog } from './types';

/**
 * ATS Provider Data with local logos
 * Files are in public/images/ats-logos/
 */
export const ATS_PROVIDERS: ATSProviderInfo[] = [
  { id: 'greenhouse', name: 'Greenhouse', logo: './images/ats-logos/greenhouse.jpg' },
  { id: 'lever', name: 'Lever', logo: './images/ats-logos/lever.png' },
  { id: 'workday', name: 'Workday', logo: './images/ats-logos/workday.png' },
  { id: 'icims', name: 'iCIMS', logo: './images/ats-logos/iCIMS.png' },
  { id: 'ashby', name: 'Ashby', logo: './images/ats-logos/ashby.png' },
  { id: 'smartrecruiters', name: 'SmartRecruiters', logo: './images/ats-logos/smartrecruiters.png' },
];

/**
 * Job Requisitions Data
 */
export const JOBS_DATA: Job[] = [
  { 
    id: 'network', 
    title: 'Network Engineer', 
    location: 'San Jose, CA', 
    type: 'Hybrid', 
    req: 'NE-2841', 
    skills: ['BGP', 'OSPF', 'Cisco', 'Juniper', 'Python'], 
    experience: '5–8 years' 
  },
  { 
    id: 'backend', 
    title: 'Backend Engineer', 
    location: 'Remote', 
    type: 'Remote', 
    req: 'BE-1092', 
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS'], 
    experience: '3–5 years' 
  },
  { 
    id: 'designer', 
    title: 'Product Designer', 
    location: 'New York, NY', 
    type: 'On-site', 
    req: 'PD-2201', 
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'], 
    experience: '4–6 years' 
  },
  { 
    id: 'frontend', 
    title: 'Frontend Engineer', 
    location: 'Austin, TX', 
    type: 'Hybrid', 
    req: 'FE-3301', 
    skills: ['React', 'TypeScript', 'CSS', 'GraphQL'], 
    experience: '3–5 years' 
  },
  { 
    id: 'devops', 
    title: 'DevOps Engineer', 
    location: 'Seattle, WA', 
    type: 'Remote', 
    req: 'DO-1455', 
    skills: ['Kubernetes', 'Terraform', 'CI/CD', 'AWS'], 
    experience: '4–7 years' 
  },
  { 
    id: 'data', 
    title: 'Data Scientist', 
    location: 'Boston, MA', 
    type: 'Hybrid', 
    req: 'DS-2890', 
    skills: ['Python', 'ML', 'SQL', 'TensorFlow'], 
    experience: '3–6 years' 
  },
  { 
    id: 'security', 
    title: 'Security Engineer', 
    location: 'Remote', 
    type: 'Remote', 
    req: 'SE-1122', 
    skills: ['Penetration Testing', 'SIEM', 'Cloud Security'], 
    experience: '5–8 years' 
  },
  { 
    id: 'pm', 
    title: 'Product Manager', 
    location: 'San Francisco, CA', 
    type: 'Hybrid', 
    req: 'PM-4401', 
    skills: ['Roadmapping', 'Analytics', 'Agile', 'SQL'], 
    experience: '4–7 years' 
  },
  { 
    id: 'mobile', 
    title: 'Mobile Engineer', 
    location: 'Los Angeles, CA', 
    type: 'On-site', 
    req: 'ME-5502', 
    skills: ['Swift', 'Kotlin', 'React Native', 'Firebase'], 
    experience: '3–5 years' 
  },
  { 
    id: 'qa', 
    title: 'QA Engineer', 
    location: 'Denver, CO', 
    type: 'Remote', 
    req: 'QA-6603', 
    skills: ['Selenium', 'Cypress', 'API Testing', 'Python'], 
    experience: '2–4 years' 
  }
];

/**
 * Mock Candidates Data
 */
export const CANDIDATES: CandidatesByType = {
  internal: [
    { 
      name: 'Priya Nair', 
      title: 'IT Network Specialist', 
      company: 'Acme Corp', 
      score: 92, 
      skills: ['Cisco', 'OSPF', 'Python'], 
      why: 'Strong match on core networking skills with 6 years experience. Previously worked on similar BGP implementations and has Python automation expertise.' 
    },
    { 
      name: 'Daniel Kim', 
      title: 'Network Analyst', 
      company: 'Acme Corp', 
      score: 88, 
      skills: ['BGP', 'Juniper', 'Wireshark'], 
      why: 'Extensive BGP knowledge and Juniper certification. Has led network troubleshooting initiatives using Wireshark analysis.' 
    },
    { 
      name: 'Asha Iyer', 
      title: 'Systems Engineer', 
      company: 'Acme Corp', 
      score: 84, 
      skills: ['Routing', 'VLANs', 'Automation'], 
      why: 'Solid routing fundamentals with hands-on VLAN experience. Built automation scripts for network configuration management.' 
    }
  ],
  external: [
    { 
      name: 'Miguel Santos', 
      title: 'Network Engineer', 
      company: 'CloudCo', 
      score: 91, 
      skills: ['BGP', 'Juniper', 'Terraform'], 
      why: 'Senior network engineer with cloud infrastructure experience. Expert in BGP peering and infrastructure-as-code with Terraform.' 
    },
    { 
      name: 'Sarah Chen', 
      title: 'Sr Network Engineer', 
      company: 'NetSpan', 
      score: 89, 
      skills: ['Cisco', 'OSPF', 'Python'], 
      why: 'Lead engineer managing enterprise Cisco deployments. Created Python-based network automation tools used by 50+ engineers.' 
    },
    { 
      name: 'Rohan Mehta', 
      title: 'Network Automation', 
      company: 'SwitchWorks', 
      score: 86, 
      skills: ['Ansible', 'Python', 'BGP'], 
      why: 'Specializes in network automation at scale. Built Ansible playbooks for BGP configuration across 200+ routers.' 
    },
    { 
      name: 'Lena Fischer', 
      title: 'Network Engineer', 
      company: 'InfraLabs', 
      score: 83, 
      skills: ['MPLS', 'Routing', 'Juniper'], 
      why: 'Deep MPLS expertise with Juniper certifications. Designed multi-site routing architectures for Fortune 500 clients.' 
    },
    { 
      name: 'Omar Ali', 
      title: 'Network Engineer', 
      company: 'EdgeGrid', 
      score: 81, 
      skills: ['Cisco', 'SD-WAN', 'OSPF'], 
      why: 'Experience with modern SD-WAN deployments alongside traditional OSPF networks. Cisco certified professional.' 
    }
  ]
};

/**
 * Deploy Log Messages
 */
export const DEPLOY_LOGS: DeployLog[] = [
  { time: '00:00', text: 'Initializing agent runtime...', type: 'info' },
  { time: '00:01', text: 'Validating ATS connection', type: 'info' },
  { time: '00:02', text: 'ATS connection verified', type: 'success' },
  { time: '00:03', text: 'Loading requisition schema', type: 'info' },
  { time: '00:04', text: 'Schema loaded successfully', type: 'success' },
  { time: '00:05', text: 'Activating internal talent index...', type: 'info' },
  { time: '00:06', text: 'Activating external talent index...', type: 'info' },
  { time: '00:07', text: 'Internal index ready (scanning 2,847 profiles)', type: 'success' },
  { time: '00:08', text: 'External index ready (access to 1.2M profiles)', type: 'success' },
  { time: '00:09', text: 'Compiling search policy with guardrails...', type: 'info' },
  { time: '00:10', text: 'Policy compiled: threshold active, explainability ON', type: 'success' },
  { time: '00:11', text: 'Starting agent runtime...', type: 'info' },
  { time: '00:12', text: 'Agent is now DEPLOYED', type: 'success' }
];

/**
 * Default wizard state
 */
export const DEFAULT_WIZARD_STATE = {
  step: 1,
  atsProvider: null,
  connected: false,
  selectedJobs: [],
  urgency: 'normal' as const,
  sources: { internal: true, external: true },
  triggers: { applicants: true, daily: true, threshold: false },
  cadence: 'daily' as const,
  threshold: 82,
  guardrails: { sensitive: true, relevant: true, explain: true },
  syncConfig: { requisitions: true, candidates: true, twoWay: true, realtime: false },
  deployed: false
};


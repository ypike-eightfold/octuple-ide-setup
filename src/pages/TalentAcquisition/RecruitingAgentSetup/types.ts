/**
 * Types for the Recruiting Agent Setup Wizard
 */

// ATS Provider types
export type ATSProvider = 'greenhouse' | 'lever' | 'workday' | 'icims' | 'ashby' | 'smartrecruiters';

export interface ATSProviderInfo {
  id: ATSProvider;
  name: string;
  logo: string; // Logo image URL
}

// Job/Requisition types
export interface Job {
  id: string;
  title: string;
  location: string;
  type: 'Remote' | 'Hybrid' | 'On-site';
  req: string;
  skills: string[];
  experience: string;
}

// Candidate types
export interface Candidate {
  name: string;
  title: string;
  company: string;
  score: number;
  skills: string[];
  why: string;
}

export interface CandidatesByType {
  internal: Candidate[];
  external: Candidate[];
}

// Configuration types
export interface SourceConfig {
  internal: boolean;
  external: boolean;
}

export interface TriggerConfig {
  applicants: boolean;
  daily: boolean;
  threshold: boolean;
}

export interface GuardrailConfig {
  sensitive: boolean;
  relevant: boolean;
  explain: boolean;
}

export interface SyncConfig {
  requisitions: boolean;
  candidates: boolean;
  twoWay: boolean;
  realtime: boolean;
}

export type Cadence = 'daily' | 'twice' | 'always';
export type Urgency = 'normal' | 'high' | 'critical';

// Wizard state
export interface WizardState {
  step: number;
  atsProvider: ATSProvider | null;
  connected: boolean;
  selectedJobs: string[];
  urgency: Urgency;
  sources: SourceConfig;
  triggers: TriggerConfig;
  cadence: Cadence;
  threshold: number;
  guardrails: GuardrailConfig;
  syncConfig: SyncConfig;
  deployed: boolean;
}

// Step component props
export interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
  onNext: () => void;
  onBack: () => void;
}

// Deploy checklist item
export interface ChecklistItem {
  id: string;
  text: string;
  status: 'pending' | 'active' | 'completed';
}

// Deploy log entry
export interface DeployLog {
  time: string;
  text: string;
  type: 'info' | 'success' | 'warn';
}


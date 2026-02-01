import React, { useState, useMemo, useEffect } from 'react';
import { 
  Button, ButtonVariant, CheckBox, TextInput, TextInputIconAlign, Badge, Select, IconName
} from '@eightfold.ai/octuple';
import { mdiMagnify } from '@mdi/js';
import type { StepProps, Urgency } from '../types';
import { JOBS_DATA } from '../mockData';

/**
 * Step 2: Select Jobs
 * 
 * User can search and multi-select job requisitions for the agent.
 * Shows a summary of selected jobs and details panel.
 */
export const StepJobs: React.FC<StepProps> = ({ state, setState, onNext, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Ensure step is at least 2 when this view is active
  useEffect(() => {
    if (state.step < 2) {
      setState(prev => ({ ...prev, step: 2 }));
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/cc9a168e-9323-49d8-a0cf-b7c2e0725521', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: 'debug-session',
          runId: 'run-stepjobs',
          hypothesisId: 'H4',
          location: 'StepJobs.tsx:useEffect',
          message: 'Elevated step to 2 on mount',
          data: { prevStep: state.step },
          timestamp: Date.now()
        })
      }).catch(() => {});
      // #endregion
      console.log('[run-stepjobs][H4] Elevated step to 2 on mount', { prevStep: state.step });
    } else {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/cc9a168e-9323-49d8-a0cf-b7c2e0725521', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: 'debug-session',
          runId: 'run-stepjobs',
          hypothesisId: 'H4',
          location: 'StepJobs.tsx:useEffect',
          message: 'Step already >= 2',
          data: { step: state.step },
          timestamp: Date.now()
        })
      }).catch(() => {});
      // #endregion
      console.log('[run-stepjobs][H4] Step already >= 2', { step: state.step });
    }
  }, [state.step, setState]);

  // Filter jobs based on search
  const filteredJobs = useMemo(() => {
    if (!searchTerm.trim()) return JOBS_DATA;
    
    const term = searchTerm.toLowerCase();
    return JOBS_DATA.filter(job =>
      job.title.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term) ||
      job.type.toLowerCase().includes(term) ||
      job.req.toLowerCase().includes(term) ||
      job.skills.some(skill => skill.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  // Get selected jobs data
  const selectedJobsData = useMemo(() => {
    return state.selectedJobs.map(id => JOBS_DATA.find(j => j.id === id)).filter(Boolean);
  }, [state.selectedJobs]);

  // Combined skills from all selected jobs
  const combinedSkills = useMemo(() => {
    const allSkills = selectedJobsData.flatMap(j => j?.skills || []);
    return [...new Set(allSkills)];
  }, [selectedJobsData]);

  // Combined locations
  const locations = useMemo(() => {
    return [...new Set(selectedJobsData.map(j => j?.location).filter(Boolean))];
  }, [selectedJobsData]);

  const handleToggleJob = (jobId: string) => {
    setState(prev => {
      const isSelected = prev.selectedJobs.includes(jobId);
      return {
        ...prev,
        selectedJobs: isSelected
          ? prev.selectedJobs.filter(id => id !== jobId)
          : [...prev.selectedJobs, jobId]
      };
    });
  };

  const handleRemoveJob = (jobId: string) => {
    setState(prev => ({
      ...prev,
      selectedJobs: prev.selectedJobs.filter(id => id !== jobId)
    }));
  };

  const handleClearAll = () => {
    setState(prev => ({
      ...prev,
      selectedJobs: []
    }));
  };

  const handleUrgencyChange = (value: string) => {
    setState(prev => ({
      ...prev,
      urgency: value as Urgency
    }));
  };

  const urgencyOptions = [
    { value: 'normal', text: 'Normal' },
    { value: 'high', text: 'High' },
    { value: 'critical', text: 'Critical' }
  ];

  return (
    <div>
      {/* Step Header */}
      <div className="step-header">
        <h1 className="step-title">Choose requisitions for the agent</h1>
        <p className="step-subtitle">Select one or more jobs for the agent to optimize and search candidates for</p>
      </div>

      {/* Selection Summary (shown when jobs selected) */}
      {state.selectedJobs.length > 0 && (
        <div className="selection-summary">
          <div className="selection-header">
            <span className="selection-count">
              {state.selectedJobs.length} position{state.selectedJobs.length > 1 ? 's' : ''} selected
            </span>
            <span className="clear-selection" onClick={handleClearAll}>
              Clear all
            </span>
          </div>
          <div className="selected-jobs-list">
            {selectedJobsData.map(job => job && (
              <Badge 
                key={job.id} 
                style={{ marginRight: 8, cursor: 'pointer' }}
                onClick={() => handleRemoveJob(job.id)}
              >
                {job.title} ×
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Two Column Layout */}
      <div className="job-layout">
        {/* Left: Search and Job List */}
        <div>
          <TextInput
            placeholder="Search positions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            iconProps={{ path: mdiMagnify as IconName }}
            alignIcon={TextInputIconAlign.Left}
            clearable
            style={{ marginBottom: 16 }}
          />

          <div className="job-list">
            {filteredJobs.length === 0 ? (
              <div className="no-selection">No positions found matching your search</div>
            ) : (
              filteredJobs.map(job => (
                <div
                  key={job.id}
                  className={`job-item ${state.selectedJobs.includes(job.id) ? 'selected' : ''}`}
                  onClick={() => handleToggleJob(job.id)}
                >
                  <CheckBox
                    checked={state.selectedJobs.includes(job.id)}
                    onChange={() => {}}
                  />
                  <div className="job-content">
                    <div className="job-title">{job.title}</div>
                    <div className="job-meta">{job.location} • {job.type}</div>
                    <div className="job-req">Req #{job.req}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Job Details Panel */}
        <div>
          {state.selectedJobs.length > 0 ? (
            <div className="job-details-panel">
              <div className="details-title">Agent will optimize for</div>
              
              <div className="detail-row">
                <span className="detail-label">Combined skills</span>
                <div className="skills-list">
                  {combinedSkills.slice(0, 6).map(skill => (
                    <Badge key={skill} style={{ marginLeft: 4 }}>{skill}</Badge>
                  ))}
                  {combinedSkills.length > 6 && (
                    <Badge style={{ marginLeft: 4, background: '#e8e8e8' }}>+{combinedSkills.length - 6} more</Badge>
                  )}
                </div>
              </div>

              <div className="detail-row">
                <span className="detail-label">Positions</span>
                <span className="detail-value">
                  {state.selectedJobs.length} role{state.selectedJobs.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Locations</span>
                <span className="detail-value">{locations.join(', ')}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Hiring urgency</span>
                <Select
                  options={urgencyOptions}
                  defaultValue={state.urgency}
                  onOptionsChange={(options) => {
                    const selected = options.find(o => o.selected);
                    if (selected) handleUrgencyChange(selected.value as string);
                  }}
                  style={{ width: 120 }}
                />
              </div>
            </div>
          ) : (
            <div className="job-details-panel">
              <div className="no-selection">Select a position to see details</div>
            </div>
          )}
        </div>
      </div>

      {/* Step Footer */}
      <div className="step-footer">
        <Button
          text="Back"
          variant={ButtonVariant.Neutral}
          onClick={onBack}
        />
        <Button
          text={`Assign agent to ${state.selectedJobs.length > 1 ? state.selectedJobs.length + ' jobs' : 'job'}`}
          variant={ButtonVariant.Primary}
          onClick={onNext}
          disabled={state.selectedJobs.length === 0}
        />
      </div>
    </div>
  );
};

export default StepJobs;

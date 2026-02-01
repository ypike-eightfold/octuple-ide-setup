import React, { useState, useCallback } from 'react';
import { Button, ButtonVariant, Badge, IconName } from '@eightfold.ai/octuple';
import Icon from '@mdi/react';
import { mdiReplay, mdiPencil, mdiPlus, mdiCheck, mdiClipboardList } from '@mdi/js';
import type { StepProps, ChecklistItem } from '../types';
import { CANDIDATES } from '../mockData';
import { CandidateCard } from './CandidateCard';
import { DeployOverlay } from './DeployOverlay';

const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: 'check1', text: 'Validate ATS connection', status: 'pending' },
  { id: 'check2', text: 'Load requisition schema', status: 'pending' },
  { id: 'check3', text: 'Activate sources', status: 'pending' },
  { id: 'check4', text: 'Compile search policy', status: 'pending' },
  { id: 'check5', text: 'Start agent runtime', status: 'pending' }
];

/**
 * Step 4: Deploy Agent
 * 
 * Shows deployment checklist, runs animated deploy overlay, 
 * then displays deployed state with candidate shortlist.
 */
export const StepDeploy: React.FC<StepProps> = ({ state, setState, onBack }) => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);
  const [showOverlay, setShowOverlay] = useState(false);
  const [deployStarted, setDeployStarted] = useState(false);

  // Animate checklist items
  const animateChecklist = useCallback((callback: () => void) => {
    setDeployStarted(true);
    let index = 0;

    const animateNext = () => {
      if (index < INITIAL_CHECKLIST.length) {
        // Set current as active
        setChecklist(prev => prev.map((item, i) => ({
          ...item,
          status: i === index ? 'active' : i < index ? 'completed' : 'pending'
        })));

        setTimeout(() => {
          // Set current as completed
          setChecklist(prev => prev.map((item, i) => ({
            ...item,
            status: i <= index ? 'completed' : 'pending'
          })));
          index++;
          setTimeout(animateNext, 200);
        }, 400);
      } else {
        callback();
      }
    };

    animateNext();
  }, []);

  const handleDeploy = () => {
    animateChecklist(() => {
      setTimeout(() => {
        setShowOverlay(true);
      }, 500);
    });
  };

  const handleDeployComplete = () => {
    setShowOverlay(false);
    setState(prev => ({ ...prev, deployed: true }));
  };

  const handleReplayDeploy = () => {
    setState(prev => ({ ...prev, deployed: false }));
    setChecklist(INITIAL_CHECKLIST);
    setDeployStarted(false);
    setTimeout(handleDeploy, 300);
  };

  const handleEditConfig = () => {
    setState(prev => ({ ...prev, step: 3, deployed: false }));
  };

  const handleAddAnotherJob = () => {
    setState(prev => ({ ...prev, step: 2, deployed: false }));
  };

  // Pre-deploy view
  if (!state.deployed) {
    return (
      <div>
        {/* Deploy Overlay */}
        {showOverlay && <DeployOverlay onComplete={handleDeployComplete} />}

        {/* Step Header */}
        <div className="step-header">
          <h1 className="step-title">Deploy Agent</h1>
          <p className="step-subtitle">Review the deployment checklist before launching</p>
        </div>

        {/* Deploy Checklist */}
        <div className="deploy-checklist">
          {checklist.map(item => (
            <div 
              key={item.id} 
              className={`checklist-item ${item.status}`}
            >
              <div className="checklist-icon">
                {item.status === 'completed' ? (
                  <Icon path={mdiCheck} size={0.7} color="#fff" />
                ) : item.status === 'active' ? (
                  <Icon path={mdiCheck} size={0.7} color="#fff" />
                ) : (
                  '○'
                )}
              </div>
              <span className="checklist-text">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Step Footer */}
        <div className="step-footer">
          <Button
            text="Back"
            variant={ButtonVariant.Neutral}
            onClick={onBack}
            disabled={deployStarted}
          />
          <Button
            text="Deploy Agent"
            variant={ButtonVariant.Primary}
            onClick={handleDeploy}
            disabled={deployStarted}
          />
        </div>
      </div>
    );
  }

  // Deployed state view
  return (
    <div className="deployed-state">
      {/* Success Icon */}
      <div className="deployed-icon">
        <Icon path={mdiCheck} size={2} color="#fff" />
      </div>

      <h1 className="deployed-title">Agent Deployed</h1>

      <Badge style={{ display: 'inline-flex', marginBottom: 16, background: '#10b981', color: '#fff' }}>
        DEPLOYED
      </Badge>

      {/* Action Buttons */}
      <div className="deployed-actions">
        <Button
          text="Replay Deployment"
          variant={ButtonVariant.Neutral}
          onClick={handleReplayDeploy}
          iconProps={{ path: mdiReplay as unknown as IconName }}
        />
        <Button
          text="Edit Configuration"
          variant={ButtonVariant.Neutral}
          onClick={handleEditConfig}
          iconProps={{ path: mdiPencil as unknown as IconName }}
        />
        <Button
          text="Deploy Another Job"
          variant={ButtonVariant.Neutral}
          onClick={handleAddAnotherJob}
          iconProps={{ path: mdiPlus as unknown as IconName }}
        />
      </div>

      {/* Candidate Shortlist */}
      <div className="shortlist-section">
        <h2 className="shortlist-title">
          <Icon path={mdiClipboardList} size={1} style={{ marginRight: 12 }} />
          Generated Shortlist (Preview)
        </h2>

        {/* Internal Candidates */}
        <div className="shortlist-group">
          <div className="group-label internal">Internal Candidates</div>
          <div className="candidates-grid">
            {CANDIDATES.internal.map((candidate, index) => (
              <CandidateCard 
                key={candidate.name} 
                candidate={candidate} 
                index={index} 
              />
            ))}
          </div>
        </div>

        {/* External Candidates */}
        <div className="shortlist-group">
          <div className="group-label external">External Candidates</div>
          <div className="candidates-grid">
            {CANDIDATES.external.map((candidate, index) => (
              <CandidateCard 
                key={candidate.name} 
                candidate={candidate} 
                index={index + CANDIDATES.internal.length} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepDeploy;

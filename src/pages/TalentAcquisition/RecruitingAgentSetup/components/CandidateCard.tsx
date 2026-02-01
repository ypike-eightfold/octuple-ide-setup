import React, { useState } from 'react';
import { Button, ButtonVariant, Badge, IconName } from '@eightfold.ai/octuple';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronDown, mdiEmailOutline } from '@mdi/js';
import type { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
  index: number;
}

/**
 * Candidate Card Component
 * 
 * Displays candidate information with match score, skills, and expandable "why" section.
 */
export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, index }) => {
  const [expanded, setExpanded] = useState(false);

  const initials = candidate.name.split(' ').map(n => n[0]).join('');

  const handleInvite = () => {
    alert(`Interview invitation sent to ${candidate.name}! (demo)`);
  };

  return (
    <div 
      className="candidate-card" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="candidate-header">
        <div className="candidate-info">
          <div className="candidate-avatar">{initials}</div>
          <div>
            <div className="candidate-name">{candidate.name}</div>
            <div className="candidate-title">{candidate.title} • {candidate.company}</div>
          </div>
        </div>
        <div className="candidate-score">
          <div className="score-value">{candidate.score}</div>
          <div className="score-label">Match Score</div>
        </div>
      </div>

      <div className="candidate-skills">
        {candidate.skills.map(skill => (
          <Badge key={skill} style={{ marginRight: 6 }}>{skill}</Badge>
        ))}
      </div>

      <div className="candidate-expand" onClick={() => setExpanded(!expanded)}>
        <Icon path={expanded ? mdiChevronDown : mdiChevronRight} size={0.7} />
        Why this match
      </div>

      <div className={`why-match ${expanded ? 'visible' : ''}`}>
        {candidate.why}
      </div>

      <Button
        text="Invite to interview"
        variant={ButtonVariant.Secondary}
        onClick={handleInvite}
        iconProps={{ path: mdiEmailOutline as unknown as IconName }}
      />
    </div>
  );
};

export default CandidateCard;

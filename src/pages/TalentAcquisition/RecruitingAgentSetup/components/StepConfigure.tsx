import React from 'react';
import { 
  Button, ButtonVariant, CheckBox, Select, Slider, Accordion
} from '@eightfold.ai/octuple';
import type { StepProps, Cadence } from '../types';

/**
 * Step 3: Configure Agent Behavior
 * 
 * User configures talent sources, triggers, cadence, threshold, and guardrails.
 */
export const StepConfigure: React.FC<StepProps> = ({ state, setState, onNext, onBack }) => {

  const handleSourceToggle = (key: 'internal' | 'external') => {
    setState(prev => ({
      ...prev,
      sources: {
        ...prev.sources,
        [key]: !prev.sources[key]
      }
    }));
  };

  const handleTriggerToggle = (key: 'applicants' | 'daily' | 'threshold') => {
    setState(prev => ({
      ...prev,
      triggers: {
        ...prev.triggers,
        [key]: !prev.triggers[key]
      }
    }));
  };

  const handleGuardrailToggle = (key: 'sensitive' | 'relevant' | 'explain') => {
    setState(prev => ({
      ...prev,
      guardrails: {
        ...prev.guardrails,
        [key]: !prev.guardrails[key]
      }
    }));
  };

  const handleCadenceChange = (value: string) => {
    setState(prev => ({
      ...prev,
      cadence: value as Cadence
    }));
  };

  const handleThresholdChange = (value: number) => {
    setState(prev => ({
      ...prev,
      threshold: value
    }));
  };

  const cadenceOptions = [
    { value: 'daily', text: 'Daily' },
    { value: 'twice', text: 'Twice a week' },
    { value: 'always', text: 'Always-on' }
  ];

  return (
    <div>
      {/* Step Header */}
      <div className="step-header">
        <h1 className="step-title">Configure Agent Behavior</h1>
        <p className="step-subtitle">Define sources, triggers, and guardrails</p>
      </div>

      {/* Two Column Config Grid */}
      <div className="config-grid">
        {/* Left Column */}
        <div>
          {/* Talent Sources */}
          <div className="config-section">
            <div className="section-title">Talent Sources</div>
            
            <div className="toggle-row">
              <div className="toggle-info">
                <div className="toggle-label">Internal Talent</div>
                <div className="toggle-desc">Employees, alumni, referrals</div>
              </div>
              <CheckBox
                toggle
                checked={state.sources.internal}
                onChange={() => handleSourceToggle('internal')}
              />
            </div>

            <div className="toggle-row">
              <div className="toggle-info">
                <div className="toggle-label">External Talent</div>
                <div className="toggle-desc">LinkedIn, GitHub, job boards</div>
              </div>
              <CheckBox
                toggle
                checked={state.sources.external}
                onChange={() => handleSourceToggle('external')}
              />
            </div>
          </div>

          {/* Triggers */}
          <div className="config-section" style={{ marginTop: 24 }}>
            <div className="section-title">Triggers</div>
            <div className="checkbox-group">
              <div className="checkbox-row" onClick={() => handleTriggerToggle('applicants')}>
                <CheckBox
                  checked={state.triggers.applicants}
                  onChange={() => {}}
                />
                <span className="checkbox-text">New applicants arrive</span>
              </div>
              <div className="checkbox-row" onClick={() => handleTriggerToggle('daily')}>
                <CheckBox
                  checked={state.triggers.daily}
                  onChange={() => {}}
                />
                <span className="checkbox-text">Daily top-up search</span>
              </div>
              <div className="checkbox-row" onClick={() => handleTriggerToggle('threshold')}>
                <CheckBox
                  checked={state.triggers.threshold}
                  onChange={() => {}}
                />
                <span className="checkbox-text">Score drops below threshold</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Cadence & Threshold */}
          <div className="config-section">
            <div className="section-title">Cadence & Threshold</div>
            
            <div style={{ marginBottom: 16 }}>
              <Select
                options={cadenceOptions}
                defaultValue={state.cadence}
                onOptionsChange={(options) => {
                  const selected = options.find(o => o.selected);
                  if (selected) handleCadenceChange(selected.value as string);
                }}
                style={{ width: '100%' }}
              />
            </div>

            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Match threshold</span>
                <span className="slider-value">{state.threshold}%</span>
              </div>
              <Slider
                value={state.threshold}
                min={70}
                max={95}
                onChange={(value) => handleThresholdChange(value as number)}
                showMarkers={false}
              />
            </div>
          </div>

          {/* Guardrails */}
          <div className="config-section" style={{ marginTop: 24 }}>
            <div className="section-title">Guardrails</div>
            
            <Accordion
              summary="Compliance settings"
              expanded={true}
              bordered
            >
              <div className="checkbox-group" style={{ padding: '8px 0' }}>
                <div className="checkbox-row" onClick={() => handleGuardrailToggle('sensitive')}>
                  <CheckBox
                    checked={state.guardrails.sensitive}
                    onChange={() => {}}
                  />
                  <span className="checkbox-text">Avoid sensitive attributes</span>
                </div>
                <div className="checkbox-row" onClick={() => handleGuardrailToggle('relevant')}>
                  <CheckBox
                    checked={state.guardrails.relevant}
                    onChange={() => {}}
                  />
                  <span className="checkbox-text">Role-relevant signals only</span>
                </div>
                <div className="checkbox-row" onClick={() => handleGuardrailToggle('explain')}>
                  <CheckBox
                    checked={state.guardrails.explain}
                    onChange={() => {}}
                  />
                  <span className="checkbox-text">Explainability required</span>
                </div>
              </div>
            </Accordion>
          </div>
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
          text="Review Deployment"
          variant={ButtonVariant.Primary}
          onClick={onNext}
        />
      </div>
    </div>
  );
};

export default StepConfigure;

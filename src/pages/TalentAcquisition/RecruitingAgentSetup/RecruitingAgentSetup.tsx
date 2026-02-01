import React, { useEffect, useRef, useState } from 'react';
import { 
  Stepper, Button, ButtonVariant, Card, IconName
} from '@eightfold.ai/octuple';
import Icon from '@mdi/react';
import { mdiFlash, mdiRestart } from '@mdi/js';
import { Link } from 'react-router-dom';
import type { WizardState } from './types';
import { DEFAULT_WIZARD_STATE } from './mockData';
import { StepConnect } from './components/StepConnect';
import { StepJobs } from './components/StepJobs';
import { StepConfigure } from './components/StepConfigure';
import { StepDeploy } from './components/StepDeploy';
import './styles.css';

/**
 * Recruiting Agent Setup Wizard
 * 
 * A 4-step wizard to configure and deploy a recruiting AI agent:
 * 1. Connect ATS - Select and connect to an Applicant Tracking System
 * 2. Select Jobs - Choose requisitions for the agent to optimize
 * 3. Configure - Define sources, triggers, and guardrails
 * 4. Deploy - Review and launch the agent
 */
export const RecruitingAgentSetup: React.FC = () => {
  const [state, setState] = useState<WizardState>(DEFAULT_WIZARD_STATE);
  const stepperRef = useRef<HTMLDivElement>(null);

  const goToStep = (step: number) => {
    setState(prev => ({ ...prev, step }));
  };

  const handleNext = () => {
    if (state.step < 4) {
      goToStep(state.step + 1);
    }
  };

  const handleBack = () => {
    if (state.step > 1) {
      goToStep(state.step - 1);
    }
  };

  const handleReset = () => {
    setState(DEFAULT_WIZARD_STATE);
  };

  // Stepper steps configuration - mark previous steps as complete
  const steps = [
    { index: 0, content: 'Connect', complete: state.step > 1 },
    { index: 1, content: 'Jobs', complete: state.step > 2 },
    { index: 2, content: 'Configure', complete: state.step > 3 },
    { index: 3, content: 'Deploy', complete: state.deployed }
  ];

  useEffect(() => {
    const runId = 'run-active-step';
    const container = stepperRef.current;
    const activeEl = container?.querySelector('[class*="stepper-module_active"]') as HTMLElement | null;

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/cc9a168e-9323-49d8-a0cf-b7c2e0725521', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId,
        hypothesisId: 'H1',
        location: 'RecruitingAgentSetup.tsx:state',
        message: 'Stepper state & active index',
        data: { step: state.step, activeStepIndex: state.step - 1, hasActiveEl: !!activeEl },
        timestamp: Date.now()
      })
    }).catch(() => {});
    // Also log to console for quick inspection
    console.log('[run-active-step][H1]', {
      step: state.step,
      activeStepIndex: state.step - 1,
      hasActiveEl: !!activeEl
    });
    // #endregion

    if (activeEl) {
      const styles = getComputedStyle(activeEl);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/cc9a168e-9323-49d8-a0cf-b7c2e0725521', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: 'debug-session',
          runId,
          hypothesisId: 'H2',
          location: 'RecruitingAgentSetup.tsx:activeEl',
          message: 'Active element classes and styles',
          data: {
            className: activeEl.className,
            backgroundColor: styles.backgroundColor,
            borderColor: styles.borderColor,
            color: styles.color
          },
          timestamp: Date.now()
        })
      }).catch(() => {});
      // #endregion
      console.log('[run-active-step][H2]', {
        className: activeEl.className,
        backgroundColor: styles.backgroundColor,
        borderColor: styles.borderColor,
        color: styles.color
      });
    } else {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/cc9a168e-9323-49d8-a0cf-b7c2e0725521', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: 'debug-session',
          runId,
          hypothesisId: 'H3',
          location: 'RecruitingAgentSetup.tsx:noActiveEl',
          message: 'Active element not found',
          data: {},
          timestamp: Date.now()
        })
      }).catch(() => {});
      // #endregion
      console.log('[run-active-step][H3] Active element not found');
    }
  }, [state.step, steps]);

  const renderCurrentStep = () => {
    const stepProps = {
      state,
      setState,
      onNext: handleNext,
      onBack: handleBack
    };

    switch (state.step) {
      case 1:
        return <StepConnect {...stepProps} />;
      case 2:
        return <StepJobs {...stepProps} />;
      case 3:
        return <StepConfigure {...stepProps} />;
      case 4:
        return <StepDeploy {...stepProps} />;
      default:
        return <StepConnect {...stepProps} />;
    }
  };

  return (
    <div className="wizard-page">
      {/* Animated gradient background */}
      <div className="wizard-gradient-bg" />

      {/* Top Header Bar */}
      <header className="wizard-header">
        <div className="wizard-brand">
          <div className="wizard-brand-icon">
            <Icon path={mdiFlash} size={0.8} color="#fff" />
          </div>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Recruiting Agent Setup
          </Link>
        </div>

        {/* Stepper */}
        <div className="wizard-stepper-container" ref={stepperRef}>
          <Stepper
            activeStepIndex={state.step - 1}
            steps={steps}
            layout="horizontal"
            readonly={false}
          />
        </div>

        {/* Reset Button */}
        <div className="wizard-header-controls">
          <Button
            text="Reset"
            variant={ButtonVariant.Neutral}
            onClick={handleReset}
            iconProps={{ path: mdiRestart as unknown as IconName }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="wizard-main">
        <div className="wizard-content">
          <Card classNames="wizard-card">
            {renderCurrentStep()}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default RecruitingAgentSetup;


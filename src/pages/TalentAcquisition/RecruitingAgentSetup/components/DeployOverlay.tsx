import React, { useEffect, useState, useRef } from 'react';
import { DEPLOY_LOGS } from '../mockData';
import type { DeployLog } from '../types';

interface DeployOverlayProps {
  onComplete: () => void;
}

/**
 * Deploy Overlay Component
 * 
 * Shows animated deployment progress with logs and progress ring.
 */
export const DeployOverlay: React.FC<DeployOverlayProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<DeployLog[]>([]);
  const [internalPulsing, setInternalPulsing] = useState(false);
  const [externalPulsing, setExternalPulsing] = useState(false);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  const DEPLOY_DURATION = 7000; // Total duration in ms

  useEffect(() => {
    const logInterval = DEPLOY_DURATION / DEPLOY_LOGS.length;

    // Start lane pulsing
    const internalTimer = setTimeout(() => setInternalPulsing(true), 500);
    const externalTimer = setTimeout(() => setExternalPulsing(true), 1000);

    // Add logs progressively
    DEPLOY_LOGS.forEach((log, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        setProgress(Math.round(((i + 1) / DEPLOY_LOGS.length) * 100));
        
        // Auto-scroll logs
        if (logsContainerRef.current) {
          logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
        }
      }, logInterval * i);
    });

    // Complete deployment
    const completeTimer = setTimeout(() => {
      setInternalPulsing(false);
      setExternalPulsing(false);
      setTimeout(onComplete, 800);
    }, DEPLOY_DURATION);

    return () => {
      clearTimeout(internalTimer);
      clearTimeout(externalTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Calculate stroke-dashoffset for progress ring
  const circumference = 502; // 2 * PI * 80
  const dashOffset = circumference - (circumference * progress / 100);

  return (
    <div className="deploy-overlay">
      <h1 className="deploy-overlay-title">Deploying Agent Model</h1>

      {/* Progress Ring */}
      <div className="progress-ring-container">
        <svg className="progress-ring" width="180" height="180">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <circle className="progress-ring-bg" cx="90" cy="90" r="80" />
          <circle 
            className="progress-ring-fill" 
            cx="90" 
            cy="90" 
            r="80"
            style={{ strokeDashoffset: dashOffset }}
          />
        </svg>
        <div className="progress-percent">{progress}%</div>
      </div>

      {/* Deploy Lanes */}
      <div className="deploy-lanes">
        <div className="deploy-lane">
          <div className={`lane-indicator internal ${internalPulsing ? 'pulsing' : ''}`} />
          <span className="lane-text">Internal Index</span>
        </div>
        <div className="deploy-lane">
          <div className={`lane-indicator external ${externalPulsing ? 'pulsing' : ''}`} />
          <span className="lane-text">External Index</span>
        </div>
      </div>

      {/* Deploy Logs */}
      <div className="deploy-logs" ref={logsContainerRef}>
        {logs.map((log, i) => (
          <div key={i} className="log-line">
            <span className="log-time">[{log.time}]</span>{' '}
            <span className={`log-${log.type}`}>
              {log.type === 'success' ? '✓ ' : ''}{log.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeployOverlay;


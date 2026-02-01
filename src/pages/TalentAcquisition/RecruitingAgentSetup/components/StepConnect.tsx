import React, { useState } from 'react';
import { 
  Button, ButtonVariant, CheckBox, Badge, IconName
} from '@eightfold.ai/octuple';
import { mdiLink, mdiCheck } from '@mdi/js';
import type { StepProps, ATSProvider } from '../types';
import { ATS_PROVIDERS } from '../mockData';

/**
 * Step 1: Connect ATS
 * 
 * User selects an ATS provider and authorizes the connection.
 * Shows sync options after connection.
 */
export const StepConnect: React.FC<StepProps> = ({ state, setState, onNext }) => {
  const [connecting, setConnecting] = useState(false);

  const handleSelectATS = (providerId: ATSProvider) => {
    setState(prev => ({
      ...prev,
      atsProvider: providerId,
      connected: false
    }));
  };

  const handleConnect = async () => {
    if (!state.atsProvider) return;
    
    setConnecting(true);
    
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setState(prev => ({
      ...prev,
      connected: true
    }));
    setConnecting(false);
  };

  const handleSyncToggle = (key: keyof typeof state.syncConfig) => {
    setState(prev => ({
      ...prev,
      syncConfig: {
        ...prev.syncConfig,
        [key]: !prev.syncConfig[key]
      }
    }));
  };

  const selectedProvider = ATS_PROVIDERS.find(p => p.id === state.atsProvider);

  return (
    <div>
      {/* Step Header */}
      <div className="step-header">
        <h1 className="step-title">Connect your ATS</h1>
        <p className="step-subtitle">Select your Applicant Tracking System to sync requisitions</p>
      </div>

      {/* ATS Provider Grid */}
      <div className="ats-grid">
        {ATS_PROVIDERS.map(provider => (
          <div
            key={provider.id}
            className={`ats-card ${state.atsProvider === provider.id ? 'selected' : ''}`}
            onClick={() => handleSelectATS(provider.id)}
          >
            <div className="ats-card-logo">
              <img 
                src={provider.logo} 
                alt={`${provider.name} logo`}
                // #region agent log
                onLoad={() => {
                  fetch('http://127.0.0.1:7242/ingest/cc9a168e-9323-49d8-a0cf-b7c2e0725521',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'StepConnect.tsx:IMG',message:'Image loaded successfully',data:{provider:provider.id,logo:provider.logo},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H4-H5'})}).catch(()=>{});
                }}
                // #endregion
                // #region agent log
                onError={(e) => {
                  fetch('http://127.0.0.1:7242/ingest/cc9a168e-9323-49d8-a0cf-b7c2e0725521',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'StepConnect.tsx:IMG_ERROR',message:'Image failed to load',data:{provider:provider.id,logo:provider.logo,error:'load failed'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1-H2-H4'})}).catch(()=>{});
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
                // #endregion
              />
            </div>
            <div className="ats-card-name">{provider.name}</div>
          </div>
        ))}
      </div>

      {/* ATS Configuration Panel (shown when provider selected) */}
      {state.atsProvider && (
        <div className="ats-config">
          <div className="config-header">
            <div className="config-title">
              <Badge style={{ marginRight: 8 }}>{selectedProvider?.name}</Badge>
              <span>Connection</span>
            </div>
          </div>

          {/* Connection Row */}
          <div className="connection-row">
            <div className={`connection-status ${state.connected ? 'connected' : ''}`}>
              <div className="status-dot" />
              <span className="status-text">
                {connecting 
                  ? 'Connecting...' 
                  : state.connected 
                    ? `Connected to ${selectedProvider?.name} • 47 open requisitions synced`
                    : 'Ready to connect'
                }
              </span>
            </div>
            
            <Button
              text={state.connected ? 'Connected' : connecting ? 'Connecting...' : 'Connect'}
              variant={state.connected ? ButtonVariant.Primary : ButtonVariant.Primary}
              onClick={handleConnect}
              disabled={connecting || state.connected}
              iconProps={{ path: (state.connected ? mdiCheck : mdiLink) as unknown as IconName }}
            />
          </div>

          {/* Sync Options */}
          <div className="sync-options">
            <div className="sync-option">
              <span className="sync-label">Requisitions</span>
              <CheckBox
                toggle
                checked={state.syncConfig.requisitions}
                onChange={() => handleSyncToggle('requisitions')}
              />
            </div>
            <div className="sync-option">
              <span className="sync-label">Candidates</span>
              <CheckBox
                toggle
                checked={state.syncConfig.candidates}
                onChange={() => handleSyncToggle('candidates')}
              />
            </div>
            <div className="sync-option">
              <span className="sync-label">Two-way</span>
              <CheckBox
                toggle
                checked={state.syncConfig.twoWay}
                onChange={() => handleSyncToggle('twoWay')}
              />
            </div>
            <div className="sync-option">
              <span className="sync-label">Real-time</span>
              <CheckBox
                toggle
                checked={state.syncConfig.realtime}
                onChange={() => handleSyncToggle('realtime')}
              />
            </div>
          </div>
        </div>
      )}

      {/* Step Footer - only shown after successful connection */}
      {state.connected && (
        <div className="step-footer">
          <Button
            text="Continue"
            variant={ButtonVariant.Primary}
            onClick={onNext}
          />
        </div>
      )}
    </div>
  );
};

export default StepConnect;

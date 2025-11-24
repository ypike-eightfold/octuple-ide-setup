import { Component, ErrorInfo, ReactNode } from 'react';
import { Card, Button, ButtonVariant } from '@eightfold.ai/octuple';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}>
          <Card title="⚠️ Component Error">
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: '#ff4d4f', marginBottom: '8px' }}>Something went wrong</h3>
              <p style={{ color: '#666', marginBottom: '16px' }}>
                A JavaScript error occurred. This usually means a component's props are incorrect.
              </p>

              {this.state.error && (
                <div
                  style={{
                    background: '#fff2f0',
                    border: '1px solid #ffccc7',
                    padding: '16px',
                    borderRadius: '4px',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ fontWeight: 600, marginBottom: '8px', color: '#cf1322' }}>
                    Error Message:
                  </div>
                  <pre
                    style={{
                      margin: 0,
                      fontSize: '14px',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {this.state.error.toString()}
                  </pre>
                </div>
              )}

              {this.state.errorInfo && (
                <details style={{ marginBottom: '16px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600, marginBottom: '8px' }}>
                    Stack Trace (click to expand)
                  </summary>
                  <pre
                    style={{
                      background: '#f5f5f5',
                      padding: '12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      overflow: 'auto',
                      maxHeight: '300px',
                    }}
                  >
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}

              <div
                style={{
                  background: '#e6f7ff',
                  border: '1px solid #91d5ff',
                  padding: '16px',
                  borderRadius: '4px',
                  marginBottom: '16px',
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '8px' }}>💡 How to Fix:</div>
                <ol style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Check browser console for detailed error</li>
                  <li>Verify component props match Octuple's API</li>
                  <li>Check <code>docs/verified-octuple-examples.md</code> for working examples</li>
                  <li>Test component in ComponentPlayground first</li>
                </ol>
              </div>

              <Button text="Reload Page" variant={ButtonVariant.Primary} onClick={this.handleReset} />
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


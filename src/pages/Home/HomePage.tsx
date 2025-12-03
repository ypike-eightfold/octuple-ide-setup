import { useNavigate } from 'react-router-dom';
import {
  Layout,
  Row,
  Col,
  Card,
  Button,
  ButtonVariant,
  ButtonSize,
  IconName,
} from '@eightfold.ai/octuple';
import Icon from '@mdi/react';
import {
  mdiAccountGroup,
  mdiAccountCircle,
  mdiFileDocumentOutline,
  mdiGithub,
  mdiBookOpenPageVariant,
  mdiArrowRight,
} from '@mdi/js';

const { Content } = Layout;

// Color palette
const colors = {
  primary: '#146DA6',
  primaryDark: '#054D7B',
  background: '#F6F7F8',
  white: '#FFFFFF',
  text: '#1A212E',
  textLight: '#69717F',
  border: '#D9DCE1',
  gradient1: '#00A3E0',
  gradient2: '#7B61FF',
};

interface ExamplePageCard {
  title: string;
  description: string;
  route: string;
  icon: string;
  iconColor: string;
}

const examplePages: ExamplePageCard[] = [
  {
    title: 'People Page',
    description: 'A searchable directory of people with filters, responsive cards, and connection features. Demonstrates search, cards, tabs, and responsive grid layout.',
    route: '/people',
    icon: mdiAccountGroup,
    iconColor: '#1999AC',
  },
  {
    title: 'Profile Page',
    description: 'A detailed user profile with skills, projects, organization info, and multiple sections. Demonstrates tabs, forms, avatars, and two-column layout.',
    route: '/profile',
    icon: mdiAccountCircle,
    iconColor: '#9B59B6',
  },
  {
    title: 'Candidate Details',
    description: 'A talent acquisition workflow page showing candidate information, resume, stepper progress, and evaluations. Demonstrates stepper, menu, and complex layout.',
    route: '/candidates/details',
    icon: mdiFileDocumentOutline,
    iconColor: '#E67E22',
  },
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh', background: colors.background }}>
      {/* Hero Section */}
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.gradient1} 0%, ${colors.gradient2} 100%)`,
          padding: '60px 24px',
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                background: colors.white,
                borderRadius: '8px',
              }}
            />
          </div>
          <span
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: colors.white,
              letterSpacing: '-0.5px',
            }}
          >
            Octuple AI Starter
          </span>
        </div>

        <h1
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: colors.white,
            margin: '0 0 16px',
            lineHeight: 1.2,
          }}
        >
          Design System Examples
        </h1>
        <p
          style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0 auto 32px',
            maxWidth: '600px',
            lineHeight: 1.5,
          }}
        >
          Pre-configured starter template for building UIs with the Octuple Design System, 
          optimized for AI coding agents like Cursor.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            text="View on GitHub"
            iconProps={{ path: mdiGithub as unknown as IconName }}
            variant={ButtonVariant.Secondary}
            size={ButtonSize.Large}
            onClick={() => window.open('https://github.com/ypike-eightfold/octuple-ide-setup', '_blank')}
            style={{
              background: colors.white,
              borderColor: colors.white,
              color: colors.primaryDark,
              borderRadius: '24px',
            }}
          />
          <Button
            text="Documentation"
            iconProps={{ path: mdiBookOpenPageVariant as unknown as IconName }}
            variant={ButtonVariant.Secondary}
            size={ButtonSize.Large}
            onClick={() => window.open('https://github.com/ypike-eightfold/octuple-ide-setup#readme', '_blank')}
            style={{
              background: 'transparent',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              color: colors.white,
              borderRadius: '24px',
            }}
          />
        </div>
      </div>

      {/* Example Pages Section */}
      <Content style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 600,
            color: colors.text,
            textAlign: 'center',
            margin: '0 0 12px',
          }}
        >
          Example Pages
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: colors.textLight,
            textAlign: 'center',
            margin: '0 0 40px',
          }}
        >
          Click on any card to explore the example implementation
        </p>

        <Row gutter={24} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {examplePages.map((page) => (
            <Col key={page.route} xs={24} md={12} lg={8} style={{ marginBottom: '24px' }}>
              <Card
                style={{
                  height: '100%',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '16px',
                  padding: '32px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: colors.white,
                }}
                onClick={() => navigate(page.route)}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  const target = e.currentTarget;
                  target.style.transform = 'translateY(-4px)';
                  target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  const target = e.currentTarget;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: `${page.iconColor}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Icon path={page.icon} size={1.5} style={{ color: page.iconColor }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: colors.text,
                    margin: '0 0 12px',
                  }}
                >
                  {page.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '15px',
                    color: colors.textLight,
                    lineHeight: 1.6,
                    margin: '0 0 20px',
                  }}
                >
                  {page.description}
                </p>

                {/* View Link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: colors.primary,
                    fontWeight: 600,
                    fontSize: '15px',
                  }}
                >
                  View Example
                  <Icon path={mdiArrowRight} size={0.8} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* Footer */}
      <div
        style={{
          background: colors.white,
          borderTop: `1px solid ${colors.border}`,
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '14px', color: colors.textLight, margin: 0 }}>
          Built with{' '}
          <a
            href="https://github.com/EightfoldAI/octuple"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.primary, textDecoration: 'none' }}
          >
            Octuple Design System
          </a>{' '}
          by Eightfold AI
        </p>
      </div>
    </Layout>
  );
};


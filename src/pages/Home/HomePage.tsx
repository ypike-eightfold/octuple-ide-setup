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
  mdiBriefcaseOutline,
  mdiDomain,
  mdiWeb,
  mdiSwapHorizontal,
  mdiRobot,
  mdiAccountHardHat,
  mdiRocketLaunchOutline,
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

interface ProductCategory {
  name: string;
  description: string;
  icon: string;
  iconColor: string;
  pages: ExamplePageCard[];
}

const productCategories: ProductCategory[] = [
  {
    name: 'Talent Management',
    description: 'Employee profiles, people search, org charts, and team management',
    icon: mdiDomain,
    iconColor: '#1999AC',
    pages: [
      {
        title: 'People Page',
        description: 'A searchable directory of people with filters, responsive cards, and connection features.',
        route: '/talent-management/people',
        icon: mdiAccountGroup,
        iconColor: '#1999AC',
      },
      {
        title: 'Profile Page',
        description: 'A detailed user profile with skills, projects, organization info, and multiple sections.',
        route: '/talent-management/profile',
        icon: mdiAccountCircle,
        iconColor: '#9B59B6',
      },
    ],
  },
  {
    name: 'Talent Acquisition',
    description: 'Candidate details, job postings, applications, and hiring workflows',
    icon: mdiBriefcaseOutline,
    iconColor: '#E67E22',
    pages: [
      {
        title: 'Candidate Details',
        description: 'A talent acquisition workflow page showing candidate info, resume, and evaluations.',
        route: '/talent-acquisition/candidates',
        icon: mdiFileDocumentOutline,
        iconColor: '#E67E22',
      },
      {
        title: 'Recruiting Agent Setup',
        description: 'A 4-step wizard to configure and deploy an AI recruiting agent with ATS integration.',
        route: '/talent-acquisition/recruiting-agent',
        icon: mdiRocketLaunchOutline,
        iconColor: '#8E44AD',
      },
    ],
  },
  {
    name: 'Personal Career Site',
    description: 'Career pages, job search, and candidate self-service portals',
    icon: mdiWeb,
    iconColor: '#27AE60',
    pages: [],
  },
  {
    name: 'Workforce Exchange',
    description: 'Talent marketplace, gig matching, and contractor management',
    icon: mdiSwapHorizontal,
    iconColor: '#3498DB',
    pages: [],
  },
  {
    name: 'AI Agents',
    description: 'AI assistant interfaces, conversational UI, and automated workflows',
    icon: mdiRobot,
    iconColor: '#8E44AD',
    pages: [],
  },
  {
    name: 'Resource Management',
    description: 'Resource allocation, project staffing, and capacity planning',
    icon: mdiAccountHardHat,
    iconColor: '#C0392B',
    pages: [],
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

      {/* Product Categories Section */}
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
          Example Pages by Product
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: colors.textLight,
            textAlign: 'center',
            margin: '0 0 40px',
          }}
        >
          Explore example implementations organized by Eightfold product line
        </p>

        {productCategories.map((category) => (
          <div key={category.name} style={{ marginBottom: '48px' }}>
            {/* Category Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${category.iconColor}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon path={category.icon} size={1.2} style={{ color: category.iconColor }} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: colors.text,
                    margin: 0,
                  }}
                >
                  {category.name}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textLight,
                    margin: 0,
                  }}
                >
                  {category.description}
                </p>
              </div>
            </div>

            {/* Pages Grid */}
            {category.pages.length > 0 ? (
              <Row gutter={24} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {category.pages.map((page) => (
                  <Col key={page.route} xs={24} md={12} lg={8} style={{ marginBottom: '24px' }}>
                    <Card
                      style={{
                        height: '100%',
                        border: `1px solid ${colors.border}`,
                        borderRadius: '16px',
                        padding: '28px',
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
                          width: '56px',
                          height: '56px',
                          borderRadius: '14px',
                          background: `${page.iconColor}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px',
                        }}
                      >
                        <Icon path={page.icon} size={1.3} style={{ color: page.iconColor }} />
                      </div>

                      {/* Title */}
                      <h4
                        style={{
                          fontSize: '18px',
                          fontWeight: 600,
                          color: colors.text,
                          margin: '0 0 8px',
                        }}
                      >
                        {page.title}
                      </h4>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '14px',
                          color: colors.textLight,
                          lineHeight: 1.5,
                          margin: '0 0 16px',
                        }}
                      >
                        {page.description}
                      </p>

                      {/* View Link */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: colors.primary,
                          fontWeight: 600,
                          fontSize: '14px',
                        }}
                      >
                        View Example
                        <Icon path={mdiArrowRight} size={0.7} />
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <div
                style={{
                  background: colors.white,
                  border: `1px dashed ${colors.border}`,
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontSize: '15px',
                    color: colors.textLight,
                    margin: 0,
                  }}
                >
                  No example pages yet. Ask AI to create one for this product line!
                </p>
              </div>
            )}
          </div>
        ))}
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

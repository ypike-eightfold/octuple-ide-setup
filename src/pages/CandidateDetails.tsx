import React, { useState } from 'react';
import { 
  Layout, Menu, Breadcrumb, Button, Card, Avatar, Badge, Row, Col, Tabs, Tab, Stepper,
  ButtonVariant, ButtonSize, ButtonIconAlign, IconName
} from '@eightfold.ai/octuple';
import Icon from '@mdi/react';
import { 
  mdiHome, mdiBriefcase, mdiAccountGroup, mdiCalendar, mdiAccountTie, 
  mdiChartBox, mdiCog, mdiCalendarBlank, mdiPhone, mdiEmail,
  mdiChevronDown, mdiDownload, mdiRefresh, mdiCommentText,
  mdiMapMarker, mdiFileDocument, mdiFile, mdiStar, mdiStarOutline, mdiDomain
} from '@mdi/js';
import { Link } from 'react-router-dom';

const { Aside, Content } = Layout;

/**
 * Candidate Details Page - Using REAL Octuple Component APIs
 */
export const CandidateDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('information');

  // Menu items with proper Octuple API
  const menuItems = [
    { 
      key: 'home', 
      text: 'Home', 
      value: 'home',
      iconProps: { path: mdiHome as IconName }
    },
    { 
      key: 'jobs', 
      text: 'Jobs', 
      value: 'jobs',
      iconProps: { path: mdiBriefcase as IconName }
    },
    { 
      key: 'candidates', 
      text: 'Candidates', 
      value: 'candidates',
      active: true,
      iconProps: { path: mdiAccountGroup as IconName }
    },
    { 
      key: 'calendar', 
      text: 'Calendar', 
      value: 'calendar',
      iconProps: { path: mdiCalendar as IconName }
    },
    { 
      key: 'employees', 
      text: 'Employees', 
      value: 'employees',
      iconProps: { path: mdiAccountTie as IconName }
    },
    { 
      key: 'reports', 
      text: 'Reports', 
      value: 'reports',
      iconProps: { path: mdiChartBox as IconName }
    },
    { 
      key: 'settings', 
      text: 'Settings', 
      value: 'settings',
      iconProps: { path: mdiCog as IconName }
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Left Sidebar Navigation */}
      <Aside width="200px" style={{ background: '#fff', borderRight: '1px solid #e8e8e8' }}>
        <div style={{ padding: '20px 16px', borderBottom: '1px solid #e8e8e8' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Avatar size="32px" type="round" style={{ background: '#1890ff', color: '#fff' }}>S</Avatar>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Sarah</div>
              <div style={{ fontSize: '11px', color: '#999' }}>sarah@corp.com</div>
            </div>
          </div>
        </div>
        
        <Menu
          items={menuItems}
          style={{ border: 'none', padding: '8px 0' }}
        />

        <div style={{ position: 'absolute', bottom: '16px', left: '16px', fontSize: '12px', color: '#999' }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>TalentFlow</Link>
        </div>
      </Aside>

      <Layout>
        {/* Main Content */}
        <Content style={{ background: '#f5f7fa' }}>
          {/* Header Section */}
          <div style={{ background: '#fff', padding: '16px 32px', borderBottom: '1px solid #e8e8e8' }}>
            <Breadcrumb 
              links={[
                { url: '/candidates', children: 'Candidates' },
                { url: '/candidates/details', children: 'Candidate Details', ariaCurrent: true }
              ]}
              style={{ marginBottom: '12px' }} 
            />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Candidate Details</h1>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant={ButtonVariant.Default} iconProps={{ path: mdiCalendarBlank as IconName }} />
                <Button variant={ButtonVariant.Default} iconProps={{ path: mdiPhone as IconName }} />
                <Button variant={ButtonVariant.Default} iconProps={{ path: mdiEmail as IconName }} />
                <Button text="Move to Offer" variant={ButtonVariant.Primary} iconProps={{ path: mdiChevronDown as IconName }} alignIcon={ButtonIconAlign.Right} />
              </div>
            </div>
          </div>

          {/* Stage Progress */}
          <div style={{ padding: '24px 32px' }}>
            <div style={{ background: '#fff', padding: '20px 32px', borderRadius: '8px' }}>
              <Stepper
                activeStepIndex={2}
                steps={[
                  { index: 0, content: 'Applied' },
                  { index: 1, content: 'Underreview' },
                  { index: 2, content: 'Interview' },
                  { index: 3, content: 'Offer' },
                  { index: 4, content: 'Hire' }
                ]}
                layout="horizontal"
                readonly={true}
              />
            </div>
          </div>

          <div style={{ padding: '0 32px 32px' }}>
            {/* Candidate Header - FULL WIDTH */}
            <Card style={{ marginBottom: '24px' }}>
              <Row align="middle" gutter={16}>
                <Col>
                  <Avatar size="80px" type="round" style={{ background: '#d0d0d0', color: '#666' }}>
                    JT
                  </Avatar>
                </Col>
                <Col flex={1}>
                  <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 600 }}>Joshua Taylor</h2>
                  <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: '#666', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon path={mdiBriefcase} size={0.6} style={{ marginRight: '4px' }} />
                      Software Engineer
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon path={mdiPhone} size={0.6} style={{ marginRight: '4px' }} />
                      (919) 833-3830
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon path={mdiMapMarker} size={0.6} style={{ marginRight: '4px' }} />
                      New York, USA
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon path={mdiEmail} size={0.6} style={{ marginRight: '4px' }} />
                      joshua123@gmail.com
                    </span>
                  </div>
                  <div>
                    <Badge style={{ marginRight: '8px' }}>#referrals</Badge>
                    <Button text="+ Add Tag" variant={ButtonVariant.Default} size={ButtonSize.Small} />
                  </div>
                </Col>
              </Row>
            </Card>

            {/* Tabs - FULL WIDTH */}
            <Tabs value={activeTab} onChange={(value: string) => setActiveTab(value)}>
              <Tab value="information" label="Information" />
              <Tab value="timeline" label="Timeline" />
              <Tab value="referral" label="Referral" />
            </Tabs>

            {/* Two-Column Layout: LEFT = Content, RIGHT = Evaluations */}
            <Row gutter={24} style={{ marginTop: '24px', display: 'flex', flexWrap: 'nowrap' }}>
              {/* LEFT COLUMN - Tab Content */}
              <Col span={16} style={{ flex: '0 0 66.666%', maxWidth: '66.666%' }}>
                <div style={{ background: '#fff', padding: '24px', borderRadius: '8px' }}>
                  {/* Work Experience */}
                  <div style={{ marginBottom: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Icon path={mdiBriefcase} size={0.8} style={{ marginRight: '8px' }} />
                        Working experience
                      </h3>
                      <span style={{ fontSize: '14px', color: '#999' }}>4 yr 7 mos</span>
                    </div>
                    
                    {/* Timeline */}
                    <div style={{ position: 'relative', paddingLeft: '32px' }}>
                      <div style={{ position: 'absolute', left: '8px', top: '8px', bottom: '0', width: '2px', background: '#e8e8e8' }} />
                      
                      {[
                        { title: 'Senior Software Engineer', type: 'Fulltime', company: 'GlobalTech Solutions – Remote', duration: 'Jan 2021 - Present', badge: 'Working' },
                        { title: 'Software Engineer', type: 'Fulltime', company: 'GlobalTech Solutions – On-site', duration: 'Jan 2019 - Jan 2021' },
                        { title: 'Junior Software Engineer', type: 'Fulltime', company: 'GlobalTech Solutions – On-site', duration: 'Jan 2018 - Jan 2019' }
                      ].map((job, index) => (
                        <div key={index} style={{ marginBottom: '28px', position: 'relative' }}>
                          <div style={{ 
                            position: 'absolute', 
                            left: '-27px', 
                            top: '4px',
                            width: '10px', 
                            height: '10px', 
                            borderRadius: '50%', 
                            background: index === 0 ? '#1890ff' : '#fff', 
                            border: `2px solid ${index === 0 ? '#1890ff' : '#d0d0d0'}` 
                          }} />
                          <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>{job.title}</div>
                          <div style={{ fontSize: '13px', color: '#666', marginBottom: '4px', display: 'flex', alignItems: 'center' }}>
                            <Icon path={mdiBriefcase} size={0.55} style={{ marginRight: '4px' }} />
                            {job.type} | <Icon path={mdiDomain} size={0.55} style={{ margin: '0 4px' }} /> {job.company}
                          </div>
                          <div style={{ fontSize: '13px', color: '#999', display: 'flex', alignItems: 'center' }}>
                            <Icon path={mdiCalendar} size={0.55} style={{ marginRight: '4px' }} />
                            {job.duration}
                          </div>
                          {job.badge && (
                            <Badge style={{ marginTop: '8px' }}>{job.badge}</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon path={mdiEmail} size={0.8} style={{ marginRight: '8px' }} />
                      Cover letter
                    </h3>
                    <p style={{ margin: '0 0 12px 0', color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                      Dear Hiring Manager,<br /><br />
                      I am writing to express my interest in the Software Engineer position at TechSolutions Inc., as advertised on LinkedIn. With a background in software development, a passion for problem-solving,
                    </p>
                    <Button text="Read more" variant={ButtonVariant.Default} size={ButtonSize.Small} />
                  </div>

                  {/* Resume */}
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon path={mdiFileDocument} size={0.8} style={{ marginRight: '8px' }} />
                      Resume
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: '#f5f5f5', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Icon path={mdiFile} size={1} color="#666" />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '14px' }}>Resume.pdf</div>
                          <div style={{ fontSize: '12px', color: '#999' }}>340 kb</div>
                        </div>
                      </div>
                      <Button variant={ButtonVariant.Default} size={ButtonSize.Small} iconProps={{ path: mdiDownload as IconName }} />
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Icon path={mdiCommentText} size={0.8} style={{ marginRight: '8px' }} />
                        Comments
                      </h3>
                      <Button text="Add comment" variant={ButtonVariant.Default} size={ButtonSize.Small} iconProps={{ path: mdiCommentText as IconName }} />
                    </div>
                    
                    {[
                      { name: 'Klara Weaver', time: '10:50 AM', comment: 'Technical Skills Assessment: "The candidate showed strong skills in algorithms and data structures but struggled with some system design concepts. Further discussion could clarify their knowledge' },
                      { name: 'Jennifer Martinez', time: '10:50 AM', comment: 'Overall impression: "The candidate has a solid foundation in software engineering and a willingness to learn. They may need training on our tech stack, but I recommend a second interview to assess their potential' }
                    ].map((item, index) => (
                      <div key={index} style={{ display: 'flex', gap: '12px', marginBottom: '20px', paddingBottom: '20px', borderBottom: index === 0 ? '1px solid #f0f0f0' : 'none' }}>
                        <Avatar size="40px" type="round">
                          {item.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                            <span style={{ fontWeight: 600, fontSize: '14px' }}>{item.name}</span>
                            <span style={{ fontSize: '12px', color: '#999' }}>{item.time}</span>
                          </div>
                          <p style={{ margin: 0, fontSize: '13px', color: '#666', lineHeight: '1.5' }}>{item.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>

              {/* RIGHT COLUMN - Evaluations Sidebar */}
              <Col span={8} style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}>
                <Card style={{ position: 'sticky', top: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon path={mdiStar} size={0.8} style={{ marginRight: '8px' }} color="#faad14" />
                      Evaluations
                    </h3>
                    <Button variant={ButtonVariant.Default} size={ButtonSize.Small} text="Update" iconProps={{ path: mdiRefresh as IconName }} />
                  </div>
                  
                  {/* Overall Rating */}
                  <div style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid #f0f0f0' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: '#666' }}>Overall Rating</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '32px', fontWeight: 600 }}>4.0</span>
                      <span style={{ display: 'flex', gap: '2px' }}>
                        {[...Array(4)].map((_, i) => (
                          <Icon key={i} path={mdiStar} size={0.8} color="#faad14" />
                        ))}
                        <Icon path={mdiStarOutline} size={0.8} color="#faad14" />
                      </span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#666' }}>Good potential with some training</div>
                  </div>

                  {/* Individual Ratings */}
                  {[
                    { name: 'Technical Skills', rating: 3, note: 'Solid skills but lacks experience in cloud technologies' },
                    { name: 'Problem-Solving Ability', rating: 5, note: 'Exceptional analytical abilities, quickly identified solutions' },
                    { name: 'Communication Skills', rating: 4, note: 'Good communicator, though could improve presentation of technical ideas' },
                    { name: 'Cultural Fit', rating: 4, note: 'Great attitude and team-oriented' },
                    { name: 'Adaptability', rating: 4, note: 'Shows willingness to learn and adapt' }
                  ].map((skill, index) => (
                    <div key={index} style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: index < 4 ? '1px solid #f0f0f0' : 'none' }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>{skill.name}</div>
                      <div style={{ marginBottom: '10px', display: 'flex', gap: '2px' }}>
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            path={i < skill.rating ? mdiStar : mdiStarOutline} 
                            size={0.7} 
                            color="#faad14" 
                          />
                        ))}
                      </div>
                      <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>{skill.note}</div>
                    </div>
                  ))}
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};


import { useState } from 'react';
import {
  Layout,
  Row,
  Col,
  Card,
  Avatar,
  Button,
  ButtonVariant,
  ButtonSize,
  ButtonShape,
  ButtonIconAlign,
  TextInput,
  Pagination,
  Link,
  Badge,
  IconName,
  Tabs,
  Tab,
  CheckBox,
  SkillTag,
} from '@eightfold.ai/octuple';
import Icon from '@mdi/react';
import {
  mdiMagnify,
  mdiPencil,
  mdiChevronDown,
  mdiLinkedin,
  mdiPhone,
  mdiEmail,
  mdiFilePdfBox,
  mdiFileWord,
  mdiAirplane,
  mdiHome,
  mdiOfficeBuildingMarker,
  mdiDotsGrid,
  mdiBriefcase,
  mdiCog,
  mdiTruckOutline,
  mdiTimelineTextOutline,
  mdiTrashCanOutline,
  mdiMapMarkerOutline,
} from '@mdi/js';
import { mockProfileData } from './mockProfileData';

const { Header, Content } = Layout;

// Color palette from Figma design
const colors = {
  primaryBlue: '#146DA6',
  darkBlue: '#054D7B',
  grey: '#4F5666',
  lightGrey: '#69717F',
  textDefault: '#1A212E',
  background: '#F6F7F8',
  border: '#D9DCE1',
  white: '#FFFFFF',
  blueGreen: '#1999AC',
  lightBlueGreen: '#B0F3FE',
};

export const ProfilePage: React.FC = () => {
  const [activeNavTab, setActiveNavTab] = useState('home');
  const [activeTab, setActiveTab] = useState('experience');
  const [currentPage, setCurrentPage] = useState(1);
  const [openToMentoring, setOpenToMentoring] = useState(true);
  const { user, skills, languages, mobility, projects, manager, peers, employeeInfo, contactLinks, resumes } = mockProfileData;

  const renderEditButton = () => (
    <Button
      iconProps={{ path: mdiPencil as unknown as IconName }}
      variant={ButtonVariant.Neutral}
      size={ButtonSize.Small}
      shape={ButtonShape.Round}
      ariaLabel="Edit"
      style={{ background: colors.background }}
    />
  );

  const renderSkillTag = (skill: string) => (
    <SkillTag
      key={skill}
      label={skill}
      style={{ marginRight: '8px', marginBottom: '8px' }}
    />
  );

  return (
    <Layout style={{ minHeight: '100vh', background: colors.white }}>
      {/* Top Navigation Header */}
      <Header
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(5px)',
          padding: '0 24px',
          borderBottom: `1px solid ${colors.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          overflow: 'visible',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Logo and Product */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '24px', height: '24px', background: 'linear-gradient(135deg, #00A3E0 0%, #7B61FF 100%)', borderRadius: '4px' }} />
            <div style={{ width: '1px', height: '24px', background: colors.border }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon path={mdiBriefcase} size={1} style={{ color: colors.primaryBlue }} />
              <span style={{ fontSize: '14px', color: colors.grey }}>Career Hub</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeNavTab} onChange={setActiveNavTab}>
            <Tab value="home" label="Home" />
            <Tab value="mycareer" label="My career" />
            <Tab value="marketplace" label="Marketplace" />
            <Tab value="myactivity" label="My activity" />
            <Tab value="people" label="People" />
            <Tab value="myteam" label="My team" />
          </Tabs>
        </div>

        {/* Right Side: Search and User */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ position: 'relative', width: '240px' }}>
            <TextInput
              placeholder="Type to search"
              style={{ 
                width: '100%', 
                borderRadius: '24px',
                paddingLeft: '40px',
              }}
            />
            <Icon 
              path={mdiMagnify} 
              size={0.9} 
              style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: colors.grey,
                pointerEvents: 'none',
              }} 
            />
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button
              style={{
                background: 'linear-gradient(90deg, #BCE4FF 0%, #CACFFC 49%, #EAD3E8 100%)',
              }}
              variant={ButtonVariant.Neutral}
              size={ButtonSize.Medium}
              shape={ButtonShape.Round}
              ariaLabel="AI Assistant"
            >
              <div style={{ width: '20px', height: '20px', background: 'linear-gradient(135deg, #00A3E0 0%, #7B61FF 100%)', borderRadius: '50%' }} />
            </Button>
            <Button
              iconProps={{ path: mdiDotsGrid as unknown as IconName }}
              variant={ButtonVariant.Neutral}
              size={ButtonSize.Medium}
              shape={ButtonShape.Round}
              ariaLabel="Apps"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar size="40px" type="round" src={user.avatarUrl} style={{ cursor: 'pointer' }}>
              {user.initials}
            </Avatar>
            <Button
              iconProps={{ path: mdiChevronDown as unknown as IconName }}
              variant={ButtonVariant.Neutral}
              size={ButtonSize.Small}
              ariaLabel="User menu"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </Header>

      {/* Profile Hero Section */}
      <div
        style={{
          position: 'relative',
          background: colors.white,
          paddingBottom: '0',
        }}
      >
        {/* Profile Card and Actions */}
        <div style={{ position: 'relative', zIndex: 1, padding: '36px 24px 0' }}>
          {/* Action Buttons - positioned at top-right of hero */}
          <div style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 10, display: 'flex', gap: '12px' }}>
            {/* Gear icon button */}
            <Button
              iconProps={{ path: mdiCog as unknown as IconName }}
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              shape={ButtonShape.Round}
              ariaLabel="Settings"
              style={{ borderColor: colors.blueGreen }}
            />
            {/* Own view button with chevron */}
            <Button
              text="Own view"
              iconProps={{ path: mdiChevronDown as unknown as IconName }}
              alignIcon={ButtonIconAlign.Right}
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              style={{ borderColor: colors.blueGreen }}
            />
          </div>

          <Row style={{ display: 'flex' }}>
            {/* Profile Card */}
            <Col xs={24} md={12} lg={8} style={{ maxWidth: '528px' }}>
              <div
                style={{
                  position: 'relative',
                }}
              >
                {/* Avatar with Status */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    padding: '0 32px',
                    marginBottom: '-50px',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(5px)',
                      borderRadius: '120px',
                      padding: '4px',
                    }}
                  >
                    <Avatar size="100px" type="round" src={user.avatarUrl} style={{ border: 'none' }}>
                      {user.initials}
                    </Avatar>
                    {/* Edit button on avatar */}
                    <div style={{ position: 'absolute', top: '-4px', right: '-4px' }}>
                      {renderEditButton()}
                    </div>
                    {/* Status icons */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '-4px',
                      }}
                    >
                      <div
                        style={{
                          background: '#B9F4E4',
                          borderRadius: '24px',
                          padding: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon path={mdiHome} size={0.8} style={{ color: '#1B5143' }} />
                      </div>
                      <div
                        style={{
                          background: colors.background,
                          borderRadius: '24px',
                          padding: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginLeft: '-4px',
                        }}
                      >
                        <Icon path={mdiOfficeBuildingMarker} size={0.8} style={{ color: colors.grey }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <Card
                  style={{
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(5px)',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '24px',
                    padding: '74px 32px 24px',
                    position: 'relative',
                  }}
                >
                  {/* Edit button inside card - top right */}
                  <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                    {renderEditButton()}
                  </div>
                  {/* Name and Title */}
                  <div style={{ marginBottom: '8px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>
                      {user.name}
                    </h2>
                    <p style={{ fontSize: '16px', color: colors.grey, margin: '4px 0 0' }}>{user.title}</p>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: colors.grey }}>{user.pronouns}</span>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: colors.grey, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon path={mdiMapMarkerOutline} size={0.7} style={{ color: colors.grey }} />
                      {user.location} ({user.localTime})
                    </span>
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', background: colors.border, margin: '16px 0' }} />

                  {/* Open to Mentoring */}
                  <CheckBox
                    toggle
                    checked={openToMentoring}
                    onChange={(e) => setOpenToMentoring(e.target.checked)}
                    label="Open to mentoring"
                  />
                </Card>
              </div>
            </Col>
          </Row>

          {/* Sub-navigation Tabs */}
          <div
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 1) 100%)',
              backdropFilter: 'blur(5px)',
              marginTop: '24px',
              padding: '0 24px',
            }}
          >
            <Tabs value={activeTab} onChange={setActiveTab}>
              <Tab value="experience" label="Experience" />
              <Tab value="career" label="Career Interests" />
              <Tab value="skills" label="Skills and Performance" />
              <Tab value="development" label="Development Plans" />
            </Tabs>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Content style={{ padding: '24px', background: colors.white }}>
        <Row gutter={24} style={{ display: 'flex', flexWrap: 'nowrap', width: '100%' }}>
          {/* Left Column - 9 columns out of 12 (75%) */}
          <Col xs={24} lg={18} style={{ flex: '0 0 75%', width: '75%', maxWidth: '75%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
              {/* About Section */}
              <div style={{ width: '100%' }}>
                <Card
                  style={{
                    width: '100%',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '24px',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>About</h3>
                    {renderEditButton()}
                  </div>
                  <p style={{ fontSize: '16px', color: colors.textDefault, lineHeight: '24px', margin: 0 }}>{user.about}</p>
                </Card>
              </div>

              {/* Skills & Endorsements */}
              <div style={{ width: '100%' }}>
                <Card
                  style={{
                    width: '100%',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '24px',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>Skills & Endorsements</h3>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <Button text="Skill assessment" variant={ButtonVariant.Neutral} size={ButtonSize.Medium} style={{ borderRadius: '24px' }} />
                      {renderEditButton()}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {skills.map((skill) => renderSkillTag(skill.name))}
                  </div>
                </Card>
              </div>

              {/* Languages */}
              <div style={{ width: '100%' }}>
                <Card
                  style={{
                    width: '100%',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '24px',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>Languages</h3>
                    {renderEditButton()}
                  </div>
                  <div style={{ display: 'flex', gap: '21px' }}>
                    {languages.map((lang) => (
                      <div
                        key={lang.name}
                        style={{
                          flex: 1,
                          border: `1px solid ${colors.border}`,
                          borderRadius: '24px',
                          padding: '9px 17px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span style={{ fontSize: '16px', fontWeight: 600, color: 'rgba(0,0,0,0.87)' }}>{lang.name}</span>
                        <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.87)' }}>{lang.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Mobility */}
              <div style={{ width: '100%' }}>
                <Card
                  style={{
                    width: '100%',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '24px',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>Mobility</h3>
                    {renderEditButton()}
                  </div>
                  <div style={{ display: 'flex', gap: '24px' }}>
                    {mobility.map((item, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', padding: '8px 0' }}>
                        <div style={{ marginRight: '12px' }}>
                          <Icon path={item.icon === 'mdiPlus' ? mdiTruckOutline : mdiAirplane} size={1} style={{ color: colors.grey }} />
                        </div>
                        <div>
                          <p style={{ fontSize: '16px', fontWeight: 600, color: colors.grey, margin: 0 }}>{item.label}</p>
                          <p style={{ fontSize: '16px', color: colors.lightGrey, margin: 0 }}>{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Projects */}
              <div style={{ width: '100%' }}>
                <Card
                  style={{
                    width: '100%',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '24px',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>Projects</h3>
                    {renderEditButton()}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {projects.map((project) => (
                      <div key={project.id} style={{ display: 'flex', gap: '15px' }}>
                        {/* Project Icon */}
                        <div
                          style={{
                            width: '50px',
                            height: '50px',
                            background: project.iconColor,
                            borderRadius: '7px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon path={mdiTimelineTextOutline} size={1} style={{ color: colors.white }} />
                        </div>
                        {/* Project Details */}
                        <div style={{ flex: 1 }}>
                          <Link
                            href="#"
                            style={{ fontSize: '18px', color: colors.primaryBlue, textDecoration: 'none' }}
                          >
                            {project.title}
                          </Link>
                          <p style={{ fontSize: '16px', color: colors.lightGrey, margin: '4px 0 16px' }}>{project.date}</p>
                          {/* Skills */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '16px' }}>
                            {project.skills.map((skill) => renderSkillTag(skill))}
                          </div>
                          <Link href="#" style={{ fontSize: '16px', fontWeight: 600, color: colors.primaryBlue }}>
                            View project details
                          </Link>
                        </div>
                        {/* Action Buttons */}
                        <div style={{ display: 'flex', gap: '12px', alignSelf: 'flex-start' }}>
                          <Button iconProps={{ path: mdiTrashCanOutline as unknown as IconName }} variant={ButtonVariant.Neutral} size={ButtonSize.Medium} shape={ButtonShape.Round} ariaLabel="Delete" />
                          <Button iconProps={{ path: mdiPencil as unknown as IconName }} variant={ButtonVariant.Neutral} size={ButtonSize.Medium} shape={ButtonShape.Round} ariaLabel="Edit" />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Pagination */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                    <Pagination
                      currentPage={currentPage}
                      pageSize={3}
                      total={30}
                      onCurrentChange={(page) => setCurrentPage(page)}
                    />
                  </div>
                </Card>
              </div>
            </div>
          </Col>

          {/* Right Sidebar - 3 columns out of 12 (25%) */}
          <Col xs={24} lg={6} style={{ flex: '0 0 25%', width: '25%', maxWidth: '25%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Organization */}
              <Card
                style={{
                  background: colors.background,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '24px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>Organization</h3>
                  <Link href="#" style={{ fontSize: '14px', color: colors.primaryBlue }}>View org chart</Link>
                </div>
                {/* Manager */}
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '14px', color: colors.grey, margin: '0 0 8px' }}>Manager</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Avatar size="40px" type="round" style={{ background: '#993838' }}>
                      {manager.initials}
                    </Avatar>
                    <div>
                      <p style={{ fontSize: '16px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>{manager.name}</p>
                      <p style={{ fontSize: '14px', color: colors.grey, margin: 0 }}>{manager.title} • {manager.company}</p>
                    </div>
                  </div>
                </div>
                {/* Peers */}
                <div>
                  <p style={{ fontSize: '14px', color: colors.grey, margin: '0 0 8px' }}>
                    Peers <Badge style={{ background: colors.primaryBlue, color: colors.white, marginLeft: '4px' }}>{peers.length}</Badge>
                  </p>
                  <div style={{ display: 'flex', marginBottom: '8px' }}>
                    {peers.slice(0, 5).map((peer, index) => (
                      <Avatar
                        key={peer.id}
                        size="40px"
                        type="round"
                        style={{
                          marginLeft: index > 0 ? '-8px' : 0,
                          border: '2px solid white',
                          background: ['#4A90D9', '#E67E22', '#27AE60', '#9B59B6', '#E74C3C'][index % 5],
                        }}
                      >
                        {peer.initials}
                      </Avatar>
                    ))}
                  </div>
                  <p style={{ fontSize: '14px', color: colors.grey, margin: 0 }}>
                    {peers.map((p) => p.name).join(', ')}
                  </p>
                </div>
              </Card>

              {/* Employee Information */}
              <Card
                style={{
                  background: colors.background,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '24px',
                  padding: '24px',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: '0 0 16px' }}>Employee information</h3>
                <div style={{ marginBottom: '12px' }}>
                  <p style={{ fontSize: '14px', color: colors.grey, margin: 0 }}>Employee ID</p>
                  <p style={{ fontSize: '16px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>{employeeInfo.employeeId}</p>
                </div>
                <div>
                  <p style={{ fontSize: '14px', color: colors.grey, margin: 0 }}>Business unit</p>
                  <p style={{ fontSize: '16px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>{employeeInfo.businessUnit}</p>
                </div>
              </Card>

              {/* Contact & Links */}
              <Card
                style={{
                  background: colors.background,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '24px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>Contact & links</h3>
                  {renderEditButton()}
                </div>
                {contactLinks.map((contact, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <Icon
                      path={contact.type === 'linkedin' ? mdiLinkedin : contact.type === 'phone' ? mdiPhone : mdiEmail}
                      size={0.8}
                      style={{ color: colors.primaryBlue }}
                    />
                    {contact.url ? (
                      <Link href={contact.url} style={{ fontSize: '14px', color: colors.primaryBlue }}>
                        {contact.value}
                      </Link>
                    ) : (
                      <span style={{ fontSize: '14px', color: colors.primaryBlue }}>{contact.value}</span>
                    )}
                  </div>
                ))}
              </Card>

              {/* Resumes */}
              <Card
                style={{
                  background: colors.background,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '24px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.textDefault, margin: 0 }}>Resumes</h3>
                  {renderEditButton()}
                </div>
                {resumes.map((resume) => (
                  <div key={resume.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                    <Icon
                      path={resume.icon === 'mdiFilePdfBox' ? mdiFilePdfBox : mdiFileWord}
                      size={0.8}
                      style={{ color: resume.icon === 'mdiFilePdfBox' ? '#E74C3C' : '#2980B9' }}
                    />
                    <div>
                      <Link href="#" style={{ fontSize: '14px', color: colors.primaryBlue }}>
                        {resume.filename}
                      </Link>
                      <p style={{ fontSize: '12px', color: colors.grey, margin: 0 }}>{resume.date}</p>
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          </Col>
        </Row>
      </Content>

      {/* Footer */}
      <div
        style={{
          background: colors.white,
          borderTop: `1px solid ${colors.border}`,
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '44px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '16px', fontWeight: 600, color: colors.textDefault }}>Powered by</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '24px', height: '24px', background: 'linear-gradient(135deg, #00A3E0 0%, #7B61FF 100%)', borderRadius: '4px' }} />
            <span style={{ fontSize: '16px', fontWeight: 600, color: colors.textDefault }}>eightfold.ai</span>
          </div>
        </div>
        <span style={{ fontSize: '16px', fontWeight: 600, color: colors.textDefault }}>#WhatsNextForYou</span>
      </div>
    </Layout>
  );
};


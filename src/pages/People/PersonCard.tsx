import { Card, Avatar, Button, ButtonVariant, ButtonSize, Row, Col, Dropdown, Badge, IconName } from '@eightfold.ai/octuple';
import Icon from '@mdi/react';
import { 
  mdiDomain, 
  mdiBookmarkOutline, 
  mdiCoffee, 
  mdiAccountMultiple, 
  mdiMapMarker,
  mdiChevronDown,
  mdiEmail,
  mdiBriefcase
} from '@mdi/js';
import { Person } from './types';

interface PersonCardProps {
  person: Person;
  isMobile?: boolean;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person, isMobile = false }) => {
  const getMentoringText = () => {
    switch (person.mentoringStatus) {
      case 'open':
        return 'Open to mentoring';
      case 'not-available':
        return 'Not available for mentoring';
      default:
        return 'Unavailable';
    }
  };

  const getMentoringColor = () => {
    return person.mentoringStatus === 'open' ? '#52c41a' : '#262626';
  };

  return (
    <Card
      style={{
        marginBottom: '12px',
        padding: '20px',
        width: '100%',
        transition: 'box-shadow 0.3s ease',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.06)';
      }}
    >
      <Row
        gutter={[24, 16]}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          width: '100%',
        }}
      >
        {/* Left Column: Avatar and Action Buttons */}
        <Col
          xs={24}
          sm={6}
          md={5}
          lg={4}
          style={{
            flex: isMobile ? '1 1 100%' : '0 0 140px',
            maxWidth: isMobile ? '100%' : '140px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Avatar size="64px" type="round" style={{ background: '#1890ff', color: '#fff', marginBottom: '8px' }}>
              {person.initials}
            </Avatar>
            
            <Button 
              text="Ask" 
              variant={ButtonVariant.Primary} 
              size={ButtonSize.Small}
              style={{ width: '100%' }}
            />
            
            {person.mentoringStatus === 'open' && (
              <Button 
                text="Request" 
                variant={ButtonVariant.Default} 
                size={ButtonSize.Small}
                style={{ width: '100%' }}
              />
            )}
            
            {/* Open to Dropdown */}
            <Dropdown
              portal
              placement="bottom-start"
              overlay={
                <div style={{ padding: '8px', minWidth: '120px' }}>
                  <div style={{ padding: '4px 8px', fontSize: '13px' }}>Options coming soon</div>
                </div>
              }
            >
              <Button 
                text="Open to" 
                variant={ButtonVariant.Default} 
                size={ButtonSize.Small}
                iconProps={{ path: mdiChevronDown as IconName }}
                style={{ 
                  width: '100%', 
                  backgroundColor: '#fafafa'
                }}
              />
            </Dropdown>

            {/* Coffee Chat Badge - Separate from button */}
            {person.coffeeChat && (
              <Badge style={{ marginTop: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Icon path={mdiCoffee as IconName} size={0.5} style={{ color: '#8B4513' }} />
              </Badge>
            )}

            {/* Action Icons */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '8px', marginTop: '8px' }}>
              <Icon path={mdiDomain as IconName} size={0.7} style={{ cursor: 'pointer', color: '#595959' }} />
              <Icon path={mdiBookmarkOutline as IconName} size={0.7} style={{ cursor: 'pointer', color: '#595959' }} />
            </div>
          </div>
        </Col>

        {/* Middle Column: Person Details */}
        <Col
          xs={24}
          sm={18}
          md={13}
          lg={13}
          style={{
            flex: isMobile ? '1 1 100%' : '1 1 50%',
            minWidth: isMobile ? '100%' : '260px',
          }}
        >
          <div>
            {/* Name and Title */}
            <h3 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: 600, color: '#262626' }}>
              {person.name}
            </h3>
            <p style={{ margin: '0 0 12px 0', color: '#595959', fontSize: '13px', lineHeight: '1.4' }}>
              {person.title} • {person.department}
            </p>

            {/* Email */}
            <div style={{ fontSize: '13px', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <Icon path={mdiEmail as IconName} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
              <span style={{ color: '#262626' }}>{person.email}</span>
            </div>

            {/* Manager */}
            <div style={{ fontSize: '13px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                <Icon path={mdiAccountMultiple as IconName} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
                <span style={{ color: '#262626' }}>{person.manager}</span>
              </div>
              <div style={{ marginLeft: '18px', fontSize: '12px', color: '#8c8c8c' }}>
                {person.managerTitle}
              </div>
            </div>

            {/* Business Unit */}
            <div style={{ fontSize: '13px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                <Icon path={mdiBriefcase as IconName} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
                <span style={{ color: '#262626', fontWeight: 500 }}>{person.businessUnit}</span>
              </div>
              <div style={{ marginLeft: '18px', fontSize: '12px', color: '#8c8c8c' }}>
                Business Unit
              </div>
            </div>

            {/* Location */}
            <div style={{ fontSize: '13px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                <Icon path={mdiMapMarker as IconName} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
                <span style={{ color: '#262626', fontWeight: 500 }}>{person.location}</span>
              </div>
              <div style={{ marginLeft: '18px', fontSize: '12px', color: '#8c8c8c' }}>
                Location
              </div>
            </div>

            {/* Mentoring Status */}
            <div style={{ fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                <Icon path={mdiAccountMultiple as IconName} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
                <span style={{ color: getMentoringColor(), fontWeight: 500 }}>
                  {getMentoringText()}
                </span>
              </div>
              <div style={{ marginLeft: '18px', fontSize: '12px', color: '#8c8c8c' }}>
                Mentoring
              </div>
            </div>
          </div>
        </Col>

        {/* Right Column: Connection Info */}
        {(person.connectionInfo || person.participationInfo) && (
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            style={{
              flex: isMobile ? '1 1 100%' : '0 0 260px',
              maxWidth: isMobile ? '100%' : '260px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {person.connectionInfo && (
                <div style={{ 
                  padding: '10px 12px', 
                  backgroundColor: '#FFF9E6', 
                  borderRadius: '4px', 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  border: '1px solid #FFE7BA'
                }}>
                  <Icon path={mdiBriefcase as IconName} size={0.5} style={{ marginRight: '8px', marginTop: '2px', color: '#8B6914', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#262626', lineHeight: '1.5' }}>{person.connectionInfo}</span>
                </div>
              )}
              {person.participationInfo && (
                <div style={{ 
                  padding: '10px 12px', 
                  backgroundColor: '#FFF9E6', 
                  borderRadius: '4px', 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  border: '1px solid #FFE7BA'
                }}>
                  <Icon path={mdiBriefcase as IconName} size={0.5} style={{ marginRight: '8px', marginTop: '2px', color: '#8B6914', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#262626', lineHeight: '1.5' }}>{person.participationInfo}</span>
                </div>
              )}
            </div>
          </Col>
        )}
      </Row>
    </Card>
  );
};

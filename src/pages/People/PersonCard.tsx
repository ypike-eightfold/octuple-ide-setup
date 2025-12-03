import { Card, Avatar, Button, ButtonVariant, ButtonSize, Dropdown, Badge, IconName } from '@eightfold.ai/octuple';
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
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '24px',
          width: '100%',
        }}
      >
        {/* Left Section: Avatar and Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '12px',
            minWidth: isMobile ? '100%' : '200px',
            flexShrink: 0,
          }}
        >
          <Avatar size="64px" type="round" style={{ background: '#1890ff', color: '#fff' }}>
            {person.initials}
          </Avatar>
          
          {/* Buttons Row - Horizontal */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
            <Button 
              text="Ask" 
              variant={ButtonVariant.Primary} 
              size={ButtonSize.Small}
            />
            
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
                style={{ backgroundColor: '#fafafa' }}
              />
            </Dropdown>
          </div>

          {/* Coffee Chat Badge */}
          {person.coffeeChat && (
            <Badge style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Icon path={mdiCoffee} size={0.5} style={{ color: '#8B4513' }} />
            </Badge>
          )}

          {/* Action Icons Row */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <Icon path={mdiDomain} size={0.7} style={{ cursor: 'pointer', color: '#595959' }} />
            <Icon path={mdiBookmarkOutline} size={0.7} style={{ cursor: 'pointer', color: '#595959' }} />
          </div>
        </div>

        {/* Middle Section: Person Details - Takes remaining space */}
        <div style={{ flex: 1, minWidth: 0, width: '100%' }}>
          {/* Name and Title */}
          <h3 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: 600, color: '#262626' }}>
            {person.name}
          </h3>
          <p style={{ margin: '0 0 16px 0', color: '#595959', fontSize: '13px', lineHeight: '1.4' }}>
            {person.title} • {person.department}
          </p>

          {/* Info Items - Horizontal with wrap */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '16px 32px',
              width: '100%',
            }}
          >
            {/* Email */}
            <div style={{ fontSize: '13px', minWidth: '180px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                <Icon path={mdiEmail} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
                <span style={{ color: '#262626' }}>{person.email}</span>
              </div>
            </div>

            {/* Manager */}
            <div style={{ fontSize: '13px', minWidth: '150px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                <Icon path={mdiAccountMultiple} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
                <span style={{ color: '#262626' }}>{person.manager}</span>
              </div>
              <div style={{ marginLeft: '18px', fontSize: '12px', color: '#8c8c8c' }}>
                Manager
              </div>
            </div>

            {/* Business Unit */}
            <div style={{ fontSize: '13px', minWidth: '120px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                <Icon path={mdiBriefcase} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
                <span style={{ color: '#262626', fontWeight: 500 }}>{person.businessUnit}</span>
              </div>
              <div style={{ marginLeft: '18px', fontSize: '12px', color: '#8c8c8c' }}>
                Business Unit
              </div>
            </div>

            {/* Location */}
            <div style={{ fontSize: '13px', minWidth: '120px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                <Icon path={mdiMapMarker} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
                <span style={{ color: '#262626', fontWeight: 500 }}>{person.location}</span>
              </div>
              <div style={{ marginLeft: '18px', fontSize: '12px', color: '#8c8c8c' }}>
                Location
              </div>
            </div>

            {/* Mentoring Status */}
            <div style={{ fontSize: '13px', minWidth: '180px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                <Icon path={mdiAccountMultiple} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
                <span style={{ color: getMentoringColor(), fontWeight: 500 }}>
                  {getMentoringText()}
                </span>
              </div>
              <div style={{ marginLeft: '18px', fontSize: '12px', color: '#8c8c8c' }}>
                Mentoring
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Connection Info */}
        {(person.connectionInfo || person.participationInfo) && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              minWidth: isMobile ? '100%' : '240px',
              maxWidth: isMobile ? '100%' : '280px',
              flexShrink: 0,
            }}
          >
            {person.connectionInfo && (
              <div style={{ 
                padding: '10px 12px', 
                backgroundColor: '#FFF9E6', 
                borderRadius: '4px', 
                display: 'flex', 
                alignItems: 'flex-start',
                border: '1px solid #FFE7BA'
              }}>
                <Icon path={mdiBriefcase} size={0.5} style={{ marginRight: '8px', marginTop: '2px', color: '#8B6914', flexShrink: 0 }} />
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
                <Icon path={mdiBriefcase} size={0.5} style={{ marginRight: '8px', marginTop: '2px', color: '#8B6914', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: '#262626', lineHeight: '1.5' }}>{person.participationInfo}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

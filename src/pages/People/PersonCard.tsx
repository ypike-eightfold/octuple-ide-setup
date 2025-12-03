import { Card, Avatar, Button, ButtonVariant, ButtonSize, IconName } from '@eightfold.ai/octuple';
import Icon from '@mdi/react';
import { 
  mdiDomain, 
  mdiBookmarkOutline, 
  mdiCoffee, 
  mdiAccountMultiple, 
  mdiMapMarker,
  mdiBriefcase,
  mdiCommentOutline,
  mdiLinkVariant,
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
          gap: '20px',
          width: '100%',
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            minWidth: isMobile ? '100%' : '320px',
            maxWidth: isMobile ? '100%' : '400px',
            position: 'relative',
          }}
        >
          {/* Top Row: Avatar + Name/Title/Email + Action Icons */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            {/* Avatar */}
            <Avatar size="48px" type="round" style={{ background: '#1890ff', color: '#fff', flexShrink: 0 }}>
              {person.initials}
            </Avatar>
            
            {/* Name, Title, Email */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: 600, color: '#262626' }}>
                {person.name}
              </h3>
              <p style={{ margin: '0 0 4px 0', color: '#595959', fontSize: '13px' }}>
                {person.title} • {person.department}
              </p>
              <p style={{ margin: 0, color: '#8c8c8c', fontSize: '13px' }}>
                {person.email}
              </p>
            </div>

            {/* Action Icons - Top Right */}
            <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
              <Icon path={mdiDomain} size={0.8} style={{ cursor: 'pointer', color: '#8c8c8c' }} />
              <Icon path={mdiBookmarkOutline} size={0.8} style={{ cursor: 'pointer', color: '#8c8c8c' }} />
            </div>
          </div>

          {/* Buttons Row */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Ask and Request buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button 
                text="Ask" 
                variant={ButtonVariant.Primary} 
                size={ButtonSize.Small}
                iconProps={{ path: mdiCommentOutline as IconName }}
              />
              {person.mentoringStatus === 'open' && (
                <Button 
                  text="Request" 
                  variant={ButtonVariant.Secondary} 
                  size={ButtonSize.Small}
                  iconProps={{ path: mdiLinkVariant as IconName }}
                />
              )}
            </div>

            {/* Open to with badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px', color: '#595959' }}>Open to</span>
              {/* Coffee Chat Badge */}
              {person.coffeeChat && (
                <div 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px', 
                    backgroundColor: '#FFF7E6', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #FFE7BA',
                  }}
                >
                  <Icon path={mdiCoffee} size={0.7} style={{ color: '#8B4513' }} />
                </div>
              )}
              {/* Mentoring Badge */}
              {person.mentoringStatus === 'open' && (
                <div 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px', 
                    backgroundColor: '#FFF7E6', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #FFE7BA',
                  }}
                >
                  <Icon path={mdiAccountMultiple} size={0.7} style={{ color: '#8B6914' }} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        {!isMobile && (
          <div 
            style={{ 
              width: '1px', 
              backgroundColor: '#e8e8e8',
              alignSelf: 'stretch',
              flexShrink: 0,
            }} 
          />
        )}

        {/* Right Section: Info Items */}
        <div 
          style={{ 
            flex: 1, 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '16px 32px',
            alignContent: 'flex-start',
          }}
        >
          {/* Manager */}
          <div style={{ fontSize: '13px', minWidth: '140px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
              <Icon path={mdiAccountMultiple} size={0.5} style={{ marginRight: '6px', color: '#8c8c8c' }} />
              <span style={{ color: '#262626' }}>{person.manager}</span>
            </div>
            <div style={{ marginLeft: '18px', fontSize: '12px', color: '#8c8c8c' }}>
              Manager
            </div>
          </div>

          {/* Business Unit */}
          <div style={{ fontSize: '13px', minWidth: '100px' }}>
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
          <div style={{ fontSize: '13px', minWidth: '140px' }}>
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
    </Card>
  );
};

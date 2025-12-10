import { useState, useEffect } from 'react';
import {
  Layout,
  Tabs,
  Tab,
  TextInput,
  TextInputIconAlign,
  Button,
  ButtonVariant,
  ButtonSize,
  ButtonIconAlign,
  Avatar,
  Dropdown,
  IconName,
} from '@eightfold.ai/octuple';
import Icon from '@mdi/react';
import {
  mdiMagnify,
  mdiMapMarker,
  mdiMenu,
  mdiChevronDown,
  mdiAccountGroup,
} from '@mdi/js';
import { PersonCard } from './PersonCard';
import { mockPeople } from './mockPeopleData';
import { Person } from './types';

const { Header, Content } = Layout;

export const PeoplePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [filteredPeople, setFilteredPeople] = useState<Person[]>(mockPeople);
  const [activeTab, setActiveTab] = useState('search');
  const [isMobile, setIsMobile] = useState(false);

  // Responsive breakpoint detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = mockPeople;

    if (searchQuery) {
      filtered = filtered.filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (locationQuery) {
      filtered = filtered.filter((person) =>
        person.location.toLowerCase().includes(locationQuery.toLowerCase())
      );
    }

    setFilteredPeople(filtered);
  }, [searchQuery, locationQuery]);

  const handleSearch = () => {
    console.log('Search triggered');
  };

  // Desktop menu items
  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'ask', label: 'Ask' },
    { key: 'career', label: 'My Career' },
    { key: 'marketplace', label: 'Marketplace' },
    { key: 'activity', label: 'My Activity' },
    { key: 'people', label: 'People' },
  ];

  // Mobile hamburger menu
  const hamburgerMenuItems = menuItems.map((item) => ({
    ...item,
    onClick: () => console.log(`Navigate to ${item.label}`),
  }));

  const containerPadding = isMobile && window.innerWidth < 768 ? '16px' : '24px';

  return (
    <Layout style={{ minHeight: '100vh', background: '#fafafa' }}>
      {/* Header */}
      <Header
        style={{
          background: '#fff',
          padding: `0 ${containerPadding}`,
          borderBottom: '1px solid #e8e8e8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon path={mdiAccountGroup as IconName} size={1.2} style={{ color: '#1890ff' }} />
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Tabs value="people" onChange={(value) => console.log('Navigate to:', value)}>
              <Tab value="home" label="Home" />
              <Tab value="ask" label="Ask" />
              <Tab value="career" label="My Career" />
              <Tab value="marketplace" label="Marketplace" />
              <Tab value="activity" label="My Activity" />
              <Tab value="people" label="People" />
            </Tabs>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <Dropdown
              portal
              placement="bottom-start"
              overlay={
                <div style={{ padding: '8px' }}>
                  {hamburgerMenuItems.map((item) => (
                    <Button
                      key={item.key}
                      text={item.label}
                      variant={ButtonVariant.Default}
                      style={{ width: '100%', justifyContent: 'flex-start', marginBottom: '4px' }}
                      onClick={item.onClick}
                    />
                  ))}
                </div>
              }
            >
              <Button
                iconProps={{ path: mdiMenu as IconName }}
                variant={ButtonVariant.Default}
                ariaLabel="Menu"
              />
            </Dropdown>
          )}
        </div>

        {/* Right side: Search + User Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {!isMobile && (
            <div style={{ position: 'relative', width: '280px' }}>
              <Icon 
                path={mdiMagnify} 
                size={0.8} 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: '#8c8c8c',
                  pointerEvents: 'none',
                  zIndex: 1,
                }} 
              />
              <TextInput
                placeholder="Search people, jobs or projects"
                style={{ width: '100%', paddingLeft: '36px' }}
              />
            </div>
          )}
          {isMobile && (
            <Button
              iconProps={{ path: mdiMagnify as IconName }}
              variant={ButtonVariant.Default}
              ariaLabel="Search"
            />
          )}
          <Avatar size="40px" type="round" style={{ background: '#1890ff', color: '#fff' }}>
            YP
          </Avatar>
        </div>
      </Header>

      {/* Main Content */}
      <Content style={{ padding: `32px ${containerPadding}`, background: '#fafafa' }}>
        {/* Page Title */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 600, margin: 0, color: '#262626' }}>People</h1>
        </div>

        {/* Secondary Tabs Navigation */}
        <div style={{ marginBottom: '24px', borderBottom: '1px solid #e8e8e8' }}>
          <Tabs value={activeTab} onChange={(value) => setActiveTab(value as string)}>
            <Tab value="search" label="Search" />
            <Tab value="mentors" label="My Mentors" />
            <Tab value="mentees" label="My Mentees" />
            <Tab value="coffee" label="Coffee Chats" />
            <Tab value="saved" label="Saved" />
          </Tabs>
        </div>

        {/* Search Section */}
        <div 
          style={{ 
            marginBottom: '16px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            gap: '12px',
          }}
        >
          <TextInput
            placeholder="Search People"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            iconProps={{ path: mdiMagnify as IconName }}
            alignIcon={TextInputIconAlign.Left}
            style={{ width: isMobile ? '100%' : '280px' }}
          />
          <TextInput
            placeholder="Search by location"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            iconProps={{ path: mdiMapMarker as IconName }}
            alignIcon={TextInputIconAlign.Left}
            style={{ width: isMobile ? '100%' : '280px' }}
          />
          <Button
            text="Go"
            variant={ButtonVariant.Primary}
            onClick={handleSearch}
            size={ButtonSize.Medium}
            style={{ width: isMobile ? '100%' : 'auto' }}
          />
        </div>

        {/* Filter Buttons */}
        <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button text="Skills" variant={ButtonVariant.Default} size={ButtonSize.Small} />
            <Button text="Title" variant={ButtonVariant.Default} size={ButtonSize.Small} />
            <Button text="Work Experience" variant={ButtonVariant.Default} size={ButtonSize.Small} />
            <Button text="Business Unit" variant={ButtonVariant.Default} size={ButtonSize.Small} />
            <Button text="Mentoring" variant={ButtonVariant.Default} size={ButtonSize.Small} />
          </div>
          <Button
            text="Show Filters"
            variant={ButtonVariant.Default}
            size={ButtonSize.Small}
            iconProps={{ path: mdiChevronDown as unknown as IconName }}
            alignIcon={ButtonIconAlign.Right}
          />
        </div>

        {/* Results Count and See Recommended Mentors */}
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#8c8c8c', fontSize: '13px', margin: 0 }}>Showing {filteredPeople.length} people.</p>
          <Button
            text="See recommended mentors"
            variant={ButtonVariant.Primary}
            size={ButtonSize.Small}
            iconProps={{ path: mdiAccountGroup as IconName }}
          />
        </div>

        {/* Person Cards */}
        <div style={{ width: '100%' }}>
          {filteredPeople.map((person) => (
            <PersonCard key={person.id} person={person} isMobile={isMobile} />
          ))}
        </div>
      </Content>
    </Layout>
  );
};

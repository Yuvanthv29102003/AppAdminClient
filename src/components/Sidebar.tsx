import { useState } from 'react';

import { ThirdLevelPanel } from './ThirdLevelPanel';

import dashboardIcon from '../assets/dashboard.svg';
import audienceIcon from '../assets/audience.svg';
import reportsIcon from '../assets/reports.svg';
import campaignsIcon from '../assets/campaigns.svg';
import templatesIcon from '../assets/templates.svg';
import automationsIcon from '../assets/automations.svg';
import configurationsIcon from '../assets/configurations.svg';
import leadsIcon from '../assets/leads.svg';
import logoutIcon from '../assets/logout.svg';
import arrowRightIcon from '../assets/arrow-right.svg';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: dashboardIcon },
  { id: 'audience', label: 'Audience', icon: audienceIcon },
  { id: 'reports', label: 'Reports', icon: reportsIcon },
  { id: 'campaigns', label: 'Campaigns', icon: campaignsIcon },
  { id: 'templates', label: 'Templates', icon: templatesIcon },
  { id: 'automations', label: 'Automations', icon: automationsIcon },
  { id: 'configurations', label: 'Configurations', icon: configurationsIcon },
  { id: 'leads', label: 'Leads', icon: leadsIcon },
  { id: 'logout', label: 'Logout', icon: logoutIcon },
];

const audienceSubItems = [
  { id: 'users', label: 'Users Management' },
  { id: 'posts', label: 'Post Management' },
  { id: 'stories', label: 'Story Management' },
  { id: 'live', label: 'Live Management' },
];

const userManagementSubItems = [
  { id: 'top-influencer', label: 'Top Influencer' },
  { id: 'audience-mgmt', label: 'Audience Management' },
];

const postManagementSubItems = [
  { id: 'all-posts', label: 'All Post List' },
  { id: 'trending', label: 'Trending Post' },
  { id: 'boost', label: 'Boost Post List' },
  { id: 'reported', label: 'Reported Post List' },
  { id: 'blocked', label: 'Block Post List' },
];

const storyManagementSubItems = [
  { id: 'all-stories', label: 'All Story List' },
  { id: 'sponsored-stories', label: 'Sponsored Story List' },
];

const liveManagementSubItems = [
  { id: 'all-live', label: 'All Live Users' },
  { id: 'live-users', label: 'Live Users' },
];

export function Sidebar() {
  const [activeId, setActiveId] = useState('audience');
  const [activeAudienceSubId, setActiveAudienceSubId] = useState('users');
  const [isAudienceOpen, setIsAudienceOpen] = useState(false);
  const [activeUserMgmtSubId, setActiveUserMgmtSubId] = useState('top-influencer');
  const [isUserMgmtOpen, setIsUserMgmtOpen] = useState(false);
  const [activePostMgmtSubId, setActivePostMgmtSubId] = useState('all-posts');
  const [isPostMgmtOpen, setIsPostMgmtOpen] = useState(false);
  const [activeStoryMgmtSubId, setActiveStoryMgmtSubId] = useState('all-stories');
  const [isStoryMgmtOpen, setIsStoryMgmtOpen] = useState(false);
  const [activeLiveMgmtSubId, setActiveLiveMgmtSubId] = useState('all-live');
  const [isLiveMgmtOpen, setIsLiveMgmtOpen] = useState(false);

  return (
    <aside className="relative mt-4 h-[1034px] w-[250px] bg-[#000000] text-[#dcdcdc] flex flex-col py-4">
      <nav className="flex-1 flex flex-col gap-0.5 mt-3">
        {menuItems.map((item) => {
          const isActive = item.id === activeId;
          const showArrow = item.id === 'reports' || item.id === 'configurations' || item.id === 'audience';

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === 'audience') {
                  setActiveId('audience');
                  setIsAudienceOpen((prev) => !prev);
                } else {
                  setActiveId(item.id);
                  setIsAudienceOpen(false);
                  setIsUserMgmtOpen(false);
                  setIsPostMgmtOpen(false);
                  setIsStoryMgmtOpen(false);
                  setIsLiveMgmtOpen(false);
                }
              }}
              className={
                'relative flex items-center gap-3 px-8 h-11 text-sm font-medium transition-colors cursor-pointer ' +
                (isActive ? 'bg-[#1a1a1a]' : 'bg-transparent! hover:bg-transparent!')
              }
            >
              {isActive && (
                <span
                  className="absolute left-0 top-0 h-full w-[4px] bg-[linear-gradient(117.65deg,#8000FF_35%,#FF0091_67.19%)]"
                />
              )}
              <span className="w-[24px] h-[24px] flex items-center justify-center">
                <img src={item.icon} alt={item.label} className="w-[24px] h-[24px] object-contain" />
              </span>
              <span className="text-left">{item.label}</span>
              {showArrow && (
                <span className="ml-auto flex items-center justify-center">
                  <img
                    src={arrowRightIcon}
                    alt="Section navigation"
                    className={
                      'w-[24px] h-[24px] object-contain ' +
                      (isActive ? '' : 'grayscale opacity-60')
                    }
                  />
                </span>
              )}
            </button>
          );
        })}
      </nav>
      {activeId === 'audience' && isAudienceOpen && (
        <div className="absolute top-[74px] left-full h-auto w-[250px] bg-[#000000] text-[#dcdcdc] shadow-lg">
          {audienceSubItems.map((subItem) => {
            const isSubActive = subItem.id === activeAudienceSubId;

            return (
              <button
                key={subItem.id}
                type="button"
                onClick={() => {
                  setActiveAudienceSubId(subItem.id);
                  if (subItem.id === 'users') {
                    setIsUserMgmtOpen((prev) => !prev);
                    setIsPostMgmtOpen(false);
                    setIsStoryMgmtOpen(false);
                    setIsLiveMgmtOpen(false);
                  } else if (subItem.id === 'posts') {
                    setIsPostMgmtOpen((prev) => !prev);
                    setIsUserMgmtOpen(false);
                    setIsStoryMgmtOpen(false);
                    setIsLiveMgmtOpen(false);
                  } else if (subItem.id === 'stories') {
                    setIsStoryMgmtOpen((prev) => !prev);
                    setIsUserMgmtOpen(false);
                    setIsPostMgmtOpen(false);
                    setIsLiveMgmtOpen(false);
                  } else if (subItem.id === 'live') {
                    setIsLiveMgmtOpen((prev) => !prev);
                    setIsUserMgmtOpen(false);
                    setIsPostMgmtOpen(false);
                    setIsStoryMgmtOpen(false);
                  } else {
                    setIsUserMgmtOpen(false);
                    setIsPostMgmtOpen(false);
                    setIsStoryMgmtOpen(false);
                    setIsLiveMgmtOpen(false);
                  }
                }}
                className={
                  'relative flex items-center justify-between px-6 h-11 text-sm font-medium w-full text-left cursor-pointer ' +
                  (isSubActive ? 'bg-[#1a1a1a]' : 'bg-transparent hover:bg-[#1a1a1a]/60')
                }
              >
                <span>{subItem.label}</span>
                <img
                  src={arrowRightIcon}
                  alt="Section navigation"
                  className={
                    'w-[16px] h-[16px] object-contain ' +
                    (isSubActive ? '' : 'grayscale opacity-60')
                  }
                />
              </button>
            );
          })}
        </div>
      )}
      <ThirdLevelPanel
        visible={activeId === 'audience' && isAudienceOpen && activeAudienceSubId === 'posts' && isPostMgmtOpen}
        topClass="top-[118px]"
        items={postManagementSubItems}
        activeId={activePostMgmtSubId}
        onChange={setActivePostMgmtSubId}
      />
      <ThirdLevelPanel
        visible={activeId === 'audience' && isAudienceOpen && activeAudienceSubId === 'stories' && isStoryMgmtOpen}
        topClass="top-[162px]"
        items={storyManagementSubItems}
        activeId={activeStoryMgmtSubId}
        onChange={setActiveStoryMgmtSubId}
      />
      <ThirdLevelPanel
        visible={activeId === 'audience' && isAudienceOpen && activeAudienceSubId === 'live' && isLiveMgmtOpen}
        topClass="top-[206px]"
        items={liveManagementSubItems}
        activeId={activeLiveMgmtSubId}
        onChange={setActiveLiveMgmtSubId}
      />
      <ThirdLevelPanel
        visible={activeId === 'audience' && isAudienceOpen && activeAudienceSubId === 'users' && isUserMgmtOpen}
        topClass="top-[74px]"
        items={userManagementSubItems}
        activeId={activeUserMgmtSubId}
        onChange={setActiveUserMgmtSubId}
      />
    </aside>
  );
}

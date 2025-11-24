import type { FC } from 'react';
import { TopBar } from '../components/TopBar';

export const TopInfluencers: FC = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-[#4D54640D]">
      <div className="flex flex-1">
        <main className="flex-1 bg-[#4D54640D]">
          <TopBar heading="Top Influencer" />
          
          {/* Content Area */}
          <div className="p-6">
            {/* Main content will go here */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-600">Top Influencers content will be displayed here.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

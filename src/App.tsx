import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { TopInfluencers } from './pages/TopInfluencers'
import { UserProfile } from './pages/UserProfile'
import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState<'top-influencer' | 'user-profile'>('top-influencer')

  const renderPage = () => {
    switch (currentPage) {
      case 'user-profile':
        return <UserProfile />
      case 'top-influencer':
      default:
        return <TopInfluencers />
    }
  }

  return (
    <div className="h-screen overflow-auto flex flex-col bg-black text-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-1 bg-neutral-950">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App

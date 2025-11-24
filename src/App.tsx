import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { TopInfluencers } from './pages/TopInfluencers'

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-black text-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-neutral-950">
          <TopInfluencers />
        </main>
      </div>
    </div>
  )
}

export default App

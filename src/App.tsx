import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-black text-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-neutral-950" />
      </div>
    </div>
  )
}

export default App

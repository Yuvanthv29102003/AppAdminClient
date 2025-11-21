import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <Sidebar />
      <main className="flex-1 bg-neutral-950">
        {/* Content area */}
      </main>
    </div>
  )
}

export default App

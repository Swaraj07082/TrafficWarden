import TrafficWardenForm  from "../components/traffic-warden-form";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">TrafficWarden</h1>
          <p className="mt-1 text-sm text-gray-500">Network Traffic Analysis System</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <TrafficWardenForm/>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} TrafficWarden. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


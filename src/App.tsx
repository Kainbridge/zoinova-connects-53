import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('App component mounted successfully')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 animate-fade-in">
            Welcome to Zoinova
          </h1>
          
          <div className="bg-white rounded-xl shadow-xl p-8 space-y-6 transform hover:scale-105 transition-transform duration-300">
            <p className="text-xl text-gray-600 leading-relaxed">
              A modern web application built with React and Tailwind CSS.
            </p>
            
            <div className="flex justify-center">
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg max-w-md">
                <p className="text-blue-800 font-medium">
                  If you can see this message, the application is rendering correctly!
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['Fast', 'Reliable', 'Modern'].map((feature) => (
              <div key={feature} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
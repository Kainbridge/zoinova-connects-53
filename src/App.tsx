import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('App component mounted successfully')
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Zoinova</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-lg text-center mb-4">
            A modern web application built with React and Tailwind CSS.
          </p>
          <div className="flex justify-center">
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800">
                If you can see this message, the application is rendering correctly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
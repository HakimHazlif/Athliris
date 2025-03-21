import React from 'react'
import {
  Activity,
  BarChart2,
  Home,
  Settings,
  Apple,
  User,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'

const FitnessTrackerHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold">FitTrack</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-indigo-200 transition"
              >
                <Home size={18} />
                <span>Home</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-indigo-200 transition"
              >
                <Activity size={18} />
                <span>My Workouts</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-indigo-200 transition"
              >
                <Apple size={18} />
                <span>My Nutrition</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-indigo-200 transition"
              >
                <BarChart2 size={18} />
                <span>Progress</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-indigo-200 transition"
              >
                <Settings size={18} />
                <span>Settings</span>
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="px-4 py-2 text-indigo-600 bg-white rounded-md hover:bg-indigo-100 transition">
                Log In
              </button>
              <button className="px-4 py-2 text-white bg-indigo-800 rounded-md hover:bg-indigo-900 transition">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-indigo-700 space-y-3">
            <a
              href="#"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-800 rounded-md transition"
            >
              <Home size={18} />
              <span>Home</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-800 rounded-md transition"
            >
              <Activity size={18} />
              <span>My Workouts</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-800 rounded-md transition"
            >
              <Apple size={18} />
              <span>My Nutrition</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-800 rounded-md transition"
            >
              <BarChart2 size={18} />
              <span>Progress</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2 hover:bg-indigo-800 rounded-md transition"
            >
              <Settings size={18} />
              <span>Settings</span>
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-indigo-600">
              <button className="px-4 py-2 text-indigo-600 bg-white rounded-md hover:bg-indigo-100 transition">
                Log In
              </button>
              <button className="px-4 py-2 text-white bg-indigo-800 rounded-md hover:bg-indigo-900 transition">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Track Your Fitness Journey
              </h1>
              <p className="text-lg mb-8">
                Achieve your fitness goals with our comprehensive tracking
                tools, personalized workouts, and nutrition planning.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-md hover:bg-indigo-100 transition">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-indigo-800 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/api/placeholder/600/400"
                alt="Fitness tracking dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Available Workouts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available Workouts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workout Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/api/placeholder/400/200"
                alt="Strength Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Strength Training</h3>
                <p className="text-gray-600 mb-4">
                  Build muscle and increase your strength with our comprehensive
                  strength training programs.
                </p>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                  View Workouts
                </button>
              </div>
            </div>

            {/* Workout Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/api/placeholder/400/200"
                alt="Cardio Workouts"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cardio Workouts</h3>
                <p className="text-gray-600 mb-4">
                  Improve your endurance and burn calories with our effective
                  cardio workout routines.
                </p>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                  View Workouts
                </button>
              </div>
            </div>

            {/* Workout Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/api/placeholder/400/200"
                alt="Flexibility & Yoga"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Flexibility & Yoga</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your flexibility, balance, and mental well-being with
                  our yoga and stretching routines.
                </p>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                  View Workouts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <a
              href="#"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <Activity size={32} className="text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Workout Library</h3>
              <p className="text-gray-600 text-sm">
                Explore hundreds of exercises and workouts
              </p>
            </a>
            <a
              href="#"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <Apple size={32} className="text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Meal Plans</h3>
              <p className="text-gray-600 text-sm">
                Discover nutrition plans tailored to your goals
              </p>
            </a>
            <a
              href="#"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <BarChart2 size={32} className="text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">
                Monitor your achievements over time
              </p>
            </a>
            <a
              href="#"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <User size={32} className="text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Profile Settings</h3>
              <p className="text-gray-600 text-sm">
                Customize your fitness profile
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4">FitTrack</h2>
              <p className="text-gray-400">Your complete fitness companion</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Workouts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Nutrition
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Progress
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} FitTrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FitnessTrackerHome

import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Blood Donation" className="h-8 w-8" />
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600">About Us</Link>
              <Link to="/find-blood" className="text-gray-700 hover:text-red-600">Find Blood</Link>
              <Link to="/register" className="text-gray-700 hover:text-red-600">Register Now</Link>
            </div>
          </div>
          <Link to="/login" className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50">
            Log In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center px-4">
          <h1 className="text-6xl font-bold mb-4">
            EVERY
            <br />
            <span className="text-red-600">DROP</span>
            <br />
            COUNTS
          </h1>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md w-fit hover:bg-red-700 transition-colors">
            Donate Now
          </button>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <div className="space-y-4">
            {[
              "Promote the importance of donating blood.",
              "Allow anyone to easily register as donors.",
              "Share general information about blood types, eligibility, donation process, and benefits.",
              "Securely store the donors information for admin and staff."
            ].map((mission, index) => (
              <div key={index} className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>{mission}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why You Should Donate</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Help Others</h3>
              <p>With a simple donation, you can help up to 3 people</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Check-up</h3>
              <p>You can get a free medical check-up</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p>You can make a difference in your community</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Donate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How to donate blood ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-500">1</span>
              </div>
              <p className="text-sm">
                • Finish a donor registration from staff personnel and health screening form from nurse.
                <br />
                • Make sure you're eligible to donate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-500">2</span>
              </div>
              <p className="text-sm">
                • Choose a donation center or blood drive location.
                <br />
                • Get a blood card, eat a healthy snack and enjoy humanitarian feeling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-500">3</span>
              </div>
              <p className="text-sm">
                • Visit the donation center on your appointment.
                <br />
                • Complete the donation, then rest for a few minutes, take a snack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.svg" alt="Blood Donation" className="h-8 w-8 mb-4" />
              <p className="text-sm">Ready to get started?</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-700">
                Donate
              </button>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/our-story" className="hover:text-red-500">Our story</Link></li>
                <li><Link to="/benefits" className="hover:text-red-500">Benefits</Link></li>
                <li><Link to="/team" className="hover:text-red-500">Team</Link></li>
                <li><Link to="/careers" className="hover:text-red-500">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faq" className="hover:text-red-500">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-red-500">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-red-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-red-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
            <div className="flex space-x-4">
              <Link to="/terms" className="hover:text-red-500">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-red-500">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

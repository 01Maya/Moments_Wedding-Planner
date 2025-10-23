export default function Footer() {
  return (
    <footer className="relative border-t border-rose-200/30 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50/50 to-pink-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-gray-800 mb-4 text-lg">Moments</h3>
            <p className="text-sm text-gray-600">Creating unforgettable wedding experiences.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors duration-300 ease-out">
                  Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors duration-300 ease-out">
                  Coordination
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors duration-300 ease-out">
                  Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#services" className="hover:text-rose-600 transition-colors duration-300 ease-out">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose-600 transition-colors duration-300 ease-out">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-600 transition-colors duration-300 ease-out">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors duration-300 ease-out">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors duration-300 ease-out">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors duration-300 ease-out">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rose-200/30 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2025 Moments Wedding Planning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

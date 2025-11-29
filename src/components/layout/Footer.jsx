import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolio-data'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 text-sm">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {personalInfo.social.github && (
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-primary-400 transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {personalInfo.social.linkedin && (
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-primary-400 transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              {personalInfo.social.twitter && (
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-primary-400 transition-all transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
            <div className="mt-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-sm hover:text-primary-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by {personalInfo.name} © {currentYear}
          </p>
          <p className="mt-2 text-gray-500">
            Built with React, TailwindCSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


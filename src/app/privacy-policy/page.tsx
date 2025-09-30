"use client";
import { Shield, Mail, Phone, MapPin,} from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 mt-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 shadow-2xl shadow-cyan-500/50">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          {/* <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
            <span>Effective Date: January 1, 2025</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>Last Updated: January 1, 2025</span>
          </div> */}
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At <span className="text-cyan-400 font-semibold">Digital Market Mart</span>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website{' '}
              <a href="https://www.digitalmarketmart.com" className="text-cyan-400 hover:text-cyan-300 underline">
                www.digitalmarketmart.com
              </a>{' '}
              or use our services.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We may collect the following types of information:</p>
            
            <div className="ml-4 mb-8">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Name, email address, phone number, company details, and billing information provided when you contact us or purchase services.
              </p>
              
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Non-Personal Information</h3>
              <p className="text-gray-300 leading-relaxed">
                Browser type, IP address, cookies, device information, and analytics data.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-8 ml-4">
              <li>Provide and improve our services.</li>
              <li>Respond to inquiries, process payments, and deliver requested services.</li>
              <li>Send newsletters, updates, and promotional materials (with your consent).</li>
              <li>Ensure compliance with legal obligations.</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Sharing of Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. However, we may share data with:
            </p>
            
            <div className="ml-4 mb-8">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Service Providers</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Trusted third parties who assist in operations (payment processors, hosting providers, analytics tools).
              </p>
              
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Legal Authorities</h3>
              <p className="text-gray-300 leading-relaxed">
                If required by law, regulation, or legal process.
              </p>
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We use cookies to improve user experience and analyze website traffic. You can disable cookies in your browser settings, but some features may not work properly.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites.
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              You have the right to access, update, or request deletion of your personal information. To exercise these rights, contact us at{' '}
              <a href="mailto:helpdesk@digitalmarketmart.com" className="text-cyan-400 hover:text-cyan-300 underline">
                helpdesk@digitalmarketmart.com
              </a>.
            </p>

            {/* Section 8 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date.
            </p>

            {/* Section 9 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              For questions about this Privacy Policy, contact us at:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold">Email:</p>
                  <a href="mailto:helpdesk@digitalmarketmart.com" className="text-cyan-400 hover:text-cyan-300">
                    helpdesk@digitalmarketmart.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold">Phone:</p>
                  <a href="tel:+12402176149" className="text-cyan-400 hover:text-cyan-300">
                    +1 (240) 217-6149
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold">Address:</p>
                  <p className="text-cyan-400">30 Summer St, Hagerstown, MD 21740</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Your Privacy Matters</h4>
              <p className="text-gray-300 text-sm">
                We are committed to protecting your privacy and handling your data responsibly. If you have any concerns about how your information is being used, please don&apos;t hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
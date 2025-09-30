"use client";
import { Scale, Mail, Phone, MapPin, AlertTriangle } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 ">
        {/* Header */}
        <div className="text-center mb-16 mt-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mb-6 shadow-2xl shadow-purple-500/50">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Terms and Conditions
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
              Welcome to <span className="text-purple-400 font-semibold">Digital Market Mart</span>
                (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website{' '}

              <a href="https://www.digitalmarketmart.com" className="text-purple-400 hover:text-purple-300 underline">
                www.digitalmarketmart.com
              </a>{' '}
              or services, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Services</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Digital Market Mart provides digital solutions including web development, SEO, digital marketing, IT consulting, and financial literacy/business consulting.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Eligibility</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              By using our services, you confirm that you are at least 18 years old or have legal parental/guardian consent.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Use of Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-8 ml-4">
              <li>Provide accurate and complete information when engaging with us.</li>
              <li>Not use our services for unlawful or unauthorized purposes.</li>
              <li>Respect intellectual property rights related to our content and services.</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Payments and Refunds</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-8 ml-4">
              <li>All fees are due as agreed upon before service delivery.</li>
              <li>Refunds are subject to our <span className="text-purple-400 font-semibold">Refund Policy</span>, available on the website.</li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              All website content, branding, graphics, and service materials remain the intellectual property of Digital Market Mart unless otherwise stated. You may not reproduce, distribute, or exploit content without prior written consent.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Digital Market Mart is not liable for indirect, incidental, or consequential damages arising from the use of our services. While we strive for accuracy, we do not guarantee error-free or uninterrupted service.
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Third-Party Tools & Links</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We may use third-party tools or link to external websites. We are not responsible for any issues or damages caused by third-party platforms.
            </p>

            {/* Section 8 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We reserve the right to suspend or terminate services if a user violates these Terms or engages in harmful activities.
            </p>

            {/* Section 9 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              These Terms shall be governed by and interpreted in accordance with the laws of Maryland, United States.
            </p>

            {/* Section 10 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We may update these Terms from time to time. Updates will be effective immediately upon posting on the website.
            </p>

            {/* Section 11 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              For questions regarding these Terms and Conditions, please contact:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold">Email:</p>
                  <a href="mailto:helpdesk@digitalmarketmart.com" className="text-purple-400 hover:text-purple-300">
                    helpdesk@digitalmarketmart.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold">Phone:</p>
                  <a href="tel:+12402176149" className="text-purple-400 hover:text-purple-300">
                    +1 (240) 217-6149
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold">Address:</p>
                  <p className="text-purple-400">30 Summer St, Hagerstown, MD 21740</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-6 border border-yellow-400/30">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Important Notice</h4>
              <p className="text-gray-300 text-sm">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
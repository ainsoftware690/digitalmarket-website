"use client";
import { DollarSign, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 mt-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-6 shadow-2xl shadow-emerald-500/50">
            <DollarSign className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent mb-4">
            Refund Policy
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
              At <span className="text-emerald-400 font-semibold">Digital Market Mart</span>, we strive to provide the highest quality digital services and consulting solutions. We value your trust and aim for complete client satisfaction. This Refund Policy outlines the conditions under which refunds may be issued.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. General Policy</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-8 ml-4">
              <li>
                All payments made for digital services (including but not limited to web development, mobile app development, SEO, digital marketing, IT consulting, and financial literacy/business consulting) are <span className="text-emerald-400 font-semibold">non-refundable</span> once the project or consultation has started.
              </li>
              <li>Refunds may be considered only in specific cases outlined below.</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Eligibility for Refunds</h2>
            <p className="text-gray-300 leading-relaxed mb-4">A refund may be granted if:</p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-8 ml-4">
              <li>The project has not been initiated after payment.</li>
              <li>Services delivered are not in accordance with the agreed scope of work (subject to review and verification).</li>
              <li>Duplicate payments or accidental overcharges have occurred.</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Non-Refundable Situations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Refunds will <span className="text-red-400 font-semibold">not</span> be issued if:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-8 ml-4">
              <li>The project has been partially or fully delivered.</li>
              <li>Delays are caused by incomplete or delayed client communication, inputs, or approvals.</li>
              <li>The client changes the scope of work or requests additional features beyond the original agreement.</li>
              <li>The services have been consumed (e.g., SEO campaigns, consultations, or digital marketing strategies already executed).</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Refund Request Process</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-8 ml-4">
              <li>
                Refund requests must be submitted in writing to{' '}
                <a href="mailto:helpdesk@digitalmarketmart.com" className="text-emerald-400 hover:text-emerald-300 underline">
                  helpdesk@digitalmarketmart.com
                </a>{' '}
                within <span className="text-emerald-400 font-semibold">7 days</span> of payment.
              </li>
              <li>
                Each request will be carefully reviewed, and eligible refunds will be processed within{' '}
                <span className="text-emerald-400 font-semibold">7–14 business days</span> via the original payment method.
              </li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Service Credits</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              In certain cases, instead of a monetary refund, Digital Market Mart may offer{' '}
              <span className="text-emerald-400 font-semibold">service credits</span> that can be applied toward future projects or services.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you have questions or need assistance regarding this Refund Policy, please contact:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold">Email:</p>
                  <a href="mailto:helpdesk@digitalmarketmart.com" className="text-emerald-400 hover:text-emerald-300">
                    helpdesk@digitalmarketmart.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold">Phone:</p>
                  <a href="tel:+12402176149" className="text-emerald-400 hover:text-emerald-300">
                    +1 (240) 217-6149
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-semibold">Address:</p>
                  <p className="text-emerald-400">30 Summer St, Hagerstown, MD 21740</p>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/30 mt-8">
              <p className="text-gray-300 text-sm leading-relaxed">
                By engaging with our services, you acknowledge and agree to the terms outlined in this Refund Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-6 border border-yellow-400/30">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Need Help?</h4>
              <p className="text-gray-300 text-sm">
                If you have any concerns about our Refund Policy or need clarification on any terms, our team is here to assist you. Please reach out to us through any of the contact methods listed above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
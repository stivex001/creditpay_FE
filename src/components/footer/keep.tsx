import { FooterLinkSection } from "../footer/FooterLink";
import { EmailSubscription } from "../footer/EmailSubscribtion";
import { SocialIcon } from "../footer/SocialIcon";
import { AppDownloadButton } from "../footer/AppDownloadButton";
import { QRCode } from "../footer/QRcode";

const supportLinks = [
  { text: "27, Plot Ajijikla,", url: "#" },
  { text: "Ajirnobi Ln, Abule", url: "#" },
  { text: "Egba, Lagos State.", url: "#" },
  { text: "info@CreditPay.com", url: "mailto:info@CreditPay.com" },
  { text: "+234 902 920 0928", url: "tel:+2349029200928" },
];

const accountLinks = [
  { text: "My Account", url: "/my-account" },
  { text: "Login / Register", url: "/login" },
  { text: "Loan Request", url: "/loan-request" },
  { text: "Transactions", url: "/transactions" },
  { text: "Bill payment", url: "/bill-payment" },
];

const quickLinks = [
  { text: "Privacy Policy", url: "/privacy-policy" },
  { text: "Terms Of Use", url: "/terms-of-use" },
  { text: "FAQ", url: "/faq" },
  { text: "Contact", url: "/contact" },
];
export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: CreditPay */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">CreditPay</h2>
            <p className="mb-2">Subscribe</p>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            <EmailSubscription />
          </div>

          {/* Column 2: Support */}
          <FooterLinkSection title="Support" links={supportLinks} />

          {/* Column 3: Account */}
          <FooterLinkSection title="Account" links={accountLinks} />

          {/* Column 4: Quick Link & Download App */}
          <div className="flex flex-col">
            <FooterLinkSection title="Quick Link" links={quickLinks} />

            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">Download App</h3>
              <p className="text-xs mb-2">Save ₦100 with App (New User Only)</p>

              <div className="flex space-x-4 items-center">
                <QRCode />
                <div className="flex flex-col space-y-2">
                  <AppDownloadButton text="Google Play" />
                  <AppDownloadButton text="App Store" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social icons and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-blue-800">
          <p className="text-sm text-gray-300">
            © Copyright CreditPay 2025. All right reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Facebook Icon */}
            <SocialIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </SocialIcon>

            {/* Twitter Icon */}
            <SocialIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </SocialIcon>

            {/* Instagram Icon */}
            <SocialIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </SocialIcon>

            {/* LinkedIn Icon */}
            <SocialIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

// pages/Privacy.jsx
import { Link } from "react-router-dom";
import "./Privacy.css";

const Privacy = () => {
  return (
    <main className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="hero-background"></div>
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: March 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-wrapper">
            
            <div className="privacy-section">
              <h2>1. Introduction</h2>
              <p>
                Jireh Trading Group ("we," "our," or "us") is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website 
                or use our logistics and transport services.
              </p>
            </div>

            <div className="privacy-section">
              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide:</p>
              <ul>
                <li>Name and contact details (email, phone number, address)</li>
                <li>Company information and business registration details</li>
                <li>Account credentials for our logistics platform</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information for:</p>
              <ul>
                <li>Providing and managing our transport and logistics services</li>
                <li>Processing payments and generating invoices</li>
                <li>Vehicle tracking and shipment monitoring</li>
                <li>Communicating about services, updates, and promotions</li>
                <li>Improving our website and customer experience</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>4. Sharing Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Payment processors, IT service providers, and logistics partners</li>
                <li><strong>Transport Partners:</strong> For coordinating deliveries and shared load services</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </div>

            <div className="privacy-section">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security 
                measures to protect your personal information, including:
              </p>
              <ul>
                <li>Encryption of sensitive data</li>
                <li>Secure socket layer technology (SSL)</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication procedures</li>
              </ul>
              <p>
                However, no method of transmission over the Internet is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="privacy-section">
              <h2>6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your 
                experience on our website. Cookies help us:
              </p>
              <ul>
                <li>Remember your preferences</li>
                <li>Understand how you interact with our site</li>
                <li>Improve website functionality</li>
                <li>Analyze traffic patterns</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling 
                cookies may affect certain features of our website.
              </p>
            </div>

            <div className="privacy-section">
              <h2>7. Your Rights</h2>
              <p>Under South African law, you have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the Information Regulator</li>
              </ul>
              <p>
                To exercise these rights, please contact us at info@jirehtradinggroup.co.za.
              </p>
            </div>

            <div className="privacy-section">
              <h2>8. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to 
                fulfill the purposes outlined in this Privacy Policy, unless a 
                longer retention period is required or permitted by law. This 
                includes retaining information for:
              </p>
              <ul>
                <li>Legal and regulatory compliance</li>
                <li>Resolution of disputes</li>
                <li>Enforcement of agreements</li>
                <li>Legitimate business purposes</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not 
                responsible for the privacy practices or content of these external 
                sites. We encourage you to review their privacy policies before 
                providing any personal information.
              </p>
            </div>

            <div className="privacy-section">
              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18. We do not 
                knowingly collect personal information from minors. If you become 
                aware that a minor has provided us with personal information, 
                please contact us.
              </p>
            </div>

            <div className="privacy-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify 
                you of any changes by posting the new policy on this page with an 
                updated effective date. We encourage you to review this policy 
                periodically.
              </p>
            </div>

            <div className="privacy-section">
              <h2>12. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our 
                data practices, please contact us:
              </p>
              <address>
                Jireh Trading Group<br />
                Durban, KwaZulu-Natal<br />
                Email: info@jirehtradinggroup.co.za<br />
                Phone: +27 78 738 2435
              </address>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
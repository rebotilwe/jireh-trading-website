// pages/Terms.jsx
import { Link } from "react-router-dom";
import "./Terms.css";

const Terms = () => {
  return (
    <main className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="hero-background"></div>
        <div className="container">
          <h1>Terms and Conditions</h1>
          <p>Last updated: March 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            
            <div className="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Jireh Trading Group website and services, 
                you agree to be bound by these Terms and Conditions. If you do not 
                agree with any part of these terms, you may not use our services.
              </p>
            </div>

            <div className="terms-section">
              <h2>2. Services Description</h2>
              <p>
                Jireh Trading Group provides agricultural logistics and transport 
                solutions including but not limited to:
              </p>
              <ul>
                <li>Transport coordination and vehicle tracking</li>
                <li>Shared load services for cost-effective delivery</li>
                <li>Digital logistics management and invoicing</li>
                <li>Supplier logistics platform access for approved partners</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. User Accounts and Registration</h2>
              <p>
                Access to certain features of our platform may require registration. 
                You agree to:
              </p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any changes to your information</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that violate 
                these terms or provide false information.
              </p>
            </div>

            <div className="terms-section">
              <h2>4. Service Fees and Payments</h2>
              <p>
                Fees for our services are outlined in your service agreement or 
                as communicated during the booking process. Payment terms include:
              </p>
              <ul>
                <li>Invoices are generated digitally through our logistics system</li>
                <li>Payment is due within the timeframe specified on the invoice</li>
                <li>Late payments may incur additional charges</li>
                <li>All fees are in South African Rand (ZAR) unless stated otherwise</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>5. Transport and Logistics Terms</h2>
              <p>
                For transport and logistics services:
              </p>
              <ul>
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Clients must ensure proper packaging and documentation</li>
                <li>We reserve the right to refuse hazardous or prohibited items</li>
                <li>Vehicle tracking is provided for transparency and security</li>
                <li>Shared load services combine shipments to optimize costs</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>6. Liability and Insurance</h2>
              <p>
                Jireh Trading Group maintains appropriate insurance for our operations. 
                However:
              </p>
              <ul>
                <li>Clients are encouraged to secure their own cargo insurance</li>
                <li>We are not liable for indirect or consequential damages</li>
                <li>Liability is limited to the value of the service fees paid</li>
                <li>Force majeure events may affect service delivery</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>7. Supplier Logistics Platform</h2>
              <p>
                Access to our web-based logistics system is granted to approved 
                suppliers and partners. Users agree to:
              </p>
              <ul>
                <li>Use the platform only for authorized business purposes</li>
                <li>Maintain confidentiality of login credentials</li>
                <li>Not attempt to circumvent security measures</li>
                <li>Report any system issues or vulnerabilities</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>8. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to logos, 
                text, graphics, and software, is the property of Jireh Trading Group 
                and protected by South African and international copyright laws.
              </p>
            </div>

            <div className="terms-section">
              <h2>9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services 
                immediately, without prior notice, for conduct that we believe 
                violates these Terms or is harmful to other users or our business 
                interests.
              </p>
            </div>

            <div className="terms-section">
              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with 
                the laws of South Africa. Any disputes arising under these Terms 
                shall be subject to the exclusive jurisdiction of the South African 
                courts.
              </p>
            </div>

            <div className="terms-section">
              <h2>11. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. Continued use of our services 
                after such modifications constitutes acceptance of the updated Terms. 
                We will notify users of material changes through our website or 
                direct communication.
              </p>
            </div>

            <div className="terms-section">
              <h2>12. Contact Information</h2>
              <p>
                For questions regarding these Terms, please contact us at:
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

export default Terms;
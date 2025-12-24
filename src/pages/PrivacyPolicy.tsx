import SectionHeading from '@/components/SectionHeading';

const PrivacyPolicy = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container-wide">
        <SectionHeading
          badge="Legal"
          title="Privacy Policy"
          subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-8 text-foreground/80 font-body">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              At Femina Beauty Parlour & Academy, we collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, and phone number when you book an appointment</li>
              <li>Payment information when you purchase services or courses</li>
              <li>Photos and images with your consent for our portfolio</li>
              <li>Feedback and reviews you choose to share</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and confirm your appointments and bookings</li>
              <li>Send you appointment reminders and updates</li>
              <li>Improve our services and customer experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send promotional offers and updates (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. 
              We may share your information only with trusted third parties who assist us in operating our 
              business, conducting our services, or servicing you, so long as those parties agree to keep 
              this information confidential.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
            <p className="leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p><strong>Femina Beauty Parlour & Academy</strong></p>
              <p>Phone: +91 98926 57380</p>
              <p>Address: Shop No.06, Building No.1, Krishna Kunj Building, Andheri (E), Mumbai 400072</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Updates to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated revision date.
            </p>
            <p className="mt-4 text-sm text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

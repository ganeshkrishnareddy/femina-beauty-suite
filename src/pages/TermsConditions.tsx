import SectionHeading from '@/components/SectionHeading';

const TermsConditions = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container-wide">
        <SectionHeading
          badge="Legal"
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using our services."
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-8 text-foreground/80 font-body">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using the services of Femina Beauty Parlour & Academy, you accept and agree 
              to be bound by these Terms and Conditions. If you do not agree to these terms, please do not 
              use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Services</h2>
            <p className="leading-relaxed mb-4">
              Femina Beauty Parlour & Academy provides professional beauty services including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Bridal and party makeup</li>
              <li>Hair styling and treatments</li>
              <li>Skin care treatments</li>
              <li>Nail art and manicure/pedicure</li>
              <li>Professional beauty courses and training</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. Appointments & Bookings</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Appointments are subject to availability and confirmation</li>
              <li>Please arrive 10-15 minutes before your scheduled appointment</li>
              <li>Late arrivals may result in reduced service time or rescheduling</li>
              <li>We reserve the right to cancel or reschedule appointments if necessary</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Cancellation Policy</h2>
            <p className="leading-relaxed mb-4">
              We understand that plans can change. Our cancellation policy is as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cancellations made 24+ hours in advance: Full refund or rescheduling</li>
              <li>Cancellations made within 24 hours: 50% cancellation fee may apply</li>
              <li>No-shows: Full service charge may be applied</li>
              <li>For bridal bookings, cancellation terms will be discussed during consultation</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Payment is due at the time of service unless otherwise agreed</li>
              <li>We accept cash, UPI, and major credit/debit cards</li>
              <li>Bridal packages may require an advance booking deposit</li>
              <li>Course fees must be paid as per the agreed payment schedule</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Health & Safety</h2>
            <p className="leading-relaxed mb-4">
              Your safety is our priority. Please note:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Inform us of any allergies, skin conditions, or health concerns before treatment</li>
              <li>We use high-quality, tested products but cannot guarantee no allergic reactions</li>
              <li>A patch test is recommended for chemical treatments and hair coloring</li>
              <li>We maintain strict hygiene standards and sanitize all equipment</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Academy Terms</h2>
            <p className="leading-relaxed mb-4">
              For students enrolled in our beauty courses:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Course materials and kits are provided as per the course package</li>
              <li>Certificates are issued upon successful completion of the course</li>
              <li>Attendance requirements must be met for certification</li>
              <li>Course fees are non-refundable once the course has commenced</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including images, logos, and text, is the property of 
              Femina Beauty Parlour & Academy and is protected by copyright laws. Unauthorized use 
              of any content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Femina Beauty Parlour & Academy shall not be liable for any indirect, incidental, or 
              consequential damages arising from the use of our services. Our liability is limited 
              to the amount paid for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <p className="leading-relaxed">
              For questions regarding these Terms and Conditions, please contact us:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p><strong>Femina Beauty Parlour & Academy</strong></p>
              <p>Phone: +91 98926 57380</p>
              <p>Address: Shop No.06, Building No.1, Krishna Kunj Building, Andheri (E), Mumbai 400072</p>
            </div>
            <p className="mt-4 text-sm text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsConditions;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, Award, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import academyImg from '@/assets/academy.jpg';
import founderImg from '@/assets/founder.jpg';

const courses = [
  {
    title: 'Professional Makeup Artist Course',
    duration: '3 Months',
    description: 'Complete training program covering all aspects of professional makeup artistry from basics to advanced techniques.',
    features: [
      'Skin Preparation & Base Makeup',
      'Eye Makeup Techniques',
      'Contouring & Highlighting',
      'Different Makeup Looks',
      'Product Knowledge',
      'Client Handling',
    ],
    certification: 'Certified Makeup Artist',
    suitable: 'Beginners & Aspiring MUAs',
  },
  {
    title: 'Bridal Makeup Specialist Course',
    duration: '2 Months',
    description: 'Specialized training in bridal makeup including traditional and contemporary bridal looks.',
    features: [
      'Indian Bridal Traditions',
      'HD & Airbrush Bridal Makeup',
      'Engagement & Reception Looks',
      'Saree & Dupatta Draping',
      'Bridal Hair Styling',
      'Pre-bridal Skincare',
    ],
    certification: 'Certified Bridal Makeup Artist',
    suitable: 'Makeup Artists & Beauty Enthusiasts',
  },
  {
    title: 'Nail Art & Nail Technician Course',
    duration: '6 Weeks',
    description: 'Learn the art of nail care and creative nail designs from basic manicures to advanced nail art.',
    features: [
      'Manicure & Pedicure Basics',
      'Gel & Acrylic Extensions',
      'Nail Art Techniques',
      '3D Nail Art',
      'Hygiene & Safety',
      'Business Tips',
    ],
    certification: 'Certified Nail Technician',
    suitable: 'Anyone Interested in Nail Art',
  },
  {
    title: 'Skin & Facial Treatment Course',
    duration: '4 Weeks',
    description: 'Professional training in skincare treatments and facial techniques for different skin types.',
    features: [
      'Skin Analysis',
      'Different Facial Techniques',
      'Anti-Aging Treatments',
      'Facial Massage',
      'Product Selection',
      'Client Consultation',
    ],
    certification: 'Certified Skin Specialist',
    suitable: 'Beauty Enthusiasts & Professionals',
  },
];

const benefits = [
  'Hands-on practical training',
  'Industry-recognized certification',
  'Small batch sizes for personalized attention',
  'Professional kit provided',
  'Placement assistance',
  'Flexible timings available',
];

const Academy = () => {
  const handleEnquire = (courseName: string) => {
    const message = encodeURIComponent(
      `Hello Femina Beauty Parlour 👋\nI'm interested in the ${courseName}. Please share more details.`
    );
    window.open(`https://wa.me/919892657380?text=${message}`, '_blank');
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-body text-sm font-medium mb-4">
                Beauty Academy
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Start Your Beauty Career Today
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Transform your passion for beauty into a successful career with our professional 
                courses. Learn from industry experts and get certified.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => handleEnquire('Beauty Courses')}
                >
                  Enquire Now
                </Button>
                <a href="#courses">
                  <Button variant="outline" size="lg">
                    View Courses
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={academyImg}
                alt="Beauty Academy Training"
                className="w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elegant">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">500+</p>
                    <p className="font-body text-sm text-muted-foreground">Students Trained</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Why Choose Us"
            title="Learn From the Best"
            subtitle="Our academy offers comprehensive training with industry-recognized certifications."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="font-body text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="section-padding bg-gradient-blush">
        <div className="container-wide">
          <SectionHeading
            badge="Our Courses"
            title="Professional Beauty Courses"
            subtitle="Choose from our range of certified courses designed for aspiring beauty professionals."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-hover transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-primary">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-gold">
                        <Award className="w-4 h-4" />
                        Certified
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-body text-muted-foreground mb-6">
                  {course.description}
                </p>

                <div className="mb-6">
                  <p className="font-body text-sm font-semibold text-foreground mb-3">
                    What You'll Learn:
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 mb-6 p-3 bg-muted rounded-lg">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <span className="font-body text-sm text-muted-foreground">
                    Suitable for: {course.suitable}
                  </span>
                </div>

                <Button
                  variant="gold"
                  className="w-full"
                  onClick={() => handleEnquire(course.title)}
                >
                  Enquire on WhatsApp
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={founderImg}
                alt="Premaa - Lead Instructor"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-body text-sm font-medium mb-4">
                Lead Instructor
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Learn from Premaa
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                With over 10 years of experience in the beauty industry and having trained 500+ 
                students, Premaa brings unparalleled expertise and passion to every class.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Her hands-on teaching approach ensures that every student gains practical 
                skills and confidence to start their career in the beauty industry.
              </p>
              <Button
                variant="default"
                size="lg"
                onClick={() => handleEnquire('Beauty Courses')}
              >
                Start Learning Today
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academy;

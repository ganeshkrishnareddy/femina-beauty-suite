import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { CalendarIcon, Clock, User, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const services = [
  'Bridal Makeup',
  'Party Makeup',
  'Hair Styling',
  'Skin Treatment',
  'Nail Art',
  'Facial & Cleanup',
  'Makeup Course Enquiry',
  'Other',
];

// Generate time slots from 10:30 AM to 9:00 PM
const generateTimeSlots = () => {
  const slots: string[] = [];
  const startHour = 10;
  const startMinute = 30;
  const endHour = 21; // 9 PM

  let hour = startHour;
  let minute = startMinute;

  while (hour < endHour || (hour === endHour && minute === 0)) {
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    const displayMinute = minute.toString().padStart(2, '0');
    slots.push(`${displayHour}:${displayMinute} ${ampm}`);

    minute += 30;
    if (minute >= 60) {
      minute = 0;
      hour += 1;
    }
  }

  return slots;
};

const timeSlots = generateTimeSlots();

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: undefined as Date | undefined,
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({ title: 'Please enter your name', variant: 'destructive' });
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      toast({ title: 'Please enter a valid phone number', variant: 'destructive' });
      return false;
    }
    if (!formData.service) {
      toast({ title: 'Please select a service', variant: 'destructive' });
      return false;
    }
    if (!formData.date) {
      toast({ title: 'Please select a date', variant: 'destructive' });
      return false;
    }
    if (!formData.time) {
      toast({ title: 'Please select a time slot', variant: 'destructive' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Format the message for WhatsApp
    const formattedDate = formData.date ? format(formData.date, 'EEEE, MMMM d, yyyy') : '';
    
    const whatsappMessage = `Hello Femina Beauty Parlour 👋

*New Appointment Request*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
💄 *Service:* ${formData.service}
📅 *Date:* ${formattedDate}
🕐 *Time:* ${formData.time}
${formData.message ? `\n📝 *Message:* ${formData.message}` : ''}

Please confirm my appointment. Thank you! 🙏`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919892657380?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Redirecting to WhatsApp...',
      description: 'Please send the message to confirm your booking.',
    });

    setIsSubmitting(false);
  };

  // Disable past dates
  const disabledDays = { before: new Date() };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-body text-sm font-medium mb-4">
              Book Appointment
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Schedule Your Visit
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Choose your preferred date, time, and service. Your booking request 
              will be sent directly to us via WhatsApp for quick confirmation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl shadow-elegant p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 font-body">
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 font-body">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 font-body">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Select Service
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleInputChange('service', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 font-body">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    Preferred Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full h-12 justify-start text-left font-normal',
                          !formData.date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => handleInputChange('date', date)}
                        disabled={disabledDays}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 font-body">
                    <Clock className="w-4 h-4 text-primary" />
                    Preferred Time
                  </Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleInputChange('time', value)}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2 font-body">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Additional Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Any special requests or notes..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="whatsapp"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Redirecting...'
                ) : (
                  <>
                    Book via WhatsApp
                    <svg
                      className="w-5 h-5 ml-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground font-body">
                By submitting, you'll be redirected to WhatsApp to confirm your appointment.
              </p>
            </form>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: CalendarIcon,
                title: 'Easy Booking',
                description: 'Select your preferred date and time slot',
              },
              {
                icon: MessageSquare,
                title: 'Instant Confirmation',
                description: 'Get quick response via WhatsApp',
              },
              {
                icon: Sparkles,
                title: 'Flexible Options',
                description: 'Wide range of services available',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;

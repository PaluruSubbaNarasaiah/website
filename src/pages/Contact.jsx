import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';
import { Clock, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = companyInfo.contact.whatsapp.replace(/[^0-9]/g, '');
    const message = "Hi! I'm interested in your digital services. Please provide more information.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${companyInfo.contact.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${companyInfo.contact.email}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact DigitalVista Solutions - Get Free Digital Marketing Consultation | Hyderabad, India</title>
        <meta name="description" content="Contact DigitalVista Solutions for digital marketing, web development & IT services. Free consultation available. Call +91 98765 43210 or WhatsApp us. Office in HITEC City, Hyderabad." />
        <meta name="keywords" content="contact digitalvista, digital marketing consultation India, web development quote Hyderabad, free digital audit, IT services contact, digital agency Hyderabad contact" />
        <link rel="canonical" href="https://digitalvista.in/contact" />
      </Helmet>
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Transform Your
              <span className="text-orange-400"> Business Together</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to take your Indian business to the next level? Our digital experts are here to help. 
              Get a free consultation and discover how we can boost your online presence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={20} className="text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={20} className="text-green-400" />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={20} className="text-green-400" />
                <span>Custom Solutions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <button
                onClick={handleCallClick}
                className="flex items-center justify-center space-x-3 p-6 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-all duration-300 hover-lift group"
              >
                <Phone className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Call Now</div>
                  <div className="text-sm text-gray-600">{companyInfo.contact.phone}</div>
                </div>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center space-x-3 p-6 bg-green-50 hover:bg-green-100 rounded-2xl transition-all duration-300 hover-lift group"
              >
                <MessageCircle className="text-green-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-sm text-gray-600">Instant Response</div>
                </div>
              </button>
              
              <button
                onClick={handleEmailClick}
                className="flex items-center justify-center space-x-3 p-6 bg-orange-50 hover:bg-orange-100 rounded-2xl transition-all duration-300 hover-lift group"
              >
                <Mail className="text-orange-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-sm text-gray-600">{companyInfo.contact.email}</div>
                </div>
              </button>
              
              <div className="flex items-center justify-center space-x-3 p-6 bg-purple-50 rounded-2xl">
                <Clock className="text-purple-600" size={24} />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Business Hours</div>
                  <div className="text-sm text-gray-600">Mon-Fri 9AM-7PM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get Your Free Digital Consultation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fill out the form below and our digital experts will analyze your business 
                and provide customized recommendations for your digital growth.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Visit Our Office in Hyderabad
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Located in the heart of HITEC City, we're easily accessible and always ready 
                to welcome you for an in-person consultation.
              </p>
            </div>
            
            <Map />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to see results from digital marketing?",
                  answer: "For SEO, you can expect to see initial results in 3-6 months, with significant improvements in 6-12 months. For PPC and social media marketing, results are typically visible within the first month. Web development projects are usually completed within 4-8 weeks depending on complexity."
                },
                {
                  question: "Do you work with businesses outside Hyderabad?",
                  answer: "Yes! We serve clients across all Indian states. While our office is in Hyderabad, we work remotely with businesses throughout India and provide the same level of service and support regardless of location."
                },
                {
                  question: "What makes your pricing competitive for Indian businesses?",
                  answer: "We understand the budget constraints of Indian startups and MSMEs. Our pricing is specifically designed for the Indian market, offering world-class services at affordable rates. We also provide flexible payment options and customized packages based on your budget."
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer: "Absolutely! We believe in long-term partnerships. All our services include ongoing support, and we offer maintenance packages for websites and continuous optimization for digital marketing campaigns. Our support team is available 24/7."
                },
                {
                  question: "Can you help integrate Indian payment gateways like Razorpay and Paytm?",
                  answer: "Yes, we specialize in integrating all major Indian payment gateways including Razorpay, Paytm, PhonePe, Google Pay, UPI, and traditional banking systems. We ensure your eCommerce platform supports all popular payment methods in India."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 gradient-orange text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Don't wait! Take the first step towards digital transformation today. 
              Our team is ready to help your business grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Us Now
              </button>
              
              <button
                onClick={handleCallClick}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
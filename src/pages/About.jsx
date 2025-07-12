import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, Heart, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "15+ years in digital transformation for Indian businesses"
    },
    {
      name: "Priya Sharma",
      role: "Head of Digital Marketing",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Expert in SEO and social media marketing for Indian markets"
    },
    {
      name: "Suresh Patel",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Full-stack developer specializing in scalable web solutions"
    },
    {
      name: "Meera Singh",
      role: "Client Success Manager",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Ensuring client satisfaction and business growth"
    }
  ];

  const values = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Client-First Approach",
      description: "Every decision we make prioritizes our clients' success and growth in the Indian market."
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Innovation & Excellence",
      description: "We stay ahead of digital trends to provide cutting-edge solutions for Indian businesses."
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, understanding your business inside out."
    },
    {
      icon: <Award className="text-green-500" size={32} />,
      title: "Proven Results",
      description: "Our success is measured by the tangible growth we deliver to our clients."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About DigitalVista Solutions - Leading Digital Agency for Indian Businesses</title>
        <meta name="description" content="Learn about DigitalVista Solutions - India's trusted digital transformation partner. 5+ years of experience helping 500+ businesses across India grow digitally. Meet our expert team." />
        <meta name="keywords" content="about digitalvista, digital agency India, web development company Hyderabad, digital marketing experts India, Indian business solutions, MSME digital services" />
        <link rel="canonical" href="https://digitalvista.in/about" />
      </Helmet>
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fadeInLeft">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Empowering
                  <span className="text-orange-400"> Indian Businesses </span>
                  Since 2019
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  We are a passionate team of digital experts committed to transforming 
                  Indian businesses through innovative digital solutions and strategic growth partnerships.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">500+</div>
                    <div className="text-blue-100">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">5+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">28</div>
                    <div className="text-blue-100">Indian States</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">4.9/5</div>
                    <div className="text-blue-100">Client Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fadeInRight">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="DigitalVista team working on digital solutions"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fadeInLeft">
                <div className="flex items-center mb-6">
                  <Target className="text-orange-500 mr-4" size={40} />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To democratize digital transformation for Indian businesses by providing 
                  world-class digital solutions that are accessible, affordable, and effective. 
                  We believe every Indian business, from small startups to large enterprises, 
                  deserves the opportunity to thrive in the digital economy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Bridge the digital divide for Indian MSMEs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Create sustainable digital growth opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Foster innovation in traditional industries</span>
                  </li>
                </ul>
              </div>
              
              <div className="animate-fadeInRight">
                <div className="flex items-center mb-6">
                  <Eye className="text-blue-500 mr-4" size={40} />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To become India's most trusted digital transformation partner, 
                  recognized for our deep understanding of local markets, innovative solutions, 
                  and unwavering commitment to client success. We envision a digitally 
                  empowered India where every business can compete globally.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">Leading digital agency across all Indian states</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">Empowering 10,000+ businesses by 2030</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-600">Setting industry standards for digital excellence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and define our commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`text-center p-8 bg-white rounded-2xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate professionals with deep expertise in digital transformation and the Indian market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`text-center bg-gray-50 rounded-2xl p-6 hover-lift transition-all duration-300 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Indian Businesses Trust Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our deep understanding of the Indian market combined with global best practices 
                makes us the ideal partner for your digital transformation journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Local Market Expertise",
                  description: "Deep understanding of Indian consumer behavior, cultural nuances, and market dynamics across different states and industries.",
                  icon: "🇮🇳"
                },
                {
                  title: "Proven Track Record",
                  description: "Successfully transformed 500+ businesses with an average 300% increase in digital presence and lead generation.",
                  icon: "📈"
                },
                {
                  title: "Comprehensive Solutions",
                  description: "End-to-end digital services from strategy to execution, ensuring all your digital needs are met under one roof.",
                  icon: "🔧"
                },
                {
                  title: "Affordable Pricing",
                  description: "Transparent, competitive pricing designed specifically for Indian startups and MSMEs without compromising on quality.",
                  icon: "💰"
                },
                {
                  title: "Multilingual Support",
                  description: "Customer support available in Hindi, English, and major regional languages for better communication and understanding.",
                  icon: "🗣️"
                },
                {
                  title: "Long-term Partnership",
                  description: "We don't just deliver projects; we build lasting relationships and continue to support your growth journey.",
                  icon: "🤝"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-white rounded-2xl shadow-lg hover-lift transition-all duration-300 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with India's Digital Transformation Experts?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of successful Indian businesses who have transformed digitally with our expertise and support.
            </p>
            
            <Link
              to="/contact"
              className="gradient-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
            >
              Start Your Digital Journey Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
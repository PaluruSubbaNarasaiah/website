import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroBanner from '../components/home/HeroBanner';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DigitalVista Solutions - Leading Digital Marketing & Web Development Company in Hyderabad, India</title>
        <meta name="description" content="Transform your Indian business digitally with DigitalVista Solutions. Expert web development, digital marketing, SEO, and IT consultancy services for startups and MSMEs across India. Get free consultation today!" />
        <meta name="keywords" content="digital marketing company India, web development Hyderabad, SEO services India, PPC advertising, social media marketing, ecommerce development, IT consultancy India, digital transformation, MSME digital solutions" />
        <meta property="og:title" content="DigitalVista Solutions - Digital Transformation for Indian Businesses" />
        <meta property="og:description" content="Leading digital marketing and web development company helping Indian businesses grow online. 500+ satisfied clients across India." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://digitalvista.in/" />
      </Helmet>
      
      <HeroBanner />
      <ServicesOverview />
      <Testimonials />
    </>
  );
};

export default Home;
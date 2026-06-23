import React from 'react';
import AppNavigation from './Navigation/AppNavigation';
import HomeBanner from './HomeBanner/HomeBanner';
import AboutSection from './AboutSection/AboutSection';
import Footer from './Footer/Footer';

// Icon Components
const ReactIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const HtmlIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const CssIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 3.75L6 20.25L12 22.5L18 20.25L19.5 3.75H4.5ZM16.5 6.75H7.5L7.875 11.25H16.125L15.75 15.75L12 16.875L8.25 15.75L8.0625 13.5H6.75L7.125 17.25L12 18.75L16.875 17.25L17.625 6.75H16.5Z" />
  </svg>
);

const JsIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 3.75L6 20.25L12 22.5L18 20.25L19.5 3.75H4.5ZM14.25 17.25L12 18L9.75 17.25L9.375 15H10.875L11.25 16.125L12 16.5L12.75 16.125L13.125 15H15.375L14.25 17.25ZM15.75 12H8.25L8.0625 9.75H15.9375L15.75 12Z" />
  </svg>
);

const BootstrapIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 3.75H7.5C5.5 3.75 4.5 5 4.5 6.75V17.25C4.5 19 5.5 20.25 7.5 20.25H16.5C18.5 20.25 19.5 19 19.5 17.25V6.75C19.5 5 18.5 3.75 16.5 3.75ZM12 17.25H9.75V6.75H12C13.5 6.75 14.25 7.5 14.25 9C14.25 10.125 13.875 10.875 12.75 11.25C14.25 11.625 15 12.375 15 13.875C15 15.75 14.25 17.25 12 17.25Z" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.25C9 5.25 7.125 7.125 6.375 10.875C7.5 9 9 8.25 10.875 8.625C11.8125 8.8125 12.5625 9.5625 13.3125 10.3125C14.4375 11.4375 15.75 12.75 18.75 12.75C21.75 12.75 23.625 10.875 24 7.125C22.875 9 21.375 9.75 19.5 9.375C18.5625 9.1875 17.8125 8.4375 17.0625 7.6875C15.9375 6.5625 14.625 5.25 12 5.25ZM6.375 12.75C3.375 12.75 1.5 14.625 1.125 18.375C2.25 16.5 3.75 15.75 5.625 16.125C6.5625 16.3125 7.3125 17.0625 8.0625 17.8125C9.1875 18.9375 10.5 20.25 13.125 20.25C16.125 20.25 18 18.375 18.75 14.625C17.625 16.5 16.125 17.25 14.25 16.875C13.3125 16.6875 12.5625 15.9375 11.8125 15.1875C10.6875 14.0625 9.375 12.75 6.375 12.75Z" />
  </svg>
);

const TsIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 3.75H20.25V20.25H3.75V3.75ZM15.75 12H12.75V7.5H11.25V12H8.25V13.5H11.25V18H12.75V13.5H15.75V12Z" />
  </svg>
);

const ApiIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.75 12L12 8.25L8.25 12L12 15.75L15.75 12Z" />
    <path d="M12 2.25L3.75 6.75V17.25L12 21.75L20.25 17.25V6.75L12 2.25ZM18.75 16.5L12 19.875L5.25 16.5V8.25L12 4.875L18.75 8.25V16.5Z" />
  </svg>
);

const FigmaIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.25 3.75H12V8.25H8.25C6.75 8.25 5.25 6.75 5.25 5.25C5.25 3.75 6.75 3.75 8.25 3.75Z" />
    <path d="M13.5 3.75H15.75C17.25 3.75 18.75 5.25 18.75 6.75C18.75 8.25 17.25 9.75 15.75 9.75H13.5V3.75Z" />
    <path d="M8.25 9.75H12V14.25H8.25C6.75 14.25 5.25 12.75 5.25 11.25C5.25 9.75 6.75 9.75 8.25 9.75Z" />
    <path d="M8.25 15.75H12V20.25H8.25C6.75 20.25 5.25 18.75 5.25 17.25C5.25 15.75 6.75 15.75 8.25 15.75Z" />
    <path d="M13.5 15.75H15.75C17.25 15.75 18.75 17.25 18.75 18.75C18.75 20.25 17.25 21.75 15.75 21.75H13.5V15.75Z" />
  </svg>
);

const FloatingIcon = ({ icon, color, label, position, delay }) => (
  <div 
    className={`fixed ${position} flex flex-col items-center justify-center p-2 transition-all hover:scale-125 group cursor-default hidden lg:flex pointer-events-auto`}
  >
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white shadow-2xl group-hover:shadow-primary/40 transition-all`}>
      {icon}
    </div>
    <span className="text-[9px] font-black text-text/20 uppercase tracking-[0.2em] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
  </div>
);

const Button = ({ variant = 'primary', children }) => {
  const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 active:scale-95";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary-darker shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary-dark shadow-md hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};

const Card = ({ title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-accent/20 hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
      <div className="w-6 h-6 bg-primary rounded-full"></div>
    </div>
    <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
    <p className="text-text/70 leading-relaxed">{description}</p>
    <div className="mt-4 text-primary font-semibold cursor-pointer hover:underline">Learn more →</div>
  </div>
);

const ThemeShowcase = () => {
  return (
    <div className="min-h-screen bg-background text-text overflow-hidden">
      <AppNavigation />
      <HomeBanner />
      
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative">
        {/* 
        <section className="text-center mb-16 py-12 relative z-10">
          <span className="bg-accent/20 text-secondary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">
            Introducing our platform
          </span>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Scale your startup faster than ever.
          </h1>
          <p className="text-xl text-text/60 max-w-2xl mx-auto mb-10">
            A complete solution for modern teams. Built with our custom theme colors for maximum impact and visual consistency.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary">Start Free Trial</Button>
            <Button variant="secondary">Book a Demo</Button>
          </div>
        </section> */}

        {/* <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card 
            title="Fast Performance" 
            description="Optimized for speed and responsiveness across all devices and network conditions."
          />
          <Card 
            title="Secure by Default" 
            description="Enterprise-grade security protocols to keep your data safe and compliant."
          />
          <Card 
            title="Smart Analytics" 
            description="Gain deep insights into your business metrics with AI-powered reporting."
          />
        </section> */}

       
      </main>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default ThemeShowcase;
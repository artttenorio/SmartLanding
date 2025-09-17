import React from 'react';
import Layout from './components/Layout';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <FAQ />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;

import React from 'react';
import Services from './components/Services';
import Trusted from './components/Trusted';
import HeroSection from './components/HeroSection';
import FeatureProducts from './components/FeatureProducts';

const Home = () => {
  return (
    <>
      <HeroSection name='E-Com Store' />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;

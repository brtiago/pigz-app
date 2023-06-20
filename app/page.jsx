import React from 'react';
import Hero from '@components/sections/hero';
import Subhero from '@components/sections/subhero';
import Footer from '@components/sections/footer';
import Benefits from '@components/sections/benefits';



export default function Home() {
    return (
      <section className="w-full flex-center flex-col">
        <Hero />
        <Subhero />
        <Benefits />
        <Footer />
      </section>
    )
  }
  
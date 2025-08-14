import React from 'react';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import ServicesHero from '@/component/ServicesHero';
import ServicesGrid from '@/component/ServicesGrid';
import ServicesCTA from '@/component/ServicesCTA';
export const metadata = {
    title: 'Services - MultiLingo Event Management',
    description: 'Comprehensive Physical, Virtual & Hybrid Event Management Services including webcasting, video conferencing, and multilingual solutions.',
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#101823]">
            {/* <Navbar /> */}
            <main>
                <ServicesHero />
                <ServicesGrid />
                <ServicesCTA />
            </main>
            {/* <Footer /> */}
        </div>
    );
}

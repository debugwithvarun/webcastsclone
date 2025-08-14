import React from 'react';
import UseCasesHero from '@/component/UseCasesHero';
import UseCasesGrid from '@/component/UseCasesGrid';
import UseCasesCTA from '@/component/UseCasesCTA';

export const metadata = {
    title: 'Use Cases - MultiLingo Event Solutions',
    description: 'Explore our comprehensive use cases including Online CMEs, Webinars, Virtual Advisory Boards, Town Hall Webcasts, and more.',
};
export default function UseCasesPage() {
    return (
        <main className="bg-[#101823]">
            <UseCasesHero />
            <UseCasesGrid />
            <UseCasesCTA />
        </main>
    );
}

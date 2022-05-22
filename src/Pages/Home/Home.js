import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import GlobalSection from './GlobalSection';
import ProductSection from './ProductSection';
import QualitySection from './QualitySection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductSection></ProductSection>
            <QualitySection></QualitySection>
            <GlobalSection></GlobalSection>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;
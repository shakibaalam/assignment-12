import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import GlobalSection from './GlobalSection';
import ProductSection from './ProductSection';
import QualitySection from './QualitySection';
import ReviewSection from './ReviewSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductSection></ProductSection>
            <QualitySection></QualitySection>
            <GlobalSection></GlobalSection>
            <ReviewSection></ReviewSection>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;
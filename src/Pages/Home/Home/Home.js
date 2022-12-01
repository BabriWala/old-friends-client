import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import ProductCategories from '../ProductCategoreis/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default Home;
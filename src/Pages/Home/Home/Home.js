import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import ProductCategories from '../ProductCategoreis/ProductCategories';


const Home = () => {

    const {data: advertisedProducts, isLoading, refetch} = useQuery({
        queryKey: ['All Buyers'],
        queryFn: async ()=>{
            const res = await axios.get('https://old-friends-server.vercel.app/advertisedProducts');
            return res.data;
        }
    })
    // console.log(advertisedProducts);
    // advertisedProducts.length = 1;

    return (
        <div>
            <Banner></Banner>
            {
                (advertisedProducts?.length) &&
                <AdvertisedProducts advertisedProducts={advertisedProducts}></AdvertisedProducts>
            }
            <ProductCategories></ProductCategories>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default Home;
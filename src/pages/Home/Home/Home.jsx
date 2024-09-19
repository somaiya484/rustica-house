import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import About from '../About/About'
import PopularMenu from '../PopularMenu/PopularMenu'
import Call from '../Call'
import ChefRecommend from '../chefRecommend/chefRecommend'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Rustica House | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <Call></Call>
      <ChefRecommend></ChefRecommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home

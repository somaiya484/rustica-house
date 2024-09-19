import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Call from '../Call'
import ChefRecommend from '../chefRecommend/chefRecommend'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async';
import imgq from '../../../assets/home/chef-service.jpg';
import Cover from '../Cover/Cover'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Rustica House | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Cover img={imgq} title={"Rustica House"} description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.`} height={"500"}></Cover>
      <PopularMenu></PopularMenu>
      <Call></Call>
      <ChefRecommend></ChefRecommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home

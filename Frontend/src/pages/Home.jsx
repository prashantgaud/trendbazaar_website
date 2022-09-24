import React from 'react'
import Announcement from '../components/Announcement'
import Budgetdeal from '../bannerscomponents/Budgetdeal'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import ShopByCategories from '../components/ShopByCategories'
import Slider from '../components/Slider'
//import TrendingNow from '../bannerscomponents/TrendingNow'
import Shopbyproducts from '../bannerscomponents/DealOfTheDay'
import MadeWithLove from '../components/MadeWithLove'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        
        <ShopByCategories/>
        <Categories/>
        <Shopbyproducts/>
        < Products/>
        <Newsletter/>
        <Footer/>
        <MadeWithLove/>
       
       

    </div>
  )
}

export default Home
import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './category.css'
import All from './All/All'
import Men from './Men/Men'
import Women from './Women/Women'
import ProductCard from '../Components/ProductCard'

const Shop = () => {

  const location = useLocation();

  let products = [
    { name: 'Ismail', cat_id: 1, location: 'Cbe', thumb_title: 'Men' },
    { name: 'Ammu', cat_id: 2, location: 'Chennai', thumb_title: 'Women' },
    { name: 'Sanjay', cat_id: 1, location: 'Cbe', thumb_title: 'Men' },
    { name: 'Ameesha', cat_id: 2, location: 'Mumbai', thumb_title: 'Women' }
  ]

  const mainProducts =  products.filter((x =>
    location.pathname === '/men' ? x.cat_id === 1 :
    location.pathname === '/women' ? x.cat_id === 2 :
    true
  ));

  return (
      <div className="ShopSection">
        <div className="MenuList">
          <Link to='/all' className="MenuListItem">All</Link>
          <Link to='/men' className="MenuListItem">Men</Link>
          <Link to='/women' className="MenuListItem">Women</Link>
        </div>
        <div className="ProductGridWrapper">
          <Routes>
            <Route path='/all' element={<All/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
          </Routes>

          <div className="ProductGrid">
          {mainProducts.map((x)=>(
            <ProductCard 
              name={x.name}
              location = {x.location}
              thumb_title = {x.thumb_title}
            />
          ))}
          </div>
          


        </div>
    </div>
  )
}

export default Shop
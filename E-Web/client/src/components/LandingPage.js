import React, { useEffect } from 'react'
import Hero from '../components/Hero';
import ShopNewAction from './ShopNewAction';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../state';
import KultureCargoPantsCollections from './KultureCargoPants';
import KultureShirtCollections from './KultureShirtCollections';
import Kulture2PieceCollections from './Kulture2PieceCollections';
import KultureJacketsCollections from './KultureJacketsCollections';
const LandingPage = ({ cartValidation, cart, setCart, setCartValidation, passToState, countTailorItemsWithPrice }) => {
  //console.log(cart.length)
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  console.log("items", items)

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "Get" }
    )
    const itemsJson = await items.json()
    dispatch(setItems(itemsJson.data))
  }


  useEffect(() => {
    getItems()
  }, [])
  return (
    <div>
      <Hero />

     
      <KultureJacketsCollections />
      <KultureCargoPantsCollections />
      <KultureShirtCollections />
      <Kulture2PieceCollections />
    
    </div>
  )
}

export default LandingPage


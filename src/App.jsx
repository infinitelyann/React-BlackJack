import { useState, useEffect } from 'react'
import './App.css'
import Deck from '../components/Deck'

function App() {
  const [deck, setDeck] = useState([])
  
 const board =  {
  backgroundColor: "darkGreen",
  padding:"10rem",
  borderStyle: "solid",
  borderWidth:".25rem",
  borderRadius: "20%",
  borderColor: "black"
 }
 useEffect(()=>{
   
   const handleDraw = ()=>{
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data.cards)
      setDeck(data.cards)
    })
   }
   handleDraw()
 }, [])
  return (
 <>
 <div style={board}>
 <Deck deck={deck}/>
 </div>
 </>
  )
}

export default App

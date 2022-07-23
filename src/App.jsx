import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './utils/colors.js'

function App() {
  const getIndex = arr =>{
    const index = Math.floor(Math.random()* arr.length)
    return arr[index]
  }

  const randomQuote = getIndex(quotes)
  const randomColor = getIndex(colors)


  const [quote, setQuote] = useState(randomQuote)
  const [color, setColor] = useState(randomColor)

  const getNewQuote = ()=>{
    const randomQuote = getIndex(quotes)
    const randomColor = getIndex(colors)

    setQuote(randomQuote)
    setColor(randomColor)
  }

  const setBgColor = {
    backgroundColor: color
  }
  return (
    <div className="App" style={setBgColor}>
      <QuoteBox
        quote = {quote}
        color = {color}
        getNewQuote = {getNewQuote}
      />
    </div>
  )
}

export default App

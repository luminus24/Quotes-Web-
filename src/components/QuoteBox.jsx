import React from 'react'

const QuoteBox = ({quote,color, getNewQuote}) => {

    const setTxtColor = {
        color : color
    }

    const setBgColor = {
        backgroundColor : color
    }
    return (
        <div className='quoteBox' style={setTxtColor}>
            <div className='quote'>
                <span className='txtQuote'>
                    <p><i class="fas fa-quote-left"></i></p>
                    <p >{quote.quote}</p>
                </span>
                <h4 className='authorQuote'>{quote.author}</h4>
            </div>
            <div className='btnQuotes'>
                <button onClick={getNewQuote} style={setBgColor}><i class="fas fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default QuoteBox
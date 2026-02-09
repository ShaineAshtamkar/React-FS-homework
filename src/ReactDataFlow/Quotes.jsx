import React, { useState } from 'react'
import Quote from './Quote';

export default function Quotes() {
    const [quotes, setQuotes] = useState([
        { id: 0, text: "Live your life", likes: 0 },
        { id: 1, text: "Time is of the essence", likes: 0 }
    ])

    const handleClick = (id) => {
        const newQuotes = quotes.map((quote) => {
            if (quote.id === id) {
                return { ...quote, likes: quote.likes + 1 };
            }
            return quote;
        });
        setQuotes(newQuotes);
    };

    return (
        <div>
            {quotes.map((quote) =>
                <Quote quote={quote} onClickEvent={handleClick} />
            )}
        </div>
    );
}

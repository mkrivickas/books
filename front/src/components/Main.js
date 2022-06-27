import React, { useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Main = () => {
    const [search, setSearch] = useState('')
    const [bookData, setData] = useState([])
    const searchBook = (evt) => {
        if (evt.key === 'Enter') {
            axios
                .get(
                    'https://www.googleapis.com/books/v1/volumes?q=' +
                        search +
                        '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' +
                        '&maxResults=40'
                )
                .then((res) => console.log(res.data.items))
                .catch((err) => console.log(err))
        }
    }
    return (
        <>
            <div className='header'>
                <div className='row1'>
                    <pre>
                        Kambarys be knygų
                        <br /> kaip kūnas be sielos.
                    </pre>
                </div>
                <div className='row2'>
                    <h2>Susiraskite knygą</h2>
                    <div className='search'>
                        <input
                            type='text'
                            placeholder='Įrašykite pavadinimą'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                        <button>
                            <i className='fas fa-search'></i>
                        </button>
                    </div>
                    <img src='./images/bg2.png' alt='skaitytoja' />
                </div>
            </div>
            <div className='container'>{<Card book={bookData} />}</div>
        </>
    )
}

export default Main

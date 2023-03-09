import React, { useState } from 'react'
import './styles.css'

export function Filters({ onApply }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");

    const updateTitle = e => setTitle(e.target.value);
    const updateAuthor = e => setAuthor(e.target.value);
    const updateGenre = e => setGenre(e.target.value);

    return (
        <div className='wrapper'>
            <form className='form'>
                <div className="input-group">
                    <label htmlFor="title" className="input-group__label">Title:</label>
                    <input onChange={updateTitle} type="text" placeholder='Search by title...' id="title" className="input-group__input" />
                </div>
                <div className="input-group">
                    <label htmlFor="author" className="input-group__label">Author:</label>
                    <input onChange={updateAuthor} type="text" placeholder='Search by author...' id="author" className="input-group__input" />
                </div>
                <div className="input-group">
                    <label htmlFor="genre" className="input-group__label">Genre:</label>
                    <input onChange={updateGenre} type="text" placeholder='Search by genre...' id="genre" className="input-group__input" />
                </div>
            </form>
            <button onClick={() => { onApply({ author, genre, title }) }} className='btn'>Apply</button>
        </div >
    )
}

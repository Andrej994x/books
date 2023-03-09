import React from 'react';
import './styles.css';

export function Table({ bookData }) {

    if (bookData?.length === 0)
        return (
            <div className='empty-state'>
                <div className='empty-state__text empty-state__text_warning'>
                    There are no books with these filters!
                </div>
            </div>
        )

    return (
        <table className="stacked-table">
            <thead className="stacked-table__head">
                <th className="stacked-table__head-cell">Title</th>
                <th className="stacked-table__head-cell">Author</th>
                <th className="stacked-table__head-cell">Genre</th>
            </thead>
            <tbody className="stacked-table__body">
                {bookData?.map((item) => {
                    return (
                        <tr key={item.title} className="stacked-table__row">
                            <td className="stacked-table__cell">{item.title}</td>
                            <td className="stacked-table__cell">{item.author}</td>
                            <td className="stacked-table__cell">{item.genre}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

import React from 'react'

const Search = props => {
    return (
        <div className="search">
            <input
                className="input"
                type="text"
                onChange={props.handleQueryChange}
                value={props.query}
                placeholder="What are you craving for..."
            />
            <br />
            <br />
        </div>
    )
}

export default Search

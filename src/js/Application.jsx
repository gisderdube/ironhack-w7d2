import React from 'react'

import 'bulma/css/bulma.css'
import FoodBox from './FoodBox'
import Search from './Search'
import foods from '../data/foods.json'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            foods,
            query: '',
        }

        this._handleQueryChange = this._handleQueryChange.bind(this)
    }

    render() {
        const mappedFoods = this.state.foods
            .filter((el, index) => el.name.match(new RegExp(`.*${this.state.query}.*`, 'i')))
            .map((el, index) => <FoodBox key={index} food={el} />)

        return (
            <div className="container">
                <Search query={this.state.query} handleQueryChange={this._handleQueryChange} />
                <ul>{mappedFoods}</ul>
            </div>
        )
    }

    _handleQueryChange(event) {
        this.setState({
            query: event.target.value,
        })
    }
}

export default Application

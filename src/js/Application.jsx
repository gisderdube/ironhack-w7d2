import React from 'react'

import 'bulma/css/bulma.css'
import FoodBox from './FoodBox'
import Search from './Search'
import Today from './Today'
import foods from '../data/foods.json'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            foods,
            query: '',
        }

        this._handleQueryChange = this._handleQueryChange.bind(this)
        this._handleQtyChange = this._handleQtyChange.bind(this)
    }

    render() {
        const mappedFoods = this.state.foods
            .filter((el, index) => el.name.match(new RegExp(`.*${this.state.query}.*`, 'i')))
            .map((el, index) => (
                <FoodBox key={index} handleQtyChange={this._handleQtyChange} food={el} />
            ))

        return (
            <div className="container">
                <Search query={this.state.query} handleQueryChange={this._handleQueryChange} />
                <div className="content-wrapper">
                    <ul className="food-list">{mappedFoods}</ul>
                    <Today foods={this.state.foods} />
                </div>
            </div>
        )
    }

    _handleQueryChange(event) {
        this.setState({
            query: event.target.value,
        })
    }

    _handleQtyChange(name, newValue) {
        if (parseInt(newValue) < 0) newValue = 0

        this.setState({
            foods: this.state.foods.map(el => {
                if (el.name === name) return { ...el, quantity: newValue }
                return el
            }),
        })
    }
}

export default Application

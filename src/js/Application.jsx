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
        }
    }

    render() {
        const mappedFoods = this.state.foods.map((el, index) => <FoodBox key={index} food={el} />)

        return (
            <div className="container">
                <Search />
                <ul>{mappedFoods}</ul>
            </div>
        )
    }
}

export default Application

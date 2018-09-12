import React from 'react'

const Today = ({ foods }) => {
    const qtyFood = foods
        .map(el => {
            return { ...el, quantity: parseInt(el.quantity) }
        })
        .filter(el => el.quantity)

    const mappedFoods = qtyFood.map((el, index) => {
        return (
            <li key={index}>
                {el.quantity} {el.name}
                {el.quantity > 1 && el.name[el.name.length - 1] !== 's' ? 's' : ''} ={' '}
                {el.quantity * el.calories} cal
            </li>
        )
    })

    const totalCalories = qtyFood.reduce((acc, val) => {
        return acc + val.calories * val.quantity
    }, 0)

    return (
        <div className="today">
            <h2>Today's Menu</h2>
            <ul>{mappedFoods}</ul>
            <strong>Total calories: {totalCalories} cal</strong>
        </div>
    )
}

export default Today

export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_TYPE',
    payload: pizzaObj
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})
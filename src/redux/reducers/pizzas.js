const initialState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PIZZAS':
            return {
                //берем старые значения объекта и меняем в нем sortBy
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                //берем старые значения объекта и меняем в нем sortBy
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export default pizzas
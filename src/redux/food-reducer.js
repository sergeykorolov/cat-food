
const SELECT_STATUS = "SELECT_STATUS";

const initialState = {
    catFood: [
        {
            id: 1,
            ingredient: "фуа-гра",
            portions: 10,
            present: "мышь в подарок",
            weight: "0,5",
            description: "Печень утки разварная с артишоками.",
            selected: false,
            available: true
        },
        {
            id: 2,
            ingredient: "рыбой",
            portions: 40,
            present: "2 мыши в подарок",
            weight: "2",
            description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
            selected: false,
            available: true
        },
        {
            id: 3,
            ingredient: "курой",
            portions: 100,
            present: "5 мышей в подарок",
            weight: "5",
            description: "Филе из цыплят с трюфелями в бульоне.",
            selected: false,
            available: false
        }
    ]
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_STATUS: {
            return {
                ...state, catFood: state.catFood.map(function (food) {
                    if (food.id === action.foodId) {
                        food.selected = !food.selected;
                    }
                    return food;
                })
            }
        }
        default:
            return state
    }
};

export const changeSelectStatus = (foodId) => ({type: SELECT_STATUS, foodId});

export default foodReducer;
import { LOAD_SUITS, ADD_SUIT, TOGGLE_SUIT, DELETE_SUIT } from '../actions/actionTypes'

function suitsReducer(state = [], action)
{
    switch(action.type) {
        case LOAD_SUITS:
            return action.suits;

        case ADD_SUIT:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    avail: false
                }
            ];

        case TOGGLE_SUIT:
            return state.map(suit => (suit.id === action.index)
                  ? {...suit, avail: !suit.avail}
                  : suit
            );

        case DELETE_SUIT:
            return state.filter(suit => suit.id !== action.index);

        default:
            return state;
    }
}

export default suitsReducer

import * as actionTypes from '../actions/actionTypes';
import { updateObject }  from '../utility';

const initialState = {
   items: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_ITEM:
            return updateObject(state, {items: state.items.concat({id: new Date(), value: action.item})});
        default:
            return state;
    }
};

export default reducer;
import * as actionTypes from '../actions/actionTypes';
import { updateObject }  from '../utility';

const initialState = {
   items: ["pen"]
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

/*{ purchaseId: 'rrwe543g', purchaseName: 'Book', price: 7.99, date:'01-20-2018'},
            { purchaseId: '34g4gf43', purchaseName: 'Pen', price: 1.99, date:'01-22-2018'},
            { purchaseId: '3g7ikfs4', purchaseName: 'Water', price: 0.99, date:'01-26-2018'}*/
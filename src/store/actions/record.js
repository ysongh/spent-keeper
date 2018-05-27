import * as actionTypes from './actionTypes';

export const addItem = (item) => {
    return{
        type: actionTypes.ADD_ITEM,
        item: item
    };
};

export const storeItem = (item) =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(addItem(item));
        }, 2000);
    };
};
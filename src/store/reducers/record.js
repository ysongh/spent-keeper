import { updateObject }  from '../utility';

const initialState = {
    purchaseId: 'rrwe543g',
    purchaseName: 'Book', 
    price: 7.99, 
    date:'01-20-2018'
};

const recordInit = (state = initialState, action) => {
    return updateObject(state);
};

export default recordInit;

/*{ purchaseId: 'rrwe543g', purchaseName: 'Book', price: 7.99, date:'01-20-2018'},
            { purchaseId: '34g4gf43', purchaseName: 'Pen', price: 1.99, date:'01-22-2018'},
            { purchaseId: '3g7ikfs4', purchaseName: 'Water', price: 0.99, date:'01-26-2018'}*/
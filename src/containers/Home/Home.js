import React, {Component} from 'react';
import Records from '../../components/Records/Records';

class Home extends Component{
    state = {
        items: [
            { purchaseId: 'rrwe543g', purchaseName: 'Book', price: 7.99, date:'01-20-2018'},
            { purchaseId: '34g4gf43', purchaseName: 'Pen', price: 1.99, date:'01-22-2018'},
            { purchaseId: '3g7ikfs4', purchaseName: 'Water', price: 0.99, date:'01-26-2018'}
        ]
    }
    render() {
        return (
            <div>
                <Records items={this.state.items}/>
            </div>
        );
    }
}

export default Home;
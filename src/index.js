import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import recordReducer from './store/reducers/record';

const rootReducer = combineReducers({
  record: recordReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

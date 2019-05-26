import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses.js';
import filterReducer from '../reducers/filters.js';


//Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            expense: expenseReducer,
            filter: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

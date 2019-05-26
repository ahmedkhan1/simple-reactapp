import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/storeConfig';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
// import "~normalize.css/normalize.css";
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description:'redux1',Amount: 200}));
store.dispatch(addExpense({description:'redux2',Amount: 400}));
store.dispatch(setTextFilter('bill'));
const state = store.getState();

const visibleExpense = getVisibleExpenses(state.expense, state.filter);
console.log(visibleExpense);
const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);
ReactDOM.render(jsx , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

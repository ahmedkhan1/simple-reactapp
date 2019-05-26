import '../index.css';
import {createStore, combineReducers} from 'redux';
import Uuid from 'uuid';
//Action generators -function that returns action objects

// const incrementCount = ({incrementBy = 1})=>({
//     type:'INCREMENT',
//     incrementBy
// });

// const decrementCount = ({decrementBy = 1}) =>({
//     type:'DECREMENT',
//     decrementBy
// });

// const setCount = ({ count })=>({
//     type:'SET',
//     count
// });
// const resetCount = () => ({
//     type:'RESET'
// });

// //Reducers
// const countReducer = (state = { count : 0 }, action) =>{
//     switch(action.type){
//         case 'INCREMENT':
//             return {
//                 count: state.count + action.incrementBy 
//             };
//         case 'DECREMENT':
//             return {
//                 count: state.count - action.decrementBy
//             };
//         case 'SET':
//             return {
//                 count: action.count
//             }
//         case 'RESET':
//             return {
//                 count: 0
//             };
//         default:
//             return state;    
//     }   
// };

// const store = createStore(countReducer);

// const unsubscribe = store.subscribe(()=>{
//     console.log(store.getState());
// });

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy: 10
// });

// store.dispatch({
//     type:'DECREMENT'
// });

// unsubscribe();
// store.dispatch({
//     type:'RESET'
// });

// store.dispatch({
//     type:'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({
//     type:'SET',
//     count:101
// });
// console.log(store.getState());




// const book = {
//     title : 'Guide to react',
//     author: 'Andy martin',
//     publisher : {
//         name : 'andy'
//     }
// };

// const {title = 'Anonymous', author : AuthName = 'Anonymous' } = book;

// console.log(title+' and '+AuthName);

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) =>({
    type : 'ADD_EXPENSE',
    expense:{        
        id : Uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removerExpense =( {id = 0 } = {})=>({
    type:'DELETE_EXPENSE',
    filters:{
        id
    }
});

const editExpense = ({id, update}) =>({
    type:"EDIT_EXPENSE",
    id,
    update
});


const setTextFilter = (text='')=>({
    type:'SET_TEXT_FILTER',
    text
});

const sortByDate = () =>({
    tyoe:'SORT_BY_DATE'
});
const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
});


const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'Ad_expense':
            return [
                ...state,
                action.expense
            ];
        case 'DELETE_EXPENSE':
            return state.filter(({id})=> id!==action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.expense
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filterReducer = (state = filterReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text:action.text
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'amount'
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'date'
            };
        default:
            return state;
    }
};

//Store Creation

const store = createStore(
       combineReducers({
         expense: expenseReducer,
         filters: filterReducer
       })
    );


store.subscribe(()=>{
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount : 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount : 300}));

store.dispatch(removerExpense({ id: expenseOne.expense.id }));
store.dispatch(expenseTwo.expense.id,{ amount: 500});

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());
console.log(expenseOne);


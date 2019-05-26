import {createStore, combineReducers} from 'redux';
import Uuid from 'uuid';

//Action generators -function that returns action objects

//Add Expense Action generator
const addExpense = ({ 
    description ='',
    Amount = 0
}={}) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id : Uuid(),
        description,
        Amount
    }
});
//Remove Expense Action generator
const deleteExpense = ({id = 0}={}) =>({
    type: 'DELETE_EXPENSE',
    id
});
//Edit Expense Action generator
const editExpense = (id ,update )=>({
    type: 'EDIT_EXPENSE',
    id,
    update

});
//Set Filter Action generator
const sortbyDateFilter = ()=>({
    type: 'SORTBY_DATE'
});

//SortbyAmount Filter Action generator
const sortbyAmountFilter = () => ({
    type: 'SORTBY_AMOUNT'
});

const setTextFilter = ({ text = '' } = {} ) => ({
    type : 'SET_TEXT',
    text
});

const setStartDate = ({startDate = undefined} = {}) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = ({endDate = undefined}={}) =>({
    type: 'SET_END_DATE',
    endDate
});

//Expense Reducer Seciton
const expenseReducerDefault = [];

const expenseReducer = (state = expenseReducerDefault, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.update
                    };
                }else{
                    return expense;
                }
            });
        case 'DELETE_EXPENSE':
            return state.filter(({id})=>id!==action.id);
        default:
            return state;
    }
};
//Filter Reducer Seciton
const filterDefaultReducer = {
    sortBy : undefined,
    text:'',
    startDate:undefined,
    endDate:undefined
};

const filterReducer = (state = filterDefaultReducer, action) =>{
    switch(action.type){
        case 'SORTBY_DATE':
            return {
                ...state,
                sortBy: 'Date'
            };
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'Amount'
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case '':
        default:
            return state;
    }
};

//Store Creation
const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filter: filterReducer
    })
);

const getVisibleExpense = (expense, {text,sortBy,startDate,endDate}) => {
    return expense.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || endDate.createdAt >= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'Date'){
            return a.createdAt !== a.createdAt ? 1 : -1;
        }
        if(sortBy ==='Amount'){
            return a.Amount > b.Amount ? 1 : -1;
        }
    });
};

store.subscribe( () => {
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.expense,state.filter);
    console.log(visibleExpense);
});
const expense1 = store.dispatch(addExpense({ description: 'expense1', Amount: 500, createdAt: -21000 }));

const expense2 = store.dispatch(addExpense({ description: 'expense2', Amount: 600, createdAt: -1000 }));

// store.dispatch(editExpense(expense1.expense.id, {Amount:4550,description:'Edited description'}));
//store.dispatch(setTextFilter({text:'expense1'}));
 store.dispatch(sortbyAmountFilter());
//store.dispatch(sortbyDateFilter());
// store.dispatch(deleteExpense({ id: expense1.expense.id }));
// store.dispatch(deleteExpense({ id: expense2.expense.id }));
store.dispatch(setStartDate({startDate:126 }));
store.dispatch(setEndDate({endDate:143}));


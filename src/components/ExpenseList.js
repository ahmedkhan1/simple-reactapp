import React from 'react';
import {connect} from 'react-redux';
import ExpenselistItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList =(props)=> (
    <div>
        <h1>Expense List</h1>
        {props.expense.map((expense)=>{
            return <ExpenselistItem key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps =(state)=>{
    return{
        expense: selectExpenses(state.expense, state.filter)
    };
};
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
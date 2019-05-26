import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, deleteExpense} from '../actions/expenses';

const EditExpensePage = (props) =>{
    return(
    <div>
        <h2>This is from Edit</h2>
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense)=>{
            console.log('updated',expense);
            props.dispatch(editExpense(props.expense.id, expense));
        }}/>
        <button onClick={()=>{
            props.dispatch(deleteExpense({id:props.expense.id}));
            props.history.push('/');
        }}>submit</button>
    </div>
    );
};
const mapSatesToProps = (state, props) => {
    return{
        expense: state.expense.find((expense)=>expense.id ===props.match.params.id)
    };
};
export default connect(mapSatesToProps)(EditExpensePage);
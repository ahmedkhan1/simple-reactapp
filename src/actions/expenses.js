
import Uuid from 'uuid';
//Add Expense Action generator
export const addExpense = ({ 
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
export const deleteExpense = ({id = 0}={}) =>({
    type: 'DELETE_EXPENSE',
    id
});
//Edit Expense Action generator
export const editExpense = (id ,update )=>({
    type: 'EDIT_EXPENSE',
    id,
    update

});
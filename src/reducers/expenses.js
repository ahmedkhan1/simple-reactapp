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
export default expenseReducer;
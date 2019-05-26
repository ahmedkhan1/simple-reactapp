import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilters';

const ExpoDashboard = () => (
    <div>
        <h2>hello world</h2>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);
export default ExpoDashboard;
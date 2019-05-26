import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => (
    <div>
        <h2>Portfolio</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/about/" activeClassName="is-active">About</NavLink>
        <NavLink to="/expo" activeClassName="is-active">expo </NavLink>
        <NavLink to="/dashboard/" activeClassName="is-active">Dashboard </NavLink>
        <NavLink to="/AddExpense/" activeClassName ="is-active">Add Expense Page</NavLink>
        <NavLink to="/EditExpense/" activeClassName ="is-active">Edit Expense Page</NavLink>
        <NavLink to="/ExpenseList/" activeClassName ="is-active">ExpenseListItem</NavLink>
    </div>
);

export default Header;
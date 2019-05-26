import React from 'react';
import {BrowserRouter as Router, route, Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, amount , description , createdAt }) =>(
    <div>
        <h2>{description}</h2>
        <p>{amount} - {createdAt}</p>
    <Link to={`/about-us/${id}`} >About us</Link>
    </div>
); 

export default ExpenseListItem;
import React from 'react';
import ExpoDashboard from '../components/ExpoDashboard.js';
import Header from '../components/Header.js';
import Portfolio from '../components/portfolio.js';
import PageNoFound from '../components/PageNoFound.js';
import { BrowserRouter , Route,Switch} from "react-router-dom";
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseList from '../components/ExpenseListItem';

const abc = () => (
    <div>
        <h1>Hello Routing abc World</h1>
    </div>
);
    
const abcd = () => (
    <div>
        <h1>Hello Routing World</h1>
    </div>
);

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>        
            <Route path="/" exact component={abcd} />
            <Route path="/home" component={abc} />
            <Route path="/dashboard/" component={ExpoDashboard} exact={true} />
            <Route path="/expo" component={abcd} />
            <Route path="/portfolio/" component={Portfolio}/>
            <Route path="/AddExpense/" component={AddExpensePage}/>
            <Route path="/EditExpense/" component={EditExpensePage}/>
            <Route path="/ExpenseList/" component={ExpenseList}/>
            <Route component={PageNoFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
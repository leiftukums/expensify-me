import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import addExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/HeaderPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';








const AppRouter = () => (
  <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true}/>
            <Route path='/create' component={addExpensePage}/>
            <Route path='/edit/:id' component={EditExpensePage} />
            
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);      

export default AppRouter;




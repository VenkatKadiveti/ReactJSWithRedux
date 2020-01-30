import React from 'react';
import Dashboard from '../components/dashboard/dashboard'
import Login from '../components/login/login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
const IndexFile = (props) => {
    console.log(props)
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={() => <Dashboard userData={props.user} />} />
                    <Route exact path="/" component={Login} />
            </Switch>
        </Router>
            )
        }
        
        
const mapStateToProps = (state) => {
                console.log(state)
    return {
                user: state
        };
    };
    
    
export default connect(mapStateToProps, null)(IndexFile);
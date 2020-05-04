import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeScreen from './react/screens/homescreen'

const Routes = () => {

    return (
        <Switch>
            <Route exact patch='\' component={HomeScreen} />
        </Switch>
    )
}

export default Routes;
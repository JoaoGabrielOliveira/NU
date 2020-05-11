import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Routes from './routes'

import Menu from './react/components/menu'

import './app.css'

const App = () => {
    return(
        <Fragment>
            <BrowserRouter>
                < Menu />
                < Routes />
            </BrowserRouter>
        </Fragment>
    )
}

export default App;
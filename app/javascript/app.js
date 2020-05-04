import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Routes from './routes'

const App = () => {
    return(
        <Fragment>
            <BrowserRouter>
                < Routes />
            </BrowserRouter>
        </Fragment>
    )
}

export default App;
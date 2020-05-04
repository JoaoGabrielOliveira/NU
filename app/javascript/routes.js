import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeScreen from './react/screens/home.screen'
import AlbumScreen from './react/screens/album.screen'
import ArtistsScreen from './react/screens/artists.screen'
import SearchScreen from './react/screens/search.screen'
import FavoriteScreen from './react/screens/favorites.screen'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/album/:id' component={AlbumScreen} />
            <Route exact path='/artist/:id' component={ArtistsScreen} />
            <Route exact path='/search' component={SearchScreen} />
            <Route exact path='/favorites' component={FavoriteScreen} />
        </Switch>
    )
}

export default Routes;
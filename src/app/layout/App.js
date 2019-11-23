import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../features/home/HomePage'
import { getCoinData } from '../actions/coinActions'
// import { connect } from 'react-redux'

// const mapState = (state, ownProps) => {
//   return {
//     loading: state.loading
//   }
// }

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
      
  )
}

export default App
// export default connect(mapState, null)(App)



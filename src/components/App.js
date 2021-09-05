import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Popular from './Popular'
import Battle from './Battle'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isPopular:true,
        }
    }
    render(){
        return(
            <>
            <Router>
                
                <header>
                    <NavLink activeClassName='active' to='/'>Popular</NavLink >
                    <NavLink activeClassName='active' to='/battle'>Battle</NavLink >
                </header>
                <main>
                    <Route path='/' exact>
                        <Popular/>
                    </Route>
                    <Route path='/battle' exact>
                        <Battle/>
                    </Route>
                </main>
            </Router>
            </>
        )
    }
}

export default App

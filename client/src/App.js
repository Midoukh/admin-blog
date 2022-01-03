import React from 'react'
import Auth from './Containers/Auth/Auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyEditor from './Containers/Draft/Draft'
const App = () => {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/' exact component={Auth}/>
                <Route path='/draft'> 
                    <MyEditor />
                </Route>
            </Switch> 
        </Router>
    </div>
  );
}

export default App;

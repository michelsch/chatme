import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.js'
import UserList from './components/UserList.js'

class App extends React.Component {
    render() {
        return <Login/>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
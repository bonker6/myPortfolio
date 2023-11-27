import React from 'react';
import Users from './components/Users';
import AsideBtn from './components/AsideBtn';
import axios from 'axios';

const baseURL = 'https://reqres.in/api/users?page=2'

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseURL).then((res) => {
        this.setState(
            {users: res.data.data}
            )
        })

        this.state = {
            users: []
        }
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
        this.addUser = this.addUser.bind(this)
     }

    render () {
        return (<div>
            <header className='header'>
            <h3>USER LIST</h3>
            </header>
            <AsideBtn />
            <main>
                <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
            </main>
        </div>)
    }
    editUser (user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }
    deleteUser (id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }
    
    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, {id, ...user }] })
    }
}

export default App
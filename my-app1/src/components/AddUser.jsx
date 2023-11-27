import React from 'react';


class AddUser extends React.Component {
    userAdd ={}
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            age: 1,
            isHappy: false,
        }
     }
  render() {
    return(
        <form ref={(el) => this.myForm = el}>
            <input type='text' placeholder='FirstName' onChange={(e) =>this.setState({firs_tname: e.target.value}) }/>
            <input type='text' placeholder='LastName' onChange={(e) =>this.setState({last_name: e.target.value}) }/>
            <input type='text' placeholder='Email' onChange={(e) =>this.setState({email: e.target.value}) }/>
            <input type='text' placeholder='addYourAvatar(URL)' onChange={(e) =>this.setState({image: e.target.value}) }/>
            <button type='buttuon' onClick={() => {
                this.myForm.reset()
                this.userAdd = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    avatar: this.state.age,
                }
                if(this.props.user)
                    this.userAdd.id = this.props.user.id
                this.props.onAdd(this.userAdd)
            }
            }>Add to List</button>
        </form>
    )
  }
}

export default AddUser
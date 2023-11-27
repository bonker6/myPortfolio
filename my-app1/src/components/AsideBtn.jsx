
import React from 'react';
import { IoAppsOutline } from 'react-icons/io5';
import AddUser from './AddUser';

class AsideBtn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          editForm: false
        }
      }

    render () {
        return (<div className='asidePanel'>
            <div className='asideform'><h3>ADD USER</h3><IoAppsOutline onClick={() => {
            this.setState({
              editForm: !this.state.editForm
              })
            }
            } className='asideBtn'/>{this.state.editForm && <AddUser user={this.user} onAdd={this.props.addUser}/>}</div>
        </div>)
    }
}
export default AsideBtn
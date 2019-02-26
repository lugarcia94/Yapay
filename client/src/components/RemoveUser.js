import axios from 'axios'
import React, { Component } from 'react' 
const baseUrl = 'http://localhost:9004/users'

class RemoveUser extends Component {
    remove(user) { 
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }
    render() {
        return (
            <div>
                teste
            </div>
        );
    }
}

export default RemoveUser
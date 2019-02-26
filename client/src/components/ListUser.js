import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import { apiAction } from '../actions/action'  
import trash from '../assets/img/trash.png'

class ListUsers extends Component {
    componentDidMount() {        
        this.props.apiAction(); 
    }
    render() {
    
        return (
            <div className="content__users-list"> 
                <ul className="users__list"> 
                    {this.props.listDb.retornoDb.map( item => (                         
                        <li className="users__list-item" key={item.id}>
                            <span className="users__list-avatar"><img src={item.avatar} alt={item.name}/></span>
                            <div className="right__users">
                                <span className="users__list-name">{item.name}</span>
                                <span className="users__list-username">'{item.username}'</span>
                                <span className="users__list-email">{item.email}</span>
                                <span className="users__list-phone">{item.phone}</span> 
                            </div>
                            <span className="users__list-id">{item.id}</span>
                            <div className="remove__item"><img src={trash} alt="Remover"/></div>
                        </li>                 
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({listDb:state.retornoDb})
const mapDispatchToProps = dispatch => bindActionCreators({apiAction}, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(ListUsers)
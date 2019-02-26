import React, { Component } from "react"; 
import Api from './services/api';

class App extends Component {

  async componentDidMount() {          
    const response = await Api.get();   
    console.log(response.data);
  }

  render() {

    return (
      <div className="wrapper">
        <div className="header__content">
          <h1>
              <a href="https://www.yapay.com.br/" target="_blank"></a>
          </h1>
        </div>
        <a href="#" className="add__user">Adicionar usuário</a>
        <input type="text" name="cidade" placeholder="Pesquise pelo nome" id="name-user" />
        <div className="content__users-list">
          <ul className="users__list">
          <li className="users__list-item">
              <span className="users__list-avatar"><img src="https://randomuser.me/api/portraits/men/82.jpg"></span>
              <div className="right__users">
                <span className="users__list-name">Lucas Garcia</span>
                <span className="users__list-username">'Leanne'</span>
                <span className="users__list-email">Sincere@april.biz</span>
                <span className="users__list-phone">(11) 1234-5676</span> 
              </div>
              <span className="users__list-id">1</span>
              <div className="remove__item"></div>
            </li>
          </ul>
        </div>
    </div>
    );
  }

}

export default App;




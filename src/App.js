import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({users: data})
        console.log(this.state.users)
      }).catch(console.log)
  }
  render(){
    return (
      <div className="container">
          <div className="col-xs-6">
          <h1>My Users</h1>
          {this.state.users.map((user) => (
            <div key={user.id}>
              <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://via.placeholder.com/300/09f.png/fff" height="100%"  className="card-img" alt="" style={{borderRadius: 0}} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{user.name}</h5>
                      <p className="card-text">@{user.username}</p>
                      <p className="card-text">{user.phone}</p>
                      <p className="card-text">{user.email}</p>
                      <p className="card-text"><small>{user.website}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
          </div>
         </div>
    );
  }
}

export default App;

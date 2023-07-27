import React, { Component } from 'react'
import LoginService from '../services/login-service';

class Login extends Component{
    
    constructor(props){
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            username : '',
            password: ''
        }
    }
    componentDidMount(){
        
    }
    onChangeUserName(e){
        this.setState({username: e.target.value});
    }
    onChangePassword(e){
        this.setState({password: e.target.value});
    }
    login() { 
        var data = {
            username: this.state.username,
            password: this.state.password,
            grant_type: 'password'
          };

          LoginService.login(data).then(({ data }) => {
                console.log(JSON.stringify(data));
                sessionStorage.setItem('token', JSON.stringify(data));
                window.location.href="/home";
          })
          .catch(err => console.dir(err))
          .finally(() => console.log("Login ejecutado"))
    }
    render(){
        return(
            <div className="row">
                <div className="col s12 m8 l4 offset-m2 offset-l4">
                <div className="card">
            
                    <div className="card-action blue lighten-1 white-text">
                    <b><i className="material-icons f300">person_pin</i></b>
                    </div>
            
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s12">
                                    <input type="text" name="username" required autoComplete="off" onChange={this.onChangeUserName}/>
                                    <label htmlFor="username">Usuario</label>
                                </div>                       
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s12">
                                    <input type="password" name="password" required autoComplete="off" onChange={this.onChangePassword}/>
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="col s12">
                                    <label>
                                        <input name="rememberme" type="checkbox" />
                                        <span>Recordarme</span>
                                    </label>               
                                </div>                     
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button type="button" className="btn-large waves-effect waves-dark  blue darken-4" onClick={this.login}>Inciar sesión</button>
                            </div>
                        </div>
                    </div>      
                </div>
                </div>
            </div>
        )
    }
}


export default Login;
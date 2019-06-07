import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
margin: 10rem 1rem 10rem 0;
`

class Login extends React.Component {
    
    state = {
        userNameText: '',
        passwordText: '',
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    login = event => {
        this.props.login(this.state.userNameText,this.state.passwordText);
    }

    render() {
        return (
           <form onSubmit = {this.login}>
               <Input placeholder = 'username' value = {this.state.userNameText} onChange = {this.handleChanges} name = 'userNameText'  ></Input>
               <Input placeholder = 'password'></Input>
               <button>Log In</button>
           </form> 
        )
    }
}

export default Login
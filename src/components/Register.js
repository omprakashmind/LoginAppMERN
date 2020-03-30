import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Paper,Button,FormControl,Input,InputLabel} from '@material-ui/core'
import {Link} from 'react-router-dom'




class Register extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            id:'',
            passoword:''
        }
    }

    changeValue=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

        render(){

                return(

                   <Paper>
                       <h3>REGISTRATION FORM</h3>
                       <h5>Register to join the community </h5>
                      <form>
                          
                          <FormControl required margin="normal" fullWidth>
                              <InputLabel htmlFor="name">NAME</InputLabel>
                              <Input id="name" name="name" onChange={this.changeValue}/>
                          </FormControl>

                          <FormControl required margin="normal" fullWidth>
                              <InputLabel htmlFor="id">EMAIL-ID</InputLabel>
                              <Input type="email" id="email" name="id" onChange={this.changeValue}/>
                          </FormControl>

                          <FormControl required margin="normal" fullWidth>
                              <InputLabel htmlFor="password">PASSWORD</InputLabel>
                              <Input type="password" id="password" name="password" onChange={this.changeValue}/>
                          </FormControl>

                          <Button type="submit" fullWidth variant="contained" color="secondary" onClick={this.registerValue}>Register</Button>
                      </form>

                      <br></br>
                      <Button type="submit" fullWidth variant="contained" component={Link} to="/">ALREASY REGISTERED BACK TO LOGIN</Button>

                   </Paper>

                )
        }
}



export default Register;
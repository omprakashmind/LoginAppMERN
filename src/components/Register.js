import React from 'react';
import {Paper,Button,FormControl,Input,InputLabel} from '@material-ui/core'
import {Link} from 'react-router-dom'
import axios from 'axios'



class Register extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            username:'',
            password:'',
            date:new Date()
        }
    }

    changeValue=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }



    registerValue=(e)=>{
      e.preventDefault();
        let name1=this.state.name
        let username1=this.state.username
        let password1=this.state.password
        let date=new Date()

        axios.post('http://localhost:5000/user/add',({name:name1,dob:date,username:username1,password:password1}))
        .then(res=>{
            console.log(res);   
        })
        .catch(err=>{console.log(err)})

    }

        render(){

                return(

                   <Paper>
                       <h3>REGISTRATION FORM</h3>
                       <h5>Register to join the community </h5>
                      <form>
                          
                          <FormControl required margin="normal" fullWidth>
                              <InputLabel htmlFor="name">NAME</InputLabel>
                              <Input id="String" name="name" onChange={this.changeValue}/>
                          </FormControl>

                          <FormControl required margin="normal" fullWidth>
                              <InputLabel htmlFor="id">USERNAME(EMAIL-id)</InputLabel>
                              <Input type="email" id="email" name="username" onChange={this.changeValue}/>
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
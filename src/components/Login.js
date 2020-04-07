import React from 'react';
import {Link} from 'react-router-dom';
import {Button,Paper,FormControl,Input,InputLabel} from '@material-ui/core'
import axios from 'axios'

class Login extends React.Component{
   constructor(props)
   {
       super(props)
       this.state={
           id:'',
           pass:'',
           message:''
       }
   }

   changeValue=(event)=>{
       this.setState({
           [event.target.name]:event.target.value,
           message:''
       })
   }

  checkAuthenticity=(e)=>{
      e.preventDefault();
      let username=this.state.id
      let password=this.state.pass
      
      console.log(username)
      console.log(password)

     axios.post('http://localhost:5000/user/authenticate', {username:username,password:password})
     .then(res=> {
        const token=res.data.token
        localStorage.setItem('jwtToken',token)

         console.log(res['data'])
         res['data']===null?this.setState({message:'WRONG CREDENTIALS'}) : this.setState({id:'',pass:'',message:"SUCCESFULLY REGISTERED"})

     })
     .catch(err=> console.log(err) )

  }


    render(){

            return(

                <Paper>
                    <h3>LOGIN FORM  </h3>
                      <h2>{this.state.message}</h2>
                    <form>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlfor="id">ID</InputLabel>
                            <Input type="email" id="id" name="id" autoComplete="off" value={this.state.id} onChange={this.changeValue}/>
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">PASSWORD</InputLabel>
                            <Input type="password" id="pass" name="pass" autoComplete="off" value={this.state.password} onChange={this.changeValue}/>
                        </FormControl>
                        
                        <Button type="submit" fullWidth variant="contained" onClick={this.checkAuthenticity} color="secondary" >Login</Button>

                    </form>
                    <br></br>

                    <Button type="submit" fullWidth variant="contained" component={Link} to="/register" color="primary">SIGN UP(REGISTER)</Button>


                </Paper>

            )
    }

}


export default Login;

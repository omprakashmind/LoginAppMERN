import React from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {Button,Paper,FormControl,Input,InputLabel} from '@material-ui/core'


class Login extends React.Component{
   constructor(props)
   {
       super(props)
       this.state={
           id:'',
           password:''
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
                    <h3>LOGIN FORM  </h3>
                    <form>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlfor="id">ID</InputLabel>
                            <Input type="email" id="id" name="id" autoComplete="off" value={this.state.id} onChange={this.changeValue}/>
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">PASSWORD</InputLabel>
                            <Input type="password" id="password" name="password" autoComplete="off" value={this.state.password} onChange={this.changeValue}/>
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

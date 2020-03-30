import React from 'react';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import {Link} from 'react-router-dom'
import {Button,FormControl,Input,InputLabel, Paper} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import './styles.css';


class ChatApplication extends React.Component{
       constructor(props){
           super(props);
           this.state={
               message:'',
               name:'JOSHI',
               displayInfor:[],
               error:''
           }
       }

       changeValue=(event)=>{
           this.setState({
               [event.target.name]:event.target.value,
           })
       }

       sendMessage=(event)=>{
           event.preventDefault()
           
           let val3=this.state.name
           let val4=this.state.message
           if(val4.trim().length>0)
           {
           let obj=new Object();
           obj['name']=val3
           obj['message']=val4

           let infor=this.state.displayInfor
           infor.push(obj)

             this.setState({
               displayInfor:infor,
               message:'',
               error:''
              })
            }
       }

       render(){

            let showMessage=this.state.displayInfor && this.state.displayInfor.map((item,index)=>{
                return(

                           <div className="box"><span>{item.message}</span><span className="user"><sup>{item.name}</sup></span></div>

                ) 
            })
              
       return(
                    <Paper>

                    <Card>
                       
                    <div> <CardHeader  title="JOIN THE CHAT APPLICATION "></CardHeader><p>{this.state.name}</p></div> 

                        <CardMedia title="ALL MESSAGES ARE ENCRYPED"/>

                            <div className="box1">
                                 {showMessage}
                            </div>     

                        <CardContent title="Input values">

                            <form>

                                <FormControl margin="normal" required fullWidth>

                                    <InputLabel htmlFor="message">ENTER YOUR MESSAGE TO SEND</InputLabel>
                                    <Input type="text" name="message" value={this.state.message} onChange={this.changeValue}/>

                                </FormControl>    

                                <Button type="submit" fullWidth variant="contained" onClick={this.sendMessage} color="secondary"><SendIcon/></Button>

                            </form>

                        </CardContent>

                    </Card>

                <Button type="submit" component={Link} to="/" fullWidth variant="contained" >LOGOUT</Button>

                </Paper>
                )
       }
    
}


export default ChatApplication;
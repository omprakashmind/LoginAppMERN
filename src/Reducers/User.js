import {REGISTER} from '../Actions/actiontypes';
import {USER} from '../Actions/actiontypes';

const state1=[]

export const addUser=(state=state1,action)=>{
   switch(action.type){
       case 'REGISTER':
           return [
               ...state,{
                   id:action.id,
                   password:action.password,
                   name:action.name
               }
           ]
        default:
            return state;   
   }
}

export const currUser=(state='',action)=>{
    
    switch(action.type){
        case 'USER':     
            return[state,action.user]
        default :
           return state;    
    }
}

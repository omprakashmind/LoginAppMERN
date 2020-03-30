import {REGISTER} from './actiontypes'
import {MESSAGE} from './actiontypes'
import {USER} from './actiontypes'




export const createUser=(id,password,name)=>({
    type:'REGISTER',
    id:id,
    password:password,
    name:name
})


export const addMessage=(text,name)=>({
    type:'MESSAGE',
    text:'text',
    name:'name'
})

export const addUser=name=>({
    type:'USER',
    name:'name'
})



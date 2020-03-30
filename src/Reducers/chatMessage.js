import {MESSAGE} from './User'

const state2=[]


export const showMessage=(state=state2,action)=>{
    switch(action.type){
        case 'MESSAGE':
            return [...state,{
                name:action.name,
                message:action.message
            }]
        default:
            return state;    
    }

}





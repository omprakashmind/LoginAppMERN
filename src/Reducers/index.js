import {addUser} from './User'
import {showMessage} from './chatMessage'
import {combineReducers} from 'redux'
import {currUser} from './User' 



export default combineReducers({addUser,showMessage,currUser})



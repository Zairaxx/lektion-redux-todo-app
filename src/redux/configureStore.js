import {createStore, combineReducers} from 'redux'
import HeaderReducer from './ducks/header'
import TodoListReducer from './ducks/todoList'

const reducer = combineReducers({
    header:HeaderReducer,
    todoList:TodoListReducer
})

const store = createStore(reducer);

export default store
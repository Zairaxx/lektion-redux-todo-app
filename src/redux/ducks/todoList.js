// Actions 

export const addTodo = (todoObj) => (
    {
        type:"addTodo",
        payload:todoObj
    }
)

export const removeTodo = (title) => (
    {
        type:"removeTodo",
        payload:title
    }
    )

// State

const initialState = {
    todos:[
        {
            title:"Diska",
            desc:"Diska alla tallrikar"
        },
        {
            title:"Handla",
            desc:"Köp mjölk och kanelbullar"
        }]
}

// Reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addTodo":
            return {...state, todos: [...state.todos, action.payload]}
        case "removeTodo":
            return {...state, todos: state.todos.filter(todo => todo.title !== action.payload)}
        default:
            return state
    }
}

export default reducer
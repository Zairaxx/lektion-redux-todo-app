//ACTIONS

export const setName = (value) => ({
    type:"setName",
    payload:value
})


//STATE

const initialState = {
    name:"",
}

//REDUCER

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "setName":
            return {name: action.payload}
        default:
            return state
    }
}

export default reducer
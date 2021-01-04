export const initialState={
    menu:[]
}

function Reducer(state,action) {
    console.log(action)
switch(action.type){
    
        case "SHOW_MENU" :
            return {...state,menu:action.item}

                default:
                return state
}

}


export default Reducer

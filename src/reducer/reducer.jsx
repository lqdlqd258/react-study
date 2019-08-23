export default (state,action) =>{
    if(state == undefined){
        return {"v" : 0 , "b" : 2 , "c" : 3}
    }
    switch(action.type){
        case 'ADD':
            return {...state,"v":state.v + 1}
            break;
        case 'REDUCE':
            return {...state,"v":state.v - 1}
            break;
        case 'ADDTEXT':
            return {...state,"v":state.v + action.value}
            break;
        default:
            return state;
    }
}
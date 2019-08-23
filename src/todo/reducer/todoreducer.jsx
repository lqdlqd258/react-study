const initState = [
    {
        "id" : 1,
        "content" : "这是一个默待做事项1",
        "done" : false
    },
    {
        "id" : 2,
        "content" : "这是一个默待做事项2",
        "done" : false
    },
    {
        "id" : 3,
        "content" : "这是一个默待做事项3",
        "done" : false
    }
]

export default (state = initState,action)=>{
    switch(action.type){
        case "UPDATEITEM" :
           return state.map((item)=>{
              return item.id == action.id?{
                  ...item,"content" 
                  : action.content
                }
                :item
           })
            break;
        case "DELETEITEM" : 
           return state.filter((item)=>{
              return item.id == action.id? false : true
           })
            break;
        case "CHANGECHECK" :
            return state.map((item)=>{
                return item.id == action.id? {...item,"done":!item.done} : item
            })
            break;
        case "ADDITEM" :
            return [{
                "id" : state.reduce((prev,cur)=>{
                   return cur.id > prev ? cur.id : prev
                },-1) + 1,
                "content" : action.content,
                "done" : false
            },...state]
            break;
        default : return state;
    }
    return state;
}
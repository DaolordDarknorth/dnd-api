export const reducer = (state, action) =>{
    switch(action.type){
        case "SET_LOADING": {
            return({...state, loading: true})
        }
        case "SET_HITS":{
            return({...state, loading: false, test1: action.payload.test1, test2: action.payload.test2})
        }
        case "HANDLE_SEARCH":{
            return {...state, query: action.payload}
        }
        default:{
            console.log('action.payload does not exist');
        }
    }
    }
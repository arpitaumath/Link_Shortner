const ShorternReducer =(state , action ) => {
   switch (action.type) {
    case 'ADD_LINK':
        return {
          
          ...state,
          links :[action.payload , ...state.links]
          
        }
    case 'REMOVE_LINK':
        return {
          
          ...state,
          links : state.links.filter((item) => item.id !== action.payload),
          
        }
       
   
    default:
        return state
   }
}

export default ShorternReducer
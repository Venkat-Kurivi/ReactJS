const stateObj = {
    email: ""
};

//reducer
const reducer=(state=stateObj , action)=>{ 
    
    if(action.type == "INSERT"){
        state= {            
            email: action.email
        }      
    }
   return state;   
}
 
export default reducer;

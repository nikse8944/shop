import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"usr",
    initialState:{
       userInfo:{

           
           name:"jon",
           email:"jon@gmail.com"
        },
        
        pending:false,
        error:false,
    },


    reducers:{
        updateStart:(state)=>{
            state.pending = true
        },
        updateSuccess:(state,action)=>{
            state.pending =false;
            state.userInfo =action.payload
            
        },
        updateError:(state)=>{
            state.error = true
            state.pending = false
                    
        },
            

        
        
    }
})




export const {updateStart,updateSuccess,updateError}=userSlice.actions
export default userSlice.reducer
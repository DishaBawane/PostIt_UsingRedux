import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts:[
      {
        objectId:"abcde",
        img:"https://th.bing.com/th/id/OIP.76Mrh8SG47kg6e39TlbpzgHaJ4?w=189&h=252&c=7&r=0&o=5&dpr=1.38&pid=1.7",
        title:"nature",
        text:"test1",
        category:"nature" ,
      },
  ],
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
      getpost(state,action){
          console.log("action",action.payload)
          state.posts = action.payload
      },
      updatePost(state,action){
          state.posts=[action.payload,...state.posts]
      }
    
    },
    
});

export const { getpost , updatePost} = postSlice.actions;
export default postSlice.reducer


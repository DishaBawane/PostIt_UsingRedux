// import { useDispatch } from 'react-redux';
import postitAPI from '../../apis/postitAPI';
import { updatePost} from '../slices/post_slice';

export const submitActions = (data) => async (dispatch)=>{

    const response = await postitAPI.post("/Post",data);

    const post = await postitAPI.get(`/post/${response.data.objectId}`);
    
   
    dispatch(updatePost(post.data));

};
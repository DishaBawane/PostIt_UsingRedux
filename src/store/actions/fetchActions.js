import { useDispatch } from 'react-redux'
import postitAPI from '../../apis/postitAPI';
import { getpost } from '../slices/post_slice'

export const fetchActions = () => async (dispatch)=>{

    const response = await postitAPI.get("/Post");
    dispatch(getpost(response.data.results));

}

import Card from "./components/Card";
import PostCard from "./components/PostCard";
import { useDispatch } from "react-redux";

import {fetchActions} from './store/actions/fetchActions';
import React from "react";



const App = () => {
  const dispatch = useDispatch();
  
  React.useEffect(()=>{
    dispatch(fetchActions());
  },[dispatch])

  return (
    <>
      <Card />
      <PostCard/>

    </>
  );
};

export default App;

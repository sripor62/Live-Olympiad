import React from 'react'
import BookletLayout from '../../designs/Dashboard/BookletLayout'
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { useStore } from "../../stores";

const Booklet = () => {
  const clearCurrentUser = useStore((state) => state.clearCurrentUser)
    
  return (
    <HomeLayout logOutHandler={clearCurrentUser}><BookletLayout/></HomeLayout>
  )
}

export default Booklet;
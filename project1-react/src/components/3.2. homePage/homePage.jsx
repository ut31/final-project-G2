import './homePage.css'
import { fetchTopicsData } from "../../api/topicsData";
import React, { useState, useEffect } from 'react'
import Topics from '../3.2.2 topics/Topics';

const HomePage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopicsData().then((res) => {
      setTopics(res);
    });
 
  }, []);
  console.log(topics);
  return (
    <>
    <h2 className='resFound'>
      "24" Web Topics Found
    </h2>
    <Topics topics={topics} />
    </>    
  )
}

export default HomePage;
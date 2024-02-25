import React, { useState , useEffect } from 'react';
import sample from './assets/sample.mp4';
import image from './assets/s.png';
import facebook from './assets/facebook.png';
import './Components/Styles/Sanjai.css';
import instagram from  './assets/instagram.png';
import github from './assets/github.webp';
import InfiniteScroll from 'react-infinite-scroll-component';



export function Sanjai() {
  const [follow, setFollow] = useState("Follow 👋");
  useEffect(() => {document.title = `Sanjai`},[])

  const [like , setLike ] = useState("Like ");

  
  const clickFollow = () => setFollow("You followed 🤟 ");

  const clickLike = () => setLike("Liked 🔔");

  const [useData , setUseData ] = useState(Array.from({length:1}));

 const fetchmoreData = () =>{
    setTimeout  (() =>{
      setUseData(useData.concat(Array.from({length:1})))
    },1000)}
  

  return (<div><video className="video-background" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
    <InfiniteScroll dataLength={useData.length} next={fetchmoreData} >
      {useData.map((item,index) =>{
        return  <div className="video-container">
        
        <div className="content">
          <div className='con'>
            <h1>Sanjai's Website</h1>
            <img src={image} alt="image" />
            <p>This is my website collaborated with a large community.</p>
            <div className='button'>
              <button className='b1' onClick={clickFollow}>{follow}</button>
              <br />
              <button className='b1'onClick={clickLike}>{like}</button>
            </div>
            
          </div><div className='social-media'><h2></h2>
           <a href="https://www.facebook.com/profile.php?id=61552648796540&sk=friends" target='blank' rel="noopener noreferrer">
            <img  className= 'so' src={facebook} alt="face" />
            </a> 
            <a href="https://www.instagram.com/sanjaishaarugesh/" target='blank' rel="noopener noreferrer">
              <img className='so'  src={instagram} alt="instagram" />
            </a>
            <a href="https://github.com/Sanjai-Shaarugesh" target='blank' rel="noopener noreferrer">
              <img className='so' src={github} alt="github" />
            </a>
            <a className='todo' href="https://sanjai-shaarugesh-to-do-friends.netlify.app/" target='blank'> <h3 className='todo'>Click here for To-Do-Friends app</h3></a>
            <br />
            
            </div>
           
           
        </div>
      </div>

      })}

    </InfiniteScroll>
  </div>
   
  );
}


export default Sanjai;
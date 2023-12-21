import React from 'react'
import movieData from './data.json'
import './main.css'
import Moviecard from './../Moviecard/Moviecard'


const Main = () => {
  return (
    <div className='main_container'>
      {
        movieData.map((item)=>{
            return <Moviecard  subImage={item.subImage} title={item.title} year={item.year} director={item.director} time={item.time} type={item.type} overview={item.overview} backgroundImage = {item.backgroundImage} bgImage={item.bgImage}/>
        })
      }
    </div>
  )
}

export default Main

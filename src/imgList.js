import React from 'react'
import ImgCard from './imgCard';
import './imgList.css'

const imgList = (props) => {
  const photu = props.imgs.map((image) => {
    return <ImgCard key={image.id} Image={image} />
  });

  return <div className="image-list"> {photu} </div>
}

export default imgList

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navdb from '../../Componets/Navdb'
import api from '../Server'
import { Button } from '@mui/material'

const ArticleDb = () => {

  const {id} = useParams()
  var [inf, setInf] = useState({})
  var [title,setTitle] = useState("")
  var [content,setContent] = useState("")
  var [image,setImage] = useState(inf.image)

  useEffect(()=>{
    axios.get(api+id+"/").then(res=>{setInf(res.data);})
    
},[])
  
  
  

const handlePictureChange = (event) => {
  const file = event.target.files[0];
  setImage(file);
};

  

function update() {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('image', image);

  axios.put(api + id + "/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }).then(res => {
    console.log(res);
    setImage(res.data.image);
  }).catch(err => {
    console.log(err);
  });
}
  console.log(image)



  return (
    <div>
      <Navdb/>
      <div className='container pt-5 pb-5 ' style={{}}>
        <div className='d-flex row p-3 shadow-lg bg-light rounded'>
          <img src={image || inf.image} alt="Profile" onClick={() => document.getElementById('picture-input').click()} className='col-sm-11 col-md-6'/>
          <div className='col-sm-11 col-md-6' style={{}}>
            <input type="text" className="form-control mb-4" aria-describedby="emailHelp" placeholder="title" defaultValue={inf.title} onChange={e=>{setTitle(e.target.value)}} />
            <textarea className="form-control mb-4" rows={10} placeholder='Content' defaultValue={inf.content} onChange={e=>{setContent(e.target.value)}} ></textarea>
            <input type="file" id="picture-input" accept="image/*" onChange={handlePictureChange} style={{display: 'none'}} />
            <Button className='mt-auto align-self-center' variant="contained" style={{backgroundColor:"#E96363"}}   onClick={(e)=>{update()}}>Update</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ArticleDb
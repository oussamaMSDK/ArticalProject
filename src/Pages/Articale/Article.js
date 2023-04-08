import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../Componets/Nav'
import api from '../Server'

const Article = () => {
  
  
  const {id} = useParams()
  var [inf,setInf] = useState({})

  useEffect(()=>{
      axios.get(api+id+"/").then(res=>{setInf(res.data);})
  },[])
  
  
  return (
    

    <div>
      <Nav/>

      <div className='container pt-5 pb-5 ' style={{}}>
        <div className='d-flex row p-3 shadow-lg bg-light rounded'>
          <img src={inf.image} width={450} className='col-sm-11 col-md-6' alt=''/>
          <div className='col-sm-11 col-md-6' style={{}}>
            <h1>{inf.title}</h1>
            <p>{inf.content}</p>
          </div>  
          


        </div>
      
      </div>
      

    </div>
  )
}

export default Article
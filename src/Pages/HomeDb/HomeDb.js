import React, { useEffect, useState } from 'react'
import Navdb from '../../Componets/Navdb'
import axios from 'axios'
import CardDb from '../../Componets/CardDb'
import api from '../Server'



const HomeDb = () => {
  
    const [inf,setInf] = useState([])

    function load(){
      axios.get(api).then(res=>{setInf(res.data)})
    }

    
    useEffect(()=>{
        load()
        
    },[])


  return (
<div className='' style={{backgroundColor:"#F3F3F3", border:"red", outline:"none" }}>
      <Navdb colHome="#E96363"/>
      <div className='container mt-4'>
        <h1><b>Posts</b> </h1>
        <div className='row w-100'>
          {
            inf.map(item=><CardDb
              key={item.id}  
              title={item.title}
              body={item.content}
              image={item.image}
              id={item.id}
              load = {load}
              
            />)
          }

        </div>

      </div>
    </div>
  )
}

export default HomeDb
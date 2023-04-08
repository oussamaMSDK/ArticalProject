import React, { useEffect, useState } from 'react'
import Nav from '../../Componets/Nav'
import Card from '../../Componets/Card'
import src from '../../Assets/Images/2.png'
import axios from 'axios'

const Home = () => {

  const [inf,setInf] = useState([])
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/article/").then(res=>{setInf(res.data)})
  },[])

  return (
    <div className='' style={{backgroundColor:"#F3F3F3", border:"red", outline:"none" }}>
      <Nav colHome="#E96363"/>
      <div className='container'>
        <h1><b>Posts</b> </h1>
        <div className='row w-100'>
          {
            inf.map(item=><Card
              title={item.title}
              body={item.content}
              image={item.image}
              id={item.id}
              
            />)
          }

        </div>

      </div>
    </div>
  )
}

export default Home
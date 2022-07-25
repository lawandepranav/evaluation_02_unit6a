import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"



const MovieDetails = () => {
    const {id} = useParams()
    const [blogDetails,setblogDetails] = React.useState({})

    useEffect(()=>{
       fetch (`http://localhost:8080/movies/${id}`)
       .then((res) => (res.json()))
       .then ((res) =>setblogDetails(res))
    },[id])




  return (
    <div>
       <h1 style = {{color: "teal",marginTop:"80px"}}>Movie Details</h1>
       {
           
          <div style = {{marginTop:"px",display:"flex", flexDirection:"column"}} >
             
            <p> {blogDetails.original_title}</p>
             <p>{blogDetails.release_date}</p>
             <p >{blogDetails.overview}</p>
             <p>{blogDetails.vote_count}</p>

       
             <buton></buton>
            </div>
           
       }
    </div>
  )
}

export default MovieDetails

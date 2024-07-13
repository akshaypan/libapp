import React, { useState } from 'react'
import Navigationbar from './Navigationbar'

const Viewallbook = () => {
  var[data,changeData]=useState(
    [
    {"Bookname":"Lord of the rings","Author":"JRR Tolkien","price":500,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 2","Author":"William shakepheare","price":100,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 3","Author":"JRR Tolkien","price":700,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 4","Author":"JRR Tolkien","price":800,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 5","Author":"JRR Tolkien","price":90,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 6","Author":"JRR Tolkien","price":800,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 7","Author":"JRR Tolkien","price":900,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 8","Author":"JRR Tolkien","price":500,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"}
    ]
  )
  return (
    <div>

<Navigationbar/>
<div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
           
           
           {data.map(
              (value,index)=>{
               return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

           <div class="card">
              <img src="https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{value.Bookname}</h5>
                <p class="card-text">{value.Author}</p>
                <p class="card-text">Rs.{value.price}</p>
                <a href="#" class="btn btn-primary">Buy now</a>
              </div>
            </div>

          </div>
              }
           )}

            
            
          </div>
        </div>
      </div>
     </div> 

    </div>
  )
}

export default Viewallbook
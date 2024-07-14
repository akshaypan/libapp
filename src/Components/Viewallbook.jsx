import React, { useState } from 'react'
import Navigationbar from './Navigationbar'

const Viewallbook = () => {
  var[data,changeData]=useState(
    [
    {"Bookname":"Lord of the rings","Author":"JRR Tolkien","price":500,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"To kill a mocking bird","Author":"Harper Lee","price":100,"image":"https://qph.cf2.quoracdn.net/main-qimg-9453af8ac5c258368110c598704871d3.webp"},
    {"Bookname":"Lord of the rings 3","Author":"JRR Tolkien","price":700,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 4","Author":"JRR Tolkien","price":800,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 5","Author":"JRR Tolkien","price":90,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 6","Author":"JRR Tolkien","price":800,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 7","Author":"JRR Tolkien","price":900,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"},
    {"Bookname":"Lord of the rings 8","Author":"JRR Tolkien","price":500,"image":"https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg"}
    ]
  )
   var [data1,changeData]=useState(
    [
      {"SI":1,"Bookname":"The famous five collection","Author":"Enid blyton","price":"500"},
      {"SI":2,"Bookname":"Dissapearing Earth","Author":"Julia Philips","price":"800"},
      {"SI":3,"Bookname":"The road","Author":"Comrac McCarthy","price":"900"}
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
              <img src={value.image} class="card-img-top" alt="..."/>
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

<div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">SI No.</th>
      <th scope="col">Book name</th>
      <th scope="col">Book author</th>
      <th scope="col">Book price</th>
    </tr>
  </thead>
  <tbody>
    
    {data1.map(
      (value,i)=>{
        return <tr>
        <th scope="row">{value.SI}</th>
        <td>{value.Bookname}</td>
        <td>{value.Author}</td>
        <td>{value.price}</td>
      </tr>
      }
    )}


  </tbody>
</table>

                </div>
            </div>
            
            
          </div>
        </div>
      </div>
     </div> 

    </div>
  )
}

export default Viewallbook
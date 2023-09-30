// import css
import { useEffect, useState } from 'react';
import './PhotoDetails.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function  PhotoDetails(){

    const {id} = useParams();
    const PHOTO_DETAILS = 'https://api.slingacademy.com/v1/sample-data/photos/'

    const [photo,setPhoto] = useState(null)

    async function  downloadPhoto(){
        const response = await axios.get(PHOTO_DETAILS + id)
        const photo =response.data.photo
        console.log(photo);
        setPhoto({
            img: photo.url,
            title:photo.title,
            description:photo.description
        })

    }

    console.log(photo);

    useEffect(()=>{
       
        downloadPhoto()

    },[])
     
    return (
      
        photo &&
        <>
        <div className='main-div'>
        <div className='image-div'>
        <img src={photo.img}/>
        </div>
        <div className='description-div'>
        <h1>{photo.title}</h1>
        <h3>{photo.description}</h3>
        </div>
        </div>
        <Link to={"/"}> <button className='btn'>Main page</button></Link>
       
        </> 
        

    )

}


export default PhotoDetails;
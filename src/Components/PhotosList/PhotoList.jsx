import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import './PhotoList.css'
import Photo from "../Photo/Photo";

function PhotoList(){

    const [photoList,setPhotoList] = useState([]);

    const photoUrl = "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"

    const fetchPhotos = async () =>{
        
        
        try {
            const response = await axios.get(photoUrl)
            if(response.data.success===true){
                
                const photosResults = response.data.photos
                
                const photoList = photosResults.map(photoData=>{
        
                    return{
                        id:photoData.id,
                        image:photoData.url,
                        title:photoData.title,
                        description:photoData.description,

                    }
                    
                });

                setPhotoList(photoList)
       

            }
            
        } catch (error) {
            console.log(error);
            
        }

                
            
    }


    useEffect(()=>{
        fetchPhotos()
    },[])

    

    return (
        <>
        <h1>My Gallery</h1> 
        <div className="main-container">
        {photoList.map(photo => <Photo image={photo.image} id={photo.id} key={photo.id} title={photo.title} description={photo.description}/>)}
        </div>
        </>
       

    )
}
 

export default PhotoList;
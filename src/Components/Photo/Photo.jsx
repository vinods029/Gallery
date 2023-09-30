// Import css

import './Photo.css'
import { Link } from 'react-router-dom';


function Photo({id,image,title,description}){

    return(
        <Link to={`/photos/${id}`}>
        <div className='photo-box'>
        <img src={image}/>
        </div>
        </Link>
   
     
        
    )

}


export default Photo;
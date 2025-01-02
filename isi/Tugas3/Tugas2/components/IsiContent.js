import React from 'react'
import "./IsiContent.css"
import LikeButton from './LikeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const IsiContent = ({ id, cover, title, category, likes, view }) => {


    return (
        <div className='kotak-content'>
            <Link to={`/detail/${id}`}>
                <img src={cover ?? "not-available.jpeg"} alt="Gambar" />
            </Link>
            <h4 className='title'>{title}</h4>
            <h5 className='category'>{category}</h5>
            <p className='likes'><LikeButton likes={likes}/></p>
            <p className='view'><FontAwesomeIcon icon={faEye} />{view}</p>
        </div>
    )
}

export default IsiContent

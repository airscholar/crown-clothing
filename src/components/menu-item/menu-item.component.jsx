import React from 'react'
import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    let navigate = useNavigate();

    return <div className={`${size} menu-item`} onClick={() => navigate(`/${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div >

}
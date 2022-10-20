import React from 'react'
import './Card.css'
import YouTube from 'react-youtube';
import { useState } from 'react';

const Card = ({ store }) => {
    const [state, setState] = useState({
        video: false,
        videoId: '',
    })
    const opts = {
        height: "auto",
        width: "auto",
        playerVars: {
            autoplay: 1,
        }
    }
    const inVideo = (store) => {
        setState((state) => ({
            video: true,
            videoId: store
        }))
    }
    const outVideo = () => {
        setState((state) => ({
            video: false,
            videoId: store
        }))
    }
    return (

        <div className='card-items' onMouseOver={() => inVideo(store.id)} onMouseOut={() => outVideo(store.id)} >
            {state.video && state.videoId === store.id ?
                (<YouTube videoId={store.vandi} opts={opts} className='card-items__video' />)
                :
                (<img src={`https://i.ytimg.com/vi/${store.vandi}/hq720.jpg`} alt="" className='card-items__img' />)}
            <div className='card-disc'>
                <img src={store.avatar} alt="avatar" className="card-disc__img" />
                <div className='card-disc-items'>
                    <p className='card-disc__p--disc'>{store.title}</p>
                    <p className='card-disc__p--chan'>{store.channel}
                        {store.verify ? (<span className="material-symbols-outlined card-disc__icon ">
                            check_circle
                        </span>) : (<span className='card-disc__icon'></span>)}

                    </p>
                    <p className='card-disc__p--view'>
                        {store.views} Views . {store.date} ago
                    </p>

                </div>


            </div>
            {/* <div className='card-butto'>
                <button className='card__button'>
                    <span className="material-symbols-outlined">
                        schedule
                    </span>
                    <p>WATCH LATER</p>
                </button>
                <button className='card__button'>
                    <span className="material-symbols-outlined">
                        playlist_play
                    </span>
                    <p>ADD TO QUEUE</p>
                </button>
            </div> */}
        </div>
    )
}

export default Card
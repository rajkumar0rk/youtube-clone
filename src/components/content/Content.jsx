import React from 'react'
import Card from './Card'
import './Content.css'
import { datas } from '../services/request'

const Content = () => {
    return (

        <>


            <div className='content'>
                <hr className='content__hr' />
                <div className='content-card'>
                    {datas.map((data) => (<Card store={data} key={data.id} />))}
                </div>
                <div className='content-footer' />
            </div>
        </>
    )
}

export default Content
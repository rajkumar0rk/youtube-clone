import React from 'react'
import './SideBar.css'
import Menu from './Menu';


const SideBar = () => {
    return (

        <div className='side-bar'>

            <Menu icon={"home"} title={"Home"} />
            <Menu icon={"explore"} title={"Explore"} />
            <Menu icon={"play_arrow"} title={"Shorts"} />
            <Menu icon={"subscriptions"} title={"Subscription"} />
            <hr className='side-bar__hr' />
            <Menu icon={"video_library"} title={"Library"} />
            <Menu icon={"history"} title={"History"} />
            <Menu icon={"smart_display"} title={"Your Video"} />
            <Menu icon={"schedule"} title={"Watch Later"} />
            <Menu icon={"thumb_up"} title={"Likes"} />
            <Menu icon={"expand_more"} title={"Show More"} />
            <hr className='side-bar__hr' />

            <p className='side-bar-sub'>Subscriptions</p>

            <Menu icon={"account_circle"} title={"Rakesh Channel"} />
            <Menu icon={"account_circle"} title={"Ragul Channel"} />
            <Menu icon={"account_circle"} title={"Mathan Channel"} />
            <Menu icon={"account_circle"} title={"GP Muthu Channel"} />
            <Menu icon={"account_circle"} title={"Blue Shirt Channel"} />
            <Menu icon={"expand_more"} title={"Show More"} />
            <hr className='side-bar__hr' />

            <p className='side-bar-sub'>Explore</p>

            <Menu icon={"theaters"} title={"Movies"} />
            <Menu icon={"sports_esports"} title={"Gaming"} />
            <Menu icon={"sensors"} title={"Live"} />
            <Menu icon={"styler"} title={"Fashion&Beauty"} />
            <Menu icon={"lightbulb"} title={"Learning"} />
            <Menu icon={"sports"} title={"Sports"} />
            <hr className='side-bar__hr' />
            <Menu icon={"settings"} title={"Settings"} />
            <Menu icon={"flag"} title={"Report History"} />
            <Menu icon={"help"} title={"Help"} />
            <Menu icon={"rate_review"} title={"FeedBack"} />
            <br></br>
        </div >

    )
}

export default SideBar
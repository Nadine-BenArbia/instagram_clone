import React from 'react'
import './sidebar.css'



const Sidebar = () => {


    return (
        <>
            <div className="sidebar">
                <div className="sidebarMenu">
                    <img className='sidebarLogo' src='https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1' alt='instagram logo' />
                    <div className="sidebarList">
                        <i class="bi bi-house-door-fill"> Home</i>
                        <i class="bi bi-search">Search</i>
                        <i class="bi bi-compass">Exprolore</i>
                        <i class="bi bi-send">Messages</i>
                        <i class="bi bi-heart">Notifications</i>
                        <i class="bi bi-plus-square">Create</i>
                        <i className="SidebarProfilePicture">
                            <img className='profileLogo' src='https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-260nw-1095249842.jpg' alt='user' />
                            <span className="widgetSmUsername">Profile</span>

                        </i>
                        <i class="bi bi-list"> More</i>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar
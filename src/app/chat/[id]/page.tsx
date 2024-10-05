import React from 'react'
import SideMenu from '../_component/SideMenu'
import ChatPanel from '../_component/ChatPanel'
import ChatList from '../_component/ChatList'

function page() {
  return (
    <div className="layout-wrapper d-lg-flex">
    <SideMenu/>
    <ChatList/>
    <ChatPanel/>
</div>
  )
}

export default page
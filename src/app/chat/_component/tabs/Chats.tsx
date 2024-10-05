import React from 'react'
import ChatSearch from '../misc/ChatSearch'
import ActiveCarousel from '../misc/ActiveCarousel'
import ChatMessageList from '../misc/ChatMessageList'

function Chats() {
  return (
    <div>
    <ChatSearch />
    {/* .p-4 */}
    {/* Start user status */}
     <ActiveCarousel/>
    {/* end user status */}
    {/* Start chat-message-list */}
    <ChatMessageList/>
    {/* End chat-message-list */}
  </div>
  )
}

export default Chats
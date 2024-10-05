import React from 'react'
import Profile from './tabs/Profile'
import Chats from './tabs/Chats'
import Groups from './tabs/Groups'
import Contacts from './tabs/Contacts'
import Settings from './tabs/Settings'

function ChatList() {
    return (
        <div className="chat-leftsidebar me-lg-1 ms-lg-0">
            <div className="tab-content">
                <div
                    className="tab-pane"
                    id="pills-user"
                    role="tabpanel"
                    aria-labelledby="pills-user-tab"
                >
                    {/* Start Profile tab-pane */}
                    <Profile />
                    {/* End Profile tab-pane */}
                </div>
                {/* Start chats tab-pane */}
                <div
                    className="tab-pane fade show active"
                    id="pills-chat"
                    role="tabpanel"
                    aria-labelledby="pills-chat-tab"
                >
                    {/* Start chats content */}
                    <Chats />
                    {/* Start chats content */}
                </div>
                {/* End chats tab-pane */}
                {/* Start groups tab-pane */}
                <div
                    className="tab-pane"
                    id="pills-groups"
                    role="tabpanel"
                    aria-labelledby="pills-groups-tab"
                >
                    {/* Start Groups content */}
                    <Groups />
                    {/* End Groups content */}
                </div>
                {/* End groups tab-pane */}
                {/* Start contacts tab-pane */}
                <div
                    className="tab-pane"
                    id="pills-contacts"
                    role="tabpanel"
                    aria-labelledby="pills-contacts-tab"
                >
                    {/* Start Contact content */}
                    <Contacts />
                    {/* Start Contact content */}
                </div>
                {/* End contacts tab-pane */}
                {/* Start settings tab-pane */}
                <div
                    className="tab-pane"
                    id="pills-setting"
                    role="tabpanel"
                    aria-labelledby="pills-setting-tab"
                >
                    {/* Start Settings content */}
                    <Settings />
                    {/* Start Settings content */}
                </div>
                {/* End settings tab-pane */}
            </div>
            {/* end tab content */}
        </div>
    )
}

export default ChatList

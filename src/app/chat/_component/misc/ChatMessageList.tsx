import React from 'react'
import SingleMessage from './SingleMessage'

function ChatMessageList() {
  return (
    <div className="">
      <h5 className="mb-3 px-3 font-size-16">Recent</h5>
      <div className="chat-message-list px-2" data-simplebar="init">
        <div className="simplebar-wrapper" style={{ margin: '0px -8px' }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer" />
          </div>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: '-17px', bottom: 0 }}
            >
              <div
                className="simplebar-content-wrapper"
                style={{ height: '100%', overflow: 'hidden scroll' }}
              >
                <div
                  className="simplebar-content"
                  style={{ padding: '0px 8px' }}
                >
                  <SingleMessage />
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: 'auto', height: 890 }}
          />
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: 'hidden' }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              transform: 'translate3d(0px, 0px, 0px)',
              display: 'none',
            }}
          />
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: 'visible' }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: 173,
              transform: 'translate3d(0px, 0px, 0px)',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatMessageList

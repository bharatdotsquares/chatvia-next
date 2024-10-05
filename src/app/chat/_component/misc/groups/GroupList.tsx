import React from 'react'
import SingleGroup from './SingleGroup'

function GroupList() {
  return (
    <div
    className="p-4 chat-message-list chat-group-list"
    data-simplebar="init"
  >
    <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
      <div className="simplebar-height-auto-observer-wrapper">
        <div className="simplebar-height-auto-observer" />
      </div>
      <div className="simplebar-mask">
        <div
          className="simplebar-offset"
          style={{ right: 0, bottom: 0 }}
        >
          <div
            className="simplebar-content-wrapper"
            style={{ height: "auto", overflow: "hidden" }}
          >
            <div className="simplebar-content" style={{ padding: 24 }}>
              <ul className="list-unstyled chat-list">
                <SingleGroup/>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="simplebar-placeholder"
        style={{ width: 0, height: 0 }}
      />
    </div>
    <div
      className="simplebar-track simplebar-horizontal"
      style={{ visibility: "hidden" }}
    >
      <div
        className="simplebar-scrollbar"
        style={{
          transform: "translate3d(0px, 0px, 0px)",
          display: "none"
        }}
      />
    </div>
    <div
      className="simplebar-track simplebar-vertical"
      style={{ visibility: "hidden" }}
    >
      <div
        className="simplebar-scrollbar"
        style={{
          transform: "translate3d(0px, 0px, 0px)",
          display: "none"
        }}
      />
    </div>
  </div>
  )
}

export default GroupList
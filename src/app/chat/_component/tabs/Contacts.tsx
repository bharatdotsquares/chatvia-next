import React from 'react'
import SingleContact from '../misc/contacts/SingleContact'

function Contacts() {
  return (
    <div>
    <div className="p-4">
      <div className="user-chat-nav float-end">
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          aria-label="Add Contact"
          data-bs-original-title="Add Contact"
        >
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
            data-bs-toggle="modal"
            data-bs-target="#addContact-exampleModal"
          >
            <i className="ri-user-add-line" />
          </button>
        </div>
      </div>
      <h4 className="mb-4">Contacts</h4>
      {/* Start Add contact Modal */}
      
      {/* End Add contact Modal */}
      <div className="search-box chat-search-box">
        <div className="input-group bg-light  input-group-lg rounded-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-link text-decoration-none text-muted pe-1 ps-3"
              type="button"
            >
              <i className="ri-search-line search-icon font-size-18" />
            </button>
          </div>
          <input
            type="text"
            className="form-control bg-light"
            placeholder="Search users.."
          />
        </div>
      </div>
      {/* End search-box */}
    </div>
    {/* end p-4 */}
    {/* Start contact lists */}
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
               
                {/* end contact list A */}
                <SingleContact/>
              
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
    {/* end contact lists */}
  </div>
  )
}

export default Contacts
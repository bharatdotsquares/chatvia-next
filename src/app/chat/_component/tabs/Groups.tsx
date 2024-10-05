import React from 'react'
import GroupList from '../misc/groups/GroupList'

function Groups() {
  return (
    <div>
    <div className="p-4">
      <div className="user-chat-nav float-end">
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          aria-label="Create group"
          data-bs-original-title="Create group"
        >
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
            data-bs-toggle="modal"
            data-bs-target="#addgroup-exampleModal"
          >
            <i className="ri-group-line me-1 ms-0" />
          </button>
        </div>
      </div>
      <h4 className="mb-4">Groups</h4>
      {/* Start add group Modal */}
      
      {/* End add group Modal */}
      <div className="search-box chat-search-box">
        <div className="input-group rounded-3">
          <span
            className="input-group-text text-muted bg-light pe-1 ps-3"
            id="basic-addon1"
          >
            <i className="ri-search-line search-icon font-size-18" />
          </span>
          <input
            type="text"
            className="form-control bg-light"
            placeholder="Search groups..."
            aria-label="Search groups..."
            aria-describedby="basic-addon1"
          />
        </div>
      </div> 
      {/* Search Box*/}
    </div>
    {/* Start chat-group-list */}
     <GroupList/>
    {/* End chat-group-list */}
  </div>
  )
}

export default Groups
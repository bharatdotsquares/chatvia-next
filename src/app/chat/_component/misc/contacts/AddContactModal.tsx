import React from 'react'

function AddContact() {
  return (
    <div
    className="modal fade"
    id="addContact-exampleModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="addContact-exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5
            className="modal-title font-size-16"
            id="addContact-exampleModalLabel"
          >
            Add Contact
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body p-4">
          <form>
            <div className="mb-3">
              <label
                htmlFor="addcontactemail-input"
                className="form-label"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="addcontactemail-input"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="addcontact-invitemessage-input"
                className="form-label"
              >
                Invatation Message
              </label>
              <textarea
                className="form-control"
                id="addcontact-invitemessage-input"
                rows={3}
                placeholder="Enter Message"
                defaultValue={""}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-link"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Invite Contact
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddContact
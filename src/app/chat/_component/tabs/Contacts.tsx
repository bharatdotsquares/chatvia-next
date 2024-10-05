import React from 'react'

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
                <div>
                  <div className="p-3 fw-bold text-primary">A</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Albert Rodarte
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Allison Etter
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list A */}
                <div className="mt-3">
                  <div className="p-3 fw-bold text-primary">C</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Craig Smiley
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list C */}
                <div className="mt-3">
                  <div className="p-3 fw-bold text-primary">D</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Daniel Clay
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Doris Brown
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list D */}
                <div className="mt-3">
                  <div className="p-3 fw-bold text-primary">I</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">Iris Wells</h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list I */}
                <div className="mt-3">
                  <div className="p-3 fw-bold text-primary">J</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Juan Flakes
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">John Hall</h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Joy Southern
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list J */}
                <div className="mt-3">
                  <div className="p-3 fw-bold text-primary">M</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Mary Farmer
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Mark Messer
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Michael Hinton
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list M */}
                <div className="mt-3">
                  <div className="p-3 fw-bold text-primary">O</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Ossie Wilson
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list O */}
                <div className="mt-3">
                  <div className="p-3 fw-bold text-primary">P</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Phillis Griffin
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Paul Haynes
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list P */}
                <div className="mt-3">
                  <div className="p-3 fw-bold text-primary">R</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Rocky Jackson
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list R */}
                <div className="mt-3">
                  <div className="p-3 fw-bold text-primary">S</div>
                  <ul className="list-unstyled contact-list">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Sara Muller
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Simon Velez
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">
                            Steve Walker
                          </h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Share{" "}
                              <i className="ri-share-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" href="#">
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end contact list S */}
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
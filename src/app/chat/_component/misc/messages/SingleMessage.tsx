import React from 'react'

function SingleMessage() {
  return (
    <ul className="list-unstyled chat-list chat-user-list">
      <li>
        <a href="#">
          <div className="d-flex">
            <div className="chat-user-img online align-self-center me-3 ms-0">
              <img
                src="assets/images/users/avatar-2.jpg"
                className="rounded-circle avatar-xs"
                alt=""
              />
              <span className="user-status" />
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <h5 className="text-truncate font-size-15 mb-1">
                Patrick Hendricks
              </h5>
              <p className="chat-user-message text-truncate mb-0">
                Hey! there I'm available
              </p>
            </div>
            <div className="font-size-11">05 min</div>
          </div>
        </a>
      </li>
    </ul>
  )
}

export default SingleMessage

/*
   <li className="unread">
      <a href="#">
        <div className="d-flex">
          <div className="chat-user-img away align-self-center me-3 ms-0">
            <img
              src="assets/images/users/avatar-3.jpg"
              className="rounded-circle avatar-xs"
              alt=""
            />
            <span className="user-status" />
          </div>
          <div className="flex-grow-1 overflow-hidden">
            <h5 className="text-truncate font-size-15 mb-1">
              Mark Messer
            </h5>
            <p className="chat-user-message text-truncate mb-0">
              <i className="ri-image-fill align-middle me-1 ms-0" />{" "}
              Images
            </p>
          </div>
          <div className="font-size-11">12 min</div>
          <div className="unread-message">
            <span className="badge badge-soft-danger rounded-pill">
              02
            </span>
          </div>
        </div>
      </a>
    </li>
 <li>
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img align-self-center me-3 ms-0">
                              <div className="avatar-xs">
                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                  G
                                </span>
                              </div>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                General
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                This theme is awesome!
                              </p>
                            </div>
                            <div className="font-size-11">20 min</div>
                          </div>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img online align-self-center me-3 ms-0">
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                className="rounded-circle avatar-xs"
                                alt=""
                              />
                              <span className="user-status" />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                Doris Brown
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                Nice to meet you
                              </p>
                            </div>
                            <div className="font-size-11">10:12 AM</div>
                          </div>
                        </a>
                      </li>
                      <li className="unread">
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img align-self-center me-3 ms-0">
                              <div className="avatar-xs">
                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                  D
                                </span>
                              </div>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                Designer
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                Next meeting tomorrow 10.00AM
                              </p>
                            </div>
                            <div className="font-size-11">12:01 PM</div>
                            <div className="unread-message">
                              <span className="badge badge-soft-danger rounded-pill">
                                01
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img away align-self-center me-3 ms-0">
                              <img
                                src="assets/images/users/avatar-6.jpg"
                                className="rounded-circle avatar-xs"
                                alt=""
                              />
                              <span className="user-status" />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                Steve Walker
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                <i className="ri-file-text-fill align-middle me-1 ms-0" />{" "}
                                Admin-A.zip
                              </p>
                            </div>
                            <div className="font-size-11">03:20 PM</div>
                          </div>
                        </a>
                      </li>
                      <li className="typing">
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img align-self-center online me-3 ms-0">
                              <div className="avatar-xs">
                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                  A
                                </span>
                              </div>
                              <span className="user-status" />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                Albert Rodarte
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                typing
                                <span className="animate-typing">
                                  <span className="dot" />
                                  <span className="dot" />
                                  <span className="dot" />
                                </span>
                              </p>
                            </div>
                            <div className="font-size-11">04:56 PM</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img align-self-center online me-3 ms-0">
                              <div className="avatar-xs">
                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                  M
                                </span>
                              </div>
                              <span className="user-status" />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                Mirta George
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                Yeah everything is fine
                              </p>
                            </div>
                            <div className="font-size-11">12/07</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img away align-self-center me-3 ms-0">
                              <img
                                src="assets/images/users/avatar-7.jpg"
                                className="rounded-circle avatar-xs"
                                alt=""
                              />
                              <span className="user-status" />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                Paul Haynes
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                Good morning
                              </p>
                            </div>
                            <div className="font-size-11">12/07</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img align-self-center online me-3 ms-0">
                              <div className="avatar-xs">
                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                  J
                                </span>
                              </div>
                              <span className="user-status" />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                Jonathan Miller
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                Hi, How are you?
                              </p>
                            </div>
                            <div className="font-size-11">12/07</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img away align-self-center me-3 ms-0">
                              <img
                                src="assets/images/users/avatar-8.jpg"
                                className="rounded-circle avatar-xs"
                                alt=""
                              />
                              <span className="user-status" />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                Ossie Wilson
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                I've finished it! See you so
                              </p>
                            </div>
                            <div className="font-size-11">11/07</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="d-flex">
                            <div className="chat-user-img align-self-center online me-3 ms-0">
                              <div className="avatar-xs">
                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                  S
                                </span>
                              </div>
                              <span className="user-status" />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="text-truncate font-size-15 mb-1">
                                Sara Muller
                              </h5>
                              <p className="chat-user-message text-truncate mb-0">
                                Wow that's great
                              </p>
                            </div>
                            <div className="font-size-11">11/07</div>
                          </div>
                        </a>
                      </li>
                      */

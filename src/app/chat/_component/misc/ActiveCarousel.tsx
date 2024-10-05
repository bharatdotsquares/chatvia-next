import React from 'react'

function ActiveCarousel() {
    return (
        <div className="px-4 pb-4" dir="ltr">
            <div
                className="owl-carousel owl-theme owl-loaded owl-drag"
                id="user-status-carousel"
            >
                <div className="owl-stage-outer">
                    <div
                        className="owl-stage"
                        style={{
                            transform: 'translate3d(0px, 0px, 0px)',
                            transition: 'all',
                            width: 728,
                        }}
                    >
                        <div
                            className="owl-item active"
                            style={{ width: '129.5px', marginRight: 16 }}
                        >
                            <div className="item">
                                <a href="#" className="user-status-box">
                                    <div className="avatar-xs mx-auto d-block chat-user-img online">
                                        <img
                                            src="assets/images/users/avatar-2.jpg"
                                            alt="user-img"
                                            className="img-fluid rounded-circle"
                                        />
                                        <span className="user-status" />
                                    </div>
                                    <h5 className="font-size-13 text-truncate mt-3 mb-1">
                                        Patrick
                                    </h5>
                                </a>
                            </div>
                        </div>
                        <div
                            className="owl-item active"
                            style={{ width: '129.5px', marginRight: 16 }}
                        >
                            <div className="item">
                                <a href="#" className="user-status-box">
                                    <div className="avatar-xs mx-auto d-block chat-user-img online">
                                        <img
                                            src="assets/images/users/avatar-4.jpg"
                                            alt="user-img"
                                            className="img-fluid rounded-circle"
                                        />
                                        <span className="user-status" />
                                    </div>
                                    <h5 className="font-size-13 text-truncate mt-3 mb-1">
                                        Doris
                                    </h5>
                                </a>
                            </div>
                        </div>
                        <div
                            className="owl-item active"
                            style={{ width: '129.5px', marginRight: 16 }}
                        >
                            <div className="item">
                                <a href="#" className="user-status-box">
                                    <div className="avatar-xs mx-auto d-block chat-user-img online">
                                        <img
                                            src="assets/images/users/avatar-5.jpg"
                                            alt="user-img"
                                            className="img-fluid rounded-circle"
                                        />
                                        <span className="user-status" />
                                    </div>
                                    <h5 className="font-size-13 text-truncate mt-3 mb-1">
                                        Emily
                                    </h5>
                                </a>
                            </div>
                        </div>
                        <div
                            className="owl-item active"
                            style={{ width: '129.5px', marginRight: 16 }}
                        >
                            <div className="item">
                                <a href="#" className="user-status-box">
                                    <div className="avatar-xs mx-auto d-block chat-user-img online">
                                        <img
                                            src="assets/images/users/avatar-6.jpg"
                                            alt="user-img"
                                            className="img-fluid rounded-circle"
                                        />
                                        <span className="user-status" />
                                    </div>
                                    <h5 className="font-size-13 text-truncate mt-3 mb-1">
                                        Steve
                                    </h5>
                                </a>
                            </div>
                        </div>
                        <div
                            className="owl-item"
                            style={{ width: '129.5px', marginRight: 16 }}
                        >
                            <div className="item">
                                <a href="#" className="user-status-box">
                                    <div className="avatar-xs mx-auto d-block chat-user-img online">
                                        <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                            T
                                        </span>
                                        <span className="user-status" />
                                    </div>
                                    <h5 className="font-size-13 text-truncate mt-3 mb-1">
                                        Teresa
                                    </h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-nav disabled">
                    <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                    >
                        <span aria-label="Previous">‹</span>
                    </button>
                    <button
                        type="button"
                        role="presentation"
                        className="owl-next"
                    >
                        <span aria-label="Next">›</span>
                    </button>
                </div>
                <div className="owl-dots disabled" />
            </div>
            {/* end user status carousel */}
        </div>
    )
}

export default ActiveCarousel

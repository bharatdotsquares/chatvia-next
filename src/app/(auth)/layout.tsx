import Link from "next/link";
import React from "react";

interface LayoutProp {
  children: React.ReactNode;
}
function layout({ children}: LayoutProp) {
  const theme="dark"
  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center mb-4">
              <Link href="index.html" className="auth-logo mb-5 d-block">
                <img
                  src={`./images/logo-${theme}.png`}
                  alt=""
                  height={30}
                  className={`logo logo-${theme}`}
                />
              </Link>
              <h4>Sign in</h4>
              <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;

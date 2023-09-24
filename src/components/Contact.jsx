import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className=" d-flex align-content-center align-items-center min-vh-100 min-vw-100 pt-6"
    >
      <div className=" container">
        <div className=" row mb-5">
          <div className=" col-12">
            <div className="">
              <p className=" text-primary">Contact</p>
              <p className=" fs-3 fw-bold">
                Submit the form below to get in touch with me
              </p>
            </div>
          </div>
        </div>
        <div className=" row">
          <div className=" col-12 col-md-9 col-lg-6 mx-auto">
            <form
              action="https://getform.io/f/b7803a5a-c9a8-4fa3-8998-e3439990432f"
              className=""
              method="POST"
            >
              <div className="mb-3">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter your message ..."
                  rows={8}
                  defaultValue={""}
                  required
                />
              </div>
              <div className="">
                <button type="submit" className=" btn btn-primary">
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
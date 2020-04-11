import React, { Component } from "react";
import footerimg from "../Images/footerlogo2.png";
import profile2 from "../Images/profile.jpg";

export default class Message extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-column flex-md-row align-items-center px-md-4  bg-header  ">
          <h6 className="my-0 mr-md-auto font-weight-normal text-white">
            MESSAGING CENTER
          </h6>

          <nav className="my-2 my-md-0 mr-md-3">
            <a className="pr-4 " href="#">
              <i className="fa fa-bell-o"></i>
            </a>
            <a className="pr-4 " href="#">
              <i className="fa fa-file-o" aria-hidden="true"></i>
            </a>
            <a className="pr-4 " href="#">
              <i className="fa fa-print" aria-hidden="true"></i>
            </a>
            <a className="pr-4 " href="#">
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
            <a className="primary-button"></a>
          </nav>
          <div class="dropdown">
            <button
              class="btn  btn-secondary1 dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              <i className="fa fa-calendar pr-3" aria-hidden="true"></i>
              LAST 30 DAYS
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <a className="pl-4 " href="#">
            <i className="fa fa-times" aria-hidden="true"></i>
          </a>
        </div>
        {/* -------------------------1st row end------------------------- */}

        <div className=" container-fluid row shadow-sm">
          <div className="col-md-2 mt-2 ">
            <a href="#">
              <img
                src={profile2}
                className="rounded float-left profileimg4  rounded-circle text-white"
                alt="..."
              />
            </a>
            <div className="mt-2 text11">
              <p>EDICAL CONDITI<br />ONEDICAL CONDITION</p>
            </div>
          </div>

          <div className="col-md-5 mid-col-gray pt-4 ">
              ADVETE, 2500 i.U.
          </div>

          <div className="col-md-5 p-3"></div>
        </div>

        {/* ---------------------------------3rd row------------------------ */}

        <div className=" container-fluid row" style={{ minHeight: 450 }}>
          <div className="col-md-2 mt-4 ">
            <a href="#">
              <img
                src={profile2}
                className="rounded float-left profileimg3  rounded-circle text-white"
                alt="..."
              />
            </a>
            <div className="mt-2 ">
              <h5 style={{ marginBottom: 0 }}>Peter</h5>
              <span style={{ fontSize: "0.9em" }}>Hemophilia</span>
            </div>
            <hr className="hr1" />

            <div className="text4">
              <p>AGE</p>
              <h6>52 YEARS</h6>
              <hr />
              <p>GENDER</p>
              <h6>MALE</h6>
              <hr />
              <p>ZIP CODE</p>
              <h6>94566- NEW YORK</h6>
              <hr />
              <p>MEDICAL CONDITION</p>
              <h6>BLEEDING CLOATING DISORDER</h6>
              <hr />
              <p>MEDICAL CONDITION TYPE</p>
              <h6>HEMOPHILIA A</h6>
              <hr />
            </div>
          </div>

          <div className="col-md-5 mid-col pt-4">
            <div className="row">
              <div className="col-md-8 text-white">
                <h6>Reffel assessment for ADVATE</h6>
              </div>
              <div className="col-md-4 text-white">
                <p>June, 22-2019</p>
              </div>
            </div>

            <table class="table text-white ">
              <tbody>
                <tr>
                  <td scope="row">
                    Lorem ipsum, or lipsum <br />
                    as it is sometimes known,
                  </td>
                  <td>Great</td>
                </tr>
                <tr>
                  <td scope="row">
                    Lorem ipsum, or lipsum <br />
                    as it is sometimes known,
                  </td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td scope="row">
                    Lorem ipsum, or lipsumhghgshv h <br />
                    as it is sometimes known,sdhvhdvvhj<br />
                    as it is sometimes known,
                  </td>
                  <td>171 Lbs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-5 p-3">
            <div className="mesgs">
              <div>
                <div className="msg_history">
                  <div className="incoming_msg">
                    <div className="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>
                          Test which is a new approach to have all solutions
                        </p>
                        <span className="time_date"> 11:01 AM | June 9</span>
                      </div>
                    </div>
                  </div>
                  <div className="outgoing_msg">
                    <div className="sent_msg">
                      <p>Test which is a new approach to have all solutions</p>
                      <span className="time_date"> 11:01 AM | June 9</span>{" "}
                    </div>
                  </div>
                  <div className="incoming_msg">
                    <div className="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span className="time_date"> 11:01 AM | Yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div className="outgoing_msg">
                    <div className="sent_msg">
                      <p>Apollo University, Delhi, India Test</p>
                      <span className="time_date"> 11:01 AM | Today</span>{" "}
                    </div>
                  </div>
                  <div className="incoming_msg">
                    <div className="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>
                          We work directly with our designers and suppliers, and
                          sell direct to you, which means quality, exclusive
                          products, at a price anyone can afford.
                        </p>
                        <span className="time_date text">
                          {" "}
                          11:01 AM | Today
                        </span>
                      </div>
                    </div>
                    <div className="outgoing_msg">
                      <div className="sent_msg">
                        <p>Apollo University, Delhi, India Test</p>
                        <span className="time_date">
                          {" "}
                          11:01 AM | Today
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="type_msg">
                  <div className="input_msg_write">
                    <input
                      type="text"
                      className="write_msg"
                      placeholder="Type a message"
                    />
                    <button className="msg_send_btn" type="button">
                      <i className="fa fa-paper-plane-o" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer mt-auto  container-fluid">
          <div className="row text1">
            <div className="col-md-6 text-left ">
              <p>
                © Copyright 2018 <b>SMART MONITOR CORP.</b> -All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6 text-right ">
              <img src={footerimg} alt="..." />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

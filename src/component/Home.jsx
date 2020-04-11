import React, { Component } from 'react'
import profile from "../Images/111.png";
import profile2 from "../Images/profile.jpg";
import footerimg from "../Images/footerlogo.png";
export default class Home extends Component {
    render() {
        return (
            <div className="App">
            <div className="d-flex flex-column flex-md-row align-items-center px-md-4 mb-4 bg-white border-bottom shadow-sm ">
              <h5 className="my-0 mr-md-auto font-weight-normal ">
                <img src={profile} className=" float-left logoimg " alt="..." />
              </h5>
              <nav className="my-2 my-md-0 mr-md-3">
                <a className="pr-4 " href="#">
                  <i className="fa fa-home"></i>
                </a>
                <a className="pr-4 " href="#">
                  <i className="fa fa-building-o" aria-hidden="true"></i>
                </a>
                <a className="pr-4 " href="#">
                  <i className="fa fa-suitcase" aria-hidden="true"></i>
                </a>
                <a className="pr-4 " href="#">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>
                <a className="pr-4 " href="#">
                  <i className="fa fa-users" aria-hidden="true"></i>
                </a>
                <a className="pr-4 " href="#">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </a>
                <a className="pr-4 " href="#">
                  <i className="fa fa-bar-chart" aria-hidden="true"></i>
                </a>
                <a className="pr-4 " href="#">
                  <i className="" aria-hidden="true">
                    |
                  </i>
                </a>
                <a className="pr-4 " href="#">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
                </a>
                <a className="pr-4 " href="#">
                  <i className="fa fa-bell-o" aria-hidden="true"></i>
                </a>
                <a className="pr-4" href="#">
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </a>
              </nav>
              <a href="#">
                <img
                  src={profile2}
                  className="rounded float-left profileimg2 rounded-circle text-white"
                  alt="..."
                />
              </a>
              <div className="ml-2 text-white">
                <h6 style={{ marginBottom:0}}>Kavita</h6>
                <span style={{ fontSize:"0.8em"}}>Master administrator</span>
              </div>
      
              <a className="pl-4 text-white" href="#">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </a>
            </div>
            <div className="container-fluid">
              <div className="card-deck mb-4 font-weight-bold text-color">
                <div className="card  shadow-sm">
                  <div className="card-body row">
                    <div className="col-md-4">
                      <h3 className="card-title">231</h3>
                    </div>
                    <div className="col-md-8 text-right">
                      <p>
                        AVARAGE LOGINS
                        <br />
                        LAST 30 DAYS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card shadow-sm">
                  <div className="card-body row">
                    <div className="col-md-4">
                      <h3 className="card-title pr-0">13:34</h3>
                    </div>
                    <div className="col-md-8 text-right">
                      <p>
                        AVARAGE DURETION <br /> PER SESSION
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card  shadow-sm">
                  <div className="card-body row">
                    <div className="col-md-4">
                      <h3 className="card-title">2</h3>
                    </div>
                    <div className="col-md-8 text-right">
                      <p>
                        NEW USER <br />
                        LAST 30 DAYS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card shadow-sm">
                  <div className="card-body row">
                    <div className="col-md-4">
                      <h3 className="card-title">1</h3>
                    </div>
                    <div className="col-md-8 text-right">
                      <p>
                        DEACTIVATED USERS <br /> LAST 30 DAYS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bg-secondary p-2 text-white tablebar">
                <div className=" row col-md-6 tablebar">
                  <div className="col-md-6 ">
                    <h6>ENTITY USER MANAGEMENT</h6>
                  </div>
                  <div className="col-md-6 pagination1 row">
                    <nav aria-label="Page navigation example col-md-8">
                      <ul className="pagination ">
                        <li className="page-item ">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item ">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="col-md-4">
                    <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  </div>
                  
                </div>
                <div className="col-md-6 ">
                  <nav className="my-2 my-md-0 mr-md-3 align-middle">
                    <a className="p-4 " href="#">
                      <i className="fa fa-lock"></i>
                    </a>
                    <a className="p-3 " href="#">
                      <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    </a>
                    <a className="p-3 " href="#">
                      <i className="" aria-hidden="true">
                        |
                      </i>
                    </a>
                    <a className="p-3 " href="#">
                      <i className="fa fa-print" aria-hidden="true"></i>
                    </a>
                    <a className="p-4 " href="#">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    <a className="p-4 " href="#">
                      <i className="fa fa-download" aria-hidden="true"></i>
                    </a>
                    <a className="p-4 " href="#">
                      <i className="fa fa-upload" aria-hidden="true"></i>
                    </a>
                    <a className="p-4 " href="#">
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </a>
                    <a className="p-4 " href="#">
                      <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </a>
                    <a className="p-4" href="#">
                      <i className="fa fa-filter" aria-hidden="true"></i>
                    </a>
                    <a className="p-4" href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </nav>
                </div>
              </div>
      
              <div className="table-responsive ">
                <table className="table table-striped table-sm ">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input " type="checkbox" />
                        </div>
                      </th>
                      <th></th>
                      <th></th>
                      <th>USER NAME</th>
                      <th>ENTITY</th>
                      <th>CLIENT</th>
                      <th>
                        LOGIN IN <br />
                        LAST 30 DAYS
                      </th>
                      <th>
                        AVARAGE
                        <br /> DURETION
                      </th>
                      <th>
                        CREATION <br />
                        DATE
                      </th>
                      <th>
                        LAST
                        <br />
                        LOGIN DATE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <span className="dot-red" />
                      </td>
                      <td>
                        <img
                          src={profile2}
                          className="rounded float-left profileimg rounded-circle"
                          alt="..."
                        />
                      </td>
                      <td>Madison</td>
                      <td>Cybersecurity</td>
                      <td>Digital solution</td>
                      <td>24</td>
                      <td>13:45</td>
                      <td>7/19/2019</td>
                      <td>7/19/2019</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <span className="dot-green" />
                      </td>
                      <td>
                        <img
                          src={profile2}
                          className="rounded float-left profileimg rounded-circle"
                          alt="..."
                        />
                      </td>
                      <td>Madison</td>
                      <td>Cybersecurity</td>
                      <td>Digital solution</td>
                      <td>24</td>
                      <td>13:45</td>
                      <td>7/19/2019</td>
                      <td>7/19/2019</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <span className="dot-yellow" />
                      </td>
                      <td>
                        <img
                          src={profile2}
                          className="rounded float-left profileimg rounded-circle"
                          alt="..."
                        />
                      </td>
                      <td>Madison</td>
                      <td>Cybersecurity</td>
                      <td>Digital solution</td>
                      <td>24</td>
                      <td>13:45</td>
                      <td>7/19/2019</td>
                      <td>7/19/2019</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <span className="dot-green" />
                      </td>
                      <td>
                        <img
                          src={profile2}
                          className="rounded float-left profileimg rounded-circle"
                          alt="..."
                        />
                      </td>
                      <td>Madison</td>
                      <td>Cybersecurity</td>
                      <td>Digital solution</td>
                      <td>24</td>
                      <td>13:45</td>
                      <td>7/19/2019</td>
                      <td>7/19/2019</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <span className="dot-red" />
                      </td>
                      <td>
                        <img
                          src={profile2}
                          className="rounded float-left profileimg rounded-circle"
                          alt="..."
                        />
                      </td>
                      <td>Madison</td>
                      <td>Cybersecurity</td>
                      <td>Digital solution</td>
                      <td>24</td>
                      <td>13:45</td>
                      <td>7/19/2019</td>
                      <td>7/19/2019</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <span className="dot-green" />
                      </td>
                      <td>
                        <img
                          src={profile2}
                          className="rounded float-left profileimg rounded-circle"
                          alt="..."
                        />
                      </td>
                      <td>Madison</td>
                      <td>Cybersecurity</td>
                      <td>Digital solution</td>
                      <td>24</td>
                      <td>13:45</td>
                      <td>7/19/2019</td>
                      <td>7/19/2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <footer className="footer mt-auto  container-fluid">
              <div className="row text1">
                <div className="col-md-6 text-left ">
                  <p>
                    © Copyright 2018 <b>SMART MONITOR CORP.</b> -All Rights Reserved.
                  </p>
                </div>
                <div className="col-md-6 text-right ">
                  <img src={footerimg} alt="..." />
                </div>
              </div>
            </footer>
          </div>
      
        )
    }
}

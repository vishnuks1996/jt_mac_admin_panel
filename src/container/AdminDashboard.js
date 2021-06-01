import react from 'react';

function AdminDashboard()
{
    return(
        <div className="admin_dashboard_page page_padding"> {/* admin dashboard page start */}
        {/* section1 starts */}
        <section className="section1 pb-5">
          <div className="title bg_green py-3 mb-5 position-relative">
            <nav className="navbar navbar-expand-sm">
              <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#admin-menu" aria-controls="admin-menu" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-ellipsis-v text-white" />
              </button>
              <div className="collapse navbar-collapse" id="admin-menu">
                <div className="container d-flex">
                  <h3 className="text-white m-0"><strong>Admin dashboard</strong></h3>
                  <ul className="m-0 p-0 d-flex ms-auto">
                    <li><a href="admin-dashboard.html" className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-user-tie me-1" /> Admin</a></li>
                    <li><a href="configuration.html" className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-user-cog me-1" /> Configuration</a></li>
                    <li><a href="admin-login.html" className="text-white d-block py-2 ps-2 ms-2"><i className="fas fa-sign-out-alt me-1" /> Logout</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="content1 shadow rounded-3 p-3 d-flex align-items-center">
                  <img src="./images/admin_dashboard.jpg" className="rounded-circle" />
                  <h5>Welcome Dr.Jacob Thomas!</h5>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="content2 p-2 bg-light rounded-3">
                  <div className="box shadow-sm rounded-3 p-2 bg_yellow d-flex justify-content-between align-items-baseline mb-3">
                    <h6 className="text-white">Total Appointments</h6>
                    <div className="count bg-white p-2 rounded-3 text-center"><strong>25</strong></div>
                  </div>
                  <div className="box shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                    <div>
                      <h6 className>Appointment Attended</h6>
                      <small><span className="me-2">Audio: 10</span> <span>Face to Face: 5</span></small>
                    </div>
                    <div className="count bg_yellow p-2 rounded-3 text-center"><strong>15</strong></div>
                  </div>
                  <div className="box shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                    <div>
                      <h6 className>Appointment Cancelled</h6>
                      <small><span className="me-2">Audio: 10</span> <span>Face to Face: 5</span></small>
                    </div>
                    <div className="count bg-light p-2 rounded-3 text-center"><strong>10</strong></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="content3 p-2 bg-light rounded-3">
                  <div className="box shadow-sm rounded-3 p-2 bg_yellow mb-3">
                    <h6 className="text-white">Consultation fees</h6>
                  </div>
                  <div className="box shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                    <h6 className>Payment done</h6>
                    <div className="count bg_yellow p-2 rounded-3 text-center"><strong>21</strong></div>
                  </div>
                  <div className="box shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                    <h6 className>Payment Pending</h6>
                    <div className="count bg_yellow p-2 rounded-3 text-center"><strong>4</strong></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="content4 p-2 bg-light rounded-3">
                  <div className="box shadow-sm rounded-3 p-2 bg_yellow mb-3">
                    <h6 className="text-white">Income or Revenue Graph</h6>
                  </div>
                  <canvas id="myChart" width={400} height={400} />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="content5 p-2 bg-light rounded-3">
                  <div className="box shadow-sm rounded-3 p-2 bg_yellow mb-3 d-flex justify-content-between align-items-baseline">
                    <h6 className="text-white">Available Slots</h6>
                    <select className="form-select">
                      <option>Irinjalakuda</option>
                      <option>Chalakudy</option>
                      <option>Thrissur</option>
                      <option>Ernakulam</option>
                    </select>
                    <input type="date" className="form-control" id="address" placeholder="Address" />
                  </div> 
                  <div className="autoscroll">
                    <div className="box slots shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                      <div className="p-1 rounded-2 text-center">11 am-12 pm</div>
                      <div className="p-1 rounded-3 text-center">Monday</div>
                      <div className="p-1 rounded-3 text-center">Irinjalakuda</div>
                      <div className="bg_yellow p-1 rounded-3 text-center">Attended</div>
                    </div>
                    <div className="box slots shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                      <div className="p-1 rounded-2 text-center">11 am-12 pm</div>
                      <div className="p-1 rounded-3 text-center">Monday</div>
                      <div className="p-1 rounded-3 text-center">Irinjalakuda</div>
                      <div className="bg_yellow p-1 rounded-3 text-center">Attended</div>
                    </div>
                    <div className="box slots shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                      <div className="p-1 rounded-2 text-center">11 am-12 pm</div>
                      <div className="p-1 rounded-3 text-center">Monday</div>
                      <div className="p-1 rounded-3 text-center">Irinjalakuda</div>
                      <div className="bg_yellow p-1 rounded-3 text-center">Attended</div>
                    </div>
                    <div className="box slots shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                      <div className="p-1 rounded-2 text-center">11 am-12 pm</div>
                      <div className="p-1 rounded-3 text-center">Monday</div>
                      <div className="p-1 rounded-3 text-center">Irinjalakuda</div>
                      <div className="bg_yellow p-1 rounded-3 text-center">Attended</div>
                    </div>
                    <div className="box slots shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                      <div className="p-1 rounded-2 text-center">11 am-12 pm</div>
                      <div className="p-1 rounded-3 text-center">Monday</div>
                      <div className="p-1 rounded-3 text-center">Irinjalakuda</div>
                      <div className="bg-light p-1 rounded-3 text-center">Not Attended</div>
                    </div>
                    <div className="box slots shadow-sm rounded-3 p-2 bg-white d-flex justify-content-between align-items-baseline mb-2">
                      <div className="p-1 rounded-2 text-center">11 am-12 pm</div>
                      <div className="p-1 rounded-3 text-center">Friday</div>
                      <div className="p-1 rounded-3 text-center">Ernakulam</div>
                      <div className="bg-light p-1 rounded-3 text-center">Not Attended</div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section1 end */}
        <hr />
      </div> /* admin dashboard end */
    );
};
export default AdminDashboard;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";

const Dashboard = () => {
  return (
    <div className="container-fluid halamanUtama min-vh-100">
      <div className="row">
        <div className="col">
          <div className="px-2">
            <Navbar />
            <div className="container-fluid">
              <div className="row g-3 my-2">
                <div className="col-md-6">
                  <div className="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">30</h3>
                      <p className="fs-5">Line Chart</p>
                    </div>
                    <i className="bi bi-cart-plus p-3 fs-1"></i>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">20</h3>
                      <p className="fs-5">Pie Chart</p>
                    </div>
                    <i className="bi bi-person p-3 fs-1"></i>
                  </div>
                </div>
              </div>

              {/* Seacrh */}
              <div className="row g-3 my-2">
                <div className="col-md-12">
                  <div className="p-3 bg-white rounded shadow">
                    <nav className="bg-body-tertiary">
                      <div className="container-fluid">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end pt-1"></div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table caption-top rounded mt-3">
                  <Table />
                </table>
              </div>
            </div>

            <footer class="sticky-footer footer text-white p-3 rounded">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

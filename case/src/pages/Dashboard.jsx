import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import LineChart from "../components/Chart/LineChart";
import PieChart from "../components/Chart/PieChart";

import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );

        const sensusData = responseData.data.source;
        setData(sensusData);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="container-fluid halamanUtama min-vh-100">
      <div className="row">
        <div className="col">
          <div className="px-2">
            <Navbar />
            <div className="container-fluid">
              {/* Judul */}
              <div className="row g-3 my-2">
                <div className="col-md-12">
                  <div className="p-3 bg-white rounded shadow">
                    <nav className="bg-body-tertiary">
                      <div className="container-fluid">
                        <div class="pt-1 pb-1">
                          {data.map((source, index) => (
                            <div key={index}>
                              <h1 className="text-center">
                                {source.annotations.source_name}
                              </h1>
                              <p
                                className="text-center"
                                style={{
                                  color: "rgb(12, 110, 110)",
                                  fontWeight: "bold",
                                }}
                              >
                                {source.annotations.source_description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="row g-3 my-2">
                <div className="col-md-6">
                  <div className="p-5 bg-white shadow d-flex justify-content-around align-items-center rounded">
                    <LineChart />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-5 bg-white shadow d-flex justify-content-around align-items-center rounded">
                    <PieChart />
                  </div>
                </div>
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

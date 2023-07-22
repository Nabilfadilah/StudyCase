import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Input from "../../elements/Input/Input";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [LineData, setLineData] = useState({});

  // filter
  const [awal, setAwal] = useState(2013);
  const [akhir, setAkhir] = useState(2020);

  useEffect(() => {
    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => {
        const data = response.data.data;

        // filter
        const filterData = data.filter(
          (on) => on.Year >= awal && on.Year <= akhir
        );

        const lineData = filterData.map((on) => ({
          year: on.Year.toString(),
          population: on.Population,
        }));

        setLineData({
          labels: lineData.map((on) => on.year),
          datasets: [
            {
              label: "Population",
              data: lineData.map((on) => on.population),
              fill: false,
              borderColor: "rgb(13, 143, 183)",
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((error) => {
        console.log("Error fetching data :", error);
      });
  }, [awal, akhir]);

  return (
    <div style={{ width: "500px", height: "550px" }}>
      <h3 className="text-center mb-3">Line Chart</h3>
      {LineData.labels && LineData.labels.length > 0 ? (
        <Line data={LineData} />
      ) : (
        <p>Loading chart data...</p>
      )}

      {/* responsive */}
      {/* <div style={{ width: "100%", height: "600px" }}>
        <ResponsiveContainer width="100%" height="80%">
          <Line data={LineData} />
        </ResponsiveContainer>
      </div> */}
      <br />

      {/* filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="text-center py-3"
          style={{
            color: "rgb(12, 110, 110)",
            fontWeight: "bold",
            width: "300px",
          }}
        >
          <Input
            label="Awal Tahun"
            type="number"
            className="form-control mb-3"
            classLabel="form-label"
            value={awal}
            onChange={(e) => setAwal(parseInt(e.target.value))}
          />

          <Input
            label="Akhir Tahun"
            type="number"
            className="form-control mb-3"
            classLabel="form-label"
            value={akhir}
            onChange={(e) => setAkhir(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

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

ChartJS.register(ArcElement);

const PieChart = () => {
  const [pieData, setPieData] = useState({});

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

        const pieData = filterData.map((on) => ({
          year: on.Year.toString(),
          population: on.Population,
        }));

        setPieData({
          labels: pieData.map((on) => on.year),
          datasets: [
            {
              data: pieData.map((on) => on.population),
              backgroundColor: [
                "rgba(295, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(35, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(155, 99, 132, 0.6)",
                "rgba(584, 162, 235, 0.6)",
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
      });
  }, [awal, akhir]);

  return (
    <div style={{ width: "300px", height: "550px" }}>
      <h3 className="text-center mb-3">Pie Chart</h3>

      {pieData.labels && pieData.labels.length > 0 ? (
        <Pie data={pieData} />
      ) : (
        <p>Loading chart data...</p>
      )}
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

export default PieChart;

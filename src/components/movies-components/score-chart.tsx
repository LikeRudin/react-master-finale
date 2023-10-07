import ReactApexChart from "react-apexcharts";
import { IMovieDetail } from "../../api";
import { getEverageScore, getScoreForChart } from "../../calculators";
import styled from "styled-components";

const Chart = styled(ReactApexChart)`
  height: 280px;
  width: auto;
  background-color: rgba(0, 0, 0, 0.3);
`;

interface ScoreChartProps {
  movieDetail: IMovieDetail;
}

const ScoreChart = ({ movieDetail }: ScoreChartProps) => {
  const scores = getScoreForChart(
    movieDetail.budget,
    movieDetail.revenue,
    movieDetail.runtime,
    movieDetail.popularity,
    movieDetail.vote_average,
    movieDetail.spoken_languages
  );

  return (
    <>
      {movieDetail !== null ? (
        <Chart
          type="radar"
          options={{
            chart: {
              offsetY: 50,
              type: "radar",
            },

            colors: ["rgba(255, 99, 71, 0.6)"],
            markers: {
              size: 8,
              colors: "#FDF0F0",
              strokeColors: "rgba(17, 57, 70, 0.6)",
              strokeWidth: 2.5,
            },
            xaxis: {
              type: "category",
              categories: ["관객투표", "상영일", "흑자지수", "대중성", "언어"],
              labels: {
                style: {
                  colors: scores.map(
                    (score) => `rgba(255, 255, 255, ${score / 2.5})`
                  ),
                  fontSize: "24px",
                  fontWeight: "bold",
                  textShadow:
                    "-4px 0px white, 0px 4px white, 4px 0px white, 0px -4px white",
                },
              },
            },
            plotOptions: {
              radar: {
                polygons: {
                  strokeColor: "#3D0C11",
                  fill: {
                    colors: ["#f8f8f8", "#fff"],
                  },
                },
                size: 70,
              },
            },
            yaxis: {
              min: 0,
              max: 5,
              tickAmount: 5,
              labels: {
                style: {
                  fontSize: "14px",
                },
              },
            },
            tooltip: {
              custom: ({ dataPointIndex }: { dataPointIndex: number }) => {
                if (dataPointIndex === 0) {
                  return `
                    <div>
                      <h1>평가점수</h1>
                      <h2>별점 : ${movieDetail.vote_average}</h2>
                      <h2>평가자 수: ${movieDetail.vote_count}</h2>
                      <h2>FB's Score: ${scores[dataPointIndex]}</h2>
                    </div>`;
                } else if (dataPointIndex === 1) {
                  return `
                    <div>
                      <h1>극장상영일수: ${movieDetail.runtime}</h1>
                      <h2>FB's Score: ${scores[dataPointIndex]}</h2>
                    </div>`;
                } else if (dataPointIndex === 2) {
                  return `
                    <div>
                      <h1>흑자지수</h1>
                      <h2>제작비용: ${movieDetail.budget}</h2>
                      <h2>수입: ${movieDetail.revenue}</h2>
                      <h2>FB's Score: ${scores[dataPointIndex]}</h2>
                    </div>`;
                } else if (dataPointIndex === 3) {
                  return `
                    <div>
                      <h1>대중성지수: ${movieDetail.popularity}</h1>
                      <h2>FB's Score: ${scores[dataPointIndex]}</h2>
                    </div>`;
                } else if (dataPointIndex === 4) {
                  return `
                    <div>
                      <h1>제공 언어:${movieDetail.spoken_languages.length}</h1>
                      <ul>
                        ${movieDetail.spoken_languages.map((data, index) => {
                          const { english_name, name, iso_639_1 } = data;
                          return `
                            <li key=${index}>${english_name} /${iso_639_1} ${name} </li>`;
                        })}
                      </ul>
                      <h2>FB's Score: ${scores[dataPointIndex]}</h2>
                    </div>`;
                }
              },
            },
            title: {
              text: `
              ${getEverageScore(scores)}`,
              style: { fontSize: "30px", color: "#C70039" },
            },
          }}
          series={[
            {
              name: `${movieDetail.title}`,
              data: scores,
            },
          ]}
        />
      ) : null}
    </>
  );
};

export default ScoreChart;

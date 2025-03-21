import { useState, useEffect, Suspense } from "react";
import "./App.css";
import createApiQuery from "./core/utils/create-api-query";
import Events from "./components/events/events";

const baseApiUrl = "https://data.cityofnewyork.us/resource/tvpp-9vvx.json";

function App() {
  const [data, setData] = useState<[]>([]);

  const requestQuery = createApiQuery({ limit: "100" });
  const reqUrl = encodeURI(`${baseApiUrl}${requestQuery}`);

  useEffect(() => {
    try {
      fetch(reqUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }, []);

  return (
    <>
      <div>
        <header className="header-content">
          <h1>Upcoming New York City Parades - 2025</h1>
          <p>
            Sourcing data from NYC Opendata, this page should display parades
            with active permits filed. As per the data set page, permits for the
            next month will only be part of the data set. While not a
            replacement for the 
            <a href="https://www.nyc.gov/events/index.html" target="_blank">
              NYC Events page
            </a>
            , this is just a straight forward reference if you're looking for a
            parade.
          </p>
          <p>
            This is data straight from 
            <a
              href="https://data.cityofnewyork.us/City-Government/NYC-Permitted-Event-Information/tvpp-9vvx/about_data"
              target="_blank"
            >
              NYC Opendata
            </a>
            , I do not control what events show up, though I am open to
            filtering out some of the monthly processions.
          </p>
        </header>
        <Suspense>
          <div className="table-container">
            <Events eventsData={data} />
          </div>
        </Suspense>
      </div>
      <footer className="footer-content">
        <a
          href="https://data.cityofnewyork.us/City-Government/NYC-Permitted-Event-Information/tvpp-9vvx/about_data"
          target="_blank"
        >
          Powered by NYC Opendata
        </a>
        |
        <a href="https://github.com/chinjon/nyc-events" target="_blank">
          Source code
        </a>
      </footer>
    </>
  );
}

export default App;

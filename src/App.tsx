import { useState, useEffect, Suspense } from 'react'
import './App.css'
import createApiQuery from './core/utils/create-api-query';
import Events from './components/events/events';

const baseApiUrl = "https://data.cityofnewyork.us/resource/tvpp-9vvx.json"

function App() {
  const [data, setData] = useState<[]>([]);

  const requestQuery = createApiQuery({limit: "100"})
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
      throw new Error(`${error}`)
    }
  }, []);

  return (
    <>
      <div>
        <div>
          <h1>Upcoming New York City Parades - 2025</h1>
          <p>
            
          </p>
        </div>
        <Suspense>
          <div className="table-container">
            <Events eventsData={data}/>
          </div>
        </Suspense>
      </div>
    </>
  )
}

export default App
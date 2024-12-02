import React, { useState, useEffect } from 'react';
import { Card } from "./components/Card";

function App() {
  const [newResults, setNewResults] = useState([]);

  const clickHandler = (id) => {
    alert(`card with id #${id} got clicked`)
  };

  const fetchData = async () => {
    const data = await fetch('https://api.sampleapis.com/beers/ale');
    const results = await data.json();
    return results;
  };

  const tailerResults = (data) => {
    // Sort the results based on prices in ascending order
    data.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return priceA - priceB;
    });

    // Filter the results based on the rating (>= 4.5)
    const filteredData = data.filter((i) => i.rating.average >= 4.5);
    return filteredData;
  };

  useEffect(() => {
    const loadData = async () => {
      const results = await fetchData();
      const processedResults = tailerResults(results);
      setNewResults(processedResults);
    };
    loadData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {newResults.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            price={item.price}
            rating={item.rating.average}
            onClick={() => clickHandler(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
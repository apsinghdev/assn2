import './App.css'

async function App() {

  const data = await fetch('https://api.sampleapis.com/beers/ale')
  const results = await data.json()

  const tailerResults = (data) => {
    // sort the results based on prices in asc.
    data.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''))
      const priceB = parseFloat(b.price.replace('$', ''))
      return priceA - priceB
    })
    // filter the results based on the rating (4.5)
    const filteredData = data.filter((i) => {
      return i.rating.average >= 4.5;
    })
    return filteredData
  }

  const newResults = tailerResults(results);
  console.log(newResults)

  return (
    <div>

    </div>
  )
}

export default App

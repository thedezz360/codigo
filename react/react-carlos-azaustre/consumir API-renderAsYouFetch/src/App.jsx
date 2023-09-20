import fetchData from "./fetchData";
import { Suspense } from "react";
import './App.css';


const apiData = fetchData("https://jsonplaceholder.typicode.com/users")
function App() {
  console.log(apiData)
  //recuperamos los datos
  const data = apiData.read();

  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <Suspense fallback={<div>Loading...</div>}>

        <ul className="card">
          {data?.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      </Suspense>
    </div>
  )
}

export default App

// "https://jsonplaceholder.typicode.com/users"
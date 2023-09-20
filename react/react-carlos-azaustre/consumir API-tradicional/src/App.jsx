import useFetch from './useFetch'
import './App.css'

function App() {
  const {data, loading, error, handleCancelRequest} = useFetch("https://jsonplaceholder.typicode.com/users")
  
  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <div className='card'>
        <ul>
          {error && <li>Error: {error}</li>}
          {/* si loading true , se renderiza el li */}
          {loading && <li>Loading...</li>} 
          {/* si existe data (data?) */}
          {data?.map((user) => (<li key={user.id}>{user.name} </li>))}
        </ul>
      </div>
    </div>
  )
}

export default App

// "https://jsonplaceholder.typicode.com/users"
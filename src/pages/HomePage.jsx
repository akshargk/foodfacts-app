import SearchBar from '../components/SearchBar'
import FoodList from '../components/FoodList'
import useFoodSearch from '../hooks/useFoodSearch'

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch()

  return (
    <div>
      <h2>Search Food</h2>

      <SearchBar onSearch={searchFood} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && results.length === 0 && <p>No results</p>}

      {results.length > 0 && <FoodList products={results} />}
    </div>
  )
}

export default HomePage
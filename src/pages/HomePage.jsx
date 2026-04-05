import { Container, Typography } from '@mui/material'
import useFoodSearch from '../hooks/useFoodSearch'
import SearchBar from '../components/SearchBar'
import FoodList from '../components/FoodList'

function HomePage() {
  const { results, loading, searchFood } = useFoodSearch()

  return (
    <Container>
      <Typography variant="h4">Search Food</Typography>

      <SearchBar onSearch={searchFood} />

      {loading && <p>Loading...</p>}

      <FoodList products={results} />
    </Container>
  )
}

export default HomePage
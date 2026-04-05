import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  const {
    product_name,
    brands,
    nutriments,
    image_small_url,
    code,
  } = product

  const handleClick = () => {
    navigate(`/product/${code}`)
  }

  return (
    <div
      className="food-card"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={image_small_url || "https://via.placeholder.com/100"}
        alt={product_name}
        width="100"
      />

      <h3>{product_name || "Unknown Product"}</h3>
      <p>{brands || "No Brand"}</p>

      <p>Calories: {nutriments?.['energy-kcal_100g'] || "N/A"}</p>
      <p>Protein: {nutriments?.proteins_100g || "N/A"}</p>
      <p>Carbs: {nutriments?.carbohydrates_100g || "N/A"}</p>
    </div>
  )
}

export default FoodCard

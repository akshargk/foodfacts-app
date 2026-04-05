import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate(`/product/${product.code}`)}>
      <CardMedia
        component="img"
        height="140"
        image={product.image_small_url}
      />

      <CardContent>
        <Typography>{product.product_name}</Typography>
        <Typography>{product.brands}</Typography>
      </CardContent>
    </Card>
  )
}

export default FoodCard
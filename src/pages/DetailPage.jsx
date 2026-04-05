import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../store/savedSlice'

function DetailPage() {
  const { barcode } = useParams()
  const [product, setProduct] = useState(null)

  const dispatch = useDispatch()
  const saved = useSelector(s => s.saved.items)

  useEffect(() => {
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => setProduct(res.data.product))
  }, [barcode])

  if (!product) return <p>Loading...</p>

  const isSaved = saved.some(p => p.code === barcode)

  return (
    <div>
      <h2>{product.product_name}</h2>

      <button
        onClick={() =>
          isSaved
            ? dispatch(removeItem(barcode))
            : dispatch(addItem(product))
        }
      >
        {isSaved ? 'Remove' : 'Save'}
      </button>
    </div>
  )
}

export default DetailPage
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../store/savedSlice'

function SavedPage() {
  const saved = useSelector(s => s.saved.items)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Saved</h2>

      {saved.map(item => (
        <div key={item.code}>
          <p>{item.product_name}</p>

          <button onClick={() => dispatch(removeItem(item.code))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default SavedPage
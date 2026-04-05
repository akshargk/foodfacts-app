import { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'

function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (q.trim()) onSearch(q)
  }

  return (
    <Box component="form" onSubmit={submit} sx={{ display: 'flex', gap: 1 }}>
      <TextField
        fullWidth
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  )
}

export default SearchBar
import { AppBar, Toolbar, Button, Badge, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavBar() {
  const count = useSelector(s => s.saved.items.length)

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography>🥗 FoodFacts</Typography>

        <div>
          <Button component={NavLink} to="/" color="inherit">
            Search
          </Button>

          <Button component={NavLink} to="/saved" color="inherit">
            <Badge badgeContent={count} color="secondary">
              <BookmarkIcon />
            </Badge>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
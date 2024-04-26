import { AppBar, InputBase, Toolbar, Typography, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));


function Navbar({ location, search, setSearch, toggleTheme }) {
  return (
    <AppBar component="nav" sx={{ pl: 2, pr: 2 }}>
      <Toolbar disableGutters>
        <Typography variant='h5' component="span" sx={{ display: 'flex', flexDirection: 'column', mr: 1.5 }}>
          Walnutt Weather
          <Typography variant='subtitle1' component="span" sx={{ lineHeight: 'inherit' }}>
            Powered by wttr.in
          </Typography>
        </Typography>
        <SearchBar setSearch={setSearch} search={search} />
        <Typography variant='subtitle1' component="div" sx={{ display: 'flex', flexDirection: 'column', lineHeight: 'none', flexGrow: 1, alignItems: "flex-end" }}>
          {location ? (
            <>
              <div>{location.name}, {location.region}</div>
              <div>{location.country}</div>
            </>
          ) : null}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

function SearchBar({ setSearch, search }) {
  const [searchTerm, setSearchTerm] = useState(search);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={(event) => {
          if (event.key !== 'Enter') return;
          setSearch(searchTerm);
        }}
      />
    </Search>
  );
}

export default Navbar;

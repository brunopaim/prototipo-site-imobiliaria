import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Button
} from "@mui/material";
import { 
  Home,
} from '@mui/icons-material';

const NavBar = () => {
  const pages = ['UNIDADE PRIME', 'ANUNCIE SEU IMÓVEL', 'EMPRESA', 'FAVORITOS'];

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#F1F1F1" }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={2}>
            <IconButton
              color="black"
              aria-label="Home"
              component={RouterLink}
              to="/home"
            >
              <Home />
            </IconButton>
          </Grid>
          <Grid item  display={'flex'} xs={7} justifyContent="space-between">
              {pages.map((page) => (
                <Grid item>
                  <Button
                    key={page}
                    //onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block', fontWeight: 700 }}
                  >
                    {page}
                  </Button>
                </Grid>
              ))}
              <Grid item>
                <Button
                  key={'ENTRAR'}
                  //onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', fontWeight: 700 }}
                  variant="outlined"
                  //TODO: Corrigir esse ícone
                  //startIcon={ <AccountCircle />}
                >
                  {'ENTRAR'}
                </Button>
              </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import BarraSuperior from '../BarraSuperior';

const MainLayout = () => {
  return (
    <Box>
      <BarraSuperior />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          height: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
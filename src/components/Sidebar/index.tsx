import React from 'react';
import { Stack } from '@mui/material';

import { categories } from '../../utils/constants';
import { SidebarButton, SidebarIcon, SidebarTitle } from './sidebar.styled';

const Sidebar = (props) => {
  const { selectedCategory, setSelectedCategory } = props;
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '92vh' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <SidebarButton
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory ? '#FC1503' : 'black',
            color: 'white',
          }}
          key={category.name}
        >
          <SidebarIcon active={ category.name === selectedCategory}>
            <category.icon />
          </SidebarIcon>
          <SidebarTitle active={ category.name === selectedCategory}>
            {category.name}
          </SidebarTitle>
        </SidebarButton>
      ))}
    </Stack>
  );
};

export default Sidebar;

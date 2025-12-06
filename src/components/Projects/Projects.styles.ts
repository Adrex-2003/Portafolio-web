import type { Theme } from '@mui/material/styles';

export const cardStyle = (theme: Theme) => ({
  borderRadius: 3,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
});

export const mediaStyle = (theme: Theme) => ({
  height: 180,
  borderBottom: `4px solid ${theme.palette.primary.main}`,
});


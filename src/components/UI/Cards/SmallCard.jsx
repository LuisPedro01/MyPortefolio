import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SmallCard({ url, framework }) {
  return (
    <Card
      sx={{
        width: '100%',
        minHeight: 94,
        borderRadius: '22px',
        border: '1px solid var(--border)',
        background: 'rgba(255,255,255,0.68)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        transition: 'var(--transition)',
        '&:hover': {
          boxShadow: 'var(--shadow-md)',
          transform: 'translateY(-4px)',
          borderColor: 'var(--border-strong)',
        },
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.1rem',
          height: '100%',
        }}
      >
        <CardContent sx={{ padding: '0 !important', flex: 1 }}>
          <Typography sx={{ fontWeight: 700, color: 'var(--text-main)', textAlign: 'left' }}>
            {framework}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={url}
          alt={framework}
          sx={{
            width: '2.9rem',
            height: '2.9rem',
            objectFit: 'contain',
            marginLeft: '1rem',
            filter: 'saturate(0.95)',
          }}
        />
      </CardActionArea>
    </Card>
  );
}

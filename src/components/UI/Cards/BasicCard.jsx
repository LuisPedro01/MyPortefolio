import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({ title, subtitle, textSecondary, text, extraButton }) {
  return (
    <Card
      sx={{
        width: '100%',
        minHeight: 220,
        borderRadius: '28px',
        border: '1px solid var(--border)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.82) 100%)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'var(--transition)',
        '&:hover': {
          boxShadow: 'var(--shadow-md)',
          transform: 'translateY(-6px)',
        },
      }}
    >
      <CardContent sx={{ padding: '1.5rem !important' }}>
        <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'var(--accent-strong)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {title}
        </Typography>
        <Typography component="div" sx={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '1.45rem', mt: 1 }}>
          {subtitle}
        </Typography>
        <Typography sx={{ mb: 1.25, mt: 1, color: 'var(--text-soft)', fontWeight: 500 }}>
          {textSecondary}
        </Typography>
        {text ? (
          <Typography variant="body2" sx={{ color: 'var(--text-soft)', lineHeight: 1.7 }}>
            {text}
          </Typography>
        ) : null}
        {extraButton ? (
          <Typography sx={{ mt: 2, color: 'var(--secondary-accent)', fontWeight: 700 }}>
            {extraButton}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
}

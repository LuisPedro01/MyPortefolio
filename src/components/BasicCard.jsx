import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({title, subtitle, textSecondary, text, extraButton}) {
  return (
    <Card sx={{ width: 250, height: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="#094088" gutterBottom>
          {/* title */}
          {title}
        </Typography>
        <Typography variant="h5" component="div">
            {/* subtitle */}
            {subtitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {/* textSecondary */}
            {textSecondary}
        </Typography>
        <Typography variant="body2">
            {/* text */}
            {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{extraButton}</Button>
      </CardActions>
    </Card>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SmallCard({url, framework}) {
  return (
      <Card sx={{ width: 220, height: 80, display: 'flex', justifyContent: 'space-between', boxShadow: '5px 5px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
          <CardActionArea style={{ display: 'flex', flexDirection: 'row' }}>
              <CardContent>
                  <Typography>
                      {framework}
                  </Typography>
              </CardContent>
              <CardMedia
                  style={{ width: '4rem', maxWidth: '100%' }}
                  component="img"
                  image={url}
                  alt="img"
              />
          </CardActionArea>
      </Card>
  );
}
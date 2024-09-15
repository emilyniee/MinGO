import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const Logo = styled(CardMedia)(({ theme }) => ({
  borderRadius: '50%',
  width: 80,
  height: 80,
  margin: '0 auto',
}));

const EventCard = ({ title, company, companyLogo, location }) => (
  <Card sx={{ maxWidth: 345, mb: 2 }}>
    <CardContent>
      <Logo
        component="img"
        image={companyLogo}
        alt={`${company} logo`}
      />
      <Typography variant="h5" component="div" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Chip label={company} sx={{ mt: 1, mb: 1 }} />
      <Typography variant="body2" color="text.secondary">
        {location}
      </Typography>
    </CardContent>
  </Card>
);

export default EventCard;

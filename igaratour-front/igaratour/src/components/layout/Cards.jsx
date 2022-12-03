import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import museu from '../../assets/pontos-turisticos/museu-igarassu.jpg';
import coroa from '../../assets/pontos-turisticos/coroa-aviao.jpg';

export default function Cards() {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={museu}
          alt="museu igarssu"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Museu de Igarassu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Museu de igarassu muito lindo, histórico
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div style={{margin: '10px',}}/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={coroa}
          alt="coroa do aviao"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Coroa do avia1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ilha bonitaa fooooodase
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div style={{margin: '10px',}}/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={museu}
          alt="museu igarssu"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Museu de Igarassu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Museu de igarassu muito lindo, histórico
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div style={{margin: '10px',}}/>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={coroa}
          alt="coroa do aviao"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Coroa do avia1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ilha bonitaa fooooodase
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div style={{margin: '10px',}}/>
    </>
  );
}
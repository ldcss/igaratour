import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import aline from '../../assets/devs/aline.jpeg';
import amanda from '../../assets/devs/amanda.jpeg';
import camilly from '../../assets/devs/camilly.jpeg';
import kaio from '../../assets/devs/kaio.jpeg';

export default function Devs() {
  return (
    <ImageList sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Instituição: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: aline,
    title: 'Aline Guedes ',
    author: 'ETE JBL - 2a DS',
  },
  {
    img: amanda,
    title: 'Amanda Silva',
    author: 'ETE JBL - 2a DS',
  },
  {
    img: camilly,
    title: 'Camilly Beatriz',
    author: 'ETE JBL - 2a DS',
  },
  {
    img: kaio,
    title: 'Kaio Bilak',
    author: 'ETE JBL - 2a DS',
  }
];
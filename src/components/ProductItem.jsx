import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function ProductItem({ product }) {
    const { name, price, image } = product;

    return (
        <Card sx={{ backgroundColor: '#FFE4B2' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: ${price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProductItem;

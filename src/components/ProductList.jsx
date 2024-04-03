import React from 'react';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem';

function ProductList() {
    const products = [
        { id: 1, name: 'IDLI', price: 10, image: 'https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 2, name: 'Pasta', price: 20, image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 3, name: 'Samosa', price: 30, image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 4, name: 'Fish', price: 15, image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 5, name: 'Medu Vada', price: 25, image: 'https://i1.wp.com/vegecravings.com/wp-content/uploads/2018/02/Medu-Vada-Recipe-Step-By-Step-Instructions.jpg?fit=2357%2C1885&quality=65&strip=all&ssl=1' },
        { id: 6, name: 'Noodles', price: 35, image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 7, name: 'Butter Chicken', price: 12, image: 'https://tse3.mm.bing.net/th?id=OIP.Y-u-qcA8nX8rb9-kKpEj_QHaLG&pid=Api&P=0&h=180' },
        { id: 8, name: 'Egg Curry', price: 22, image: 'https://images.pexels.com/photos/8625813/pexels-photo-8625813.jpeg?auto=compress&cs=tinysrgb&w=600' },
        // { id: 9, name: 'Taco', price: 32, image: 'https://images.pexels.com/photos/3642718/pexels-photo-3642718.jpeg?auto=compress&cs=tinysrgb&w=600' },
        // { id: 10, name: 'Palak Panner', price: 18, image: 'https://tse3.mm.bing.net/th?id=OIP.c8HUEiCEdrBzo-zgSQBJ2QHaHa&pid=Api&P=0&h=180' },
    ];

    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductItem product={product} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductList;

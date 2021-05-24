import React from 'react';
import { ProductContainer, ProductHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from './ProductElements';

const Product = ({id, heading, data}) => {
    return (
        <ProductContainer id={id}>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
               { data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
               })} 
            </ProductWrapper>
        </ProductContainer>
    );
};

export default Product

import styled from 'styled-components';

export const ProductContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 2rem calc((100vw - 1300px) /2);
    background: #150f0f;
    color: #fff;
`;
export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;
export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`;
export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`;
export const ProductHeading = styled.h1`
    font-size: clamp(2rem, 3vw, 4rem);
    text-align: center;
    margin-bottom: 4rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    width: 25%;
    box-shadow: 3px 3px #fdc500;
`;
export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;
export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`;
export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 1.5rem;
`;
export const ProductButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;
    border: none;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;

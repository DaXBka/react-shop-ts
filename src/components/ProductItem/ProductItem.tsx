import React, { FC } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { StyledButton } from '../globalStyled';
import { IProduct } from '../../@types/product';
import { useAppDispatch } from '../../hooks/redux';
import { addItem } from '../../redux/slices/cartSlice';

// - - - - - - STYLED-COMPONENTS
const ProductItemStyled = styled.div`
    color: var(--alt);
    text-decoration: none;

    border-radius: 10px;
    margin-bottom: 2rem;
    position: relative;

    overflow: hidden;
    cursor: pointer;

    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 15px 3px;

    & > img {
        width: 100%;
        height: 250px;
        object-fit: cover;

        transition: transform 0.3s ease, filter 0.3s ease;
    }

    &:hover > img {
        filter: brightness(0.65);
        transform: scale(1.1);
    }

    & > span {
        color: #fff;
        font-size: 1.2em;
        font-weight: 700;

        position: absolute;
        left: 50%;
        top: 50%;

        opacity: 0;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
    }

    &:hover > span {
        opacity: 1;
    }
`;

const ProductInfo = styled.div`
    padding: 0.75rem 1.2rem;
    border-radius: 0 0 10px 10px;

    position: relative;
    z-index: 11;

    background-color: var(--primary);

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            font-size: 1em;
        }

        h3 {
            font-size: 1em;
            margin-right: 2em;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
// - - - - - - - - - - - - - - -

interface ProductItemProps {
    product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
    const url = `/products/current/${product.id}`;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const navigateToProduct = () => navigate(url);

    const addToCart = (e: React.MouseEvent) => {
        e.stopPropagation();

        const newProduct = {
            ...product,
            count: 1,
        };

        dispatch(addItem(newProduct));
    };

    return (
        <ProductItemStyled onClick={navigateToProduct}>
            <img src={product.image} alt="" />
            <span>Click to view more</span>
            <ProductInfo>
                <div>
                    <h3>{product.title}</h3>
                    <StyledButton onClick={addToCart}>$&nbsp;{product.price}</StyledButton>
                </div>
            </ProductInfo>
        </ProductItemStyled>
    );
};

export default ProductItem;

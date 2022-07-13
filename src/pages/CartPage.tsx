import { FC } from 'react';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import { CartIcon, Container, Main, MyLink, StyledButton, TrashIcon } from '../components/globalStyled';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { clearCart } from '../redux/slices/cartSlice';

const PageInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding-block: 2rem;

    hr {
        opacity: 0.2;
    }
`;

const CartInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        display: flex;
        align-items: center;
        gap: 0.25em;

        div {
            transform: scale(1.4);
        }
    }

    & > a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`;

const CartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1rem;
        }
    }
`;

const CartPage: FC = () => {
    const { items, totalPrice } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const toEmptyCart = () => {
        if (window.confirm('Are you sure you want to empty the cart?')) {
            dispatch(clearCart());
        }
    };

    return (
        <Main>
            <Container>
                <PageInner>
                    <CartInfo>
                        <h1>
                            <CartIcon alt /> My cart
                        </h1>
                        <MyLink onClick={toEmptyCart}>
                            <TrashIcon />
                            Empty cart
                        </MyLink>
                    </CartInfo>

                    <hr />
                    {items.map(item => (
                        <CartItem item={item} />
                    ))}
                    <hr />
                    <CartTotal>
                        <h2>Total price: ${totalPrice}</h2>
                        <StyledButton>Go order</StyledButton>
                    </CartTotal>
                </PageInner>
            </Container>
        </Main>
    );
};

export default CartPage;

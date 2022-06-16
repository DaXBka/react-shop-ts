import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartButton from './CartButton';
import { Container } from './globalStyled';

// - - - - - - STYLES WITH STYLED-COMPONENTS

const HeaderStyled = styled.header`
    padding-block: 1.1rem;
    background: var(--bg-header);
    color: var(--color);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const TextLogo = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    padding-top: 0.3em;

    & a {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    nav {
        z-index: 9;

        @media (max-width: 1024px) {
            display: none;

            &.active {
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                inset: 0;
                background-color: var(--bg-header);
            }
        }
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;

        & li:not(:last-child) {
            margin-right: 1.3vw;
        }

        @media (max-width: 1024px) {
            flex-direction: column;

            & li:not(:last-child) {
                margin-right: 0;
                margin-bottom: 10vh;
            }
        }
    }

    li a {
        color: inherit;
        text-decoration: none;

        padding: 0.5em 1.5em;
        border-radius: 50px;

        transition: background 0.15s ease-in-out, color 0.15s ease-in-out;

        &:hover {
            background: #10b98161;
        }

        &.active {
            background: #10b981;
            color: white;
        }
    }
`;

const IconMenu = styled.div`
    display: none;

    @media (max-width: 1024px) {
        display: block;

        position: absolute;
        top: calc(50% - 9px);
        right: 1%;
        z-index: 10;

        width: 30px;
        height: 18px;

        cursor: pointer;

        span {
            top: calc(50% - 1px);
            left: 0px;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--color);
            transition: all 0.3s ease 0s;

            &:first-child {
                top: 0px;
            }

            &:last-child {
                top: auto;
                bottom: 0px;
            }
        }

        &.active {
            span {
                transform: scale(0);

                &:first-child {
                    transform: rotate(-45deg);
                    top: calc(50% - 1px);
                }

                &:last-child {
                    transform: rotate(45deg);
                    bottom: calc(50% - 1px);
                }
            }
        }
    }
`;

// - - - - - - - - - - - - - - - - - -

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => setIsOpen(state => !state);
    const closeMenu = (): void => setIsOpen(false);

    return (
        <HeaderStyled>
            <Container>
                <HeaderInner>
                    <TextLogo>
                        <Link to="/">gracechapel</Link>
                    </TextLogo>
                    <div>
                        <IconMenu onClick={toggleMenu} className={isOpen ? 'active' : ''}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </IconMenu>
                        <nav className={isOpen ? 'active' : ''}>
                            <ul>
                                <li>
                                    <NavLink to="all" onClick={closeMenu}>
                                        All
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="electronics" onClick={closeMenu}>
                                        Electronics
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="jewelery" onClick={closeMenu}>
                                        Jewelery
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="men's%20clothing" onClick={closeMenu}>
                                        Men's
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="women's%20clothing" onClick={closeMenu}>
                                        Women's
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <CartButton />
                </HeaderInner>
            </Container>
        </HeaderStyled>
    );
};

export default Header;

import React from "react";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdpwn.component";

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { userSignoutStart } from '../../redux/user/user.action';

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';


const Header = ({ currentUser, hidden, userSignoutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop' >SHOP</OptionLink>
            <OptionLink to='/' > CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={userSignoutStart}>SIGNOUT</OptionLink>
                    :
                    <OptionLink to='/signin' > SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser, hidden: selectCartHidden });
const mapDispatchToProps = dispatch => ({
    userSignoutStart: () => dispatch(userSignoutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
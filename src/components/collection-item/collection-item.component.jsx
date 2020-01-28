import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';

import {
    CollectionItemContainer, ImageContainer, CutomButtonContainer,
    CollectionFooterContainer, NameContainer, PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItemToCart }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl} />
            <CutomButtonContainer inverted onClick={() => addItemToCart(item)}>ADD TO CART</CutomButtonContainer>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = disptach => ({ addItemToCart: item => disptach(addItem(item)) });
export default connect(null, mapDispatchToProps)(CollectionItem);
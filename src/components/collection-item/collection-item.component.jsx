import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addItemToCart }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <CustomButton inverted onClick={() => addItemToCart(item)}>ADD TO CART</CustomButton>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
};

const mapDispatchToProps = disptach => ({ addItemToCart: item => disptach(addItem(item)) });
export default connect(null, mapDispatchToProps)(CollectionItem);
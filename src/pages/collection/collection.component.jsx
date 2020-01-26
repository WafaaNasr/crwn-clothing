import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import { CollectionPageContainer, TitleContainer, ItemsContainer, CollectionItemsContainer } from './collection.styles';


const CollectionPage = ({ collection }) => (
    <CollectionPageContainer>
        <TitleContainer>{collection.title}</TitleContainer>
        <ItemsContainer>
            {collection.items.map(item => <CollectionItemsContainer key={item.id} item={item} />)}
        </ItemsContainer>
    </CollectionPageContainer>
);

const mapStateToProps = (state, ownProps) => ({ collection: selectCollection(ownProps.match.params.collectionId)(state) });

export default connect(mapStateToProps)(CollectionPage);

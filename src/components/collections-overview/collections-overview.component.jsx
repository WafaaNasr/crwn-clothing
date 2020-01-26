import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCollectionForPerview } from '../../redux/shop/shop.selector';
import CollectionPreview from "../collection-preview/collection-preview.component";


import { CollectionOverviewContainer } from './collections-overview.styles';


const CollectionsOverview = ({ collections }) => (
    <CollectionOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) =>
            (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
    </CollectionOverviewContainer>
);
const mapStateToProps = createStructuredSelector({ collections: selectCollectionForPerview })


export default connect(mapStateToProps)(CollectionsOverview);
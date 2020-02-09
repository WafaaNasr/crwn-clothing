import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionContainer from '../collection/collection.container';


class ShopPage extends React.Component {

    componentDidMount() {
        const { updateCollectionsMap } = this.props;
        updateCollectionsMap();
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shope-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}  />
                <Route path={`${match.path}/:collectionId`} component={CollectionContainer}  />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollectionsMap: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);
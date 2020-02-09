import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionPage from '../collection/collection.component';
import { createStructuredSelector } from 'reselect';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const { updateCollectionsMap } = this.props;
        updateCollectionsMap();
    }

    render() {
        const { match, isFetchingColl, isCollectionsLoaded } = this.props;
        return (
            <div className='shope-page'>
                <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={isFetchingColl} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({ isFetchingColl: selectIsFetching, isCollectionsLoaded: selectIsCollectionsLoaded });
const mapDispatchToProps = dispatch => ({
    updateCollectionsMap: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
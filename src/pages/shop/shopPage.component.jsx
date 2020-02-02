import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utilities';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = { isLoading: true }
    componentDidMount() {
        const { updateCollectionsMap } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsToMap(snapshot);
            updateCollectionsMap(collectionsMap);
            this.setState({ isLoading: false });
        }
        );
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className='shope-page'>
                <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollectionsMap: collectionsSnapshot => dispatch(updateCollections(collectionsSnapshot))
})

export default connect(null, mapDispatchToProps)(ShopPage);
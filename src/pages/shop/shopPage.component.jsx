import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utilities';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionPage from '../collection/collection.component';

class ShopPage extends React.Component {

    componentDidMount() {
        const { updateCollectionsMap } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsToMap(snapshot);
            updateCollectionsMap(collectionsMap);
        }
        );
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shope-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollectionsMap: collectionsSnapshot => dispatch(updateCollections(collectionsSnapshot))
})

export default connect(null, mapDispatchToProps)(ShopPage);
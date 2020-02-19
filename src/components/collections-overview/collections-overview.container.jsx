
import { connect } from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect';

import {selectIsFetching} from '../../redux/shop/shop.selector';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps=createStructuredSelector({isLoading:selectIsFetching});

const CollectionsOverviewContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import CollectionContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { connect } from 'react-redux'; 
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = ({match, fetchCollectionsStartAsync}) => {

  useEffect(()=>{
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync])

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
      </div>);
  
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
}); 

export default connect(null, mapDispatchToProps)(ShopPage);
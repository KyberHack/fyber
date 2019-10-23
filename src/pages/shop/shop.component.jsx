import React from "react";
import { Route, Switch } from "react-router-dom";

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import CollectionDetailsPage from "../../components/collection-details/collection-details.component";
import HomePage from "../homepage/homepage.component";
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Switch>
      <Route exact path={`${match.path}`} component={HomePage} />
      <Route
        path={`${match.path}/:collectionId/:itemId`}
        component={CollectionDetailsPage}
      />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Switch>
  </div>
);

export default ShopPage;

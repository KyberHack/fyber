import React from "react";
import { Route, Switch } from "react-router-dom";

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import CollectionDetailsPage from "../../components/collection-details/collection-details.component";
import HomePage from "../homepage/homepage.component";
import Header from "../../components/header/header.component";
const ShopPage = ({ match }) => (
  <div className="shop-page main-container">
    <Header />
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

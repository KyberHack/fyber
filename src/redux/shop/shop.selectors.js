import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );

export const selectCollectionById = (collectionId, itemId) =>
  createSelector(
    [selectCollections],
    collections =>
      collections[collectionId].items.find(item => item.id === parseInt(itemId))
  );

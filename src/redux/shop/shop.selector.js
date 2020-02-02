import { createSelector } from 'reselect';




const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionForPerview = createSelector([selectShopCollections], collections => collections ? Object.values(collections) : []);

export const selectCollection = collectionUrlParam => createSelector([selectShopCollections],
    collections => collections[collectionUrlParam]
);
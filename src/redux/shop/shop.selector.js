import { createSelector } from 'reselect';




const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionForPerview = createSelector([selectShopCollections], collections => collections ? Object.values(collections) : []);

export const selectCollection = collectionUrlParam => createSelector([selectShopCollections],
    collections => collections[collectionUrlParam]
);

export const selectIsFetching=createSelector([selectShop], shop=>shop.isFetching);
// !! => coerce of coerced : !shop.collections => coerces shop.collections IF null !null = true then !true equals to false
export const selectIsCollectionsLoaded=createSelector([selectShop], shop=> !!shop.collections);
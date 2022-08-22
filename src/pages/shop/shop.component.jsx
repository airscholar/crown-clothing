import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import { convertCollectionToMap, firestore } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

const ShopPage = ({ updateCollections }) => {
    // const unSubscribeFromSnapshot = null;

    useEffect(() => {
        const collectionRef = firestore.collection("collections");
        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = await convertCollectionToMap(snapshot);
            console.log({ collectionsMap })
            updateCollections(collectionsMap)
        })
    }, [updateCollections]);

    return (<div className="shop-page">
        <CollectionsOverviewComponent />
    </div>)
}

export const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
import React from "react";
// import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { CollectionsPage } from "../collection/collection.component";

const ShopPage = () => {
    return <div className="shop-page">
        <Routes>
            <Route exact path='/' element={<CollectionsOverview />} ></Route>
            <Route exact path=':collectionId' element={<CollectionsPage />} ></Route>
        </Routes>
    </div>
}

export default ShopPage
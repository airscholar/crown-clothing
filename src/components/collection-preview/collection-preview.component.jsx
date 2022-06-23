import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import './collection-preview.styles.scss'

export const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <div>
                <h1>{title}</h1>
            </div>
            <div className="preview">
                {
                    items.filter((_, idx) => idx < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div >
    )
}
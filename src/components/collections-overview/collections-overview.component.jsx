import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector"
import { CollectionPreview } from "../collection-preview/collection-preview.component"

const CollectionsOverview = ({ collections }) => {
    return collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />
    })
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectShopCollections } from "../../redux/shop/shop.selector"
import { CollectionPreview } from "../collection-preview/collection-preview.component"

const CollectionsOverview = ({ collections }) => (
    collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />
    })
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
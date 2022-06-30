import { MenuItem } from '../menu-item/menu-item.component'
import React from 'react'
import './directory-menu.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const DirectoryMenu = ({ sections }) => {
    return (
        <div className='directory-menu' >
            {
                sections.map(({ id, ...otherSectionProps }) => {
                    return <MenuItem key={id} {...otherSectionProps} />
                })
            }
        </div>
    )
}

export const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);
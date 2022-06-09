import React from 'react'
import { MenuItem } from '../menu-item/menu-item.component'
import './directory-menu.styles.scss'

export class DirectoryMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                { id: 1, title: "HATS", subtitle: "SHOW NOW", img: "https://i.ibb.co/cvpntL1/hats.png" },
                { id: 2, title: "JACKETS", subtitle: "SHOW NOW", img: "https://i.ibb.co/px2tCc3/jackets.png" },
                { id: 3, title: "SNEAKERS", subtitle: "SHOW NOW", img: "https://i.ibb.co/0jqHpnp/sneakers.png" },
                { id: 4, title: "WOMENS", subtitle: "SHOW NOW", img: "https://i.ibb.co/GCCdy8t/womens.png", size: 'large' },
                { id: 5, title: "MENS", subtitle: "SHOW NOW", img: "https://i.ibb.co/R70vBrQ/men.png", size: 'large' },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu' >
                {
                    this.state.sections.map(({ id, title, img, size }) => {
                        return <MenuItem key={id} title={title} imageUrl={img} size={size} />
                    })
                }
            </div>
        )
    }
}
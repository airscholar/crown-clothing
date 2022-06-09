import React from 'react';
import { DirectoryMenu } from '../../components/directory-menu/directory-menu.component';
import './homepage.styles.scss';

export class HomePage extends React.Component {
    constructor() {
        super()

        this.state = {
            menuItems: [
                { id: 1, title: 'HATS', subtitle: "SHOP NOW" },
                { id: 2, title: 'JACKETS', subtitle: "SHOP NOW" },
                { id: 3, title: 'SNEAKERS', subtitle: "SHOP NOW" },
                { id: 4, title: 'WOMENS', subtitle: "SHOP NOW" },
                { id: 5, title: 'MENS', subtitle: "SHOP NOW" },
            ]
        }
    }

    render() {
        return <div className="homepage">
            <DirectoryMenu menuItems={this.state.menuItems}></DirectoryMenu>
        </div>
    }
}
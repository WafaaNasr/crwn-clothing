import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import sectionsData from './directory.data';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: sectionsData
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, size }) => <MenuItem title={title} imageUrl={imageUrl} size={size} />)}
            </div>
        )
    }
}
export default Directory;
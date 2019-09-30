import React from 'react';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1> {title}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                    .map((item) => (<div key={item.id} className='collection-item'>
                        {item.name}
                    </div>))
            }
        </div>
    </div>
);


export default CollectionPreview;
import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemComponent, BackgroundImageContainer, ContentContainer
    , TitleContainer, SubTitleContainer
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemComponent size={size} onClick={() => history.push(`${linkUrl}${match.url}`)}>
        <BackgroundImageContainer imageUrl={imageUrl} />
        <ContentContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubTitleContainer>SHOP NOW</SubTitleContainer>
        </ContentContainer>
    </MenuItemComponent>
);

export default withRouter(MenuItem);
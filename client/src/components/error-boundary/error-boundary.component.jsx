import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {

    constructor() {
        super();
        this.state = { hasErrored: false };
    }

    static getDrivedStateFromError(error) {
        //catches the error Ahead of time so we can proces it
        return { hasErrored: true };
    }
    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {

        return this.state.hasErrored ? (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/U3vTGjX.png' />
                <ErrorImageText>Sorry, something went wrong</ErrorImageText>
            </ErrorImageOverlay>
        ) : this.props.children;
    }
}

export default ErrorBoundary;
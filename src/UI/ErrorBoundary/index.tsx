import React, { Component } from 'react';

interface Props {
    children: React.ReactChildren;
    component?: React.ElementType;
}
interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children, component } = this.props;
        const errorMessage = component || <>Something is wrong</>;
        return hasError ? errorMessage : children;
    }
}

export default ErrorBoundary;

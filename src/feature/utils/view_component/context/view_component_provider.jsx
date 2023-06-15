import React from 'react';
import ViewComponentContext from './view_component_context';
import UseViewComponent from '../use_view_component';

const ViewComponentProvider = ({ children }) => {
    const { viewComponent, view } = UseViewComponent();
    return (
        <ViewComponentContext.Provider value={{ viewComponent,view }}>
            { children }
        </ViewComponentContext.Provider>
    );
}

export default ViewComponentProvider;

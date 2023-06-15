import React, { useState } from 'react';
import { View } from '../../../utils/view.enum';

const UseViewComponent = () => {
    let statusView = View.INFORMACION;
    const [view, setView] = useState( statusView );
    const viewComponent = (selectedView) => {
        setView(selectedView);
        console.log('has seleccionado el componente: ',selectedView );
    }
    return {
        view, 
        setView,
        viewComponent,
        }
}

export default UseViewComponent;

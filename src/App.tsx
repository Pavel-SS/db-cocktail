import React from 'react';

import { CardsList } from './components/CardsList';

const App = (): any => {
    return (
        <div className="App flex flex-col h-screen w-screen">
            <CardsList />
        </div>
    );
};

export default App;

import React from 'react';
import StarShipsList from './StarShipsList';


class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="ui borderless main menu">
                    <div className="ui text container">
                        <div className="header item">
                           <h1>\ STARSHIPS /</h1>
                        </div>
                    </div>
                </div>
                <div className="ui container">
                    <StarShipsList />
                </div>
            </div>
        );
    }
};

export default App;
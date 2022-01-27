import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import ThemeContext from './Context/themeContext';

export default class App extends React.Component {
    state = {
        theme: 'default',
    };

    swithBtn = () => {
        this.setState(({ theme }) => {
            if (theme === 'default') {
                return { theme: 'light' };
            }
            return {
                theme: 'default',
            };
        });
    };
    render() {
        const { theme } = this.state;
        return (
            <div className="App">
                <h2>this is class</h2>
                <ThemeContext.Provider
                    value={{
                        theme: theme,
                        swithBtn: this.swithBtn,
                    }}
                >
                    <Home />
                </ThemeContext.Provider>
            </div>
        );
    }
}

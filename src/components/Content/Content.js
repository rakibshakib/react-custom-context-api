import React from 'react';
import Child from '../Child/Child';
import ThemeContext from '../../Context/themeContext';

export default class Content extends React.Component {
    // componentDidMount() {}
    render() {
        const { theme, swithBtn } = this.context;
        return (
            <div>
                <p>THis is section component</p>
                <Child theme={theme} swithBtn={swithBtn} />
            </div>
        );
    }
}

Content.contextType = ThemeContext;

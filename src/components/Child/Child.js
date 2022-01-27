import React from 'react';

function Child({ theme, swithBtn }) {
  console.log(theme);
    const style =
        theme === 'default'
            ? { background: 'deeppink', color: 'white', padding: '10px' }
            : { background: 'lightgray', color: 'black', padding: '10px' };
    return (
        <div style={style}>
            <h2>This is child data</h2>
            <button type="button" onClick={swithBtn}>
                Change Theme
            </button>
        </div>
    );
}

export default Child;

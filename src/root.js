import React from 'react';
import ReactDOM from 'react-dom';

require('./css/pc_base.css');
require('./css/mob_base.css');

import PcIndex from './js/pc_index';
import PcIndex from './js/mob_index';

ReactDOM.render(
    <div>
        <PcIndex/>
    </div>,
    document.getElementById('root')
);
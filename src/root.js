import React from 'react';
import ReactDOM from 'react-dom';

import MediaQuery from 'react-responsive';

require('./css/pc_base.css');
require('./css/mob_base.css');

import PcIndex from './js/pc_index';
import MobIndex from './js/mob_index';

ReactDOM.render(
    <div>
        <MediaQuery query='(min-device-width: 1224px)'>
            <Index/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
            <MobIndex/>
        </MediaQuery>
    </div>,
    document.getElementById('root')
);
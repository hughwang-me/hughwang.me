import React from 'react';
import ReactDOM from 'react-dom';

import MediaQuery from 'react-responsive';

require('./css/pc/style.css');
require('./css/mob/style.css');

import PcIndex from './js/pc/index';
import MobIndex from './js/mob/index';

ReactDOM.render(
    <div>
        <MediaQuery query='(min-device-width: 1224px)'>
            <PcIndex/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
            <MobIndex/>
        </MediaQuery>
    </div>,
    document.getElementById('root')
);
import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();


Meteor.subscribe('userData');

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();

// Global Packages 
import 'lazysizes';
import { environment } from 'env';

// Veams & Veams Plugins
import Veams from '@veams/core';
import VeamsLogger from '@veams/plugin-logger';
import VeamsVent from '@veams/plugin-vent';
import VeamsMediaQueryHandler from '@veams/plugin-media-query-handler';

// Veams Helpers
import throttle from '@veams/helpers/lib/operator/throttle';

// Internal Store
import store from './app.store';

// Project Specific Events
import EVENTS from './app.events';

// Veams
Veams.onInitialize(() => {
    /**
    * Veams Plugins
    */
    
    // Vent Plugin
    Veams.use(VeamsVent, {
        furtherEvents: EVENTS
    });

    // Logger Plugin for devmode and logger
    Veams.use(VeamsLogger);

    // Media Query Handler Plugin
    Veams.use(VeamsMediaQueryHandler);
    
    // Trigger global scroll event
    window.onscroll = throttle((e) => {
        Veams.Vent.trigger(Veams.EVENTS.scroll, e);
    }, 200);
});

export { Veams };
// ==UserScript==
// @name        Codebase: Harvest (DEV)
// @namespace   https://www.happiness.se
// @version     1.0.0
// @grant       GM_getValue
// @grant       GM_getValues
// @grant       GM_notification
// @match       https://codebase-harvest.ddev.site/*
// ==/UserScript==

"use strict";

function log(...args) {
    console.log('%cUserscript:', 'color: purple; font-weight: bold', ...args);
}

log('Dev mode started');

async function main() {
    const resp = await fetch('https://codebase-harvest.ddev.site/codebase-harvest.user.js');
    const script = await resp.text();
    if (script.trim() === '') {
        log('No user script found');
        return;
    }
    log('Got Dev script');
    eval(script);
    log('Dev script evaled');
}

// Make sure we run once at the start
main.bind({})().catch((e) => {
    log('ERROR', e);
});
#!/usr/bin/env node
'use strict';
const meow = require('meow');
const wifiName = require('wifi-name');

meow(`
	Usage
	  $ wifi-name
	  wu-tang lan
`);

wifiName().then(console.log);

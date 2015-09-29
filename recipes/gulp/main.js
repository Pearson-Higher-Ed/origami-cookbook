'use strict';

/**
 * Entry point for importing Origami JS components.
 */

require('o-app-header');
var Drawer = require('o-drawer');
var drawer;

window.session = {
	sessionState: 'nosession',
	eventHandlers: {},
	login: function (redirectUrl) {
		this.trigger(this.LoginEvent);
	},
	logout: function (redirectUrl) {
		this.trigger(this.LogoutEvent);
	},
	hasValidSession: function (gracePeriodSeconds) { return this.sessionState; },
	on: function (eventType, handler) {
		this.eventHandlers[eventType] = this.eventHandlers[eventType] || [];
		this.eventHandlers[eventType].push(handler);
	},
	off: function (eventType, handler) {},
	trigger: function (eventType) {
		(this.eventHandlers[eventType] || []).forEach(function (handler) {
			handler.call();
		});
	},
	// Events
	SessionStateKnownEvent: 'sessionstateknown',
	LoginEvent: 'login',
	LogoutEvent: 'logout',
	// States
	Unknown: 'unknown',
	NoSession: 'nosession',
	NoToken: 'notoken',
	RequiredLifetimeTooLong: 'requiredlifetimetoolong',
	Success: 'success',
	TimedOut: 'timedout'
};

document.addEventListener('DOMContentLoaded', function () {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	drawer = new Drawer(document.querySelector('[data-o-component="o-drawer"]'));
});

document.addEventListener('oAppHeader.help.toggle', function () {
	if (drawer) drawer.toggle();
});

document.querySelector('[data-o-component="o-drawer"] a').addEventListener('click', function (e) {
	e.preventDefault();
	drawer.close();
});

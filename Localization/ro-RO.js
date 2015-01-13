/************************************************
* This is an example localization page. All of these
* messages are the default messages for ko.validation
*
* Currently ko.validation does multiple parameter replacement
* on your message (indicated by the {0}, {1}, etc.).
*
* The parameters that you provide in your validation extender
* are what are passed to your message to do the {0}, {1} etc. replacements.
*
* eg: myProperty.extend({ minLength: 5 });
* ... will provide a message of "Please enter at least 5 characters"
* when validated
*
* eg: myProperty.extend({ between: [1, 5] });
* ... will provide a message of "Please enter between 1 and 5 characters"
* when validated
*
* This message replacement obviously only works with primitives
* such as numbers and strings. We do not stringify complex objects
* or anything like that currently.
*/
(function(factory) {
	// Module systems magic dance.
	/*global require,ko,define*/
	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// CommonJS or Node: hard-coded dependency on "knockout"
		factory(require("knockout"));
	} else if (typeof define === "function" && define["amd"]) {
		// AMD anonymous module with hard-coded dependency on "knockout"
		define(["knockout"], factory);
	} else {
		// <script> tag: use the global `ko` object, attaching a `mapping` property
		factory(ko);
	}
}(function(ko) {
	if (!ko.validation && typeof ko.validation.localize !== 'function') {
		throw new Error('Knockout-Validation is required, please ensure it is loaded before this localization file');
	}
	ko.validation.localize({
		required: 'Acest câmp este obligatoriu.',
		min: 'Introduceţi un număr mai mare sau egal cu {0}.',
		max: 'Introduceţi un număr mai mic sau egal cu {0}.',
		minLength: 'Introduceţi cel puţin {0} caractere.',
		maxLength: 'Introduceţi maxim {0} caractere.',
		pattern: 'Verificaţi această valoare.',
		step: 'Valoarea trebuie să crească cu {0}.',
		email: 'Adresa de email nu este validă.',
		date: 'Vă rugăm introduceţi o dată validă.',
		dateISO: 'Vă rugăm introduceţi o dată validă.',
		number: 'Introduceţi un număr.',
		digit: 'Introduceţi o cifră.',
		phoneUS: 'Vă rugăm să specificați un număr de telefon valid.',
		equal: 'Valorile trebuie să fie egale.',
		notEqual: 'Vă rugăm să alegeți o altă valoare.',
		unique: 'Vă rugăm să vă asigurați că valoarea este unică.'
	});
}));

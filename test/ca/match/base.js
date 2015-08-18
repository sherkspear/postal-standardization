"use strict";

/* global describe, it */

var should = require( "should" );

var Postal = require( "../../../lib" ).CAPostal;

describe( "CA Match Object:", function () {

	it( "Constructor - No Config", function () {
		var postal = new Postal();
		var match = postal.match;

		should.exist( match );
	} );

} );
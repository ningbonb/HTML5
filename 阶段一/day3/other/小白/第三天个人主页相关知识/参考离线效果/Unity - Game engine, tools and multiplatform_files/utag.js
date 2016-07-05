//tealium universal tag - utag.loader ut4.40.201605101953, Copyright 2016 Tealium.com Inc. All Rights Reserved. 

var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_intel_profile-ssg.intel=([^\S;]*)")){if(RegExp.$1.indexOf("/dev/") === -1) {ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/intel/profile-ssg.intel/dev/';}}})();}catch(e){};try{
/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
var $wap = (function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// The deferred used on DOM ready
	readyList,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// Support: IE<9
	// For `typeof node.method` instead of `node.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	location = window.location,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "1.9.1",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler
	completed = function( event ) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	},
	// Clean-up method for dom ready events
	detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || core_hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );
		if ( scripts ) {
			jQuery( scripts ).remove();
		}
		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		if ( data === null ) {
			return data;
		}

		if ( typeof data === "string" ) {

			// Make sure leading/trailing whitespace is removed (IE can't handle it)
			data = jQuery.trim( data );

			if ( data ) {
				// Make sure the incoming data is actual JSON
				// Logic borrowed from http://json.org/json2.js
				if ( rvalidchars.test( data.replace( rvalidescape, "@" )
					.replace( rvalidtokens, "]" )
					.replace( rvalidbraces, "")) ) {

					return ( new Function( "return " + data ) )();
				}
			}
		}

		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Use native String.trim function wherever possible
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
		function( text ) {
			return text == null ?
				"" :
				core_trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( core_indexOf ) {
				return core_indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				args = args || [];
				args = [ context, args.slice ? args.slice() : args ];
				if ( list && ( !fired || stack ) ) {
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function() {

	var support, all, a,
		input, select, fragment,
		opt, eventName, isSupported, i,
		div = document.createElement("div");

	// Setup
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// Support tests won't run in some limited or non-browser environments
	all = div.getElementsByTagName("*");
	a = div.getElementsByTagName("a")[ 0 ];
	if ( !all || !a || !all.length ) {
		return {};
	}

	// First batch of tests
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px;float:left;opacity:.5";
	support = {
		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: div.firstChild.nodeType === 3,

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: a.getAttribute("href") === "/a",

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.5/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)

		cssFloat: !!a.style.cssFloat,

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		checkOn: !!input.value,

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Tests for enctype support on a form (#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
		boxModel: document.compatMode === "CSS1Compat",

		// Will be defined later
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true,
		boxSizingReliable: true,
		pixelPosition: false
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<9
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	// Check if we can trust getAttribute("value")
	input = document.createElement("input");
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment = document.createDocumentFragment();
	fragment.appendChild( input );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
	for ( i in { submit: true, change: true, focusin: true }) {
		div.setAttribute( eventName = "on" + i, "t" );

		support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv, tds,
			divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		body.appendChild( container ).appendChild( div );

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName("td");
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Support: IE8
		// Check if empty table cells still have offsetWidth/Height
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check box-sizing and margin behavior
		div.innerHTML = "";
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
		support.boxSizing = ( div.offsetWidth === 4 );
		support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// Fails in WebKit before Feb 2011 nightlies
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		if ( typeof div.style.zoom !== core_strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.innerHTML = "";
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			div.style.display = "block";
			div.innerHTML = "<div></div>";
			div.firstChild.style.width = "5px";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

			if ( support.inlineBlockNeedsLayout ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = tds = marginDiv = null;
	});

	// Null elements to avoid leaks in IE
	all = select = fragment = opt = a = input = null;

	return support;
})();

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, ret,
		internalKey = jQuery.expando,
		getByName = typeof name === "string",

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		cache[ id ] = {};

		// Avoids exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		if ( !isNode ) {
			cache[ id ].toJSON = jQuery.noop;
		}
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( getByName ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var i, l, thisCache,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			for ( i = 0, l = name.length; i < l; i++ ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		// Do not set data on non-element because it will not be cleared (#8335).
		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
			return false;
		}

		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			elem = this[0],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[i].name;

						if ( !name.indexOf( "data-" ) ) {
							name = jQuery.camelCase( name.slice(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return jQuery.access( this, function( value ) {

			if ( value === undefined ) {
				// Try to fetch any internally stored data first
				return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
			}

			this.each(function() {
				jQuery.data( this, key, value );
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		hooks.cur = fn;
		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i,
	rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	getSetInput = jQuery.support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var ret, hooks, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val,
				self = jQuery(this);

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, notxml, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			// In IE9+, Flash objects don't have .getAttribute (#12945)
			// Support: IE9+
			if ( typeof elem.getAttribute !== core_strundefined ) {
				ret =  elem.getAttribute( name );
			}

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( rboolean.test( name ) ) {
					// Set corresponding property to false for boolean attributes
					// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
					if ( !getSetAttribute && ruseDefault.test( name ) ) {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					} else {
						elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		var
			// Use .prop to determine if this attribute is understood as boolean
			prop = jQuery.prop( elem, name ),

			// Fetch it accordingly
			attr = typeof prop === "boolean" && elem.getAttribute( name ),
			detail = typeof prop === "boolean" ?

				getSetInput && getSetAttribute ?
					attr != null :
					// oldIE fabricates an empty string for missing boolean attributes
					// and conflates checked/selected into attroperties
					ruseDefault.test( name ) ?
						elem[ jQuery.camelCase( "default-" + name ) ] :
						!!attr :

				// fetch an attribute node for properties not recognized as boolean
				elem.getAttributeNode( name );

		return detail && detail.value !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// fix oldIE value attroperty
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return jQuery.nodeName( elem, "input" ) ?

				// Ignore the value *property* by using defaultValue
				elem.defaultValue :

				ret && ret.specified ? ret.value : undefined;
		},
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
				ret.value :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			return name === "value" || value === elem.getAttribute( name ) ?
				value :
				undefined;
		}
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret == null ? undefined : ret;
			}
		});
	});

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});
var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}


				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		event.isTrigger = true;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur != this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			}
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== document.activeElement && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === document.activeElement && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Even when returnValue equals to undefined Firefox will still show alert
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === core_strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var i,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	hasDuplicate,
	outermostContext,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsXML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,
	sortOrder,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	support = {},
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Array methods
	arr = [],
	pop = arr.pop,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},


	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	operators = "([*^$|!~]?=)",
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rsibling = /[\x20\t\r\n\f]*[+~]/,

	rnative = /^[^{]+\{\s*\[native code/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,
	rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
	funescape = function( _, escaped ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		return high !== high ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Use a stripped-down slice if we can't use a native one
try {
	slice.call( preferredDoc.documentElement.childNodes, 0 )[0].nodeType;
} catch ( e ) {
	slice = function( i ) {
		var elem,
			results = [];
		while ( (elem = this[i++]) ) {
			results.push( elem );
		}
		return results;
	};
}

/**
 * For feature detection
 * @param {Function} fn The function to test for native support
 */
function isNative( fn ) {
	return rnative.test( fn + "" );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var cache,
		keys = [];

	return (cache = function( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	});
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return fn( div );
	} catch (e) {
		return false;
	} finally {
		// release memory in IE
		div = null;
	}
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( !documentIsXML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
				push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && !rbuggyQSA.test(selector) ) {
			old = true;
			nid = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results, slice.call( newContext.querySelectorAll(
						newSelector
					), 0 ) );
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsXML = isXML( doc );

	// Check if getElementsByTagName("*") returns only elements
	support.tagNameNoComments = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if attributes should be retrieved by attribute nodes
	support.attributes = assert(function( div ) {
		div.innerHTML = "<select></select>";
		var type = typeof div.lastChild.getAttribute("multiple");
		// IE8 returns a string for some attributes even when not present
		return type !== "boolean" && type !== "string";
	});

	// Check if getElementsByClassName can be trusted
	support.getByClassName = assert(function( div ) {
		// Opera can't find a second classname (in 9.6)
		div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
		if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
			return false;
		}

		// Safari 3.2 caches class attributes and doesn't catch changes
		div.lastChild.className = "e";
		return div.getElementsByClassName("e").length === 2;
	});

	// Check if getElementById returns elements by name
	// Check if getElementsByName privileges form controls or returns elements by ID
	support.getByName = assert(function( div ) {
		// Inject content
		div.id = expando + 0;
		div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
		docElem.insertBefore( div, docElem.firstChild );

		// Test
		var pass = doc.getElementsByName &&
			// buggy browsers will return fewer than the correct 2
			doc.getElementsByName( expando ).length === 2 +
			// buggy browsers will return more than the correct 0
			doc.getElementsByName( expando + 0 ).length;
		support.getIdNotName = !doc.getElementById( expando );

		// Cleanup
		docElem.removeChild( div );

		return pass;
	});

	// IE6/7 return modified attributes
	Expr.attrHandle = assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
			div.firstChild.getAttribute("href") === "#";
	}) ?
		{} :
		{
			"href": function( elem ) {
				return elem.getAttribute( "href", 2 );
			},
			"type": function( elem ) {
				return elem.getAttribute("type");
			}
		};

	// ID find and filter
	if ( support.getIdNotName ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );

				return m ?
					m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
						[m] :
						undefined :
					[];
			}
		};
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.tagNameNoComments ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Name
	Expr.find["NAME"] = support.getByName && function( tag, context ) {
		if ( typeof context.getElementsByName !== strundefined ) {
			return context.getElementsByName( name );
		}
	};

	// Class
	Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
			return context.getElementsByClassName( className );
		}
	};

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21),
	// no need to also add to buggyMatches since matches checks buggyQSA
	// A support test would require too much code (would include document ready)
	rbuggyQSA = [ ":focus" ];

	if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explictly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// IE8 - Some boolean attributes are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Opera 10-12/IE8 - ^= $= *= and empty values
			// Should not select anything
			div.innerHTML = "<input type='hidden' i=''/>";
			if ( div.querySelectorAll("[i^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.webkitMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = new RegExp( rbuggyMatches.join("|") );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {
		var compare;

		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
			if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
				if ( a === doc || contains( preferredDoc, a ) ) {
					return -1;
				}
				if ( b === doc || contains( preferredDoc, b ) ) {
					return 1;
				}
				return 0;
			}
			return compare & 4 ? -1 : 1;
		}

		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	// Always assume the presence of duplicates if sort doesn't
	// pass them to our comparison function (as in Google Chrome).
	hasDuplicate = false;
	[0, 0].sort( sortOrder );
	support.detectDuplicates = hasDuplicate;

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	// rbuggyQSA always contains :focus, so no need for an existence check
	if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	var val;

	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( !documentIsXML ) {
		name = name.toLowerCase();
	}
	if ( (val = Expr.attrHandle[ name ]) ) {
		return val( elem );
	}
	if ( documentIsXML || support.attributes ) {
		return elem.getAttribute( name );
	}
	return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
		name :
		val && val.specified ? val.value : null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		i = 1,
		j = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		for ( ; (elem = results[i]); i++ ) {
			if ( elem === results[ i - 1 ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && ( ~b.sourceIndex || MAX_NEGATIVE ) - ( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[4] ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeName ) {
			if ( nodeName === "*" ) {
				return function() { return true; };
			}

			nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
			};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifider
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsXML ?
						elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
						elem.lang) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && !documentIsXML &&
					Expr.relative[ tokens[1].type ] ) {

				context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
				if ( !context ) {
					return results;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, slice.call( seed, 0 ) );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		documentIsXML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Easy API for creating new setFilters
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Initialize with the default document
setDocument();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	isSimple = /^.[^:#\[\.,]*$/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i, ret, self,
			len = this.length;

		if ( typeof selector !== "string" ) {
			self = this;
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		ret = [];
		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, this[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
		return ret;
	},

	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true) );
	},

	is: function( selector ) {
		return !!selector && (
			typeof selector === "string" ?
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				rneedsContext.test( selector ) ?
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			ret = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			cur = this[i];

			while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;
				}
				cur = cur.parentNode;
			}
		}

		return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

jQuery.fn.andSelf = jQuery.fn.addBack;

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( this.length > 1 && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}
function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );

			}
		});
	},

	after: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function( value ) {
		var isFunc = jQuery.isFunction( value );

		// Make sure that the elements are removed from the DOM before they are inserted
		// this can help fix replacing a parent with child elements
		if ( !isFunc && typeof value !== "string" ) {
			value = jQuery( value ).not( this ).detach();
		}

		return this.domManip( [ value ], true, function( elem ) {
			var next = this.nextSibling,
				parent = this.parentNode;

			if ( parent ) {
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		});
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, table ? self.html() : undefined );
				}
				self.domManip( args, table, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call(
						table && jQuery.nodeName( this[i], "table" ) ?
							findOrAppend( this[i], "tbody" ) :
							this[i],
						node,
						i
					);
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery.ajax({
									url: node.src,
									type: "GET",
									dataType: "script",
									async: false,
									global: false,
									"throws": true
								});
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

function findOrAppend( elem, tag ) {
	return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	var attr = elem.getAttributeNode("type");
	elem.type = ( attr && attr.specified ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( manipulation_rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !jQuery.support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = jQuery.support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== core_strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						core_deletedIds.push( id );
					}
				}
			}
		}
	}
});
var iframe, getStyles, curCSS,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,
	rposition = /^(top|right|bottom|left)$/,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var len, styles,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		var bool = typeof state === "boolean";

		return this.each(function() {
			if ( bool ? state : isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, _computed ) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles( elem ),

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
			style = elem.style;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, _computed ) {
		var left, rs, rsLeft,
			computed = _computed || getStyles( elem ),
			ret = computed ? computed[ name ] : undefined,
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.hover = function( fnOver, fnOut ) {
	return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
};
var
	// Document location
	ajaxLocParts,
	ajaxLocation,
	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off, url.length );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 ) {
					isSuccess = true;
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					isSuccess = true;
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					isSuccess = ajaxConvert( s, response );
					statusText = isSuccess.state;
					success = isSuccess.data;
					error = isSuccess.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	}
});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {
	var conv2, current, conv, tmp,
		converters = {},
		i = 0,
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice(),
		prev = dataTypes[ 0 ];

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	// Convert to each sequential dataType, tolerating list modification
	for ( ; (current = dataTypes[++i]); ) {

		// There's only work to do if current dataType is non-auto
		if ( current !== "*" ) {

			// Convert response if prev dataType is non-auto and differs from current
			if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split(" ");
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.splice( i--, 0, current );
								}

								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s["throws"] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}

			// Update prev for next iteration
			prev = current;
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
var xhrCallbacks, xhrSupported,
	xhrId = 0,
	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject && function() {
		// Abort all pending requests
		var key;
		for ( key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	};

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject("Microsoft.XMLHTTP");
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var handle, i,
						xhr = s.xhr();

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( err ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, responseHeaders, statusText, responses;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occurred
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					if ( !s.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var end, unit,
				tween = this.createTween( prop, value ),
				parts = rfxnum.exec( value ),
				target = tween.cur(),
				start = +target || 0,
				scale = 1,
				maxIterations = 20;

			if ( parts ) {
				end = +parts[2];
				unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

				// We need to compute starting value
				if ( unit !== "px" && start ) {
					// Iteratively approximate from a nonzero starting point
					// Prefer the current property, because this process will be trivial if it uses the same units
					// Fallback to end or a simple constant
					start = jQuery.css( tween.elem, prop, true ) || end || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				tween.unit = unit;
				tween.start = start;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
			}
			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
	jQuery.each( props, function( prop, value ) {
		var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( collection[ index ].call( animation, prop, value ) ) {

				// we're done with this property
				return;
			}
		}
	});
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	createTweens( animation, props );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var value, name, index, easing, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/*jshint validthis:true */
	var prop, index, length,
		value, dataShow, toggle,
		tween, hooks, oldfire,
		anim = this,
		style = elem.style,
		orig = {},
		handled = [],
		hidden = elem.nodeType && isHidden( elem );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";

			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !jQuery.support.shrinkWrapBlocks ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}


	// show/hide pass
	for ( index in props ) {
		value = props[ index ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ index ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				continue;
			}
			handled.push( index );
		}
	}

	length = handled.length;
	if ( length ) {
		dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
		if ( "hidden" in dataShow ) {
			hidden = dataShow.hidden;
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( index = 0 ; index < length ; index++ ) {
			prop = handled[ index ];
			tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
			orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );
				doAnimation.finish = function() {
					anim.stop( true );
				};
				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.cur && hooks.cur.finish ) {
				hooks.cur.finish.call( this );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = this[ 0 ],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.documentElement;
			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || document.documentElement;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// Expose jQuery to the global object
//window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define( "jquery", [], function () { return jQuery; } );
}

return jQuery;

})(window);


//boilderplate
/*
if(wap_tms.jquery.ver_1_7_plus){  
  (function ($) {
	$(document).ready(function () {
		console.log("MAIN---> DOM loaded: "+ $.fn.jquery);	
	  $("body").on( "click","a,img[data-wap_ref],label[data-wap_ref],button[data-wap_ref],input[data-wap_ref],img[id=_evh-ric-c],img[data-wap],label,button[data-wap],input[data-wap],div.tile-info h2,div.blade-item h2", function (event) {
		alert("click"); 
	  });
	});	
  }($wap));
}
*/
}catch(e){};
if(!utag_condload){try{
//*********************************************************************************************
//* Extension: WAP Global (1)                                                                 *
//*********************************************************************************************

//*********************************************************************************************
//* Functions                                                                                 *
//*********************************************************************************************
if (!utag_condload) { //temp code until Tealium bug fixed - 5/12/14 
    function wa_setGeo(wa_local) {
        var geo = "";
        switch (wa_local) {
            case "us-en": case "ca-en": case "ca-fr":
                //asmo-na
                geo = "asmo-na";
                break;
            case "br-pt": case "xl-es": case "mx-es": case "co-es": case "cl-es": case "cr-es":
                //asmo-lar
                geo = "asmo-lar";
                break;
            case "ae-ar": case "ae-en": case "az-az": case "bg-bg": case "cz-cs": case "de-de": case "dz-ar": case "dz-fr": case "eg-ar": case "eg-en": case "es-es": case "eu-en": case "fr-fr": case "ge-ka": case "hu-hu": case "ie-en": case "il-he": case "it-it": case "jo-ar": case "ke-en": case "lb-ar": case "ma-ar": case "ma-fr": case "ng-en": case "nl-nl": case "pl-pl": case "pt-pt": case "pt-pt": case "ro-ro": case "ru-ru": case "sa-ar": case "sa-en": case "se-sv": case "tr-tr": case "ua-uk": case "uk-en": case "xe-en": case "xr-ar": case "xr-en": case "za-en": case "ch-de":
                //emea
                geo = "emea";
                break;
            case "ap-en": case "au-en": case "hk-en": case "id-id": case "in-en": case "in-hi": case "kr-ko": case "lk-en": case "my-en": case "nz-en": case "ph-en": case "pk-en": case "sg-en": case "th-th": case "tw-zh": case "vn-vi": case "xa-en": case "jp-ja":
                //apac & ijkk now "apj" in 2015
                geo = "apj";
                break;
            case "cn-zh":
                geo = "prc";
                break;
            default:
                //error handling, no match
                geo = "unassigned";
                break;
        }
        return geo;
    }

    function wa_setSurveyId(wa_local) {
        var surveyId = "";
        switch (wa_local) {
            case "us-en": case "ca-en":
                surveyId = "0";
                break;
            case "ca-fr":
                surveyId = "1";
                break;
            case "cn-zh":
                surveyId = "3";
                break;
            case "jp-ja":
                surveyId = "4";
                break;
            case "de-de":
                surveyId = "5";
                break;
            case "br-pt":
                surveyId = "6";
                break;
            case "es-es":
                surveyId = "7";
                break;
            case "tw-zh":
                surveyId = "8";
                break;
            case "kr-ko":
                surveyId = "9";
                break;
            case "au-en": case "xa-en": case "hk-en":
                surveyId = "10";
                break;
            case "uk-en":
                surveyId = "11";
                break;
            case "xl-es":
                surveyId = "12";
                break;
            default:
                //error handling, no match
                surveyId = "";
                break;
        }
        return surveyId;
    }

    //querystring
    /* function tmsGetParamByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          q=location.search;
          console.log("results: " + q);
            console.log("000contains %");
            q=q.replace(/%/g, "%25");
            console.log("q replace1: " + q);
            q=q.replace(/%2525/g, "%25");
            console.log("q replace2: " + q);
          var results = regex.exec(q);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    } */
    function tmsGetParamByName(param, q) {
        if (q) {
            key_array = q.split("?")
            q = "?" + key_array[1];
        }
        else {
            q = wa_doc.location.search || wa_doc.location.hash;
        }
        q = unescape(q);
        if (q) {
            if (/\?/.test(q)) { q = q.split("?")[1]; } // strip question mark
            if (param == null) {
                return urlEncodeIfNecessary(q);
            }
            var pairs = q.split("&");
            for (var i = 0; i < pairs.length; i++) {
                if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
                    return pairs[i].substring((pairs[i].indexOf("=") + 1));
                }
            }
        }
        return "";
    }
    function urlEncodeIfNecessary(s) {
        var regex = /[\\\"<>\.;]/;
        var hasBadChars = regex.exec(s) != null;
        return hasBadChars && typeof encodeURIComponent != wapUndef ? encodeURIComponent(s) : s;
    }

    function getDir(numDir) {
        var pathObjn = (typeof wa_pathObj.dir[numDir] === "undefined") ? "" : wa_pathObj.dir[numDir].toLowerCase();
        pathObjn = (pathObjn == "") ? pathObjn : pathObjn;
        return unescape(pathObjn);
    }

    function cleanHref(linkHref) {
        var noLinkVal = "nav-link";
        linkHref = (linkHref == "undefined") ? noLinkVal : linkHref; //check if Href is undefined
        linkHref = linkHref.replace(/^\#$/, noLinkVal); //check if single hash (starts and ends w/ #)
        linkHref = linkHref.replace(/(#vps\=|#shopthirdparty)(.*)/, ""); //remove any VPS or shopthirdparty hash tags
        linkHref = (linkHref.indexOf("javascript:") > -1) ? noLinkVal : linkHref; //check JS void
        linkHref = linkHref.replace(/^http(.?)\:\/\/(www-ssl|www|www3|ubp-media)\.intel\..+?\//, "/"); //removes https://www-ssl.intel.com/, http://www.intel.com/, https://www.intel.com/, http://www3.intel.com/, also supports TLD
        linkHref = (/\?/.test(linkHref)) ? (linkHref.split('?')[0] + '?' + encodeURIComponent(linkHref.split('?')[1])) : linkHref; //if link contains querystring URL encode querystring part to avoid breaking waTrackAsLink function
        return linkHref;
    }
    function clearnHref(linkHref) { var hrefVal = cleanHref(linkHref); return hrefVal; } //catch outdated function calls

    //regex to get domain
    String.prototype.getHostDomain = function () {
        var value = ''; //return blank for default
        if (/intel\./.test(this)) { //only set if domain is Intel branded, i.e. contains .intel. May append to regEx to support other non-standard Intel branded domains
            var regEx = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im');
            value = this.match(regEx)[1].toString();
        }
        return value;
    }

    function checkReferrerDomain() {
        var wa_hostrefer = wa_doc.referrer.getHostDomain();
        wa_hostrefer = (location.hostname == wa_hostrefer) ? '' : wa_hostrefer; //set if site hostname is different than referrer host name
        return wa_hostrefer;
    }

//DCM Floodlight link-level tracking
    function configDFAfloodiFrame(src, type, cat, tagType, params) {
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        var setTagType = 'standard'; //set default to standard
        var setParams = (typeof params === "undefined") ? '' : ';' + params;
        switch (tagType) {
            case "session": case "ses": //session
                setTagType = utag.data['cp.utag_main_ses_id'];
                break;
            case "unique": //unique
                setTagType = '1;num=' + a;
                break;
            default: //standard
                setTagType = a;
                break;
        }
        var configMultiple = (/,/g.test(src)) ? true : false; //check if more than one floodlight defined
        if(configMultiple){ 
            src2 = src.replace(src.split(',')[0]+",", '');
            type2 = type.replace(type.split(',')[0]+",", '');
            cat2 = cat.replace(cat.split(',')[0]+",", '');
            src = src.split(',')[0];
            type = type.split(',')[0];
            cat = cat.split(',')[0]; 
        }
        var tagType = (tagType == "ses") ? utag.data['cp.utag_main_ses_id'] : a; //set tag as session type or standard
        //cat='+dblCat+';' + dblclkUrlParams + ';ord=' + a + '?';
        var flsdblclkUrl = '//' + src + '.fls.doubleclick.net/activityi;src=' + src + ';type=' + type + ';cat=' + cat + setParams + ';ord=' + setTagType + '?';
        var id = 'dblclk-floodlight-' + Math.floor((Math.random() * 100) + 1);
        
        d = document.createElement('iframe');
        d.setAttribute('id', id);
        d.setAttribute('height', '1');
        d.setAttribute('width', '1');
        d.setAttribute('frameborder', '0');
        d.setAttribute('style', 'display:none');
        d.setAttribute('src', flsdblclkUrl);
        try{
			document.body.appendChild(d);
		}
		catch(e){};
    
       if(configMultiple){
           configDFAfloodiFrame(src2, type2, cat2, tagType, params); //multiple floodlights, iterate until all loaded
       }
    }

    //global scope vars
    var wa_doc = document,
    wa_win = window,
    vpsIntel = { config: function (vps) { } }, //legacy VPS support, keep to prevent error until all VPS code removed
    wa_component_name,
    ga_payload = { "dimension": {}, "metric": {} }, //GA component name
    wap_tms = (typeof wap_tms !== "undefined") ? wap_tms : {}; //make sure wap_tms is object (should be set in loader script)
    wap_tms.eloqua = {}; //Set Eloqua Object

    //cookie functions
    var tms_doc = wa_doc; function tmsSetCookieDomain() { var cookieDomain = location.hostname; cookieDomain = cookieDomain.replace(/(.*)\.intel/, ".intel"); return cookieDomain; } function tmsSetCookie(b, c) { var a = new Date(); a.setTime(a.getTime() + (365 * 24 * 3600 * 1000)); tms_doc.cookie = b + "=" + escape(c) + "; expires=" + a.toGMTString() + "; path=/; domain=" + tms_domain } function tmsNewId() { var a = "{"; for (var b = 1; b <= 32; b++) { var c = Math.floor(Math.random() * 16).toString(16); a += c; if ((b == 8) || (b == 12) || (b == 16) || (b == 20)) { a += "-" } } a += "}"; return a }; function tmsGetCookie(d) { var b = d + "="; var f = b.length; var a = tms_doc.cookie.length; var e = 0; while (e < a) { var c = e + f; if (tms_doc.cookie.substring(e, c) == b) { return tmsGetCookieVal(c) } e = tms_doc.cookie.indexOf(" ", e) + 1; if (e == 0) { break } } return null }; function tmsGetCookieVal(b) { var a = tms_doc.cookie.indexOf(";", b); if (a == -1) { a = tms_doc.cookie.length } return unescape(tms_doc.cookie.substring(b, a)) };
    
    //method to pull 'utag_main' cookie namespace values before Tealium loads
    //this can be used to set UDO elements early for initial load rules eval
    //example code: utag_data.test = (typeof wap_tms.cookie.RC("utag_main").elqid === "undefined") ? '' : wap_tms.cookie.RC("utag_main").elqid;
    wap_tms.cookie = {};
    wap_tms.cookie.DB= function(a, b) {};
    wap_tms.cookie.GV=function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      };
    wap_tms.cookie.decode=function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){wap_tms.cookie.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
    };
    wap_tms.cookie.RC= function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = wap_tms.cookie.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = wap_tms.cookie.decode(h[i]);
                    v = h
                  } else v = wap_tms.cookie.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){wap_tms.cookie.DB(er)};
              }
              o[ck] = {};
              for (f in wap_tms.cookie.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } 
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
     };

    //*********************************************************************************************
    //* CONFIG                                                                                    *
    //*********************************************************************************************

    //set wa_geo in UDO
    utag_data.wa_local = utag_data.wa_local.toLowerCase();
    utag_data.wa_local = (utag_data.wa_local == 'set_me') ? 'unassigned' : utag_data.wa_local;
    utag_data.wa_geo = wa_setGeo(utag_data.wa_local);

    //set Post Tag in UDO
    if (typeof utag_data.postTags != 'undefined'){
            utag_data.wp_post_tags = utag_data.postTags.toString();
    }

    //set wa_survey_id in UDO
    utag_data.wa_survey_id = wa_setSurveyId(utag_data.wa_local);
    var onSiteGeo = utag_data.wa_survey_id; //set as global var so survey tag can use

    //set wa_location and wa_language in UDO
    (function () {
        if (/\-/.test(utag_data.wa_local)) {
            var tmpLocal = utag_data.wa_local.split("-");
            utag_data.wa_location = tmpLocal[0];
            utag_data.wa_language = tmpLocal[1];
        }
        else {
            utag_data.wa_location, utag_data.wa_language = "unassigned";
        }
    })();

    //set org values based on pathname in UDO
    var wa_path_start = (typeof wa_path_start !== "undefined") ? wa_path_start : 1; //check if path folder start is defined, if not set to first folder (for org variables)
    function wa_UrlPathName(strURL) {
        var pathObject = new Object();
        pathObject.dir = new Array();
        i = 1;
        pathObject.fullDir = "/";
        strURL = strURL.replace(/^\//, "");
        while ((node = strURL.match(/^(.+?)(?:\/)+(.*)/)) && node[0].length) {
            pathObject.dir[i++] = node[1];
            pathObject.fullDir += node[1] + "/";
            strURL = node[2];
        }
        pathObject.fileName = strURL;
        return pathObject;
    }
    var wa_pathObj = wa_UrlPathName(location.pathname);
    utag_data.wa_site_id = utag_data.wa_section + ":" + utag_data.wa_geo + ":" + utag_data.wa_local;
    utag_data.wa_org2 = utag_data.wa_geo + ":" + utag_data.wa_local; //ex. asmo-lar:br-pt
    utag_data.wa_org3 = utag_data.wa_org2 + ":" + utag_data.wa_section; //ex. asmo-lar:br-pt:intc
    wap_tms.buildOrg = function (start) {
        utag_data.wa_org4 = (typeof wa_pathObj.dir[start] === "undefined") ? utag_data.wa_org3 : utag_data.wa_org3 + ":" + wa_pathObj.dir[start].toLowerCase();
        utag_data.wa_org5 = (typeof wa_pathObj.dir[start + 1] === "undefined") ? utag_data.wa_org4 : utag_data.wa_org4 + ":" + wa_pathObj.dir[start + 1].toLowerCase();
        utag_data.wa_org6 = (typeof wa_pathObj.dir[start + 2] === "undefined") ? utag_data.wa_org5 : utag_data.wa_org5 + ":" + wa_pathObj.dir[start + 2].toLowerCase();
        utag_data.wa_org7 = utag_data.wa_org6.split(utag_data.wa_org2 + ":")[1];
        utag_data.wa_org8 = (utag_data.wa_geo == "prc") ? utag_data.wa_geo + ":" + utag_data.wa_org7 : "row:" + utag_data.wa_org7;
    }
    wap_tms.buildOrg(wa_path_start);
    //set wa_do_not_track in UDO
    try {
        var isDNT = navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1";
        if (isDNT) {
            utag_data.wa_do_not_track = 'enabled';
        }
        else {
            utag_data.wa_do_not_track = 'disabled';
        }
    } catch (err) { }

    //visit ID cookie
    var tms_domain = tmsSetCookieDomain(), //domain for cookie setting
    tms_cookieVal = tmsGetCookie('wa_visitId'),
    tms_visitId = (tms_cookieVal == null) ? tmsNewId() : tms_cookieVal;
    tmsSetCookie('wa_visitId', tms_visitId);
    utag_data.wa_visit_id = tms_visitId;

    //set querystring params in UDO
    if (tmsGetParamByName('wapkw')) { utag_data.wa_internal_search_referrer = tmsGetParamByName('wapkw'); }
    if (tmsGetParamByName('cid')) { utag_data.wa_campaign_cid = tmsGetParamByName('cid'); }
    if (tmsGetParamByName('icid')) { utag_data.wa_internal_promotion = tmsGetParamByName('icid');}  
    if (tmsGetParamByName('postid')) { utag_data.wa_sprinklr_id = tmsGetParamByName('postid'); }
    if (tmsGetParamByName('eid')) { utag_data.wa_external_id = tmsGetParamByName('eid'); }
    if (tmsGetParamByName('intel_term')) { utag_data.search_keyword = tmsGetParamByName('intel_term'); }
    
    //set gawap_icid cookie value
	wap_tms.gawap_icid = (typeof utag_data.wa_internal_promotion !== "undefined") ? utag_data.wa_internal_promotion : '';
	//set gawap_cid cookie value
    wap_tms.gawap_cid = (typeof utag_data.wa_campaign_cid !== "undefined") ? utag_data.wa_campaign_cid : wap_tms.gawap_cid;
	//Create gawap_icid cookie 
	if (wap_tms.gawap_icid !== "") {document.cookie = "gawap_icid=" + wap_tms.gawap_icid + "; path=/;domain=" + tms_domain;}
    //Create gawap_cid cookie 
    if(wap_tms.gawap_cid){ document.cookie="gawap_cid="+wap_tms.gawap_cid+"; path=/;domain=" + tms_domain; }

	
	
    //set Eloqua Contact ID (long version)
    function genContactId(id) {
        if (id !== "") {
            var tmpId = ("000000000000" + id).slice(-12);
            var elqPrefix = (/dev-/g.test(location.hostname)) ? elqPrefix = 'CINSX' : elqPrefix = 'CINCP'; //set Eloqua prefix for Contact ID
            tmpId = elqPrefix + tmpId;
        }
        else { tmpId = ""; }
        return tmpId;
    }
//set Eloqua Contact ID (short version)
    function genContactIdShort(id) {
        var shortid = id.replace(/(.*)((-)?^(CINSX|CINCP)0+(?=\d))/, '');
        return shortid;
    }
    //1) check for eloqua cookie
    try{
        utag_data.wa_elq_id_short = (typeof wap_tms.cookie.RC("utag_main").elqid == "undefined") ? '' : wap_tms.cookie.RC("utag_main").elqid;
        if(utag_data.wa_elq_id_short!==''){utag_data.wa_elq_id = genContactId(utag_data.wa_elq_id_short);}
    }catch(e){};
    //2) check for eloqua querystring
    if (tmsGetParamByName('elq_cid')) {
        utag_data.wa_elq_id = genContactId(tmsGetParamByName('elq_cid'));
        utag_data.wa_elq_id_short = genContactIdShort(tmsGetParamByName('elq_cid'));
    }


    //set wa_env if set. wa_env configures analytics to send data to 'test' reporting
    var wa_env = true; //set default to true, data will be sent to production
    if (typeof utag_data.wa_env !== "undefined") {
        if (utag_data.wa_env == 'prod') { wa_env = true; } else { wa_env = false; } //set to 'true' when publishing to production, and 'false' when testing in pre-prod
    }

    //Config default settings for tag loading
    utag_data.load_bluekai = 'true';
    utag_data.load_eloqua = 'true';
    utag_data.load_ghostery = 'true';
    utag_data.load_audiencestream = 'false';
    utag_data.load_iframe_parameters = 'false';
																																																																															 
    //Custom Analytics Config
    wap_tms.custom = wap_tms.custom || {}; //define object if not already defined
    wap_tms.custom.code = false; //true or false: custom code or default code
    wap_tms.custom.youtube = false; //true or false: enable YouTube tracking
    wap_tms.custom.brightcove = false; //true or false: enable HTML 5 Tracking
    wap_tms.custom.gigya = false; //true or false: add tracking Gigya widget
    wap_tms.custom.facebook = false; //true or false: add event handlers for Facebook
    wap_tms.custom.twitter = false; //true or false: add event handlers for Twitter
    wap_tms.custom.iframe = false; //true or false: enable iframe tracking - TBD
    wap_tms.custom.vimeo = false; //true or false: enable YouTube tracking
    wap_tms.custom.video_duration = 0;// variable to capture video duration
    //true or false: enable adBlockers tracking
    wap_tms.custom.adblockers = {
        check : false
      };
    wap_tms.custom.init = function (fname) {
        //config custom code (optional)
        /*
          function example:
          wap_tms.custom.myFunctionNameHere = function () {
              //config here     
          };
          
          call function example: 
          //wap_tms.custom=wap_tms.custom||{}; //if config in TMS loader script (before object defined)
          wap_tms.custom.init('myFunctionNameHere');
        */
        try {
            if (typeof this[fname] == 'function') {
                this[fname]();
            }
        }
        catch (err) { };
    };

    //init content classification data elements and set to blank. Elements will be set to values in 1) lookup table 2) set data ext 3) custom code
    utag_data.content_audience = "unassigned";
    utag_data.content_sub_audience = "unassigned";
    utag_data.content_program = "unassigned";
    utag_data.content_org_initiative = "unassigned";
    utag_data.content_sub_org_initiative = "unassigned";
    utag_data.content_product = "unassigned";
    utag_data.content_ter_initiative = "unassigned";
    utag_data.content_sub_ter_initiative = "unassigned";
    utag_data.content_industry = "unassigned";
    utag_data.wa_site_id_audience = utag_data.content_audience + ":" + utag_data.content_sub_audience + ":" + utag_data.content_org_initiative + ":" + utag_data.content_sub_org_initiative + ":" + utag_data.content_program + ":" + utag_data.content_product + ":" + utag_data.wa_site_id;

    //set referrer domain (GA only)
    wap_tms.referrer = checkReferrerDomain();

    //START jquery config
    wap_tms.jquery = {};
    wap_tms.jquery.ver_1_7_plus = false; //set default to false
    wap_tms.jquery.chk_version = function (ver) {
        var ver = ver + "", //convert (make sure) value is string so we can use regex
        jVer = ver.split("."), //remove all .
        jVerNum1 = Number(jVer[0]), //set first number to test
        jVerNum2 = Number(jVer[1]), //set second number to test
        ver_1_7_plus = false; //set default to false
        if (jVerNum1 >= 2) { ver_1_7_plus = false; } //check if version 2.x is being used, if 2 or greater set to false
        else {
            if (jVerNum2 >= 7) { ver_1_7_plus = true; } //if jQuery 1.7 set to true
            else { ver_1_7_plus = false; } //if jQuery 1.7 or lower set to false
        }
        return ver_1_7_plus;
    };

    //first check: is $wap object available from TMS loader or TMS pre-loader JavaScript?
    if (typeof $wap !== 'undefined') {
        wap_tms.jquery.ver_1_7_plus = wap_tms.jquery.chk_version($wap.fn.jquery); //get version
    }
    else {
        var $wap = {}; //define $wap since its not yet defined
    }

    //second check: is jQuery object available?
    if (!wap_tms.jquery.ver_1_7_plus) { //only check if needed
        if (typeof jQuery !== 'undefined') {  //check if jQuery object is available
            wap_tms.jquery.ver_1_7_plus = wap_tms.jquery.chk_version(jQuery.fn.jquery); //get version
            if (wap_tms.jquery.ver_1_7_plus) { //if version 1.7+ set $wap object
                wap_tms.custom.jquery = true;
                $wap = jQuery; //create wap reference
            }
        }
    }

    //third check: is jQuery_1_10_1 available from global header? //disabled as this code has issues
    /*if(!wap_tms.jquery.ver_1_7_plus){ //only check if needed
      if(typeof load_jquery1_10_1 == 'function'){
        console.log("load_jquery1_10_1");
        load_jquery1_10_1();
        $wap=window.INTELNAV.jQuery_1_10_1;
        $wap.noConflict();
        //window.INTELNAV.jQuery_1_10_1;
        //$wap=$wapTemp;
        //$wapref=$wapTemp; 
      }
    }*/
    //END jquery config

    //START Events config
    wap_tms.events = {};
    wap_tms.events.init = function (type) { //called after GA Pageview sent, used to execute code in sequence

		if (type == 'ga') {
            //init Eloqua Registartion code if wap_tms.eloqua.regstart is defined, if so lib-eloqua.registration is loaded. Fires Eloqua init code if available
            if (typeof wap_tms.eloqua.regstart !== 'undefined') { wap_tms.eloqua.helpers.ready(); } //code loaded, safe to run
			for (var key in wap_ga.udo) {
				if (wap_ga.udo.hasOwnProperty(key)) {
					if (/dimension/.test(key)) {
						var dimVal = key.split("dimension")[1] + ",page";
						var gk = wap_ga.udo[key];
						if(gk != null){
							if (/24|50|51|52|53|54|76|100|101|102|103|104|105/.test(key)) {/*don't convert to lowercase*/ }
							else { gk = gk.toLowerCase(); } //convert to lowercase      
							ga_payload.dimension[dimVal] = gk;
						}					               
					}
					if (/metric/.test(key)) {
						var dimVal = key.split("dimension")[1] + ",hit";
						ga_payload.metric[dimVal] = wap_ga.udo[key];
					}
					//console.log(key + " = " + wap_ga.udo[key]);
				}			    
			}
        }
    };
    //END Events config

    //START media tag config
    wap_tms.floodlight = {};
    wap_tms.floodlight.per = {}; //PER KPI config
    wap_tms.floodlight.pir = {}; //PIR KPI config
    wap_tms.floodlight.fireTags = false; //set default not to fire tag
	wap_tms.floodlight.config = function (geo) {
        var adId, perT, perC, pirT, pirC = "";
        switch (geo) {
            case "asmo-na":
                adId = "1873234";
                perT = "IMRTr0";
                perC = "PEREv0";
                pirT = "IMRTr0";
                pirC = "PIREv0";
                wap_tms.floodlight.fireTags = true;
                break;
            case "prc":
                adId = "2218289";
                perT = "IMRprc";
                perC = "PEREv0";
                pirT = "IMRprc";
                pirC = "PIREv0";
                wap_tms.floodlight.fireTags = true;
                break;
            case "asmo-lar":
                adId = "5027533,3703602";
                perT = "pcref0,perev0";
                perC = "mcg_b0,intel000";
                pirT = "0";
                pirC = "0";
                wap_tms.floodlight.fireTags = true;
                break;
            case "apj":
                adId = "2236808";
                perT = "intel0";
                perC = "intel00j";
                pirT = "0";
                pirC = "0";
                wap_tms.floodlight.fireTags = true;
                break;
             case "emea":
                adId = "2238778";
                perT = "b2b";
                perC = "intel000";
                pirT = "0";
                pirC = "0";
                wap_tms.floodlight.fireTags = true;
                break;      
             /*default:
                  //error handling, no match
                break;*/
        }
        //config obj
        wap_tms.floodlight.adId = adId;
        wap_tms.floodlight.per.type = perT;
        wap_tms.floodlight.per.category = perC;
        wap_tms.floodlight.pir.type = pirT;
        wap_tms.floodlight.pir.category = pirC;
    }
    wap_tms.floodlight.config(utag_data.wa_geo); //config
    wap_tms.floodlight.config(utag_data.wa_geo); //config
    //END media tag config

    //Tealium Override rules object
    window.utag_cfg_ovrd = window.utag_cfg_ovrd || {}; // Create 'utag_cfg_ovrd' object if not created
    window.utag_cfg_ovrd.load_rules_at_wait = true; // Set load rule to re-evaluate after 'all tags' scoped extensions
    //example set method: utag_cfg_ovrd['property'] = value;

    //Error handling
    wap_tms.error = {};
    wap_tms.error.type = '';
    wap_tms.error.set = function (error, errorType) {
        error = error.substr(0, error.length - 1); //remove ,
        wap_tms.error.type += "::" + errorType + error;
        wap_tms.error.type = wap_tms.error.type.replace(/^::/, ''); //remove only first instance of ::
        ga_payload.dimension['66,page'] = wap_tms.error.type;
        ga_payload.dimension['66,hit'] = wap_tms.error.type; //also set for events, i.e. JavaScript page error which occurs after pageview
        ga_payload.metric['57,hit'] = '1';
    };
    
    //WAP Version Tracker, call format: wap_tms.version.set('2.0,', 'ga:');
    wap_tms.version = {};
    wap_tms.version.type = '';
    wap_tms.version.set = function (ver, verType) {
        ver = ver.substr(0, ver.length - 1); //remove ,
        wap_tms.version.type += "," + verType + ver;
        wap_tms.version.type = wap_tms.version.type.replace(/^,/, ''); //remove only first instance of ::
        //console.log("wap_tms.version.type: " + wap_tms.version.type);
        ga_payload.dimension['61,page'] = wap_tms.version.type;
    };
	
	//Content Group, call format: wap_tms.content_group.set('android', 'ssg'); MUST contain : in verType last char
    wap_tms.content_group = {};
    wap_tms.content_group.type = '';
    wap_tms.content_group.set = function (ver, verType) {
        ver += '|';
		verType += ':';
		ver = ver.substr(0, ver.length - 1); //remove ,
        wap_tms.content_group.type += "|" + verType + ver;
        wap_tms.content_group.type = wap_tms.content_group.type.replace(/^\|/, ''); //remove only first instance of ::
		utag_data.wa_custom_content_group = wap_tms.content_group.type;
		//console.log("utag_data.wa_custom_content_group: " + utag_data.wa_custom_content_group);
    };
    
    
    //remove email (if present)
    wap_tms.cleanPii = function(str,type){
        if(/\@/.test(str)){ //if @ present in string
            str=str.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ig, 'removed@email'); //if email found in querystring, replace email with 'removed@email'  
            wap_tms.error.set(type+',', 'pii.email:');
        }
        return str;
    };
    
    //TMS Sync loading opt - part 2 (part 1 in TMS loader script)
    if(typeof wap_tms.utility !== "undefined"){ //make sure latest version
        utag_data.load_method = (typeof utag_data.load_method !== "undefined") ? utag_data.load_method : '';
        if(utag_data.load_method=="sync"){ //make sure utag.js is loaded as sync
            wap_tms.utility.endTime = new Date().getTime();
            var timeSpent = wap_tms.utility.endTime - wap_tms.utility.startTime;
            //console.log("timeSpent: " + timeSpent+"\n:wap_tms.utility.endTime: " + wap_tms.utility.endTime + "\nwap_tms.utility.startTime: " + wap_tms.utility.startTime);
            if(timeSpent<wap_tms.utility.tmsTimeout){ //remove cookie
                wap_tms.utility.wapSetCookie('tms_timeout','',0);   
                //console.log("Cookie removed");
            }
            else{ //GA error handling capture here
                //console.log("Timeout occured");
                wap_tms.error.set('sync load timeout,', 'tms.load:');
            }
        }
    }   
    
    //gigya share function for gigya share starts here
    function trackGigyaShare(eventObject, provider, url) {
        //{"eventName":"sendDone","providers":"facebook-like","userMessage":"","targetURL":"http://blogs.intel.com/evangelists/2015/03/03/iot-trends-europe/","source":"showShareBarUI","sourceContainerID":"share-bar"} 
        //{"eventName":"sendDone","providers":"facebook","userMessage":"","targetURL":"http://blogs.intel.com/evangelists/2015/03/03/iot-trends-europe/","source":"showShareBarUI","sourceContainerID":"gig_1425498563160_showSimpleShareUI"}
        //{"eventName":"sendDone","providers":"twitter","userMessage":"","targetURL":"http://blogs.intel.com/evangelists/2015/03/03/iot-trends-europe/","source":"showShareBarUI","sourceContainerID":"gig_1425498563160_showShareUI_container"} 
                                ga_payload.dimension['19,hit'] = "gigya-" + (eventObject.sourceContainerID).toLowerCase();
        if (provider == "facebook-like" || provider == "google-plusOne") {
            provider = provider.split("-");
                                                trackGaEvent('Like', provider[0], eventObject.targetURL);                                           
        }
        else if (provider == "print") {
            trackGaEvent('Offline', 'print', url);
        }
        else {
            if (provider.indexOf("google") > -1){provider = "google";}
                                                if(wap_tms.custom.voteMetadata && wap_tms.custom.socialShareComponentID && eventObject.sourceContainerID.toLowerCase() === wap_tms.custom.socialShareComponentID){
                                                                trackGaEvent('Share', provider, eventObject.targetURL,null,false,'', wap_tms.custom.voteMetadata); 
                                                }              
                                                else{
                                                                trackGaEvent('Share', provider, eventObject.targetURL);
                                                }                                                                              
        }
    }
    //gigya function ends here

    
    //Set browser & OS
    (function (window) {
        {
            var unknown = '-';

            //browser
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browser = navigator.appName;
            var version = '' + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;

            // Opera
            if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
                // MSIE
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            }
                // Chrome
            else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            }
                // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
                // Firefox
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            }
                // MSIE 11+
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            }
                // Other browsers
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            // trim the version string
            if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }

            // system
            var os = unknown;
            var clientStrings = [
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows ME', r: /Windows ME/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Linux', r: /(Linux|X11)/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }
        }
        utag_data.user_os = (os + " " + osVersion).toLowerCase();
        utag_data.user_browser = (browser + " " + version).toLowerCase();
        utag_data.user_agent = navigator.userAgent.toLowerCase();
    }(this));
    
//**********************************************************************************************************************************************************************
//* Universal Event Tracking Interface                                                                                                                                 *
//**********************************************************************************************************************************************************************
wap_tms.version.set('1.4,','utf:'); //change version for each update, minor for small update, major for big update
wap_tms.events.unique_per = true; //flag to only set unique page PER 1x per page
wap_tms.events.unique_pir = true; //flag to only set unique page PIR 1x per page
wap_tms.events.unique_pci = true; //flag to only set unique page PCI 1x per page
wap_tms.events.unique_g4 = true; //flag to only set unique page PER: Click to Registration 1x per page
wap_tms.events.unique_g5 = true; //flag to only set unique page PER: Registration 1x per page
wap_tms.events.unique_g7 = true; //flag to only set unique page PER: Video Midpoints 1x per page
wap_tms.events.unique_g8 = true; //flag to only set unique page PER: Downloads 1x per page
wap_tms.events.unique_g9 = true; //flag to only set unique page PER: Social 1x per page
wap_tms.events.unique_g10 = true; //flag to only set unique page PER: Logins 1x per page
wap_tms.events.unique_g11 = true; //flag to only set unique page PIR: Third Party Shop 1x per page
wap_tms.events.unique_g12 = true; //flag to only set unique page PIR: Third Party Buy Now 1x per page
wap_tms.events.unique_g13 = true; //flag to only set unique page PIR: Click to Intel Shop 1x per page
wap_tms.events.unique_g14 = true; //flag to only set unique page PER: Scroll 50% 1x per page
wap_tms.events.g1='PIR'; //map DMF KPI to friendly name
wap_tms.events.g2='PER'; //map DMF KPI to friendly name 
wap_tms.events.g4='PER: Registration'; //map DMF KPI to friendly name
wap_tms.events.g5='PER: Click to Registration'; //map DMF KPI to friendly name
wap_tms.events.g6='PER: Page Content Interaction'; //map DMF KPI to friendly name
wap_tms.events.g7='PER: Video Midpoints'; //map DMF KPI to friendly name
wap_tms.events.g8='PER: Downloads'; //map DMF KPI to friendly name
wap_tms.events.g9='PER: Social'; //map DMF KPI to friendly name
wap_tms.events.g10='PER: Logins'; //map DMF KPI to friendly name
wap_tms.events.g11='PIR: Third Party Shop'; //map DMF KPI to friendly name
wap_tms.events.g12='PIR: Third Party Buy Now'; //map DMF KPI to friendly name
wap_tms.events.g13='PIR: Click to Intel Shop'; //map DMF KPI to friendly name
wap_tms.events.g14='PER: Scroll 50%'; //map DMF KPI to friendly name
wap_tms.events.tog1='pir'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog2='per'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog4='per-registration'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog5='per-clicktoregistration'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog6='per-pci'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog7='per-video50'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog8='per-downloads'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog9='per-social'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog10='per-login'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog11='pir-shop3rdparty'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog12='pir-buynow'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog13='pir-intelshop'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog14='per-scroll_50'; //target mbox conversion, fired only 1x per page load
wap_tms.events.rlsa_page=(utag_data.wa_geo!="prc") ? true : false; //enable data to be sent to RLSA property - page level, temp solution until Google can support
wap_tms.events.rlsa_link=false; //enable data to be sent to RLSA property - link level, temp solution until Google can support

//DMF Points
wap_tms.events.dmfpoints = { 
    none: {val:0,name:'no points'},
    scroll25: {val:3,name:'scroll: 25%'},
    scroll50: {val:5,name:'scroll: 50%'},
    scroll75: {val:5,name:'scroll: 75%'},
    scroll100: {val:5,name:'scroll: 100%'},
    pageload: {val:1,name:'click: page load'},
    interaction: {val:1,name:'click: content interaction'},
    incontent: {val:2,name:'click: in-content'},
    toolstart: {val:10,name:'click: tool start'},
    toolcomplete: {val:10,name:'click: tool complete'},
    register: {val:30,name:'click: register'},
    login: {val:20,name:'click: login'},
    exitother: {val:10,name:'click: exit to non-pir site'},
    exitpir: {val:20,name:'click: exit to pir sites'},
    exitbuy: {val:30,name:'click: exit buy now'},
    downloadexe: {val:5,name:'download: driver'},
    download: {val:20,name:'download: content'},
    share: {val:20,name:'social: share'},
    post: {val:20,name:'social: post'},
    rate: {val:10,name:'social: rate'},
    chat: {val:20,name:'social: chat'},
    email: {val:10,name:'social: email'},
    comment: {val:20,name:'social: comment'},
    vid_s_0: {val:5,name:'video(s): start'},
    vid_s_25: {val:5,name:'video(s): 25%'},
    vid_s_50: {val:5,name:'video(s): 50%'},
    vid_s_75: {val:5,name:'video(s): 75%'},
    vid_s_95: {val:5,name:'video(s): 95%'},
    vid_m_0: {val:5,name:'video(m): start'},
    vid_m_25: {val:10,name:'video(m): 25%'},
    vid_m_50: {val:10,name:'video(m): 50%'},
    vid_m_75: {val:10,name:'video(m): 75%'},
    vid_m_95: {val:10,name:'video(m): 95%'},
    vid_l_0: {val:5,name:'video(l): start'},
    vid_l_25: {val:15,name:'video(l): 25%'},
    vid_l_50: {val:15,name:'video(l): 50%'},
    vid_l_75: {val:15,name:'video(l): 75%'},
    vid_l_95: {val:15,name:'video(l): 95%'},
    vidsize: {t: 9,s: 10,m: 61,l: 221}, //video size to determine points t=threashold(0-15), s=small(15-60), m=medium(61-300), l=large(301+). Defined as in seconds.
    setvidesize : function(vd,val){
        /*assign video points
            vd = [number] video duration
            val: [string] video index reference value, i.e. 'vid_m_50', 'vid_l_100', etc.
        */
        var vidObj = {}; //return object to assign to another object in trackGaEvent
        if (vd == 0 || vd <= this.vidsize.t) {
          vidObj.dimension149 = this.none.name;
          delete vidObj.metric85;
        }
        if(vd >= this.vidsize.t){ //meets minimal threashold, assign video points
            if(vd >= this.vidsize.t){ //small
                var ref = this["vid_s_"+val];
                vidObj.dimension149 = ref.name;
                vidObj.metric85 = ref.val;
            }
            if(vd >= this.vidsize.m){ //medium
                var ref = this["vid_m_"+val];
                vidObj.dimension149 = ref.name;
                vidObj.metric85 = ref.val;
            }
            if(vd >= this.vidsize.l){ //large
                var ref = this["vid_l_"+val];
                vidObj.dimension149 = ref.name;
                vidObj.metric85 = ref.val;
            }
        }
        return vidObj;
    }
};

//var ttest=wap_tms.events.dmfpoints.setvidesize(0,'100');
//console.log("tttest: " + ttest.dimension149 + "  tttest-val: " + ttest.metric85);

//**********************************************************************************************************************************************************************
//* trackGaEvent() Universal Event capture function                                                                                                                    *
//**********************************************************************************************************************************************************************
/*
Parameter name      |   Type        |   Example Value   |   Description 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Required Parameter
****************** 
category                string          Social              Sets the Event Category. See GA tracking schema or Event tracking documentation for more info.  
action                  string          share               Sets the Event Action. See GA tracking schema or Event tracking documentation for more info.  

Optional Parameter
****************** 
opt_label               string          facebook            Sets the Event Label. See GA tracking schema or Event tracking documentation for more info.  
opt_value               integer         5                   Sets the Event Value for hit. Set to null if no value. See GA tracking schema for more info.  
opt_noninteraction      boolean         true                Sets the Event hit to determine if we want it send as non-interactive. The default is set to false
                                                            which sends the hit as interactive. See GA tracking schema for more info of non-interaction event types.  
opt_callback            string          callbackFunction    Assign a callback function to be called after event hit occurs. Does not accept params. Set to '' to not call
opt_params              string          {'ga':{'dimension199':'test3','dimension198':'test1'},'target': {'test1':'test1','test2':'test2'}} 
                                                            opt-parms: format is javascript object literal. Use 'ga' to set 'go' object and 'target' to set 'to' object

EXAMPLEs: 
trackGaEvent('category','action','opt_label',null,true,'opt_callback', {'ga':{'dimension199':'test3','dimension198':'test1'}}); //example of all option parameters defined
trackGaEvent('category','action','opt_label'); //most events contain category, action & label
trackGaEvent('category','action'); //at a minimum category & action must always be defined
*/
function trackGaEvent(category, action, opt_label, opt_value, opt_noninteraction, opt_callback, opt_params) {
    //Configure Vars
    var orginal_action = action, //store original variable case in case we don't want to always lowercase, optional (best practice is to lowercase)
    orginal_label = opt_label, //store original variable case in case we don't want to always lowercase, optional (best practice is to lowercase)
    action = action.toLowerCase(), //convert action to lowercase
    opt_label = (typeof opt_label == "undefined") ? '' : opt_label.toLowerCase(), //if label is defined convert to lowercase, else set to empty string
    eventMap = (category + ":" + action).replace(/\s/g, '').toLowerCase() + "", //eventMap format = category:action (remove all spaces + convert to lowercase). This is used to match specific actions for configuration
    go={}, //GA object (go). This is used to store configuration for send tracker
    to={}, //Target object (to). This is used to store configuration for send tracker
	ao={}, //AudienceStream object (ao). This is used to store configuration for send tracker
	ao_track = true, //AudienceStream opt-in. The default is set to true, set to false for hits you don't want to send to AudienceStream
    pts=wap_tms.events.dmfpoints, //shortcut obj reference to reduce code size
    debug=false, //debug, enabled/disabled by cookie
    defaultTracking = false;
    wap_tms.events.rlsa_link=false; //reset default to false
    
    //add opt_params if passed
    if (typeof opt_params !== "undefined"){
        if (typeof opt_params['ga'] !== "undefined"){go=opt_params['ga'];}; //GA
        //if (typeof opt_params['target'] !== "undefined"){to=opt_params['target'];}; //Target [not yet supported, example only]
    }
     
    //config GA Object (go)
    go.eventCategory = category;
    go.eventAction = action;
    go.eventLabel = opt_label;
    if(opt_value!=''){go.eventValue = opt_value;}
    go.contentGroup1 = utag_data.content_audience;
    go.contentGroup2 = utag_data.content_sub_audience;
    go.dimension19 = (wa_component_name !== "") ? wa_component_name : 'no-component';  //set component name to a defalut value of 'no-component' if not set
    go.hitCallback = function () {if (typeof opt_callback !== "undefined"){if(opt_callback!=''){opt_callback();}}} //optional call back function     
    //DEBUG
        //for(var key in opt_params){if(opt_params.hasOwnProperty(key)) {var obj = opt_params[key];for (var prop in obj){if(obj.hasOwnProperty(prop)){console.log(prop + "=" + obj[prop]);}}}} //debug JavaScript object 'opt_params'
        //console.log("eventMap: " + eventMap); //debug eventnamp name
	
	//POINTS
    //set interaction and incontent. Note: these may get overriden by switch statement
    if(/(^http|\/)/.test(opt_label)){ //if event label contains 'http' or '/' then set to incontent point value
        if(/(^http)/.test(opt_label)){ //set exits that are not Shop or Third-party
            if(/^http(.*)intel\./.test(opt_label)){ //check if Intel absolute URL
                go.dimension149=pts.incontent.name;go.metric85=pts.incontent.val;
            }
            else{
                go.dimension149=pts.exitother.name;
                go.metric85=pts.exitother.val;
            }
        }
        else{go.dimension149=pts.incontent.name;go.metric85=pts.incontent.val;}
    }
    else{ //set to interaction, i.e. '#', 'nav-link' or other value
        go.dimension149=pts.interaction.name;
        go.metric85=pts.interaction.val;
    }

//CONFIGURE specific event for each tag 
    switch (true) {
        case (/(^components:click)/.test(eventMap)):
            go.dimension27 = 'click';
            go.dimension28 = action;
            go.dimension29 = action.split(': ')[1] + ':' + opt_label;
            go.metric30 = 1;
            break;
        case (/videos:video:/.test(eventMap)):
            go.eventCategory = 'Videos';
            go.dimension27 = 'video';
            go.eventLabel = orginal_label; //contains ID, do not lowercase
            var dimArray = orginal_label.split(':'), vid29 = '', vid64 = '';
            for (var i = 0; i < dimArray.length; i++) {
                dimArray[i] = dimArray[i].replace(/^\s*/, "").replace(/\s*$/, ""); //remove white space
                if (i == 0) {if (dimArray[i] !== wap_ga.undef) {vid29 = dimArray[i].toLowerCase();}}
                if (i == 2) {if (dimArray[i] !== wap_ga.undef) {vid29 += ":" + dimArray[i];vid64 = dimArray[i];}}
                if (i == 3) {if (dimArray[i] !== wap_ga.undef) {vid29 = dimArray[0].toLowerCase();vid64 = '';}}//title contains ":"
            }
            go.dimension29 = vid29;
            go.dimension64 = vid64;
            var vd = Math.round(wap_tms.custom.video_duration), vidObj,vidSize='unassigned';
            go.dimension26 = vd; //set video duration as custom metric (test)
            
            if(vd <= 60){vidSize='small';} 
            if(vd > 60) {vidSize='medium';} 
            if(vd > 220) {vidSize='large';}
            go.dimension85 = vidSize;
            
            switch (true) {
                case (/play/.test(eventMap)):
                    gawapGoal('aer', 'vidstart'); //aer goal
                    go.dimension28 = 'video:start';
                    go.metric15 = 1;
                    go.metric83 = vd;//set video duration for on play
                    vidObj=pts.setvidesize(vd,'0'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    break;
                case (/25/.test(eventMap)):
                    go.dimension28 = 'video:25';
                    go.dimension28 = 'video:25';
                    go.metric84 = 1;
                    vidObj=pts.setvidesize(vd,'25'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    if (wap_tms.events.unique_g7) {
                        go.metric68 = 1;
                        to.g7 = wap_tms.events.tog7;
                        wap_tms.events.unique_g7 = false;
                    }
                    go.dimension79 = wap_tms.events.g7;
                    break;
                case (/50/.test(eventMap)):
                    gawapGoal('aer', 'vidmid'); //aer goal
                    go.dimension28 = 'video:50';
                    go.dimension28 = 'video:50';
                    vidObj=pts.setvidesize(vd,'50'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    go.metric16 = 1;
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
                    go.dimension79 = wap_tms.events.g7;
                    break;
                case (/75/.test(eventMap)):
                    go.dimension28 = 'video:75';
                    go.metric17 = 1;
                    vidObj=pts.setvidesize(vd,'75'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
                    go.dimension79 = wap_tms.events.g7;
                    break;
                case (/90/.test(eventMap)):
                    go.dimension28 = 'video:90';
                    go.metric18 = 1;
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
                    go.dimension79 = wap_tms.events.g7;
                    go.dimension149=pts.none.name;
                    delete go.metric85;
                    break;
                case (/95/.test(eventMap)):
                    go.dimension28 = 'video:95';
                    go.metric19 = 1;
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
                    go.dimension79 = wap_tms.events.g7;
                    
					vidObj=pts.setvidesize(vd,'95'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    break;
                case (/100/.test(eventMap)):
                    go.dimension28 = 'video:100';
                    go.metric20 = 1;
                    go.dimension149=pts.none.name;
                    delete go.metric85;
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
                    go.dimension79 = wap_tms.events.g7;
                    break;
                case (/share/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:share';
                    go.metric26 = 1;
                    go.metric29 = 1;
                    go.dimension149=pts.share.name;
                    go.metric85=pts.share.val;
                    if(wap_tms.events.unique_g9){
                        go.metric70 = 1;
                        to.g9=wap_tms.events.tog9;
                        wap_tms.events.unique_g9=false;
                    }
                    go.dimension79 = wap_tms.events.g9;
                    trackGAsocial('intel', action, opt_label); //social shares for Intel video assets
                    break;
                case (/fullscreen/.test(eventMap)):
                    go.metric30 = 1;
                    go.dimension28 = 'video:fullscreen';
                    break;
                default:
                    defaultTracking = true;
                    break;
            }
            break;
        case (/^search:/.test(eventMap)):
            go.dimension149=pts.none.name;
            delete go.metric85;
            go.eventLabel = go.eventLabel.toLowerCase();
			ao_track = false;
            switch (true) {
                case (/search-box/.test(eventMap)):
                    go.dimension27 = 'search';
                    go.dimension28 = 'search:' + action.split(': ')[1];
                    go.dimension41 = opt_label;//keyword
                    go.metric39 = 1;
					ao_track = true;
                    break;
                case (/:filter|:sitefilter/.test(eventMap)):
                    go.dimension27 = 'search';
                    go.dimension28 = 'search:' + action.replace(/\s/, '').replace(/\s/g, '-');
                    go.metric32 = 1;
                    go.metric39 = 1;
                    break;
                case (/additional|related/.test(eventMap)):
                    go.dimension27 = 'search';
                    go.dimension28 = 'search:search-results:' + action.split(': ')[1].replace(/\s/g, '-');
                    go.metric39 = 1;
                    break;
                case (/menu/.test(eventMap)):
                    go.dimension27 = 'click';
                    go.dimension28 = 'click:' + opt_label;
                    go.metric30 = 1;
                    break;
                default:
                    go.dimension27 = 'click';
                    go.dimension28 = 'click:' + action.replace(/\s/, '').replace(/\s/g, '-');
                    go.metric30 = 1;
                    go.dimension149=pts.incontent.name;
                    go.metric85=pts.incontent.val;
                    break;
            }
            break;
        case (/^offline:/.test(eventMap)):
            switch (true) {
                case (/download/.test(eventMap)):
                    go.eventCategory = 'Downloads';
                    go.dimension27 = 'download';
                    go.dimension28 = 'download:' + action.split(': ')[1];
                    go.metric37 = 1;
                    go.dimension149=pts.download.name;
                    go.metric85=pts.download.val;
                    if(wap_tms.events.unique_g8){
                        go.metric69 = 1;
                        to.g8=wap_tms.events.tog8;
                        wap_tms.events.unique_g8=false;
                    }
                    go.dimension79 = wap_tms.events.g8;
                    break;
                case (/print/.test(eventMap)):
                    go.dimension27 = 'print';
                    go.dimension28 = 'print:page';
                    go.metric33 = 1;
                    break;
                default:
                    defaultTracking = true;
                    break;
            }
            break;
        case (/^downloads:/.test(eventMap)):
            var fileExt = (go.eventAction.match(/\.(pdf|jpg|png|gif|zip|doc|xls|exe|mp3|bz2|tar|mov|mpg|wmv|msi|gz|bio|rar|iso|7z|txz|sz|py|tgz|txt|htm|reg|html|pptx|ppt|xlsx|rpm|xml|eprt|bmp|sh|xlsm|ini|jar|ppsx|apk|pkg|flv|bin|ods|bat|chm|deb|emfw|eps|install|jpeg|mp4|prc|rtf|sit|docx|cap|z01|z02)(()|(\?.*)|(\|.*))$/g) + "").toLowerCase(); //match last 3 or 4 chars & convert to string
            try { 
            fileExt = (/\?/.test(fileExt))?fileExt.split('?')[0]:fileExt;
            fileExt = (/\|/.test(fileExt))?fileExt.split('|')[0]:fileExt;
            fileExt = fileExt.split("."); fileExt = fileExt[1]; 
            if(fileExt == undefined) fileExt = "others";
            } catch (err) { } //remove period from string
            go.eventCategory = 'Downloads';
            go.eventLabel = go.eventAction;
            go.eventAction = 'download: ' + fileExt;
            go.dimension27 = 'download';
            go.dimension28 = 'download:' + go.eventAction.split(': ')[1];
            go.metric37 = 1;
            if(fileExt=='exe'){go.dimension149=pts.downloadexe.name;go.metric85=pts.downloadexe.val;}
            else{go.dimension149=pts.download.name;go.metric85=pts.download.val;}
            if(wap_tms.events.unique_g8){
                go.metric69 = 1;
                to.g8=wap_tms.events.tog8;
                wap_tms.events.unique_g8=false;
            }
            go.dimension79 = wap_tms.events.g8;
            break;
        case (/^shop:/.test(eventMap)):
            switch (true) {
                case (/buynow/.test(eventMap)):
                    go.dimension27 = 'thirdparty';
                    go.dimension28 = 'thirdparty:buy';
                    go.metric6 = 1;
                    go.metric7 = 1;
                    go.metric54 = 1;
                    go.eventLabel = opt_label + "#pir-buy";
                    if(wap_tms.events.unique_g12){
                        go.metric74 = 1;
                        to.g12=wap_tms.events.tog12;
                        wap_tms.events.unique_g12=false;
                    }
                    go.dimension81 = wap_tms.events.g1;
                    go.dimension82 = wap_tms.events.g12;
                    go.dimension149=pts.exitbuy.name;
                    go.metric85=pts.exitbuy.val;
                    break;
                case (/buythird-party/.test(eventMap)):
                    go.dimension27 = 'thirdparty';
                    go.dimension28 = 'thirdparty:shop';
                    go.metric5 = 1;
                    go.metric7 = 1;
                    go.metric54 = 1;
                    go.eventLabel = opt_label + "#pir-shop";
                    if(wap_tms.events.unique_g11){
                        go.metric73 = 1;
                        to.g11=wap_tms.events.tog11;
                        wap_tms.events.unique_g11=false;
                    }
                    go.dimension81 = wap_tms.events.g1;
                    go.dimension82 = wap_tms.events.g11;
                    go.dimension149=pts.exitpir.name;
                    go.metric85=pts.exitpir.val;
                    break;
                case (/reset/.test(eventMap)):
                    go.dimension27 = 'click';
                    go.dimension28 = 'click:reset';
                    break;
                case (/filter/.test(eventMap)):
                    go.dimension27 = 'filter';
                    go.dimension28 = opt_label;
                    go.metric32 = 1;
                    break;
                case (/compare/.test(eventMap)):
                    go.dimension27 = 'click';
                    go.dimension28 = 'click:compare';
                    go.metric46 = 1;
                    break;
                default:
                    defaultTracking = true;
                    break;
            }
            break;
        case (/^useraccountactivity:/.test(eventMap)):
            switch (true) {
                case (/registration:start/.test(eventMap)):
                    go.dimension27 = 'registration';
                    go.dimension28 = 'registration:start';
                    if (/click-to-registration/.test(go.eventLabel)) { 
                        go.eventAction += ':click-to-registration';
                        if(wap_tms.events.unique_g4){
                            go.metric66 = 1;
                            to.g4=wap_tms.events.tog4;
                            wap_tms.events.unique_g4=false;
                        }
                        go.dimension79 = wap_tms.events.g5;                        
                    }
                    go.metric1 = 1;
                    go.dimension149=pts.none.name;
                    delete go.metric85;
                    break;
                case (/registration:complete/.test(eventMap)):
                    go.dimension27 = 'registration';
                    go.dimension28 = 'registration:complete';
                    go.metric2 = 1;
                    if(wap_tms.events.unique_g5){
                        go.metric65 = 1;
                        to.g5=wap_tms.events.tog5;
                        wap_tms.events.unique_g5=false;
                    }
                    go.dimension79 = wap_tms.events.g4;
                    if (/opt-in:/.test(opt_label)) { go.metric3 = 1; }
                    wap_tms.events.rlsa_link=true; //send to RLSA property
                    go.dimension149=pts.register.name;
                    go.metric85=pts.register.val;
					if (typeof go.dimension105 !== "undefined") {ao.wa_elq_id=go.dimension105;} //AudienceStream, Eloqua ID
					if (typeof go.dimension115 !== "undefined") {ao.wa_elq_id_short=go.dimension115;} //AudienceStream, Eloqua ID short
					if (typeof go.dimension106 !== "undefined") {ao.wa_audience_optin=go.dimension106;utag_data.wa_audience_optin=go.dimension106;} //AudienceStream, Opt-in Status
                    break;
                case (/registration:intel/.test(eventMap)):
                    go.dimension27 = 'registration';
                    go.dimension28 = 'registration:start';
                    go.metric1 = 1;
                    break;
                case (/login:intel/.test(eventMap)):
                    go.dimension27 = 'login';
                    go.dimension28 = 'login:intel';
                    go.metric35 = 1;
                    if(wap_tms.events.unique_g10){
                        go.metric71 = 1;
                        to.g10=wap_tms.events.tog10;
                        wap_tms.events.unique_g10=false;
                    }
                    go.dimension79 = wap_tms.events.g10;
                    go.dimension149=pts.login.name;
                    go.metric85=pts.login.val;
                    break;
                case (/login:social/.test(eventMap)):
                    go.dimension27 = 'login';
                    go.dimension28 = 'login:social';
                    go.metric35 = 1;
                    if(wap_tms.events.unique_g10){
                        go.metric71 = 1;
                        to.g10=wap_tms.events.tog10;
                        wap_tms.events.unique_g10=false;
                    }
                    go.dimension79 = wap_tms.events.g10;
                    go.dimension149=pts.login.name;
                    go.metric85=pts.login.val;
                    break;
                case (/updateprofile|savecontent/.test(eventMap)):
                    go.dimension27 = 'save';
                    go.dimension28 = 'save:' + action.split(': ')[1].replace(/\s/g, '-');
                    go.metric34 = 1;
                    break;
                case (/survey:optin/.test(eventMap)):
                    go.dimension27 = 'survey';
                    go.dimension28 = 'survey:optin';
                    go.metric80 = 1;
                    break;
                case (/survey:response/.test(eventMap)):
                    go.dimension27 = 'survey';
                    go.dimension28 = 'survey:response';
                    break;
                default:
                    defaultTracking = true;
                    break;
            }
            break;
        case (/^chat:/.test(eventMap)):
            go.eventCategory = 'Social';
            go.eventAction = go.eventAction.replace(/click:/g, 'chat:');
            go.dimension27 = 'chat';
            go.dimension28 = 'chat:' + opt_label.split(':')[0];
            go.metric36 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
            go.dimension79 = wap_tms.events.g9;
            go.dimension149=pts.chat.name;
            go.metric85=pts.chat.val;
            break;
        case (/^tools/.test(eventMap)):
            go.dimension27 = 'tool';
            go.dimension28 = 'tool:' + action.split('\-tool:')[0];
            go.metric47 = 1;
            break;
        case (/^comment/.test(eventMap)):
            if (eventMap == 'comment:reply') { go.metric58 = 1; }
            if (eventMap == 'comment:post') { go.metric59 = 1; }
            go.dimension29 = go.eventAction;
            go.eventCategory = 'Social';
            go.eventAction = 'comment: ' + go.eventAction;
            go.dimension27 = 'social';
            go.dimension28 = 'social:comment';
            go.metric22 = 1;
            go.metric29 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
            go.dimension79 = wap_tms.events.g9;
            go.dimension149=pts.comment.name;
            go.metric85=pts.comment.val;
            break;
        case (/^share|^email/.test(eventMap)):
            go.eventCategory = 'Social';
            go.dimension29 = go.eventAction;
            go.eventAction = (action == 'mailto') ? 'share: email' : 'share: ' + go.eventAction; //fix for PER (2/20/14, remove after cleanup)
            //go.eventAction='share: '+go.eventAction;
            go.dimension27 = 'social';
            go.dimension28 = 'social:share';
            go.metric26 = 1;
            go.metric29 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
            go.dimension79 = wap_tms.events.g9;
            if(/^share/.test(eventMap)){go.dimension149=pts.share.name;go.metric85=pts.share.val;} //share
            else{go.dimension149=pts.email.name;go.metric85=pts.email.val;} //email
            break;
        case (/^like/.test(eventMap)):
            go.eventCategory = 'Social';
            go.dimension29 = go.eventAction;
            go.eventAction = 'like: ' + go.eventAction;
            go.dimension27 = 'social';
            go.dimension28 = 'social:like';
            go.metric23 = 1;
            go.metric29 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
            go.dimension79 = wap_tms.events.g9;
            go.dimension149=pts.share.name;
            go.metric85=pts.share.val;
            break;
        case (/^rss/.test(eventMap)):
            go.dimension27 = go.eventCategory.toLowerCase();
            go.eventCategory = 'User Account Activity';
            go.eventAction = 'rss: ' + go.eventAction;
            go.dimension28 = 'rss:' + opt_label;
            break;
        case (/^follow/.test(eventMap)):
            go.eventCategory = 'Social';
            go.dimension29 = go.eventAction;
            go.eventAction = 'follow: ' + go.eventAction;
            go.dimension27 = 'social';
            go.dimension28 = 'social:follow';
            go.metric25 = 1;
            go.metric29 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
            go.dimension79 = wap_tms.events.g9;
            break;
        case (/^third-party/.test(eventMap)):
            go.dimension27 = 'thirdparty';
            go.dimension28 = 'thirdparty:std';
            go.metric4 = 1;
            go.metric7 = 1;
            go.metric54 = 1;
            go.eventLabel = opt_label + "#pir-exit";
            if(wap_tms.events.unique_g11){
                go.metric73 = 1;
                to.g11=wap_tms.events.tog11;
                wap_tms.events.unique_g11=false;
            }
            go.dimension81 = wap_tms.events.g1;
            go.dimension82 = wap_tms.events.g11;
            go.dimension149=pts.exitpir.name;
            go.metric85=pts.exitpir.val;
            break;
        case (/^social:/.test(eventMap)):
            switch (true) {
                case (/referral/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:referral';
                    go.metric21 = 1;
                    go.metric29 = 1;
                    go.dimension149=pts.exitother.name;
                    go.metric85=pts.exitother.val;
                    break;
                case (/rate:/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:rate';
                    go.metric28 = 1;
                    go.metric29 = 1;
                    if (!go.dimension29) {go.dimension29 = location.pathname.toLowerCase(); }
                    if(wap_tms.events.unique_g9){
                        go.metric70 = 1;
                        to.g9=wap_tms.events.tog9;
                        wap_tms.events.unique_g9=false;
                    }
                    go.dimension79 = wap_tms.events.g9;
                    go.dimension149=pts.rate.name;
                    go.metric85=pts.rate.val;
                    break;
                case (/vote:/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:vote';
                    go.metric24 = 1;
                    go.metric29 = 1;
                    break;
                case (/share:/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:share';
                    go.metric24 = 1;
                    go.metric26 = 1;
                    go.metric29 = 1;
                    break;
                case (/like/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:like';
                    go.dimension29 = eventMap.substring(12); 
                    go.metric23 = 1;
                    go.metric29 = 1;
                    go.metric55 = 1; 
            }
            break;
        case (/^navigation:/.test(eventMap)):
            go.dimension27 = 'nav';
            go.dimension149=pts.none.name;
            delete go.metric85;
			ao_track = false;
            switch (true) {
                case (/megamenu|menu/.test(eventMap)):
                    go.dimension28 = 'nav:menu';
                    go.dimension29 = 'nav:menu:' + opt_label;
                    go.metric43 = 1;
                    go.eventAction = 'nav: menu';
                    break;
                case (/footer/.test(eventMap)):
                    go.dimension28 = 'nav:footer';
                    go.metric43 = 1;
                    go.eventAction = 'nav: footer';
                    break;
                case (/header/.test(eventMap)):
                    go.dimension28 = 'nav:header';
                    go.metric43 = 1;
                    go.eventAction = 'nav: header';
                    break;
                case (/selectlanguage/.test(eventMap)):
                    go.dimension28 = 'nav:language';
                    go.dimension29 = 'nav:language:' + wap_ga.wa_local;
                    go.metric43 = 1;
                    go.eventAction = 'nav: select language';
                    break;
                case (/scroll/.test(eventMap)):
                    go.dimension27 = 'scroll';
					ao_track = true;
                    switch (true) {
                        case (/25/.test(action)):
                            go.metric48 = 1;
                            go.dimension28 = 'scroll:25';
                            go.dimension149=pts.scroll25.name;
                            go.metric85=pts.scroll25.val;
                            break;
                        case (/50/.test(action)):
                            go.metric49 = 1;
                            go.dimension28 = 'scroll:50';
                            if(wap_tms.events.unique_g14){
                                go.metric72 = 1;
                                to.g14=wap_tms.events.tog14;
                                wap_tms.events.unique_g14=false;
                            }
                            go.dimension79 = wap_tms.events.g14;
                            go.dimension149=pts.scroll50.name;
                            go.metric85=pts.scroll50.val;
                            break;
                        case (/75/.test(action)):
                            go.metric50 = 1;
                            go.dimension28 = 'scroll:75';
                            go.dimension149=pts.scroll75.name;
                            go.metric85=pts.scroll75.val;
                            break;
                        case (/100/.test(action)):
                            go.metric51 = 1;
                            go.dimension28 = 'scroll:100';
                            go.dimension149=pts.scroll100.name;
                            go.metric85=pts.scroll100.val;
                            break;
                    }
                    break;
                case (/filter/.test(eventMap)):
                    go.dimension28 = 'nav:filter';
                    go.metric43 = 1;
                    go.metric32 = 1;
                    go.eventAction = 'nav: filter';
                    break;
                case (/in-page/.test(eventMap)):
                    go.dimension28 = 'nav:in-page';
                    go.dimension29 = 'nav:in-page:' + opt_label.split(':')[0];
                    go.metric43 = 1;
                    go.dimension149=pts.interaction.name;
                    go.metric85=pts.interaction.val;
					ao_track = true;
                    break;
                case (/left/.test(eventMap)):
                    go.dimension28 = 'nav:leftnav';
                    go.metric43 = 1;
                    go.eventAction = 'nav: left-nav';
					ao_track = true;
                    break;
                default:
                    go.dimension28 = 'nav:in-page';
                    go.dimension29 = 'nav:in-page:' + opt_label.split(':')[0];
                    go.metric43 = 1;
                    go.eventAction = 'click: in-page';
                    go.eventLabel = action.split(': ')[1] + ':' + opt_label;
                    go.dimension149=pts.interaction.name;
                    go.metric85=pts.interaction.val;
					ao_track = true;
                    break;
            }
            break;
        case (/^page:target/.test(eventMap)):
            go.eventLabel = go.dimension76+": "+go.dimension40;
            go.dimension27 = 'ni';
            go.dimension19 = 'target';
            go.dimension28 = 'ni:target';
            go.metric64 = 1;
            utag_data.target_campaign_name += (','+go.dimension76);
            utag_data.target_campaign_recipe_name += (','+go.dimension40);
            utag_data.target_offer_name += (','+go.dimension77);
            utag_data.target_campaign_name=utag_data.target_campaign_name.replace(/^,/, '');
            utag_data.target_campaign_recipe_name=utag_data.target_campaign_recipe_name.replace(/^,/, '');
            utag_data.target_offer_name=utag_data.target_offer_name.replace(/^,/, '');
            go.dimension149=pts.none.name;
			if (typeof utag_data.target_cookie !== "undefined") {ao.target_cookie=utag_data.target_cookie;}
            delete go.metric85;
            //console.log("utag_data.target_campaign_name: " + utag_data.target_campaign_name + "\nutag_data.target_campaign_recipe_name: " + utag_data.target_campaign_recipe_name+"\nutag_data.target_offer_name: "+utag_data.target_offer_name)
            break;
        case (/^page:realusermonitoring/.test(eventMap)):
            go.dimension27 = 'ni';
            go.dimension19 = 'rum';
            go.dimension28 = 'ni:rum';
            go.metric77 = 1;
            go.dimension149=pts.none.name;
			ao_track = false;
            delete go.metric85;
            break;
        case (/non-interaction:/.test(eventMap)):
            go.eventCategory = 'Page';
            go.dimension149=pts.none.name;
			ao_track = false;
            delete go.metric85;
            switch (true) {
                case (/error/.test(eventMap)):
                    go.eventAction = 'error';
                    break;
                default:
                    go.eventAction = 'goal:' + action.split(': ')[1];
                    go.eventLabel = action;
                    go.dimension27 = 'ni';
                    go.metric55 = 0;
                    go.metric53 = 0;
                    go.dimension28 = 'ni:goals';
                    break;
            }
            break;
        default:
            defaultTracking = true;
            break;
    }
 
//CONFIGURE for default and KPI 
    
    //default tracking
    if (defaultTracking) {
        go.dimension27 = 'click';
        go.dimension28 = 'click:std';
        go.metric30 = 1;
    }

    //PCI Check (using same regEx logic to set GA goals)
    if (/Navigation|Components|Offline|Third-party|Tools|Shop|User Account Activity/g.test(go.eventCategory)) {
        if (/^click:|^print|^(.*)-tool|^shop:|^registration: (complete|intel)|^rss:/g.test(go.eventAction)) {
            go.metric55 = 1;
            go.dimension80 = wap_tms.events.g6;
        }
    }

    //PER Check (using same regEx logic to set GA goals)
    if (/Navigation|Components|Offline|Videos|Downloads|Social|Third-party|Tools|Shop|User Account Activity/g.test(go.eventCategory)) {
        if (/^click:|^scroll: (50|75|100)|^video: (50|75|90|95|100|share|full)|^download:|^(.*)-tool|^shop:|^registration: (start:click|complete|intel)|^rss:|^comment:|^share:|^like:|^follow:|^rate:|^chat:|^referral|^print:|^login|^vote|^print/g.test(go.eventAction)) {
            go.metric53 = 1;
            go.dimension78 = wap_tms.events.g2;
            if (typeof go.dimension79 == "undefined") {go.dimension79 = 'Other';}
        }
    }
    
    //PIR Intel Shop Check
    if (/(\/buy\/)|(^\/content\/(.*)\/shop-)|(^\/..\/..\/products\/)|(pocket\.intel\.com)|(prcappzone\.intel\.com\/shop\/)|(beforeyoubuypc\.)|(buypc\.intel)|^\/(intel-shop|shop-)/.test(go.eventLabel)) {
        go.metric56 = 1; go.metric54 = 1;
        go.eventLabel = go.eventLabel + "#pir-intel";
        if(wap_tms.events.unique_g13){
            go.metric75 = 1;
            to.g13=wap_tms.events.tog13;
            wap_tms.events.unique_g13=false;
        }
        go.dimension81 = wap_tms.events.g1;
        go.dimension82 = wap_tms.events.g13;
    }

    //configure Unique PER instance 1x per page load
    if (wap_tms.events.unique_per) {
        if (typeof go.metric53 !== "undefined") {
            if (go.metric53 == 1) {
                go.metric60 = 1;
                to.g2=wap_tms.events.tog2;
                wap_tms.events.unique_per = false;
            }
        }
    }
    //configure Unique PIR instance 1x per page load
    if (wap_tms.events.unique_pir) {
        if (typeof go.metric54 !== "undefined") {
            if (go.metric54 == 1) {
                go.metric61 = 1;
                go.dimension81 = wap_tms.events.g1;
                to.g1=wap_tms.events.tog1;
                wap_tms.events.unique_pir = false;
            }
        }
    }

    //configure Unique PCI instance 1x per page load
    if (wap_tms.events.unique_pci) {
        if (typeof go.metric55 !== "undefined") {
            if (go.metric55 == 1) {
                go.metric63 = 1;
                go.dimension78 = wap_tms.events.g2;
                go.dimension80 = wap_tms.events.g6;
                to.g6=wap_tms.events.tog6;
                wap_tms.events.unique_pci = false;
            }
        }
    }   

    //fire PER tag(s) 1x per session
    var perEvent = (utag.loader.RC("utag_main").per !== "1") ? true : false;
    if (perEvent) {
        if (typeof go.metric53 !== "undefined" && utag_data.wa_env === "prod") {
            if (go.metric53 == 1) {
                //console.log("fire PER");

                //fire DCM Floodlight tag
                if (wap_tms.floodlight.fireTags) {
                    configDFAfloodiFrame(wap_tms.floodlight.adId, wap_tms.floodlight.per.type, wap_tms.floodlight.per.category, 'ses');
                }
                //set cookie so only fire 1x per session
                utag.loader.SC("utag_main", { "per": "1;exp-session" });
            }
        }
    }

    //fire PIR tag(s) 1x per session
    var pirEvent = (utag.loader.RC("utag_main").pir !== "1") ? true : false;
    if (pirEvent) {
        if (typeof go.metric54 !== "undefined" && utag_data.wa_env === "prod") {
            if (go.metric54 == 1) {
                //console.log("fire PIR");  

                //fire DCM Floodlight tag
                if (wap_tms.floodlight.fireTags) {
                    if (wap_tms.floodlight.pir.type !== '0') { configDFAfloodiFrame(wap_tms.floodlight.adId, wap_tms.floodlight.pir.type, wap_tms.floodlight.pir.category, 'ses'); }
                }
                //set cookie so only fire 1x per session
                utag.loader.SC("utag_main", { "pir": "1;exp-session" });
            }
        }
    }

//*** START send to trackers/tags ***/
//GA
wap_tms.events.ga(go,opt_noninteraction,debug);

//AudienceStream
if(utag_data.load_audiencestream == 'true'){
    if(ao_track){
		//config AudienceStream Object (ao)
		ao.event_type = 'link';
		utag_data.event_type = 'link';
		ao.event_category = go.eventCategory;
		ao.event_action = go.eventAction;
		ao.event_label = go.eventLabel;
		if (typeof go.dimension149 !== "undefined") {ao.event_dmf_type=go.dimension149;utag_data.event_dmf_type=go.dimension149;} //assign DMF hit type
		if (typeof go.metric85 !== "undefined") {ao.event_dmf_points=go.metric85;utag_data.event_dmf_points=go.metric85;} //assign DMF hit point value
                utag.track("collect", ao); //send to AudienceStream
	}
}

//Target
if(typeof wap_tms.events.target !== "undefined"){ //only fire if Adobe Target Loader tag is present
    wap_tms.events.target(to,debug); //Adobe Target mbox conversion
}

//wap_tms.events.floodlight(go,debug);

//*** END send to trackers/tags ***/
}
    
//Scroll Tracking
if(wap_tms.jquery.ver_1_7_plus){(function($){
    $(window).load(function() {
        setTimeout(function(){
            var div = $('').appendTo('body');
            $(div).remove();
            getPropIE = function ( name ) {
                return Math.max(
                    document.documentElement["client" + name],
                    document.documentElement["scroll" + name],
                    document.body["scroll" + name]
                );
            }
            var percentBelowFold = 50; //threashold to enable scroll tracking 
            var isIE = 'false';
            if(navigator.userAgent.toLowerCase().indexOf('msie') > -1){isIE = 'true';}
            var hwin = (isIE && document.nodeType === 9 ) ? parseInt(getPropIE( 'Height' )) : parseInt(this.height());
            var hview = parseInt($(window).height());
            var difference = hwin - hview;
            var percent = Math.round((difference / hwin)*100);
            if(percent>=percentBelowFold){
                //wap_ga.scroll=true; is the default but do not set to true here as we should still honor the per site scroll enable/disable flag which could be set to 'false'
                //console.log("ENALBE scroll ----> win height: "+hwin+"\nview height: "+hview+"\npercent: "+percent+"\nGA scroll: "+wap_ga.scroll); 
            }
            else{
                wap_ga.scroll=false;
                //console.log("DISABLE scroll ----> win height: "+hwin+"\nview height: "+hview+"\npercent: "+percent+"\nGA scroll: "+wap_ga.scroll);
                
                //add event handler
                $(window).bind("scroll.wap",function(event){
                    wa_component_name="page-scroll";
                    ga_payload.dimension['29,hit']=percent+"%";
                    trackGaEvent('Navigation','scroll: disabled',percent+"%",null,true);
                    $(window).unbind("scroll.wap");
                });
                
            }
        
            /*!jquery.scrolldepth.js | Copyright (c) 2009-2014 Rob Flaherty*/
            //start scroll tracking event handler
            //http://scrolldepth.parsnip.io/
            if (wap_ga.scroll) { //check if enable or disable scroll tracking
                docHeight = $(document).height();
                (function ($, window, document, undefined) {
                    "use strict";
                    var defaults = {
                        minHeight: 0,
                        elements: [],
                        percentage: true,
                        userTiming: false,
                        pixelDepth: true
                    };
                    var $window = $(window),
                      cache = [],
                      lastPixelDepth = 0;

                    $.scrollDepth = function (options) {

                        var startTime = +new Date;

                        options = $.extend({}, defaults, options);

                        // Return early if document height is too small
                        if ($(document).height() < options.minHeight) {
                            return;
                        }

                        function sendEvent(action, label, scrollDistance, timing) {
                            //if (options.pixelDepth && arguments.length > 2 && scrollDistance > lastPixelDepth) {
                            lastPixelDepth = scrollDistance;
                            wa_component_name = "page-scroll"; 
                            ga_payload.dimension['29,hit'] = percent+"%";
                            //ga_payload.metric['14,hit']='1'; //scroll disabled
                            trackGaEvent('Navigation', 'scroll: ' + label, rounded(scrollDistance));
                            //} 
                            /*if (options.userTiming && arguments.length > 3) {
                                //
                            }*/
                        }

                        function calculateMarks(docHeight) {
                            return {
                                '25%': parseInt(docHeight * 0.25, 10),
                                '50%': parseInt(docHeight * 0.50, 10),
                                '75%': parseInt(docHeight * 0.75, 10),
                                // 1px cushion to trigger 100% event in iOS
                                '100%': docHeight - 5
                            };
                        }

                        function checkMarks(marks, scrollDistance, timing) {
                            // Check each active mark
                            $.each(marks, function (key, val) {
                                if ($.inArray(key, cache) === -1 && scrollDistance >= val) {
                                    sendEvent('Percentage', key, rounded(val), timing);
                                    cache.push(key);
                                }
                            });
                        }

                        function checkElements(elements, scrollDistance, timing) {
                            $.each(elements, function (index, elem) {
                                if ($.inArray(elem, cache) === -1 && $(elem).length) {
                                    if (scrollDistance >= $(elem).offset().top) {
                                        sendEvent('Elements', elem, scrollDistance, timing);
                                        cache.push(elem);
                                    }
                                }
                            });
                        }

                        function rounded(scrollDistance) {
                            return (Math.floor(scrollDistance / 250) * 250).toString();
                        }

                        function throttle(func, wait) {
                            var context, args, result;
                            var timeout = null;
                            var previous = 0;
                            var later = function () {
                                previous = new Date;
                                timeout = null;
                                result = func.apply(context, args);
                            };
                            return function () {
                                var now = new Date;
                                if (!previous) previous = now;
                                var remaining = wait - (now - previous);
                                context = this;
                                args = arguments;
                                if (remaining <= 0) {
                                    clearTimeout(timeout);
                                    timeout = null;
                                    previous = now;
                                    result = func.apply(context, args);
                                } else if (!timeout) {
                                    timeout = setTimeout(later, remaining);
                                }
                                return result;
                            };
                        }

                        $window.on('scroll.scrollDepth', throttle(function () {
                            var docHeight = $(document).height(),
                              winHeight = window.innerHeight ? window.innerHeight : $window.height(),
                              scrollDistance = $window.scrollTop() + winHeight,

                              // Recalculate percentage marks
                              marks = calculateMarks(docHeight),

                              // Timing
                              timing = +new Date - startTime;

                            // If all marks already hit, unbind scroll event
                            if (cache.length >= 4 + options.elements.length) {
                                $window.off('scroll.scrollDepth');
                                return;
                            }

                            // Check specified DOM elements
                            if (options.elements) {
                                checkElements(options.elements, scrollDistance, timing);
                            }

                            // Check standard marks
                            if (options.percentage) {
                                checkMarks(marks, scrollDistance, timing);
                            }
                        }, 500));
                    };
                    $.scrollDepth();
                })($wap, window, document);
            }
            //END start scroll tracking event handler
        
        }, 1000); //delay 1 second after images load to give browser enough time to render page
    });
}($wap));}  
//END UNIVERSAL TAGGING FRAMEWORK       

}
//legacy functions, keep until full regression testing, some code may be using waGetCookie()
function waGetCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return waGetCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0)
            break;
    }
    return null;

}

function waGetCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}

function waSetCookie(name, value) {
    var wa_cookieExpDate = new Date();
    wa_cookieExpDate.setTime(wa_cookieExpDate.getTime() + (365 * 24 * 3600 * 1000));
    document.cookie = name + "=" + escape(value) +
        "; expires=" + wa_cookieExpDate.toGMTString() +
        "; path=/" +
        "; domain=.intel.com"

}

function checkMeta(tagNameIn) {
    var metas = document.getElementsByTagName('META');
    var i;
    for (i = 0; i < metas.length; i++)
        if (metas[i].getAttribute('name') == tagNameIn)
            var tagNameValue = metas[i].getAttribute('content');
    return tagNameValue;

}

 //Modifying the setting to capture Ad Blocker
    switch(utag_data.wa_section){
    case "iq":
        wap_tms.custom.adblockers.check = true;
        break;
    default:
        wap_tms.custom.adblockers.check = false;
    }
    
    //Condition to check If Ad Blocker needs to be tracked
    if(wap_tms.custom.adblockers.check){    
        //Ad Blocker is disabled by default
        var wa_adblocker_checker = "adblocker:disabled";
        //Appending a dummy ad to the DOM
        if(wap_tms.jquery.ver_1_7_plus){
            (function($){
                $('body').append('<div id="adsense" class="adsense" style="visibility: hidden"> <p><&nbsp; </p></div>');
            }($wap));
        }
        //Function call to check if Ad Blocker is enabled
        wap_tms.custom.adblockers.wacheckAds = function() { 
            var ads = document.getElementsByClassName('adsense');
            var ad  = ads[ads.length - 1];
            if(!ad || ad.innerHTML.length == 0 || ad.clientHeight === 0){
                wa_adblocker_checker = "adblocker:enabled";
            }
        }
    }
 
	//Update a key-value pair in the URL query parameters
	wap_tms.custom.updateUrlParameter = function (uri, key, value) {
		// remove the hash part before operating on the uri
			var i = uri.indexOf('#');
			var hash = i === -1 ? ''  : uri.substr(i);
				 uri = i === -1 ? uri : uri.substr(0, i);

			var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
			var separator = uri.indexOf('?') !== -1 ? "&" : "?";
			if (uri.match(re)) {
				uri = uri.replace(re, '$1' + key + "=" + value + '$2');
			} else {
				uri = uri + separator + key + "=" + value;
			}
			return uri + hash;  // finally append the hash as well
	}
//Returns true if the hostname passed is a PIR 
wap_tms.custom.isPIR = function (hostname){
	return /(intel|wikipedia|mcafee|google|nationalgeographic|microsoft|adobe|doubleclick|home\.mcafee|support\.google|windows\.microsoft|adobe|facebook|twitter|pinterest|intc|linkedin|youtube|truekey|instagram|americasgreatestmakers|resources\.hewitt)\.|\.intel/.test(hostname);
}

//Returns true if the linkHref passed is an asset 
wap_tms.custom.isAsset = function (linkHref){
	return (/\.(pdf|jpg|png|gif|zip|doc|xls|exe|mp3|mov|mpg|wmv|msi|gz|bio|rar|iso|7z)/.test(linkHref));
}
	  
//END - Extension: WAP Global (1)
}catch(e){}};
if(!utag_condload){try{
//config
wap_tms.custom=wap_tms.custom||{}; 

wap_tms.custom.base_linktracking = true;
wap_tms.custom.brightcove = true;
wap_tms.custom.youtube = true;

    //Metadata Capture
        //utag_data.wa_forums = (typeof wa_ssg_data.wa_ssg_forums !== "undefined" && wa_ssg_data.wa_ssg_forums) ? wa_ssg_data.wa_ssg_forums.toLowerCase() : '';
        utag_data.wa_target_audience = (typeof wa_ssg_data.wa_ssg_audience !== "undefined" && wa_ssg_data.wa_ssg_audience != null) ? wa_ssg_data.wa_ssg_audience.toLowerCase() : '';
        utag_data.wa_os = (typeof wa_ssg_data.wa_ssg_operating_system !== "undefined" && wa_ssg_data.wa_ssg_operating_system != null) ? wa_ssg_data.wa_ssg_operating_system.toLowerCase() : '';
        utag_data.wa_zone = (typeof wa_ssg_data.wa_ssg_zone !== "undefined" && wa_ssg_data.wa_ssg_zone != null) ? wa_ssg_data.wa_ssg_zone.toLowerCase() : '';
        utag_data.wa_program_lang = (typeof wa_ssg_data.wa_ssg_programming_language !== "undefined" && wa_ssg_data.wa_ssg_programming_language != null) ? wa_ssg_data.wa_ssg_programming_language.toLowerCase() : '';
        //utag_data.wa_forums = (typeof wa_ssg_data.wa_ssg_forums !== "undefined" && wa_ssg_data.wa_ssg_forums != null) ? wa_ssg_data.wa_ssg_forums.toLowerCase() : '';
        utag_data.wa_software = (typeof wa_ssg_data.wa_ssg_software !== "undefined" && wa_ssg_data.wa_ssg_software != null) ? wa_ssg_data.wa_ssg_software.toLowerCase() : '';
        utag_data.wa_intel_technology = (typeof wa_ssg_data.wa_ssg_technology !== "undefined" && wa_ssg_data.wa_ssg_technology != null) ? wa_ssg_data.wa_ssg_technology.toLowerCase() : '';
        utag_data.wa_topic = (typeof wa_ssg_data.wa_ssg_topic !== "undefined" && wa_ssg_data.wa_ssg_topic != null) ? wa_ssg_data.wa_ssg_topic.toLowerCase() : '';
        utag_data.shop_formFactor = (typeof wa_ssg_data.wa_ssg_form_factor !== "undefined" && wa_ssg_data.wa_ssg_form_factor != null) ? wa_ssg_data.wa_ssg_form_factor.toLowerCase() : '';
        //utag_data.wa_local = (typeof wa_ssg_data.wa_ssg_local_code !== "undefined" && wa_ssg_data.wa_ssg_local_code != null) ? wa_ssg_data.wa_ssg_local_code.toLowerCase() : '';
        utag_data.wa_page_type_macro = (typeof wa_ssg_data.wa_ssg_type_macro !== "undefined" && wa_ssg_data.wa_ssg_type_macro != null) ? wa_ssg_data.wa_ssg_type_macro.toLowerCase() : '';
        utag_data.wa_page_type_micro = (typeof wa_ssg_data.wa_ssg_type_micro !== "undefined" && wa_ssg_data.wa_ssg_type_micro != null) ? wa_ssg_data.wa_ssg_type_micro.toLowerCase() : '';
        utag_data.wa_ssg_uuid = (typeof wa_ssg_data.wa_ssg_uuid !== "undefined" && wa_ssg_data.wa_ssg_uuid != null) ? wa_ssg_data.wa_ssg_uuid.toLowerCase() : '';
        utag_data.wa_page_id = (typeof wa_ssg_data.wa_ssg_nid !== "undefined" && wa_ssg_data.wa_ssg_nid != null) ? wa_ssg_data.wa_ssg_nid.toLowerCase() : '';
        utag_data.wa_english_title = (typeof wa_ssg_data.wa_ssg_forums !== "undefined" && wa_ssg_data.wa_ssg_forums) ? wa_ssg_data.wa_ssg_forums.toLowerCase() : '';
        utag_data.wa_ssg_profile = "";

//additional Search-box tracking for the zero results scenario
if (/(software.intel.com\/).*(\/search\/gss)/.test(document.location.href)) {
            if($wap(".icon-article").length == 0){
                var wordSearched = document.location.pathname.substring(document.location.pathname.lastIndexOf('/') + 1); 
                ga_payload.dimension['43,page'] = wordSearched;
                ga_payload.metric['41,hit'] = '1';
            }    
        }

 //addition code to see if a user is logged in 
 if (/(software.intel.com\/)/.test(document.location.href)) {
    if($wap(".logged-in").length > 0){
          ga_payload.dimension['15,page'] = "logged-in";
    }
    else{
          ga_payload.dimension['15,page'] = "anonymous";
    }
 }
 
//capture Author details on click.
var wa_ArticleAuthor = ($wap('article header a.username').length) ? $wap('article header a.username').html().toLowerCase() : "";  
ga_payload.dimension['74,page'] = wa_ArticleAuthor;
  
wap_tms.custom.functionCustomTrackingCode_ssg = function () {
	if (wap_tms.jquery.ver_1_7_plus) {
            if (wap_tms.custom.base_linktracking) {
                (function($) {
//$wap(document).ready(function(){
  //Post message track
  $wap(".comment-form input#edit-submit").click(function () {
    var wa_pathName = location.pathname;
    trackGaEvent('Social', 'comment: post', wa_pathName);
  });
   //Search-box Tracking
   $wap("form[id^='search-block-form']").submit(function(event){
     trackGaEvent('Search', 'search-box: text', event.currentTarget[0].value);
   });

   //Additional Search done on Search page
   $wap("form[id^='search-form']").submit(function(event){
      trackGaEvent('Search', 'search-results: additional keyword', event.currentTarget[0].value);
   });

    //Adding query string parameter for links after searching ( wapkw paramenter )
    if (/(software.intel.com\/).*(\/search\/gss)/.test(document.location.href)) {
       $wap('ol a').map(function(){ 
       var tempHref = $wap(this).attr("href"),
     wordSearched = document.location.pathname.substring(document.location.pathname.lastIndexOf('/') + 1); 
           if(tempHref.indexOf("?") >= 0){  //It has more query string parameters
       $wap(this).attr("href", tempHref + "&wapkw=" + wordSearched);                    }
   else{ //Doesn't has query string parameters
     $wap(this).attr("href", tempHref + "?wapkw=" + wordSearched); 
   } 
       })
    } 
  }($wap));
        }
    }
}
  wap_tms.custom.init('functionCustomTrackingCode_ssg');
//});
}catch(e){}};
if(!utag_condload){try{
//*********************************************************************************************
//* Extension: Standardized tracking (2)                                                         *
//*********************************************************************************************
    function wapMainEventHandler($wap, objRef, event) {
      var $componentId = $wap(objRef).closest('[id]').attr('id');
      wa_component_name = $componentId, 
      //Capture 'data-wap_type' defined on the link clicked
	  linkType_object = $wap(objRef).attr("data-wap_type"), 
    //Capture 'data-wap_type' defined on the nearest ID
	  linkType_ComponentId = $wap(objRef).closest('[id]').attr("data-wap_type"), 
    //Set linkType based on which 'data-wap_type' is defined. 
	  linkType = ((typeof linkType_object === "undefined") || (linkType_object == "")) ? linkType_ComponentId : linkType_object, 
    //Capture href attribute from the link clicked.
	  linkHref_object = $wap(objRef).attr("href") + "", 
	  linkHref = clearnHref(linkHref_object), 
	  linkHref = (linkHref.indexOf("javascript") > -1) ? "nav-link" : linkHref, 
    //Capture 'data-wap_ref' defined on the nearest ID
	  linkRef_ComponentId = $wap(objRef).closest('[id]').attr('data-wap_ref'), 
    //Replace linkHref with the value captured above.
	  linkHref = ((typeof linkRef_ComponentId  === "undefined") || (linkRef_ComponentId == "")) ? linkHref : linkRef_ComponentId.toLowerCase(), 
    //Capture 'data-wap_ref' defined on the link clicked
	  linkRef_object = $wap(objRef).attr("data-wap_ref"), 
    //Set linkHref based on which 'data-wap_type' is defined. 
    linkHref = ((typeof linkRef_object === "undefined") || (linkRef_object == "")) ? linkHref : linkRef_object.toLowerCase(), 
    //Capture 'data-wap' defined on the link clicked
	  componentData = $wap(objRef).attr("data-wap"), 
	  componentData = ((typeof componentData === "undefined") || (componentData == "")) ? "" : $wap.parseJSON(unescapeHTML(componentData)), 

	  page_url = location.pathname, hostname = linkHref.getHostname();
    
      $componentId = (typeof $componentId !== "undefined") ? $componentId : 'pagelinks';
      $componentId = (typeof linkType === "undefined") ? $componentId : linkType;
      var waType = wap_tms.custom.isPIR(hostname) ? $componentId : 'thirdparty';
		waType = wap_tms.custom.isAsset(linkHref) ? 'download' : waType; //set to download if extention matches
      switch (waType) {
        //Avoid Tracking
      case "wa_skip_track":
        break;
        //Navigation Header Example: 'Navigation','nav: header','link_url'
      case "navheader":
	  case "header":
        trackGaEvent('Navigation', 'click: header', linkHref);
        break;
        //Navigation Menu Example: 'Navigation','nav: menu','submenu:position:link-type:link_url'
      case "navmenu":
        if(typeof componentData !== "undefined"){
          if(typeof componentData.submenu !== "undefined")
            linkHref = componentData.submenu +":"+ linkHref;
          if(typeof componentData.category !== "undefined")
            linkHref = componentData.category +":"+ linkHref;
          if(typeof componentData.linktype !== "undefined")
            linkHref = componentData.linktype +":"+ linkHref;
        }
        trackGaEvent('Navigation', 'click: menu', linkHref);
        break;
        //Navigation Footer Example: 'Navigation', 'nav: footer',  link_url
      case "navfooter":
	  case "footer":
        trackGaEvent('Navigation', 'click: footer', linkHref);
        break;
        //Navigation Filter EXample: 'Navigation', 'nav: filter', 'filter_id_or_name'
      case "navfilter":
        trackGaEvent('Navigation', 'click: filter', linkHref);
        break;
        //Navigation in-page EXample: 'Navigation', 'click: inpage', 'component_name:link_url'
      case "navinpage":
        if(typeof componentData !== "undefined"){
          if(typeof componentData.componentName !== "undefined")
            linkHref = componentData.componentName +":"+ linkHref;
        }
        trackGaEvent('Navigation', 'click: in-page', linkHref);
        break;
        // 'Navigation', 'nav: left', link_url
      case "navleft":
        trackGaEvent('Navigation', 'click: left-nav', linkHref);
        break;
        //'Navigation', 'nav: select language', 'link_url_of_language_site_or_lang_ID'
      case "languagechooser":
        trackGaEvent('Navigation', 'click: select language', linkHref);
        break;
        //'download_asset_url'
      case "download":
        linkHref = linkHref.split("?")[0];
        trackGaEvent('Downloads', linkHref);
        break;
        //'Shop', 'shop: filter', "filter:filter_type:unique_id
      case "shopfilter":
        trackGaEvent('Shop', 'shop: filter', "filter: " + linkHref);
        break;
        //'Shop', 'shop: reset filters', 'page_url'
      case "reset_shopfilter":
        trackGaEvent('Shop', 'shop: reset filters', location.pathname);
        break;
        //'Shop', 'click: buy now', 'page_url'
      case "buynow":
        if (typeof componentData !== "undefined") {
          ga_payload.dimension["44,hit"] = componentData.manufacturer.toLowerCase();
          ga_payload.dimension["45,hit"] = componentData.processor.toLowerCase();
          ga_payload.dimension["46,hit"] = componentData.retailer.toLowerCase();
          ga_payload.dimension["47,hit"] = componentData.model.toLowerCase();
          ga_payload.dimension["48,hit"] = componentData.price.toLowerCase();
          ga_payload.dimension["49,hit"] = componentData.formFactor.toLowerCase();
        }
        trackGaEvent('Shop', 'click: buy now', linkHref);
        break;
        //'Shop', 'shop: compare', page_url
      case "shopcompare":
        trackGaEvent('Shop', 'shop: compare', location.pathname);
        break;
        //'Shop', 'shop: buy third-party', link_url
      case "buy-third-party":
        trackGaEvent('Shop', 'click: buy third-party-clickout', linkHref);
        break;
        //'Third-party', 'click: exit Intel', link_url
      case "thirdparty":
        trackGaEvent('Third-party', 'click: exit Intel', linkHref);
        break;
        //'User Account Activity', 'login: social', 'social_site'
      case "loginsocial":
        trackGaEvent('User Account Activity', 'login: social', linkHref);
        break;
        //'User Account Activity', 'login: intel', page_url
      case "loginintel":
        trackGaEvent('User Account Activity', 'login: intel', location.pathname);
        break;
        //'User Account Activity', 'rss: subscribe', view-feed or rss_url 
      case "subscribe":
        trackGaEvent('User Account Activity', 'rss: subscribe', linkHref);
        break;
        //'User Account Activity', 'click: feedback', 'feedback-type'
      case "feedback":
        trackGaEvent('User Account Activity', 'click: feedback', linkHref);
        break;
        //'User Account Activity', 'click: help', 'page_url'
      case "help":
        trackGaEvent('User Account Activity', 'click: help', location.pathname);
        break;
        //'Offline', 'print', page_url or asset_type:page_url
      case "print":
        trackGaEvent('Offline', 'print', location.pathname);
        break;
        //'Social', 'comment: reply', 'page_url''
      case "socialreply":
        trackGaEvent('Comment','reply', location.pathname);
        break;
        //'Social', 'comment: post', 'page_url'
      case "socialpost":
        trackGaEvent('Comment', 'post', location.pathname);
        break;
        //'Social', 'share: site', page_url
      case "socialshare":
        trackGaEvent('Share', linkHref, location.pathname);
        break;
        //'Social', 'like: site', page_url
      case "sociallike":
        trackGaEvent('Like', linkHref, location.pathname);
        break;
        //'Social', 'rate: rate_type', 'rate_value'
      case "socialrate":
        trackGaEvent('Social', 'rate: ' + linkType, linkHref);
        break;
        //'Social', 'referral', 'link_url'
      case "socialreferral":
        trackGaEvent('Social', 'referral', linkHref);
        break;
        //'Social', 'follow: site', 'link_url'
      case "socialfollow":
        trackGaEvent('Follow', linkType, linkHref);
        break;
        //'Social', 'vote: poll', '-'
      case "socialvote":
        trackGaEvent('Social', 'vote: poll', '-');
        break;
        //
      case "socialchat":
        var chatType = "chat button";
        if (typeof componentData !== "undefined" && typeof componentData.chatType !== "undefined") {
          chatType = componentData.chatType;
        }
        trackGaEvent('Chat', 'click: ' + chatType, linkHref + ":" + location.pathname);
        break;
      default:
        if (typeof linkType !== "undefined")
		  wap_tms.error.set('link type not set,','link.diy');
         trackGaEvent('Components', 'click: ' + $componentId, linkHref);
        break;
      }
    }


//regex to get domain
String.prototype.getHostname = function () {
    var value = '.intel'; //return Intel site match as default
    if (/^http/.test(this)) {
        var regEx = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im');
        value = this.match(regEx)[1].toString();
    }
    return value;
}
function unescapeHTML(data) {
            return $wap("<div />").html(data).text();
};
//*********************************************************************************************
//* Event Handlers                                                                            *
//*********************************************************************************************
if (wap_tms.jquery.ver_1_7_plus) {
  if(wap_tms.custom.base_linktracking){
    (function ($wap) {
        $wap("body").on("click", "a,img[data-wap_ref],label[data-wap_ref],button[data-wap_ref],input[data-wap_ref]", function (event) {
            wapMainEventHandler($wap, this, event);
        });
    }($wap));
}
}
}catch(e){}};
if(!utag_condload){try{
//*********************************************************************************************
//* Extension: Brightcove - Pre-loader (-)                                                    *
//*********************************************************************************************

//used for custom WAP implementation (non-AEM implementation)
function onTemplateLoadWap(experienceID) {
	player = brightcove.api.getExperience(experienceID);
	APIModules = brightcove.api.modules.APIModules;
	if ((typeof myTemplateLoaded) !== "undefined") {
		myTemplateLoaded(experienceID);
	}
}
function onTemplateReadyWap(evt) {
	videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
}

//checks if flash is installed/enabled on the browser
function isFlashEnabled() {
	var hasFlash = false;
	try {
		var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
		if (fo)
			hasFlash = true;
	} catch (e) {
		if (navigator.mimeTypes["application/x-shockwave-flash"] != undefined)
			hasFlash = true;
	}
	return hasFlash;
}
//if(brightcove.checkFlashSupportStandard() === null)
if (isFlashEnabled() != true)
	wap_tms.custom.brightcove = true;
var track0 = 0,
	track25 = 0,
	track50 = 0,
	track75 = 0,
	track90 = 0,
	track95 = 0,
	trackPause = [];
if (wap_tms.custom.brightcove) { //enbale if config
	//*******Brightcove tracking starts ********
	var expId,
	modVP,
	player,
	contentModule;

	// Template Loaded method
	function myTemplateLoaded(experienceID) {
		expId = experienceID;
		player = brightcove.api.getExperience(experienceID);
		// modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
		modExp = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
		// contentModule = player.getModule(brightcove.api.modules.APIModules.CONTENT);
		modExp.addEventListener(brightcove.api.events.ExperienceEvent.TEMPLATE_READY, onBCTemplateReady);
	}

	// listening to events on template ready
	function onBCTemplateReady(evt) {
		modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
		if (wap_tms.custom.brightcove)
			modVP.getCurrentVideo(onGetCurrentVideoResult);
	}

	function onGetCurrentVideoResult(video) {
		if (video) {
			modVP.loadVideoByReferenceID(expId);
			//modVP.play();
			modVP.addEventListener(brightcove.api.events.MediaEvent.BEGIN, onMediaEventFired);
			modVP.addEventListener(brightcove.api.events.MediaEvent.PLAY, onMediaEventFired);
			modVP.addEventListener(brightcove.api.events.MediaEvent.PROGRESS, onMediaProgressFired);
			modVP.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, onMediaEventFired);
			//  modVP.addEventListener(brightcove.api.events.MediaEvent.STOP, onMediaEventFired);
		}
	}

	// listening to various events in onMediaEventFired method
	function onMediaEventFired(event) {
        var c;
        var pageUrl = document.location.href;
        var playername = event.media.displayName;
        var playerid = event.media.id;
        wap_tms.custom.video_duration = event.duration;
        var percentage = getPercentage(event);
        c = event.media.defaultURL;
        ga_payload.dimension['19,hit'] = "mobile";
        if ((event.type == brightcove.api.events.MediaEvent.PLAY) || (event.type == brightcove.api.events.MediaEvent.BEGIN)) {
          if (percentage == 0 && track0 == 0) {
            track0 = 1;
            trackGaEvent('Videos', "video: play", playername);
          }
        }
        if (event.type == brightcove.api.events.MediaEvent.COMPLETE) {
          trackGaEvent('Videos', "video: 100% complete", playername);
        }
      }
	
	// Percentage tracking inside onMediaProgressFired method
	function onMediaProgressFired(event) {
        var playername = event.media.displayName;
        var playerid = event.media.id;
        wap_tms.custom.video_duration = event.duration;
        ga_payload.dimension['19,hit'] = "mobile";
        if (event) {
          var percentage = getPercentage(event);
          var c = event.media.defaultURL;
          var events = "event63";
          var custom10 = "";
          if (percentage >= 50 && percentage <= 53) {
            percentage = "mid";
            custom10 = 'video:ump:partial';
            events = "event6,event61";
          }
          if (percentage == "mid") {
            if (track50 == 0) {
              percentage = 50;
              trackGaEvent('Videos', "video: 50% complete", playername);
              track50 = 1;
            }
          } else if (percentage >= 25 && percentage <= 28) {
            if (track25 == 0) {
              trackGaEvent('Videos', "video: 25% complete", playername);
              track25 = 1;
            }
          } else if (percentage >= 75 && percentage <= 78) {
            if (track75 == 0) {
              trackGaEvent('Videos', "video: 75% complete", playername);
              track75 = 1;
            }
          } else if (percentage >= 90 && percentage <= 93) {
            if (track90 == 0) {
              trackGaEvent('Videos', "video: 90% complete", playername);
              track90 = 1;
            }
          } else if (percentage >= 95 && percentage <= 98) {
            if (track95 == 0) {
              trackGaEvent('Videos', "video: 95% complete", playername);
              track95 = 1;
            }
          }
        }
      }

	//get percentage
	function getPercentage(event) {
		var percentage = event.position * 100 / event.duration;
		percentage = Math.round(percentage);
		return percentage;
	}
	//*******Brightcove tracking ends ********	
}


/*************************New HTML5 Brightcove Tracking***************************/

wap_tms.HTML5_brightcove = wap_tms.HTML5_brightcove || {};

                                wap_tms.HTML5_brightcove.videoPlay = function (duration, playername, id, iframe) {
                                                wap_tms.custom.video_duration = duration;
                                                ga_payload.dimension['19,hit'] = "html5";
                                                if(iframe)
                                                                ga_payload.dimension['19,hit'] = "html5-iframe";
                                                ga_payload.dimension['29,hit'] = "brightcove:" + id;
												ga_payload.dimension['64,hit'] = id;
                                                trackGaEvent('videos', "video: play", playername);                                                          
                                }
                                wap_tms.HTML5_brightcove.videoProgress = function (duration, percentage, playername, id, iframe) {              
                                                wap_tms.custom.video_duration = duration;
                                                ga_payload.dimension['19,hit'] = "html5";
                                                if(iframe)
                                                                ga_payload.dimension['19,hit'] = "html5-iframe";             
                                                ga_payload.dimension['29,hit'] = "brightcove:" + id;
												ga_payload.dimension['64,hit'] = id;
                                                switch(percentage){
                                                                case 25: trackGaEvent('Videos', "video: 25% complete", playername);
                                                                break;
                                                                case 50: trackGaEvent('Videos', "video: 50% complete", playername);
                                                                break;
                                                                case 75: trackGaEvent('Videos', "video: 75% complete", playername);
                                                                break;
                                                                case 90: trackGaEvent('Videos', "video: 90% complete", playername);
                                                                break;
                                                                case 95: trackGaEvent('Videos', "video: 95% complete", playername);
                                                                break;
                                                }
                                }
                                wap_tms.HTML5_brightcove.videoEnd = function (playername, id, iframe) {
                                                ga_payload.dimension['19,hit'] = "html5";
                                                if(iframe)
                                                                ga_payload.dimension['19,hit'] = "html5-iframe";
                                                ga_payload.dimension['29,hit'] = "brightcove:" + id;
												ga_payload.dimension['64,hit'] = id;
                                                trackGaEvent('Videos', "video: 100% complete", playername);
                                }


/*************************New HTML5 Brightcove Tracking Ends**********************/
}catch(e){}};
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"intel.profile-ssg.intel",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    db_log : [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q : [], 
      sendq :{"pending":0},
      run_ready_q : function(){
        for(var i=0;i<utag.loader.ready_q.length;i++){
          utag.DB("READY_Q:"+i);
          try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
        }
      },
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function(a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR(utag.data);
          }
        } catch (e) {utag.DB(e)};
	
	d=0;
        g=[]; 
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
	    d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

	if(d==0){
	  utag.loader.END();
	}
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined') {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?utag.cfg.template+a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          utag.DB("Attach sync: "+a.src);
          a.uid=a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_intel.profile-ssg.intel_'+a.id;
            if (!b.getElementById(c)) {
	      d = {
	        src:a.src,
		id:c,
                uid:a.id,
		loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
	      if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function(a, b, c, d, f){
        try {
          if (typeof utag.data['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0
                  }
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                }
              }
            }
          }
        } catch (e) {utag.DB(e)}
      },
      RDdom: function(o){
        var d = document || {}, l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement?d.documentElement.clientHeight:960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement?d.documentElement.clientWidth:960);
      },
      RDcp: function(o, b, c, d){
        b = utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
        //o["_t_visitor_id"]=o["cp.utag_main_v_id"];
        //o["_t_session_id"]=o["cp.utag_main_ses_id"];
      },
      RDqp: function(o, a, b, c){
        a = location.search + (location.hash+'').replace("#","&");
        if(utag.cfg.lowerqp){a=a.toLowerCase()};
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if(c.length>1){
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function(o, a, b, h){
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try{
            h = a[b].name || a[b].getAttribute("property") || ""; 
          }catch(e){h="";utag.DB(e)};
          if (utag.cfg.lowermeta){h=h.toLowerCase()};
          if (h != ""){o["meta." + h] = a[b].content}
        }
      },
      RDva: function(o){
        // Read visitor attributes in local storage
        var readAttr = function(o, l ){
          var a = "", b;
          a = localStorage.getItem(l);
          if(!a || a=="{}")return;
          b = utag.ut.flatten({va : JSON.parse(a)});
          utag.ut.merge(o,b,1);
        }
        try{
          readAttr(o, "tealium_va" );
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"] );
        }catch(e){ utag.DB(e) }
      },
      RDut: function(o, a){
        // Add built-in data types to the data layer for use in mappings, extensions and RDva function.
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        // i.e. "view" or "link"
        o["ut.event"] = a || "view";
        o["ut.visitor_id"]=o["cp.utag_main_v_id"];
        o["ut.session_id"]=o["cp.utag_main_ses_id"];
        try{
          o["ut.account"] = utag.cfg.utid.split("/")[0];
          o["ut.profile"] = utag.cfg.utid.split("/")[1];
          o["ut.env"] = utag.cfg.path.split("/")[6];
        }catch(e){ utag.DB(e) }
      },
      RDses: function( o, a, c ) {
        a = (new Date()).getTime();
        c = ( a + parseInt( utag.cfg.session_timeout ) ) + "";

        // cp.utag_main_ses_id will not be in the data layer when it has expired or this is first page view of all time
	if ( !o["cp.utag_main_ses_id"] ) {
          o["cp.utag_main_ses_id"] = a + "";
          o["cp.utag_main__ss"] = "1";
          o["cp.utag_main__sn"] = ( 1 + parseInt( o["cp.utag_main__sn"] || 0 ) ) + "";
        } else {
          o["cp.utag_main__ss"] = "0";
        }
        
        o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
        o["cp.utag_main__st"] = c;

        utag.loader.SC( "utag_main", { "_sn": ( o["cp.utag_main__sn"] || 1 ), "_ss": o["cp.utag_main__ss"], "_st": c, "ses_id": ( o["cp.utag_main_ses_id"] || a ) + ";exp-session", "_pn": o["cp.utag_main__pn"] + ";exp-session" } );
      },
      RDpv: function( o ) {
        if ( typeof utag.pagevars == "function" ) {
          utag.DB("Read page variables");
          utag.pagevars(o);
        }
      },
      RD: function( o, a ) {
        utag.DB("utag.loader.RD");
        utag.DB(o);

        utag.loader.RDcp(o);

        if ( !utag.loader.rd_flag ) {
          utag.loader.rd_flag = 1;
          o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
          o["cp.utag_main__pn"] = ( 1 + parseInt( o["cp.utag_main__pn"] || 0 ) ) + "";
          // the _st value is not-yet-set for first page view so we'll need wait to write in _pn value (which is exp-session)
          // The SC function expires (removes) cookie values that expired with the session
          utag.loader.SC( "utag_main", { "v_id": o["cp.utag_main_v_id"] } );
          utag.loader.RDses(o);
        }

        // first utag.track call for noview should not clear session start (_ss) value
        if(a && !utag.cfg.noview)utag.loader.RDses(o);
        utag.loader.RDqp(o);
        utag.loader.RDmeta(o);
        utag.loader.RDdom(o);
        utag.loader.RDut(o, a || "view");
        utag.loader.RDpv(o);
        utag.loader.RDva(o);
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){utag.DB(er)};
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a=="utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime()+(365*24*60*60*1000));
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push((g + ":").replace(/[\,\$\;\?]/g,"") + encodeURIComponent(d[g]))
          }
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function(a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
        if(!utag.loader.cfg){
           return
        }
	if(this.ol==0){
          if(utag.loader.cfg[a].block && utag.loader.cfg[a].cbf){
            this.f[a] = 1;
	    delete utag.loader.bq[a];
          }
	  for(b in utag.loader.GV(utag.loader.bq)){
            if(utag.loader.cfg[a].load==4 && utag.loader.cfg[a].wait==0){
              utag.loader.bk[a]=1;
              utag.DB("blocked: "+ a);
            }
	    utag.DB("blocking: " + b);
	    return;
	  }
	  utag.loader.INIT();
	  return;
	}
        utag.DB('utag.loader.LOAD:' + a);

        if (this.f[a] == 0) {
          this.f[a] = 1;
      	
	  if(utag.cfg.noview!=true){
	    if(utag.loader.cfg[a].send){
              utag.DB("SENDING: "+a);
              try{
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: "+a);
                  while( d = utag.loader.sendq[a].shift() ) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view',utag.handler.C(utag.data));
                }
		utag.rpt['s_' + a] = 0;
	      } catch (e) {
                utag.DB(e);
	        utag.rpt['s_' + a] = 1;
	      }
	    }
	  }
	  if(utag.loader.rf==0)return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
	  utag.loader.END();
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if(!utag.data){
            try {
              utag.cl = {'_all_': 1};
              utag.loader.initdata();    
              utag.loader.RD(utag.data);
            }catch(e){ utag.DB(e) };
          }
          if ( (document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading" ) setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;

            if(utag.loader.ready_q.length<=1){
              if (document.addEventListener) {
                RH = function() {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function() {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function(b, c, d, e, v, w){
        if(this.ended){return};
        this.ended=1;
	utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
	if(utag.handler.base && utag.handler.base!='*'){
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        }else if (utag.handler.base=='*'){
           utag.ut.merge(utag.handler.df,b,1);
        }

        utag.rpt['r_0']="t";
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }

        utag.rpt.ts['s'] = new Date();
	

        v = ".tiqcdn.com";
        w = utag.cfg.path.indexOf(v);
        if(w>0 && b["cp.utag_main__ss"]==1 && !utag.cfg.no_session_count)utag.ut.loader({src:utag.cfg.path.substring(0,w)+v+"/ut"+"ag/tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
        
        if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");
	utag.handler.INIT();
      }
    },
    DB: function(a, b) {
      // return right away if we've already checked the cookie
      if(utag.cfg.utagdb===false){
        return;
      }else if(typeof utag.cfg.utagdb=="undefined"){
        b = document.cookie+'';
        utag.cfg.utagdb=((b.indexOf('utagdb=true') >= 0)?true:false);
      }
      if(utag.cfg.utagdb===true){
        var t;
        if(utag.ut.typeOf(a) == "object"){
          t=utag.handler.C(a)
        }else{
          t=a
        }
        utag.db_log.push(t);
        try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}
      }
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function(a,c,d) {
      return this.track({event:'view', data:a, cfg:{cb:c,uids:d}})
    },
    link: function(a,c,d) {
      return this.track({event:'link', data:a, cfg:{cb:c,uids:d}})
    },
    track: function(a,b,c,d) {
      if (typeof a == "string") a = { event: a, data: b, cfg: {cb: c} };

      for(d in utag.loader.GV(utag.o)){
        try{
          utag.o[d].handler.trigger(a.event || "view", a.data || a, a.cfg)
        }catch(e){utag.DB(e)};
      }
      if(a.cfg && a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};
      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        utag.DB('utag.handler.INIT');
        if(utag.initcatch){
          utag.initcatch=0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c)
          }
        }
        //##UTABSOLUTELAST##
      },
      test: function() {
        return 1
      },
      // reset and run load rules
      LR: function(b){
        utag.DB("Load Rules");
        for(var d in utag.loader.GV(utag.cond)){
          utag.cond[d]=false;
        }
        utag.DB(b);
        utag.loader.loadrules(b);
        utag.DB(utag.cond);
        utag.loader.initcfg();
        // use the OPTOUTMULTI cookie value to override load rules
        utag.loader.OU();
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }
      },
      // The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE:function(a,b,c,d,e,f,g){
        if(c!="alr" && !this.cfg_extend){
          return 0; 
        }
        utag.DB("RE: "+c);
        if(c=="alr")utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if(typeof this.extend != "undefined"){
          g=0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* Extension Attributes */
              e=0;
              if(typeof this.cfg_extend!="undefined"){
                f=this.cfg_extend[d];
                if(typeof f.count == "undefined")f.count=0;
                if(f[a]==0 || (f.once==1 && f.count>0) || f[c]==0){
                  e=1
                }else{
                  if(f[c]==1){g=1};
                  f.count++
                }
              }
              if(e!=1){
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
	      utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function(a, b, c, d, e, f) {
        utag.DB('trigger:'+a+(c && c.uids?":"+c.uids.join(","):""));
        b = b || {};
        utag.DB(b);

        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag '+d+' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }

        // update all values for AJAX pages
        utag.ut.merge(b,this.df,0);
        utag.loader.RD( b, a );

        // clearing noview flag after the RD function call
        utag.cfg.noview = false;

        function sendTag(a, b, d){
          try {
            if(typeof utag.sender[d]!="undefined"){
              utag.DB("SENDING: "+d);
              utag.sender[d].send(a, utag.handler.C(b));
	      utag.rpt['s_' + d] = 0;
            }else if (utag.loader.cfg[d].load!=2 && utag.loader.cfg[d].s2s!=1){
              // utag.link calls can load in new tags
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({"event":a, "data":utag.handler.C(b)});
              utag.loader.sendq.pending++;
              utag.loader.AS({id : d, load : 1}); 
            }
          }catch (e) {utag.DB(e)}
        }
        
        // utag.track( { event : "view", data: {myvar : "myval" }, cfg: { uids : [1,2,10] } } );
        if(c && c.uids){
          this.RE(a,b,"alr");
          for(f=0;f<c.uids.length;f++){
            d=c.uids[f];
            // bypass load rules
            sendTag(a, b, d);
          }
        }else if(utag.cfg.load_rules_ajax){
          this.RE(a,b,"blr");
          // process load rules based on current data layer
          this.LR(b);
          this.RE(a,b,"alr");
          
          for(f = 0; f < utag.loader.cfgsort.length; f++){
            d = utag.loader.cfgsort[f];
            if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
              sendTag(a, b, d);
            }
          }
        }else{
          // legacy behavior
          this.RE(a,b,"alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a,b,"end");
      },
      // "sort-of" copy
      C: function(a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if(a[c] instanceof Array){
            b[c] = a[c].slice(0)
          }else{
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut:{
      pad: function(a,b,c,d){
        a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return ""+d+a
      },
      vi: function(t,a,b){
        if(!utag.v_id){
          a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;
        }
        return utag.v_id
      },
      hasOwn: function(o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a)
      },
      isEmptyObject: function(o, a) {
	for (a in o) {
          if (utag.ut.hasOwn(o,a))return false
        }
        return true
      },
      isEmpty: function(o) {
        var t = utag.ut.typeOf(o);
        if ( t == "number" ){
          return isNaN(o)
        }else if ( t == "boolean" ){
          return false
        }else if ( t == "string" ){
          return o.length === 0
        }else return utag.ut.isEmptyObject(o)
      },
      typeOf: function(e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function(o){
        // stop when arriving at a string, array, boolean, number (float or integer)
        var a = {}; 
        function r(c, p) {
          if (Object(c) !== c || c instanceof Array) {
            a[p] = c;
          } else {
            if(utag.ut.isEmptyObject(c)){
              //a[p] = {};
            }else{
              for (var d in c) {
                r(c[d], p ? p+"."+d : d);
              }
            }
          }
        }
        r(o, "");

        return a;
      },
      merge: function(a, b, c, d) {
        if(c){
          for(d in utag.loader.GV(b)){
            a[d] = b[d]
          }
        }else{
          for(d in utag.loader.GV(b)){
            if(typeof a[d]=="undefined")a[d] = b[d]
          }
        }
      },
      decode: function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      encode: function(a, b) {
        b = "";
        try{b = encodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      error: function(a, b, c){
        if(typeof utag_err!="undefined"){
          utag_err.push(a)
        }
      },
      loader: function(o, a, b, c, l, m) {
        utag.DB(o);
        a=document;
        if (o.type=="iframe") {
          // if iframe of same ID already exists, just reset the src value (do not create a new iframe)
          m = a.getElementById( o.id );
          if ( m && m.tagName == "IFRAME" ) {
            b = m;
          } else {
            b = a.createElement("iframe");
          }
          o.attrs = o.attrs || {};
          utag.ut.merge( o.attrs, { "height" : "1", "width" : "1", "style" : "display:none" } , 0 );
        }else if (o.type=="img"){
          utag.DB("Attach img: "+o.src);
          b = new Image();
        }else{
          b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";
        }
        if(o.id){b.id=o.id};
        for( l in utag.loader.GV(o.attrs) ){
          b.setAttribute( l, o.attrs[l] )
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb=="function") {
          if(b.addEventListener) {
            b.addEventListener("load",function(){o.cb()},false);
          }else {
            // old IE support
            b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};
          }
        }

        if ( o.type != "img" && !m ) {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to "+l+": "+o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b)
            }
          }
        }
      }
    }
  };
  utag.o['intel.profile-ssg.intel']=utag;
  utag.cfg = {
    template : "ut4.40.",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    noconsole: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    path: "//tags.tiqcdn.com/utag/intel/profile-ssg.intel/dev/",
    utid: "intel/profile-ssg.intel/201605101953"
  };
  utag.cfg.v = utag.cfg.template + "201605101953";
  utag.cond={31:0,37:0,38:0,39:0,40:0,43:0,4:0};
utag.pagevars=function(ud){ud = ud || utag.data;try{ud['js_page.wap_tms.custom.youtube']=wap_tms.custom.youtube}catch(e){utag.DB(e)};};
utag.loader.chkCanRunTime = function(s,e,d,t,o,i) {   try {       o = {           is : [s,e],           dt : [],           tm : [],           hd : 0,           ms : 0       };       for (i=0;i<2;i++){           d = o.is[i].substring(0,8);           t = o.is[i].substring(8);           o.dt[i] = new Date();           if (d !== '--------'){               o.dt[i].setFullYear(d.substring(0,4));               o.dt[i].setMonth(parseInt(d.substring(4,6))-1);               o.dt[i].setDate(d.substring(6,8));           }           if (t !== '----'){               o.dt[i].setHours(t.substring(0,2));               o.dt[i].setMinutes(t.substring(2,4));           } else {               o.dt[i].setHours(o.hd);               o.dt[i].setMinutes(o.ms);           }           o.dt[i].setSeconds(o.ms);           o.tm[i] = o.dt[i].getTime();           o.hd = 23;           o.ms = 59;       }       o.n = new Date().getTime();       return (o.n >= o.tm[0] && o.n <= o.tm[1]);   } catch (e) {       return false;   }};utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '31':try{c[31]|=(d['load_eloqua']=='true')}catch(e){utag.DB(e)}; break;
case '37':try{c[37]|=(d['wa_section']=='ssg-irc')}catch(e){utag.DB(e)}; break;
case '38':try{c[38]|=(d['js_page.wap_tms.custom.youtube'].toString().indexOf('true')>-1)}catch(e){utag.DB(e)}; break;
case '39':try{c[39]|=(d['wa_local'].toString().toLowerCase()=='us-en'.toLowerCase()&&/business|developer|channel/.test(d['content_audience']))||(/prc|apj/.test(d['wa_geo'])&&/business|developer|channel/.test(d['content_audience']))||(d['wa_local'].toString().toLowerCase()=='us-en'.toLowerCase()&&d['content_org_initiative'].toString().toLowerCase()=='resource-design-center'.toLowerCase())||(/prc|apj/.test(d['wa_geo'])&&d['content_org_initiative'].toString().toLowerCase()=='resource-design-center'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '4':try{c[4]|=(typeof d['ghostery_pid']!='undefined'&&d['ghostery_pid']!='')}catch(e){utag.DB(e)}; break;
case '40':try{c[40]|=(d['load_ghostery']=='true')}catch(e){utag.DB(e)}; break;
case '43':try{c[43]|=(/software\.intel\.com\/en-us$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/code-samples$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/code-samples\/github$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/free-software$/i.test(d['dom.url']))}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();utag.pagevars();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();        };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b,c,d,e,f,g){d=b['wa_local'];if(typeof d=='undefined')return;c=[{'tr-tr':'3956'},{'fr-fr':'3949'},{'se-sv':'3955'},{'nl-nl':'3959'},{'de-de':'3950'},{'it-it':'3960'},{'ru-ru':'3951'},{'pl-pl':'3953'},{'es-es':'3952'},{'ua-uk':'3958'},{'uk-en':'3957'},{'xe-en':'3957'},{'xl-es':'5835'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['ghostery_pid']=c[e][f];m=true};};if(m)break};if(!m)b['ghostery_pid']='';},
function(a,b){ try{ if((b['ghostery_pid'].toString().indexOf('3949')>-1&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3264'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3951'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3880'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3957'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3884'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3952'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3881'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3959'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3873'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3960'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3875'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3950'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3874'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3953'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3879'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3955'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3755'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3958'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3883'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3956'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3882'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='5835'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='5836'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['wa_local']=='us-en'&&b['dom.url'].toString().indexOf('/us/en/privacy/intel-cookie-notice.html')>-1&&b['wa_site_id'].toString().indexOf('intc:asmo-na:us-en')>-1)||(b['wa_local'].toString().indexOf('us-en')>-1&&b['dom.url'].toString().indexOf('/us/en/privacy/intel-privacy-notice.html')>-1&&b['wa_site_id'].toString().indexOf('intc:asmo-na:us-en')>-1)){b['ghostery_pid']='5838'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){b['load_bluekai']='false'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.title'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_zone'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_os'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_english_title'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_intel_technology'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_topic'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_page_type_macro'].toString().indexOf('project')>-1){b['wa_data_view_name']='android'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='androidhub.intel.com'.toLowerCase()||b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){b['wa_data_view_name']='empty'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='androidhub.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "android hub";      }else{          placeHolder = "android hub";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/ultrabook|windows/.test(b['wa_zone'])||/ultrabook|windows/.test(b['wa_os'])||/ultrabook|perceptual computing/.test(b['wa_topic'])||/ultrabook|perceptual computing/.test(b['wa_english_title'])||/ultrabook|perceptual computing/.test(b['wa_intel_technology'])||/ultrabook|perceptual computing/.test(b['wa_english_title'])||/ultrabook|perceptual computing/.test(b['dom.pathname'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "windows";      }else{          placeHolder = "windows";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/intel.com|\/pams\/|\/partner\//.test(b['dom.pathname'])||b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "windows" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/business client|vpro/.test(b['wa_zone'])||/business client|vpro/.test(b['wa_topic'])||/business client|vpro/.test(b['wa_english_title'])||/business client|vpro/.test(b['wa_intel_technology'])||/business client|vpro/.test(b['dom.title'])||/business-client|vpro/.test(b['dom.pathname'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "business client";      }else{          placeHolder = "business client";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "business client" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/cloud computing|hpc|parallel computing|avx and cpu instructions|parallel architectures|many integrated core architecture/.test(b['wa_topic'])||/cloud computing|hpc|parallel computing|avx and cpu instructions|parallel architectures|many integrated core architecture/.test(b['wa_english_title'])||b['dom.pathname'].toString().toLowerCase().indexOf('many-integrated-core'.toLowerCase())>-1||/server|multi-core|data-center|multicore|datacenter|xeon|mic-developer|intel-many-integrated-core/.test(b['dom.pathname'])||/multicore|multi core|datacenter|multi-core|data center|server|xeon|many integrated core architecture/.test(b['dom.title'])||b['wa_zone'].toString().toLowerCase().indexOf('server'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "server developer";      }else{          placeHolder = "server developer";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().toLowerCase().indexOf('datacentermanager'.toLowerCase())>-1||b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "server developer" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/intel-spd-products|-mpi-library|-mpi-benchmarks|whatif-alpha-software|intel-learning-lab|software-evaluation-center|-xe-|-xe20|software-developer-support|-sdp-home|registration-licensing|dpd|development-products|whatif|fortran-library|windows-tool-suites|c-compiler-android|-xe\/|\/improve-performance-with-recompile|technical-enterprise|special-upgrade-program-2013|supported-linux-distributions|-system-studio|\binde\b|\/intel-devtools|native-development-exp/.test(b['dom.pathname'])||/development products|parallel|tools for os x|building blocks|library|mpi|development tools|software products|education offerings|tbb|system studio|\binde\b|native development exp/.test(b['dom.title'])||/vectorization|visual fortran compiler|array visualizer|parallel computing|integrated native dev/.test(b['wa_topic'])||/vectorization|visual fortran compiler|array visualizer|parallel computing|integrated native dev/.test(b['wa_english_title'])||/performance primitives|[\s]xe|vtune|embedded|memory|collector|whatif|compiler|kernel|studio|cluster|cilk plus|system studio/.test(b['wa_intel_technology'])||/performance primitives|[\s]xe|vtune|embedded|memory|collector|whatif|compiler|kernel|studio|cluster|cilk plus|system studio|integrated native dev/.test(b['wa_software'])||/product support|product documentation/.test(b['wa_page_type_macro'])||/product support|product documentation/.test(b['wa_page_type_micro'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "dpd product";      }else{          placeHolder = "dpd product";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/\/forum\/|\/forums\/|\/blog\/|\/blogs/|/translate/|/partner\/|\/html5/.test(b['dom.pathname'])){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "dpd product" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/html5|intel-xdk/.test(b['dom.pathname'])||/html5|intel-xdk/.test(b['dom.title'])||b['wa_os'].toString().toLowerCase().indexOf('html5'.toLowerCase())>-1||b['wa_zone'].toString().toLowerCase().indexOf('html5'.toLowerCase())>-1||b['wa_topic'].toString().toLowerCase().indexOf('html5'.toLowerCase())>-1||b['wa_english_title'].toString().toLowerCase().indexOf('html5'.toLowerCase())>-1||/html5|xdk/.test(b['wa_intel_technology'])||/html5|xdk/.test(b['wa_software'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "html5";      }else{          placeHolder = "html5";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "html5" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().toLowerCase().indexOf('/iot/hardware/gateways'.toLowerCase())>-1||b['wa_topic'].toString().toLowerCase().indexOf('iot gateway'.toLowerCase())>-1||(b['wa_target_audience'].toString().toLowerCase().indexOf('professional'.toLowerCase())>-1&&b['wa_zone'].toString().toLowerCase().indexOf('internet of things'.toLowerCase())>-1)||(b['wa_target_audience'].toString().toLowerCase().indexOf('professional'.toLowerCase())>-1&&b['shop_formFactor'].toString().toLowerCase().indexOf('embedded'.toLowerCase())>-1)||(b['wa_software'].toString().toLowerCase().indexOf('wind river'.toLowerCase())>-1&&b['wa_target_audience'].toString().toLowerCase().indexOf('professional'.toLowerCase())>-1)||(b['wa_os'].toString().toLowerCase().indexOf('wind river'.toLowerCase())>-1&&b['wa_target_audience'].toString().toLowerCase().indexOf('professional'.toLowerCase())>-1)||(b['wa_target_audience'].toString().toLowerCase().indexOf('professional'.toLowerCase())>-1&&b['wa_topic'].toString().toLowerCase().indexOf('cloud computing'.toLowerCase())>-1)||(b['wa_zone'].toString().toLowerCase().indexOf('internet of things'.toLowerCase())>-1&&b['wa_topic'].toString().toLowerCase().indexOf('cloud computing'.toLowerCase())>-1)||(b['wa_zone'].toString().toLowerCase().indexOf('internet of things'.toLowerCase())>-1&&b['shop_formFactor'].toString().toLowerCase().indexOf('embedded'.toLowerCase())>-1)||(b['wa_zone'].toString().toLowerCase().indexOf('internet of things'.toLowerCase())>-1&&b['wa_os'].toString().toLowerCase().indexOf('wind river'.toLowerCase())>-1)){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "iot-commercial";      }else{          placeHolder = "iot-commercial";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_topic'].toString().toLowerCase().indexOf('touch interfaces|sensors'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "touch sensors";      }else{          placeHolder = "touch sensors";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/vtune|visual\-fortran\-compiler|threading\-building|system\-studio|mkl|math\-kernel|many|IPP|integrated\-performance\-primitives|Inspector|fortran\-compiler\-for\-linux|debug\-solutions|Clusters|cilk|c\-compiler/.test(b['dom.pathname'])||/visual fortran compiler|ipp|integrated performance primitives|c\+\+ compiler|fortran compiler for linux|mkl|math kernel|threading building|vtune|clusters|licens|inspector/.test(b['dom.title'])||/visual fortran|integrated performance primitives|c\+\+ compiler|fortran compiler for linux|math|threading building|vtune|clusters|licensing|inspector|debug|intel® software development|many|advis|cilk|system studio/.test(b['wa_topic'])||/visual fortran|integrated performance primitives|c\+\+ compiler|fortran compiler for linux|math|threading building|vtune|clusters|licensing|inspector|debug|intel® software development|many|advis|cilk|system studio/.test(b['wa_english_title'])||/visual fortran|integrated performa|c\+\+ comp|fortran compiler for linux|math|threading building|vtune|clusters|license|intel® software development|advisor|xdk/.test(b['wa_intel_technology'])||/visual fortran|integrated performa|c\+\+ comp|fortran compiler for linux|math|threading building|vtune|clusters|license|intel® software development|advisor|xdk/.test(b['wa_software'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "dpd support";      }else{          placeHolder = "dpd support";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/product support|product documentation/.test(b['wa_page_type_macro'])||/product support|product documentation/.test(b['wa_page_type_micro'])||/\/cdiag|\/translate/.test(b['dom.pathname'])){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "dpd support" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_intel_technology'].toString().toLowerCase().indexOf('software guard extension'.toLowerCase())>-1||/sgx/.test(b['dom.pathname'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "sgx";      }else{          placeHolder = "sgx";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/internet\-of\-things|\/iot|\-iot/.test(b['dom.pathname'])||b['dom.title'].toString().toLowerCase().indexOf('internet of things'.toLowerCase())>-1||/internet|professional/.test(b['wa_topic'])||b['wa_zone'].toString().toLowerCase().indexOf('internet'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "iot";      }else{          placeHolder = "iot";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "iot" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_intel_technology'].toString().toLowerCase().indexOf('storage'.toLowerCase())>-1||b['wa_topic'].toString().toLowerCase().indexOf('storage'.toLowerCase())>-1||b['wa_english_title'].toString().toLowerCase().indexOf('storage'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "storage";      }else{          placeHolder = "storage";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/gamedev|games|game-dev/.test(b['dom.pathname'])||b['dom.title'].toString().toLowerCase().indexOf('game development'.toLowerCase())>-1||b['wa_zone'].toString().toLowerCase().indexOf('game'.toLowerCase())>-1||/game dev|games/.test(b['wa_topic'])||/game dev|games/.test(b['wa_english_title'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "game development";      }else{          placeHolder = "game development";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "game development" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/realsense|real-sense/.test(b['dom.pathname'])||b['dom.title'].toString().toLowerCase().indexOf('realsense'.toLowerCase())>-1||b['wa_zone'].toString().toLowerCase().indexOf('realsense'.toLowerCase())>-1||b['wa_intel_technology'].toString().toLowerCase().indexOf('realsense'.toLowerCase())>-1||b['wa_software'].toString().toLowerCase().indexOf('realsense'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "real sense";      }else{          placeHolder = "real sense";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/\/pams\/|\/partner\//.test(b['dom.pathname'])||b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "real sense" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/\/forums\/networking\//.test(b['dom.pathname'])||b['wa_zone'].toString().toLowerCase().indexOf('networking'.toLowerCase())>-1||b['wa_intel_technology'].toString().toLowerCase().indexOf('networking'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "networking";      }else{          placeHolder = "networking";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "networking" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/modern-code/.test(b['dom.pathname'])||/code modernization|modern code/.test(b['wa_topic'])||b['wa_english_title'].toString().indexOf('moderncode')>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "modern code";      }else{          placeHolder = "modern code";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_data_view_name'].toString().toLowerCase()=='empty'.toLowerCase()){try{b['wa_data_view_name']=delete utag_data.wa_data_view_name;}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['user_agent'].toString().toLowerCase().indexOf('windows nt 6.1'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 6.0'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 5.2'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 5.1'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 5.01'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 5.0'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 4.0'.toLowerCase())>-1){b['content_ter_initiative']='ob'} } catch(e){ utag.DB(e) }  }];
  utag.handler.cfg_extend=[{"alr":1,"bwq":0,"id":"3","blr":0,"end":0},{"alr":1,"bwq":0,"id":"4","blr":0,"end":0},{"alr":1,"bwq":0,"id":"5","blr":0,"end":0},{"alr":1,"bwq":0,"id":"6","blr":0,"end":0},{"alr":1,"bwq":0,"id":"7","blr":0,"end":0},{"alr":1,"bwq":0,"id":"8","blr":0,"end":0},{"alr":1,"bwq":0,"id":"9","blr":0,"end":0},{"alr":1,"bwq":0,"id":"10","blr":0,"end":0},{"alr":1,"bwq":0,"id":"11","blr":0,"end":0},{"alr":1,"bwq":0,"id":"12","blr":0,"end":0},{"alr":1,"bwq":0,"id":"13","blr":0,"end":0},{"alr":1,"bwq":0,"id":"14","blr":0,"end":0},{"alr":1,"bwq":0,"id":"20","blr":0,"end":0},{"alr":1,"bwq":0,"id":"21","blr":0,"end":0},{"alr":1,"bwq":0,"id":"22","blr":0,"end":0},{"alr":1,"bwq":0,"id":"30","blr":0,"end":0},{"alr":1,"bwq":0,"id":"31","blr":0,"end":0},{"alr":1,"bwq":0,"id":"37","blr":0,"end":0},{"alr":1,"bwq":0,"id":"39","blr":0,"end":0},{"alr":1,"bwq":0,"id":"40","blr":0,"end":0},{"alr":1,"bwq":0,"id":"41","blr":0,"end":0},{"alr":1,"bwq":0,"id":"42","blr":0,"end":0},{"alr":1,"bwq":0,"id":"43","blr":0,"end":0},{"alr":1,"bwq":0,"id":"44","blr":0,"end":0},{"alr":1,"bwq":0,"id":"45","blr":0,"end":0},{"alr":1,"bwq":0,"id":"46","blr":0,"end":0},{"alr":1,"bwq":0,"id":"47","blr":0,"end":0},{"alr":1,"bwq":0,"id":"48","blr":0,"end":0},{"alr":1,"bwq":0,"id":"52","blr":0,"end":0},{"alr":1,"bwq":0,"id":"53","blr":0,"end":0},{"alr":1,"bwq":0,"id":"54","blr":0,"end":0},{"alr":1,"bwq":0,"id":"55","blr":0,"end":0},{"alr":1,"bwq":0,"id":"56","blr":0,"end":0},{"alr":1,"bwq":0,"id":"57","blr":0,"end":0},{"alr":1,"bwq":0,"id":"58","blr":0,"end":0},{"alr":1,"bwq":0,"id":"59","blr":0,"end":0},{"alr":1,"bwq":0,"id":"60","blr":0,"end":0},{"alr":1,"bwq":0,"id":"61","blr":0,"end":0},{"alr":1,"bwq":0,"id":"62","blr":0,"end":0},{"alr":1,"bwq":0,"id":"63","blr":0,"end":0},{"alr":1,"bwq":0,"id":"64","blr":0,"end":0},{"alr":1,"bwq":0,"id":"65","blr":0,"end":0},{"alr":1,"bwq":0,"id":"72","blr":0,"end":0},{"alr":1,"bwq":0,"id":"70","blr":0,"end":0},{"alr":1,"bwq":0,"id":"69","blr":0,"end":0}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"2":{load:4,send:1,v:201604282305,wait:0,tid:7110},"3":{load:(utag.cond[4] && utag.cond[40]),send:1,v:201604282305,wait:1,tid:7122},"10":{load:utag.cond[31],send:1,v:201604282305,wait:1,tid:5001},"18":{load:utag.cond[37],send:1,v:201603021734,wait:1,tid:20010},"21":{load:utag.cond[38],send:1,v:201603081710,wait:1,tid:20010},"34":{load:4,send:utag.cond[39],v:201604282305,wait:1,tid:20064},"35":{load:utag.cond[39],send:1,v:201604282305,wait:1,tid:20010},"38":{load:utag.cond[43],send:1,v:201605101452,wait:1,tid:8009}};
utag.loader.cfgsort=["2","3","10","18","21","34","35","38"];
  }
utag.loader.initcfg();
}

  if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i]};
  utag.loader.PINIT = function(a,b,c){
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // Even if noview flag is set, we still want to load in tags and have them ready to fire
      // FUTURE: blr = "before load rules"
      if(utag.handler.RE('view',utag.data,"blr")){
        utag.handler.LR(utag.data);
      }
      
    }catch(e){utag.DB(e)};
    // process 'blocking' tags (tags that need to run first)
    a=this.cfg;
    c=0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if(a[b].block == 1 || (a[b].load>0 && (typeof a[b].src!='undefined'&&a[b].src!=''))){
        a[b].block = 1;
        c=1;
        this.bq[b]=1;
      }
    }
    if(c==1) {
      for (b in this.GV(a)) {
        if(a[b].block){
          // handle case of bundled and blocking (change 4 to 1)
          // (bundled tags that do not have a .src should really never be set to block... they just run first)
          a[b].id=b; 
          if(a[b].load==4)a[b].load=1; 
 	  a[b].cb=function(){
            var d=this.uid;
            utag.loader.cfg[d].cbf=1;
            utag.loader.LOAD(d)
          };
          this.AS(a[b]);
        }
      }
    }
    if(c==0)this.INIT();
  };
  utag.loader.INIT = function(a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    // The All Tags scope extensions run after blocking tags complete
    // The noview flag means to skip these Extensions (will run later for manual utag.view call)
    if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr"); 

    utag.rpt.ts['i'] = new Date();
     
    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a=0;a<d.length;a++){
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      // s2s (ServerStream) tags do not load client-side
      if(b.block != 1 && b.s2s != 1){
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        if (utag.loader.bk[b.id] || ((utag.cfg.readywait||utag.cfg.noview) && b.load==4)){
          this.f[b.id]=0;
          utag.loader.LOAD(b.id)
        }else if (b.wait == 1 && utag.loader.rf == 0) {
	  utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id]=2;
        }else if (b.load>0){
	  utag.DB('utag.loader.INIT: loading ' + b.id);
	  this.lq.push(b);
          this.AS(b);
        }
      }
    }
          
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf=1;
        utag.loader.WQ();
      }
    });
    else if(this.lq.length>0)utag.loader.rf=1;
    else if(this.lq.length==0)utag.loader.END();

    return 1
  };
  

  if(utag.cfg.readywait || utag.cfg.waittimer){
    utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.loader.rf=1;
        utag.cfg.readywait=1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function(){utag.loader.PINIT()}, utag.cfg.waittimer || 1);
      }
    })
  }else{
    utag.loader.PINIT()
  }
}


//~~tv:7110.20140501
//~~tc: Adding support for Display Advertising Features. Adding list of cross-domain tracking domains from tag config.

//configure before GA tag
utag_data.wa_site_id_audience = utag_data.content_audience + ":" + utag_data.content_sub_audience + ":" + utag_data.content_org_initiative + ":" + utag_data.content_sub_org_initiative + ":" + utag_data.content_program + ":" + utag_data.content_product + ":" + utag_data.wa_site_id;

//Init GA object
window['GoogleAnalyticsObject'] = 'gawap';
window['gawap'] = window['gawap'] || function() {
    (window['gawap'].q = window['gawap'].q || []).push(arguments)
}, window['gawap'].l = 1 * new Date();

//START local copy of GA script: //www.google-analytics.com/analytics.js - 03/07/16
(function(){var $c=function(a){this.w=a||[]};$c.prototype.set=function(a){this.w[a]=!0};$c.prototype.encode=function(){for(var a=[],b=0;b<this.w.length;b++)this.w[b]&&(a[Math.floor(b/6)]^=1<<b%6);for(b=0;b<a.length;b++)a[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b]||0);return a.join("")+"~"};var vd=new $c;function J(a){vd.set(a)}var Nd=function(a,b){var c=new $c(Dd(a));c.set(b);a.set(Gd,c.w)},Td=function(a){a=Dd(a);a=new $c(a);for(var b=vd.w.slice(),c=0;c<a.w.length;c++)b[c]=b[c]||a.w[c];return(new $c(b)).encode()},Dd=function(a){a=a.get(Gd);ka(a)||(a=[]);return a};var ea=function(a){return"function"==typeof a},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a){return void 0!=a&&-1<(a.constructor+"").indexOf("String")},D=function(a,b){return 0==a.indexOf(b)},sa=function(a){return a?a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},ta=function(a){var b=M.createElement("img");b.width=1;b.height=1;b.src=a;return b},ua=function(){},K=function(a){if(encodeURIComponent instanceof Function)return encodeURIComponent(a);J(28);return a},
L=function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}catch(e){J(27)}},wa=function(a,b){if(a){var c=M.createElement("script");c.type="text/javascript";c.async=!0;c.src=a;b&&(c.id=b);var d=M.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}},Ud=function(){return"https:"==M.location.protocol},xa=function(){var a=""+M.location.hostname;return 0==a.indexOf("www.")?a.substring(4):a},ya=function(a){var b=M.referrer;if(/^https?:\/\//i.test(b)){if(a)return b;
    a="//"+M.location.hostname;var c=b.indexOf(a);if(5==c||6==c)if(a=b.charAt(c+a.length),"/"==a||"?"==a||""==a||":"==a)return;return b}},za=function(a,b){if(1==b.length&&null!=b[0]&&"object"===typeof b[0])return b[0];for(var c={},d=Math.min(a.length+1,b.length),e=0;e<d;e++)if("object"===typeof b[e]){for(var g in b[e])b[e].hasOwnProperty(g)&&(c[g]=b[e][g]);break}else e<a.length&&(c[a[e]]=b[e]);return c};var ee=function(){this.keys=[];this.values={};this.m={}};ee.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[":"+a]=b:this.values[":"+a]=b};ee.prototype.get=function(a){return this.m.hasOwnProperty(":"+a)?this.m[":"+a]:this.values[":"+a]};ee.prototype.map=function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b],d=this.get(c);d&&a(c,d)}};var O=window,M=document;var Aa=function(a){var b=O._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===O["ga-disable-"+a])return!0;try{var c=O.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(d){}return!1};var Ca=function(a){var b=[],c=M.cookie.split(";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push(e[1])}return b},zc=function(a,b,c,d,e,g){e=Aa(e)?!1:eb.test(M.location.hostname)||"/"==c&&vc.test(d)?!1:!0;if(!e)return!1;b&&1200<b.length&&(b=b.substring(0,1200),J(24));c=a+"="+b+"; path="+c+"; ";g&&(c+="expires="+(new Date((new Date).getTime()+g)).toGMTString()+"; ");d&&"none"!=d&&(c+="domain="+d+";");d=M.cookie;M.cookie=c;if(!(d=d!=M.cookie))a:{a=
    Ca(a);for(d=0;d<a.length;d++)if(b==a[d]){d=!0;break a}d=!1}return d},Cc=function(a){return K(a).replace(/\(/g,"%28").replace(/\)/g,"%29")},vc=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,eb=/(^|\.)doubleclick\.net$/i;var oc=function(){return(Ba||Ud()?"https:":"http:")+"//www.google-analytics.com"},Da=function(a){this.name="len";this.message=a+"-8192"},ba=function(a,b,c){c=c||ua;if(2036>=b.length)wc(a,b,c);else if(8192>=b.length)x(a,b,c)||wd(a,b,c)||wc(a,b,c);else throw ge("len",b.length),new Da(b.length);},wc=function(a,b,c){var d=ta(a+"?"+b);d.onload=d.onerror=function(){d.onload=null;d.onerror=null;c()}},wd=function(a,b,c){var d=O.XMLHttpRequest;if(!d)return!1;var e=new d;if(!("withCredentials"in e))return!1;
        e.open("POST",a,!0);e.withCredentials=!0;e.setRequestHeader("Content-Type","text/plain");e.onreadystatechange=function(){4==e.readyState&&(c(),e=null)};e.send(b);return!0},x=function(a,b,c){return O.navigator.sendBeacon?O.navigator.sendBeacon(a,b)?(c(),!0):!1:!1},ge=function(a,b,c){1<=100*Math.random()||Aa("?")||(a=["t=error","_e="+a,"_v=j41","sr=1"],b&&a.push("_f="+b),c&&a.push("_m="+K(c.substring(0,100))),a.push("aip=1"),a.push("z="+hd()),wc(oc()+"/collect",a.join("&"),ua))};var Ha=function(){this.M=[]};Ha.prototype.add=function(a){this.M.push(a)};Ha.prototype.D=function(a){try{for(var b=0;b<this.M.length;b++){var c=a.get(this.M[b]);c&&ea(c)&&c.call(O,a)}}catch(d){}b=a.get(Ia);b!=ua&&ea(b)&&(a.set(Ia,ua,!0),setTimeout(b,10))};function Ja(a){if(100!=a.get(Ka)&&La(P(a,Q))%1E4>=100*R(a,Ka))throw"abort";}function Ma(a){if(Aa(P(a,Na)))throw"abort";}function Oa(){var a=M.location.protocol;if("http:"!=a&&"https:"!=a)throw"abort";}
    function Pa(a){try{O.navigator.sendBeacon?J(42):O.XMLHttpRequest&&"withCredentials"in new O.XMLHttpRequest&&J(40)}catch(c){}a.set(ld,Td(a),!0);a.set(Ac,R(a,Ac)+1);var b=[];Qa.map(function(c,d){if(d.F){var e=a.get(c);void 0!=e&&e!=d.defaultValue&&("boolean"==typeof e&&(e*=1),b.push(d.F+"="+K(""+e)))}});b.push("z="+Bd());a.set(Ra,b.join("&"),!0)}
    function Sa(a){var b=P(a,gd)||oc()+"/collect",c=P(a,fa);!c&&a.get(Vd)&&(c="beacon");if(c){var d=P(a,Ra),e=a.get(Ia),e=e||ua;"image"==c?wc(b,d,e):"xhr"==c&&wd(b,d,e)||"beacon"==c&&x(b,d,e)||ba(b,d,e)}else ba(b,P(a,Ra),a.get(Ia));a.set(Ia,ua,!0)}function Hc(a){var b=O.gaData;b&&(b.expId&&a.set(Nc,b.expId),b.expVar&&a.set(Oc,b.expVar))}function cd(){if(O.navigator&&"preview"==O.navigator.loadPurpose)throw"abort";}function yd(a){var b=O.gaDevIds;ka(b)&&0!=b.length&&a.set("&did",b.join(","),!0)}
    function vb(a){if(!a.get(Na))throw"abort";};var hd=function(){return Math.round(2147483647*Math.random())},Bd=function(){try{var a=new Uint32Array(1);O.crypto.getRandomValues(a);return a[0]&2147483647}catch(b){return hd()}};function Ta(a){var b=R(a,Ua);500<=b&&J(15);var c=P(a,Va);if("transaction"!=c&&"item"!=c){var c=R(a,Wa),d=(new Date).getTime(),e=R(a,Xa);0==e&&a.set(Xa,d);e=Math.round(2*(d-e)/1E3);0<e&&(c=Math.min(c+e,20),a.set(Xa,d));if(0>=c)throw"abort";a.set(Wa,--c)}a.set(Ua,++b)};var Ya=function(){this.data=new ee},Qa=new ee,Za=[];Ya.prototype.get=function(a){var b=$a(a),c=this.data.get(a);b&&void 0==c&&(c=ea(b.defaultValue)?b.defaultValue():b.defaultValue);return b&&b.Z?b.Z(this,a,c):c};var P=function(a,b){var c=a.get(b);return void 0==c?"":""+c},R=function(a,b){var c=a.get(b);return void 0==c||""===c?0:1*c};Ya.prototype.set=function(a,b,c){if(a)if("object"==typeof a)for(var d in a)a.hasOwnProperty(d)&&ab(this,d,a[d],c);else ab(this,a,b,c)};
    var ab=function(a,b,c,d){if(void 0!=c)switch(b){case Na:wb.test(c)}var e=$a(b);e&&e.o?e.o(a,b,c,d):a.data.set(b,c,d)},bb=function(a,b,c,d,e){this.name=a;this.F=b;this.Z=d;this.o=e;this.defaultValue=c},$a=function(a){var b=Qa.get(a);if(!b)for(var c=0;c<Za.length;c++){var d=Za[c],e=d[0].exec(a);if(e){b=d[1](e);Qa.set(b.name,b);break}}return b},yc=function(a){var b;Qa.map(function(c,d){d.F==a&&(b=d)});return b&&b.name},S=function(a,b,c,d,e){a=new bb(a,b,c,d,e);Qa.set(a.name,a);return a.name},cb=function(a,
    b){Za.push([new RegExp("^"+a+"$"),b])},T=function(a,b,c){return S(a,b,c,void 0,db)},db=function(){};var gb=qa(window.GoogleAnalyticsObject)&&sa(window.GoogleAnalyticsObject)||"ga",Ba=!1,he=S("_br"),hb=T("apiVersion","v"),ib=T("clientVersion","_v");S("anonymizeIp","aip");var jb=S("adSenseId","a"),Va=S("hitType","t"),Ia=S("hitCallback"),Ra=S("hitPayload");S("nonInteraction","ni");S("currencyCode","cu");S("dataSource","ds");var Vd=S("useBeacon",void 0,!1),fa=S("transport");S("sessionControl","sc","");S("sessionGroup","sg");S("queueTime","qt");var Ac=S("_s","_s");S("screenName","cd");
    var kb=S("location","dl",""),lb=S("referrer","dr"),mb=S("page","dp","");S("hostname","dh");var nb=S("language","ul"),ob=S("encoding","de");S("title","dt",function(){return M.title||void 0});cb("contentGroup([0-9]+)",function(a){return new bb(a[0],"cg"+a[1])});var pb=S("screenColors","sd"),qb=S("screenResolution","sr"),rb=S("viewportSize","vp"),sb=S("javaEnabled","je"),tb=S("flashVersion","fl");S("campaignId","ci");S("campaignName","cn");S("campaignSource","cs");S("campaignMedium","cm");
    S("campaignKeyword","ck");S("campaignContent","cc");var ub=S("eventCategory","ec"),xb=S("eventAction","ea"),yb=S("eventLabel","el"),zb=S("eventValue","ev"),Bb=S("socialNetwork","sn"),Cb=S("socialAction","sa"),Db=S("socialTarget","st"),Eb=S("l1","plt"),Fb=S("l2","pdt"),Gb=S("l3","dns"),Hb=S("l4","rrt"),Ib=S("l5","srt"),Jb=S("l6","tcp"),Kb=S("l7","dit"),Lb=S("l8","clt"),Mb=S("timingCategory","utc"),Nb=S("timingVar","utv"),Ob=S("timingLabel","utl"),Pb=S("timingValue","utt");S("appName","an");
    S("appVersion","av","");S("appId","aid","");S("appInstallerId","aiid","");S("exDescription","exd");S("exFatal","exf");var Nc=S("expId","xid"),Oc=S("expVar","xvar"),Rc=S("_utma","_utma"),Sc=S("_utmz","_utmz"),Tc=S("_utmht","_utmht"),Ua=S("_hc",void 0,0),Xa=S("_ti",void 0,0),Wa=S("_to",void 0,20);cb("dimension([0-9]+)",function(a){return new bb(a[0],"cd"+a[1])});cb("metric([0-9]+)",function(a){return new bb(a[0],"cm"+a[1])});S("linkerParam",void 0,void 0,Bc,db);var ld=S("usage","_u"),Gd=S("_um");
    S("forceSSL",void 0,void 0,function(){return Ba},function(a,b,c){J(34);Ba=!!c});var ed=S("_j1","jid");cb("\\&(.*)",function(a){var b=new bb(a[0],a[1]),c=yc(a[0].substring(1));c&&(b.Z=function(a){return a.get(c)},b.o=function(a,b,g,ca){a.set(c,g,ca)},b.F=void 0);return b});
    var Qb=T("_oot"),dd=S("previewTask"),Rb=S("checkProtocolTask"),md=S("validationTask"),Sb=S("checkStorageTask"),Uc=S("historyImportTask"),Tb=S("samplerTask"),Vb=S("_rlt"),Wb=S("buildHitTask"),Xb=S("sendHitTask"),Vc=S("ceTask"),zd=S("devIdTask"),Cd=S("timingTask"),Ld=S("displayFeaturesTask"),V=T("name"),Q=T("clientId","cid"),Ad=S("userId","uid"),Na=T("trackingId","tid"),U=T("cookieName",void 0,"_ga"),W=T("cookieDomain"),Yb=T("cookiePath",void 0,"/"),Zb=T("cookieExpires",void 0,63072E3),$b=T("legacyCookieDomain"),
    Wc=T("legacyHistoryImport",void 0,!0),ac=T("storage",void 0,"cookie"),bc=T("allowLinker",void 0,!1),cc=T("allowAnchor",void 0,!0),Ka=T("sampleRate","sf",100),dc=T("siteSpeedSampleRate",void 0,1),ec=T("alwaysSendReferrer",void 0,!1),gd=S("transportUrl"),Md=S("_r","_r");function X(a,b,c,d){b[a]=function(){try{return d&&J(d),c.apply(this,arguments)}catch(b){throw ge("exc",a,b&&b.name),b;}}};var Od=function(a,b,c){this.V=1E4;this.fa=a;this.$=!1;this.B=b;this.ea=c||1},Ed=function(a,b){var c;if(a.fa&&a.$)return 0;a.$=!0;if(b){if(a.B&&R(b,a.B))return R(b,a.B);if(0==b.get(dc))return 0}if(0==a.V)return 0;void 0===c&&(c=Bd());return 0==c%a.V?Math.floor(c/a.V)%a.ea+1:0};var ie=new Od(!0,he,7),je=function(a){if(!Ud()&&!Ba){var b=Ed(ie,a);if(b&&!(!O.navigator.sendBeacon&&4<=b&&6>=b)){var c=(new Date).getHours(),d=[Bd(),Bd(),Bd()].join(".");a=(3==b||5==b?"https:":"http:")+"//www.google-analytics.com/collect?z=br.";a+=[b,"A",c,d].join(".");var e=1!=b%3?"https:":"http:",e=e+"//www.google-analytics.com/collect?z=br.",e=e+[b,"B",c,d].join(".");7==b&&(e=e.replace("//www.","//ssl."));c=function(){4<=b&&6>=b?O.navigator.sendBeacon(e,""):ta(e)};Bd()%2?(ta(a),c()):(c(),ta(a))}}};function fc(){var a,b,c;if((c=(c=O.navigator)?c.plugins:null)&&c.length)for(var d=0;d<c.length&&!b;d++){var e=c[d];-1<e.name.indexOf("Shockwave Flash")&&(b=e.description)}if(!b)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),b=a.GetVariable("$version")}catch(g){}if(!b)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),b="WIN 6,0,21,0",a.AllowScriptAccess="always",b=a.GetVariable("$version")}catch(g){}if(!b)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),b=a.GetVariable("$version")}catch(g){}b&&
    (a=b.match(/[\d]+/g))&&3<=a.length&&(b=a[0]+"."+a[1]+" r"+a[2]);return b||void 0};var gc=function(a,b){var c=Math.min(R(a,dc),100);if(!(La(P(a,Q))%100>=c)&&(c={},Ec(c)||Fc(c))){var d=c[Eb];void 0==d||Infinity==d||isNaN(d)||(0<d?(Y(c,Gb),Y(c,Jb),Y(c,Ib),Y(c,Fb),Y(c,Hb),Y(c,Kb),Y(c,Lb),b(c)):L(O,"load",function(){gc(a,b)},!1))}},Ec=function(a){var b=O.performance||O.webkitPerformance,b=b&&b.timing;if(!b)return!1;var c=b.navigationStart;if(0==c)return!1;a[Eb]=b.loadEventStart-c;a[Gb]=b.domainLookupEnd-b.domainLookupStart;a[Jb]=b.connectEnd-b.connectStart;a[Ib]=b.responseStart-b.requestStart;
        a[Fb]=b.responseEnd-b.responseStart;a[Hb]=b.fetchStart-c;a[Kb]=b.domInteractive-c;a[Lb]=b.domContentLoadedEventStart-c;return!0},Fc=function(a){if(O.top!=O)return!1;var b=O.external,c=b&&b.onloadT;b&&!b.isValidLoadTime&&(c=void 0);2147483648<c&&(c=void 0);0<c&&b.setPageReadyTime();if(void 0==c)return!1;a[Eb]=c;return!0},Y=function(a,b){var c=a[b];if(isNaN(c)||Infinity==c||0>c)a[b]=void 0},Fd=function(a){return function(b){"pageview"!=b.get(Va)||a.I||(a.I=!0,gc(b,function(b){a.send("timing",b)}))}};var hc=!1,mc=function(a){if("cookie"==P(a,ac)){var b=P(a,U),c=nd(a),d=kc(P(a,Yb)),e=lc(P(a,W)),g=1E3*R(a,Zb),ca=P(a,Na);if("auto"!=e)zc(b,c,d,e,ca,g)&&(hc=!0);else{J(32);var l;a:{c=[];e=xa().split(".");if(4==e.length&&(l=e[e.length-1],parseInt(l,10)==l)){l=["none"];break a}for(l=e.length-2;0<=l;l--)c.push(e.slice(l).join("."));c.push("none");l=c}for(var k=0;k<l.length;k++)if(e=l[k],a.data.set(W,e),c=nd(a),zc(b,c,d,e,ca,g)){hc=!0;return}a.data.set(W,"auto")}}},nc=function(a){if("cookie"==P(a,ac)&&
        !hc&&(mc(a),!hc))throw"abort";},Yc=function(a){if(a.get(Wc)){var b=P(a,W),c=P(a,$b)||xa(),d=Xc("__utma",c,b);d&&(J(19),a.set(Tc,(new Date).getTime(),!0),a.set(Rc,d.R),(b=Xc("__utmz",c,b))&&d.hash==b.hash&&a.set(Sc,b.R))}},nd=function(a){var b=Cc(P(a,Q)),c=ic(P(a,W));a=jc(P(a,Yb));1<a&&(c+="-"+a);return["GA1",c,b].join(".")},Gc=function(a,b,c){for(var d=[],e=[],g,ca=0;ca<a.length;ca++){var l=a[ca];l.H[c]==b?d.push(l):void 0==g||l.H[c]<g?(e=[l],g=l.H[c]):l.H[c]==g&&e.push(l)}return 0<d.length?d:e},
        lc=function(a){return 0==a.indexOf(".")?a.substr(1):a},ic=function(a){return lc(a).split(".").length},kc=function(a){if(!a)return"/";1<a.length&&a.lastIndexOf("/")==a.length-1&&(a=a.substr(0,a.length-1));0!=a.indexOf("/")&&(a="/"+a);return a},jc=function(a){a=kc(a);return"/"==a?1:a.split("/").length};function Xc(a,b,c){"none"==b&&(b="");var d=[],e=Ca(a);a="__utma"==a?6:2;for(var g=0;g<e.length;g++){var ca=(""+e[g]).split(".");ca.length>=a&&d.push({hash:ca[0],R:e[g],O:ca})}return 0==d.length?void 0:1==d.length?d[0]:Zc(b,d)||Zc(c,d)||Zc(null,d)||d[0]}function Zc(a,b){var c,d;null==a?c=d=1:(c=La(a),d=La(D(a,".")?a.substring(1):"."+a));for(var e=0;e<b.length;e++)if(b[e].hash==c||b[e].hash==d)return b[e]};var od=new RegExp(/^https?:\/\/([^\/:]+)/),pd=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;function Bc(a){a=a.get(Q);var b=Ic(a,0);return"_ga=1."+K(b+"."+a)}function Ic(a,b){for(var c=new Date,d=O.navigator,e=d.plugins||[],c=[a,d.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b],d=0;d<e.length;++d)c.push(e[d].description);return La(c.join("."))}var Dc=function(a){J(48);this.target=a;this.T=!1};
    Dc.prototype.ca=function(a,b){if(a.tagName){if("a"==a.tagName.toLowerCase()){a.href&&(a.href=qd(this,a.href,b));return}if("form"==a.tagName.toLowerCase())return rd(this,a)}if("string"==typeof a)return qd(this,a,b)};
    var qd=function(a,b,c){var d=pd.exec(b);d&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a.target.get("linkerParam");var e=b.indexOf("?"),d=b.indexOf("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b.substring(0,d)+c+a+b.substring(d));return b=b.replace(/&+_ga=/,"&_ga=")},rd=function(a,b){if(b&&b.action){var c=a.target.get("linkerParam").split("=")[1];if("get"==b.method.toLowerCase()){for(var d=b.childNodes||[],e=0;e<d.length;e++)if("_ga"==d[e].name){d[e].setAttribute("value",c);return}d=
    M.createElement("input");d.setAttribute("type","hidden");d.setAttribute("name","_ga");d.setAttribute("value",c);b.appendChild(d)}else"post"==b.method.toLowerCase()&&(b.action=qd(a,b.action))}};
    Dc.prototype.S=function(a,b,c){function d(c){try{c=c||O.event;var d;a:{var g=c.target||c.srcElement;for(c=100;g&&0<c;){if(g.href&&g.nodeName.match(/^a(?:rea)?$/i)){d=g;break a}g=g.parentNode;c--}d={}}("http:"==d.protocol||"https:"==d.protocol)&&sd(a,d.hostname||"")&&d.href&&(d.href=qd(e,d.href,b))}catch(w){J(26)}}var e=this;this.T||(this.T=!0,L(M,"mousedown",d,!1),L(M,"keyup",d,!1));if(c){c=function(b){b=b||O.event;if((b=b.target||b.srcElement)&&b.action){var c=b.action.match(od);c&&sd(a,c[1])&&rd(e,
    b)}};for(var g=0;g<M.forms.length;g++)L(M.forms[g],"submit",c)}};function sd(a,b){if(b==M.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1};var Jd=function(a,b,c){this.U=ed;this.aa=b;(b=c)||(b=(b=P(a,V))&&"t0"!=b?Wd.test(b)?"_gat_"+Cc(P(a,Na)):"_gat_"+Cc(b):"_gat");this.Y=b},Rd=function(a,b){var c=b.get(Wb);b.set(Wb,function(b){Pd(a,b);var d=c(b);Qd(a,b);return d});var d=b.get(Xb);b.set(Xb,function(b){var c=d(b);Id(a,b);return c})},Pd=function(a,b){b.get(a.U)||("1"==Ca(a.Y)[0]?b.set(a.U,"",!0):b.set(a.U,""+hd(),!0))},Qd=function(a,b){b.get(a.U)&&zc(a.Y,"1",b.get(Yb),b.get(W),b.get(Na),6E5)},Id=function(a,b){if(b.get(a.U)){var c=new ee,
    d=function(a){$a(a).F&&c.set($a(a).F,b.get(a))};d(hb);d(ib);d(Na);d(Q);d(Ad);d(a.U);c.set($a(ld).F,Td(b));var e=a.aa;c.map(function(a,b){e+=K(a)+"=";e+=K(""+b)+"&"});e+="z="+hd();ta(e);b.set(a.U,"",!0)}},Wd=/^gtm\d+$/;var fd=function(a,b){var c=a.b;if(!c.get("dcLoaded")){Nd(c,29);b=b||{};var d;b[U]&&(d=Cc(b[U]));d=new Jd(c,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",d);Rd(d,c);c.set("dcLoaded",!0)}};var Sd=function(a){if(!a.get("dcLoaded")&&"cookie"==a.get(ac)){Nd(a,51);var b=new Jd(a);Pd(b,a);Qd(b,a);a.get(b.U)&&(a.set(Md,1,!0),a.set(gd,oc()+"/r/collect",!0))}};var Lc=function(){var a=O.gaGlobal=O.gaGlobal||{};return a.hid=a.hid||hd()};var ad,bd=function(a,b,c){if(!ad){var d;d=M.location.hash;var e=O.name,g=/^#?gaso=([^&]*)/;if(e=(d=(d=d&&d.match(g)||e&&e.match(g))?d[1]:Ca("GASO")[0]||"")&&d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))zc("GASO",""+d,c,b,a,0),window._udo||(window._udo=b),window._utcp||(window._utcp=c),a=e[1],wa("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+hd(),"_gasojs");ad=!0}};var wb=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,pc=function(a){function b(a,b){d.b.data.set(a,b)}function c(a,c){b(a,c);d.filters.add(a)}var d=this;this.b=new Ya;this.filters=new Ha;b(V,a[V]);b(Na,sa(a[Na]));b(U,a[U]);b(W,a[W]||xa());b(Yb,a[Yb]);b(Zb,a[Zb]);b($b,a[$b]);b(Wc,a[Wc]);b(bc,a[bc]);b(cc,a[cc]);b(Ka,a[Ka]);b(dc,a[dc]);b(ec,a[ec]);b(ac,a[ac]);b(Ad,a[Ad]);b(hb,1);b(ib,"j41");c(Qb,Ma);c(dd,cd);c(Rb,Oa);c(md,vb);c(Sb,nc);c(Uc,Yc);c(Tb,Ja);c(Vb,Ta);c(Vc,Hc);c(zd,yd);c(Ld,Sd);c(Wb,Pa);c(Xb,Sa);c(Cd,Fd(this));
        Jc(this.b,a[Q]);Kc(this.b);this.b.set(jb,Lc());bd(this.b.get(Na),this.b.get(W),this.b.get(Yb))},Jc=function(a,b){if("cookie"==P(a,ac)){hc=!1;var c;b:{var d=Ca(P(a,U));if(d&&!(1>d.length)){c=[];for(var e=0;e<d.length;e++){var g;g=d[e].split(".");var ca=g.shift();("GA1"==ca||"1"==ca)&&1<g.length?(ca=g.shift().split("-"),1==ca.length&&(ca[1]="1"),ca[0]*=1,ca[1]*=1,g={H:ca,s:g.join(".")}):g=void 0;g&&c.push(g)}if(1==c.length){J(13);c=c[0].s;break b}if(0==c.length)J(12);else{J(14);d=ic(P(a,W));c=Gc(c,
        d,0);if(1==c.length){c=c[0].s;break b}d=jc(P(a,Yb));c=Gc(c,d,1);c=c[0]&&c[0].s;break b}}c=void 0}c||(c=P(a,W),d=P(a,$b)||xa(),c=Xc("__utma",d,c),void 0!=c?(J(10),c=c.O[1]+"."+c.O[2]):c=void 0);c&&(a.data.set(Q,c),hc=!0)}c=a.get(cc);if(e=(c=M.location[c?"href":"search"].match("(?:&|#|\\?)"+K("_ga").replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==c.length?c[1]:"")a.get(bc)?(c=e.indexOf("."),-1==c?J(22):(d=e.substring(c+1),"1"!=e.substring(0,c)?J(22):(c=d.indexOf("."),-1==c?J(22):(e=
        d.substring(0,c),c=d.substring(c+1),e!=Ic(c,0)&&e!=Ic(c,-1)&&e!=Ic(c,-2)?J(23):(J(11),a.data.set(Q,c)))))):J(21);b&&(J(9),a.data.set(Q,K(b)));if(!a.get(Q))if(c=(c=O.gaGlobal&&O.gaGlobal.vid)&&-1!=c.search(/^(?:utma\.)?\d+\.\d+$/)?c:void 0)J(17),a.data.set(Q,c);else{J(8);c=O.navigator.userAgent+(M.cookie?M.cookie:"")+(M.referrer?M.referrer:"");d=c.length;for(e=O.history.length;0<e;)c+=e--^d++;a.data.set(Q,[hd()^La(c)&2147483647,Math.round((new Date).getTime()/1E3)].join("."))}mc(a)},Kc=function(a){var b=
        O.navigator,c=O.screen,d=M.location;a.set(lb,ya(a.get(ec)));if(d){var e=d.pathname||"";"/"!=e.charAt(0)&&(J(31),e="/"+e);a.set(kb,d.protocol+"//"+d.hostname+e+d.search)}c&&a.set(qb,c.width+"x"+c.height);c&&a.set(pb,c.colorDepth+"-bit");var c=M.documentElement,g=(e=M.body)&&e.clientWidth&&e.clientHeight,ca=[];c&&c.clientWidth&&c.clientHeight&&("CSS1Compat"===M.compatMode||!g)?ca=[c.clientWidth,c.clientHeight]:g&&(ca=[e.clientWidth,e.clientHeight]);c=0>=ca[0]||0>=ca[1]?"":ca.join("x");a.set(rb,c);a.set(tb,
        fc());a.set(ob,M.characterSet||M.charset);a.set(sb,b&&"function"===typeof b.javaEnabled&&b.javaEnabled()||!1);a.set(nb,(b&&(b.language||b.browserLanguage)||"").toLowerCase());if(d&&a.get(cc)&&(b=M.location.hash)){b=b.split(/[?&#]+/);d=[];for(c=0;c<b.length;++c)(D(b[c],"utm_id")||D(b[c],"utm_campaign")||D(b[c],"utm_source")||D(b[c],"utm_medium")||D(b[c],"utm_term")||D(b[c],"utm_content")||D(b[c],"gclid")||D(b[c],"dclid")||D(b[c],"gclsrc"))&&d.push(b[c]);0<d.length&&(b="#"+d.join("&"),a.set(kb,a.get(kb)+
        b))}};pc.prototype.get=function(a){return this.b.get(a)};pc.prototype.set=function(a,b){this.b.set(a,b)};var qc={pageview:[mb],event:[ub,xb,yb,zb],social:[Bb,Cb,Db],timing:[Mb,Nb,Pb,Ob]};pc.prototype.send=function(a){if(!(1>arguments.length)){var b,c;"string"===typeof arguments[0]?(b=arguments[0],c=[].slice.call(arguments,1)):(b=arguments[0]&&arguments[0][Va],c=arguments);b&&(c=za(qc[b]||[],c),c[Va]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={},je(this.b))}};var rc=function(a){if("prerender"==M.visibilityState)return!1;a();return!0};var td=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,sc=function(a){if(ea(a[0]))this.u=a[0];else{var b=td.exec(a[0]);null!=b&&4==b.length&&(this.c=b[1]||"t0",this.K=b[2]||"",this.C=b[3],this.a=[].slice.call(a,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(qa(this.a[1])?this.X=this.a[1]:this.W=this.a[1])));b=a[1];a=a[2];if(!this.C)throw"abort";if(this.i&&(!qa(b)||""==b))throw"abort";
            if(this.g&&(!qa(b)||""==b||!ea(a)))throw"abort";if(ud(this.c)||ud(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort";}};function ud(a){return 0<=a.indexOf(".")||0<=a.indexOf(":")};var Yd,Zd,$d;Yd=new ee;$d=new ee;Zd={ec:45,ecommerce:46,linkid:47};
    var ae=function(a){function b(a){var b=(a.hostname||"").split(":")[0].toLowerCase(),c=(a.protocol||"").toLowerCase(),c=1*a.port||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";D(a,"/")||(a="/"+a);return[b,""+c,a]}var c=M.createElement("a");c.href=M.location.href;var d=(c.protocol||"").toLowerCase(),e=b(c),g=c.search||"",ca=d+"//"+e[0]+(e[1]?":"+e[1]:"");D(a,"//")?a=d+a:D(a,"/")?a=ca+a:!a||D(a,"?")?a=ca+e[2]+(a||g):0>a.split("/")[0].indexOf(":")&&(a=ca+e[2].substring(0,e[2].lastIndexOf("/"))+
    "/"+a);c.href=a;d=b(c);return{protocol:(c.protocol||"").toLowerCase(),host:d[0],port:d[1],path:d[2],query:c.search||"",url:a||""}};var Z={ga:function(){Z.f=[]}};Z.ga();Z.D=function(a){var b=Z.J.apply(Z,arguments),b=Z.f.concat(b);for(Z.f=[];0<b.length&&!Z.v(b[0])&&!(b.shift(),0<Z.f.length););Z.f=Z.f.concat(b)};
    Z.J=function(a){for(var b=[],c=0;c<arguments.length;c++)try{var d=new sc(arguments[c]);if(d.g)Yd.set(d.a[0],d.a[1]);else{if(d.i){var e=d,g=e.a[0];if(!ea(Yd.get(g))&&!$d.get(g)){Zd.hasOwnProperty(g)&&J(Zd[g]);var ca=e.X;!ca&&Zd.hasOwnProperty(g)?(J(39),ca=g+".js"):J(43);if(ca){ca&&0<=ca.indexOf("/")||(ca=(Ba||Ud()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+ca);var l=ae(ca),e=void 0;var k=l.protocol,w=M.location.protocol,e="https:"==k||k==w?!0:"http:"!=k?!1:"http:"==w;var Xd;if(Xd=e){var e=
    l,be=ae(M.location.href);if(e.query||0<=e.url.indexOf("?")||0<=e.path.indexOf("://"))Xd=!1;else if(e.host==be.host&&e.port==be.port)Xd=!0;else{var ce="http:"==e.protocol?80:443;Xd="www.google-analytics.com"==e.host&&(e.port||ce)==ce&&D(e.path,"/plugins/")?!0:!1}}Xd&&(wa(l.url),$d.set(g,!0))}}}b.push(d)}}catch(de){}return b};
    Z.v=function(a){try{if(a.u)a.u.call(O,N.j("t0"));else{var b=a.c==gb?N:N.j(a.c);if(a.A)"t0"==a.c&&N.create.apply(N,a.a);else if(a.ba)N.remove(a.c);else if(b)if(a.i){var c;var d=a.a[0],e=a.W;b==N||b.get(V);var g=Yd.get(d);ea(g)?(b.plugins_=b.plugins_||new ee,b.plugins_.get(d)||b.plugins_.set(d,new g(b,e||{})),c=!0):c=!1;if(!c)return!0}else if(a.K){var ca=a.C,l=a.a,k=b.plugins_.get(a.K);k[ca].apply(k,l)}else b[a.C].apply(b,a.a)}}catch(w){}};var N=function(a){J(1);Z.D.apply(Z,[arguments])};N.h={};N.P=[];N.L=0;N.answer=42;var uc=[Na,W,V];N.create=function(a){var b=za(uc,[].slice.call(arguments));b[V]||(b[V]="t0");var c=""+b[V];if(N.h[c])return N.h[c];b=new pc(b);N.h[c]=b;N.P.push(b);return b};N.remove=function(a){for(var b=0;b<N.P.length;b++)if(N.P[b].get(V)==a){N.P.splice(b,1);N.h[a]=null;break}};N.j=function(a){return N.h[a]};N.getAll=function(){return N.P.slice(0)};
    N.N=function(){"ga"!=gb&&J(49);var a=O[gb];if(!a||42!=a.answer){N.L=a&&a.l;N.loaded=!0;var b=O[gb]=N;X("create",b,b.create);X("remove",b,b.remove);X("getByName",b,b.j,5);X("getAll",b,b.getAll,6);b=pc.prototype;X("get",b,b.get,7);X("set",b,b.set,4);X("send",b,b.send);b=Ya.prototype;X("get",b,b.get);X("set",b,b.set);if(!Ud()&&!Ba){a:{for(var b=M.getElementsByTagName("script"),c=0;c<b.length&&100>c;c++){var d=b[c].src;if(d&&0==d.indexOf("https://www.google-analytics.com/analytics")){J(33);b=!0;break a}}b=
    !1}b&&(Ba=!0)}Ud()||Ba||!Ed(new Od)||(J(36),Ba=!0);(O.gaplugins=O.gaplugins||{}).Linker=Dc;b=Dc.prototype;Yd.set("linker",Dc);X("decorate",b,b.ca,20);X("autoLink",b,b.S,25);Yd.set("displayfeatures",fd);Yd.set("adfeatures",fd);a=a&&a.q;ka(a)?Z.D.apply(N,a):J(50)}};N.da=function(){for(var a=N.getAll(),b=0;b<a.length;b++)a[b].get(V)};
    (function(){var a=N.N;if(!rc(a)){J(16);var b=!1,c=function(){if(!b&&rc(a)){b=!0;var d=c,e=M;e.removeEventListener?e.removeEventListener("visibilitychange",d,!1):e.detachEvent&&e.detachEvent("onvisibilitychange",d)}};L(M,"visibilitychange",c)}})();function La(a){var b=1,c=0,d;if(a)for(b=0,d=a.length-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};})(window);
//END local copy of GA script: //www.google-analytics.com/analytics.js

//START GA Plugins
//GA Plugin from http://www.google-analytics.com/plugins/ua/linkid.js
(function(){var e=window,h=document,k="replace";var s=function(a,c){var d=void 0;if("function"==typeof a.get&&"function"==typeof a.set){var b=c||{},g=b.hasOwnProperty("cookieName")?b.cookieName:"_gali",q=b.hasOwnProperty("cookieTimeout")?b.cookieTimeout:30,r=b.hasOwnProperty("levels")?b.levels:3,b=a.get("cookieDomain"),l=a.get("cookiePath"),f=new n(g,b,q,l);d||(d=f.get());d&&a.set("&linkid",d);p(function(a){a=a||e.event;a=a.target||a.srcElement;for(var b,c=0;a&&c<=r;c++){if(b=a.getAttribute("id")){a=b;100<a.length?f.remove():a?f.set(a):f.remove();
    return}a=a.parentElement}f.remove()})}};var t=function(a,c,d,b,g){c=encodeURIComponent(c)[k](/\(/g,"%28")[k](/\)/g,"%29");a=a+"="+c+"; path="+(d||"/")+"; ";g&&(a+="expires="+(new Date((new Date).getTime()+g)).toGMTString()+"; ");b&&"none"!=b&&(a+="domain="+b+";");b=h.cookie;h.cookie=a;return b!=h.cookie},p=function(a){var c=h.body;try{c.addEventListener?c.addEventListener("click",a,!1):c.attachEvent&&c.attachEvent("onclick",a)}catch(d){}};var n=function(a,c,d,b){this.get=function(){for(var b=void 0,c=[],d=h.cookie.split(";"),l=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),f=0;f<d.length;f++){var m=d[f].match(l);m&&c.push(decodeURIComponent(m[1][k](/%28/g,"(")[k](/%29/g,")")))}for(d=0;d<c.length;d++)c[d]&&(b=c[d]);return b};this.set=function(g){return t(a,g,b,c,1E3*d)};this.remove=function(){return t(a,"",b,c,-100)}};(function(){e.gaplugins=e.gaplugins||{};e.gaplugins.LinkId=s;var a=e.GoogleAnalyticsObject||"ga";e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)};e[a]("provide","linkid",s)})();})();

//END GA Plugins

var wap_ga = {}; //object for GA script usage
wap_ga.tms = {}; //hold TMS mappings
wap_ga.udo = {}; //hold GA UDO elements mapped to GA tag
wap_ga.qs = {}; //hold querstrings
wap_ga.config = {}; //config settings & functions
wap_ga.campaign = {}; //campaign settings & functions
wap_ga.ulit = {}; //utilities settings & functions

//tealium universal tag - utag.sender.7110 ut4.0.201605101953, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{
    (function(id,loader,u){
        try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
        u.ev={'view':1,'link':1};
        u.o=window[window.GoogleAnalyticsObject];
        u.cookieDomain="" || utag.loader.lh();
        u.created=false;
        u.name="gawap";
        window.ga_trackerName="gawap";
        u.account="UA-35949610-9";
        window.ga_account="UA-35949610-9";
        u.anonymizeIp=("true"==="true"?true:false);
        window.ga_anonymizeip=("true"==="true"?true:false);
        u.allowLinker=true;
        u.crossDomainTrack = ".intel";
        wap_ga.tms.enhancedLinkAttribution = "true";
        u.displayfeatures = "true";

        // TODO: Provide UI config option to call create before the Extensions run (if not using dynamic accounts)

      u.map={"wa_geo":"dimension1","wa_local":"dimension2","wa_section":"dimension3","wa_visit_id":"dimension100","wa_site_id":"dimension4","wa_site_id_audience":"dimension5","wa_org2":"dimension6","wa_page_type_micro":"dimension13","wa_page_type_macro":"dimension14","wa_login":"dimension15","wa_english_title":"dimension16","wa_target_audience":"dimension17","wa_resource_type":"dimension18","content_org_initiative":"dimension20","content_product":"dimension22","wa_product_id":"dimension24","wa_personalization_segment":"dimension26","wa_campaign":"dimension30","wa_metrics_campaign":"dimension31","wa_intel_technology":"dimension32","wa_metrics_segment":"dimension33","wa_system_type":"dimension34","wa_program_level":"dimension35","wa_sales_life_cycle":"dimension36","wa_topic":"dimension37","wa_applications":"dimension38","wa_intel_platform":"dimension39","wa_internal_search_referrer":"dimension42","wa_zero_search_results":"dimension43","content_audience":"dimension58","content_program":"dimension62","content_sub_audience":"dimension63","wa_profile_id":"dimension102","wa_business_id":"dimension103","wa_program_id":"dimension104","wa_elq_id":"dimension105","wa_sprinklr_id":"dimension108","wa_org3":"dimension7","wa_org4":"dimension8","wa_org5":"dimension9","wa_org6":"dimension10","wa_org7":"dimension11","wa_org8":"dimension12","wa_do_not_track":"dimension59","wa_campaign_cid":"dimension107","wa_user_task":"dimension65","wa_product_name":"dimension23","wa_external_id":"dimension109","wa_rwd":"dimension60","wa_error":"dimension66","wa_transl_status":"dimension73","wa_author":"dimension74","shop_manufacturer":"dimension44","shop_processor":"dimension45","shop_model":"dimension47","shop_formFactor":"dimension49","wa_elq_id_short":"dimension115","content_sub_org_initiative":"dimension25","element_header_version":"dimension50","element_header_chosen":"dimension51","element_header_subnav":"dimension52","element_header_geo":"dimension53","element_footer_chosen":"dimension54","elg_optin_channel":"dimension127","elg_optin_consumer":"dimension130","elg_optin_education":"dimension129","elg_optin_embedded":"dimension128","elg_optin_itdm":"dimension126","elq_industry":"dimension116","content_ter_initiative":"dimension143","content_sub_ter_initiative":"dimension144","wa_secondary_audience":"dimension146","wa_onresearch_id":"dimension118","content_industry":"dimension147","wa_product_id_secondary":"dimension132","wa_erpm_id":"dimension120","wa_erpm_bus_id":"dimension121","wa_programidentifier":"dimension84","wa_internal_promotion":"dimension86","wp_post_tags":"dimension87","wa_data_view_name":"dimension145","wa_program_lang":"dimension154","wa_software":"dimension155","wa_ssg_uuid":"dimension156","wa_page_id":"dimension152","wa_os":"dimension153","wa_zone":"dimension157","wa_custom_content_group":"dimension113","wa_coverage_type":"dimension119"};
  u.extend=[function(a,b){ try{ if((b['wa_local'].toString().toLowerCase()=='us-en'.toLowerCase()&&/business|developer|channel/.test(b['content_audience']))||(/prc|apj/.test(b['wa_geo'])&&/business|developer|channel/.test(b['content_audience']))||(b['wa_local'].toString().toLowerCase()=='us-en'.toLowerCase()&&b['content_org_initiative'].toString().toLowerCase()=='resource-design-center'.toLowerCase())||(/prc|apj/.test(b['wa_geo'])&&b['content_org_initiative'].toString().toLowerCase()=='resource-design-center'.toLowerCase())){b['wa_custom_content_group']='vp_poc'} } catch(e){ utag.DB(e) }  }];

        u.send=function(a,b){
            if(u.ev[a]||typeof u.ev.all!="undefined"){
      
              for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
                var c,d,e,f,g;
                for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){
                    u[e[f]]=b[d];
                    wap_ga.tms[e]=b[d]; //GA dimension to value mapping
                    wap_ga.udo[d]=b[d]; //GA UDO to value mapping, only includes UDO elements which are mapped to GA tag
                }}}

                //var id='tealium-tag-7110';
            }
        }
        try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
    })('2','intel.profile-ssg.intel');
}catch(e){}
//end tealium universal tag
//*********************************************************************************************
//* GA Custom Code                                                                            *
//*********************************************************************************************
        
//*********************************************************************************************
//* Config                                                                                    *
//*********************************************************************************************
wap_tms.version.set('2.13,','ga:'); //update version for earch release
if(typeof utag.data["ut.version"] !== "undefined"){wap_tms.version.set(utag.data["ut.version"]+"_"+utag.data["ut.profile"]+"_"+utag.data["ut.env"]+",",'tms:');}; //set Tealium version if available
wap_ga.doc = document;
wap_ga.win = window;
wap_ga.undef = undefined;
wap_ga.noset = 'unassigned';
wap_ga.env = (typeof wa_env !== "undefined") ? wa_env : true; //if wa_env is set we use that value otherwise set to 'true' when publishing to production, and 'false' when testing in pre-prod;
wap_ga.scroll = (typeof waTrackScroll !== "undefined") ? waTrackScroll : true; //if set to true then enable scroll tracking, default = true
wap_ga.wa_local = (typeof utag_data.wa_local !== "undefined") ? utag_data.wa_local : wap_ga.noset; //required for UA - TMS
wap_ga.section = (typeof utag_data.wa_section !== "undefined") ? utag_data.wa_section : wap_ga.noset; //required for UA - TMS
wap_ga.autofire = (typeof ga_auto_fire !== "undefined") ? ga_auto_fire : true; //set to false if you don't want the pageview to automatically occur on loading this script
wap_ga.pagename = (typeof ga_page_name !== "undefined") ? ga_page_name : '';
wap_ga.location = (typeof ga_page_location !== "undefined") ? ga_page_location : '';
wap_ga.callback = (typeof ga_callback !== "undefined") ? ga_callback : wap_ga.undef; //set callback function if set otherwise leave undefined
wap_ga.allowhash = (typeof ga_allow_hash !== "undefined") ? ga_allow_hash : false; //configure ga page to capture hash as part of URL, default is false
wap_ga.pageToLowercase = (typeof ga_page_to_lowercase !== "undefined") ? ga_page_to_lowercase : true; //optional: if set to true then we don't convert page to lowercase. This use case supports the Page Analytics Chrome plugin where it can't find pages.
wap_ga.pagegroup = (typeof ga_page_group !== "undefined") ? ga_page_group : location.pathname; //optional page group
wap_ga.sitespeed = (wap_ga.win.ga_setSampleRate) ? wap_ga.win.ga_setSampleRate : 0; //set sample rate for Site Speed reports, default is 100%
wap_ga.user_agent = utag_data.user_agent;
wap_ga.name = (typeof ga_trackerName !== "undefined") ? "gawap" : "gawap"; //unique GA tracker object reference to avoid conflicts w/ other GA impelementations
wap_ga.qs.cid = tmsGetParamByName('cid'); //paid search, should be set with SEM campaigns
wap_ga.qs.eid = tmsGetParamByName('eid'); //SiteCatalyst legacy email/external ID tracking
wap_ga.qs.dfaid = tmsGetParamByName('dfaid'); //SiteCatalyst legacy DCM tagging
wap_ga.qs.dclid = tmsGetParamByName('dclid'); //DCM auto-tagging
wap_ga.qs.gclid = tmsGetParamByName('gclid'); //AdWords auto-tagging
wap_ga.qs.utm = tmsGetParamByName('utm_campaign'); //UTM manual tagging
wap_ga.qs.wapkw = tmsGetParamByName('wapkw'); //internal search click-through
wap_ga.campaign = (wap_ga.qs.cid || wap_ga.qs.eid) ? true : false; //check if click came from a paid campaign

wap_ga.config.campaign = function () {
    if (wap_ga.qs.utm) { wap_ga.campaign = false; } //if utm_source param found set to 'false' so we can use utm params exactly as set
    if (wap_ga.qs.dclid) { wap_ga.campaign = false; } //don't manual tag camapign if DoubleClick auto-tagging found
    if (wap_ga.qs.gclid) { wap_ga.campaign = false; } //don't manual tag camapign if AdWords auto-tagging found
    if (wap_ga.qs.cid) { ga_payload.dimension['107,page'] = wap_ga.qs.cid; } //set querystring cid value to Campaign ID (cd107)
    var errorType = 'campaign.other:', error = '', errorVal = '', errorwapkw = (wap_ga.qs.wapkw) ? 'internal search hard-coded,' : '';
    var errordouble = (/\?(.*)\?/.test(window.location)) ? 'illegal double ? in querystring,' : '';
    if (wap_ga.campaign) {
        if (wap_ga.qs.cid) { //cid, config paid SEM campaigns
            wap_ga.config.campaign.cname = wap_ga.qs.cid;
            wap_ga.config.campaign.source = waGetPaidSource();//determine source for paid search
            wap_ga.config.campaign.medium = 'cpc';
        }
        ga_payload.metric['9,hit'] = '1'; //Page Views - campaigns
        ga_payload.dimension['27,hit'] = 'load';
        ga_payload.dimension['28,hit'] = 'load:page:std';
    }
    else {
        ga_payload.metric['8,hit'] = '1'; //Page Views - non-campaigns
        ga_payload.dimension['27,hit'] = 'load';
        ga_payload.dimension['28,hit'] = 'load:page:std';
    }

    //Error tracking
    //SEM
    if (wap_ga.qs.cid || wap_ga.qs.gclid) {
        //SEM Adwords
        if (wap_ga.qs.gclid) {
            errorType = "campaign.sem.google:";
            error += (wap_ga.qs.cid) ? '' : 'no campaign id,';
            error += (wap_ga.qs.utm) ? 'manual tagging with auto-tagging,' : '';
        }
        else { //Other
            errorType = "campaign.sem.other:";
            error += (wap_ga.qs.utm) ? '' : 'no utm tagging,';
        }
        error += errorwapkw + errordouble;
    }

    //DCM error tracking
    if (wap_ga.qs.dfaid || wap_ga.qs.dclid) {
        errorType = "campaign.dcm:";
        error += (wap_ga.qs.dfaid) ? '' : 'no dfaid,';
        error += (/%/.test(wap_ga.qs.dclid)) ? '% encoding error,' : '';
        error += (wap_ga.qs.dclid) ? '' : 'no auto-tagging,';
        error += (wap_ga.qs.utm) ? 'manual tagging with auto-tagging,' : '';
        error += errorwapkw + errordouble;
    }

    //capture campaign error
    if (error != '') {
        wap_tms.error.set(error, errorType);
    }

};
wap_ga.config.pageErrors = function () {
    var error = '', errorType = 'page.load:';
    error += (utag_data.wa_geo !== 'unassigned') ? '' : 'geo not set,';
    error += (utag_data.wa_local !== 'unassigned') ? '' : 'local code not set,';
    error += (utag_data.wa_section !== 'unassigned') ? '' : 'section not set,';
    if (error != '') {
        wap_tms.error.set(error, errorType);
    }
};


wap_ga.config.pagePerformance = function () {
    // skip all collections if the timer is not present - no big deal
    if(!window.performance || !performance.timing) return;
    
    //detect if JS error on page
    wap_tms.page_error=false;
    window.onerror=function(){
        if(!wap_tms.page_error){
            wap_tms.error.set('javascript,', 'page.error:');
            wap_tms.page_error=true;
        }
    };

    if(wap_tms.jquery.ver_1_7_plus){(function($){
        $(window).load( function(){
            //Calling the function to check for ad blockers
            if(wap_tms.custom.adblockers.check){
                wap_tms.custom.adblockers.wacheckAds();
            }
            setTimeout( function(){ // the 0 second delay is made so loadEventEnd value gets populated      
                if (performance.timing.loadEventEnd > 0) {
                    var loadTime = Number(performance.timing.loadEventEnd - performance.timing.navigationStart), //calculate percieved load time
                    nav_start = performance.timing.navigationStart,
                    first_byte = performance.timing.responseStart-nav_start,
                    dom_ready = performance.timing.domContentLoadedEventEnd-nav_start;
                    loadTimeSec = loadTime/1000; //convert to second
                    loadTimeSec = (Math.round(loadTimeSec*4)/4)+""; //round to closest 250ms & convert to string
                    //console.log("responseStart(First byte): " + first_byte+"ms\ndomContentLoadedEventEnd (DOM ready): " + dom_ready+"ms\nLoad Time (user-perceived): " + loadTime+"ms" +"\nloadTimeSec: " +loadTimeSec);
                    
                    if(loadTime>=100000 || dom_ready>=100000 || first_byte>=100000){return;} //if load time is greater than 100,000 MS do not send call. This is to fix for a IE9 bug that sends incorrect numbers skewing data
                    var ga_params = {'ga':{'metric76':loadTime,'metric81':first_byte,'metric82':dom_ready,'dimension135':'','dimension158':loadTimeSec}};
                    //Setting custom dimension for ad blocker tracking
                    if(wap_tms.custom.adblockers.check){
                        ga_params.ga.dimension135=wa_adblocker_checker;
                    }
                    trackGaEvent('Page','real user monitoring','',null,true,'',ga_params);
                }
            }, 0);});
    }($wap));}
};


wap_ga.config.tms_map = function () {
    for (var key in wap_ga.tms) {
        if (wap_ga.tms.hasOwnProperty(key)) {
            if (/dimension/.test(key)) {
                var dimVal = key.split("dimension")[1] + ",page";
                var gk = wap_ga.tms[key];
                if(gk != null){
                    if (/24|50|51|52|53|54|76|100|101|102|103|104|105/.test(key)) {/*don't convert to lowercase*/ }
                    else { gk = gk.toLowerCase(); } //convert to lowercase      
                    ga_payload.dimension[dimVal] = gk;
                }                                  
            }
            if (/metric/.test(key)) {
                var dimVal = key.split("dimension")[1] + ",hit";
                ga_payload.metric[dimVal] = wap_ga.tms[key];
            }
            //console.log(key + " = " + wap_ga.tms[key]);
        }
    }
};

var ga_customVars = (wap_ga.win.ga_customVars) ? wap_ga.win.ga_customVars : {}, //GA custom variable object
ga_payload = (typeof ga_payload !== "undefined") ? ga_payload : { "dimension": {}, "metric": {} }, //GA UA payload object for custom dimensions or custom metrics (must be reset with each event)
ga_domain = setCookieDomainGA(), //domain for cookie setting
ua_account = setUaAccount(), //set GA UA account
ga_trackVideoJs = "true", //brightcove SWF looks for value to determine if we use JS tracking or Flash based tracking for videos **Don't REMOVE**
_gaq = _gaq || []; //GA Async object

//Set Eloqua ID to persistent cookie
wap_tms.eloqua.setcookie = function (id) {
    var id = genContactIdShort(id),
    id_ext = genContactId(id);
    utag.loader.SC("utag_main", { "elqid": id });
    wap_tms.eloqua.id = id;
    wap_tms.eloqua.id_ext = id_ext;
};
if (typeof utag_data.wa_elq_id_short !== "undefined") {
    wap_tms.eloqua.setcookie(utag_data.wa_elq_id_short);
}
wap_tms.eloqua.id = (utag.loader.RC("utag_main").elqid != undefined) ? utag.loader.RC("utag_main").elqid : ''; //short ID
wap_tms.eloqua.id_ext = genContactId(wap_tms.eloqua.id); //extended ID
if(wap_tms.eloqua.id!==''){
    utag_data.wa_elq_id = wap_tms.eloqua.id_ext;
    utag_data.wa_elq_id_short = wap_tms.eloqua.id;
}
ga_payload.dimension['105,page'] = wap_tms.eloqua.id_ext;
ga_payload.dimension['115,page'] = wap_tms.eloqua.id;
//END

//cookie functions
function setCookieDomainGA() { var cookieDomain = location.hostname; cookieDomain = cookieDomain.replace(/(.*)\.intel/, ".intel"); return cookieDomain; } function waSetCookieGA(b, c) { var a = new Date(); a.setTime(a.getTime() + (365 * 24 * 3600 * 1000)); wap_ga.doc.cookie = b + "=" + escape(c) + "; expires=" + a.toGMTString() + "; path=/; domain=" + ga_domain } function waNewIdGA() { var a = "{"; for (var b = 1; b <= 32; b++) { var c = Math.floor(Math.random() * 16).toString(16); a += c; if ((b == 8) || (b == 12) || (b == 16) || (b == 20)) { a += "-" } } a += "}"; return a }; function waGetCookieGA(d) { var b = d + "="; var f = b.length; var a = wap_ga.doc.cookie.length; var e = 0; while (e < a) { var c = e + f; if (wap_ga.doc.cookie.substring(e, c) == b) { return waGetCookieValGA(c) } e = wap_ga.doc.cookie.indexOf(" ", e) + 1; if (e == 0) { break } } return null }; function waGetCookieValGA(b) { var a = wap_ga.doc.cookie.indexOf(";", b); if (a == -1) { a = wap_ga.doc.cookie.length } return unescape(wap_ga.doc.cookie.substring(b, a)) };

function setUaAccount() {
    var gaAccount, gaDevAccount;
    //prod
    if (typeof wap_ga.win.ga_account !== "undefined") { gaAccount = wap_ga.win.ga_account; }
    else { gaAccount = 'UA-35949610-1'; } //default

    //prod account override, will ignore value set by TMS tag if set
    if (wa_env) {
        if (typeof wap_ga.win.ga_accountOverride !== "undefined") { gaAccount = wap_ga.win.ga_accountOverride; }
    }

    //dev
    if (typeof wap_ga.win.ga_dev_accounts !== "undefined") { gaDevAccount = wap_ga.win.ga_dev_accounts; }
    else { var gaDevAccount = 'UA-41505236-1'; } //default

    var ga_accounts = (wa_env) ? gaAccount : gaDevAccount;
    if(wa_env){ga_accounts = (wap_tms.events.rlsa_page) ? ga_accounts+',UA-35949610-16' : ga_accounts;} //set for RLSA, temp solution
    return ga_accounts;
}

//*********************************************************************************************
//* Functions                                                                                 *
//*********************************************************************************************

//set page name
wap_ga.config.pagename = function (virtualPage) {
    virtualPage = (typeof virtualPage === "undefined") ? location.pathname : virtualPage; //if undefined set to URL pathname
    virtualPage = (virtualPage == "") ? location.pathname : virtualPage; //if blank set to URL pathname
    virtualPage = (virtualPage.charAt(0) == '/') ? virtualPage : '/' + virtualPage; //check if path starts w/ forward slash, if not add (GA dp field requires)
    virtualPage = (wap_ga.allowhash) ? virtualPage + location.hash : virtualPage;
    virtualPage = wap_tms.cleanPii(virtualPage,'url'); //remove email if in URL
    if(wap_ga.pageToLowercase){virtualPage.toLowerCase();}
    return virtualPage;
};

//track GA page views
function trackGaPage(virtualPage, callback) {
    ga_customVars.config('page'); //config GA variables accross all hits
    gawap(function () {
        virtualPage = wap_ga.config.pagename(virtualPage); //set page name
        var trackers = gawap.getAll();
        for (var i = 0; i < trackers.length; ++i) {
            var tracker = trackers[i], trackerId=tracker.get('trackingId'), trackerName = tracker.get('name');
            gawap(trackerName + '.set', 'page', virtualPage); //set pathname so it consitent accross all hits during lifetime of tracker, i.e. page
            if (typeof wap_ga.location != "undefined"){
                if(wap_ga.location!==''){
                    gawap(trackerName + '.set', 'location', wap_ga.location);
                }
            };
        var fo = { //field object
                'metric12': '1',
                'metric31': '1', //scroll baseline
                'metric42': '1',
                'dimension149': wap_tms.events.dmfpoints.pageload.name,
                'metric85': wap_tms.events.dmfpoints.pageload.val,
                'contentGroup1': utag_data.content_audience,
                'contentGroup2': utag_data.content_sub_audience,
                'hitCallback': function () {
                    //if (i == 0) { //track session goals, send only for first tracker
                    wap_tms.events.init('ga'); //init, used to execute code in sequence
                    var uacd_28 = (typeof fo.dimension28 !== "undefined") ? fo.dimension28 : '';
                    var pageTypeAsset = (/(:asset$)/.test(uacd_28)) ? true : false;
                    if (pageTypeAsset) { gawapGoal('aer', 'asset'); } else { gawapGoal('aer', 'page'); }
                    //}
                    //call callback function if set
                    if (typeof callback !== "undefined") {
                        callback(); //optional call back function
                    }
                }
            };
            ga_customVars.payload(trackerName, fo); // set custom vars & metrics for tracker
            
            //Check if there are iframe parameters to populate
            if(utag_data.load_iframe_parameters == "true"){
                wap_tms.events.setIframeCampaigns(trackerName);
            }

            //Check if there are any native campaigns
            if(wap_tms.events.isNativeCampaignPresent()){
                wap_tms.events.setNativeCampaigns(trackerName);
            }
            else if ( wap_tms.events.isNativeReferrerPresent()) {
                wap_tms.events.setNativeReferrerCampaigns(trackerName);
            }
            if(trackerId=='UA-35949610-16'){fo.hitCallback='';} //don't call page callback for RLSA
            gawap(trackerName + '.send', 'pageview', fo);
        }
    });
}

// Function to set parameters to the iframe
wap_tms.events.setIframeCampaigns = function(trackerName) {
    var iframeUrl = (window.location != window.parent.location) ? document.referrer : document.location;
    var isIframe = (window.location != window.parent.location) ? true : false;
    if(isIframe && document.referrer.indexOf(document.location.host) == -1){
        var newDocumentLocation = document.location.origin + document.location.pathname; //+ document.location.search;     
        if(newDocumentLocation.indexOf("?") == -1){
            newDocumentLocation = newDocumentLocation + iframeUrl.substring(iframeUrl.indexOf("?"));
        }
        else{
            newDocumentLocation = newDocumentLocation + "&" + iframeUrl.substring(iframeUrl.indexOf("?") + 1);
        }
        gawap(trackerName + '.set', 'location', newDocumentLocation);
    }
}

//Function to set Native Campaigns
wap_tms.events.setNativeCampaigns = function(trackerName) {
    var newDocumentLocation  = document.location.origin + document.location.pathname + "?utm_source=" + tmsGetParamByName('utm_source').toLowerCase() + "&utm_medium=native&utm_campaign=native_referral";
    gawap(trackerName + '.set', 'location', newDocumentLocation);
}
//Function to set Native Referrer Campaigns
wap_tms.events.setNativeReferrerCampaigns = function(trackerName) {
    var regexpReferrer = /(.*)?(outbrain|taboola|accuen|adnboost|buzzfeed|douban|wezeit|zol)(.*)?/;
    var regexpMatching = regexpReferrer.exec(document.referrer);
    var newDocumentLocation  = document.location.origin + document.location.pathname + "?utm_source=" + regexpMatching[2].toLowerCase() + "&utm_medium=native&utm_campaign=native_referral";
    gawap(trackerName + '.set', 'location', newDocumentLocation);
}
//Function to check Native Campaigns
wap_tms.events.isNativeCampaignPresent = function() {
    if(/(.*)?(utm_source=)(outbrain|taboola|accuen|adnboost|buzzfeed|douban|wezeit|zol)(.*)?/.test(document.location.href)){
        return true;
    }
    return false
}
//Function to check Native Referrer Campaigns
wap_tms.events.isNativeReferrerPresent = function() {
    if(/(.*)?(outbrain|taboola|accuen|adnboost|buzzfeed|douban|wezeit|zol)(.*)?/.test(document.referrer)){
        return true;
    }
    return false
}
        
wap_tms.events.ga = function (go,opt_noninteraction,debug) { //called after GA Pageview sent, used to execute code in sequence
    var fo=go; //set 'go' object to 'fo'
    ga_customVars.config('event'); //config GA variables accross all hits

    gawap(function () {
        var trackers = gawap.getAll(); //get all GA Trackers
        if (/^(https?:\/\/(.*)\.intel\.|\/)(.*)\?/.test(fo.eventLabel)) { //if link click on Intel domain contains querystrings, remove and add to querystring dimension (improves with click aggregation)
            fo.dimension56 = '?' + decodeURIComponent(fo.eventLabel.split('?')[1]);
            fo.dimension56 = wap_tms.cleanPii(fo.dimension56,'qs');
            fo.eventLabel = fo.eventLabel.replace(/\?(.*)$/g, ''); //remove querystring
        }else{
            try{
                fo.eventLabel = decodeURIComponent(fo.eventLabel);
            }catch(e){}
            finally{
                fo.eventLabel = wap_tms.cleanPii(fo.eventLabel,'label');
            }
        }

        
        ga_customVars.payload(trackerName, fo); // set custom vars & metrics for tracker
        
        //fire GA Event tag
        for (var i = 0; i < trackers.length; ++i) {
            var tracker = trackers[i], trackerName = tracker.get('name'), trackerId=tracker.get('trackingId'), trackHit=true;
            if(trackerId=='UA-35949610-16'){ //do not track if RLSA
                trackHit=wap_tms.events.rlsa_link;
            } 
            //check if hit is non interactive - boolean
            if (opt_noninteraction) {
                fo.nonInteraction = true;
            }
            else {
                fo.metric38 = 1;
                fo.metric42 = 1;
            }
            //for (var key in fo) {var obj = fo[key];console.log(key + ": " + obj);} //validate fo object
            if(trackHit){
                gawap(trackerName + '.send', 'event', fo);
            }
        //track social
        if (fo.eventCategory == "Social") { //send social event after event fires if "Social" category
            if (/^email|^referral|^reply|^post|^rate|^chat|^intel-/.test(fo.eventAction)) { //change social network to 'intel' for on-domain sharing
                category = category + ': ' + action; action = 'intel';
            }
            if(trackHit){
                trackGAsocial(fo.eventAction, fo.eventCategory.toLowerCase(), fo.eventLabel);
            }
        }           
        }
    });
};


//track Timing events
function trackGaTiming(category, timeVar, label, value, opt_noninteraction, callback) {
    gawap(function () {
        var trackers = gawap.getAll();
        for (var i = 0; i < trackers.length; ++i) {
            var tracker = trackers[i], trackerName = tracker.get('name');
            var fo = {
                'hitType': 'timing',
                'timingCategory': category,
                'timingVar': timeVar,
                'timingValue': value,
                'timingLabel': label
            };
            if (opt_noninteraction) {
                fo.nonInteraction = true;
            }
            //call callback function if set
            if (typeof callback !== "undefined") {
                fo.hitCallback = function () { callback(); }
            }
            ga_customVars.payload(trackerName, fo); // set custom vars & metrics for tracker
            gawap(trackerName + '.send', 'timing', fo);
        }
    });
};

//track Social events
function trackGAsocial(network, socialAction, opt_target, opt_pagePath, callback) {
    gawap(function () {
        var trackers = gawap.getAll();
        for (var i = 0; i < trackers.length; ++i) {
            var tracker = trackers[i], trackerName = tracker.get('name'),trackerId=tracker.get('trackingId');
            var fo = {  //field object
                'socialNetwork': network,
                'socialAction': socialAction,
                'socialTarget': opt_target,
                'dimension149': wap_tms.events.dmfpoints.none.name,
                'metric85': wap_tms.events.dmfpoints.none.val
            };
            //call callback function if set
            if (typeof callback !== "undefined") {
                fo.hitCallback = function () { callback(); }
            }
            var trackHit = (trackerId=='UA-35949610-16') ? false : true;
            if(trackHit){
                ga_customVars.payload(trackerName, fo); // set custom vars & metrics for tracker
                gawap(trackerName + '.send', 'social', fo);
            }
        }
    });
}

//legacy function, some emebedded code may be calling. Keep to avoid JS errors
function trackGaSocial() { }

//goals for GA-UA
function gawapGoal(goalType, type, opt) {
    /*
    COOKIE NAME: gawap_g
    FORMAT: goal-1xgoal-2xgoal-3x, x is the delimiter
      Goal 1: e0p1a0t1377196643987aer  (AER)
              e=expire (a value of 0 means goal not reached, value of 1 means goal reached)
              p=page (number of pages viewed during session)
              a=asset pages (number of asset detail pages viewed)
              t=time (amount of time since last page view)
      Goal 2: e0u1ni0  (IER)
              e=expire (a value of 0 means goal not reached, value of 1 means goal reached)
              u=number 'univeral' elements captured before IER goal reached
              ni=number of non-interactions captured before IER goal reached
    */
    var cookieVal = waGetCookieGA('gawap_g');
    var getGoal = (cookieVal) ? cookieVal.split("x") : '', aerVal = '', ierVal = '', cookieTemplate;
    for (var i = 0, length = getGoal.length; i < length; i++) {
        var setGoal = getGoal[i];
        if (i == 0) { aerVal = getGoal[i]; } //set AER goal val from cookie
        if (i == 1) { ierVal = getGoal[i]; } //set IER goal val from cookie
    }
    if (goalType == 'aer') {
        var currentTime = new Date().getTime(),
        timeSinceLastPage = 0,
        ageInSeconds = 0,
        assetPageNum = 0,
        pageNum = 0,
        vidEvent = 'none',
        expireGoal1 = 0,
        goalNotReached = true;

        if (aerVal) {
            //get values from cookies, EX e0p1a0t1377196643987aer
            goalNotReached = (aerVal.split('e')[1].charAt(0) == "0") ? true : false;
            if (goalNotReached) { //goal not meet
                pageNum = aerVal.split('p')[1]; pageNum = pageNum.split('a');
                assetPageNum = pageNum[1].split('t');
                currentTime = Number(assetPageNum[1]);
                pageNum = Number(pageNum[0]);
                assetPageNum = Number(assetPageNum[0]);
                var ageInSeconds = (new Date().getTime() - new Date(currentTime).getTime()) / 1000;
            }
        }

        switch (type) {
            case "asset": //asset counts as 1 page and 1 asset page
                assetPageNum++;
                pageNum++;
                break;
            case "page":
                pageNum++;
                break;
            case "vidstart":
                vidEvent = 'start';
                break;
            case "vidmid":
                vidEvent = 'mid';
                break;
        }

        var sendGoal = false;
        if (goalNotReached) { //goal not meet
            if (pageNum >= 2) { //2 pageviews or more + longer than 60seconds         
                if (ageInSeconds > 60) {
                    sendGoal = true;
                }
            }
            if (assetPageNum >= 2) { //2 (or more) asset deatail pageviews        
                sendGoal = true;
            }
            if (/^vid/.test(type)) { //video start or mid         
                sendGoal = true;
            }

            //config and send goal event
            if (sendGoal) {
                expireGoal1 = 1; //expire via cookie so goal does not occure again for visit
                gawap(function () {
                    var trackers = gawap.getAll();
                    for (var i = 0; i < trackers.length; ++i) {
                        var tracker = trackers[i], trackerName = tracker.get('name');
                        gawap(trackerName + '.send', 'event', {
                            'eventCategory': 'Page',
                            'eventAction': 'goal:aer',
                            'eventLabel': 'page=' + pageNum + ':asset=' + assetPageNum + ':vid=' + vidEvent,
                            'dimension27': 'ni',
                            'dimension28': 'ni:goals',
                            'dimension29': 'page=' + pageNum + ':asset=' + assetPageNum + ':vid=' + vidEvent,
                            'metric52': '1',
                            'contentGroup1': utag_data.content_audience,
                            'contentGroup2': utag_data.content_sub_audience,
                            'nonInteraction': true
                        });
                    }
                });
            }
            var addIER = (ierVal) ? ierVal + 'x' : '';
            cookieTemplate = "e" + expireGoal1 + "p" + pageNum + "a" + assetPageNum + "t" + currentTime + "x" + addIER;
            document.cookie = 'gawap_g=' + cookieTemplate + ';path=/;domain=' + ga_domain; //set cookie     

        }
    }
}

//track brightcove videos
function gaBrightCoveTracking(trackType, gaEventCategory, gaEventAction, gaEventLabel, gaVideoDuration) {
    //wap_tms.custom.brightcove=false;
    //console.log("trackType: " + trackType + "\ngaEventCategory: " + gaEventCategory + "\ngaEventAction: " + gaEventAction + "\ngaEventLabel: " + gaEventLabel);
    wap_tms.custom.video_duration = gaVideoDuration; 
    ga_payload.dimension['29,hit'] = "brightcove:" + gaEventLabel.split(':')[2];
    ga_payload.dimension['19,hit'] ="flash";
    ga_payload.dimension['64,hit'] = gaEventLabel.split(':')[2];
    switch (gaEventAction) {
        case "video: share: link": case "video: share: embed": case "video: share: blog": case "video: share: email":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
        case "video: play":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
        case "video: 50% complete":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
        case "video: 100% complete":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
        case "video: 25% complete": case "video: 75% complete": case "video: 90% complete": case "video: 95% complete": case "video: fullscreen":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
    }
}
function configGA(accountID, trackerId) {
    var fo = { //field object
        'name': 'waptracker' + trackerId,
        'cookieDomain': 'auto', //set to auto
        'siteSpeedSampleRate': wap_ga.sitespeed,
        'legacyHistoryImport': false,
        'allowLinker': true,
        'cookieName': 'gawap'
    };
    if (wap_tms.eloqua.id !== '') { fo.userId = wap_tms.eloqua.id; } //add user id if not blank

    //create tracker object
    gawap('create', accountID, fo);

    wap_ga.config.campaign(); //config campaign
    wap_ga.config.tms_map(); //set page values from TMS
    wap_ga.config.pageErrors(); //set page errors (if any)
    
    gawap(function () {
        var trackers = gawap.getAll();
        var pageTitle = wap_ga.doc.title;
        wap_ga.config.tracker = trackers[0]; //assign first tracker for other code to reference
        for (var i = 0; i < trackers.length; ++i) {
            var tracker = trackers[i], trackerName = tracker.get('name'), clientId = tracker.get('clientId');
            ga_payload.dimension['101,page'] = clientId;
            utag_data.wa_client_id = clientId; //set GA client ID to UDO
            gawap(trackerName + '.require', 'displayfeatures'); //enable display features for DFA, remarketing and demographic
            gawap(trackerName + '.require', 'linker');
            if (wap_ga.tms.enhancedLinkAttribution == "true") {
                gawap(trackerName + '.require', 'linkid', { //enhanced link attribution
                    'cookieName': '_ela', // Cookie name
                    'duration': 45, // Cookie duration
                    'levels': 8
                }); //navigate up DOM to find id
            }

            //mask IP address for all trackers
            gawap(trackerName + '.set', 'anonymizeIp', true);
            /*var gaIpConfig = (/(\.intel\.de$)/.test(location.hostname)) ? true : false; //mask IP address if German branded domain
            if(!gaIpConfig){gaIpConfig = (wap_ga.wa_local=="de-de") ? true : false;}if(gaIpConfig){gawap(trackerName+'.set', 'anonymizeIp', true);} //mask IP address if German localized content*/
            if (wap_ga.campaign) { //config campaigns manually if necessary
                gawap(trackerName + '.set', 'campaignName', wap_ga.config.campaign.cname);
                gawap(trackerName + '.set', 'campaignSource', wap_ga.config.campaign.source);
                gawap(trackerName + '.set', 'campaignMedium', wap_ga.config.campaign.medium);
            }

            if (wap_tms.referrer !== '') {
                gawap(trackerName + '.set', 'dimension136', wa_doc.referrer.split("?")[0].toLowerCase());
                gawap(trackerName + '.set', 'dimension110', wap_tms.referrer.toLowerCase());  
                gawap(trackerName + '.set', 'contentGroup3', wap_tms.referrer);
            }
            //append Site ID to title so we can apply real-time filtering using custom dimensions
            gawap(trackerName + '.set', 'title', pageTitle);
        }

        //START cross-domain custom solution, appends ?_ga=cookie to enable cross-domain using 1 first party cookie
        var domainRegExPattern = "(?!.*" + tms_domain + ")(.*)\\.intel(.*)"; //patter to match
        var domainRegEx = new RegExp(domainRegExPattern);
        if (wap_tms.jquery.ver_1_7_plus) {
            (function ($) { //check if jQuery available
                $("body").on("mousedown keydown touchstart", "a", function (event) {
                    var linkHref = $(this).attr("href") + "";
                    linkHref = decodeURIComponent(linkHref);
                    wap_ga.config.appendlink = (/^https?:\/\//.test(linkHref)) ? true : false; //check if starts with http(s)://
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (/www\.intelserveredge\.com|japan\.intel\.com|appshowcase\.intel\.com/g.test(linkHref)) ? false : true; } //opt-out domains
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (/\_ga\=/.test(linkHref)) ? false : true; } //check if link is already tagged with _ga=val
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (/(.*)((#(.*)\?)|(\?(.*)#)|(\?(.*)\?))/g.test(linkHref)) ? false : true; } //do not add if link contains # AND ?, ? AND # or ? AND ? as they may break Intel websites
                    //if(wap_ga.config.appendlink){wap_ga.config.appendlink = (/(.*)(\?|#)(.*)/g.test(linkHref)) ? false : true;} //do not add if link contains # OR ?, safe way to ensure no broken apps
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (wap_tms.custom.isAsset(linkHref)) ? false : true; } //check if link matches criteria defined in regEx
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (domainRegEx.test(linkHref)) ? true : false; } //check if link matches criteria defined in regEx
                    //if (typeof crossDomainSurveyFlag != 'undefined'){ if (crossDomainSurveyFlag) wap_ga.config.appendlink = true; } //On Research Survey
                    //if (/onsite2\.researchintel\.com|mcafee\.com|intelsecurity\.com/.test(linkHref)){ wap_ga.config.appendlink = true;} //Opt in domains  ***** REMOVED McAfee cross-domain 3/16 due to MI *****
                    if (/onsite2\.researchintel\.com/.test(linkHref)){ wap_ga.config.appendlink = true;} //Opt in domains
                    if (wap_ga.config.appendlink) { //must match ALL the above criteria
                        var linker = new window.gaplugins.Linker(wap_ga.config.tracker);
                        var newHref = linker.decorate(linkHref);
                        try { //wrap in try catch to take care not break href when updating
                            if (typeof utag_data.wa_elq_id_short !== "undefined") { //append Eloqua contact ID if present
                                if (utag_data.wa_elq_id_short !== "") {
                                    var elqCookieLink = 'elq_cid='+utag_data.wa_elq_id_short;
                                    newHref += (/\?/.test(newHref)) ? '&'+elqCookieLink : '?'+elqCookieLink; //make to append correctly based in ? is present or not
                                }
                            }
                        }catch (e) {}
                        $(this).attr("href", newHref); //update href
                        ga_payload.metric['62,hit'] = '1';
                    }
                });
            }($wap));
        }
        //END   
    });
}

function waGetPaidSource() {
    var campaignSourceDomain = (wap_ga.doc.referrer !== "") ? wap_ga.doc.referrer.split('/')[2].toLowerCase() : "unknown";//get referrer domain if available
    switch (true) {
        case /google/.test(campaignSourceDomain): campaignSource = "google"; break;
        case /yahoo/.test(campaignSourceDomain): campaignSource = "yahoo"; break;
        case /bing/.test(campaignSourceDomain): campaignSource = "bing"; break;
        case /daum/.test(campaignSourceDomain): campaignSource = "daum"; break;
        case /baidu/.test(campaignSourceDomain): campaignSource = "baidu"; break;
        case /eniro/.test(campaignSourceDomain): campaignSource = "eniro"; break;
        case /naver/.test(campaignSourceDomain): campaignSource = "naver"; break;
        case /pchome/.test(campaignSourceDomain): campaignSource = "pchome"; break;
        case /msn/.test(campaignSourceDomain): campaignSource = "msn"; break;
        case /aol/.test(campaignSourceDomain): campaignSource = "aol"; break;
        case /lycos/.test(campaignSourceDomain): campaignSource = "lycos"; break;
        case /ask/.test(campaignSourceDomain): campaignSource = "ask"; break;
        case /netscape/.test(campaignSourceDomain): campaignSource = "netscape"; break;
        case /mamma/.test(campaignSourceDomain): campaignSource = "mamma"; break;
        case /about/.test(campaignSourceDomain): campaignSource = "about"; break;
        case /voila/.test(campaignSourceDomain): campaignSource = "voila"; break;
        case /virgilio/.test(campaignSourceDomain): campaignSource = "virgilio"; break;
        case /live/.test(campaignSourceDomain): campaignSource = "live"; break;
        case /alice/.test(campaignSourceDomain): campaignSource = "alice"; break;
        case /yandex/.test(campaignSourceDomain): campaignSource = "yandex"; break;
        case /najdi/.test(campaignSourceDomain): campaignSource = "najdi"; break;
        case /seznam/.test(campaignSourceDomain): campaignSource = "seznam"; break;
        case /rakuten/.test(campaignSourceDomain): campaignSource = "rakuten"; break;
        case /biglobe/.test(campaignSourceDomain): campaignSource = "biglobe"; break;
        case /onet/.test(campaignSourceDomain): campaignSource = "onet"; break;
        case /wp/.test(campaignSourceDomain): campaignSource = "wp"; break;
        case /yam/.test(campaignSourceDomain): campaignSource = "yam"; break;
        case /kvasir/.test(campaignSourceDomain): campaignSource = "kvasir"; break;
        case /ozu/.test(campaignSourceDomain): campaignSource = "ozu"; break;
        case /terra/.test(campaignSourceDomain): campaignSource = "terra"; break;
        case /rambler/.test(campaignSourceDomain): campaignSource = "rambler"; break;
        case /conduit/.test(campaignSourceDomain): campaignSource = "conduit"; break;
        case /babylon/.test(campaignSourceDomain): campaignSource = "babylon"; break;
        case /search-results/.test(campaignSourceDomain): campaignSource = "search-results"; break;
        case /comcast/.test(campaignSourceDomain): campaignSource = "comcast"; break;
        case /incredimail/.test(campaignSourceDomain): campaignSource = "incredimail"; break;
        case /go.mail.ru/.test(campaignSourceDomain): campaignSource = "go.mail.ru"; break;
        case /search.centrum.cz/.test(campaignSourceDomain): campaignSource = "search.centrum.cz"; break;
        case /startsiden/.test(campaignSourceDomain): campaignSource = "startsiden"; break;
        default:
            campaignSource = campaignSourceDomain.replace(/^www\./, ''); //use referrer domain as source and remove starting www. if present
    }
    return campaignSource;
}

var uaga_id = ua_account.split(',');
for (var i = 0; i < uaga_id.length; i++) {
    //console.log(i+": "+uaga_id[i]);
    configGA(uaga_id[i], i); //configure GA UA
}
wap_ga.config.pagePerformance(); //capture percieved load time

ga_customVars.config = function (hitType) {
    if (hitType == 'page') {        
        ga_payload.dimension['55,page'] = wap_ga.section + ":" + wap_tms.cleanPii(wap_ga.pagegroup.toLowerCase(), 'url');
        try { ga_payload.dimension['56,page'] = decodeURIComponent(location.search); } catch (e) { ga_payload.dimension['56,page'] = location.search; };        
        ga_payload.dimension['56,page'] = wap_tms.cleanPii(ga_payload.dimension['56,page'],'qs');
        ga_payload.dimension['57,page'] = wap_ga.user_agent;
        ga_payload.dimension['140,page'] = (("https:" == document.location.protocol) ? "https" : "http").toLowerCase();
        if (wap_ga.qs.wapkw) { ga_payload.dimension['42,page'] = wap_ga.qs.wapkw.toLowerCase(); ga_payload.metric['40,hit'] = '1'; } //track search results referal, look to see if wapkw is appended
    }
    /*
    if(hitType=='event'){
      if(wa_trackUA){ //GA UA
        //
      }
    }
    */
},
ga_customVars.payload = function (trackerName, fo) {
    for (var key in ga_payload) {
        var obj = ga_payload[key];
        for (var prop in obj) {
            var slot = prop.split(',');
            var keySlot = key + slot[0];
            if (obj[prop] !== '') { //only set if value is not blank
                if (key == "metric") {
                    //console.log(keySlot + ": " + obj[prop]);
                    if (slot[1] == 'hit') {
                        if (obj[prop] != 0) { //only set if not zero
                            fo[keySlot] = Number(obj[prop]);
                            ga_payload.metric[slot] = 0; //set zero to expire w/ hit
                        }
                    }
                    else {
                        gawap(trackerName + '.set', keySlot, Number(obj[prop]));
                    }
                }
                else { //dimension
                    //console.log(keySlot + ": " + obj[prop]);
                    if (slot[1] == 'hit') {
                        fo[keySlot] = obj[prop] + "";
                        ga_payload.dimension[slot] = ''; //set to blank to expire w/ hit
                    }
                    else {
                        gawap(trackerName + '.set', keySlot, obj[prop] + "");
                    }
                }
            }
        }
    }
    return fo;
};

if (wap_ga.autofire) { //check if we should auto fire pageview
    trackGaPage(wap_ga.pagename, wap_ga.callback);
}

wap_tms.ga_loaded = true; /* Flag for test for GA script loaded, DO NOT REMOVE = should be last line */
//~~tv:20064.20160308
//~~tc:support region dropdown selection in tag config, add timing information, add sampling support
//~~tc:dynamically set polling interval for each track request (utag.link or utag.view)
//~~tc:add support for new 'collect' endpoint (previous only 'datacloud' supported)

/* Modified copy of json2.js (no need for parse function)*/
/* https://github.com/douglascrockford/JSON-js */
if(typeof JSON!=='object'){JSON={};}
(function(){'use strict';var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?'0'+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+ f(this.getUTCDate())+'T'+ f(this.getUTCHours())+':'+ f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap,indent,meta,rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}
}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}}());


//tealium universal tag - utag.sender.20064 ut4.0.201605101953, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'all':1};
  u.server_domain = "tealiumiq.com";
  u.tag_config_server = "//datacloud.tealiumiq.com/intel/main/2/i.gif";
  u.tag_config_sampling = "100" || "100";
  utag_data.wa_custom_content_group = 'vp_poc'; //aggregate grouping for POC
  utag_data.load_audiencestream = 'true'; //flag to load Virtual Profile's POC
  
  // In debug mode, always in sample group
  if ( utag.cfg.utagdb ) {
    u.tag_config_sampling = "100";
  }
  u.tag_config_region = "default" || "default";
  u.region = "";
  u.performance_timing_count = 0;
  u.account = utag.cfg.utid.split("/")[0];
  u.profile = "" || utag.cfg.utid.split("/")[1];
 
  // Auto-build the endpoint for Tealium Collect
  if ( u.tag_config_server === "" ) {
    if ( u.tag_config_region === "default" ) {
      u.tag_config_server = "//" + [ "collect." + u.server_domain, u.account, u.profile, "2", "i.gif" ].join("/");
    } else {
      u.tag_config_server = "//" + [ "collect-" + u.tag_config_region + "." + u.server_domain, u.account, u.profile, "2", "i.gif" ].join("/");
    }
  }

  // For those who fill out collect.tealiumiq.com and then choose a specific region
  if ( u.tag_config_region !== "default" && u.tag_config_server.indexOf( "collect." + u.server_domain ) > 0 ) {
    u.tag_config_server = u.tag_config_server.replace( "collect." + u.server_domain, "collect-" + u.tag_config_region + "." + u.server_domain );
    u.region = u.tag_config_region;
  }
  
  u.data_enrichment="frequent";
  u.profile_specific_vid = 0;
  u.enrichment_polling = 1;
  u.enrichment_polling_delay = 1000;
  u.do_enrichment = function(){};
  var q = u.tag_config_server.indexOf("?");
  if(q>0 && (q+1)==u.tag_config_server.length){
    // utag.DB("DataCloud config error. Trailing ? in URL")
    u.tag_config_server = u.tag_config_server.replace("?","");
  }
  u.server_list = u.tag_config_server.split("|");
  u.enrichment_enabled = {};
  u.get_account_profile = function(s){
    var p = s.substring( s.indexOf( u.server_domain ) ).split("/");
    return p;
  }

  // Should only call this function when u.tag_config_sampling < 100
  u.is_in_sample_group = function( b ) {
    var group = "100";

    // Automatically in sampling group if the sampling value is 100% or not defined at all
    if ( u.tag_config_sampling === "" || u.tag_config_sampling === "100" ) {
      return true
    }
    
    // Check or set cookie (cookie should survive across visits)
    if ( b["cp.utag_main_dc_group"] ) {
      group = b["cp.utag_main_dc_group"]; 
    } else {
      // group = random number 1..100
      group = Math.floor(Math.random() * 100) + 1;
      // set cookie
      utag.loader.SC( "utag_main", {"dc_group": group} );
    }

    // Return true if this visitor in sampling group
    if ( parseInt( group ) <= parseInt( u.tag_config_sampling ) ) {
      return true
    } else {
      return false
    }
    
  }

  u.get_performance_timing = function( b ) {
    var t, timing;
    var data = {};

    function subtract( val1, val2 ){
      var difference = 0;
      if ( val1 > val2 ) {
        difference = val1 - val2;
      }
      return difference;
    }

    if ( typeof localStorage != "undefined" && JSON.parse && window.performance && window.performance.timing ) {
      t = window.performance.timing;
      // Read existing local storage data and add to data layer
      timing = localStorage.getItem("tealium_timing");
      // Only get this info on the first event for this page
      if ( timing !== null && timing !== "{}" && typeof b !== "undefined" && u.performance_timing_count === 0 ) {
        utag.ut.merge(b, utag.ut.flatten({timing : JSON.parse(timing)}), 1);
      }
    } else {
      return;
    }

    // Get current URL timing data into local storage.  Or setTimeout and do recursive call if data not there yet
    u.performance_timing_count++;
    for ( var k in t ) {
      // Some data might not be ready yet, wait and request again
      // Only try 20 times max
      if ( ( k.indexOf("dom") === 0 || k.indexOf("load") === 0 ) && t[k] === 0 && u.performance_timing_count < 20 ) {
        setTimeout( u.get_performance_timing, 1000 );
      }
    }

    // Write current page performance data to local storage for retrieval on next page
    data["domain"] = location.hostname + "";
    data["pathname"] = location.pathname + "";
    data["query_string"] = ("" + location.search).substring(1);
    data["timestamp"] = (new Date()).getTime();
    data["dns"] = subtract( t.domainLookupEnd, t.domainLookupStart );
    data["connect"] = subtract( t.connectEnd, t.connectStart );
    data["response"] = subtract( t.responseEnd, t.responseStart );
    data["dom_loading_to_interactive"] = subtract( t.domInteractive, t.domLoading );
    data["dom_interactive_to_complete"] = subtract( t.domComplete, t.domInteractive );
    data["load"] = subtract( t.loadEventEnd, t.loadEventStart );
    data["time_to_first_byte"] = subtract( t.responseStart, t.connectEnd );
    data["front_end"] = subtract( t.loadEventStart, t.responseEnd );
    data["fetch_to_response"] = subtract( t.responseStart, t.fetchStart );
    data["fetch_to_complete"] = subtract( t.domComplete, t.fetchStart );
    data["fetch_to_interactive"] = subtract( t.domInteractive, t.fetchStart );

    localStorage.setItem( "tealium_timing", JSON.stringify( data ) );

  }

  u.map={};
  u.extend=[];

  u.send=function(a,b,c,d,e,f){
	if(a=="view"){return false};  //only fire for collect tag call
    if(u.ev[a]||typeof u.ev["all"]!="undefined"){
      u.make_enrichment_request = false;

      

      // If not in our sampling group, then exit (do not fire tag)
      if ( !u.is_in_sample_group( b ) ) {
        return false
      }
      u.get_performance_timing( b );

      for (var i = 0; i < u.server_list.length; i++){
        // Adjust server based on region -- if cookie found, use this
        if ( b["cp.utag_main_dc_region"] ){
          u.region = b["cp.utag_main_dc_region"];
          u.server_list[i] = u.server_list[i].replace("datacloud.","datacloud-" + u.region + ".");
          u.server_list[i] = u.server_list[i].replace("collect.","collect-" + u.region + ".");
        }
        if ( u.enrichment_enabled[i] !== false ){
          u.enrichment_enabled[u.server_list[i]] = true
        }
      }

      // For multiple server locations, need unique vid values for each
      if ( u.server_list.length > 1 ){
        u.profile_specific_vid = 1;
      }
      u.data = utag.datacloud || {};

      u.data["loader.cfg"]={};
      for(d in utag.loader.GV(utag.loader.cfg)){
        if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
           utag.loader.cfg[d].executed = 1;
        }else{
           utag.loader.cfg[d].executed = 0;
        }
        u.data["loader.cfg"][d]=utag.loader.GV(utag.loader.cfg[d]);
      }
        
      //u.data.cfg=utag.cfg;
      u.data.data=b;
      /* Re-encode items in "qp." params */
      for(d in u.data.data){
        if((d+'').indexOf("qp.")==0){
          u.data.data[d]=encodeURIComponent(u.data.data[d]);
        }else if((d+'').indexOf("va.")==0){
          /* Remove visitor attributes */
          delete u.data.data[d]
        }
      }

      /* Visit Number and Event Count -- event count starts over with each visit */
      if( !b["cp.utag_main_dc_event"] ){
        b["cp.utag_main_dc_visit"] = (1 + ( b["cp.utag_main_dc_visit"]?parseInt(b["cp.utag_main_dc_visit"]):0 )) + '';
      }
      b["cp.utag_main_dc_event"] = (1 + ( b["cp.utag_main_dc_event"]?parseInt(b["cp.utag_main_dc_event"]):0 )) + '';
      utag.loader.SC("utag_main", {"dc_visit": b["cp.utag_main_dc_visit"] , "dc_event": b["cp.utag_main_dc_event"] + ";exp-session"});

      /* Update global data layer for Visitor Attribute check */
      utag.data["cp.utag_main_dc_visit"] = b["cp.utag_main_dc_visit"];
      utag.data["cp.utag_main_dc_event"] = b["cp.utag_main_dc_event"];

      var dt = new Date();
      /* Send browser info */
      u.data.browser = {};
      try{
        u.data.browser["height"] = window.innerHeight || document.body.clientHeight;
        u.data.browser["width"] = window.innerWidth || document.body.clientWidth;
        u.data.browser["screen_height"] = screen.height;
        u.data.browser["screen_width"] = screen.width;
        u.data.browser["timezone_offset"] = dt.getTimezoneOffset();
      }catch(e){utag.DB(e)}

      u.data["event"]=a+'';
      u.data["post_time"]=dt.getTime();

      /* Audience Stream Data Layer Enrichment */
      if( u.data_enrichment == "frequent" || u.data_enrichment == "infrequent" ){

        u.visit_num = b["cp.utag_main_dc_visit"];

        if( parseInt(u.visit_num) > 1 && b["cp.utag_main_dc_event"] == "1"){
          u.enrichment_polling = 2;
        }

        try{
          u.va_update = parseInt(localStorage.getItem("tealium_va_update") || 0);
        }catch(e){utag.DB(e)}

        u.visitor_id = u.visitor_id || b["cp.utag_main_v_id"];
        if( ( u.data_enrichment == "frequent" && !(u.visit_num == "1" && b["cp.utag_main_dc_event"] == "1" ) ) ||
            ( u.data_enrichment == "infrequent" && parseInt(u.visit_num) > 1 && parseInt(b["cp.utag_main_dc_event"]) <= 5 && u.visit_num != u.va_update )){
          u.make_enrichment_request = true;
        }else if(b._corder){
          u.make_enrichment_request = true;
          u.enrichment_polling = 3;
          u.enrichment_polling_delay = 4000;
        }

        u.visitor_service_request = function(t, server){
          var s = "//visitor-service"+(u.region?"-"+u.region:"") + "." + u.server_domain;
          var p = u.get_account_profile( server );
          (function(p){
            // declare multiple functions with dynamic local storage key -- multiple enrichments in same domain
            var prefix = "tealium_va";
            var key = "_" + p[1] + "_" + p[2];
            
            utag.ut["writeva"+p[2]] = function(o){
              utag.DB("Visitor Attributes: " + prefix + key);
              utag.DB(o)
              var str = JSON.stringify(o);
              if(str!="{}" && str!=""){
                try{
                  localStorage.setItem('tealium_va_update', utag.data["cp.utag_main_dc_visit"]);
                  // for utag.js v4.38 or earlier
                  localStorage.setItem( prefix, str);
                  // dynamic location in localstorage (utag.js 4.39 or later)
                  localStorage.setItem( prefix + key, str);
                }catch(e){utag.DB(e)}
                
                if (typeof tealium_enrichment == "function"){
                  tealium_enrichment(o, prefix + key);
                }
              }
            }
          }( p.slice(0) ))

          var vid = u.visitor_id;
          if( u.profile_specific_vid == 1 ){
            vid += p[2]; 
          }
          utag.ut.loader({ id: "tealium_visitor_service_34"+p[2], src: s+"/"+p[1]+"/"+p[2]+"/"+vid+"?callback=utag.ut%5B%22writeva"+p[2]+"%22%5D&rnd="+t });
        }

        u.do_enrichment = function(server, enrichment_polling, enrichment_polling_delay){
          // utag.js 4.27 or later is required
          if( typeof utag.ut.loader!="undefined" ){
            // additional attempts for visitor enrichment
            for(var i=0;i<enrichment_polling;i++){
              setTimeout(function(){ u.visitor_service_request((new Date).getTime(), server) }, i*enrichment_polling_delay+1 );
            }
          }
        }
      }
      var json_string;
      var regExpReplace = new RegExp( u.visitor_id, "g" );
      
      if(window.FormData){
        // modern browsers
        function postData(server_index, enrichment_polling, enrichment_polling_delay){

          if ( server_index+1 > u.server_list.length ){
            return;
          }
          var xhr = new XMLHttpRequest();
          var server = u.server_list[server_index];
          var formData = new FormData();
          xhr.addEventListener('readystatechange', function() {
            if( xhr.readyState === 3 ) {
              try {
                u.region = xhr.getResponseHeader("X-Region") || u.region || "";
              } catch(res_error) {
                utag.DB(res_error);
                u.region = u.region || "";
              }

              if(u.region)utag.loader.SC("utag_main", {"dc_region": u.region+ ";exp-session"});
              utag.DB("dc_region:"+u.region);
            }else if( xhr.readyState === 4 ) {
              // do secondary call for multiple server locations
              postData(server_index+1, enrichment_polling, enrichment_polling_delay);
              if( u.make_enrichment_request && u.enrichment_enabled[server] )u.do_enrichment( server, enrichment_polling, enrichment_polling_delay );
            }
          });
          xhr.open('post', u.server_list[server_index], true);
          xhr.withCredentials = true;
          json_string = JSON.stringify(u.data);
          if( u.profile_specific_vid == 1 ){
            json_string = json_string.replace( regExpReplace, u.visitor_id + u.get_account_profile(server)[2] );
          }
          formData.append("data", json_string);
          xhr.send(formData);
        }

        postData(0, u.enrichment_polling, u.enrichment_polling_delay);
        
      }else{
        // fallback (old browsers)
        for (var i = 0; i < u.server_list.length; i++){
          (function(i, enrichment_polling, enrichment_polling_delay){
            var server = u.server_list[i];
            setTimeout( function(){
              json_string = JSON.stringify(u.data);
              if( u.profile_specific_vid == 1 ){
                json_string = json_string.replace( regExpReplace, u.visitor_id + u.get_account_profile(server)[2] );
              }
              var img = new Image();
              img.src = server +'?data='+encodeURIComponent(json_string);
              if( u.make_enrichment_request && u.enrichment_enabled[server] )u.do_enrichment( server, enrichment_polling, enrichment_polling_delay );
            }, i*700 );
          }(i, u.enrichment_polling, u.enrichment_polling_delay))
        }
      }
    }
  }
  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
	// fire on page load
	wap_ga.udo.event_type = 'page';
	utag_data.event_type = 'page';
	wap_ga.udo.event_dmf_points = wap_tms.events.dmfpoints.pageload.name;
	wap_ga.udo.event_dmf_type = wap_tms.events.dmfpoints.pageload.val;
	utag.track("collect", wap_ga.udo);
		
})('34','intel.profile-ssg.intel');
}catch(e){}
//end tealium universal tagif(typeof utag!='undefined'){utag.initcatch=true;for(var i in utag.loader.GV(utag.loader.cfg)){var b=utag.loader.cfg[i];if(b.load!=4){utag.initcatch=false;break};if(b.wait==1){utag.initcatch=false;break}};if(utag.initcatch)utag.handler.INIT();}
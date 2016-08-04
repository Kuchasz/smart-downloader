/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(5);
	
	var _newbie = __webpack_require__(303);
	
	__webpack_require__(307);
	
	var _knockout = __webpack_require__(304);
	
	var ko = _interopRequireWildcard(_knockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var newBie = new _newbie.Newbie('John', 23);
	var prom = new Promise(function (res) {
	  setTimeout(function () {
	    newBie.name('Dory');
	    res();
	  }, 2500);
	}).then(function () {
	  return setTimeout(function () {
	    newBie.age(24);
	  }, 2500);
	});
	
	ko.applyBindings(newBie);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(6);
	
	__webpack_require__(297);
	
	__webpack_require__(300);
	
	/* eslint max-len: 0 */
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	// Should be removed in the next major release:
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(7);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(61);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(80);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(89);
	__webpack_require__(91);
	__webpack_require__(93);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(215);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(295);
	__webpack_require__(296);
	module.exports = __webpack_require__(13);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var global = __webpack_require__(8),
	    has = __webpack_require__(9),
	    DESCRIPTORS = __webpack_require__(10),
	    $export = __webpack_require__(12),
	    redefine = __webpack_require__(22),
	    META = __webpack_require__(26).KEY,
	    $fails = __webpack_require__(11),
	    shared = __webpack_require__(27),
	    setToStringTag = __webpack_require__(28),
	    uid = __webpack_require__(23),
	    wks = __webpack_require__(29),
	    wksExt = __webpack_require__(30),
	    wksDefine = __webpack_require__(31),
	    keyOf = __webpack_require__(33),
	    enumKeys = __webpack_require__(46),
	    isArray = __webpack_require__(49),
	    anObject = __webpack_require__(16),
	    toIObject = __webpack_require__(36),
	    toPrimitive = __webpack_require__(20),
	    createDesc = __webpack_require__(21),
	    _create = __webpack_require__(50),
	    gOPNExt = __webpack_require__(53),
	    $GOPD = __webpack_require__(55),
	    $DP = __webpack_require__(15),
	    $keys = __webpack_require__(34),
	    gOPD = $GOPD.f,
	    dP = $DP.f,
	    gOPN = gOPNExt.f,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    PROTOTYPE = 'prototype',
	    HIDDEN = wks('_hidden'),
	    TO_PRIMITIVE = wks('toPrimitive'),
	    isEnum = {}.propertyIsEnumerable,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    OPSymbols = shared('op-symbols'),
	    ObjectProto = Object[PROTOTYPE],
	    USE_NATIVE = typeof $Symbol == 'function',
	    QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  }return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto,
	      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  }return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function _Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(54).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(48).f = $propertyIsEnumerable;
	  __webpack_require__(47).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(32)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
	  wks(symbols[i++]);
	}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
	  wksDefine(symbols[i++]);
	}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it],
	        i = 1,
	        replacer,
	        $replacer;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    core = __webpack_require__(13),
	    hide = __webpack_require__(14),
	    redefine = __webpack_require__(22),
	    ctx = __webpack_require__(24),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(15),
	    createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(10) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(16),
	    IE8_DOM_DEFINE = __webpack_require__(18),
	    toPrimitive = __webpack_require__(20),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(17);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(10) && !__webpack_require__(11)(function () {
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(17),
	    document = __webpack_require__(8).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(17);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    hide = __webpack_require__(14),
	    has = __webpack_require__(9),
	    SRC = __webpack_require__(23)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(13).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var META = __webpack_require__(23)('meta'),
	    isObject = __webpack_require__(17),
	    has = __webpack_require__(9),
	    setDesc = __webpack_require__(15).f,
	    id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(11)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function setMeta(it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(15).f,
	    has = __webpack_require__(9),
	    TAG = __webpack_require__(29)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(27)('wks'),
	    uid = __webpack_require__(23),
	    _Symbol = __webpack_require__(8).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.f = __webpack_require__(29);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    core = __webpack_require__(13),
	    LIBRARY = __webpack_require__(32),
	    wksExt = __webpack_require__(30),
	    defineProperty = __webpack_require__(15).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(34),
	    toIObject = __webpack_require__(36);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(35),
	    enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(9),
	    toIObject = __webpack_require__(36),
	    arrayIndexOf = __webpack_require__(40)(false),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37),
	    defined = __webpack_require__(39);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36),
	    toLength = __webpack_require__(41),
	    toIndex = __webpack_require__(43);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(42),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(42),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(27)('keys'),
	    uid = __webpack_require__(23);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34),
	    gOPS = __webpack_require__(47),
	    pIE = __webpack_require__(48);
	module.exports = function (it) {
	  var result = getKeys(it),
	      getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = pIE.f,
	        i = 0,
	        key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(16),
	    dPs = __webpack_require__(51),
	    enumBugKeys = __webpack_require__(45),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(52).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(15),
	    anObject = __webpack_require__(16),
	    getKeys = __webpack_require__(34);
	
	module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36),
	    gOPN = __webpack_require__(54).f,
	    toString = {}.toString;
	
	var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(35),
	    hiddenKeys = __webpack_require__(45).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pIE = __webpack_require__(48),
	    createDesc = __webpack_require__(21),
	    toIObject = __webpack_require__(36),
	    toPrimitive = __webpack_require__(20),
	    has = __webpack_require__(9),
	    IE8_DOM_DEFINE = __webpack_require__(18),
	    gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(50) });

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(15).f });

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperties: __webpack_require__(51) });

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(36),
	    $getOwnPropertyDescriptor = __webpack_require__(55).f;
	
	__webpack_require__(60)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(12),
	    core = __webpack_require__(13),
	    fails = __webpack_require__(11);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(62),
	    $getPrototypeOf = __webpack_require__(63);
	
	__webpack_require__(60)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(39);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(9),
	    toObject = __webpack_require__(62),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(62),
	    $keys = __webpack_require__(34);
	
	__webpack_require__(60)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(60)('getOwnPropertyNames', function () {
	  return __webpack_require__(53).f;
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(17),
	    meta = __webpack_require__(26).onFreeze;
	
	__webpack_require__(60)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(17),
	    meta = __webpack_require__(26).onFreeze;
	
	__webpack_require__(60)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(17),
	    meta = __webpack_require__(26).onFreeze;
	
	__webpack_require__(60)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(17);
	
	__webpack_require__(60)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(17);
	
	__webpack_require__(60)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(17);
	
	__webpack_require__(60)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(12);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(73) });

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(34),
	    gOPS = __webpack_require__(47),
	    pIE = __webpack_require__(48),
	    toObject = __webpack_require__(62),
	    IObject = __webpack_require__(37),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(11)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(12);
	$export($export.S, 'Object', { is: __webpack_require__(75) });

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(12);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(77).set });

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(17),
	    anObject = __webpack_require__(16);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(24)(Function.call, __webpack_require__(55).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(79),
	    test = {};
	test[__webpack_require__(29)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(22)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(38),
	    TAG = __webpack_require__(29)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(12);
	
	$export($export.P, 'Function', { bind: __webpack_require__(81) });

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var aFunction = __webpack_require__(25),
	    isObject = __webpack_require__(17),
	    invoke = __webpack_require__(82),
	    arraySlice = [].slice,
	    factories = {};
	
	var construct = function construct(F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) {
	      n[i] = 'a[' + i + ']';
	    }factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */) {
	  var fn = aFunction(this),
	      partArgs = arraySlice.call(arguments, 1);
	  var bound = function bound() /* args... */{
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(15).f,
	    createDesc = __webpack_require__(21),
	    has = __webpack_require__(9),
	    FProto = Function.prototype,
	    nameRE = /^\s*function ([^ (]*)/,
	    NAME = 'name';
	
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && dP(FProto, NAME, {
	  configurable: true,
	  get: function get() {
	    try {
	      var that = this,
	          name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch (e) {
	      return '';
	    }
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(17),
	    getPrototypeOf = __webpack_require__(63),
	    HAS_INSTANCE = __webpack_require__(29)('hasInstance'),
	    FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(15).f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
	    if (typeof this != 'function' || !isObject(O)) return false;
	    if (!isObject(this.prototype)) return O instanceof this;
	    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	    while (O = getPrototypeOf(O)) {
	      if (this.prototype === O) return true;
	    }return false;
	  } });

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $parseInt = __webpack_require__(86);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $parseInt = __webpack_require__(8).parseInt,
	    $trim = __webpack_require__(87).trim,
	    ws = __webpack_require__(88),
	    hex = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    defined = __webpack_require__(39),
	    fails = __webpack_require__(11),
	    spaces = __webpack_require__(88),
	    space = '[' + spaces + ']',
	    non = '​',
	    ltrim = RegExp('^' + space + space + '*'),
	    rtrim = RegExp(space + space + '*$');
	
	var exporter = function exporter(KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = '\t\n\u000b\f\r   ᠎    ' + '         　\u2028\u2029﻿';

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $parseFloat = __webpack_require__(90);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $parseFloat = __webpack_require__(8).parseFloat,
	    $trim = __webpack_require__(87).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(88) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3),
	      result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    has = __webpack_require__(9),
	    cof = __webpack_require__(38),
	    inheritIfRequired = __webpack_require__(92),
	    toPrimitive = __webpack_require__(20),
	    fails = __webpack_require__(11),
	    gOPN = __webpack_require__(54).f,
	    gOPD = __webpack_require__(55).f,
	    dP = __webpack_require__(15).f,
	    $trim = __webpack_require__(87).trim,
	    NUMBER = 'Number',
	    $Number = global[NUMBER],
	    Base = $Number,
	    proto = $Number.prototype
	// Opera ~12 has broken Object#toString
	,
	    BROKEN_COF = cof(__webpack_require__(50)(proto)) == NUMBER,
	    TRIM = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function toNumber(argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0),
	        third,
	        radix,
	        maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66:case 98:
	          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
	        case 79:case 111:
	          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
	        default:
	          return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      }return parseInt(digits, radix);
	    }
	  }return +it;
	};
	
	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value,
	        that = this;
	    return that instanceof $Number
	    // check on 1..constructor(foo) case
	    && (BROKEN_COF ? fails(function () {
	      proto.valueOf.call(that);
	    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(10) ? gOPN(Base) : (
	  // ES3:
	  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	  // ES6 (in case, if modules with ES6 Number statics required before):
	  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(22)(global, NUMBER, $Number);
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(17),
	    setPrototypeOf = __webpack_require__(77).set;
	module.exports = function (that, target, C) {
	  var P,
	      S = target.constructor;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  }return that;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    toInteger = __webpack_require__(42),
	    aNumberValue = __webpack_require__(94),
	    repeat = __webpack_require__(95),
	    $toFixed = 1..toFixed,
	    floor = Math.floor,
	    data = [0, 0, 0, 0, 0, 0],
	    ERROR = 'Number.toFixed: incorrect invocation!',
	    ZERO = '0';
	
	var multiply = function multiply(n, c) {
	  var i = -1,
	      c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function divide(n) {
	  var i = 6,
	      c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = c % n * 1e7;
	  }
	};
	var numToString = function numToString() {
	  var i = 6,
	      s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  }return s;
	};
	var pow = function pow(x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function log(x) {
	  var n = 0,
	      x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  }return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !__webpack_require__(11)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR),
	        f = toInteger(fractionDigits),
	        s = '',
	        m = ZERO,
	        e,
	        z,
	        j,
	        k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    }return m;
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cof = __webpack_require__(38);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(42),
	    defined = __webpack_require__(39);
	
	module.exports = function repeat(count) {
	  var str = String(defined(this)),
	      res = '',
	      n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (; n > 0; (n >>>= 1) && (str += str)) {
	    if (n & 1) res += str;
	  }return res;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $fails = __webpack_require__(11),
	    aNumberValue = __webpack_require__(94),
	    $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(12),
	    _isFinite = __webpack_require__(8).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(100) });

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(17),
	    floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    return number != number;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(12),
	    isInteger = __webpack_require__(100),
	    abs = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $parseFloat = __webpack_require__(90);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $parseInt = __webpack_require__(86);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(12),
	    log1p = __webpack_require__(108),
	    sqrt = Math.sqrt,
	    $acosh = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	&& Math.floor($acosh(Number.MAX_VALUE)) == 710
	// Tor Browser bug: Math.acosh(Infinity) -> NaN 
	&& $acosh(Infinity) == Infinity), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";
	
	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(12),
	    $asinh = Math.asinh;
	
	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(12),
	    $atanh = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(12),
	    sign = __webpack_require__(112);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";
	
	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(12),
	    exp = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(12),
	    $expm1 = __webpack_require__(116);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";
	
	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = !$expm1
	// Old FF bug
	|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	// Tor Browser bug
	|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(12),
	    sign = __webpack_require__(112),
	    pow = Math.pow,
	    EPSILON = pow(2, -52),
	    EPSILON32 = pow(2, -23),
	    MAX32 = pow(2, 127) * (2 - EPSILON32),
	    MIN32 = pow(2, -126);
	
	var roundTiesToEven = function roundTiesToEven(n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	$export($export.S, 'Math', {
	  fround: function fround(x) {
	    var $abs = Math.abs(x),
	        $sign = sign(x),
	        a,
	        result;
	    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if (result > MAX32 || result != result) return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(12),
	    abs = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) {
	    // eslint-disable-line no-unused-vars
	    var sum = 0,
	        i = 0,
	        aLen = arguments.length,
	        larg = 0,
	        arg,
	        div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(12),
	    $imul = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff,
	        xn = +x,
	        yn = +y,
	        xl = UINT16 & xn,
	        yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', { log1p: __webpack_require__(108) });

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', { sign: __webpack_require__(112) });

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(12),
	    expm1 = __webpack_require__(116),
	    exp = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(12),
	    expm1 = __webpack_require__(116),
	    exp = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x),
	        b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    toIndex = __webpack_require__(43),
	    fromCharCode = String.fromCharCode,
	    $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) {
	    // eslint-disable-line no-unused-vars
	    var res = [],
	        aLen = arguments.length,
	        i = 0,
	        code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
	    }return res.join('');
	  }
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    toIObject = __webpack_require__(36),
	    toLength = __webpack_require__(41);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw),
	        len = toLength(tpl.length),
	        aLen = arguments.length,
	        res = [],
	        i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    }return res.join('');
	  }
	});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	
	__webpack_require__(87)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(131)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(132)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(42),
	    defined = __webpack_require__(39);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(32),
	    $export = __webpack_require__(12),
	    redefine = __webpack_require__(22),
	    hide = __webpack_require__(14),
	    has = __webpack_require__(9),
	    Iterators = __webpack_require__(133),
	    $iterCreate = __webpack_require__(134),
	    setToStringTag = __webpack_require__(28),
	    getPrototypeOf = __webpack_require__(63),
	    ITERATOR = __webpack_require__(29)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(50),
	    descriptor = __webpack_require__(21),
	    setToStringTag = __webpack_require__(28),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(14)(IteratorPrototype, __webpack_require__(29)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $at = __webpack_require__(131)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	
	var $export = __webpack_require__(12),
	    toLength = __webpack_require__(41),
	    context = __webpack_require__(137),
	    ENDS_WITH = 'endsWith',
	    $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(139)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH),
	        endPosition = arguments.length > 1 ? arguments[1] : undefined,
	        len = toLength(that.length),
	        end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
	        search = String(searchString);
	    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(138),
	    defined = __webpack_require__(39);
	
	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(17),
	    cof = __webpack_require__(38),
	    MATCH = __webpack_require__(29)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var MATCH = __webpack_require__(29)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) {/* empty */}
	  }return true;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	
	var $export = __webpack_require__(12),
	    context = __webpack_require__(137),
	    INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(139)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */) {
	    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(95)
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	
	var $export = __webpack_require__(12),
	    toLength = __webpack_require__(41),
	    context = __webpack_require__(137),
	    STARTS_WITH = 'startsWith',
	    $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(139)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH),
	        index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
	        search = String(searchString);
	    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	
	__webpack_require__(144)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    fails = __webpack_require__(11),
	    defined = __webpack_require__(39),
	    quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function createHTML(string, tag, attribute, value) {
	  var S = String(defined(string)),
	      p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	
	__webpack_require__(144)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	
	__webpack_require__(144)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	
	__webpack_require__(144)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	
	__webpack_require__(144)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	
	__webpack_require__(144)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	
	__webpack_require__(144)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	
	__webpack_require__(144)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	
	__webpack_require__(144)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	
	__webpack_require__(144)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	
	__webpack_require__(144)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	
	__webpack_require__(144)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	
	__webpack_require__(144)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Date', { now: function now() {
	    return new Date().getTime();
	  } });

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    toObject = __webpack_require__(62),
	    toPrimitive = __webpack_require__(20);
	
	$export($export.P + $export.F * __webpack_require__(11)(function () {
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
	      return 1;
	    } }) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key) {
	    var O = toObject(this),
	        pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	
	var $export = __webpack_require__(12),
	    fails = __webpack_require__(11),
	    getTime = Date.prototype.getTime;
	
	var lz = function lz(num) {
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function () {
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString() {
	    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	    var d = this,
	        y = d.getUTCFullYear(),
	        m = d.getUTCMilliseconds(),
	        s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var DateProto = Date.prototype,
	    INVALID_DATE = 'Invalid Date',
	    TO_STRING = 'toString',
	    $toString = DateProto[TO_STRING],
	    getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(22)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TO_PRIMITIVE = __webpack_require__(29)('toPrimitive'),
	    proto = Date.prototype;
	
	if (!(TO_PRIMITIVE in proto)) __webpack_require__(14)(proto, TO_PRIMITIVE, __webpack_require__(162));

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(16),
	    toPrimitive = __webpack_require__(20),
	    NUMBER = 'number';
	
	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Array', { isArray: __webpack_require__(49) });

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(24),
	    $export = __webpack_require__(12),
	    toObject = __webpack_require__(62),
	    call = __webpack_require__(165),
	    isArrayIter = __webpack_require__(166),
	    toLength = __webpack_require__(41),
	    createProperty = __webpack_require__(167),
	    getIterFn = __webpack_require__(168);
	
	$export($export.S + $export.F * !__webpack_require__(169)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(16);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(133),
	    ITERATOR = __webpack_require__(29)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $defineProperty = __webpack_require__(15),
	    createDesc = __webpack_require__(21);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(79),
	    ITERATOR = __webpack_require__(29)('iterator'),
	    Iterators = __webpack_require__(133);
	module.exports = __webpack_require__(13).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(29)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    createProperty = __webpack_require__(167);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function () {
	  function F() {}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of() /* ...args */{
	    var index = 0,
	        aLen = arguments.length,
	        result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) {
	      createProperty(result, index, arguments[index++]);
	    }result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	
	var $export = __webpack_require__(12),
	    toIObject = __webpack_require__(36),
	    arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(37) != Object || !__webpack_require__(172)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fails = __webpack_require__(11);
	
	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    arg ? method.call(null, function () {}, 1) : method.call(null);
	  });
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    html = __webpack_require__(52),
	    cof = __webpack_require__(38),
	    toIndex = __webpack_require__(43),
	    toLength = __webpack_require__(41),
	    arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(11)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length),
	        klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toIndex(begin, len),
	        upTo = toIndex(end, len),
	        size = toLength(upTo - start),
	        cloned = Array(size),
	        i = 0;
	    for (; i < size; i++) {
	      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
	    }return cloned;
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    aFunction = __webpack_require__(25),
	    toObject = __webpack_require__(62),
	    fails = __webpack_require__(11),
	    $sort = [].sort,
	    test = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(172)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $forEach = __webpack_require__(176)(0),
	    STRICT = __webpack_require__(172)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(24),
	    IObject = __webpack_require__(37),
	    toObject = __webpack_require__(62),
	    toLength = __webpack_require__(41),
	    asc = __webpack_require__(177);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1,
	      IS_FILTER = TYPE == 2,
	      IS_SOME = TYPE == 3,
	      IS_EVERY = TYPE == 4,
	      IS_FIND_INDEX = TYPE == 6,
	      NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
	      create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this),
	        self = IObject(O),
	        f = ctx(callbackfn, that, 3),
	        length = toLength(self.length),
	        index = 0,
	        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
	        val,
	        res;
	    for (; length > index; index++) {
	      if (NO_HOLES || index in self) {
	        val = self[index];
	        res = f(val, index, O);
	        if (TYPE) {
	          if (IS_MAP) result[index] = res; // map
	          else if (res) switch (TYPE) {
	              case 3:
	                return true; // some
	              case 5:
	                return val; // find
	              case 6:
	                return index; // findIndex
	              case 2:
	                result.push(val); // filter
	            } else if (IS_EVERY) return false; // every
	        }
	      }
	    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(178);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(17),
	    isArray = __webpack_require__(49),
	    SPECIES = __webpack_require__(29)('species');
	
	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  }return C === undefined ? Array : C;
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $map = __webpack_require__(176)(1);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $filter = __webpack_require__(176)(2);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $some = __webpack_require__(176)(3);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $every = __webpack_require__(176)(4);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $reduce = __webpack_require__(184);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var aFunction = __webpack_require__(25),
	    toObject = __webpack_require__(62),
	    IObject = __webpack_require__(37),
	    toLength = __webpack_require__(41);
	
	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that),
	      self = IObject(O),
	      length = toLength(O.length),
	      index = isRight ? length - 1 : 0,
	      i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (; isRight ? index >= 0 : length > index; index += i) {
	    if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	  }return memo;
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $reduce = __webpack_require__(184);
	
	$export($export.P + $export.F * !__webpack_require__(172)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $indexOf = __webpack_require__(40)(false),
	    $native = [].indexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(172)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	    // convert -0 to +0
	    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    toIObject = __webpack_require__(36),
	    toInteger = __webpack_require__(42),
	    toLength = __webpack_require__(41),
	    $native = [].lastIndexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(172)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this),
	        length = toLength(O.length),
	        index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (; index >= 0; index--) {
	      if (index in O) if (O[index] === searchElement) return index || 0;
	    }return -1;
	  }
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(12);
	
	$export($export.P, 'Array', { copyWithin: __webpack_require__(189) });
	
	__webpack_require__(190)('copyWithin');

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	
	var toObject = __webpack_require__(62),
	    toIndex = __webpack_require__(43),
	    toLength = __webpack_require__(41);
	
	module.exports = [].copyWithin || function copyWithin(target /*= 0*/, start /*= 0, end = @length*/) {
	  var O = toObject(this),
	      len = toLength(O.length),
	      to = toIndex(target, len),
	      from = toIndex(start, len),
	      end = arguments.length > 2 ? arguments[2] : undefined,
	      count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
	      inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];else delete O[to];
	    to += inc;
	    from += inc;
	  }return O;
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(29)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(14)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(12);
	
	$export($export.P, 'Array', { fill: __webpack_require__(192) });
	
	__webpack_require__(190)('fill');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	
	var toObject = __webpack_require__(62),
	    toIndex = __webpack_require__(43),
	    toLength = __webpack_require__(41);
	module.exports = function fill(value /*, start = 0, end = @length */) {
	  var O = toObject(this),
	      length = toLength(O.length),
	      aLen = arguments.length,
	      index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
	      end = aLen > 2 ? arguments[2] : undefined,
	      endPos = end === undefined ? length : toIndex(end, length);
	  while (endPos > index) {
	    O[index++] = value;
	  }return O;
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	
	var $export = __webpack_require__(12),
	    $find = __webpack_require__(176)(5),
	    KEY = 'find',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(190)(KEY);

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	
	var $export = __webpack_require__(12),
	    $find = __webpack_require__(176)(6),
	    KEY = 'findIndex',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(190)(KEY);

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(196)('Array');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    dP = __webpack_require__(15),
	    DESCRIPTORS = __webpack_require__(10),
	    SPECIES = __webpack_require__(29)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(190),
	    step = __webpack_require__(198),
	    Iterators = __webpack_require__(133),
	    toIObject = __webpack_require__(36);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(132)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 198 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    inheritIfRequired = __webpack_require__(92),
	    dP = __webpack_require__(15).f,
	    gOPN = __webpack_require__(54).f,
	    isRegExp = __webpack_require__(138),
	    $flags = __webpack_require__(200),
	    $RegExp = global.RegExp,
	    Base = $RegExp,
	    proto = $RegExp.prototype,
	    re1 = /a/g,
	    re2 = /a/g
	// "new" creates a new object, old webkit buggy here
	,
	    CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if (__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function () {
	  re2[__webpack_require__(29)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp,
	        piRE = isRegExp(p),
	        fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function proxy(key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function get() {
	        return Base[key];
	      },
	      set: function set(it) {
	        Base[key] = it;
	      }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
	    proxy(keys[i++]);
	  }proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(22)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(196)('RegExp');

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	
	var anObject = __webpack_require__(16);
	module.exports = function () {
	  var that = anObject(this),
	      result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(202);
	var anObject = __webpack_require__(16),
	    $flags = __webpack_require__(200),
	    DESCRIPTORS = __webpack_require__(10),
	    TO_STRING = 'toString',
	    $toString = /./[TO_STRING];
	
	var define = function define(fn) {
	  __webpack_require__(22)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(11)(function () {
	  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
	})) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	  // FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(10) && /./g.flags != 'g') __webpack_require__(15).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(200)
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@match logic
	__webpack_require__(204)('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';
	
	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(14),
	    redefine = __webpack_require__(22),
	    fails = __webpack_require__(11),
	    defined = __webpack_require__(39),
	    wks = __webpack_require__(29);
	
	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY),
	      fns = exec(defined, SYMBOL, ''[KEY]),
	      strfn = fns[0],
	      rxfn = fns[1];
	  if (fails(function () {
	    var O = {};
	    O[SYMBOL] = function () {
	      return 7;
	    };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	    ? function (string, arg) {
	      return rxfn.call(string, this, arg);
	    }
	    // 21.2.5.6 RegExp.prototype[@@match](string)
	    // 21.2.5.9 RegExp.prototype[@@search](string)
	    : function (string) {
	      return rxfn.call(string, this);
	    });
	  }
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@replace logic
	__webpack_require__(204)('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';
	
	    var O = defined(this),
	        fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@search logic
	__webpack_require__(204)('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';
	
	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@split logic
	__webpack_require__(204)('split', 2, function (defined, SPLIT, $split) {
	  'use strict';
	
	  var isRegExp = __webpack_require__(138),
	      _split = $split,
	      $push = [].push,
	      $SPLIT = 'split',
	      LENGTH = 'length',
	      LAST_INDEX = 'lastIndex';
	  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function $split(separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) {
	              if (arguments[i] === undefined) match[i] = undefined;
	            }
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	    // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function $split(separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this),
	        fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(32),
	    global = __webpack_require__(8),
	    ctx = __webpack_require__(24),
	    classof = __webpack_require__(79),
	    $export = __webpack_require__(12),
	    isObject = __webpack_require__(17),
	    aFunction = __webpack_require__(25),
	    anInstance = __webpack_require__(209),
	    forOf = __webpack_require__(210),
	    speciesConstructor = __webpack_require__(211),
	    task = __webpack_require__(212).set,
	    microtask = __webpack_require__(213)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(29)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(214)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(28)($Promise, PROMISE);
	__webpack_require__(196)(PROMISE);
	Wrapper = __webpack_require__(13)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(169)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 209 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(24),
	    call = __webpack_require__(165),
	    isArrayIter = __webpack_require__(166),
	    anObject = __webpack_require__(16),
	    toLength = __webpack_require__(41),
	    getIterFn = __webpack_require__(168),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(16),
	    aFunction = __webpack_require__(25),
	    SPECIES = __webpack_require__(29)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(24),
	    invoke = __webpack_require__(82),
	    html = __webpack_require__(52),
	    cel = __webpack_require__(19),
	    global = __webpack_require__(8),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(38)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    macrotask = __webpack_require__(212).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(38)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(22);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var strong = __webpack_require__(216);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(217)('Map', function (get) {
	  return function Map() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(15).f,
	    create = __webpack_require__(50),
	    redefineAll = __webpack_require__(214),
	    ctx = __webpack_require__(24),
	    anInstance = __webpack_require__(209),
	    defined = __webpack_require__(39),
	    forOf = __webpack_require__(210),
	    $iterDefine = __webpack_require__(132),
	    step = __webpack_require__(198),
	    setSpecies = __webpack_require__(196),
	    DESCRIPTORS = __webpack_require__(10),
	    fastKey = __webpack_require__(26).fastKey,
	    SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function getEntry(that, key) {
	  // fast case
	  var index = fastKey(key),
	      entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined; // first entry
	      that._l = undefined; // last entry
	      that[SIZE] = 0; // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function _delete(key) {
	        var that = this,
	            entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n,
	              prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        }return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */) {
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
	            entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) {
	            entry = entry.p;
	          }
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function get() {
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var entry = getEntry(that, key),
	        prev,
	        index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	      // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key, // <- key
	        v: value, // <- value
	        p: prev = that._l, // <- previous entry
	        n: undefined, // <- next entry
	        r: false // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    }return that;
	  },
	  getEntry: getEntry,
	  setStrong: function setStrong(C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = iterated; // target
	      this._k = kind; // kind
	      this._l = undefined; // previous
	    }, function () {
	      var that = this,
	          kind = that._k,
	          entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) {
	        entry = entry.p;
	      } // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    $export = __webpack_require__(12),
	    redefine = __webpack_require__(22),
	    redefineAll = __webpack_require__(214),
	    meta = __webpack_require__(26),
	    forOf = __webpack_require__(210),
	    anInstance = __webpack_require__(209),
	    isObject = __webpack_require__(17),
	    fails = __webpack_require__(11),
	    $iterDetect = __webpack_require__(169),
	    setToStringTag = __webpack_require__(28),
	    inheritIfRequired = __webpack_require__(92);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME],
	      C = Base,
	      ADDER = IS_MAP ? 'set' : 'add',
	      proto = C && C.prototype,
	      O = {};
	  var fixMethod = function fixMethod(KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY, KEY == 'delete' ? function (a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'has' ? function has(a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'get' ? function get(a) {
	      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'add' ? function add(a) {
	      fn.call(this, a === 0 ? 0 : a);return this;
	    } : function set(a, b) {
	      fn.call(this, a === 0 ? 0 : a, b);return this;
	    });
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C()
	    // early implementations not supports chaining
	    ,
	        HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    ,
	        THROWS_ON_PRIMITIVES = fails(function () {
	      instance.has(1);
	    })
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    ,
	        ACCEPT_ITERABLES = $iterDetect(function (iter) {
	      new C(iter);
	    }) // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    ,
	        BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C(),
	          index = 5;
	      while (index--) {
	        $instance[ADDER](index, index);
	      }return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var strong = __webpack_require__(216);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(217)('Set', function (get) {
	  return function Set() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(176)(0),
	    redefine = __webpack_require__(22),
	    meta = __webpack_require__(26),
	    assign = __webpack_require__(73),
	    weak = __webpack_require__(220),
	    isObject = __webpack_require__(17),
	    getWeak = meta.getWeak,
	    isExtensible = Object.isExtensible,
	    uncaughtFrozenStore = weak.ufstore,
	    tmp = {},
	    InternalMap;
	
	var wrapper = function wrapper(get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(217)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype,
	        method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	      }return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefineAll = __webpack_require__(214),
	    getWeak = __webpack_require__(26).getWeak,
	    anObject = __webpack_require__(16),
	    isObject = __webpack_require__(17),
	    anInstance = __webpack_require__(209),
	    forOf = __webpack_require__(210),
	    createArrayMethod = __webpack_require__(176),
	    $has = __webpack_require__(9),
	    arrayFind = createArrayMethod(5),
	    arrayFindIndex = createArrayMethod(6),
	    id = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function UncaughtFrozenStore() {
	  this.a = [];
	};
	var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function get(key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function has(key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function set(key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;else this.a.push([key, value]);
	  },
	  'delete': function _delete(key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = id++; // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function _delete(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var weak = __webpack_require__(220);
	
	// 23.4 WeakSet Objects
	__webpack_require__(217)('WeakSet', function (get) {
	  return function WeakSet() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $typed = __webpack_require__(223),
	    buffer = __webpack_require__(224),
	    anObject = __webpack_require__(16),
	    toIndex = __webpack_require__(43),
	    toLength = __webpack_require__(41),
	    isObject = __webpack_require__(17),
	    ArrayBuffer = __webpack_require__(8).ArrayBuffer,
	    speciesConstructor = __webpack_require__(211),
	    $ArrayBuffer = buffer.ArrayBuffer,
	    $DataView = buffer.DataView,
	    $isView = $typed.ABV && ArrayBuffer.isView,
	    $slice = $ArrayBuffer.prototype.slice,
	    VIEW = $typed.VIEW,
	    ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(11)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength,
	        first = toIndex(start, len),
	        final = toIndex(end === undefined ? len : end, len),
	        result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
	        viewS = new $DataView(this),
	        viewT = new $DataView(result),
	        index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    }return result;
	  }
	});
	
	__webpack_require__(196)(ARRAY_BUFFER);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    hide = __webpack_require__(14),
	    uid = __webpack_require__(23),
	    TYPED = uid('typed_array'),
	    VIEW = uid('view'),
	    ABV = !!(global.ArrayBuffer && global.DataView),
	    CONSTR = ABV,
	    i = 0,
	    l = 9,
	    Typed;
	
	var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');
	
	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(8),
	    DESCRIPTORS = __webpack_require__(10),
	    LIBRARY = __webpack_require__(32),
	    $typed = __webpack_require__(223),
	    hide = __webpack_require__(14),
	    redefineAll = __webpack_require__(214),
	    fails = __webpack_require__(11),
	    anInstance = __webpack_require__(209),
	    toInteger = __webpack_require__(42),
	    toLength = __webpack_require__(41),
	    gOPN = __webpack_require__(54).f,
	    dP = __webpack_require__(15).f,
	    arrayFill = __webpack_require__(192),
	    setToStringTag = __webpack_require__(28),
	    ARRAY_BUFFER = 'ArrayBuffer',
	    DATA_VIEW = 'DataView',
	    PROTOTYPE = 'prototype',
	    WRONG_LENGTH = 'Wrong length!',
	    WRONG_INDEX = 'Wrong index!',
	    $ArrayBuffer = global[ARRAY_BUFFER],
	    $DataView = global[DATA_VIEW],
	    Math = global.Math,
	    RangeError = global.RangeError,
	    Infinity = global.Infinity,
	    BaseBuffer = $ArrayBuffer,
	    abs = Math.abs,
	    pow = Math.pow,
	    floor = Math.floor,
	    log = Math.log,
	    LN2 = Math.LN2,
	    BUFFER = 'buffer',
	    BYTE_LENGTH = 'byteLength',
	    BYTE_OFFSET = 'byteOffset',
	    $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
	    $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
	    $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function packIEEE754(value, mLen, nBytes) {
	  var buffer = Array(nBytes),
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
	      i = 0,
	      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
	      e,
	      m,
	      c;
	  value = abs(value);
	  if (value != value || value === Infinity) {
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = eLen - 7,
	      i = nBytes - 1,
	      s = buffer[i--],
	      e = s & 127,
	      m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  }return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function packI8(it) {
	  return [it & 0xff];
	};
	var packI16 = function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function packF64(it) {
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function packF32(it) {
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function get() {
	      return this[internal];
	    } });
	};
	
	var get = function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) {
	    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	  }
	};
	
	var validateArrayBufferArguments = function validateArrayBufferArguments(that, length) {
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length,
	      byteLength = toLength(numberLength);
	  if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH],
	        offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	  }) || !fails(function () {
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2)),
	      $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12);
	$export($export.G + $export.W + $export.F * !__webpack_require__(223).ABV, {
	  DataView: __webpack_require__(224).DataView
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(227)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	if (__webpack_require__(10)) {
	  var LIBRARY = __webpack_require__(32),
	      global = __webpack_require__(8),
	      fails = __webpack_require__(11),
	      $export = __webpack_require__(12),
	      $typed = __webpack_require__(223),
	      $buffer = __webpack_require__(224),
	      ctx = __webpack_require__(24),
	      anInstance = __webpack_require__(209),
	      propertyDesc = __webpack_require__(21),
	      hide = __webpack_require__(14),
	      redefineAll = __webpack_require__(214),
	      toInteger = __webpack_require__(42),
	      toLength = __webpack_require__(41),
	      toIndex = __webpack_require__(43),
	      toPrimitive = __webpack_require__(20),
	      has = __webpack_require__(9),
	      same = __webpack_require__(75),
	      classof = __webpack_require__(79),
	      isObject = __webpack_require__(17),
	      toObject = __webpack_require__(62),
	      isArrayIter = __webpack_require__(166),
	      create = __webpack_require__(50),
	      getPrototypeOf = __webpack_require__(63),
	      gOPN = __webpack_require__(54).f,
	      getIterFn = __webpack_require__(168),
	      uid = __webpack_require__(23),
	      wks = __webpack_require__(29),
	      createArrayMethod = __webpack_require__(176),
	      createArrayIncludes = __webpack_require__(40),
	      speciesConstructor = __webpack_require__(211),
	      ArrayIterators = __webpack_require__(197),
	      Iterators = __webpack_require__(133),
	      $iterDetect = __webpack_require__(169),
	      setSpecies = __webpack_require__(196),
	      arrayFill = __webpack_require__(192),
	      arrayCopyWithin = __webpack_require__(189),
	      $DP = __webpack_require__(15),
	      $GOPD = __webpack_require__(55),
	      dP = $DP.f,
	      gOPD = $GOPD.f,
	      RangeError = global.RangeError,
	      TypeError = global.TypeError,
	      Uint8Array = global.Uint8Array,
	      ARRAY_BUFFER = 'ArrayBuffer',
	      SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
	      BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
	      PROTOTYPE = 'prototype',
	      ArrayProto = Array[PROTOTYPE],
	      $ArrayBuffer = $buffer.ArrayBuffer,
	      $DataView = $buffer.DataView,
	      arrayForEach = createArrayMethod(0),
	      arrayFilter = createArrayMethod(2),
	      arraySome = createArrayMethod(3),
	      arrayEvery = createArrayMethod(4),
	      arrayFind = createArrayMethod(5),
	      arrayFindIndex = createArrayMethod(6),
	      arrayIncludes = createArrayIncludes(true),
	      arrayIndexOf = createArrayIncludes(false),
	      arrayValues = ArrayIterators.values,
	      arrayKeys = ArrayIterators.keys,
	      arrayEntries = ArrayIterators.entries,
	      arrayLastIndexOf = ArrayProto.lastIndexOf,
	      arrayReduce = ArrayProto.reduce,
	      arrayReduceRight = ArrayProto.reduceRight,
	      arrayJoin = ArrayProto.join,
	      arraySort = ArrayProto.sort,
	      arraySlice = ArrayProto.slice,
	      arrayToString = ArrayProto.toString,
	      arrayToLocaleString = ArrayProto.toLocaleString,
	      ITERATOR = wks('iterator'),
	      TAG = wks('toStringTag'),
	      TYPED_CONSTRUCTOR = uid('typed_constructor'),
	      DEF_CONSTRUCTOR = uid('def_constructor'),
	      ALL_CONSTRUCTORS = $typed.CONSTR,
	      TYPED_ARRAY = $typed.TYPED,
	      VIEW = $typed.VIEW,
	      WRONG_LENGTH = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function () {
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function strictToLength(it, SAME) {
	    if (it === undefined) throw TypeError(WRONG_LENGTH);
	    var number = +it,
	        length = toLength(it);
	    if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function toOffset(it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function validate(it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function allocate(C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    }return new C(length);
	  };
	
	  var speciesFromList = function speciesFromList(O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function fromList(C, list) {
	    var index = 0,
	        length = list.length,
	        result = allocate(C, length);
	    while (length > index) {
	      result[index] = list[index++];
	    }return result;
	  };
	
	  var addGetter = function addGetter(it, key, internal) {
	    dP(it, key, { get: function get() {
	        return this._d[internal];
	      } });
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */) {
	    var O = toObject(source),
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        iterFn = getIterFn(O),
	        i,
	        length,
	        values,
	        result,
	        step,
	        iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      }O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of() /*...items*/{
	    var index = 0,
	        length = arguments.length,
	        result = allocate(this, length);
	    while (length > index) {
	      result[index] = arguments[index++];
	    }return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
	    arrayToLocaleString.call(new Uint8Array(1));
	  });
	
	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */) {
	      // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) {
	      // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
	      // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this,
	          length = validate(that).length,
	          middle = Math.floor(length / 2),
	          index = 0,
	          value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      }return that;
	    },
	    some: function some(callbackfn /*, thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this),
	          length = O.length,
	          $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
	    }
	  };
	
	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1),
	        length = this.length,
	        src = toObject(arrayLike),
	        len = toLength(src.length),
	        index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) {
	      this[offset + index] = src[index++];
	    }
	  };
	
	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function isTAIndex(target, key) {
	    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
	    // TODO: add validation descriptor w/o calling accessors
	    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });
	
	  if (fails(function () {
	    arrayToString.call({});
	  })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function constructor() {/* noop */},
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function get() {
	      return this[TYPED_ARRAY];
	    }
	  });
	
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
	        ISNT_UINT8 = NAME != 'Uint8Array',
	        GETTER = 'get' + KEY,
	        SETTER = 'set' + KEY,
	        TypedArray = global[NAME],
	        Base = TypedArray || {},
	        TAC = TypedArray && getPrototypeOf(TypedArray),
	        FORCED = !TypedArray || !$typed.ABV,
	        O = {},
	        TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function getter(that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function setter(that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function addElement(that, index) {
	      dP(that, index, {
	        get: function get() {
	          return getter(this, index);
	        },
	        set: function set(value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0,
	            offset = 0,
	            buffer,
	            byteLength,
	            length,
	            klass;
	        if (!isObject(data)) {
	          length = strictToLength(data, true);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) {
	          addElement(that, index++);
	        }
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!$iterDetect(function (iter) {
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR],
	        CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
	        $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function get() {
	          return NAME;
	        }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });
	
	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });
	
	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () {/* empty */};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(227)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(227)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(227)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(227)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(227)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(227)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(227)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(227)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(12),
	    aFunction = __webpack_require__(25),
	    anObject = __webpack_require__(16),
	    rApply = (__webpack_require__(8).Reflect || {}).apply,
	    fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(11)(function () {
	  rApply(function () {});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target),
	        L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(12),
	    create = __webpack_require__(50),
	    aFunction = __webpack_require__(25),
	    anObject = __webpack_require__(16),
	    isObject = __webpack_require__(17),
	    fails = __webpack_require__(11),
	    bind = __webpack_require__(81),
	    rConstruct = (__webpack_require__(8).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() {}
	  return !(rConstruct(function () {}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () {});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0:
	          return new Target();
	        case 1:
	          return new Target(args[0]);
	        case 2:
	          return new Target(args[0], args[1]);
	        case 3:
	          return new Target(args[0], args[1], args[2]);
	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype,
	        instance = create(isObject(proto) ? proto : Object.prototype),
	        result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(15),
	    $export = __webpack_require__(12),
	    anObject = __webpack_require__(16),
	    toPrimitive = __webpack_require__(20);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function () {
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(12),
	    gOPD = __webpack_require__(55).f,
	    anObject = __webpack_require__(16);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	
	var $export = __webpack_require__(12),
	    anObject = __webpack_require__(16);
	var Enumerate = function Enumerate(iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0; // next index
	  var keys = this._k = [] // keys
	  ,
	      key;
	  for (key in iterated) {
	    keys.push(key);
	  }
	};
	__webpack_require__(134)(Enumerate, 'Object', function () {
	  var that = this,
	      keys = that._k,
	      key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(55),
	    getPrototypeOf = __webpack_require__(63),
	    has = __webpack_require__(9),
	    $export = __webpack_require__(12),
	    isObject = __webpack_require__(17),
	    anObject = __webpack_require__(16);
	
	function get(target, propertyKey /*, receiver*/) {
	  var receiver = arguments.length < 3 ? target : arguments[2],
	      desc,
	      proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', { get: get });

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(55),
	    $export = __webpack_require__(12),
	    anObject = __webpack_require__(16);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(12),
	    getProto = __webpack_require__(63),
	    anObject = __webpack_require__(16);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(12),
	    anObject = __webpack_require__(16),
	    $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(247) });

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(54),
	    gOPS = __webpack_require__(47),
	    anObject = __webpack_require__(16),
	    Reflect = __webpack_require__(8).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it)),
	      getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(12),
	    anObject = __webpack_require__(16),
	    $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(15),
	    gOPD = __webpack_require__(55),
	    getPrototypeOf = __webpack_require__(63),
	    has = __webpack_require__(9),
	    $export = __webpack_require__(12),
	    createDesc = __webpack_require__(21),
	    anObject = __webpack_require__(16),
	    isObject = __webpack_require__(17);
	
	function set(target, propertyKey, V /*, receiver*/) {
	  var receiver = arguments.length < 4 ? target : arguments[3],
	      ownDesc = gOPD.f(anObject(target), propertyKey),
	      existingDescriptor,
	      proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', { set: set });

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(12),
	    setProto = __webpack_require__(77);
	
	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	
	var $export = __webpack_require__(12),
	    $includes = __webpack_require__(40)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(190)('includes');

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	
	var $export = __webpack_require__(12),
	    $at = __webpack_require__(131)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	
	var $export = __webpack_require__(12),
	    $pad = __webpack_require__(254);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(41),
	    repeat = __webpack_require__(95),
	    defined = __webpack_require__(39);
	
	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that)),
	      stringLength = S.length,
	      fillStr = fillString === undefined ? ' ' : String(fillString),
	      intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength,
	      stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	
	var $export = __webpack_require__(12),
	    $pad = __webpack_require__(254);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	
	__webpack_require__(87)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	
	__webpack_require__(87)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	
	var $export = __webpack_require__(12),
	    defined = __webpack_require__(39),
	    toLength = __webpack_require__(41),
	    isRegExp = __webpack_require__(138),
	    getFlags = __webpack_require__(200),
	    RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(134)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this),
	        flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
	        rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(31)('asyncIterator');

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(31)('observable');

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(12),
	    ownKeys = __webpack_require__(247),
	    toIObject = __webpack_require__(36),
	    gOPD = __webpack_require__(55),
	    createProperty = __webpack_require__(167);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object),
	        getDesc = gOPD.f,
	        keys = ownKeys(O),
	        result = {},
	        i = 0,
	        key;
	    while (keys.length > i) {
	      createProperty(result, key = keys[i++], getDesc(O, key));
	    }return result;
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(12),
	    $values = __webpack_require__(263)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(34),
	    toIObject = __webpack_require__(36),
	    isEnum = __webpack_require__(48).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it),
	        keys = getKeys(O),
	        length = keys.length,
	        i = 0,
	        result = [],
	        key;
	    while (length > i) {
	      if (isEnum.call(O, key = keys[i++])) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }return result;
	  };
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(12),
	    $entries = __webpack_require__(263)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    toObject = __webpack_require__(62),
	    aFunction = __webpack_require__(25),
	    $defineProperty = __webpack_require__(15);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(32) || !__webpack_require__(11)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function () {/* empty */});
	  delete __webpack_require__(8)[K];
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    toObject = __webpack_require__(62),
	    aFunction = __webpack_require__(25),
	    $defineProperty = __webpack_require__(15);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    toObject = __webpack_require__(62),
	    toPrimitive = __webpack_require__(20),
	    getPrototypeOf = __webpack_require__(63),
	    getOwnPropertyDescriptor = __webpack_require__(55).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    toObject = __webpack_require__(62),
	    toPrimitive = __webpack_require__(20),
	    getPrototypeOf = __webpack_require__(63),
	    getOwnPropertyDescriptor = __webpack_require__(55).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(12);
	
	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(271)('Map') });

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(79),
	    from = __webpack_require__(272);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var forOf = __webpack_require__(210);
	
	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(12);
	
	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(271)('Set') });

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(12);
	
	$export($export.S, 'System', { global: __webpack_require__(8) });

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(12),
	    cof = __webpack_require__(38);
	
	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >> 16,
	        v1 = $v >> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >>> 16,
	        v1 = $v >>> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(281),
	    anObject = __webpack_require__(16),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	  } });

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var Map = __webpack_require__(215),
	    $export = __webpack_require__(12),
	    shared = __webpack_require__(27)('metadata'),
	    store = shared.store || (shared.store = new (__webpack_require__(219))());
	
	var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  }return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
	      keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) {
	    keys.push(key);
	  });
	  return keys;
	};
	var toMetaKey = function toMetaKey(it) {
	  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
	};
	var exp = function exp(O) {
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(281),
	    anObject = __webpack_require__(16),
	    toMetaKey = metadata.key,
	    getOrCreateMetadataMap = metadata.map,
	    store = metadata.store;
	
	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
	        metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	    if (metadataMap.size) return true;
	    var targetMetadata = store.get(target);
	    targetMetadata['delete'](targetKey);
	    return !!targetMetadata.size || store['delete'](target);
	  } });

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(281),
	    anObject = __webpack_require__(16),
	    getPrototypeOf = __webpack_require__(63),
	    ordinaryHasOwnMetadata = metadata.has,
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;
	
	var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Set = __webpack_require__(218),
	    from = __webpack_require__(272),
	    metadata = __webpack_require__(281),
	    anObject = __webpack_require__(16),
	    getPrototypeOf = __webpack_require__(63),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;
	
	var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P),
	      parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /*, targetKey */) {
	    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(281),
	    anObject = __webpack_require__(16),
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(281),
	    anObject = __webpack_require__(16),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */) {
	    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(281),
	    anObject = __webpack_require__(16),
	    getPrototypeOf = __webpack_require__(63),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;
	
	var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(281),
	    anObject = __webpack_require__(16),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;
	
	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(281),
	    anObject = __webpack_require__(16),
	    aFunction = __webpack_require__(25),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	    return function decorator(target, targetKey) {
	      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
	    };
	  } });

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(12),
	    microtask = __webpack_require__(213)(),
	    process = __webpack_require__(8).process,
	    isNode = __webpack_require__(38)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	
	var $export = __webpack_require__(12),
	    global = __webpack_require__(8),
	    core = __webpack_require__(13),
	    microtask = __webpack_require__(213)(),
	    OBSERVABLE = __webpack_require__(29)('observable'),
	    aFunction = __webpack_require__(25),
	    anObject = __webpack_require__(16),
	    anInstance = __webpack_require__(209),
	    redefineAll = __webpack_require__(214),
	    hide = __webpack_require__(14),
	    forOf = __webpack_require__(210),
	    RETURN = forOf.RETURN;
	
	var getMethod = function getMethod(fn) {
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function cleanupSubscription(subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function subscriptionClosed(subscription) {
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function closeSubscription(subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function Subscription(observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer),
	        subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
	        subscription.unsubscribe();
	      };else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  }if (subscriptionClosed(this)) cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() {
	    closeSubscription(this);
	  }
	});
	
	var SubscriptionObserver = function SubscriptionObserver(subscription) {
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    }cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function next(value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
	      items[i] = arguments[i++];
	    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var i = 0; i < items.length; ++i) {
	            observer.next(items[i]);
	            if (done) return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function () {
	  return this;
	});
	
	$export($export.G, { Observable: $Observable });
	
	__webpack_require__(196)('Observable');

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(8),
	    $export = __webpack_require__(12),
	    invoke = __webpack_require__(82),
	    partial = __webpack_require__(293),
	    navigator = global.navigator,
	    MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function wrap(set) {
	  return MSIE ? function (fn, time /*, ...args */) {
	    return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(294),
	    invoke = __webpack_require__(82),
	    aFunction = __webpack_require__(25);
	module.exports = function () /* ...pargs */{
	  var fn = aFunction(this),
	      length = arguments.length,
	      pargs = Array(length),
	      i = 0,
	      _ = path._,
	      holder = false;
	  while (length > i) {
	    if ((pargs[i] = arguments[i++]) === _) holder = true;
	  }return function () /* ...args */{
	    var that = this,
	        aLen = arguments.length,
	        j = 0,
	        k = 0,
	        args;
	    if (!holder && !aLen) return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if (holder) for (; length > j; j++) {
	      if (args[j] === _) args[j] = arguments[k++];
	    }while (aLen > k) {
	      args.push(arguments[k++]);
	    }return invoke(fn, args, that);
	  };
	};

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(8);

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(12),
	    $task = __webpack_require__(212);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(197),
	    redefine = __webpack_require__(22),
	    global = __webpack_require__(8),
	    hide = __webpack_require__(14),
	    Iterators = __webpack_require__(133),
	    wks = __webpack_require__(29),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, process) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!function (global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(298)(module), __webpack_require__(299)))

/***/ },
/* 298 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 299 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    } else {
	        return cachedSetTimeout.call(null, fun, 0);
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        clearTimeout(marker);
	    } else {
	        cachedClearTimeout.call(null, marker);
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(301);
	module.exports = __webpack_require__(13).RegExp.escape;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(12),
	    $re = __webpack_require__(302)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', { escape: function escape(it) {
	    return $re(it);
	  } });

/***/ },
/* 302 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Newbie = undefined;
	
	var _knockout = __webpack_require__(304);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _person = __webpack_require__(306);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Newbie = exports.Newbie = function (_Person) {
	  _inherits(Newbie, _Person);
	
	  function Newbie(name, age) {
	    _classCallCheck(this, Newbie);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Newbie).call(this));
	
	    _this.name = ko.observable(name);
	    _this.age = ko.observable(age);
	    _this.randomNumber = Math.random();
	    return _this;
	  }
	
	  return Newbie;
	}(_person.Person);

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/*!
	 * Knockout JavaScript library v3.4.0
	 * (c) Steven Sanderson - http://knockoutjs.com/
	 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
	 */(function(){var DEBUG=true;(function(undefined){// (0, eval)('this') is a robust way of getting a reference to the global object
	// For details, see http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023
	var window=this||(0,eval)('this'),document=window['document'],navigator=window['navigator'],jQueryInstance=window["jQuery"],JSON=window["JSON"];(function(factory){// Support three module loading scenarios
	if("function"==='function'&&__webpack_require__(305)['amd']){// [1] AMD anonymous module
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(( false?'undefined':_typeof(exports))==='object'&&( false?'undefined':_typeof(module))==='object'){// [2] CommonJS/Node.js
	factory(module['exports']||exports);// module.exports is for Node.js
	}else{// [3] No module loader (plain <script> tag) - put directly in global namespace
	factory(window['ko']={});}})(function(koExports,amdRequire){// Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
	// In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
	var ko=typeof koExports!=='undefined'?koExports:{};// Google Closure Compiler helpers (used only to make the minified file smaller)
	ko.exportSymbol=function(koPath,object){var tokens=koPath.split(".");// In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
	// At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
	var target=ko;for(var i=0;i<tokens.length-1;i++){target=target[tokens[i]];}target[tokens[tokens.length-1]]=object;};ko.exportProperty=function(owner,publicName,object){owner[publicName]=object;};ko.version="3.4.0";ko.exportSymbol('version',ko.version);// For any options that may affect various areas of Knockout and aren't directly associated with data binding.
	ko.options={'deferUpdates':false,'useOnlyNativeEvents':false};//ko.exportSymbol('options', ko.options);   // 'options' isn't minified
	ko.utils=function(){function objectForEach(obj,action){for(var prop in obj){if(obj.hasOwnProperty(prop)){action(prop,obj[prop]);}}}function extend(target,source){if(source){for(var prop in source){if(source.hasOwnProperty(prop)){target[prop]=source[prop];}}}return target;}function setPrototypeOf(obj,proto){obj.__proto__=proto;return obj;}var canSetPrototype={__proto__:[]}instanceof Array;var canUseSymbols=!DEBUG&&typeof Symbol==='function';// Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)
	var knownEvents={},knownEventTypesByEventName={};var keyEventTypeName=navigator&&/Firefox\/2/i.test(navigator.userAgent)?'KeyboardEvent':'UIEvents';knownEvents[keyEventTypeName]=['keyup','keydown','keypress'];knownEvents['MouseEvents']=['click','dblclick','mousedown','mouseup','mousemove','mouseover','mouseout','mouseenter','mouseleave'];objectForEach(knownEvents,function(eventType,knownEventsForType){if(knownEventsForType.length){for(var i=0,j=knownEventsForType.length;i<j;i++){knownEventTypesByEventName[knownEventsForType[i]]=eventType;}}});var eventsThatMustBeRegisteredUsingAttachEvent={'propertychange':true};// Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406
	// Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
	// Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
	// Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
	// If there is a future need to detect specific versions of IE10+, we will amend this.
	var ieVersion=document&&function(){var version=3,div=document.createElement('div'),iElems=div.getElementsByTagName('i');// Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
	while(div.innerHTML='<!--[if gt IE '+ ++version+']><i></i><![endif]-->',iElems[0]){}return version>4?version:undefined;}();var isIe6=ieVersion===6,isIe7=ieVersion===7;function isClickOnCheckableElement(element,eventType){if(ko.utils.tagNameLower(element)!=="input"||!element.type)return false;if(eventType.toLowerCase()!="click")return false;var inputType=element.type;return inputType=="checkbox"||inputType=="radio";}// For details on the pattern for changing node classes
	// see: https://github.com/knockout/knockout/issues/1597
	var cssClassNameRegex=/\S+/g;function toggleDomNodeCssClass(node,classNames,shouldHaveClass){var addOrRemoveFn;if(classNames){if(_typeof(node.classList)==='object'){addOrRemoveFn=node.classList[shouldHaveClass?'add':'remove'];ko.utils.arrayForEach(classNames.match(cssClassNameRegex),function(className){addOrRemoveFn.call(node.classList,className);});}else if(typeof node.className['baseVal']==='string'){// SVG tag .classNames is an SVGAnimatedString instance
	toggleObjectClassPropertyString(node.className,'baseVal',classNames,shouldHaveClass);}else{// node.className ought to be a string.
	toggleObjectClassPropertyString(node,'className',classNames,shouldHaveClass);}}}function toggleObjectClassPropertyString(obj,prop,classNames,shouldHaveClass){// obj/prop is either a node/'className' or a SVGAnimatedString/'baseVal'.
	var currentClassNames=obj[prop].match(cssClassNameRegex)||[];ko.utils.arrayForEach(classNames.match(cssClassNameRegex),function(className){ko.utils.addOrRemoveItem(currentClassNames,className,shouldHaveClass);});obj[prop]=currentClassNames.join(" ");}return{fieldsIncludedWithJsonPost:['authenticity_token',/^__RequestVerificationToken(_.*)?$/],arrayForEach:function arrayForEach(array,action){for(var i=0,j=array.length;i<j;i++){action(array[i],i);}},arrayIndexOf:function arrayIndexOf(array,item){if(typeof Array.prototype.indexOf=="function")return Array.prototype.indexOf.call(array,item);for(var i=0,j=array.length;i<j;i++){if(array[i]===item)return i;}return-1;},arrayFirst:function arrayFirst(array,predicate,predicateOwner){for(var i=0,j=array.length;i<j;i++){if(predicate.call(predicateOwner,array[i],i))return array[i];}return null;},arrayRemoveItem:function arrayRemoveItem(array,itemToRemove){var index=ko.utils.arrayIndexOf(array,itemToRemove);if(index>0){array.splice(index,1);}else if(index===0){array.shift();}},arrayGetDistinctValues:function arrayGetDistinctValues(array){array=array||[];var result=[];for(var i=0,j=array.length;i<j;i++){if(ko.utils.arrayIndexOf(result,array[i])<0)result.push(array[i]);}return result;},arrayMap:function arrayMap(array,mapping){array=array||[];var result=[];for(var i=0,j=array.length;i<j;i++){result.push(mapping(array[i],i));}return result;},arrayFilter:function arrayFilter(array,predicate){array=array||[];var result=[];for(var i=0,j=array.length;i<j;i++){if(predicate(array[i],i))result.push(array[i]);}return result;},arrayPushAll:function arrayPushAll(array,valuesToPush){if(valuesToPush instanceof Array)array.push.apply(array,valuesToPush);else for(var i=0,j=valuesToPush.length;i<j;i++){array.push(valuesToPush[i]);}return array;},addOrRemoveItem:function addOrRemoveItem(array,value,included){var existingEntryIndex=ko.utils.arrayIndexOf(ko.utils.peekObservable(array),value);if(existingEntryIndex<0){if(included)array.push(value);}else{if(!included)array.splice(existingEntryIndex,1);}},canSetPrototype:canSetPrototype,extend:extend,setPrototypeOf:setPrototypeOf,setPrototypeOfOrExtend:canSetPrototype?setPrototypeOf:extend,objectForEach:objectForEach,objectMap:function objectMap(source,mapping){if(!source)return source;var target={};for(var prop in source){if(source.hasOwnProperty(prop)){target[prop]=mapping(source[prop],prop,source);}}return target;},emptyDomNode:function emptyDomNode(domNode){while(domNode.firstChild){ko.removeNode(domNode.firstChild);}},moveCleanedNodesToContainerElement:function moveCleanedNodesToContainerElement(nodes){// Ensure it's a real array, as we're about to reparent the nodes and
	// we don't want the underlying collection to change while we're doing that.
	var nodesArray=ko.utils.makeArray(nodes);var templateDocument=nodesArray[0]&&nodesArray[0].ownerDocument||document;var container=templateDocument.createElement('div');for(var i=0,j=nodesArray.length;i<j;i++){container.appendChild(ko.cleanNode(nodesArray[i]));}return container;},cloneNodes:function cloneNodes(nodesArray,shouldCleanNodes){for(var i=0,j=nodesArray.length,newNodesArray=[];i<j;i++){var clonedNode=nodesArray[i].cloneNode(true);newNodesArray.push(shouldCleanNodes?ko.cleanNode(clonedNode):clonedNode);}return newNodesArray;},setDomNodeChildren:function setDomNodeChildren(domNode,childNodes){ko.utils.emptyDomNode(domNode);if(childNodes){for(var i=0,j=childNodes.length;i<j;i++){domNode.appendChild(childNodes[i]);}}},replaceDomNodes:function replaceDomNodes(nodeToReplaceOrNodeArray,newNodesArray){var nodesToReplaceArray=nodeToReplaceOrNodeArray.nodeType?[nodeToReplaceOrNodeArray]:nodeToReplaceOrNodeArray;if(nodesToReplaceArray.length>0){var insertionPoint=nodesToReplaceArray[0];var parent=insertionPoint.parentNode;for(var i=0,j=newNodesArray.length;i<j;i++){parent.insertBefore(newNodesArray[i],insertionPoint);}for(var i=0,j=nodesToReplaceArray.length;i<j;i++){ko.removeNode(nodesToReplaceArray[i]);}}},fixUpContinuousNodeArray:function fixUpContinuousNodeArray(continuousNodeArray,parentNode){// Before acting on a set of nodes that were previously outputted by a template function, we have to reconcile
	// them against what is in the DOM right now. It may be that some of the nodes have already been removed, or that
	// new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
	// leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
	// So, this function translates the old "map" output array into its best guess of the set of current DOM nodes.
	//
	// Rules:
	//   [A] Any leading nodes that have been removed should be ignored
	//       These most likely correspond to memoization nodes that were already removed during binding
	//       See https://github.com/knockout/knockout/pull/440
	//   [B] Any trailing nodes that have been remove should be ignored
	//       This prevents the code here from adding unrelated nodes to the array while processing rule [C]
	//       See https://github.com/knockout/knockout/pull/1903
	//   [C] We want to output a continuous series of nodes. So, ignore any nodes that have already been removed,
	//       and include any nodes that have been inserted among the previous collection
	if(continuousNodeArray.length){// The parent node can be a virtual element; so get the real parent node
	parentNode=parentNode.nodeType===8&&parentNode.parentNode||parentNode;// Rule [A]
	while(continuousNodeArray.length&&continuousNodeArray[0].parentNode!==parentNode){continuousNodeArray.splice(0,1);}// Rule [B]
	while(continuousNodeArray.length>1&&continuousNodeArray[continuousNodeArray.length-1].parentNode!==parentNode){continuousNodeArray.length--;}// Rule [C]
	if(continuousNodeArray.length>1){var current=continuousNodeArray[0],last=continuousNodeArray[continuousNodeArray.length-1];// Replace with the actual new continuous node set
	continuousNodeArray.length=0;while(current!==last){continuousNodeArray.push(current);current=current.nextSibling;}continuousNodeArray.push(last);}}return continuousNodeArray;},setOptionNodeSelectionState:function setOptionNodeSelectionState(optionNode,isSelected){// IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
	if(ieVersion<7)optionNode.setAttribute("selected",isSelected);else optionNode.selected=isSelected;},stringTrim:function stringTrim(string){return string===null||string===undefined?'':string.trim?string.trim():string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,'');},stringStartsWith:function stringStartsWith(string,startsWith){string=string||"";if(startsWith.length>string.length)return false;return string.substring(0,startsWith.length)===startsWith;},domNodeIsContainedBy:function domNodeIsContainedBy(node,containedByNode){if(node===containedByNode)return true;if(node.nodeType===11)return false;// Fixes issue #1162 - can't use node.contains for document fragments on IE8
	if(containedByNode.contains)return containedByNode.contains(node.nodeType===3?node.parentNode:node);if(containedByNode.compareDocumentPosition)return(containedByNode.compareDocumentPosition(node)&16)==16;while(node&&node!=containedByNode){node=node.parentNode;}return!!node;},domNodeIsAttachedToDocument:function domNodeIsAttachedToDocument(node){return ko.utils.domNodeIsContainedBy(node,node.ownerDocument.documentElement);},anyDomNodeIsAttachedToDocument:function anyDomNodeIsAttachedToDocument(nodes){return!!ko.utils.arrayFirst(nodes,ko.utils.domNodeIsAttachedToDocument);},tagNameLower:function tagNameLower(element){// For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
	// Possible future optimization: If we know it's an element from an XHTML document (not HTML),
	// we don't need to do the .toLowerCase() as it will always be lower case anyway.
	return element&&element.tagName&&element.tagName.toLowerCase();},catchFunctionErrors:function catchFunctionErrors(delegate){return ko['onError']?function(){try{return delegate.apply(this,arguments);}catch(e){ko['onError']&&ko['onError'](e);throw e;}}:delegate;},setTimeout:function(_setTimeout){function setTimeout(_x,_x2){return _setTimeout.apply(this,arguments);}setTimeout.toString=function(){return _setTimeout.toString();};return setTimeout;}(function(handler,timeout){return setTimeout(ko.utils.catchFunctionErrors(handler),timeout);}),deferError:function deferError(error){setTimeout(function(){ko['onError']&&ko['onError'](error);throw error;},0);},registerEventHandler:function registerEventHandler(element,eventType,handler){var wrappedHandler=ko.utils.catchFunctionErrors(handler);var mustUseAttachEvent=ieVersion&&eventsThatMustBeRegisteredUsingAttachEvent[eventType];if(!ko.options['useOnlyNativeEvents']&&!mustUseAttachEvent&&jQueryInstance){jQueryInstance(element)['bind'](eventType,wrappedHandler);}else if(!mustUseAttachEvent&&typeof element.addEventListener=="function")element.addEventListener(eventType,wrappedHandler,false);else if(typeof element.attachEvent!="undefined"){var attachEventHandler=function attachEventHandler(event){wrappedHandler.call(element,event);},attachEventName="on"+eventType;element.attachEvent(attachEventName,attachEventHandler);// IE does not dispose attachEvent handlers automatically (unlike with addEventListener)
	// so to avoid leaks, we have to remove them manually. See bug #856
	ko.utils.domNodeDisposal.addDisposeCallback(element,function(){element.detachEvent(attachEventName,attachEventHandler);});}else throw new Error("Browser doesn't support addEventListener or attachEvent");},triggerEvent:function triggerEvent(element,eventType){if(!(element&&element.nodeType))throw new Error("element must be a DOM node when calling triggerEvent");// For click events on checkboxes and radio buttons, jQuery toggles the element checked state *after* the
	// event handler runs instead of *before*. (This was fixed in 1.9 for checkboxes but not for radio buttons.)
	// IE doesn't change the checked state when you trigger the click event using "fireEvent".
	// In both cases, we'll use the click method instead.
	var useClickWorkaround=isClickOnCheckableElement(element,eventType);if(!ko.options['useOnlyNativeEvents']&&jQueryInstance&&!useClickWorkaround){jQueryInstance(element)['trigger'](eventType);}else if(typeof document.createEvent=="function"){if(typeof element.dispatchEvent=="function"){var eventCategory=knownEventTypesByEventName[eventType]||"HTMLEvents";var event=document.createEvent(eventCategory);event.initEvent(eventType,true,true,window,0,0,0,0,0,false,false,false,false,0,element);element.dispatchEvent(event);}else throw new Error("The supplied element doesn't support dispatchEvent");}else if(useClickWorkaround&&element.click){element.click();}else if(typeof element.fireEvent!="undefined"){element.fireEvent("on"+eventType);}else{throw new Error("Browser doesn't support triggering events");}},unwrapObservable:function unwrapObservable(value){return ko.isObservable(value)?value():value;},peekObservable:function peekObservable(value){return ko.isObservable(value)?value.peek():value;},toggleDomNodeCssClass:toggleDomNodeCssClass,setTextContent:function setTextContent(element,textContent){var value=ko.utils.unwrapObservable(textContent);if(value===null||value===undefined)value="";// We need there to be exactly one child: a text node.
	// If there are no children, more than one, or if it's not a text node,
	// we'll clear everything and create a single text node.
	var innerTextNode=ko.virtualElements.firstChild(element);if(!innerTextNode||innerTextNode.nodeType!=3||ko.virtualElements.nextSibling(innerTextNode)){ko.virtualElements.setDomNodeChildren(element,[element.ownerDocument.createTextNode(value)]);}else{innerTextNode.data=value;}ko.utils.forceRefresh(element);},setElementName:function setElementName(element,name){element.name=name;// Workaround IE 6/7 issue
	// - https://github.com/SteveSanderson/knockout/issues/197
	// - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
	if(ieVersion<=7){try{element.mergeAttributes(document.createElement("<input name='"+element.name+"'/>"),false);}catch(e){}// For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"
	}},forceRefresh:function forceRefresh(node){// Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
	if(ieVersion>=9){// For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
	var elem=node.nodeType==1?node:node.parentNode;if(elem.style)elem.style.zoom=elem.style.zoom;}},ensureSelectElementIsRenderedCorrectly:function ensureSelectElementIsRenderedCorrectly(selectElement){// Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
	// (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
	// Also fixes IE7 and IE8 bug that causes selects to be zero width if enclosed by 'if' or 'with'. (See issue #839)
	if(ieVersion){var originalWidth=selectElement.style.width;selectElement.style.width=0;selectElement.style.width=originalWidth;}},range:function range(min,max){min=ko.utils.unwrapObservable(min);max=ko.utils.unwrapObservable(max);var result=[];for(var i=min;i<=max;i++){result.push(i);}return result;},makeArray:function makeArray(arrayLikeObject){var result=[];for(var i=0,j=arrayLikeObject.length;i<j;i++){result.push(arrayLikeObject[i]);};return result;},createSymbolOrString:function createSymbolOrString(identifier){return canUseSymbols?Symbol(identifier):identifier;},isIe6:isIe6,isIe7:isIe7,ieVersion:ieVersion,getFormFields:function getFormFields(form,fieldName){var fields=ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));var isMatchingField=typeof fieldName=='string'?function(field){return field.name===fieldName;}:function(field){return fieldName.test(field.name);};// Treat fieldName as regex or object containing predicate
	var matches=[];for(var i=fields.length-1;i>=0;i--){if(isMatchingField(fields[i]))matches.push(fields[i]);};return matches;},parseJson:function parseJson(jsonString){if(typeof jsonString=="string"){jsonString=ko.utils.stringTrim(jsonString);if(jsonString){if(JSON&&JSON.parse)// Use native parsing where available
	return JSON.parse(jsonString);return new Function("return "+jsonString)();// Fallback on less safe parsing for older browsers
	}}return null;},stringifyJson:function stringifyJson(data,replacer,space){// replacer and space are optional
	if(!JSON||!JSON.stringify)throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return JSON.stringify(ko.utils.unwrapObservable(data),replacer,space);},postJson:function postJson(urlOrForm,data,options){options=options||{};var params=options['params']||{};var includeFields=options['includeFields']||this.fieldsIncludedWithJsonPost;var url=urlOrForm;// If we were given a form, use its 'action' URL and pick out any requested field values
	if((typeof urlOrForm==='undefined'?'undefined':_typeof(urlOrForm))=='object'&&ko.utils.tagNameLower(urlOrForm)==="form"){var originalForm=urlOrForm;url=originalForm.action;for(var i=includeFields.length-1;i>=0;i--){var fields=ko.utils.getFormFields(originalForm,includeFields[i]);for(var j=fields.length-1;j>=0;j--){params[fields[j].name]=fields[j].value;}}}data=ko.utils.unwrapObservable(data);var form=document.createElement("form");form.style.display="none";form.action=url;form.method="post";for(var key in data){// Since 'data' this is a model object, we include all properties including those inherited from its prototype
	var input=document.createElement("input");input.type="hidden";input.name=key;input.value=ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));form.appendChild(input);}objectForEach(params,function(key,value){var input=document.createElement("input");input.type="hidden";input.name=key;input.value=value;form.appendChild(input);});document.body.appendChild(form);options['submitter']?options['submitter'](form):form.submit();setTimeout(function(){form.parentNode.removeChild(form);},0);}};}();ko.exportSymbol('utils',ko.utils);ko.exportSymbol('utils.arrayForEach',ko.utils.arrayForEach);ko.exportSymbol('utils.arrayFirst',ko.utils.arrayFirst);ko.exportSymbol('utils.arrayFilter',ko.utils.arrayFilter);ko.exportSymbol('utils.arrayGetDistinctValues',ko.utils.arrayGetDistinctValues);ko.exportSymbol('utils.arrayIndexOf',ko.utils.arrayIndexOf);ko.exportSymbol('utils.arrayMap',ko.utils.arrayMap);ko.exportSymbol('utils.arrayPushAll',ko.utils.arrayPushAll);ko.exportSymbol('utils.arrayRemoveItem',ko.utils.arrayRemoveItem);ko.exportSymbol('utils.extend',ko.utils.extend);ko.exportSymbol('utils.fieldsIncludedWithJsonPost',ko.utils.fieldsIncludedWithJsonPost);ko.exportSymbol('utils.getFormFields',ko.utils.getFormFields);ko.exportSymbol('utils.peekObservable',ko.utils.peekObservable);ko.exportSymbol('utils.postJson',ko.utils.postJson);ko.exportSymbol('utils.parseJson',ko.utils.parseJson);ko.exportSymbol('utils.registerEventHandler',ko.utils.registerEventHandler);ko.exportSymbol('utils.stringifyJson',ko.utils.stringifyJson);ko.exportSymbol('utils.range',ko.utils.range);ko.exportSymbol('utils.toggleDomNodeCssClass',ko.utils.toggleDomNodeCssClass);ko.exportSymbol('utils.triggerEvent',ko.utils.triggerEvent);ko.exportSymbol('utils.unwrapObservable',ko.utils.unwrapObservable);ko.exportSymbol('utils.objectForEach',ko.utils.objectForEach);ko.exportSymbol('utils.addOrRemoveItem',ko.utils.addOrRemoveItem);ko.exportSymbol('utils.setTextContent',ko.utils.setTextContent);ko.exportSymbol('unwrap',ko.utils.unwrapObservable);// Convenient shorthand, because this is used so commonly
	if(!Function.prototype['bind']){// Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
	// In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
	Function.prototype['bind']=function(object){var originalFunction=this;if(arguments.length===1){return function(){return originalFunction.apply(object,arguments);};}else{var partialArgs=Array.prototype.slice.call(arguments,1);return function(){var args=partialArgs.slice(0);args.push.apply(args,arguments);return originalFunction.apply(object,args);};}};}ko.utils.domData=new function(){var uniqueId=0;var dataStoreKeyExpandoPropertyName="__ko__"+new Date().getTime();var dataStore={};function getAll(node,createIfNotFound){var dataStoreKey=node[dataStoreKeyExpandoPropertyName];var hasExistingDataStore=dataStoreKey&&dataStoreKey!=="null"&&dataStore[dataStoreKey];if(!hasExistingDataStore){if(!createIfNotFound)return undefined;dataStoreKey=node[dataStoreKeyExpandoPropertyName]="ko"+uniqueId++;dataStore[dataStoreKey]={};}return dataStore[dataStoreKey];}return{get:function get(node,key){var allDataForNode=getAll(node,false);return allDataForNode===undefined?undefined:allDataForNode[key];},set:function set(node,key,value){if(value===undefined){// Make sure we don't actually create a new domData key if we are actually deleting a value
	if(getAll(node,false)===undefined)return;}var allDataForNode=getAll(node,true);allDataForNode[key]=value;},clear:function clear(node){var dataStoreKey=node[dataStoreKeyExpandoPropertyName];if(dataStoreKey){delete dataStore[dataStoreKey];node[dataStoreKeyExpandoPropertyName]=null;return true;// Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
	}return false;},nextKey:function nextKey(){return uniqueId++ +dataStoreKeyExpandoPropertyName;}};}();ko.exportSymbol('utils.domData',ko.utils.domData);ko.exportSymbol('utils.domData.clear',ko.utils.domData.clear);// Exporting only so specs can clear up after themselves fully
	ko.utils.domNodeDisposal=new function(){var domDataKey=ko.utils.domData.nextKey();var cleanableNodeTypes={1:true,8:true,9:true};// Element, Comment, Document
	var cleanableNodeTypesWithDescendants={1:true,9:true};// Element, Document
	function getDisposeCallbacksCollection(node,createIfNotFound){var allDisposeCallbacks=ko.utils.domData.get(node,domDataKey);if(allDisposeCallbacks===undefined&&createIfNotFound){allDisposeCallbacks=[];ko.utils.domData.set(node,domDataKey,allDisposeCallbacks);}return allDisposeCallbacks;}function destroyCallbacksCollection(node){ko.utils.domData.set(node,domDataKey,undefined);}function cleanSingleNode(node){// Run all the dispose callbacks
	var callbacks=getDisposeCallbacksCollection(node,false);if(callbacks){callbacks=callbacks.slice(0);// Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)
	for(var i=0;i<callbacks.length;i++){callbacks[i](node);}}// Erase the DOM data
	ko.utils.domData.clear(node);// Perform cleanup needed by external libraries (currently only jQuery, but can be extended)
	ko.utils.domNodeDisposal["cleanExternalData"](node);// Clear any immediate-child comment nodes, as these wouldn't have been found by
	// node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)
	if(cleanableNodeTypesWithDescendants[node.nodeType])cleanImmediateCommentTypeChildren(node);}function cleanImmediateCommentTypeChildren(nodeWithChildren){var child,nextChild=nodeWithChildren.firstChild;while(child=nextChild){nextChild=child.nextSibling;if(child.nodeType===8)cleanSingleNode(child);}}return{addDisposeCallback:function addDisposeCallback(node,callback){if(typeof callback!="function")throw new Error("Callback must be a function");getDisposeCallbacksCollection(node,true).push(callback);},removeDisposeCallback:function removeDisposeCallback(node,callback){var callbacksCollection=getDisposeCallbacksCollection(node,false);if(callbacksCollection){ko.utils.arrayRemoveItem(callbacksCollection,callback);if(callbacksCollection.length==0)destroyCallbacksCollection(node);}},cleanNode:function cleanNode(node){// First clean this node, where applicable
	if(cleanableNodeTypes[node.nodeType]){cleanSingleNode(node);// ... then its descendants, where applicable
	if(cleanableNodeTypesWithDescendants[node.nodeType]){// Clone the descendants list in case it changes during iteration
	var descendants=[];ko.utils.arrayPushAll(descendants,node.getElementsByTagName("*"));for(var i=0,j=descendants.length;i<j;i++){cleanSingleNode(descendants[i]);}}}return node;},removeNode:function removeNode(node){ko.cleanNode(node);if(node.parentNode)node.parentNode.removeChild(node);},"cleanExternalData":function cleanExternalData(node){// Special support for jQuery here because it's so commonly used.
	// Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
	// so notify it to tear down any resources associated with the node & descendants here.
	if(jQueryInstance&&typeof jQueryInstance['cleanData']=="function")jQueryInstance['cleanData']([node]);}};}();ko.cleanNode=ko.utils.domNodeDisposal.cleanNode;// Shorthand name for convenience
	ko.removeNode=ko.utils.domNodeDisposal.removeNode;// Shorthand name for convenience
	ko.exportSymbol('cleanNode',ko.cleanNode);ko.exportSymbol('removeNode',ko.removeNode);ko.exportSymbol('utils.domNodeDisposal',ko.utils.domNodeDisposal);ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback',ko.utils.domNodeDisposal.addDisposeCallback);ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback',ko.utils.domNodeDisposal.removeDisposeCallback);(function(){var none=[0,"",""],table=[1,"<table>","</table>"],tbody=[2,"<table><tbody>","</tbody></table>"],tr=[3,"<table><tbody><tr>","</tr></tbody></table>"],select=[1,"<select multiple='multiple'>","</select>"],lookup={'thead':table,'tbody':table,'tfoot':table,'tr':tbody,'td':tr,'th':tr,'option':select,'optgroup':select},// This is needed for old IE if you're *not* using either jQuery or innerShiv. Doesn't affect other cases.
	mayRequireCreateElementHack=ko.utils.ieVersion<=8;function getWrap(tags){var m=tags.match(/^<([a-z]+)[ >]/);return m&&lookup[m[1]]||none;}function simpleHtmlParse(html,documentContext){documentContext||(documentContext=document);var windowContext=documentContext['parentWindow']||documentContext['defaultView']||window;// Based on jQuery's "clean" function, but only accounting for table-related elements.
	// If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly
	// Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
	// a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
	// This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
	// (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.
	// Trim whitespace, otherwise indexOf won't work as expected
	var tags=ko.utils.stringTrim(html).toLowerCase(),div=documentContext.createElement("div"),wrap=getWrap(tags),depth=wrap[0];// Go to html and back, then peel off extra wrappers
	// Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.
	var markup="ignored<div>"+wrap[1]+html+wrap[2]+"</div>";if(typeof windowContext['innerShiv']=="function"){// Note that innerShiv is deprecated in favour of html5shiv. We should consider adding
	// support for html5shiv (except if no explicit support is needed, e.g., if html5shiv
	// somehow shims the native APIs so it just works anyway)
	div.appendChild(windowContext['innerShiv'](markup));}else{if(mayRequireCreateElementHack){// The document.createElement('my-element') trick to enable custom elements in IE6-8
	// only works if we assign innerHTML on an element associated with that document.
	documentContext.appendChild(div);}div.innerHTML=markup;if(mayRequireCreateElementHack){div.parentNode.removeChild(div);}}// Move to the right depth
	while(depth--){div=div.lastChild;}return ko.utils.makeArray(div.lastChild.childNodes);}function jQueryHtmlParse(html,documentContext){// jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
	if(jQueryInstance['parseHTML']){return jQueryInstance['parseHTML'](html,documentContext)||[];// Ensure we always return an array and never null
	}else{// For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
	var elems=jQueryInstance['clean']([html],documentContext);// As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
	// Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
	// Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.
	if(elems&&elems[0]){// Find the top-most parent element that's a direct child of a document fragment
	var elem=elems[0];while(elem.parentNode&&elem.parentNode.nodeType!==11/* i.e., DocumentFragment */){elem=elem.parentNode;}// ... then detach it
	if(elem.parentNode)elem.parentNode.removeChild(elem);}return elems;}}ko.utils.parseHtmlFragment=function(html,documentContext){return jQueryInstance?jQueryHtmlParse(html,documentContext):// As below, benefit from jQuery's optimisations where possible
	simpleHtmlParse(html,documentContext);// ... otherwise, this simple logic will do in most common cases.
	};ko.utils.setHtml=function(node,html){ko.utils.emptyDomNode(node);// There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
	html=ko.utils.unwrapObservable(html);if(html!==null&&html!==undefined){if(typeof html!='string')html=html.toString();// jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
	// for example <tr> elements which are not normally allowed to exist on their own.
	// If you've referenced jQuery we'll use that rather than duplicating its code.
	if(jQueryInstance){jQueryInstance(node)['html'](html);}else{// ... otherwise, use KO's own parsing logic.
	var parsedNodes=ko.utils.parseHtmlFragment(html,node.ownerDocument);for(var i=0;i<parsedNodes.length;i++){node.appendChild(parsedNodes[i]);}}}};})();ko.exportSymbol('utils.parseHtmlFragment',ko.utils.parseHtmlFragment);ko.exportSymbol('utils.setHtml',ko.utils.setHtml);ko.memoization=function(){var memos={};function randomMax8HexChars(){return((1+Math.random())*0x100000000|0).toString(16).substring(1);}function generateRandomId(){return randomMax8HexChars()+randomMax8HexChars();}function findMemoNodes(rootNode,appendToArray){if(!rootNode)return;if(rootNode.nodeType==8){var memoId=ko.memoization.parseMemoText(rootNode.nodeValue);if(memoId!=null)appendToArray.push({domNode:rootNode,memoId:memoId});}else if(rootNode.nodeType==1){for(var i=0,childNodes=rootNode.childNodes,j=childNodes.length;i<j;i++){findMemoNodes(childNodes[i],appendToArray);}}}return{memoize:function memoize(callback){if(typeof callback!="function")throw new Error("You can only pass a function to ko.memoization.memoize()");var memoId=generateRandomId();memos[memoId]=callback;return"<!--[ko_memo:"+memoId+"]-->";},unmemoize:function unmemoize(memoId,callbackParams){var callback=memos[memoId];if(callback===undefined)throw new Error("Couldn't find any memo with ID "+memoId+". Perhaps it's already been unmemoized.");try{callback.apply(null,callbackParams||[]);return true;}finally{delete memos[memoId];}},unmemoizeDomNodeAndDescendants:function unmemoizeDomNodeAndDescendants(domNode,extraCallbackParamsArray){var memos=[];findMemoNodes(domNode,memos);for(var i=0,j=memos.length;i<j;i++){var node=memos[i].domNode;var combinedParams=[node];if(extraCallbackParamsArray)ko.utils.arrayPushAll(combinedParams,extraCallbackParamsArray);ko.memoization.unmemoize(memos[i].memoId,combinedParams);node.nodeValue="";// Neuter this node so we don't try to unmemoize it again
	if(node.parentNode)node.parentNode.removeChild(node);// If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
	}},parseMemoText:function parseMemoText(memoText){var match=memoText.match(/^\[ko_memo\:(.*?)\]$/);return match?match[1]:null;}};}();ko.exportSymbol('memoization',ko.memoization);ko.exportSymbol('memoization.memoize',ko.memoization.memoize);ko.exportSymbol('memoization.unmemoize',ko.memoization.unmemoize);ko.exportSymbol('memoization.parseMemoText',ko.memoization.parseMemoText);ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants',ko.memoization.unmemoizeDomNodeAndDescendants);ko.tasks=function(){var scheduler,taskQueue=[],taskQueueLength=0,nextHandle=1,nextIndexToProcess=0;if(window['MutationObserver']){// Chrome 27+, Firefox 14+, IE 11+, Opera 15+, Safari 6.1+
	// From https://github.com/petkaantonov/bluebird * Copyright (c) 2014 Petka Antonov * License: MIT
	scheduler=function(callback){var div=document.createElement("div");new MutationObserver(callback).observe(div,{attributes:true});return function(){div.classList.toggle("foo");};}(scheduledProcess);}else if(document&&"onreadystatechange"in document.createElement("script")){// IE 6-10
	// From https://github.com/YuzuJS/setImmediate * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola * License: MIT
	scheduler=function scheduler(callback){var script=document.createElement("script");script.onreadystatechange=function(){script.onreadystatechange=null;document.documentElement.removeChild(script);script=null;callback();};document.documentElement.appendChild(script);};}else{scheduler=function scheduler(callback){setTimeout(callback,0);};}function processTasks(){if(taskQueueLength){// Each mark represents the end of a logical group of tasks and the number of these groups is
	// limited to prevent unchecked recursion.
	var mark=taskQueueLength,countMarks=0;// nextIndexToProcess keeps track of where we are in the queue; processTasks can be called recursively without issue
	for(var task;nextIndexToProcess<taskQueueLength;){if(task=taskQueue[nextIndexToProcess++]){if(nextIndexToProcess>mark){if(++countMarks>=5000){nextIndexToProcess=taskQueueLength;// skip all tasks remaining in the queue since any of them could be causing the recursion
	ko.utils.deferError(Error("'Too much recursion' after processing "+countMarks+" task groups."));break;}mark=taskQueueLength;}try{task();}catch(ex){ko.utils.deferError(ex);}}}}}function scheduledProcess(){processTasks();// Reset the queue
	nextIndexToProcess=taskQueueLength=taskQueue.length=0;}function scheduleTaskProcessing(){ko.tasks['scheduler'](scheduledProcess);}var tasks={'scheduler':scheduler,// Allow overriding the scheduler
	schedule:function schedule(func){if(!taskQueueLength){scheduleTaskProcessing();}taskQueue[taskQueueLength++]=func;return nextHandle++;},cancel:function cancel(handle){var index=handle-(nextHandle-taskQueueLength);if(index>=nextIndexToProcess&&index<taskQueueLength){taskQueue[index]=null;}},// For testing only: reset the queue and return the previous queue length
	'resetForTesting':function resetForTesting(){var length=taskQueueLength-nextIndexToProcess;nextIndexToProcess=taskQueueLength=taskQueue.length=0;return length;},runEarly:processTasks};return tasks;}();ko.exportSymbol('tasks',ko.tasks);ko.exportSymbol('tasks.schedule',ko.tasks.schedule);//ko.exportSymbol('tasks.cancel', ko.tasks.cancel);  "cancel" isn't minified
	ko.exportSymbol('tasks.runEarly',ko.tasks.runEarly);ko.extenders={'throttle':function throttle(target,timeout){// Throttling means two things:
	// (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
	//     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
	target['throttleEvaluation']=timeout;// (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
	//     so the target cannot change value synchronously or faster than a certain rate
	var writeTimeoutInstance=null;return ko.dependentObservable({'read':target,'write':function write(value){clearTimeout(writeTimeoutInstance);writeTimeoutInstance=ko.utils.setTimeout(function(){target(value);},timeout);}});},'rateLimit':function rateLimit(target,options){var timeout,method,limitFunction;if(typeof options=='number'){timeout=options;}else{timeout=options['timeout'];method=options['method'];}// rateLimit supersedes deferred updates
	target._deferUpdates=false;limitFunction=method=='notifyWhenChangesStop'?debounce:throttle;target.limit(function(callback){return limitFunction(callback,timeout);});},'deferred':function deferred(target,options){if(options!==true){throw new Error('The \'deferred\' extender only accepts the value \'true\', because it is not supported to turn deferral off once enabled.');}if(!target._deferUpdates){target._deferUpdates=true;target.limit(function(callback){var handle;return function(){ko.tasks.cancel(handle);handle=ko.tasks.schedule(callback);target['notifySubscribers'](undefined,'dirty');};});}},'notify':function notify(target,notifyWhen){target["equalityComparer"]=notifyWhen=="always"?null:// null equalityComparer means to always notify
	valuesArePrimitiveAndEqual;}};var primitiveTypes={'undefined':1,'boolean':1,'number':1,'string':1};function valuesArePrimitiveAndEqual(a,b){var oldValueIsPrimitive=a===null||(typeof a==='undefined'?'undefined':_typeof(a))in primitiveTypes;return oldValueIsPrimitive?a===b:false;}function throttle(callback,timeout){var timeoutInstance;return function(){if(!timeoutInstance){timeoutInstance=ko.utils.setTimeout(function(){timeoutInstance=undefined;callback();},timeout);}};}function debounce(callback,timeout){var timeoutInstance;return function(){clearTimeout(timeoutInstance);timeoutInstance=ko.utils.setTimeout(callback,timeout);};}function applyExtenders(requestedExtenders){var target=this;if(requestedExtenders){ko.utils.objectForEach(requestedExtenders,function(key,value){var extenderHandler=ko.extenders[key];if(typeof extenderHandler=='function'){target=extenderHandler(target,value)||target;}});}return target;}ko.exportSymbol('extenders',ko.extenders);ko.subscription=function(target,callback,disposeCallback){this._target=target;this.callback=callback;this.disposeCallback=disposeCallback;this.isDisposed=false;ko.exportProperty(this,'dispose',this.dispose);};ko.subscription.prototype.dispose=function(){this.isDisposed=true;this.disposeCallback();};ko.subscribable=function(){ko.utils.setPrototypeOfOrExtend(this,ko_subscribable_fn);ko_subscribable_fn.init(this);};var defaultEvent="change";// Moved out of "limit" to avoid the extra closure
	function limitNotifySubscribers(value,event){if(!event||event===defaultEvent){this._limitChange(value);}else if(event==='beforeChange'){this._limitBeforeChange(value);}else{this._origNotifySubscribers(value,event);}}var ko_subscribable_fn={init:function init(instance){instance._subscriptions={};instance._versionNumber=1;},subscribe:function subscribe(callback,callbackTarget,event){var self=this;event=event||defaultEvent;var boundCallback=callbackTarget?callback.bind(callbackTarget):callback;var subscription=new ko.subscription(self,boundCallback,function(){ko.utils.arrayRemoveItem(self._subscriptions[event],subscription);if(self.afterSubscriptionRemove)self.afterSubscriptionRemove(event);});if(self.beforeSubscriptionAdd)self.beforeSubscriptionAdd(event);if(!self._subscriptions[event])self._subscriptions[event]=[];self._subscriptions[event].push(subscription);return subscription;},"notifySubscribers":function notifySubscribers(valueToNotify,event){event=event||defaultEvent;if(event===defaultEvent){this.updateVersion();}if(this.hasSubscriptionsForEvent(event)){try{ko.dependencyDetection.begin();// Begin suppressing dependency detection (by setting the top frame to undefined)
	for(var a=this._subscriptions[event].slice(0),i=0,subscription;subscription=a[i];++i){// In case a subscription was disposed during the arrayForEach cycle, check
	// for isDisposed on each subscription before invoking its callback
	if(!subscription.isDisposed)subscription.callback(valueToNotify);}}finally{ko.dependencyDetection.end();// End suppressing dependency detection
	}}},getVersion:function getVersion(){return this._versionNumber;},hasChanged:function hasChanged(versionToCheck){return this.getVersion()!==versionToCheck;},updateVersion:function updateVersion(){++this._versionNumber;},limit:function limit(limitFunction){var self=this,selfIsObservable=ko.isObservable(self),ignoreBeforeChange,previousValue,pendingValue,beforeChange='beforeChange';if(!self._origNotifySubscribers){self._origNotifySubscribers=self["notifySubscribers"];self["notifySubscribers"]=limitNotifySubscribers;}var finish=limitFunction(function(){self._notificationIsPending=false;// If an observable provided a reference to itself, access it to get the latest value.
	// This allows computed observables to delay calculating their value until needed.
	if(selfIsObservable&&pendingValue===self){pendingValue=self();}ignoreBeforeChange=false;if(self.isDifferent(previousValue,pendingValue)){self._origNotifySubscribers(previousValue=pendingValue);}});self._limitChange=function(value){self._notificationIsPending=ignoreBeforeChange=true;pendingValue=value;finish();};self._limitBeforeChange=function(value){if(!ignoreBeforeChange){previousValue=value;self._origNotifySubscribers(value,beforeChange);}};},hasSubscriptionsForEvent:function hasSubscriptionsForEvent(event){return this._subscriptions[event]&&this._subscriptions[event].length;},getSubscriptionsCount:function getSubscriptionsCount(event){if(event){return this._subscriptions[event]&&this._subscriptions[event].length||0;}else{var total=0;ko.utils.objectForEach(this._subscriptions,function(eventName,subscriptions){if(eventName!=='dirty')total+=subscriptions.length;});return total;}},isDifferent:function isDifferent(oldValue,newValue){return!this['equalityComparer']||!this['equalityComparer'](oldValue,newValue);},extend:applyExtenders};ko.exportProperty(ko_subscribable_fn,'subscribe',ko_subscribable_fn.subscribe);ko.exportProperty(ko_subscribable_fn,'extend',ko_subscribable_fn.extend);ko.exportProperty(ko_subscribable_fn,'getSubscriptionsCount',ko_subscribable_fn.getSubscriptionsCount);// For browsers that support proto assignment, we overwrite the prototype of each
	// observable instance. Since observables are functions, we need Function.prototype
	// to still be in the prototype chain.
	if(ko.utils.canSetPrototype){ko.utils.setPrototypeOf(ko_subscribable_fn,Function.prototype);}ko.subscribable['fn']=ko_subscribable_fn;ko.isSubscribable=function(instance){return instance!=null&&typeof instance.subscribe=="function"&&typeof instance["notifySubscribers"]=="function";};ko.exportSymbol('subscribable',ko.subscribable);ko.exportSymbol('isSubscribable',ko.isSubscribable);ko.computedContext=ko.dependencyDetection=function(){var outerFrames=[],currentFrame,lastId=0;// Return a unique ID that can be assigned to an observable for dependency tracking.
	// Theoretically, you could eventually overflow the number storage size, resulting
	// in duplicate IDs. But in JavaScript, the largest exact integral value is 2^53
	// or 9,007,199,254,740,992. If you created 1,000,000 IDs per second, it would
	// take over 285 years to reach that number.
	// Reference http://blog.vjeux.com/2010/javascript/javascript-max_int-number-limits.html
	function getId(){return++lastId;}function begin(options){outerFrames.push(currentFrame);currentFrame=options;}function end(){currentFrame=outerFrames.pop();}return{begin:begin,end:end,registerDependency:function registerDependency(subscribable){if(currentFrame){if(!ko.isSubscribable(subscribable))throw new Error("Only subscribable things can act as dependencies");currentFrame.callback.call(currentFrame.callbackTarget,subscribable,subscribable._id||(subscribable._id=getId()));}},ignore:function ignore(callback,callbackTarget,callbackArgs){try{begin();return callback.apply(callbackTarget,callbackArgs||[]);}finally{end();}},getDependenciesCount:function getDependenciesCount(){if(currentFrame)return currentFrame.computed.getDependenciesCount();},isInitial:function isInitial(){if(currentFrame)return currentFrame.isInitial;}};}();ko.exportSymbol('computedContext',ko.computedContext);ko.exportSymbol('computedContext.getDependenciesCount',ko.computedContext.getDependenciesCount);ko.exportSymbol('computedContext.isInitial',ko.computedContext.isInitial);ko.exportSymbol('ignoreDependencies',ko.ignoreDependencies=ko.dependencyDetection.ignore);var observableLatestValue=ko.utils.createSymbolOrString('_latestValue');ko.observable=function(initialValue){function observable(){if(arguments.length>0){// Write
	// Ignore writes if the value hasn't changed
	if(observable.isDifferent(observable[observableLatestValue],arguments[0])){observable.valueWillMutate();observable[observableLatestValue]=arguments[0];observable.valueHasMutated();}return this;// Permits chained assignments
	}else{// Read
	ko.dependencyDetection.registerDependency(observable);// The caller only needs to be notified of changes if they did a "read" operation
	return observable[observableLatestValue];}}observable[observableLatestValue]=initialValue;// Inherit from 'subscribable'
	if(!ko.utils.canSetPrototype){// 'subscribable' won't be on the prototype chain unless we put it there directly
	ko.utils.extend(observable,ko.subscribable['fn']);}ko.subscribable['fn'].init(observable);// Inherit from 'observable'
	ko.utils.setPrototypeOfOrExtend(observable,observableFn);if(ko.options['deferUpdates']){ko.extenders['deferred'](observable,true);}return observable;};// Define prototype for observables
	var observableFn={'equalityComparer':valuesArePrimitiveAndEqual,peek:function peek(){return this[observableLatestValue];},valueHasMutated:function valueHasMutated(){this['notifySubscribers'](this[observableLatestValue]);},valueWillMutate:function valueWillMutate(){this['notifySubscribers'](this[observableLatestValue],'beforeChange');}};// Note that for browsers that don't support proto assignment, the
	// inheritance chain is created manually in the ko.observable constructor
	if(ko.utils.canSetPrototype){ko.utils.setPrototypeOf(observableFn,ko.subscribable['fn']);}var protoProperty=ko.observable.protoProperty='__ko_proto__';observableFn[protoProperty]=ko.observable;ko.hasPrototype=function(instance,prototype){if(instance===null||instance===undefined||instance[protoProperty]===undefined)return false;if(instance[protoProperty]===prototype)return true;return ko.hasPrototype(instance[protoProperty],prototype);// Walk the prototype chain
	};ko.isObservable=function(instance){return ko.hasPrototype(instance,ko.observable);};ko.isWriteableObservable=function(instance){// Observable
	if(typeof instance=='function'&&instance[protoProperty]===ko.observable)return true;// Writeable dependent observable
	if(typeof instance=='function'&&instance[protoProperty]===ko.dependentObservable&&instance.hasWriteFunction)return true;// Anything else
	return false;};ko.exportSymbol('observable',ko.observable);ko.exportSymbol('isObservable',ko.isObservable);ko.exportSymbol('isWriteableObservable',ko.isWriteableObservable);ko.exportSymbol('isWritableObservable',ko.isWriteableObservable);ko.exportSymbol('observable.fn',observableFn);ko.exportProperty(observableFn,'peek',observableFn.peek);ko.exportProperty(observableFn,'valueHasMutated',observableFn.valueHasMutated);ko.exportProperty(observableFn,'valueWillMutate',observableFn.valueWillMutate);ko.observableArray=function(initialValues){initialValues=initialValues||[];if((typeof initialValues==='undefined'?'undefined':_typeof(initialValues))!='object'||!('length'in initialValues))throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");var result=ko.observable(initialValues);ko.utils.setPrototypeOfOrExtend(result,ko.observableArray['fn']);return result.extend({'trackArrayChanges':true});};ko.observableArray['fn']={'remove':function remove(valueOrPredicate){var underlyingArray=this.peek();var removedValues=[];var predicate=typeof valueOrPredicate=="function"&&!ko.isObservable(valueOrPredicate)?valueOrPredicate:function(value){return value===valueOrPredicate;};for(var i=0;i<underlyingArray.length;i++){var value=underlyingArray[i];if(predicate(value)){if(removedValues.length===0){this.valueWillMutate();}removedValues.push(value);underlyingArray.splice(i,1);i--;}}if(removedValues.length){this.valueHasMutated();}return removedValues;},'removeAll':function removeAll(arrayOfValues){// If you passed zero args, we remove everything
	if(arrayOfValues===undefined){var underlyingArray=this.peek();var allValues=underlyingArray.slice(0);this.valueWillMutate();underlyingArray.splice(0,underlyingArray.length);this.valueHasMutated();return allValues;}// If you passed an arg, we interpret it as an array of entries to remove
	if(!arrayOfValues)return[];return this['remove'](function(value){return ko.utils.arrayIndexOf(arrayOfValues,value)>=0;});},'destroy':function destroy(valueOrPredicate){var underlyingArray=this.peek();var predicate=typeof valueOrPredicate=="function"&&!ko.isObservable(valueOrPredicate)?valueOrPredicate:function(value){return value===valueOrPredicate;};this.valueWillMutate();for(var i=underlyingArray.length-1;i>=0;i--){var value=underlyingArray[i];if(predicate(value))underlyingArray[i]["_destroy"]=true;}this.valueHasMutated();},'destroyAll':function destroyAll(arrayOfValues){// If you passed zero args, we destroy everything
	if(arrayOfValues===undefined)return this['destroy'](function(){return true;});// If you passed an arg, we interpret it as an array of entries to destroy
	if(!arrayOfValues)return[];return this['destroy'](function(value){return ko.utils.arrayIndexOf(arrayOfValues,value)>=0;});},'indexOf':function indexOf(item){var underlyingArray=this();return ko.utils.arrayIndexOf(underlyingArray,item);},'replace':function replace(oldItem,newItem){var index=this['indexOf'](oldItem);if(index>=0){this.valueWillMutate();this.peek()[index]=newItem;this.valueHasMutated();}}};// Note that for browsers that don't support proto assignment, the
	// inheritance chain is created manually in the ko.observableArray constructor
	if(ko.utils.canSetPrototype){ko.utils.setPrototypeOf(ko.observableArray['fn'],ko.observable['fn']);}// Populate ko.observableArray.fn with read/write functions from native arrays
	// Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
	// because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale
	ko.utils.arrayForEach(["pop","push","reverse","shift","sort","splice","unshift"],function(methodName){ko.observableArray['fn'][methodName]=function(){// Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
	// (for consistency with mutating regular observables)
	var underlyingArray=this.peek();this.valueWillMutate();this.cacheDiffForKnownOperation(underlyingArray,methodName,arguments);var methodCallResult=underlyingArray[methodName].apply(underlyingArray,arguments);this.valueHasMutated();// The native sort and reverse methods return a reference to the array, but it makes more sense to return the observable array instead.
	return methodCallResult===underlyingArray?this:methodCallResult;};});// Populate ko.observableArray.fn with read-only functions from native arrays
	ko.utils.arrayForEach(["slice"],function(methodName){ko.observableArray['fn'][methodName]=function(){var underlyingArray=this();return underlyingArray[methodName].apply(underlyingArray,arguments);};});ko.exportSymbol('observableArray',ko.observableArray);var arrayChangeEventName='arrayChange';ko.extenders['trackArrayChanges']=function(target,options){// Use the provided options--each call to trackArrayChanges overwrites the previously set options
	target.compareArrayOptions={};if(options&&(typeof options==='undefined'?'undefined':_typeof(options))=="object"){ko.utils.extend(target.compareArrayOptions,options);}target.compareArrayOptions['sparse']=true;// Only modify the target observable once
	if(target.cacheDiffForKnownOperation){return;}var trackingChanges=false,cachedDiff=null,arrayChangeSubscription,pendingNotifications=0,underlyingBeforeSubscriptionAddFunction=target.beforeSubscriptionAdd,underlyingAfterSubscriptionRemoveFunction=target.afterSubscriptionRemove;// Watch "subscribe" calls, and for array change events, ensure change tracking is enabled
	target.beforeSubscriptionAdd=function(event){if(underlyingBeforeSubscriptionAddFunction)underlyingBeforeSubscriptionAddFunction.call(target,event);if(event===arrayChangeEventName){trackChanges();}};// Watch "dispose" calls, and for array change events, ensure change tracking is disabled when all are disposed
	target.afterSubscriptionRemove=function(event){if(underlyingAfterSubscriptionRemoveFunction)underlyingAfterSubscriptionRemoveFunction.call(target,event);if(event===arrayChangeEventName&&!target.hasSubscriptionsForEvent(arrayChangeEventName)){arrayChangeSubscription.dispose();trackingChanges=false;}};function trackChanges(){// Calling 'trackChanges' multiple times is the same as calling it once
	if(trackingChanges){return;}trackingChanges=true;// Intercept "notifySubscribers" to track how many times it was called.
	var underlyingNotifySubscribersFunction=target['notifySubscribers'];target['notifySubscribers']=function(valueToNotify,event){if(!event||event===defaultEvent){++pendingNotifications;}return underlyingNotifySubscribersFunction.apply(this,arguments);};// Each time the array changes value, capture a clone so that on the next
	// change it's possible to produce a diff
	var previousContents=[].concat(target.peek()||[]);cachedDiff=null;arrayChangeSubscription=target.subscribe(function(currentContents){// Make a copy of the current contents and ensure it's an array
	currentContents=[].concat(currentContents||[]);// Compute the diff and issue notifications, but only if someone is listening
	if(target.hasSubscriptionsForEvent(arrayChangeEventName)){var changes=getChanges(previousContents,currentContents);}// Eliminate references to the old, removed items, so they can be GCed
	previousContents=currentContents;cachedDiff=null;pendingNotifications=0;if(changes&&changes.length){target['notifySubscribers'](changes,arrayChangeEventName);}});}function getChanges(previousContents,currentContents){// We try to re-use cached diffs.
	// The scenarios where pendingNotifications > 1 are when using rate-limiting or the Deferred Updates
	// plugin, which without this check would not be compatible with arrayChange notifications. Normally,
	// notifications are issued immediately so we wouldn't be queueing up more than one.
	if(!cachedDiff||pendingNotifications>1){cachedDiff=ko.utils.compareArrays(previousContents,currentContents,target.compareArrayOptions);}return cachedDiff;}target.cacheDiffForKnownOperation=function(rawArray,operationName,args){// Only run if we're currently tracking changes for this observable array
	// and there aren't any pending deferred notifications.
	if(!trackingChanges||pendingNotifications){return;}var diff=[],arrayLength=rawArray.length,argsLength=args.length,offset=0;function pushDiff(status,value,index){return diff[diff.length]={'status':status,'value':value,'index':index};}switch(operationName){case'push':offset=arrayLength;case'unshift':for(var index=0;index<argsLength;index++){pushDiff('added',args[index],offset+index);}break;case'pop':offset=arrayLength-1;case'shift':if(arrayLength){pushDiff('deleted',rawArray[offset],offset);}break;case'splice':// Negative start index means 'from end of array'. After that we clamp to [0...arrayLength].
	// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	var startIndex=Math.min(Math.max(0,args[0]<0?arrayLength+args[0]:args[0]),arrayLength),endDeleteIndex=argsLength===1?arrayLength:Math.min(startIndex+(args[1]||0),arrayLength),endAddIndex=startIndex+argsLength-2,endIndex=Math.max(endDeleteIndex,endAddIndex),additions=[],deletions=[];for(var index=startIndex,argsIndex=2;index<endIndex;++index,++argsIndex){if(index<endDeleteIndex)deletions.push(pushDiff('deleted',rawArray[index],index));if(index<endAddIndex)additions.push(pushDiff('added',args[argsIndex],index));}ko.utils.findMovesInArrayComparison(deletions,additions);break;default:return;}cachedDiff=diff;};};var computedState=ko.utils.createSymbolOrString('_state');ko.computed=ko.dependentObservable=function(evaluatorFunctionOrOptions,evaluatorFunctionTarget,options){if((typeof evaluatorFunctionOrOptions==='undefined'?'undefined':_typeof(evaluatorFunctionOrOptions))==="object"){// Single-parameter syntax - everything is on this "options" param
	options=evaluatorFunctionOrOptions;}else{// Multi-parameter syntax - construct the options according to the params passed
	options=options||{};if(evaluatorFunctionOrOptions){options["read"]=evaluatorFunctionOrOptions;}}if(typeof options["read"]!="function")throw Error("Pass a function that returns the value of the ko.computed");var writeFunction=options["write"];var state={latestValue:undefined,isStale:true,isBeingEvaluated:false,suppressDisposalUntilDisposeWhenReturnsFalse:false,isDisposed:false,pure:false,isSleeping:false,readFunction:options["read"],evaluatorFunctionTarget:evaluatorFunctionTarget||options["owner"],disposeWhenNodeIsRemoved:options["disposeWhenNodeIsRemoved"]||options.disposeWhenNodeIsRemoved||null,disposeWhen:options["disposeWhen"]||options.disposeWhen,domNodeDisposalCallback:null,dependencyTracking:{},dependenciesCount:0,evaluationTimeoutInstance:null};function computedObservable(){if(arguments.length>0){if(typeof writeFunction==="function"){// Writing a value
	writeFunction.apply(state.evaluatorFunctionTarget,arguments);}else{throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");}return this;// Permits chained assignments
	}else{// Reading the value
	ko.dependencyDetection.registerDependency(computedObservable);if(state.isStale||state.isSleeping&&computedObservable.haveDependenciesChanged()){computedObservable.evaluateImmediate();}return state.latestValue;}}computedObservable[computedState]=state;computedObservable.hasWriteFunction=typeof writeFunction==="function";// Inherit from 'subscribable'
	if(!ko.utils.canSetPrototype){// 'subscribable' won't be on the prototype chain unless we put it there directly
	ko.utils.extend(computedObservable,ko.subscribable['fn']);}ko.subscribable['fn'].init(computedObservable);// Inherit from 'computed'
	ko.utils.setPrototypeOfOrExtend(computedObservable,computedFn);if(options['pure']){state.pure=true;state.isSleeping=true;// Starts off sleeping; will awake on the first subscription
	ko.utils.extend(computedObservable,pureComputedOverrides);}else if(options['deferEvaluation']){ko.utils.extend(computedObservable,deferEvaluationOverrides);}if(ko.options['deferUpdates']){ko.extenders['deferred'](computedObservable,true);}if(DEBUG){// #1731 - Aid debugging by exposing the computed's options
	computedObservable["_options"]=options;}if(state.disposeWhenNodeIsRemoved){// Since this computed is associated with a DOM node, and we don't want to dispose the computed
	// until the DOM node is *removed* from the document (as opposed to never having been in the document),
	// we'll prevent disposal until "disposeWhen" first returns false.
	state.suppressDisposalUntilDisposeWhenReturnsFalse=true;// disposeWhenNodeIsRemoved: true can be used to opt into the "only dispose after first false result"
	// behaviour even if there's no specific node to watch. In that case, clear the option so we don't try
	// to watch for a non-node's disposal. This technique is intended for KO's internal use only and shouldn't
	// be documented or used by application code, as it's likely to change in a future version of KO.
	if(!state.disposeWhenNodeIsRemoved.nodeType){state.disposeWhenNodeIsRemoved=null;}}// Evaluate, unless sleeping or deferEvaluation is true
	if(!state.isSleeping&&!options['deferEvaluation']){computedObservable.evaluateImmediate();}// Attach a DOM node disposal callback so that the computed will be proactively disposed as soon as the node is
	// removed using ko.removeNode. But skip if isActive is false (there will never be any dependencies to dispose).
	if(state.disposeWhenNodeIsRemoved&&computedObservable.isActive()){ko.utils.domNodeDisposal.addDisposeCallback(state.disposeWhenNodeIsRemoved,state.domNodeDisposalCallback=function(){computedObservable.dispose();});}return computedObservable;};// Utility function that disposes a given dependencyTracking entry
	function computedDisposeDependencyCallback(id,entryToDispose){if(entryToDispose!==null&&entryToDispose.dispose){entryToDispose.dispose();}}// This function gets called each time a dependency is detected while evaluating a computed.
	// It's factored out as a shared function to avoid creating unnecessary function instances during evaluation.
	function computedBeginDependencyDetectionCallback(subscribable,id){var computedObservable=this.computedObservable,state=computedObservable[computedState];if(!state.isDisposed){if(this.disposalCount&&this.disposalCandidates[id]){// Don't want to dispose this subscription, as it's still being used
	computedObservable.addDependencyTracking(id,subscribable,this.disposalCandidates[id]);this.disposalCandidates[id]=null;// No need to actually delete the property - disposalCandidates is a transient object anyway
	--this.disposalCount;}else if(!state.dependencyTracking[id]){// Brand new subscription - add it
	computedObservable.addDependencyTracking(id,subscribable,state.isSleeping?{_target:subscribable}:computedObservable.subscribeToDependency(subscribable));}}}var computedFn={"equalityComparer":valuesArePrimitiveAndEqual,getDependenciesCount:function getDependenciesCount(){return this[computedState].dependenciesCount;},addDependencyTracking:function addDependencyTracking(id,target,trackingObj){if(this[computedState].pure&&target===this){throw Error("A 'pure' computed must not be called recursively");}this[computedState].dependencyTracking[id]=trackingObj;trackingObj._order=this[computedState].dependenciesCount++;trackingObj._version=target.getVersion();},haveDependenciesChanged:function haveDependenciesChanged(){var id,dependency,dependencyTracking=this[computedState].dependencyTracking;for(id in dependencyTracking){if(dependencyTracking.hasOwnProperty(id)){dependency=dependencyTracking[id];if(dependency._target.hasChanged(dependency._version)){return true;}}}},markDirty:function markDirty(){// Process "dirty" events if we can handle delayed notifications
	if(this._evalDelayed&&!this[computedState].isBeingEvaluated){this._evalDelayed();}},isActive:function isActive(){return this[computedState].isStale||this[computedState].dependenciesCount>0;},respondToChange:function respondToChange(){// Ignore "change" events if we've already scheduled a delayed notification
	if(!this._notificationIsPending){this.evaluatePossiblyAsync();}},subscribeToDependency:function subscribeToDependency(target){if(target._deferUpdates&&!this[computedState].disposeWhenNodeIsRemoved){var dirtySub=target.subscribe(this.markDirty,this,'dirty'),changeSub=target.subscribe(this.respondToChange,this);return{_target:target,dispose:function dispose(){dirtySub.dispose();changeSub.dispose();}};}else{return target.subscribe(this.evaluatePossiblyAsync,this);}},evaluatePossiblyAsync:function evaluatePossiblyAsync(){var computedObservable=this,throttleEvaluationTimeout=computedObservable['throttleEvaluation'];if(throttleEvaluationTimeout&&throttleEvaluationTimeout>=0){clearTimeout(this[computedState].evaluationTimeoutInstance);this[computedState].evaluationTimeoutInstance=ko.utils.setTimeout(function(){computedObservable.evaluateImmediate(true/*notifyChange*/);},throttleEvaluationTimeout);}else if(computedObservable._evalDelayed){computedObservable._evalDelayed();}else{computedObservable.evaluateImmediate(true/*notifyChange*/);}},evaluateImmediate:function evaluateImmediate(notifyChange){var computedObservable=this,state=computedObservable[computedState],disposeWhen=state.disposeWhen;if(state.isBeingEvaluated){// If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
	// This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
	// certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
	// their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
	return;}// Do not evaluate (and possibly capture new dependencies) if disposed
	if(state.isDisposed){return;}if(state.disposeWhenNodeIsRemoved&&!ko.utils.domNodeIsAttachedToDocument(state.disposeWhenNodeIsRemoved)||disposeWhen&&disposeWhen()){// See comment above about suppressDisposalUntilDisposeWhenReturnsFalse
	if(!state.suppressDisposalUntilDisposeWhenReturnsFalse){computedObservable.dispose();return;}}else{// It just did return false, so we can stop suppressing now
	state.suppressDisposalUntilDisposeWhenReturnsFalse=false;}state.isBeingEvaluated=true;try{this.evaluateImmediate_CallReadWithDependencyDetection(notifyChange);}finally{state.isBeingEvaluated=false;}if(!state.dependenciesCount){computedObservable.dispose();}},evaluateImmediate_CallReadWithDependencyDetection:function evaluateImmediate_CallReadWithDependencyDetection(notifyChange){// This function is really just part of the evaluateImmediate logic. You would never call it from anywhere else.
	// Factoring it out into a separate function means it can be independent of the try/catch block in evaluateImmediate,
	// which contributes to saving about 40% off the CPU overhead of computed evaluation (on V8 at least).
	var computedObservable=this,state=computedObservable[computedState];// Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
	// Then, during evaluation, we cross off any that are in fact still being used.
	var isInitial=state.pure?undefined:!state.dependenciesCount,// If we're evaluating when there are no previous dependencies, it must be the first time
	dependencyDetectionContext={computedObservable:computedObservable,disposalCandidates:state.dependencyTracking,disposalCount:state.dependenciesCount};ko.dependencyDetection.begin({callbackTarget:dependencyDetectionContext,callback:computedBeginDependencyDetectionCallback,computed:computedObservable,isInitial:isInitial});state.dependencyTracking={};state.dependenciesCount=0;var newValue=this.evaluateImmediate_CallReadThenEndDependencyDetection(state,dependencyDetectionContext);if(computedObservable.isDifferent(state.latestValue,newValue)){if(!state.isSleeping){computedObservable["notifySubscribers"](state.latestValue,"beforeChange");}state.latestValue=newValue;if(state.isSleeping){computedObservable.updateVersion();}else if(notifyChange){computedObservable["notifySubscribers"](state.latestValue);}}if(isInitial){computedObservable["notifySubscribers"](state.latestValue,"awake");}},evaluateImmediate_CallReadThenEndDependencyDetection:function evaluateImmediate_CallReadThenEndDependencyDetection(state,dependencyDetectionContext){// This function is really part of the evaluateImmediate_CallReadWithDependencyDetection logic.
	// You'd never call it from anywhere else. Factoring it out means that evaluateImmediate_CallReadWithDependencyDetection
	// can be independent of try/finally blocks, which contributes to saving about 40% off the CPU
	// overhead of computed evaluation (on V8 at least).
	try{var readFunction=state.readFunction;return state.evaluatorFunctionTarget?readFunction.call(state.evaluatorFunctionTarget):readFunction();}finally{ko.dependencyDetection.end();// For each subscription no longer being used, remove it from the active subscriptions list and dispose it
	if(dependencyDetectionContext.disposalCount&&!state.isSleeping){ko.utils.objectForEach(dependencyDetectionContext.disposalCandidates,computedDisposeDependencyCallback);}state.isStale=false;}},peek:function peek(){// Peek won't re-evaluate, except while the computed is sleeping or to get the initial value when "deferEvaluation" is set.
	var state=this[computedState];if(state.isStale&&!state.dependenciesCount||state.isSleeping&&this.haveDependenciesChanged()){this.evaluateImmediate();}return state.latestValue;},limit:function limit(limitFunction){// Override the limit function with one that delays evaluation as well
	ko.subscribable['fn'].limit.call(this,limitFunction);this._evalDelayed=function(){this._limitBeforeChange(this[computedState].latestValue);this[computedState].isStale=true;// Mark as dirty
	// Pass the observable to the "limit" code, which will access it when
	// it's time to do the notification.
	this._limitChange(this);};},dispose:function dispose(){var state=this[computedState];if(!state.isSleeping&&state.dependencyTracking){ko.utils.objectForEach(state.dependencyTracking,function(id,dependency){if(dependency.dispose)dependency.dispose();});}if(state.disposeWhenNodeIsRemoved&&state.domNodeDisposalCallback){ko.utils.domNodeDisposal.removeDisposeCallback(state.disposeWhenNodeIsRemoved,state.domNodeDisposalCallback);}state.dependencyTracking=null;state.dependenciesCount=0;state.isDisposed=true;state.isStale=false;state.isSleeping=false;state.disposeWhenNodeIsRemoved=null;}};var pureComputedOverrides={beforeSubscriptionAdd:function beforeSubscriptionAdd(event){// If asleep, wake up the computed by subscribing to any dependencies.
	var computedObservable=this,state=computedObservable[computedState];if(!state.isDisposed&&state.isSleeping&&event=='change'){state.isSleeping=false;if(state.isStale||computedObservable.haveDependenciesChanged()){state.dependencyTracking=null;state.dependenciesCount=0;state.isStale=true;computedObservable.evaluateImmediate();}else{// First put the dependencies in order
	var dependeciesOrder=[];ko.utils.objectForEach(state.dependencyTracking,function(id,dependency){dependeciesOrder[dependency._order]=id;});// Next, subscribe to each one
	ko.utils.arrayForEach(dependeciesOrder,function(id,order){var dependency=state.dependencyTracking[id],subscription=computedObservable.subscribeToDependency(dependency._target);subscription._order=order;subscription._version=dependency._version;state.dependencyTracking[id]=subscription;});}if(!state.isDisposed){// test since evaluating could trigger disposal
	computedObservable["notifySubscribers"](state.latestValue,"awake");}}},afterSubscriptionRemove:function afterSubscriptionRemove(event){var state=this[computedState];if(!state.isDisposed&&event=='change'&&!this.hasSubscriptionsForEvent('change')){ko.utils.objectForEach(state.dependencyTracking,function(id,dependency){if(dependency.dispose){state.dependencyTracking[id]={_target:dependency._target,_order:dependency._order,_version:dependency._version};dependency.dispose();}});state.isSleeping=true;this["notifySubscribers"](undefined,"asleep");}},getVersion:function getVersion(){// Because a pure computed is not automatically updated while it is sleeping, we can't
	// simply return the version number. Instead, we check if any of the dependencies have
	// changed and conditionally re-evaluate the computed observable.
	var state=this[computedState];if(state.isSleeping&&(state.isStale||this.haveDependenciesChanged())){this.evaluateImmediate();}return ko.subscribable['fn'].getVersion.call(this);}};var deferEvaluationOverrides={beforeSubscriptionAdd:function beforeSubscriptionAdd(event){// This will force a computed with deferEvaluation to evaluate when the first subscription is registered.
	if(event=='change'||event=='beforeChange'){this.peek();}}};// Note that for browsers that don't support proto assignment, the
	// inheritance chain is created manually in the ko.computed constructor
	if(ko.utils.canSetPrototype){ko.utils.setPrototypeOf(computedFn,ko.subscribable['fn']);}// Set the proto chain values for ko.hasPrototype
	var protoProp=ko.observable.protoProperty;// == "__ko_proto__"
	ko.computed[protoProp]=ko.observable;computedFn[protoProp]=ko.computed;ko.isComputed=function(instance){return ko.hasPrototype(instance,ko.computed);};ko.isPureComputed=function(instance){return ko.hasPrototype(instance,ko.computed)&&instance[computedState]&&instance[computedState].pure;};ko.exportSymbol('computed',ko.computed);ko.exportSymbol('dependentObservable',ko.computed);// export ko.dependentObservable for backwards compatibility (1.x)
	ko.exportSymbol('isComputed',ko.isComputed);ko.exportSymbol('isPureComputed',ko.isPureComputed);ko.exportSymbol('computed.fn',computedFn);ko.exportProperty(computedFn,'peek',computedFn.peek);ko.exportProperty(computedFn,'dispose',computedFn.dispose);ko.exportProperty(computedFn,'isActive',computedFn.isActive);ko.exportProperty(computedFn,'getDependenciesCount',computedFn.getDependenciesCount);ko.pureComputed=function(evaluatorFunctionOrOptions,evaluatorFunctionTarget){if(typeof evaluatorFunctionOrOptions==='function'){return ko.computed(evaluatorFunctionOrOptions,evaluatorFunctionTarget,{'pure':true});}else{evaluatorFunctionOrOptions=ko.utils.extend({},evaluatorFunctionOrOptions);// make a copy of the parameter object
	evaluatorFunctionOrOptions['pure']=true;return ko.computed(evaluatorFunctionOrOptions,evaluatorFunctionTarget);}};ko.exportSymbol('pureComputed',ko.pureComputed);(function(){var maxNestedObservableDepth=10;// Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)
	ko.toJS=function(rootObject){if(arguments.length==0)throw new Error("When calling ko.toJS, pass the object you want to convert.");// We just unwrap everything at every level in the object graph
	return mapJsObjectGraph(rootObject,function(valueToMap){// Loop because an observable's value might in turn be another observable wrapper
	for(var i=0;ko.isObservable(valueToMap)&&i<maxNestedObservableDepth;i++){valueToMap=valueToMap();}return valueToMap;});};ko.toJSON=function(rootObject,replacer,space){// replacer and space are optional
	var plainJavaScriptObject=ko.toJS(rootObject);return ko.utils.stringifyJson(plainJavaScriptObject,replacer,space);};function mapJsObjectGraph(rootObject,mapInputCallback,visitedObjects){visitedObjects=visitedObjects||new objectLookup();rootObject=mapInputCallback(rootObject);var canHaveProperties=(typeof rootObject==='undefined'?'undefined':_typeof(rootObject))=="object"&&rootObject!==null&&rootObject!==undefined&&!(rootObject instanceof RegExp)&&!(rootObject instanceof Date)&&!(rootObject instanceof String)&&!(rootObject instanceof Number)&&!(rootObject instanceof Boolean);if(!canHaveProperties)return rootObject;var outputProperties=rootObject instanceof Array?[]:{};visitedObjects.save(rootObject,outputProperties);visitPropertiesOrArrayEntries(rootObject,function(indexer){var propertyValue=mapInputCallback(rootObject[indexer]);switch(typeof propertyValue==='undefined'?'undefined':_typeof(propertyValue)){case"boolean":case"number":case"string":case"function":outputProperties[indexer]=propertyValue;break;case"object":case"undefined":var previouslyMappedValue=visitedObjects.get(propertyValue);outputProperties[indexer]=previouslyMappedValue!==undefined?previouslyMappedValue:mapJsObjectGraph(propertyValue,mapInputCallback,visitedObjects);break;}});return outputProperties;}function visitPropertiesOrArrayEntries(rootObject,visitorCallback){if(rootObject instanceof Array){for(var i=0;i<rootObject.length;i++){visitorCallback(i);}// For arrays, also respect toJSON property for custom mappings (fixes #278)
	if(typeof rootObject['toJSON']=='function')visitorCallback('toJSON');}else{for(var propertyName in rootObject){visitorCallback(propertyName);}}};function objectLookup(){this.keys=[];this.values=[];};objectLookup.prototype={constructor:objectLookup,save:function save(key,value){var existingIndex=ko.utils.arrayIndexOf(this.keys,key);if(existingIndex>=0)this.values[existingIndex]=value;else{this.keys.push(key);this.values.push(value);}},get:function get(key){var existingIndex=ko.utils.arrayIndexOf(this.keys,key);return existingIndex>=0?this.values[existingIndex]:undefined;}};})();ko.exportSymbol('toJS',ko.toJS);ko.exportSymbol('toJSON',ko.toJSON);(function(){var hasDomDataExpandoProperty='__ko__hasDomDataOptionValue__';// Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
	// are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
	// that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.
	ko.selectExtensions={readValue:function readValue(element){switch(ko.utils.tagNameLower(element)){case'option':if(element[hasDomDataExpandoProperty]===true)return ko.utils.domData.get(element,ko.bindingHandlers.options.optionValueDomDataKey);return ko.utils.ieVersion<=7?element.getAttributeNode('value')&&element.getAttributeNode('value').specified?element.value:element.text:element.value;case'select':return element.selectedIndex>=0?ko.selectExtensions.readValue(element.options[element.selectedIndex]):undefined;default:return element.value;}},writeValue:function writeValue(element,value,allowUnset){switch(ko.utils.tagNameLower(element)){case'option':switch(typeof value==='undefined'?'undefined':_typeof(value)){case"string":ko.utils.domData.set(element,ko.bindingHandlers.options.optionValueDomDataKey,undefined);if(hasDomDataExpandoProperty in element){// IE <= 8 throws errors if you delete non-existent properties from a DOM node
	delete element[hasDomDataExpandoProperty];}element.value=value;break;default:// Store arbitrary object using DomData
	ko.utils.domData.set(element,ko.bindingHandlers.options.optionValueDomDataKey,value);element[hasDomDataExpandoProperty]=true;// Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.
	element.value=typeof value==="number"?value:"";break;}break;case'select':if(value===""||value===null)// A blank string or null value will select the caption
	value=undefined;var selection=-1;for(var i=0,n=element.options.length,optionValue;i<n;++i){optionValue=ko.selectExtensions.readValue(element.options[i]);// Include special check to handle selecting a caption with a blank string value
	if(optionValue==value||optionValue==""&&value===undefined){selection=i;break;}}if(allowUnset||selection>=0||value===undefined&&element.size>1){element.selectedIndex=selection;}break;default:if(value===null||value===undefined)value="";element.value=value;break;}}};})();ko.exportSymbol('selectExtensions',ko.selectExtensions);ko.exportSymbol('selectExtensions.readValue',ko.selectExtensions.readValue);ko.exportSymbol('selectExtensions.writeValue',ko.selectExtensions.writeValue);ko.expressionRewriting=function(){var javaScriptReservedWords=["true","false","null","undefined"];// Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
	// This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
	// This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).
	var javaScriptAssignmentTarget=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;function getWriteableValue(expression){if(ko.utils.arrayIndexOf(javaScriptReservedWords,expression)>=0)return false;var match=expression.match(javaScriptAssignmentTarget);return match===null?false:match[1]?'Object('+match[1]+')'+match[2]:expression;}// The following regular expressions will be used to split an object-literal string into tokens
	// These two match strings, either with double quotes or single quotes
	var stringDouble='"(?:[^"\\\\]|\\\\.)*"',stringSingle="'(?:[^'\\\\]|\\\\.)*'",// Matches a regular expression (text enclosed by slashes), but will also match sets of divisions
	// as a regular expression (this is handled by the parsing loop below).
	stringRegexp='/(?:[^/\\\\]|\\\\.)*/\w*',// These characters have special meaning to the parser and must not appear in the middle of a
	// token, except as part of a string.
	specials=',"\'{}()/:[\\]',// Match text (at least two characters) that does not contain any of the above special characters,
	// although some of the special characters are allowed to start it (all but the colon and comma).
	// The text can contain spaces, but leading or trailing spaces are skipped.
	everyThingElse='[^\\s:,/][^'+specials+']*[^\\s'+specials+']',// Match any non-space character not matched already. This will match colons and commas, since they're
	// not matched by "everyThingElse", but will also match any other single character that wasn't already
	// matched (for example: in "a: 1, b: 2", each of the non-space characters will be matched by oneNotSpace).
	oneNotSpace='[^\\s]',// Create the actual regular expression by or-ing the above strings. The order is important.
	bindingToken=RegExp(stringDouble+'|'+stringSingle+'|'+stringRegexp+'|'+everyThingElse+'|'+oneNotSpace,'g'),// Match end of previous token to determine whether a slash is a division or regex.
	divisionLookBehind=/[\])"'A-Za-z0-9_$]+$/,keywordRegexLookBehind={'in':1,'return':1,'typeof':1};function parseObjectLiteral(objectLiteralString){// Trim leading and trailing spaces from the string
	var str=ko.utils.stringTrim(objectLiteralString);// Trim braces '{' surrounding the whole object literal
	if(str.charCodeAt(0)===123)str=str.slice(1,-1);// Split into tokens
	var result=[],toks=str.match(bindingToken),key,values=[],depth=0;if(toks){// Append a comma so that we don't need a separate code block to deal with the last item
	toks.push(',');for(var i=0,tok;tok=toks[i];++i){var c=tok.charCodeAt(0);// A comma signals the end of a key/value pair if depth is zero
	if(c===44){// ","
	if(depth<=0){result.push(key&&values.length?{key:key,value:values.join('')}:{'unknown':key||values.join('')});key=depth=0;values=[];continue;}// Simply skip the colon that separates the name and value
	}else if(c===58){// ":"
	if(!depth&&!key&&values.length===1){key=values.pop();continue;}// A set of slashes is initially matched as a regular expression, but could be division
	}else if(c===47&&i&&tok.length>1){// "/"
	// Look at the end of the previous token to determine if the slash is actually division
	var match=toks[i-1].match(divisionLookBehind);if(match&&!keywordRegexLookBehind[match[0]]){// The slash is actually a division punctuator; re-parse the remainder of the string (not including the slash)
	str=str.substr(str.indexOf(tok)+1);toks=str.match(bindingToken);toks.push(',');i=-1;// Continue with just the slash
	tok='/';}// Increment depth for parentheses, braces, and brackets so that interior commas are ignored
	}else if(c===40||c===123||c===91){// '(', '{', '['
	++depth;}else if(c===41||c===125||c===93){// ')', '}', ']'
	--depth;// The key will be the first token; if it's a string, trim the quotes
	}else if(!key&&!values.length&&(c===34||c===39)){// '"', "'"
	tok=tok.slice(1,-1);}values.push(tok);}}return result;}// Two-way bindings include a write function that allow the handler to update the value even if it's not an observable.
	var twoWayBindings={};function preProcessBindings(bindingsStringOrKeyValueArray,bindingOptions){bindingOptions=bindingOptions||{};function processKeyValue(key,val){var writableVal;function callPreprocessHook(obj){return obj&&obj['preprocess']?val=obj['preprocess'](val,key,processKeyValue):true;}if(!bindingParams){if(!callPreprocessHook(ko['getBindingHandler'](key)))return;if(twoWayBindings[key]&&(writableVal=getWriteableValue(val))){// For two-way bindings, provide a write method in case the value
	// isn't a writable observable.
	propertyAccessorResultStrings.push("'"+key+"':function(_z){"+writableVal+"=_z}");}}// Values are wrapped in a function so that each value can be accessed independently
	if(makeValueAccessors){val='function(){return '+val+' }';}resultStrings.push("'"+key+"':"+val);}var resultStrings=[],propertyAccessorResultStrings=[],makeValueAccessors=bindingOptions['valueAccessors'],bindingParams=bindingOptions['bindingParams'],keyValueArray=typeof bindingsStringOrKeyValueArray==="string"?parseObjectLiteral(bindingsStringOrKeyValueArray):bindingsStringOrKeyValueArray;ko.utils.arrayForEach(keyValueArray,function(keyValue){processKeyValue(keyValue.key||keyValue['unknown'],keyValue.value);});if(propertyAccessorResultStrings.length)processKeyValue('_ko_property_writers',"{"+propertyAccessorResultStrings.join(",")+" }");return resultStrings.join(",");}return{bindingRewriteValidators:[],twoWayBindings:twoWayBindings,parseObjectLiteral:parseObjectLiteral,preProcessBindings:preProcessBindings,keyValueArrayContainsKey:function keyValueArrayContainsKey(keyValueArray,key){for(var i=0;i<keyValueArray.length;i++){if(keyValueArray[i]['key']==key)return true;}return false;},// Internal, private KO utility for updating model properties from within bindings
	// property:            If the property being updated is (or might be) an observable, pass it here
	//                      If it turns out to be a writable observable, it will be written to directly
	// allBindings:         An object with a get method to retrieve bindings in the current execution context.
	//                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
	// key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
	// value:               The value to be written
	// checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
	//                      it is !== existing value on that writable observable
	writeValueToProperty:function writeValueToProperty(property,allBindings,key,value,checkIfDifferent){if(!property||!ko.isObservable(property)){var propWriters=allBindings.get('_ko_property_writers');if(propWriters&&propWriters[key])propWriters[key](value);}else if(ko.isWriteableObservable(property)&&(!checkIfDifferent||property.peek()!==value)){property(value);}}};}();ko.exportSymbol('expressionRewriting',ko.expressionRewriting);ko.exportSymbol('expressionRewriting.bindingRewriteValidators',ko.expressionRewriting.bindingRewriteValidators);ko.exportSymbol('expressionRewriting.parseObjectLiteral',ko.expressionRewriting.parseObjectLiteral);ko.exportSymbol('expressionRewriting.preProcessBindings',ko.expressionRewriting.preProcessBindings);// Making bindings explicitly declare themselves as "two way" isn't ideal in the long term (it would be better if
	// all bindings could use an official 'property writer' API without needing to declare that they might). However,
	// since this is not, and has never been, a public API (_ko_property_writers was never documented), it's acceptable
	// as an internal implementation detail in the short term.
	// For those developers who rely on _ko_property_writers in their custom bindings, we expose _twoWayBindings as an
	// undocumented feature that makes it relatively easy to upgrade to KO 3.0. However, this is still not an official
	// public API, and we reserve the right to remove it at any time if we create a real public property writers API.
	ko.exportSymbol('expressionRewriting._twoWayBindings',ko.expressionRewriting.twoWayBindings);// For backward compatibility, define the following aliases. (Previously, these function names were misleading because
	// they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)
	ko.exportSymbol('jsonExpressionRewriting',ko.expressionRewriting);ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson',ko.expressionRewriting.preProcessBindings);(function(){// "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
	// may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
	// If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
	// of that virtual hierarchy
	//
	// The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
	// without having to scatter special cases all over the binding and templating code.
	// IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
	// but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
	// So, use node.text where available, and node.nodeValue elsewhere
	var commentNodesHaveTextProperty=document&&document.createComment("test").text==="<!--test-->";var startCommentRegex=commentNodesHaveTextProperty?/^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/;var endCommentRegex=commentNodesHaveTextProperty?/^<!--\s*\/ko\s*-->$/:/^\s*\/ko\s*$/;var htmlTagsWithOptionallyClosingChildren={'ul':true,'ol':true};function isStartComment(node){return node.nodeType==8&&startCommentRegex.test(commentNodesHaveTextProperty?node.text:node.nodeValue);}function isEndComment(node){return node.nodeType==8&&endCommentRegex.test(commentNodesHaveTextProperty?node.text:node.nodeValue);}function getVirtualChildren(startComment,allowUnbalanced){var currentNode=startComment;var depth=1;var children=[];while(currentNode=currentNode.nextSibling){if(isEndComment(currentNode)){depth--;if(depth===0)return children;}children.push(currentNode);if(isStartComment(currentNode))depth++;}if(!allowUnbalanced)throw new Error("Cannot find closing comment tag to match: "+startComment.nodeValue);return null;}function getMatchingEndComment(startComment,allowUnbalanced){var allVirtualChildren=getVirtualChildren(startComment,allowUnbalanced);if(allVirtualChildren){if(allVirtualChildren.length>0)return allVirtualChildren[allVirtualChildren.length-1].nextSibling;return startComment.nextSibling;}else return null;// Must have no matching end comment, and allowUnbalanced is true
	}function getUnbalancedChildTags(node){// e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
	//       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
	var childNode=node.firstChild,captureRemaining=null;if(childNode){do{if(captureRemaining)// We already hit an unbalanced node and are now just scooping up all subsequent nodes
	captureRemaining.push(childNode);else if(isStartComment(childNode)){var matchingEndComment=getMatchingEndComment(childNode,/* allowUnbalanced: */true);if(matchingEndComment)// It's a balanced tag, so skip immediately to the end of this virtual set
	childNode=matchingEndComment;else captureRemaining=[childNode];// It's unbalanced, so start capturing from this point
	}else if(isEndComment(childNode)){captureRemaining=[childNode];// It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
	}}while(childNode=childNode.nextSibling);}return captureRemaining;}ko.virtualElements={allowedBindings:{},childNodes:function childNodes(node){return isStartComment(node)?getVirtualChildren(node):node.childNodes;},emptyNode:function emptyNode(node){if(!isStartComment(node))ko.utils.emptyDomNode(node);else{var virtualChildren=ko.virtualElements.childNodes(node);for(var i=0,j=virtualChildren.length;i<j;i++){ko.removeNode(virtualChildren[i]);}}},setDomNodeChildren:function setDomNodeChildren(node,childNodes){if(!isStartComment(node))ko.utils.setDomNodeChildren(node,childNodes);else{ko.virtualElements.emptyNode(node);var endCommentNode=node.nextSibling;// Must be the next sibling, as we just emptied the children
	for(var i=0,j=childNodes.length;i<j;i++){endCommentNode.parentNode.insertBefore(childNodes[i],endCommentNode);}}},prepend:function prepend(containerNode,nodeToPrepend){if(!isStartComment(containerNode)){if(containerNode.firstChild)containerNode.insertBefore(nodeToPrepend,containerNode.firstChild);else containerNode.appendChild(nodeToPrepend);}else{// Start comments must always have a parent and at least one following sibling (the end comment)
	containerNode.parentNode.insertBefore(nodeToPrepend,containerNode.nextSibling);}},insertAfter:function insertAfter(containerNode,nodeToInsert,insertAfterNode){if(!insertAfterNode){ko.virtualElements.prepend(containerNode,nodeToInsert);}else if(!isStartComment(containerNode)){// Insert after insertion point
	if(insertAfterNode.nextSibling)containerNode.insertBefore(nodeToInsert,insertAfterNode.nextSibling);else containerNode.appendChild(nodeToInsert);}else{// Children of start comments must always have a parent and at least one following sibling (the end comment)
	containerNode.parentNode.insertBefore(nodeToInsert,insertAfterNode.nextSibling);}},firstChild:function firstChild(node){if(!isStartComment(node))return node.firstChild;if(!node.nextSibling||isEndComment(node.nextSibling))return null;return node.nextSibling;},nextSibling:function nextSibling(node){if(isStartComment(node))node=getMatchingEndComment(node);if(node.nextSibling&&isEndComment(node.nextSibling))return null;return node.nextSibling;},hasBindingValue:isStartComment,virtualNodeBindingValue:function virtualNodeBindingValue(node){var regexMatch=(commentNodesHaveTextProperty?node.text:node.nodeValue).match(startCommentRegex);return regexMatch?regexMatch[1]:null;},normaliseVirtualElementDomStructure:function normaliseVirtualElementDomStructure(elementVerified){// Workaround for https://github.com/SteveSanderson/knockout/issues/155
	// (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
	// that are direct descendants of <ul> into the preceding <li>)
	if(!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)])return;// Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
	// must be intended to appear *after* that child, so move them there.
	var childNode=elementVerified.firstChild;if(childNode){do{if(childNode.nodeType===1){var unbalancedTags=getUnbalancedChildTags(childNode);if(unbalancedTags){// Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
	var nodeToInsertBefore=childNode.nextSibling;for(var i=0;i<unbalancedTags.length;i++){if(nodeToInsertBefore)elementVerified.insertBefore(unbalancedTags[i],nodeToInsertBefore);else elementVerified.appendChild(unbalancedTags[i]);}}}}while(childNode=childNode.nextSibling);}}};})();ko.exportSymbol('virtualElements',ko.virtualElements);ko.exportSymbol('virtualElements.allowedBindings',ko.virtualElements.allowedBindings);ko.exportSymbol('virtualElements.emptyNode',ko.virtualElements.emptyNode);//ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified
	ko.exportSymbol('virtualElements.insertAfter',ko.virtualElements.insertAfter);//ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified
	ko.exportSymbol('virtualElements.prepend',ko.virtualElements.prepend);ko.exportSymbol('virtualElements.setDomNodeChildren',ko.virtualElements.setDomNodeChildren);(function(){var defaultBindingAttributeName="data-bind";ko.bindingProvider=function(){this.bindingCache={};};ko.utils.extend(ko.bindingProvider.prototype,{'nodeHasBindings':function nodeHasBindings(node){switch(node.nodeType){case 1:// Element
	return node.getAttribute(defaultBindingAttributeName)!=null||ko.components['getComponentNameForNode'](node);case 8:// Comment node
	return ko.virtualElements.hasBindingValue(node);default:return false;}},'getBindings':function getBindings(node,bindingContext){var bindingsString=this['getBindingsString'](node,bindingContext),parsedBindings=bindingsString?this['parseBindingsString'](bindingsString,bindingContext,node):null;return ko.components.addBindingsForCustomElement(parsedBindings,node,bindingContext,/* valueAccessors */false);},'getBindingAccessors':function getBindingAccessors(node,bindingContext){var bindingsString=this['getBindingsString'](node,bindingContext),parsedBindings=bindingsString?this['parseBindingsString'](bindingsString,bindingContext,node,{'valueAccessors':true}):null;return ko.components.addBindingsForCustomElement(parsedBindings,node,bindingContext,/* valueAccessors */true);},// The following function is only used internally by this default provider.
	// It's not part of the interface definition for a general binding provider.
	'getBindingsString':function getBindingsString(node,bindingContext){switch(node.nodeType){case 1:return node.getAttribute(defaultBindingAttributeName);// Element
	case 8:return ko.virtualElements.virtualNodeBindingValue(node);// Comment node
	default:return null;}},// The following function is only used internally by this default provider.
	// It's not part of the interface definition for a general binding provider.
	'parseBindingsString':function parseBindingsString(bindingsString,bindingContext,node,options){try{var bindingFunction=createBindingsStringEvaluatorViaCache(bindingsString,this.bindingCache,options);return bindingFunction(bindingContext,node);}catch(ex){ex.message="Unable to parse bindings.\nBindings value: "+bindingsString+"\nMessage: "+ex.message;throw ex;}}});ko.bindingProvider['instance']=new ko.bindingProvider();function createBindingsStringEvaluatorViaCache(bindingsString,cache,options){var cacheKey=bindingsString+(options&&options['valueAccessors']||'');return cache[cacheKey]||(cache[cacheKey]=createBindingsStringEvaluator(bindingsString,options));}function createBindingsStringEvaluator(bindingsString,options){// Build the source for a function that evaluates "expression"
	// For each scope variable, add an extra level of "with" nesting
	// Example result: with(sc1) { with(sc0) { return (expression) } }
	var rewrittenBindings=ko.expressionRewriting.preProcessBindings(bindingsString,options),functionBody="with($context){with($data||{}){return{"+rewrittenBindings+"}}}";return new Function("$context","$element",functionBody);}})();ko.exportSymbol('bindingProvider',ko.bindingProvider);(function(){ko.bindingHandlers={};// The following element types will not be recursed into during binding.
	var bindingDoesNotRecurseIntoElementTypes={// Don't want bindings that operate on text nodes to mutate <script> and <textarea> contents,
	// because it's unexpected and a potential XSS issue.
	// Also bindings should not operate on <template> elements since this breaks in Internet Explorer
	// and because such elements' contents are always intended to be bound in a different context
	// from where they appear in the document.
	'script':true,'textarea':true,'template':true};// Use an overridable method for retrieving binding handlers so that a plugins may support dynamically created handlers
	ko['getBindingHandler']=function(bindingKey){return ko.bindingHandlers[bindingKey];};// The ko.bindingContext constructor is only called directly to create the root context. For child
	// contexts, use bindingContext.createChildContext or bindingContext.extend.
	ko.bindingContext=function(dataItemOrAccessor,parentContext,dataItemAlias,extendCallback){// The binding context object includes static properties for the current, parent, and root view models.
	// If a view model is actually stored in an observable, the corresponding binding context object, and
	// any child contexts, must be updated when the view model is changed.
	function updateContext(){// Most of the time, the context will directly get a view model object, but if a function is given,
	// we call the function to retrieve the view model. If the function accesses any observables or returns
	// an observable, the dependency is tracked, and those observables can later cause the binding
	// context to be updated.
	var dataItemOrObservable=isFunc?dataItemOrAccessor():dataItemOrAccessor,dataItem=ko.utils.unwrapObservable(dataItemOrObservable);if(parentContext){// When a "parent" context is given, register a dependency on the parent context. Thus whenever the
	// parent context is updated, this context will also be updated.
	if(parentContext._subscribable)parentContext._subscribable();// Copy $root and any custom properties from the parent context
	ko.utils.extend(self,parentContext);// Because the above copy overwrites our own properties, we need to reset them.
	// During the first execution, "subscribable" isn't set, so don't bother doing the update then.
	if(subscribable){self._subscribable=subscribable;}}else{self['$parents']=[];self['$root']=dataItem;// Export 'ko' in the binding context so it will be available in bindings and templates
	// even if 'ko' isn't exported as a global, such as when using an AMD loader.
	// See https://github.com/SteveSanderson/knockout/issues/490
	self['ko']=ko;}self['$rawData']=dataItemOrObservable;self['$data']=dataItem;if(dataItemAlias)self[dataItemAlias]=dataItem;// The extendCallback function is provided when creating a child context or extending a context.
	// It handles the specific actions needed to finish setting up the binding context. Actions in this
	// function could also add dependencies to this binding context.
	if(extendCallback)extendCallback(self,parentContext,dataItem);return self['$data'];}function disposeWhen(){return nodes&&!ko.utils.anyDomNodeIsAttachedToDocument(nodes);}var self=this,isFunc=typeof dataItemOrAccessor=="function"&&!ko.isObservable(dataItemOrAccessor),nodes,subscribable=ko.dependentObservable(updateContext,null,{disposeWhen:disposeWhen,disposeWhenNodeIsRemoved:true});// At this point, the binding context has been initialized, and the "subscribable" computed observable is
	// subscribed to any observables that were accessed in the process. If there is nothing to track, the
	// computed will be inactive, and we can safely throw it away. If it's active, the computed is stored in
	// the context object.
	if(subscribable.isActive()){self._subscribable=subscribable;// Always notify because even if the model ($data) hasn't changed, other context properties might have changed
	subscribable['equalityComparer']=null;// We need to be able to dispose of this computed observable when it's no longer needed. This would be
	// easy if we had a single node to watch, but binding contexts can be used by many different nodes, and
	// we cannot assume that those nodes have any relation to each other. So instead we track any node that
	// the context is attached to, and dispose the computed when all of those nodes have been cleaned.
	// Add properties to *subscribable* instead of *self* because any properties added to *self* may be overwritten on updates
	nodes=[];subscribable._addNode=function(node){nodes.push(node);ko.utils.domNodeDisposal.addDisposeCallback(node,function(node){ko.utils.arrayRemoveItem(nodes,node);if(!nodes.length){subscribable.dispose();self._subscribable=subscribable=undefined;}});};}};// Extend the binding context hierarchy with a new view model object. If the parent context is watching
	// any observables, the new child context will automatically get a dependency on the parent context.
	// But this does not mean that the $data value of the child context will also get updated. If the child
	// view model also depends on the parent view model, you must provide a function that returns the correct
	// view model on each update.
	ko.bindingContext.prototype['createChildContext']=function(dataItemOrAccessor,dataItemAlias,extendCallback){return new ko.bindingContext(dataItemOrAccessor,this,dataItemAlias,function(self,parentContext){// Extend the context hierarchy by setting the appropriate pointers
	self['$parentContext']=parentContext;self['$parent']=parentContext['$data'];self['$parents']=(parentContext['$parents']||[]).slice(0);self['$parents'].unshift(self['$parent']);if(extendCallback)extendCallback(self);});};// Extend the binding context with new custom properties. This doesn't change the context hierarchy.
	// Similarly to "child" contexts, provide a function here to make sure that the correct values are set
	// when an observable view model is updated.
	ko.bindingContext.prototype['extend']=function(properties){// If the parent context references an observable view model, "_subscribable" will always be the
	// latest view model object. If not, "_subscribable" isn't set, and we can use the static "$data" value.
	return new ko.bindingContext(this._subscribable||this['$data'],this,null,function(self,parentContext){// This "child" context doesn't directly track a parent observable view model,
	// so we need to manually set the $rawData value to match the parent.
	self['$rawData']=parentContext['$rawData'];ko.utils.extend(self,typeof properties=="function"?properties():properties);});};// Returns the valueAccesor function for a binding value
	function makeValueAccessor(value){return function(){return value;};}// Returns the value of a valueAccessor function
	function evaluateValueAccessor(valueAccessor){return valueAccessor();}// Given a function that returns bindings, create and return a new object that contains
	// binding value-accessors functions. Each accessor function calls the original function
	// so that it always gets the latest value and all dependencies are captured. This is used
	// by ko.applyBindingsToNode and getBindingsAndMakeAccessors.
	function makeAccessorsFromFunction(callback){return ko.utils.objectMap(ko.dependencyDetection.ignore(callback),function(value,key){return function(){return callback()[key];};});}// Given a bindings function or object, create and return a new object that contains
	// binding value-accessors functions. This is used by ko.applyBindingsToNode.
	function makeBindingAccessors(bindings,context,node){if(typeof bindings==='function'){return makeAccessorsFromFunction(bindings.bind(null,context,node));}else{return ko.utils.objectMap(bindings,makeValueAccessor);}}// This function is used if the binding provider doesn't include a getBindingAccessors function.
	// It must be called with 'this' set to the provider instance.
	function getBindingsAndMakeAccessors(node,context){return makeAccessorsFromFunction(this['getBindings'].bind(this,node,context));}function validateThatBindingIsAllowedForVirtualElements(bindingName){var validator=ko.virtualElements.allowedBindings[bindingName];if(!validator)throw new Error("The binding '"+bindingName+"' cannot be used with virtual elements");}function applyBindingsToDescendantsInternal(bindingContext,elementOrVirtualElement,bindingContextsMayDifferFromDomParentElement){var currentChild,nextInQueue=ko.virtualElements.firstChild(elementOrVirtualElement),provider=ko.bindingProvider['instance'],preprocessNode=provider['preprocessNode'];// Preprocessing allows a binding provider to mutate a node before bindings are applied to it. For example it's
	// possible to insert new siblings after it, and/or replace the node with a different one. This can be used to
	// implement custom binding syntaxes, such as {{ value }} for string interpolation, or custom element types that
	// trigger insertion of <template> contents at that point in the document.
	if(preprocessNode){while(currentChild=nextInQueue){nextInQueue=ko.virtualElements.nextSibling(currentChild);preprocessNode.call(provider,currentChild);}// Reset nextInQueue for the next loop
	nextInQueue=ko.virtualElements.firstChild(elementOrVirtualElement);}while(currentChild=nextInQueue){// Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
	nextInQueue=ko.virtualElements.nextSibling(currentChild);applyBindingsToNodeAndDescendantsInternal(bindingContext,currentChild,bindingContextsMayDifferFromDomParentElement);}}function applyBindingsToNodeAndDescendantsInternal(bindingContext,nodeVerified,bindingContextMayDifferFromDomParentElement){var shouldBindDescendants=true;// Perf optimisation: Apply bindings only if...
	// (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
	//     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
	// (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)
	var isElement=nodeVerified.nodeType===1;if(isElement)// Workaround IE <= 8 HTML parsing weirdness
	ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);var shouldApplyBindings=isElement&&bindingContextMayDifferFromDomParentElement||// Case (1)
	ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified);// Case (2)
	if(shouldApplyBindings)shouldBindDescendants=applyBindingsToNodeInternal(nodeVerified,null,bindingContext,bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];if(shouldBindDescendants&&!bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]){// We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
	//  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
	//    hence bindingContextsMayDifferFromDomParentElement is false
	//  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
	//    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
	//    hence bindingContextsMayDifferFromDomParentElement is true
	applyBindingsToDescendantsInternal(bindingContext,nodeVerified,/* bindingContextsMayDifferFromDomParentElement: */!isElement);}}var boundElementDomDataKey=ko.utils.domData.nextKey();function topologicalSortBindings(bindings){// Depth-first sort
	var result=[],// The list of key/handler pairs that we will return
	bindingsConsidered={},// A temporary record of which bindings are already in 'result'
	cyclicDependencyStack=[];// Keeps track of a depth-search so that, if there's a cycle, we know which bindings caused it
	ko.utils.objectForEach(bindings,function pushBinding(bindingKey){if(!bindingsConsidered[bindingKey]){var binding=ko['getBindingHandler'](bindingKey);if(binding){// First add dependencies (if any) of the current binding
	if(binding['after']){cyclicDependencyStack.push(bindingKey);ko.utils.arrayForEach(binding['after'],function(bindingDependencyKey){if(bindings[bindingDependencyKey]){if(ko.utils.arrayIndexOf(cyclicDependencyStack,bindingDependencyKey)!==-1){throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+cyclicDependencyStack.join(", "));}else{pushBinding(bindingDependencyKey);}}});cyclicDependencyStack.length--;}// Next add the current binding
	result.push({key:bindingKey,handler:binding});}bindingsConsidered[bindingKey]=true;}});return result;}function applyBindingsToNodeInternal(node,sourceBindings,bindingContext,bindingContextMayDifferFromDomParentElement){// Prevent multiple applyBindings calls for the same node, except when a binding value is specified
	var alreadyBound=ko.utils.domData.get(node,boundElementDomDataKey);if(!sourceBindings){if(alreadyBound){throw Error("You cannot apply bindings multiple times to the same element.");}ko.utils.domData.set(node,boundElementDomDataKey,true);}// Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
	// we can easily recover it just by scanning up the node's ancestors in the DOM
	// (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)
	if(!alreadyBound&&bindingContextMayDifferFromDomParentElement)ko.storedBindingContextForNode(node,bindingContext);// Use bindings if given, otherwise fall back on asking the bindings provider to give us some bindings
	var bindings;if(sourceBindings&&typeof sourceBindings!=='function'){bindings=sourceBindings;}else{var provider=ko.bindingProvider['instance'],getBindings=provider['getBindingAccessors']||getBindingsAndMakeAccessors;// Get the binding from the provider within a computed observable so that we can update the bindings whenever
	// the binding context is updated or if the binding provider accesses observables.
	var bindingsUpdater=ko.dependentObservable(function(){bindings=sourceBindings?sourceBindings(bindingContext,node):getBindings.call(provider,node,bindingContext);// Register a dependency on the binding context to support observable view models.
	if(bindings&&bindingContext._subscribable)bindingContext._subscribable();return bindings;},null,{disposeWhenNodeIsRemoved:node});if(!bindings||!bindingsUpdater.isActive())bindingsUpdater=null;}var bindingHandlerThatControlsDescendantBindings;if(bindings){var getValueAccessor;var orderedBindings;(function(){// Use of allBindings as a function is maintained for backwards compatibility, but its use is deprecated
	var allBindings=function allBindings(){return ko.utils.objectMap(bindingsUpdater?bindingsUpdater():bindings,evaluateValueAccessor);};// The following is the 3.x allBindings API
	// Return the value accessor for a given binding. When bindings are static (won't be updated because of a binding
	// context update), just return the value accessor from the binding. Otherwise, return a function that always gets
	// the latest binding value and registers a dependency on the binding updater.
	getValueAccessor=bindingsUpdater?function(bindingKey){return function(){return evaluateValueAccessor(bindingsUpdater()[bindingKey]);};}:function(bindingKey){return bindings[bindingKey];};allBindings['get']=function(key){return bindings[key]&&evaluateValueAccessor(getValueAccessor(key));};allBindings['has']=function(key){return key in bindings;};// First put the bindings into the right order
	orderedBindings=topologicalSortBindings(bindings);// Go through the sorted bindings, calling init and update for each
	ko.utils.arrayForEach(orderedBindings,function(bindingKeyAndHandler){// Note that topologicalSortBindings has already filtered out any nonexistent binding handlers,
	// so bindingKeyAndHandler.handler will always be nonnull.
	var handlerInitFn=bindingKeyAndHandler.handler["init"],handlerUpdateFn=bindingKeyAndHandler.handler["update"],bindingKey=bindingKeyAndHandler.key;if(node.nodeType===8){validateThatBindingIsAllowedForVirtualElements(bindingKey);}try{// Run init, ignoring any dependencies
	if(typeof handlerInitFn=="function"){ko.dependencyDetection.ignore(function(){var initResult=handlerInitFn(node,getValueAccessor(bindingKey),allBindings,bindingContext['$data'],bindingContext);// If this binding handler claims to control descendant bindings, make a note of this
	if(initResult&&initResult['controlsDescendantBindings']){if(bindingHandlerThatControlsDescendantBindings!==undefined)throw new Error("Multiple bindings ("+bindingHandlerThatControlsDescendantBindings+" and "+bindingKey+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");bindingHandlerThatControlsDescendantBindings=bindingKey;}});}// Run update in its own computed wrapper
	if(typeof handlerUpdateFn=="function"){ko.dependentObservable(function(){handlerUpdateFn(node,getValueAccessor(bindingKey),allBindings,bindingContext['$data'],bindingContext);},null,{disposeWhenNodeIsRemoved:node});}}catch(ex){ex.message="Unable to process binding \""+bindingKey+": "+bindings[bindingKey]+"\"\nMessage: "+ex.message;throw ex;}});})();}return{'shouldBindDescendants':bindingHandlerThatControlsDescendantBindings===undefined};};var storedBindingContextDomDataKey=ko.utils.domData.nextKey();ko.storedBindingContextForNode=function(node,bindingContext){if(arguments.length==2){ko.utils.domData.set(node,storedBindingContextDomDataKey,bindingContext);if(bindingContext._subscribable)bindingContext._subscribable._addNode(node);}else{return ko.utils.domData.get(node,storedBindingContextDomDataKey);}};function getBindingContext(viewModelOrBindingContext){return viewModelOrBindingContext&&viewModelOrBindingContext instanceof ko.bindingContext?viewModelOrBindingContext:new ko.bindingContext(viewModelOrBindingContext);}ko.applyBindingAccessorsToNode=function(node,bindings,viewModelOrBindingContext){if(node.nodeType===1)// If it's an element, workaround IE <= 8 HTML parsing weirdness
	ko.virtualElements.normaliseVirtualElementDomStructure(node);return applyBindingsToNodeInternal(node,bindings,getBindingContext(viewModelOrBindingContext),true);};ko.applyBindingsToNode=function(node,bindings,viewModelOrBindingContext){var context=getBindingContext(viewModelOrBindingContext);return ko.applyBindingAccessorsToNode(node,makeBindingAccessors(bindings,context,node),context);};ko.applyBindingsToDescendants=function(viewModelOrBindingContext,rootNode){if(rootNode.nodeType===1||rootNode.nodeType===8)applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext),rootNode,true);};ko.applyBindings=function(viewModelOrBindingContext,rootNode){// If jQuery is loaded after Knockout, we won't initially have access to it. So save it here.
	if(!jQueryInstance&&window['jQuery']){jQueryInstance=window['jQuery'];}if(rootNode&&rootNode.nodeType!==1&&rootNode.nodeType!==8)throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");rootNode=rootNode||window.document.body;// Make "rootNode" parameter optional
	applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext),rootNode,true);};// Retrieving binding context from arbitrary nodes
	ko.contextFor=function(node){// We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
	switch(node.nodeType){case 1:case 8:var context=ko.storedBindingContextForNode(node);if(context)return context;if(node.parentNode)return ko.contextFor(node.parentNode);break;}return undefined;};ko.dataFor=function(node){var context=ko.contextFor(node);return context?context['$data']:undefined;};ko.exportSymbol('bindingHandlers',ko.bindingHandlers);ko.exportSymbol('applyBindings',ko.applyBindings);ko.exportSymbol('applyBindingsToDescendants',ko.applyBindingsToDescendants);ko.exportSymbol('applyBindingAccessorsToNode',ko.applyBindingAccessorsToNode);ko.exportSymbol('applyBindingsToNode',ko.applyBindingsToNode);ko.exportSymbol('contextFor',ko.contextFor);ko.exportSymbol('dataFor',ko.dataFor);})();(function(undefined){var loadingSubscribablesCache={},// Tracks component loads that are currently in flight
	loadedDefinitionsCache={};// Tracks component loads that have already completed
	ko.components={get:function get(componentName,callback){var cachedDefinition=getObjectOwnProperty(loadedDefinitionsCache,componentName);if(cachedDefinition){// It's already loaded and cached. Reuse the same definition object.
	// Note that for API consistency, even cache hits complete asynchronously by default.
	// You can bypass this by putting synchronous:true on your component config.
	if(cachedDefinition.isSynchronousComponent){ko.dependencyDetection.ignore(function(){// See comment in loaderRegistryBehaviors.js for reasoning
	callback(cachedDefinition.definition);});}else{ko.tasks.schedule(function(){callback(cachedDefinition.definition);});}}else{// Join the loading process that is already underway, or start a new one.
	loadComponentAndNotify(componentName,callback);}},clearCachedDefinition:function clearCachedDefinition(componentName){delete loadedDefinitionsCache[componentName];},_getFirstResultFromLoaders:getFirstResultFromLoaders};function getObjectOwnProperty(obj,propName){return obj.hasOwnProperty(propName)?obj[propName]:undefined;}function loadComponentAndNotify(componentName,callback){var subscribable=getObjectOwnProperty(loadingSubscribablesCache,componentName),completedAsync;if(!subscribable){// It's not started loading yet. Start loading, and when it's done, move it to loadedDefinitionsCache.
	subscribable=loadingSubscribablesCache[componentName]=new ko.subscribable();subscribable.subscribe(callback);beginLoadingComponent(componentName,function(definition,config){var isSynchronousComponent=!!(config&&config['synchronous']);loadedDefinitionsCache[componentName]={definition:definition,isSynchronousComponent:isSynchronousComponent};delete loadingSubscribablesCache[componentName];// For API consistency, all loads complete asynchronously. However we want to avoid
	// adding an extra task schedule if it's unnecessary (i.e., the completion is already
	// async).
	//
	// You can bypass the 'always asynchronous' feature by putting the synchronous:true
	// flag on your component configuration when you register it.
	if(completedAsync||isSynchronousComponent){// Note that notifySubscribers ignores any dependencies read within the callback.
	// See comment in loaderRegistryBehaviors.js for reasoning
	subscribable['notifySubscribers'](definition);}else{ko.tasks.schedule(function(){subscribable['notifySubscribers'](definition);});}});completedAsync=true;}else{subscribable.subscribe(callback);}}function beginLoadingComponent(componentName,callback){getFirstResultFromLoaders('getConfig',[componentName],function(config){if(config){// We have a config, so now load its definition
	getFirstResultFromLoaders('loadComponent',[componentName,config],function(definition){callback(definition,config);});}else{// The component has no config - it's unknown to all the loaders.
	// Note that this is not an error (e.g., a module loading error) - that would abort the
	// process and this callback would not run. For this callback to run, all loaders must
	// have confirmed they don't know about this component.
	callback(null,null);}});}function getFirstResultFromLoaders(methodName,argsExceptCallback,callback,candidateLoaders){// On the first call in the stack, start with the full set of loaders
	if(!candidateLoaders){candidateLoaders=ko.components['loaders'].slice(0);// Use a copy, because we'll be mutating this array
	}// Try the next candidate
	var currentCandidateLoader=candidateLoaders.shift();if(currentCandidateLoader){var methodInstance=currentCandidateLoader[methodName];if(methodInstance){var wasAborted=false,synchronousReturnValue=methodInstance.apply(currentCandidateLoader,argsExceptCallback.concat(function(result){if(wasAborted){callback(null);}else if(result!==null){// This candidate returned a value. Use it.
	callback(result);}else{// Try the next candidate
	getFirstResultFromLoaders(methodName,argsExceptCallback,callback,candidateLoaders);}}));// Currently, loaders may not return anything synchronously. This leaves open the possibility
	// that we'll extend the API to support synchronous return values in the future. It won't be
	// a breaking change, because currently no loader is allowed to return anything except undefined.
	if(synchronousReturnValue!==undefined){wasAborted=true;// Method to suppress exceptions will remain undocumented. This is only to keep
	// KO's specs running tidily, since we can observe the loading got aborted without
	// having exceptions cluttering up the console too.
	if(!currentCandidateLoader['suppressLoaderExceptions']){throw new Error('Component loaders must supply values by invoking the callback, not by returning values synchronously.');}}}else{// This candidate doesn't have the relevant handler. Synchronously move on to the next one.
	getFirstResultFromLoaders(methodName,argsExceptCallback,callback,candidateLoaders);}}else{// No candidates returned a value
	callback(null);}}// Reference the loaders via string name so it's possible for developers
	// to replace the whole array by assigning to ko.components.loaders
	ko.components['loaders']=[];ko.exportSymbol('components',ko.components);ko.exportSymbol('components.get',ko.components.get);ko.exportSymbol('components.clearCachedDefinition',ko.components.clearCachedDefinition);})();(function(undefined){// The default loader is responsible for two things:
	// 1. Maintaining the default in-memory registry of component configuration objects
	//    (i.e., the thing you're writing to when you call ko.components.register(someName, ...))
	// 2. Answering requests for components by fetching configuration objects
	//    from that default in-memory registry and resolving them into standard
	//    component definition objects (of the form { createViewModel: ..., template: ... })
	// Custom loaders may override either of these facilities, i.e.,
	// 1. To supply configuration objects from some other source (e.g., conventions)
	// 2. Or, to resolve configuration objects by loading viewmodels/templates via arbitrary logic.
	var defaultConfigRegistry={};ko.components.register=function(componentName,config){if(!config){throw new Error('Invalid configuration for '+componentName);}if(ko.components.isRegistered(componentName)){throw new Error('Component '+componentName+' is already registered');}defaultConfigRegistry[componentName]=config;};ko.components.isRegistered=function(componentName){return defaultConfigRegistry.hasOwnProperty(componentName);};ko.components.unregister=function(componentName){delete defaultConfigRegistry[componentName];ko.components.clearCachedDefinition(componentName);};ko.components.defaultLoader={'getConfig':function getConfig(componentName,callback){var result=defaultConfigRegistry.hasOwnProperty(componentName)?defaultConfigRegistry[componentName]:null;callback(result);},'loadComponent':function loadComponent(componentName,config,callback){var errorCallback=makeErrorCallback(componentName);possiblyGetConfigFromAmd(errorCallback,config,function(loadedConfig){resolveConfig(componentName,errorCallback,loadedConfig,callback);});},'loadTemplate':function loadTemplate(componentName,templateConfig,callback){resolveTemplate(makeErrorCallback(componentName),templateConfig,callback);},'loadViewModel':function loadViewModel(componentName,viewModelConfig,callback){resolveViewModel(makeErrorCallback(componentName),viewModelConfig,callback);}};var createViewModelKey='createViewModel';// Takes a config object of the form { template: ..., viewModel: ... }, and asynchronously convert it
	// into the standard component definition format:
	//    { template: <ArrayOfDomNodes>, createViewModel: function(params, componentInfo) { ... } }.
	// Since both template and viewModel may need to be resolved asynchronously, both tasks are performed
	// in parallel, and the results joined when both are ready. We don't depend on any promises infrastructure,
	// so this is implemented manually below.
	function resolveConfig(componentName,errorCallback,config,callback){var result={},makeCallBackWhenZero=2,tryIssueCallback=function tryIssueCallback(){if(--makeCallBackWhenZero===0){callback(result);}},templateConfig=config['template'],viewModelConfig=config['viewModel'];if(templateConfig){possiblyGetConfigFromAmd(errorCallback,templateConfig,function(loadedConfig){ko.components._getFirstResultFromLoaders('loadTemplate',[componentName,loadedConfig],function(resolvedTemplate){result['template']=resolvedTemplate;tryIssueCallback();});});}else{tryIssueCallback();}if(viewModelConfig){possiblyGetConfigFromAmd(errorCallback,viewModelConfig,function(loadedConfig){ko.components._getFirstResultFromLoaders('loadViewModel',[componentName,loadedConfig],function(resolvedViewModel){result[createViewModelKey]=resolvedViewModel;tryIssueCallback();});});}else{tryIssueCallback();}}function resolveTemplate(errorCallback,templateConfig,callback){if(typeof templateConfig==='string'){// Markup - parse it
	callback(ko.utils.parseHtmlFragment(templateConfig));}else if(templateConfig instanceof Array){// Assume already an array of DOM nodes - pass through unchanged
	callback(templateConfig);}else if(isDocumentFragment(templateConfig)){// Document fragment - use its child nodes
	callback(ko.utils.makeArray(templateConfig.childNodes));}else if(templateConfig['element']){var element=templateConfig['element'];if(isDomElement(element)){// Element instance - copy its child nodes
	callback(cloneNodesFromTemplateSourceElement(element));}else if(typeof element==='string'){// Element ID - find it, then copy its child nodes
	var elemInstance=document.getElementById(element);if(elemInstance){callback(cloneNodesFromTemplateSourceElement(elemInstance));}else{errorCallback('Cannot find element with ID '+element);}}else{errorCallback('Unknown element type: '+element);}}else{errorCallback('Unknown template value: '+templateConfig);}}function resolveViewModel(errorCallback,viewModelConfig,callback){if(typeof viewModelConfig==='function'){// Constructor - convert to standard factory function format
	// By design, this does *not* supply componentInfo to the constructor, as the intent is that
	// componentInfo contains non-viewmodel data (e.g., the component's element) that should only
	// be used in factory functions, not viewmodel constructors.
	callback(function(params/*, componentInfo */){return new viewModelConfig(params);});}else if(typeof viewModelConfig[createViewModelKey]==='function'){// Already a factory function - use it as-is
	callback(viewModelConfig[createViewModelKey]);}else if('instance'in viewModelConfig){// Fixed object instance - promote to createViewModel format for API consistency
	var fixedInstance=viewModelConfig['instance'];callback(function(params,componentInfo){return fixedInstance;});}else if('viewModel'in viewModelConfig){// Resolved AMD module whose value is of the form { viewModel: ... }
	resolveViewModel(errorCallback,viewModelConfig['viewModel'],callback);}else{errorCallback('Unknown viewModel value: '+viewModelConfig);}}function cloneNodesFromTemplateSourceElement(elemInstance){switch(ko.utils.tagNameLower(elemInstance)){case'script':return ko.utils.parseHtmlFragment(elemInstance.text);case'textarea':return ko.utils.parseHtmlFragment(elemInstance.value);case'template':// For browsers with proper <template> element support (i.e., where the .content property
	// gives a document fragment), use that document fragment.
	if(isDocumentFragment(elemInstance.content)){return ko.utils.cloneNodes(elemInstance.content.childNodes);}}// Regular elements such as <div>, and <template> elements on old browsers that don't really
	// understand <template> and just treat it as a regular container
	return ko.utils.cloneNodes(elemInstance.childNodes);}function isDomElement(obj){if(window['HTMLElement']){return obj instanceof HTMLElement;}else{return obj&&obj.tagName&&obj.nodeType===1;}}function isDocumentFragment(obj){if(window['DocumentFragment']){return obj instanceof DocumentFragment;}else{return obj&&obj.nodeType===11;}}function possiblyGetConfigFromAmd(errorCallback,config,callback){if(typeof config['require']==='string'){// The config is the value of an AMD module
	if(amdRequire||window['require']){(amdRequire||window['require'])([config['require']],callback);}else{errorCallback('Uses require, but no AMD loader is present');}}else{callback(config);}}function makeErrorCallback(componentName){return function(message){throw new Error('Component \''+componentName+'\': '+message);};}ko.exportSymbol('components.register',ko.components.register);ko.exportSymbol('components.isRegistered',ko.components.isRegistered);ko.exportSymbol('components.unregister',ko.components.unregister);// Expose the default loader so that developers can directly ask it for configuration
	// or to resolve configuration
	ko.exportSymbol('components.defaultLoader',ko.components.defaultLoader);// By default, the default loader is the only registered component loader
	ko.components['loaders'].push(ko.components.defaultLoader);// Privately expose the underlying config registry for use in old-IE shim
	ko.components._allRegisteredComponents=defaultConfigRegistry;})();(function(undefined){// Overridable API for determining which component name applies to a given node. By overriding this,
	// you can for example map specific tagNames to components that are not preregistered.
	ko.components['getComponentNameForNode']=function(node){var tagNameLower=ko.utils.tagNameLower(node);if(ko.components.isRegistered(tagNameLower)){// Try to determine that this node can be considered a *custom* element; see https://github.com/knockout/knockout/issues/1603
	if(tagNameLower.indexOf('-')!=-1||''+node=="[object HTMLUnknownElement]"||ko.utils.ieVersion<=8&&node.tagName===tagNameLower){return tagNameLower;}}};ko.components.addBindingsForCustomElement=function(allBindings,node,bindingContext,valueAccessors){// Determine if it's really a custom element matching a component
	if(node.nodeType===1){var componentName=ko.components['getComponentNameForNode'](node);if(componentName){// It does represent a component, so add a component binding for it
	allBindings=allBindings||{};if(allBindings['component']){// Avoid silently overwriting some other 'component' binding that may already be on the element
	throw new Error('Cannot use the "component" binding on a custom element matching a component');}var componentBindingValue={'name':componentName,'params':getComponentParamsFromCustomElement(node,bindingContext)};allBindings['component']=valueAccessors?function(){return componentBindingValue;}:componentBindingValue;}}return allBindings;};var nativeBindingProviderInstance=new ko.bindingProvider();function getComponentParamsFromCustomElement(elem,bindingContext){var paramsAttribute=elem.getAttribute('params');if(paramsAttribute){var params=nativeBindingProviderInstance['parseBindingsString'](paramsAttribute,bindingContext,elem,{'valueAccessors':true,'bindingParams':true}),rawParamComputedValues=ko.utils.objectMap(params,function(paramValue,paramName){return ko.computed(paramValue,null,{disposeWhenNodeIsRemoved:elem});}),result=ko.utils.objectMap(rawParamComputedValues,function(paramValueComputed,paramName){var paramValue=paramValueComputed.peek();// Does the evaluation of the parameter value unwrap any observables?
	if(!paramValueComputed.isActive()){// No it doesn't, so there's no need for any computed wrapper. Just pass through the supplied value directly.
	// Example: "someVal: firstName, age: 123" (whether or not firstName is an observable/computed)
	return paramValue;}else{// Yes it does. Supply a computed property that unwraps both the outer (binding expression)
	// level of observability, and any inner (resulting model value) level of observability.
	// This means the component doesn't have to worry about multiple unwrapping. If the value is a
	// writable observable, the computed will also be writable and pass the value on to the observable.
	return ko.computed({'read':function read(){return ko.utils.unwrapObservable(paramValueComputed());},'write':ko.isWriteableObservable(paramValue)&&function(value){paramValueComputed()(value);},disposeWhenNodeIsRemoved:elem});}});// Give access to the raw computeds, as long as that wouldn't overwrite any custom param also called '$raw'
	// This is in case the developer wants to react to outer (binding) observability separately from inner
	// (model value) observability, or in case the model value observable has subobservables.
	if(!result.hasOwnProperty('$raw')){result['$raw']=rawParamComputedValues;}return result;}else{// For consistency, absence of a "params" attribute is treated the same as the presence of
	// any empty one. Otherwise component viewmodels need special code to check whether or not
	// 'params' or 'params.$raw' is null/undefined before reading subproperties, which is annoying.
	return{'$raw':{}};}}// --------------------------------------------------------------------------------
	// Compatibility code for older (pre-HTML5) IE browsers
	if(ko.utils.ieVersion<9){// Whenever you preregister a component, enable it as a custom element in the current document
	ko.components['register']=function(originalFunction){return function(componentName){document.createElement(componentName);// Allows IE<9 to parse markup containing the custom element
	return originalFunction.apply(this,arguments);};}(ko.components['register']);// Whenever you create a document fragment, enable all preregistered component names as custom elements
	// This is needed to make innerShiv/jQuery HTML parsing correctly handle the custom elements
	document.createDocumentFragment=function(originalFunction){return function(){var newDocFrag=originalFunction(),allComponents=ko.components._allRegisteredComponents;for(var componentName in allComponents){if(allComponents.hasOwnProperty(componentName)){newDocFrag.createElement(componentName);}}return newDocFrag;};}(document.createDocumentFragment);}})();(function(undefined){var componentLoadingOperationUniqueId=0;ko.bindingHandlers['component']={'init':function init(element,valueAccessor,ignored1,ignored2,bindingContext){var currentViewModel,currentLoadingOperationId,disposeAssociatedComponentViewModel=function disposeAssociatedComponentViewModel(){var currentViewModelDispose=currentViewModel&&currentViewModel['dispose'];if(typeof currentViewModelDispose==='function'){currentViewModelDispose.call(currentViewModel);}currentViewModel=null;// Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
	currentLoadingOperationId=null;},originalChildNodes=ko.utils.makeArray(ko.virtualElements.childNodes(element));ko.utils.domNodeDisposal.addDisposeCallback(element,disposeAssociatedComponentViewModel);ko.computed(function(){var value=ko.utils.unwrapObservable(valueAccessor()),componentName,componentParams;if(typeof value==='string'){componentName=value;}else{componentName=ko.utils.unwrapObservable(value['name']);componentParams=ko.utils.unwrapObservable(value['params']);}if(!componentName){throw new Error('No component name specified');}var loadingOperationId=currentLoadingOperationId=++componentLoadingOperationUniqueId;ko.components.get(componentName,function(componentDefinition){// If this is not the current load operation for this element, ignore it.
	if(currentLoadingOperationId!==loadingOperationId){return;}// Clean up previous state
	disposeAssociatedComponentViewModel();// Instantiate and bind new component. Implicitly this cleans any old DOM nodes.
	if(!componentDefinition){throw new Error('Unknown component \''+componentName+'\'');}cloneTemplateIntoElement(componentName,componentDefinition,element);var componentViewModel=createViewModel(componentDefinition,element,originalChildNodes,componentParams),childBindingContext=bindingContext['createChildContext'](componentViewModel,/* dataItemAlias */undefined,function(ctx){ctx['$component']=componentViewModel;ctx['$componentTemplateNodes']=originalChildNodes;});currentViewModel=componentViewModel;ko.applyBindingsToDescendants(childBindingContext,element);});},null,{disposeWhenNodeIsRemoved:element});return{'controlsDescendantBindings':true};}};ko.virtualElements.allowedBindings['component']=true;function cloneTemplateIntoElement(componentName,componentDefinition,element){var template=componentDefinition['template'];if(!template){throw new Error('Component \''+componentName+'\' has no template');}var clonedNodesArray=ko.utils.cloneNodes(template);ko.virtualElements.setDomNodeChildren(element,clonedNodesArray);}function createViewModel(componentDefinition,element,originalChildNodes,componentParams){var componentViewModelFactory=componentDefinition['createViewModel'];return componentViewModelFactory?componentViewModelFactory.call(componentDefinition,componentParams,{'element':element,'templateNodes':originalChildNodes}):componentParams;// Template-only component
	}})();var attrHtmlToJavascriptMap={'class':'className','for':'htmlFor'};ko.bindingHandlers['attr']={'update':function update(element,valueAccessor,allBindings){var value=ko.utils.unwrapObservable(valueAccessor())||{};ko.utils.objectForEach(value,function(attrName,attrValue){attrValue=ko.utils.unwrapObservable(attrValue);// To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
	// when someProp is a "no value"-like value (strictly null, false, or undefined)
	// (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
	var toRemove=attrValue===false||attrValue===null||attrValue===undefined;if(toRemove)element.removeAttribute(attrName);// In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
	// HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
	// but instead of figuring out the mode, we'll just set the attribute through the Javascript
	// property for IE <= 8.
	if(ko.utils.ieVersion<=8&&attrName in attrHtmlToJavascriptMap){attrName=attrHtmlToJavascriptMap[attrName];if(toRemove)element.removeAttribute(attrName);else element[attrName]=attrValue;}else if(!toRemove){element.setAttribute(attrName,attrValue.toString());}// Treat "name" specially - although you can think of it as an attribute, it also needs
	// special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
	// Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
	// entirely, and there's no strong reason to allow for such casing in HTML.
	if(attrName==="name"){ko.utils.setElementName(element,toRemove?"":attrValue.toString());}});}};(function(){ko.bindingHandlers['checked']={'after':['value','attr'],'init':function init(element,valueAccessor,allBindings){var checkedValue=ko.pureComputed(function(){// Treat "value" like "checkedValue" when it is included with "checked" binding
	if(allBindings['has']('checkedValue')){return ko.utils.unwrapObservable(allBindings.get('checkedValue'));}else if(allBindings['has']('value')){return ko.utils.unwrapObservable(allBindings.get('value'));}return element.value;});function updateModel(){// This updates the model value from the view value.
	// It runs in response to DOM events (click) and changes in checkedValue.
	var isChecked=element.checked,elemValue=useCheckedValue?checkedValue():isChecked;// When we're first setting up this computed, don't change any model state.
	if(ko.computedContext.isInitial()){return;}// We can ignore unchecked radio buttons, because some other radio
	// button will be getting checked, and that one can take care of updating state.
	if(isRadio&&!isChecked){return;}var modelValue=ko.dependencyDetection.ignore(valueAccessor);if(valueIsArray){var writableValue=rawValueIsNonArrayObservable?modelValue.peek():modelValue;if(oldElemValue!==elemValue){// When we're responding to the checkedValue changing, and the element is
	// currently checked, replace the old elem value with the new elem value
	// in the model array.
	if(isChecked){ko.utils.addOrRemoveItem(writableValue,elemValue,true);ko.utils.addOrRemoveItem(writableValue,oldElemValue,false);}oldElemValue=elemValue;}else{// When we're responding to the user having checked/unchecked a checkbox,
	// add/remove the element value to the model array.
	ko.utils.addOrRemoveItem(writableValue,elemValue,isChecked);}if(rawValueIsNonArrayObservable&&ko.isWriteableObservable(modelValue)){modelValue(writableValue);}}else{ko.expressionRewriting.writeValueToProperty(modelValue,allBindings,'checked',elemValue,true);}};function updateView(){// This updates the view value from the model value.
	// It runs in response to changes in the bound (checked) value.
	var modelValue=ko.utils.unwrapObservable(valueAccessor());if(valueIsArray){// When a checkbox is bound to an array, being checked represents its value being present in that array
	element.checked=ko.utils.arrayIndexOf(modelValue,checkedValue())>=0;}else if(isCheckbox){// When a checkbox is bound to any other value (not an array), being checked represents the value being trueish
	element.checked=modelValue;}else{// For radio buttons, being checked means that the radio button's value corresponds to the model value
	element.checked=checkedValue()===modelValue;}};var isCheckbox=element.type=="checkbox",isRadio=element.type=="radio";// Only bind to check boxes and radio buttons
	if(!isCheckbox&&!isRadio){return;}var rawValue=valueAccessor(),valueIsArray=isCheckbox&&ko.utils.unwrapObservable(rawValue)instanceof Array,rawValueIsNonArrayObservable=!(valueIsArray&&rawValue.push&&rawValue.splice),oldElemValue=valueIsArray?checkedValue():undefined,useCheckedValue=isRadio||valueIsArray;// IE 6 won't allow radio buttons to be selected unless they have a name
	if(isRadio&&!element.name)ko.bindingHandlers['uniqueName']['init'](element,function(){return true;});// Set up two computeds to update the binding:
	// The first responds to changes in the checkedValue value and to element clicks
	ko.computed(updateModel,null,{disposeWhenNodeIsRemoved:element});ko.utils.registerEventHandler(element,"click",updateModel);// The second responds to changes in the model value (the one associated with the checked binding)
	ko.computed(updateView,null,{disposeWhenNodeIsRemoved:element});rawValue=undefined;}};ko.expressionRewriting.twoWayBindings['checked']=true;ko.bindingHandlers['checkedValue']={'update':function update(element,valueAccessor){element.value=ko.utils.unwrapObservable(valueAccessor());}};})();var classesWrittenByBindingKey='__ko__cssValue';ko.bindingHandlers['css']={'update':function update(element,valueAccessor){var value=ko.utils.unwrapObservable(valueAccessor());if(value!==null&&(typeof value==='undefined'?'undefined':_typeof(value))=="object"){ko.utils.objectForEach(value,function(className,shouldHaveClass){shouldHaveClass=ko.utils.unwrapObservable(shouldHaveClass);ko.utils.toggleDomNodeCssClass(element,className,shouldHaveClass);});}else{value=ko.utils.stringTrim(String(value||''));// Make sure we don't try to store or set a non-string value
	ko.utils.toggleDomNodeCssClass(element,element[classesWrittenByBindingKey],false);element[classesWrittenByBindingKey]=value;ko.utils.toggleDomNodeCssClass(element,value,true);}}};ko.bindingHandlers['enable']={'update':function update(element,valueAccessor){var value=ko.utils.unwrapObservable(valueAccessor());if(value&&element.disabled)element.removeAttribute("disabled");else if(!value&&!element.disabled)element.disabled=true;}};ko.bindingHandlers['disable']={'update':function update(element,valueAccessor){ko.bindingHandlers['enable']['update'](element,function(){return!ko.utils.unwrapObservable(valueAccessor());});}};// For certain common events (currently just 'click'), allow a simplified data-binding syntax
	// e.g. click:handler instead of the usual full-length event:{click:handler}
	function makeEventHandlerShortcut(eventName){ko.bindingHandlers[eventName]={'init':function init(element,valueAccessor,allBindings,viewModel,bindingContext){var newValueAccessor=function newValueAccessor(){var result={};result[eventName]=valueAccessor();return result;};return ko.bindingHandlers['event']['init'].call(this,element,newValueAccessor,allBindings,viewModel,bindingContext);}};}ko.bindingHandlers['event']={'init':function init(element,valueAccessor,allBindings,viewModel,bindingContext){var eventsToHandle=valueAccessor()||{};ko.utils.objectForEach(eventsToHandle,function(eventName){if(typeof eventName=="string"){ko.utils.registerEventHandler(element,eventName,function(event){var handlerReturnValue;var handlerFunction=valueAccessor()[eventName];if(!handlerFunction)return;try{// Take all the event args, and prefix with the viewmodel
	var argsForHandler=ko.utils.makeArray(arguments);viewModel=bindingContext['$data'];argsForHandler.unshift(viewModel);handlerReturnValue=handlerFunction.apply(viewModel,argsForHandler);}finally{if(handlerReturnValue!==true){// Normally we want to prevent default action. Developer can override this be explicitly returning true.
	if(event.preventDefault)event.preventDefault();else event.returnValue=false;}}var bubble=allBindings.get(eventName+'Bubble')!==false;if(!bubble){event.cancelBubble=true;if(event.stopPropagation)event.stopPropagation();}});}});}};// "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
	// "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"
	ko.bindingHandlers['foreach']={makeTemplateValueAccessor:function makeTemplateValueAccessor(valueAccessor){return function(){var modelValue=valueAccessor(),unwrappedValue=ko.utils.peekObservable(modelValue);// Unwrap without setting a dependency here
	// If unwrappedValue is the array, pass in the wrapped value on its own
	// The value will be unwrapped and tracked within the template binding
	// (See https://github.com/SteveSanderson/knockout/issues/523)
	if(!unwrappedValue||typeof unwrappedValue.length=="number")return{'foreach':modelValue,'templateEngine':ko.nativeTemplateEngine.instance};// If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
	ko.utils.unwrapObservable(modelValue);return{'foreach':unwrappedValue['data'],'as':unwrappedValue['as'],'includeDestroyed':unwrappedValue['includeDestroyed'],'afterAdd':unwrappedValue['afterAdd'],'beforeRemove':unwrappedValue['beforeRemove'],'afterRender':unwrappedValue['afterRender'],'beforeMove':unwrappedValue['beforeMove'],'afterMove':unwrappedValue['afterMove'],'templateEngine':ko.nativeTemplateEngine.instance};};},'init':function init(element,valueAccessor,allBindings,viewModel,bindingContext){return ko.bindingHandlers['template']['init'](element,ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));},'update':function update(element,valueAccessor,allBindings,viewModel,bindingContext){return ko.bindingHandlers['template']['update'](element,ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor),allBindings,viewModel,bindingContext);}};ko.expressionRewriting.bindingRewriteValidators['foreach']=false;// Can't rewrite control flow bindings
	ko.virtualElements.allowedBindings['foreach']=true;var hasfocusUpdatingProperty='__ko_hasfocusUpdating';var hasfocusLastValue='__ko_hasfocusLastValue';ko.bindingHandlers['hasfocus']={'init':function init(element,valueAccessor,allBindings){var handleElementFocusChange=function handleElementFocusChange(isFocused){// Where possible, ignore which event was raised and determine focus state using activeElement,
	// as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
	// However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
	// prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
	// from calling 'blur()' on the element when it loses focus.
	// Discussion at https://github.com/SteveSanderson/knockout/pull/352
	element[hasfocusUpdatingProperty]=true;var ownerDoc=element.ownerDocument;if("activeElement"in ownerDoc){var active;try{active=ownerDoc.activeElement;}catch(e){// IE9 throws if you access activeElement during page load (see issue #703)
	active=ownerDoc.body;}isFocused=active===element;}var modelValue=valueAccessor();ko.expressionRewriting.writeValueToProperty(modelValue,allBindings,'hasfocus',isFocused,true);//cache the latest value, so we can avoid unnecessarily calling focus/blur in the update function
	element[hasfocusLastValue]=isFocused;element[hasfocusUpdatingProperty]=false;};var handleElementFocusIn=handleElementFocusChange.bind(null,true);var handleElementFocusOut=handleElementFocusChange.bind(null,false);ko.utils.registerEventHandler(element,"focus",handleElementFocusIn);ko.utils.registerEventHandler(element,"focusin",handleElementFocusIn);// For IE
	ko.utils.registerEventHandler(element,"blur",handleElementFocusOut);ko.utils.registerEventHandler(element,"focusout",handleElementFocusOut);// For IE
	},'update':function update(element,valueAccessor){var value=!!ko.utils.unwrapObservable(valueAccessor());if(!element[hasfocusUpdatingProperty]&&element[hasfocusLastValue]!==value){value?element.focus():element.blur();// In IE, the blur method doesn't always cause the element to lose focus (for example, if the window is not in focus).
	// Setting focus to the body element does seem to be reliable in IE, but should only be used if we know that the current
	// element was focused already.
	if(!value&&element[hasfocusLastValue]){element.ownerDocument.body.focus();}// For IE, which doesn't reliably fire "focus" or "blur" events synchronously
	ko.dependencyDetection.ignore(ko.utils.triggerEvent,null,[element,value?"focusin":"focusout"]);}}};ko.expressionRewriting.twoWayBindings['hasfocus']=true;ko.bindingHandlers['hasFocus']=ko.bindingHandlers['hasfocus'];// Make "hasFocus" an alias
	ko.expressionRewriting.twoWayBindings['hasFocus']=true;ko.bindingHandlers['html']={'init':function init(){// Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
	return{'controlsDescendantBindings':true};},'update':function update(element,valueAccessor){// setHtml will unwrap the value if needed
	ko.utils.setHtml(element,valueAccessor());}};// Makes a binding like with or if
	function makeWithIfBinding(bindingKey,isWith,isNot,makeContextCallback){ko.bindingHandlers[bindingKey]={'init':function init(element,valueAccessor,allBindings,viewModel,bindingContext){var didDisplayOnLastUpdate,savedNodes;ko.computed(function(){var dataValue=ko.utils.unwrapObservable(valueAccessor()),shouldDisplay=!isNot!==!dataValue,// equivalent to isNot ? !dataValue : !!dataValue
	isFirstRender=!savedNodes,needsRefresh=isFirstRender||isWith||shouldDisplay!==didDisplayOnLastUpdate;if(needsRefresh){// Save a copy of the inner nodes on the initial update, but only if we have dependencies.
	if(isFirstRender&&ko.computedContext.getDependenciesCount()){savedNodes=ko.utils.cloneNodes(ko.virtualElements.childNodes(element),true/* shouldCleanNodes */);}if(shouldDisplay){if(!isFirstRender){ko.virtualElements.setDomNodeChildren(element,ko.utils.cloneNodes(savedNodes));}ko.applyBindingsToDescendants(makeContextCallback?makeContextCallback(bindingContext,dataValue):bindingContext,element);}else{ko.virtualElements.emptyNode(element);}didDisplayOnLastUpdate=shouldDisplay;}},null,{disposeWhenNodeIsRemoved:element});return{'controlsDescendantBindings':true};}};ko.expressionRewriting.bindingRewriteValidators[bindingKey]=false;// Can't rewrite control flow bindings
	ko.virtualElements.allowedBindings[bindingKey]=true;}// Construct the actual binding handlers
	makeWithIfBinding('if');makeWithIfBinding('ifnot',false/* isWith */,true/* isNot */);makeWithIfBinding('with',true/* isWith */,false/* isNot */,function(bindingContext,dataValue){return bindingContext['createChildContext'](dataValue);});var captionPlaceholder={};ko.bindingHandlers['options']={'init':function init(element){if(ko.utils.tagNameLower(element)!=="select")throw new Error("options binding applies only to SELECT elements");// Remove all existing <option>s.
	while(element.length>0){element.remove(0);}// Ensures that the binding processor doesn't try to bind the options
	return{'controlsDescendantBindings':true};},'update':function update(element,valueAccessor,allBindings){function selectedOptions(){return ko.utils.arrayFilter(element.options,function(node){return node.selected;});}var selectWasPreviouslyEmpty=element.length==0,multiple=element.multiple,previousScrollTop=!selectWasPreviouslyEmpty&&multiple?element.scrollTop:null,unwrappedArray=ko.utils.unwrapObservable(valueAccessor()),valueAllowUnset=allBindings.get('valueAllowUnset')&&allBindings['has']('value'),includeDestroyed=allBindings.get('optionsIncludeDestroyed'),arrayToDomNodeChildrenOptions={},captionValue,filteredArray,previousSelectedValues=[];if(!valueAllowUnset){if(multiple){previousSelectedValues=ko.utils.arrayMap(selectedOptions(),ko.selectExtensions.readValue);}else if(element.selectedIndex>=0){previousSelectedValues.push(ko.selectExtensions.readValue(element.options[element.selectedIndex]));}}if(unwrappedArray){if(typeof unwrappedArray.length=="undefined")// Coerce single value into array
	unwrappedArray=[unwrappedArray];// Filter out any entries marked as destroyed
	filteredArray=ko.utils.arrayFilter(unwrappedArray,function(item){return includeDestroyed||item===undefined||item===null||!ko.utils.unwrapObservable(item['_destroy']);});// If caption is included, add it to the array
	if(allBindings['has']('optionsCaption')){captionValue=ko.utils.unwrapObservable(allBindings.get('optionsCaption'));// If caption value is null or undefined, don't show a caption
	if(captionValue!==null&&captionValue!==undefined){filteredArray.unshift(captionPlaceholder);}}}else{// If a falsy value is provided (e.g. null), we'll simply empty the select element
	}function applyToObject(object,predicate,defaultValue){var predicateType=typeof predicate==='undefined'?'undefined':_typeof(predicate);if(predicateType=="function")// Given a function; run it against the data value
	return predicate(object);else if(predicateType=="string")// Given a string; treat it as a property name on the data value
	return object[predicate];else// Given no optionsText arg; use the data value itself
	return defaultValue;}// The following functions can run at two different times:
	// The first is when the whole array is being updated directly from this binding handler.
	// The second is when an observable value for a specific array entry is updated.
	// oldOptions will be empty in the first case, but will be filled with the previously generated option in the second.
	var itemUpdate=false;function optionForArrayItem(arrayEntry,index,oldOptions){if(oldOptions.length){previousSelectedValues=!valueAllowUnset&&oldOptions[0].selected?[ko.selectExtensions.readValue(oldOptions[0])]:[];itemUpdate=true;}var option=element.ownerDocument.createElement("option");if(arrayEntry===captionPlaceholder){ko.utils.setTextContent(option,allBindings.get('optionsCaption'));ko.selectExtensions.writeValue(option,undefined);}else{// Apply a value to the option element
	var optionValue=applyToObject(arrayEntry,allBindings.get('optionsValue'),arrayEntry);ko.selectExtensions.writeValue(option,ko.utils.unwrapObservable(optionValue));// Apply some text to the option element
	var optionText=applyToObject(arrayEntry,allBindings.get('optionsText'),optionValue);ko.utils.setTextContent(option,optionText);}return[option];}// By using a beforeRemove callback, we delay the removal until after new items are added. This fixes a selection
	// problem in IE<=8 and Firefox. See https://github.com/knockout/knockout/issues/1208
	arrayToDomNodeChildrenOptions['beforeRemove']=function(option){element.removeChild(option);};function setSelectionCallback(arrayEntry,newOptions){if(itemUpdate&&valueAllowUnset){// The model value is authoritative, so make sure its value is the one selected
	// There is no need to use dependencyDetection.ignore since setDomNodeChildrenFromArrayMapping does so already.
	ko.selectExtensions.writeValue(element,ko.utils.unwrapObservable(allBindings.get('value')),true/* allowUnset */);}else if(previousSelectedValues.length){// IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
	// That's why we first added them without selection. Now it's time to set the selection.
	var isSelected=ko.utils.arrayIndexOf(previousSelectedValues,ko.selectExtensions.readValue(newOptions[0]))>=0;ko.utils.setOptionNodeSelectionState(newOptions[0],isSelected);// If this option was changed from being selected during a single-item update, notify the change
	if(itemUpdate&&!isSelected){ko.dependencyDetection.ignore(ko.utils.triggerEvent,null,[element,"change"]);}}}var callback=setSelectionCallback;if(allBindings['has']('optionsAfterRender')&&typeof allBindings.get('optionsAfterRender')=="function"){callback=function callback(arrayEntry,newOptions){setSelectionCallback(arrayEntry,newOptions);ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'),null,[newOptions[0],arrayEntry!==captionPlaceholder?arrayEntry:undefined]);};}ko.utils.setDomNodeChildrenFromArrayMapping(element,filteredArray,optionForArrayItem,arrayToDomNodeChildrenOptions,callback);ko.dependencyDetection.ignore(function(){if(valueAllowUnset){// The model value is authoritative, so make sure its value is the one selected
	ko.selectExtensions.writeValue(element,ko.utils.unwrapObservable(allBindings.get('value')),true/* allowUnset */);}else{// Determine if the selection has changed as a result of updating the options list
	var selectionChanged;if(multiple){// For a multiple-select box, compare the new selection count to the previous one
	// But if nothing was selected before, the selection can't have changed
	selectionChanged=previousSelectedValues.length&&selectedOptions().length<previousSelectedValues.length;}else{// For a single-select box, compare the current value to the previous value
	// But if nothing was selected before or nothing is selected now, just look for a change in selection
	selectionChanged=previousSelectedValues.length&&element.selectedIndex>=0?ko.selectExtensions.readValue(element.options[element.selectedIndex])!==previousSelectedValues[0]:previousSelectedValues.length||element.selectedIndex>=0;}// Ensure consistency between model value and selected option.
	// If the dropdown was changed so that selection is no longer the same,
	// notify the value or selectedOptions binding.
	if(selectionChanged){ko.utils.triggerEvent(element,"change");}}});// Workaround for IE bug
	ko.utils.ensureSelectElementIsRenderedCorrectly(element);if(previousScrollTop&&Math.abs(previousScrollTop-element.scrollTop)>20)element.scrollTop=previousScrollTop;}};ko.bindingHandlers['options'].optionValueDomDataKey=ko.utils.domData.nextKey();ko.bindingHandlers['selectedOptions']={'after':['options','foreach'],'init':function init(element,valueAccessor,allBindings){ko.utils.registerEventHandler(element,"change",function(){var value=valueAccessor(),valueToWrite=[];ko.utils.arrayForEach(element.getElementsByTagName("option"),function(node){if(node.selected)valueToWrite.push(ko.selectExtensions.readValue(node));});ko.expressionRewriting.writeValueToProperty(value,allBindings,'selectedOptions',valueToWrite);});},'update':function update(element,valueAccessor){if(ko.utils.tagNameLower(element)!="select")throw new Error("values binding applies only to SELECT elements");var newValue=ko.utils.unwrapObservable(valueAccessor()),previousScrollTop=element.scrollTop;if(newValue&&typeof newValue.length=="number"){ko.utils.arrayForEach(element.getElementsByTagName("option"),function(node){var isSelected=ko.utils.arrayIndexOf(newValue,ko.selectExtensions.readValue(node))>=0;if(node.selected!=isSelected){// This check prevents flashing of the select element in IE
	ko.utils.setOptionNodeSelectionState(node,isSelected);}});}element.scrollTop=previousScrollTop;}};ko.expressionRewriting.twoWayBindings['selectedOptions']=true;ko.bindingHandlers['style']={'update':function update(element,valueAccessor){var value=ko.utils.unwrapObservable(valueAccessor()||{});ko.utils.objectForEach(value,function(styleName,styleValue){styleValue=ko.utils.unwrapObservable(styleValue);if(styleValue===null||styleValue===undefined||styleValue===false){// Empty string removes the value, whereas null/undefined have no effect
	styleValue="";}element.style[styleName]=styleValue;});}};ko.bindingHandlers['submit']={'init':function init(element,valueAccessor,allBindings,viewModel,bindingContext){if(typeof valueAccessor()!="function")throw new Error("The value for a submit binding must be a function");ko.utils.registerEventHandler(element,"submit",function(event){var handlerReturnValue;var value=valueAccessor();try{handlerReturnValue=value.call(bindingContext['$data'],element);}finally{if(handlerReturnValue!==true){// Normally we want to prevent default action. Developer can override this be explicitly returning true.
	if(event.preventDefault)event.preventDefault();else event.returnValue=false;}}});}};ko.bindingHandlers['text']={'init':function init(){// Prevent binding on the dynamically-injected text node (as developers are unlikely to expect that, and it has security implications).
	// It should also make things faster, as we no longer have to consider whether the text node might be bindable.
	return{'controlsDescendantBindings':true};},'update':function update(element,valueAccessor){ko.utils.setTextContent(element,valueAccessor());}};ko.virtualElements.allowedBindings['text']=true;(function(){if(window&&window.navigator){var parseVersion=function parseVersion(matches){if(matches){return parseFloat(matches[1]);}};// Detect various browser versions because some old versions don't fully support the 'input' event
	var operaVersion=window.opera&&window.opera.version&&parseInt(window.opera.version()),userAgent=window.navigator.userAgent,safariVersion=parseVersion(userAgent.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),firefoxVersion=parseVersion(userAgent.match(/Firefox\/([^ ]*)/));}// IE 8 and 9 have bugs that prevent the normal events from firing when the value changes.
	// But it does fire the 'selectionchange' event on many of those, presumably because the
	// cursor is moving and that counts as the selection changing. The 'selectionchange' event is
	// fired at the document level only and doesn't directly indicate which element changed. We
	// set up just one event handler for the document and use 'activeElement' to determine which
	// element was changed.
	if(ko.utils.ieVersion<10){var selectionChangeRegisteredName=ko.utils.domData.nextKey(),selectionChangeHandlerName=ko.utils.domData.nextKey();var selectionChangeHandler=function selectionChangeHandler(event){var target=this.activeElement,handler=target&&ko.utils.domData.get(target,selectionChangeHandlerName);if(handler){handler(event);}};var registerForSelectionChangeEvent=function registerForSelectionChangeEvent(element,handler){var ownerDoc=element.ownerDocument;if(!ko.utils.domData.get(ownerDoc,selectionChangeRegisteredName)){ko.utils.domData.set(ownerDoc,selectionChangeRegisteredName,true);ko.utils.registerEventHandler(ownerDoc,'selectionchange',selectionChangeHandler);}ko.utils.domData.set(element,selectionChangeHandlerName,handler);};}ko.bindingHandlers['textInput']={'init':function init(element,valueAccessor,allBindings){var previousElementValue=element.value,timeoutHandle,elementValueBeforeEvent;var updateModel=function updateModel(event){clearTimeout(timeoutHandle);elementValueBeforeEvent=timeoutHandle=undefined;var elementValue=element.value;if(previousElementValue!==elementValue){// Provide a way for tests to know exactly which event was processed
	if(DEBUG&&event)element['_ko_textInputProcessedEvent']=event.type;previousElementValue=elementValue;ko.expressionRewriting.writeValueToProperty(valueAccessor(),allBindings,'textInput',elementValue);}};var deferUpdateModel=function deferUpdateModel(event){if(!timeoutHandle){// The elementValueBeforeEvent variable is set *only* during the brief gap between an
	// event firing and the updateModel function running. This allows us to ignore model
	// updates that are from the previous state of the element, usually due to techniques
	// such as rateLimit. Such updates, if not ignored, can cause keystrokes to be lost.
	elementValueBeforeEvent=element.value;var handler=DEBUG?updateModel.bind(element,{type:event.type}):updateModel;timeoutHandle=ko.utils.setTimeout(handler,4);}};// IE9 will mess up the DOM if you handle events synchronously which results in DOM changes (such as other bindings);
	// so we'll make sure all updates are asynchronous
	var ieUpdateModel=ko.utils.ieVersion==9?deferUpdateModel:updateModel;var updateView=function updateView(){var modelValue=ko.utils.unwrapObservable(valueAccessor());if(modelValue===null||modelValue===undefined){modelValue='';}if(elementValueBeforeEvent!==undefined&&modelValue===elementValueBeforeEvent){ko.utils.setTimeout(updateView,4);return;}// Update the element only if the element and model are different. On some browsers, updating the value
	// will move the cursor to the end of the input, which would be bad while the user is typing.
	if(element.value!==modelValue){previousElementValue=modelValue;// Make sure we ignore events (propertychange) that result from updating the value
	element.value=modelValue;}};var onEvent=function onEvent(event,handler){ko.utils.registerEventHandler(element,event,handler);};if(DEBUG&&ko.bindingHandlers['textInput']['_forceUpdateOn']){// Provide a way for tests to specify exactly which events are bound
	ko.utils.arrayForEach(ko.bindingHandlers['textInput']['_forceUpdateOn'],function(eventName){if(eventName.slice(0,5)=='after'){onEvent(eventName.slice(5),deferUpdateModel);}else{onEvent(eventName,updateModel);}});}else{if(ko.utils.ieVersion<10){// Internet Explorer <= 8 doesn't support the 'input' event, but does include 'propertychange' that fires whenever
	// any property of an element changes. Unlike 'input', it also fires if a property is changed from JavaScript code,
	// but that's an acceptable compromise for this binding. IE 9 does support 'input', but since it doesn't fire it
	// when using autocomplete, we'll use 'propertychange' for it also.
	onEvent('propertychange',function(event){if(event.propertyName==='value'){ieUpdateModel(event);}});if(ko.utils.ieVersion==8){// IE 8 has a bug where it fails to fire 'propertychange' on the first update following a value change from
	// JavaScript code. It also doesn't fire if you clear the entire value. To fix this, we bind to the following
	// events too.
	onEvent('keyup',updateModel);// A single keystoke
	onEvent('keydown',updateModel);// The first character when a key is held down
	}if(ko.utils.ieVersion>=8){// Internet Explorer 9 doesn't fire the 'input' event when deleting text, including using
	// the backspace, delete, or ctrl-x keys, clicking the 'x' to clear the input, dragging text
	// out of the field, and cutting or deleting text using the context menu. 'selectionchange'
	// can detect all of those except dragging text out of the field, for which we use 'dragend'.
	// These are also needed in IE8 because of the bug described above.
	registerForSelectionChangeEvent(element,ieUpdateModel);// 'selectionchange' covers cut, paste, drop, delete, etc.
	onEvent('dragend',deferUpdateModel);}}else{// All other supported browsers support the 'input' event, which fires whenever the content of the element is changed
	// through the user interface.
	onEvent('input',updateModel);if(safariVersion<5&&ko.utils.tagNameLower(element)==="textarea"){// Safari <5 doesn't fire the 'input' event for <textarea> elements (it does fire 'textInput'
	// but only when typing). So we'll just catch as much as we can with keydown, cut, and paste.
	onEvent('keydown',deferUpdateModel);onEvent('paste',deferUpdateModel);onEvent('cut',deferUpdateModel);}else if(operaVersion<11){// Opera 10 doesn't always fire the 'input' event for cut, paste, undo & drop operations.
	// We can try to catch some of those using 'keydown'.
	onEvent('keydown',deferUpdateModel);}else if(firefoxVersion<4.0){// Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
	onEvent('DOMAutoComplete',updateModel);// Firefox <=3.5 doesn't fire the 'input' event when text is dropped into the input.
	onEvent('dragdrop',updateModel);// <3.5
	onEvent('drop',updateModel);// 3.5
	}}}// Bind to the change event so that we can catch programmatic updates of the value that fire this event.
	onEvent('change',updateModel);ko.computed(updateView,null,{disposeWhenNodeIsRemoved:element});}};ko.expressionRewriting.twoWayBindings['textInput']=true;// textinput is an alias for textInput
	ko.bindingHandlers['textinput']={// preprocess is the only way to set up a full alias
	'preprocess':function preprocess(value,name,addBinding){addBinding('textInput',value);}};})();ko.bindingHandlers['uniqueName']={'init':function init(element,valueAccessor){if(valueAccessor()){var name="ko_unique_"+ ++ko.bindingHandlers['uniqueName'].currentIndex;ko.utils.setElementName(element,name);}}};ko.bindingHandlers['uniqueName'].currentIndex=0;ko.bindingHandlers['value']={'after':['options','foreach'],'init':function init(element,valueAccessor,allBindings){// If the value binding is placed on a radio/checkbox, then just pass through to checkedValue and quit
	if(element.tagName.toLowerCase()=="input"&&(element.type=="checkbox"||element.type=="radio")){ko.applyBindingAccessorsToNode(element,{'checkedValue':valueAccessor});return;}// Always catch "change" event; possibly other events too if asked
	var eventsToCatch=["change"];var requestedEventsToCatch=allBindings.get("valueUpdate");var propertyChangedFired=false;var elementValueBeforeEvent=null;if(requestedEventsToCatch){if(typeof requestedEventsToCatch=="string")// Allow both individual event names, and arrays of event names
	requestedEventsToCatch=[requestedEventsToCatch];ko.utils.arrayPushAll(eventsToCatch,requestedEventsToCatch);eventsToCatch=ko.utils.arrayGetDistinctValues(eventsToCatch);}var valueUpdateHandler=function valueUpdateHandler(){elementValueBeforeEvent=null;propertyChangedFired=false;var modelValue=valueAccessor();var elementValue=ko.selectExtensions.readValue(element);ko.expressionRewriting.writeValueToProperty(modelValue,allBindings,'value',elementValue);};// Workaround for https://github.com/SteveSanderson/knockout/issues/122
	// IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list
	var ieAutoCompleteHackNeeded=ko.utils.ieVersion&&element.tagName.toLowerCase()=="input"&&element.type=="text"&&element.autocomplete!="off"&&(!element.form||element.form.autocomplete!="off");if(ieAutoCompleteHackNeeded&&ko.utils.arrayIndexOf(eventsToCatch,"propertychange")==-1){ko.utils.registerEventHandler(element,"propertychange",function(){propertyChangedFired=true;});ko.utils.registerEventHandler(element,"focus",function(){propertyChangedFired=false;});ko.utils.registerEventHandler(element,"blur",function(){if(propertyChangedFired){valueUpdateHandler();}});}ko.utils.arrayForEach(eventsToCatch,function(eventName){// The syntax "after<eventname>" means "run the handler asynchronously after the event"
	// This is useful, for example, to catch "keydown" events after the browser has updated the control
	// (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
	var handler=valueUpdateHandler;if(ko.utils.stringStartsWith(eventName,"after")){handler=function handler(){// The elementValueBeforeEvent variable is non-null *only* during the brief gap between
	// a keyX event firing and the valueUpdateHandler running, which is scheduled to happen
	// at the earliest asynchronous opportunity. We store this temporary information so that
	// if, between keyX and valueUpdateHandler, the underlying model value changes separately,
	// we can overwrite that model value change with the value the user just typed. Otherwise,
	// techniques like rateLimit can trigger model changes at critical moments that will
	// override the user's inputs, causing keystrokes to be lost.
	elementValueBeforeEvent=ko.selectExtensions.readValue(element);ko.utils.setTimeout(valueUpdateHandler,0);};eventName=eventName.substring("after".length);}ko.utils.registerEventHandler(element,eventName,handler);});var updateFromModel=function updateFromModel(){var newValue=ko.utils.unwrapObservable(valueAccessor());var elementValue=ko.selectExtensions.readValue(element);if(elementValueBeforeEvent!==null&&newValue===elementValueBeforeEvent){ko.utils.setTimeout(updateFromModel,0);return;}var valueHasChanged=newValue!==elementValue;if(valueHasChanged){if(ko.utils.tagNameLower(element)==="select"){var allowUnset=allBindings.get('valueAllowUnset');var applyValueAction=function applyValueAction(){ko.selectExtensions.writeValue(element,newValue,allowUnset);};applyValueAction();if(!allowUnset&&newValue!==ko.selectExtensions.readValue(element)){// If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
	// because you're not allowed to have a model value that disagrees with a visible UI selection.
	ko.dependencyDetection.ignore(ko.utils.triggerEvent,null,[element,"change"]);}else{// Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
	// right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
	// to apply the value as well.
	ko.utils.setTimeout(applyValueAction,0);}}else{ko.selectExtensions.writeValue(element,newValue);}}};ko.computed(updateFromModel,null,{disposeWhenNodeIsRemoved:element});},'update':function update(){}// Keep for backwards compatibility with code that may have wrapped value binding
	};ko.expressionRewriting.twoWayBindings['value']=true;ko.bindingHandlers['visible']={'update':function update(element,valueAccessor){var value=ko.utils.unwrapObservable(valueAccessor());var isCurrentlyVisible=!(element.style.display=="none");if(value&&!isCurrentlyVisible)element.style.display="";else if(!value&&isCurrentlyVisible)element.style.display="none";}};// 'click' is just a shorthand for the usual full-length event:{click:handler}
	makeEventHandlerShortcut('click');// If you want to make a custom template engine,
	//
	// [1] Inherit from this class (like ko.nativeTemplateEngine does)
	// [2] Override 'renderTemplateSource', supplying a function with this signature:
	//
	//        function (templateSource, bindingContext, options) {
	//            // - templateSource.text() is the text of the template you should render
	//            // - bindingContext.$data is the data you should pass into the template
	//            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
	//            //     and bindingContext.$root available in the template too
	//            // - options gives you access to any other properties set on "data-bind: { template: options }"
	//            // - templateDocument is the document object of the template
	//            //
	//            // Return value: an array of DOM nodes
	//        }
	//
	// [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
	//
	//        function (script) {
	//            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
	//            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
	//        }
	//
	//     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
	//     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
	//     and then you don't need to override 'createJavaScriptEvaluatorBlock'.
	ko.templateEngine=function(){};ko.templateEngine.prototype['renderTemplateSource']=function(templateSource,bindingContext,options,templateDocument){throw new Error("Override renderTemplateSource");};ko.templateEngine.prototype['createJavaScriptEvaluatorBlock']=function(script){throw new Error("Override createJavaScriptEvaluatorBlock");};ko.templateEngine.prototype['makeTemplateSource']=function(template,templateDocument){// Named template
	if(typeof template=="string"){templateDocument=templateDocument||document;var elem=templateDocument.getElementById(template);if(!elem)throw new Error("Cannot find template with ID "+template);return new ko.templateSources.domElement(elem);}else if(template.nodeType==1||template.nodeType==8){// Anonymous template
	return new ko.templateSources.anonymousTemplate(template);}else throw new Error("Unknown template type: "+template);};ko.templateEngine.prototype['renderTemplate']=function(template,bindingContext,options,templateDocument){var templateSource=this['makeTemplateSource'](template,templateDocument);return this['renderTemplateSource'](templateSource,bindingContext,options,templateDocument);};ko.templateEngine.prototype['isTemplateRewritten']=function(template,templateDocument){// Skip rewriting if requested
	if(this['allowTemplateRewriting']===false)return true;return this['makeTemplateSource'](template,templateDocument)['data']("isRewritten");};ko.templateEngine.prototype['rewriteTemplate']=function(template,rewriterCallback,templateDocument){var templateSource=this['makeTemplateSource'](template,templateDocument);var rewritten=rewriterCallback(templateSource['text']());templateSource['text'](rewritten);templateSource['data']("isRewritten",true);};ko.exportSymbol('templateEngine',ko.templateEngine);ko.templateRewriting=function(){var memoizeDataBindingAttributeSyntaxRegex=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;var memoizeVirtualContainerBindingSyntaxRegex=/<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;function validateDataBindValuesForRewriting(keyValueArray){var allValidators=ko.expressionRewriting.bindingRewriteValidators;for(var i=0;i<keyValueArray.length;i++){var key=keyValueArray[i]['key'];if(allValidators.hasOwnProperty(key)){var validator=allValidators[key];if(typeof validator==="function"){var possibleErrorMessage=validator(keyValueArray[i]['value']);if(possibleErrorMessage)throw new Error(possibleErrorMessage);}else if(!validator){throw new Error("This template engine does not support the '"+key+"' binding within its templates");}}}}function constructMemoizedTagReplacement(dataBindAttributeValue,tagToRetain,nodeName,templateEngine){var dataBindKeyValueArray=ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);validateDataBindValuesForRewriting(dataBindKeyValueArray);var rewrittenDataBindAttributeValue=ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray,{'valueAccessors':true});// For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
	// anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
	// extra indirection.
	var applyBindingsToNextSiblingScript="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+rewrittenDataBindAttributeValue+" } })()},'"+nodeName.toLowerCase()+"')";return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript)+tagToRetain;}return{ensureTemplateIsRewritten:function ensureTemplateIsRewritten(template,templateEngine,templateDocument){if(!templateEngine['isTemplateRewritten'](template,templateDocument))templateEngine['rewriteTemplate'](template,function(htmlString){return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString,templateEngine);},templateDocument);},memoizeBindingAttributeSyntax:function memoizeBindingAttributeSyntax(htmlString,templateEngine){return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex,function(){return constructMemoizedTagReplacement(/* dataBindAttributeValue: */arguments[4],/* tagToRetain: */arguments[1],/* nodeName: */arguments[2],templateEngine);}).replace(memoizeVirtualContainerBindingSyntaxRegex,function(){return constructMemoizedTagReplacement(/* dataBindAttributeValue: */arguments[1],/* tagToRetain: */"<!-- ko -->",/* nodeName: */"#comment",templateEngine);});},applyMemoizedBindingsToNextSibling:function applyMemoizedBindingsToNextSibling(bindings,nodeName){return ko.memoization.memoize(function(domNode,bindingContext){var nodeToBind=domNode.nextSibling;if(nodeToBind&&nodeToBind.nodeName.toLowerCase()===nodeName){ko.applyBindingAccessorsToNode(nodeToBind,bindings,bindingContext);}});}};}();// Exported only because it has to be referenced by string lookup from within rewritten template
	ko.exportSymbol('__tr_ambtns',ko.templateRewriting.applyMemoizedBindingsToNextSibling);(function(){// A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
	// logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
	//
	// Two are provided by default:
	//  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
	//  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
	//                                           without reading/writing the actual element text content, since it will be overwritten
	//                                           with the rendered template output.
	// You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
	// Template sources need to have the following functions:
	//   text() 			- returns the template text from your storage location
	//   text(value)		- writes the supplied template text to your storage location
	//   data(key)			- reads values stored using data(key, value) - see below
	//   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
	//
	// Optionally, template sources can also have the following functions:
	//   nodes()            - returns a DOM element containing the nodes of this template, where available
	//   nodes(value)       - writes the given DOM element to your storage location
	// If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
	// for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
	//
	// Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
	// using and overriding "makeTemplateSource" to return an instance of your custom template source.
	ko.templateSources={};// ---- ko.templateSources.domElement -----
	// template types
	var templateScript=1,templateTextArea=2,templateTemplate=3,templateElement=4;ko.templateSources.domElement=function(element){this.domElement=element;if(element){var tagNameLower=ko.utils.tagNameLower(element);this.templateType=tagNameLower==="script"?templateScript:tagNameLower==="textarea"?templateTextArea:// For browsers with proper <template> element support, where the .content property gives a document fragment
	tagNameLower=="template"&&element.content&&element.content.nodeType===11?templateTemplate:templateElement;}};ko.templateSources.domElement.prototype['text']=function()/* valueToWrite */{var elemContentsProperty=this.templateType===templateScript?"text":this.templateType===templateTextArea?"value":"innerHTML";if(arguments.length==0){return this.domElement[elemContentsProperty];}else{var valueToWrite=arguments[0];if(elemContentsProperty==="innerHTML")ko.utils.setHtml(this.domElement,valueToWrite);else this.domElement[elemContentsProperty]=valueToWrite;}};var dataDomDataPrefix=ko.utils.domData.nextKey()+"_";ko.templateSources.domElement.prototype['data']=function(key/*, valueToWrite */){if(arguments.length===1){return ko.utils.domData.get(this.domElement,dataDomDataPrefix+key);}else{ko.utils.domData.set(this.domElement,dataDomDataPrefix+key,arguments[1]);}};var templatesDomDataKey=ko.utils.domData.nextKey();function getTemplateDomData(element){return ko.utils.domData.get(element,templatesDomDataKey)||{};}function setTemplateDomData(element,data){ko.utils.domData.set(element,templatesDomDataKey,data);}ko.templateSources.domElement.prototype['nodes']=function()/* valueToWrite */{var element=this.domElement;if(arguments.length==0){var templateData=getTemplateDomData(element),containerData=templateData.containerData;return containerData||(this.templateType===templateTemplate?element.content:this.templateType===templateElement?element:undefined);}else{var valueToWrite=arguments[0];setTemplateDomData(element,{containerData:valueToWrite});}};// ---- ko.templateSources.anonymousTemplate -----
	// Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
	// For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
	// Writing to "text" is still supported, but then the template data will not be available as DOM nodes.
	ko.templateSources.anonymousTemplate=function(element){this.domElement=element;};ko.templateSources.anonymousTemplate.prototype=new ko.templateSources.domElement();ko.templateSources.anonymousTemplate.prototype.constructor=ko.templateSources.anonymousTemplate;ko.templateSources.anonymousTemplate.prototype['text']=function()/* valueToWrite */{if(arguments.length==0){var templateData=getTemplateDomData(this.domElement);if(templateData.textData===undefined&&templateData.containerData)templateData.textData=templateData.containerData.innerHTML;return templateData.textData;}else{var valueToWrite=arguments[0];setTemplateDomData(this.domElement,{textData:valueToWrite});}};ko.exportSymbol('templateSources',ko.templateSources);ko.exportSymbol('templateSources.domElement',ko.templateSources.domElement);ko.exportSymbol('templateSources.anonymousTemplate',ko.templateSources.anonymousTemplate);})();(function(){var _templateEngine;ko.setTemplateEngine=function(templateEngine){if(templateEngine!=undefined&&!(templateEngine instanceof ko.templateEngine))throw new Error("templateEngine must inherit from ko.templateEngine");_templateEngine=templateEngine;};function invokeForEachNodeInContinuousRange(firstNode,lastNode,action){var node,nextInQueue=firstNode,firstOutOfRangeNode=ko.virtualElements.nextSibling(lastNode);while(nextInQueue&&(node=nextInQueue)!==firstOutOfRangeNode){nextInQueue=ko.virtualElements.nextSibling(node);action(node,nextInQueue);}}function activateBindingsOnContinuousNodeArray(continuousNodeArray,bindingContext){// To be used on any nodes that have been rendered by a template and have been inserted into some parent element
	// Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
	// the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
	// (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
	// (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)
	if(continuousNodeArray.length){var firstNode=continuousNodeArray[0],lastNode=continuousNodeArray[continuousNodeArray.length-1],parentNode=firstNode.parentNode,provider=ko.bindingProvider['instance'],preprocessNode=provider['preprocessNode'];if(preprocessNode){invokeForEachNodeInContinuousRange(firstNode,lastNode,function(node,nextNodeInRange){var nodePreviousSibling=node.previousSibling;var newNodes=preprocessNode.call(provider,node);if(newNodes){if(node===firstNode)firstNode=newNodes[0]||nextNodeInRange;if(node===lastNode)lastNode=newNodes[newNodes.length-1]||nodePreviousSibling;}});// Because preprocessNode can change the nodes, including the first and last nodes, update continuousNodeArray to match.
	// We need the full set, including inner nodes, because the unmemoize step might remove the first node (and so the real
	// first node needs to be in the array).
	continuousNodeArray.length=0;if(!firstNode){// preprocessNode might have removed all the nodes, in which case there's nothing left to do
	return;}if(firstNode===lastNode){continuousNodeArray.push(firstNode);}else{continuousNodeArray.push(firstNode,lastNode);ko.utils.fixUpContinuousNodeArray(continuousNodeArray,parentNode);}}// Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
	// whereas a regular applyBindings won't introduce new memoized nodes
	invokeForEachNodeInContinuousRange(firstNode,lastNode,function(node){if(node.nodeType===1||node.nodeType===8)ko.applyBindings(bindingContext,node);});invokeForEachNodeInContinuousRange(firstNode,lastNode,function(node){if(node.nodeType===1||node.nodeType===8)ko.memoization.unmemoizeDomNodeAndDescendants(node,[bindingContext]);});// Make sure any changes done by applyBindings or unmemoize are reflected in the array
	ko.utils.fixUpContinuousNodeArray(continuousNodeArray,parentNode);}}function getFirstNodeFromPossibleArray(nodeOrNodeArray){return nodeOrNodeArray.nodeType?nodeOrNodeArray:nodeOrNodeArray.length>0?nodeOrNodeArray[0]:null;}function executeTemplate(targetNodeOrNodeArray,renderMode,template,bindingContext,options){options=options||{};var firstTargetNode=targetNodeOrNodeArray&&getFirstNodeFromPossibleArray(targetNodeOrNodeArray);var templateDocument=(firstTargetNode||template||{}).ownerDocument;var templateEngineToUse=options['templateEngine']||_templateEngine;ko.templateRewriting.ensureTemplateIsRewritten(template,templateEngineToUse,templateDocument);var renderedNodesArray=templateEngineToUse['renderTemplate'](template,bindingContext,options,templateDocument);// Loosely check result is an array of DOM nodes
	if(typeof renderedNodesArray.length!="number"||renderedNodesArray.length>0&&typeof renderedNodesArray[0].nodeType!="number")throw new Error("Template engine must return an array of DOM nodes");var haveAddedNodesToParent=false;switch(renderMode){case"replaceChildren":ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray,renderedNodesArray);haveAddedNodesToParent=true;break;case"replaceNode":ko.utils.replaceDomNodes(targetNodeOrNodeArray,renderedNodesArray);haveAddedNodesToParent=true;break;case"ignoreTargetNode":break;default:throw new Error("Unknown renderMode: "+renderMode);}if(haveAddedNodesToParent){activateBindingsOnContinuousNodeArray(renderedNodesArray,bindingContext);if(options['afterRender'])ko.dependencyDetection.ignore(options['afterRender'],null,[renderedNodesArray,bindingContext['$data']]);}return renderedNodesArray;}function resolveTemplateName(template,data,context){// The template can be specified as:
	if(ko.isObservable(template)){// 1. An observable, with string value
	return template();}else if(typeof template==='function'){// 2. A function of (data, context) returning a string
	return template(data,context);}else{// 3. A string
	return template;}}ko.renderTemplate=function(template,dataOrBindingContext,options,targetNodeOrNodeArray,renderMode){options=options||{};if((options['templateEngine']||_templateEngine)==undefined)throw new Error("Set a template engine before calling renderTemplate");renderMode=renderMode||"replaceChildren";if(targetNodeOrNodeArray){var firstTargetNode=getFirstNodeFromPossibleArray(targetNodeOrNodeArray);var whenToDispose=function whenToDispose(){return!firstTargetNode||!ko.utils.domNodeIsAttachedToDocument(firstTargetNode);};// Passive disposal (on next evaluation)
	var activelyDisposeWhenNodeIsRemoved=firstTargetNode&&renderMode=="replaceNode"?firstTargetNode.parentNode:firstTargetNode;return ko.dependentObservable(// So the DOM is automatically updated when any dependency changes
	function(){// Ensure we've got a proper binding context to work with
	var bindingContext=dataOrBindingContext&&dataOrBindingContext instanceof ko.bindingContext?dataOrBindingContext:new ko.bindingContext(ko.utils.unwrapObservable(dataOrBindingContext));var templateName=resolveTemplateName(template,bindingContext['$data'],bindingContext),renderedNodesArray=executeTemplate(targetNodeOrNodeArray,renderMode,templateName,bindingContext,options);if(renderMode=="replaceNode"){targetNodeOrNodeArray=renderedNodesArray;firstTargetNode=getFirstNodeFromPossibleArray(targetNodeOrNodeArray);}},null,{disposeWhen:whenToDispose,disposeWhenNodeIsRemoved:activelyDisposeWhenNodeIsRemoved});}else{// We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
	return ko.memoization.memoize(function(domNode){ko.renderTemplate(template,dataOrBindingContext,options,domNode,"replaceNode");});}};ko.renderTemplateForEach=function(template,arrayOrObservableArray,options,targetNode,parentBindingContext){// Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
	// activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
	var arrayItemContext;// This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode
	var executeTemplateForArrayItem=function executeTemplateForArrayItem(arrayValue,index){// Support selecting template as a function of the data being rendered
	arrayItemContext=parentBindingContext['createChildContext'](arrayValue,options['as'],function(context){context['$index']=index;});var templateName=resolveTemplateName(template,arrayValue,arrayItemContext);return executeTemplate(null,"ignoreTargetNode",templateName,arrayItemContext,options);};// This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode
	var activateBindingsCallback=function activateBindingsCallback(arrayValue,addedNodesArray,index){activateBindingsOnContinuousNodeArray(addedNodesArray,arrayItemContext);if(options['afterRender'])options['afterRender'](addedNodesArray,arrayValue);// release the "cache" variable, so that it can be collected by
	// the GC when its value isn't used from within the bindings anymore.
	arrayItemContext=null;};return ko.dependentObservable(function(){var unwrappedArray=ko.utils.unwrapObservable(arrayOrObservableArray)||[];if(typeof unwrappedArray.length=="undefined")// Coerce single value into array
	unwrappedArray=[unwrappedArray];// Filter out any entries marked as destroyed
	var filteredArray=ko.utils.arrayFilter(unwrappedArray,function(item){return options['includeDestroyed']||item===undefined||item===null||!ko.utils.unwrapObservable(item['_destroy']);});// Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
	// If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.
	ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping,null,[targetNode,filteredArray,executeTemplateForArrayItem,options,activateBindingsCallback]);},null,{disposeWhenNodeIsRemoved:targetNode});};var templateComputedDomDataKey=ko.utils.domData.nextKey();function disposeOldComputedAndStoreNewOne(element,newComputed){var oldComputed=ko.utils.domData.get(element,templateComputedDomDataKey);if(oldComputed&&typeof oldComputed.dispose=='function')oldComputed.dispose();ko.utils.domData.set(element,templateComputedDomDataKey,newComputed&&newComputed.isActive()?newComputed:undefined);}ko.bindingHandlers['template']={'init':function init(element,valueAccessor){// Support anonymous templates
	var bindingValue=ko.utils.unwrapObservable(valueAccessor());if(typeof bindingValue=="string"||bindingValue['name']){// It's a named template - clear the element
	ko.virtualElements.emptyNode(element);}else if('nodes'in bindingValue){// We've been given an array of DOM nodes. Save them as the template source.
	// There is no known use case for the node array being an observable array (if the output
	// varies, put that behavior *into* your template - that's what templates are for), and
	// the implementation would be a mess, so assert that it's not observable.
	var nodes=bindingValue['nodes']||[];if(ko.isObservable(nodes)){throw new Error('The "nodes" option must be a plain, non-observable array.');}var container=ko.utils.moveCleanedNodesToContainerElement(nodes);// This also removes the nodes from their current parent
	new ko.templateSources.anonymousTemplate(element)['nodes'](container);}else{// It's an anonymous template - store the element contents, then clear the element
	var templateNodes=ko.virtualElements.childNodes(element),container=ko.utils.moveCleanedNodesToContainerElement(templateNodes);// This also removes the nodes from their current parent
	new ko.templateSources.anonymousTemplate(element)['nodes'](container);}return{'controlsDescendantBindings':true};},'update':function update(element,valueAccessor,allBindings,viewModel,bindingContext){var value=valueAccessor(),dataValue,options=ko.utils.unwrapObservable(value),shouldDisplay=true,templateComputed=null,templateName;if(typeof options=="string"){templateName=value;options={};}else{templateName=options['name'];// Support "if"/"ifnot" conditions
	if('if'in options)shouldDisplay=ko.utils.unwrapObservable(options['if']);if(shouldDisplay&&'ifnot'in options)shouldDisplay=!ko.utils.unwrapObservable(options['ifnot']);dataValue=ko.utils.unwrapObservable(options['data']);}if('foreach'in options){// Render once for each data point (treating data set as empty if shouldDisplay==false)
	var dataArray=shouldDisplay&&options['foreach']||[];templateComputed=ko.renderTemplateForEach(templateName||element,dataArray,options,element,bindingContext);}else if(!shouldDisplay){ko.virtualElements.emptyNode(element);}else{// Render once for this single data point (or use the viewModel if no data was provided)
	var innerBindingContext='data'in options?bindingContext['createChildContext'](dataValue,options['as']):// Given an explitit 'data' value, we create a child binding context for it
	bindingContext;// Given no explicit 'data' value, we retain the same binding context
	templateComputed=ko.renderTemplate(templateName||element,innerBindingContext,options,element);}// It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)
	disposeOldComputedAndStoreNewOne(element,templateComputed);}};// Anonymous templates can't be rewritten. Give a nice error message if you try to do it.
	ko.expressionRewriting.bindingRewriteValidators['template']=function(bindingValue){var parsedBindingValue=ko.expressionRewriting.parseObjectLiteral(bindingValue);if(parsedBindingValue.length==1&&parsedBindingValue[0]['unknown'])return null;// It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)
	if(ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue,"name"))return null;// Named templates can be rewritten, so return "no error"
	return"This template engine does not support anonymous templates nested within its templates";};ko.virtualElements.allowedBindings['template']=true;})();ko.exportSymbol('setTemplateEngine',ko.setTemplateEngine);ko.exportSymbol('renderTemplate',ko.renderTemplate);// Go through the items that have been added and deleted and try to find matches between them.
	ko.utils.findMovesInArrayComparison=function(left,right,limitFailedCompares){if(left.length&&right.length){var failedCompares,l,r,leftItem,rightItem;for(failedCompares=l=0;(!limitFailedCompares||failedCompares<limitFailedCompares)&&(leftItem=left[l]);++l){for(r=0;rightItem=right[r];++r){if(leftItem['value']===rightItem['value']){leftItem['moved']=rightItem['index'];rightItem['moved']=leftItem['index'];right.splice(r,1);// This item is marked as moved; so remove it from right list
	failedCompares=r=0;// Reset failed compares count because we're checking for consecutive failures
	break;}}failedCompares+=r;}}};ko.utils.compareArrays=function(){var statusNotInOld='added',statusNotInNew='deleted';// Simple calculation based on Levenshtein distance.
	function compareArrays(oldArray,newArray,options){// For backward compatibility, if the third arg is actually a bool, interpret
	// it as the old parameter 'dontLimitMoves'. Newer code should use { dontLimitMoves: true }.
	options=typeof options==='boolean'?{'dontLimitMoves':options}:options||{};oldArray=oldArray||[];newArray=newArray||[];if(oldArray.length<newArray.length)return compareSmallArrayToBigArray(oldArray,newArray,statusNotInOld,statusNotInNew,options);else return compareSmallArrayToBigArray(newArray,oldArray,statusNotInNew,statusNotInOld,options);}function compareSmallArrayToBigArray(smlArray,bigArray,statusNotInSml,statusNotInBig,options){var myMin=Math.min,myMax=Math.max,editDistanceMatrix=[],smlIndex,smlIndexMax=smlArray.length,bigIndex,bigIndexMax=bigArray.length,compareRange=bigIndexMax-smlIndexMax||1,maxDistance=smlIndexMax+bigIndexMax+1,thisRow,lastRow,bigIndexMaxForRow,bigIndexMinForRow;for(smlIndex=0;smlIndex<=smlIndexMax;smlIndex++){lastRow=thisRow;editDistanceMatrix.push(thisRow=[]);bigIndexMaxForRow=myMin(bigIndexMax,smlIndex+compareRange);bigIndexMinForRow=myMax(0,smlIndex-1);for(bigIndex=bigIndexMinForRow;bigIndex<=bigIndexMaxForRow;bigIndex++){if(!bigIndex)thisRow[bigIndex]=smlIndex+1;else if(!smlIndex)// Top row - transform empty array into new array via additions
	thisRow[bigIndex]=bigIndex+1;else if(smlArray[smlIndex-1]===bigArray[bigIndex-1])thisRow[bigIndex]=lastRow[bigIndex-1];// copy value (no edit)
	else{var northDistance=lastRow[bigIndex]||maxDistance;// not in big (deletion)
	var westDistance=thisRow[bigIndex-1]||maxDistance;// not in small (addition)
	thisRow[bigIndex]=myMin(northDistance,westDistance)+1;}}}var editScript=[],meMinusOne,notInSml=[],notInBig=[];for(smlIndex=smlIndexMax,bigIndex=bigIndexMax;smlIndex||bigIndex;){meMinusOne=editDistanceMatrix[smlIndex][bigIndex]-1;if(bigIndex&&meMinusOne===editDistanceMatrix[smlIndex][bigIndex-1]){notInSml.push(editScript[editScript.length]={// added
	'status':statusNotInSml,'value':bigArray[--bigIndex],'index':bigIndex});}else if(smlIndex&&meMinusOne===editDistanceMatrix[smlIndex-1][bigIndex]){notInBig.push(editScript[editScript.length]={// deleted
	'status':statusNotInBig,'value':smlArray[--smlIndex],'index':smlIndex});}else{--bigIndex;--smlIndex;if(!options['sparse']){editScript.push({'status':"retained",'value':bigArray[bigIndex]});}}}// Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
	// smlIndexMax keeps the time complexity of this algorithm linear.
	ko.utils.findMovesInArrayComparison(notInBig,notInSml,!options['dontLimitMoves']&&smlIndexMax*10);return editScript.reverse();}return compareArrays;}();ko.exportSymbol('utils.compareArrays',ko.utils.compareArrays);(function(){// Objective:
	// * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
	//   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
	// * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
	//   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
	//   previously mapped - retain those nodes, and just insert/delete other ones
	// "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
	// You can use this, for example, to activate bindings on those nodes.
	function mapNodeAndRefreshWhenChanged(containerNode,mapping,valueToMap,callbackAfterAddingNodes,index){// Map this array value inside a dependentObservable so we re-map when any dependency changes
	var mappedNodes=[];var dependentObservable=ko.dependentObservable(function(){var newMappedNodes=mapping(valueToMap,index,ko.utils.fixUpContinuousNodeArray(mappedNodes,containerNode))||[];// On subsequent evaluations, just replace the previously-inserted DOM nodes
	if(mappedNodes.length>0){ko.utils.replaceDomNodes(mappedNodes,newMappedNodes);if(callbackAfterAddingNodes)ko.dependencyDetection.ignore(callbackAfterAddingNodes,null,[valueToMap,newMappedNodes,index]);}// Replace the contents of the mappedNodes array, thereby updating the record
	// of which nodes would be deleted if valueToMap was itself later removed
	mappedNodes.length=0;ko.utils.arrayPushAll(mappedNodes,newMappedNodes);},null,{disposeWhenNodeIsRemoved:containerNode,disposeWhen:function disposeWhen(){return!ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes);}});return{mappedNodes:mappedNodes,dependentObservable:dependentObservable.isActive()?dependentObservable:undefined};}var lastMappingResultDomDataKey=ko.utils.domData.nextKey(),deletedItemDummyValue=ko.utils.domData.nextKey();ko.utils.setDomNodeChildrenFromArrayMapping=function(domNode,array,mapping,options,callbackAfterAddingNodes){// Compare the provided array against the previous one
	array=array||[];options=options||{};var isFirstExecution=ko.utils.domData.get(domNode,lastMappingResultDomDataKey)===undefined;var lastMappingResult=ko.utils.domData.get(domNode,lastMappingResultDomDataKey)||[];var lastArray=ko.utils.arrayMap(lastMappingResult,function(x){return x.arrayEntry;});var editScript=ko.utils.compareArrays(lastArray,array,options['dontLimitMoves']);// Build the new mapping result
	var newMappingResult=[];var lastMappingResultIndex=0;var newMappingResultIndex=0;var nodesToDelete=[];var itemsToProcess=[];var itemsForBeforeRemoveCallbacks=[];var itemsForMoveCallbacks=[];var itemsForAfterAddCallbacks=[];var mapData;function itemMovedOrRetained(editScriptIndex,oldPosition){mapData=lastMappingResult[oldPosition];if(newMappingResultIndex!==oldPosition)itemsForMoveCallbacks[editScriptIndex]=mapData;// Since updating the index might change the nodes, do so before calling fixUpContinuousNodeArray
	mapData.indexObservable(newMappingResultIndex++);ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes,domNode);newMappingResult.push(mapData);itemsToProcess.push(mapData);}function callCallback(callback,items){if(callback){for(var i=0,n=items.length;i<n;i++){if(items[i]){ko.utils.arrayForEach(items[i].mappedNodes,function(node){callback(node,i,items[i].arrayEntry);});}}}}for(var i=0,editScriptItem,movedIndex;editScriptItem=editScript[i];i++){movedIndex=editScriptItem['moved'];switch(editScriptItem['status']){case"deleted":if(movedIndex===undefined){mapData=lastMappingResult[lastMappingResultIndex];// Stop tracking changes to the mapping for these nodes
	if(mapData.dependentObservable){mapData.dependentObservable.dispose();mapData.dependentObservable=undefined;}// Queue these nodes for later removal
	if(ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes,domNode).length){if(options['beforeRemove']){newMappingResult.push(mapData);itemsToProcess.push(mapData);if(mapData.arrayEntry===deletedItemDummyValue){mapData=null;}else{itemsForBeforeRemoveCallbacks[i]=mapData;}}if(mapData){nodesToDelete.push.apply(nodesToDelete,mapData.mappedNodes);}}}lastMappingResultIndex++;break;case"retained":itemMovedOrRetained(i,lastMappingResultIndex++);break;case"added":if(movedIndex!==undefined){itemMovedOrRetained(i,movedIndex);}else{mapData={arrayEntry:editScriptItem['value'],indexObservable:ko.observable(newMappingResultIndex++)};newMappingResult.push(mapData);itemsToProcess.push(mapData);if(!isFirstExecution)itemsForAfterAddCallbacks[i]=mapData;}break;}}// Store a copy of the array items we just considered so we can difference it next time
	ko.utils.domData.set(domNode,lastMappingResultDomDataKey,newMappingResult);// Call beforeMove first before any changes have been made to the DOM
	callCallback(options['beforeMove'],itemsForMoveCallbacks);// Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)
	ko.utils.arrayForEach(nodesToDelete,options['beforeRemove']?ko.cleanNode:ko.removeNode);// Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)
	for(var i=0,nextNode=ko.virtualElements.firstChild(domNode),lastNode,node;mapData=itemsToProcess[i];i++){// Get nodes for newly added items
	if(!mapData.mappedNodes)ko.utils.extend(mapData,mapNodeAndRefreshWhenChanged(domNode,mapping,mapData.arrayEntry,callbackAfterAddingNodes,mapData.indexObservable));// Put nodes in the right place if they aren't there already
	for(var j=0;node=mapData.mappedNodes[j];nextNode=node.nextSibling,lastNode=node,j++){if(node!==nextNode)ko.virtualElements.insertAfter(domNode,node,lastNode);}// Run the callbacks for newly added nodes (for example, to apply bindings, etc.)
	if(!mapData.initialized&&callbackAfterAddingNodes){callbackAfterAddingNodes(mapData.arrayEntry,mapData.mappedNodes,mapData.indexObservable);mapData.initialized=true;}}// If there's a beforeRemove callback, call it after reordering.
	// Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
	// some sort of animation, which is why we first reorder the nodes that will be removed. If the
	// callback instead removes the nodes right away, it would be more efficient to skip reordering them.
	// Perhaps we'll make that change in the future if this scenario becomes more common.
	callCallback(options['beforeRemove'],itemsForBeforeRemoveCallbacks);// Replace the stored values of deleted items with a dummy value. This provides two benefits: it marks this item
	// as already "removed" so we won't call beforeRemove for it again, and it ensures that the item won't match up
	// with an actual item in the array and appear as "retained" or "moved".
	for(i=0;i<itemsForBeforeRemoveCallbacks.length;++i){if(itemsForBeforeRemoveCallbacks[i]){itemsForBeforeRemoveCallbacks[i].arrayEntry=deletedItemDummyValue;}}// Finally call afterMove and afterAdd callbacks
	callCallback(options['afterMove'],itemsForMoveCallbacks);callCallback(options['afterAdd'],itemsForAfterAddCallbacks);};})();ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping',ko.utils.setDomNodeChildrenFromArrayMapping);ko.nativeTemplateEngine=function(){this['allowTemplateRewriting']=false;};ko.nativeTemplateEngine.prototype=new ko.templateEngine();ko.nativeTemplateEngine.prototype.constructor=ko.nativeTemplateEngine;ko.nativeTemplateEngine.prototype['renderTemplateSource']=function(templateSource,bindingContext,options,templateDocument){var useNodesIfAvailable=!(ko.utils.ieVersion<9),// IE<9 cloneNode doesn't work properly
	templateNodesFunc=useNodesIfAvailable?templateSource['nodes']:null,templateNodes=templateNodesFunc?templateSource['nodes']():null;if(templateNodes){return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);}else{var templateText=templateSource['text']();return ko.utils.parseHtmlFragment(templateText,templateDocument);}};ko.nativeTemplateEngine.instance=new ko.nativeTemplateEngine();ko.setTemplateEngine(ko.nativeTemplateEngine.instance);ko.exportSymbol('nativeTemplateEngine',ko.nativeTemplateEngine);(function(){ko.jqueryTmplTemplateEngine=function(){// Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
	// doesn't expose a version number, so we have to infer it.
	// Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
	// which KO internally refers to as version "2", so older versions are no longer detected.
	var jQueryTmplVersion=this.jQueryTmplVersion=function(){if(!jQueryInstance||!jQueryInstance['tmpl'])return 0;// Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.
	try{if(jQueryInstance['tmpl']['tag']['tmpl']['open'].toString().indexOf('__')>=0){// Since 1.0.0pre, custom tags should append markup to an array called "__"
	return 2;// Final version of jquery.tmpl
	}}catch(ex){/* Apparently not the version we were looking for */}return 1;// Any older version that we don't support
	}();function ensureHasReferencedJQueryTemplates(){if(jQueryTmplVersion<2)throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");}function executeTemplate(compiledTemplate,data,jQueryTemplateOptions){return jQueryInstance['tmpl'](compiledTemplate,data,jQueryTemplateOptions);}this['renderTemplateSource']=function(templateSource,bindingContext,options,templateDocument){templateDocument=templateDocument||document;options=options||{};ensureHasReferencedJQueryTemplates();// Ensure we have stored a precompiled version of this template (don't want to reparse on every render)
	var precompiled=templateSource['data']('precompiled');if(!precompiled){var templateText=templateSource['text']()||"";// Wrap in "with($whatever.koBindingContext) { ... }"
	templateText="{{ko_with $item.koBindingContext}}"+templateText+"{{/ko_with}}";precompiled=jQueryInstance['template'](null,templateText);templateSource['data']('precompiled',precompiled);}var data=[bindingContext['$data']];// Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays
	var jQueryTemplateOptions=jQueryInstance['extend']({'koBindingContext':bindingContext},options['templateOptions']);var resultNodes=executeTemplate(precompiled,data,jQueryTemplateOptions);resultNodes['appendTo'](templateDocument.createElement("div"));// Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work
	jQueryInstance['fragments']={};// Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders
	return resultNodes;};this['createJavaScriptEvaluatorBlock']=function(script){return"{{ko_code ((function() { return "+script+" })()) }}";};this['addTemplate']=function(templateName,templateMarkup){document.write("<script type='text/html' id='"+templateName+"'>"+templateMarkup+"<"+"/script>");};if(jQueryTmplVersion>0){jQueryInstance['tmpl']['tag']['ko_code']={open:"__.push($1 || '');"};jQueryInstance['tmpl']['tag']['ko_with']={open:"with($1) {",close:"} "};}};ko.jqueryTmplTemplateEngine.prototype=new ko.templateEngine();ko.jqueryTmplTemplateEngine.prototype.constructor=ko.jqueryTmplTemplateEngine;// Use this one by default *only if jquery.tmpl is referenced*
	var jqueryTmplTemplateEngineInstance=new ko.jqueryTmplTemplateEngine();if(jqueryTmplTemplateEngineInstance.jQueryTmplVersion>0)ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);ko.exportSymbol('jqueryTmplTemplateEngine',ko.jqueryTmplTemplateEngine);})();});})();})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(298)(module)))

/***/ },
/* 305 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 306 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Person = exports.Person = function Person() {
	  _classCallCheck(this, Person);
	
	  this.sex = Math.random() > 0.5 ? 'male' : 'female';
	};

/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = "<!doctype html>\n<html>\n<head>\n  <title>Here is my title bro!</title>\n</head>\n<body>\n  Here is my text bro!\n  <h3 data-bind=\"text: name\"></h3>\n  <h2 data-bind=\"text: age\"></h2>\n  <h1 data-bind=\"text: randomNumber\"></h1>\n  <h1 data-bind=\"text: sex\"></h1>\n</body>\n</html>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
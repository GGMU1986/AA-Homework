/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/todo_redux.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/todo_redux.jsx":
/*!*********************************!*\
  !*** ./frontend/todo_redux.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/frontend/todo_redux.jsx: Unexpected token, expected \"{\" (27:0)\n\n\u001b[0m \u001b[90m 25 |\u001b[39m   \u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mRoot\u001b[39m store\u001b[33m=\u001b[39m{store} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m root)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m   store\u001b[33m.\u001b[39mdispatch \u001b[33m=\u001b[39m \u001b[36mfunction\u001b[39m addLoggingToDispatch(store)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m\u001b[0m\n    at Object._raise (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:541:17)\n    at Object.raiseWithData (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:534:17)\n    at Object.raise (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:495:17)\n    at Object.unexpected (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:3550:16)\n    at Object.expect (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:3524:28)\n    at Object.parseBlock (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:13697:10)\n    at Object.parseFunctionBody (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:12582:24)\n    at Object.parseFunctionBodyAndFinish (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:12566:10)\n    at /Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:13861:12\n    at Object.withSmartMixTopicForbiddingContext (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:12899:14)\n    at Object.parseFunction (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:13860:10)\n    at Object.parseFunctionOrFunctionSent (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11999:17)\n    at Object.parseExprAtom (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11747:21)\n    at Object.parseExprAtom (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:7456:20)\n    at Object.parseExprSubscripts (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11414:23)\n    at Object.parseUpdate (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11394:21)\n    at Object.parseMaybeUnary (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11369:23)\n    at Object.parseMaybeUnaryOrPrivate (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11183:61)\n    at Object.parseExprOps (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11190:23)\n    at Object.parseMaybeConditional (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11160:23)\n    at Object.parseMaybeAssign (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11123:21)\n    at Object.parseMaybeAssign (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11147:25)\n    at Object.parseExpressionBase (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11059:23)\n    at /Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11053:39\n    at Object.allowInAnd (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:12928:12)\n    at Object.parseExpression (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:11053:17)\n    at Object.parseStatementContent (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:13272:23)\n    at Object.parseStatement (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:13139:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:13728:25)\n    at Object.parseBlockBody (/Users/george/Desktop/aA_bootcamp/aa_homework/W11D4/middleware_hw/node_modules/@babel/parser/lib/index.js:13719:10)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
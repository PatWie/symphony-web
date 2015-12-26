// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("ampl", function() {
  function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b");
  }

  var singleOperators = new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]");
  var singleDelimiters = new RegExp('^[\\(\\[\\{\\}\\[\\],:=;]');
  var doubleOperators = new RegExp("^((==)|(:=)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))");
  var doubleDelimiters = new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))");
  var tripleDelimiters = new RegExp("^((>>=)|(<<=))");
  var expressionEnd = new RegExp("^;");
  var identifiers = new RegExp("^[_A-Za-z\xa1-\uffff][_A-Za-z0-9\xa1-\uffff]*");


  var defs = wordRegexp([
    'abs',
    'sum',
    'atan',
    'card',
    'ceil',
    'cos',
    'exp',
    'floor',
    'gmtime',
    'length',
    'log',
    'log10',
    'max',
    'min',
    'round',
    'sin',
    'sqrt',
    'str2time',
    'trunc',
    'Irand224',
    'Uniform01',
    'Uniform',
    'Normal01',
    'Normal'
  ]);

  var keywords = wordRegexp([
    "param", 
    "var", 
    "maximize", 
    "minimize", 
    "s.t.", 
    "data", 
    "end", 
    "set", 
    "table", 
    "subject", 
    "to", 
    "subj", 
    "solve", 
    "check", 
    "display", 
    "for"
  ]);

  var builtins = wordRegexp([
    "printf"
  ]);

  
  var atoms = wordRegexp([
    'dimen',
    'default',
    'integer',
    'binary',
    'logical',
    'symbolic',
    'OUT',
    'IN',
    'and',
    'by',
    'cross',
    'diff',
    'div',
    'else',
    'if',
    'in',
    'Infinity',
    'inter',
    'less',
    'mod',
    'not',
    'or',
    'symdiff',
    'then',
    'union',
    'within'
  ]);

  function tokenComment(stream, state) {
    if (stream.match(/^.*%}/)) {
      state.tokenize = tokenBase;
      return 'comment';
    };
    stream.skipToEnd();
    return 'comment';
  }

  function tokenBase(stream, state) {
    // whitespaces
    if (stream.eatSpace()) return null;

    // Handle one line Comments
    if (stream.match('%{')){
      state.tokenize = tokenComment;
      stream.skipToEnd();
      return 'comment';
    }

    if (stream.match(/^[%#]/)){
      stream.skipToEnd();
      return 'comment';
    }

    // Handle Number Literals
    if (stream.match(/^[0-9\.+-]/, false)) {
      if (stream.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/)) {
        stream.tokenize = tokenBase;
        return 'number'; };
      if (stream.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/)) { return 'number'; };
      if (stream.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/)) { return 'number'; };
    }
    if (stream.match(wordRegexp(['nan','NaN','inf','Inf']))) { return 'number'; };

    // Handle Strings
    if (stream.match(/^"([^"]|(""))*"/)) { return 'string'; } ;
    if (stream.match(/^'([^']|(''))*'/)) { return 'string'; } ;

    // Handle words
    if (stream.match(keywords)) { return 'keyword'; } ;
    if (stream.match(defs)) { return 'def'; } ;
    if (stream.match(builtins)) { return 'builtin'; } ;
    if (stream.match(atoms)) { return 'atom'; } ;
    if (stream.match(identifiers)) { return 'variable'; } ;

    if (stream.match(singleOperators) || stream.match(doubleOperators)) { return 'operator'; };
    if (stream.match(singleDelimiters) || stream.match(doubleDelimiters) || stream.match(tripleDelimiters)) { return null; };



    // Handle non-detected items
    console.log(stream);
    stream.next();
    return 'error';
  };


  return {
    startState: function() {
      return {
        tokenize: tokenBase
      };
    },

    token: function(stream, state) {
      var style = state.tokenize(stream, state);
      if (style === 'number' || style === 'variable'){
      }
      return style;
    }
  };
});

CodeMirror.defineMIME("text/x-ampl", "ampl");

});

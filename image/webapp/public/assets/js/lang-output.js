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

CodeMirror.defineMode("plain", function() {
  function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b");
  }



  function tokenBase(stream, state) {
    // whitespaces
    if (stream.eatSpace()) return null;

    if (stream.match(/^(==)/)){
      stream.skipToEnd();
      return 'def';
    }

    if (stream.match(/^(\*)/)){
      stream.skipToEnd();
      return 'comment';
    }

    if (stream.match(/^(\+)/)){
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
    if (stream.match(wordRegexp(['.*Error.*','.*error.*',]))) { return 'error'; };

    // Handle words
    // if (stream.match(keywords)) { return 'keyword'; } ;
    //if (stream.match(horRule1))  { return 'operator'; };



    // Handle non-detected items
    stream.next();
    return null;
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

CodeMirror.defineMIME("text/x-plain", "plain");

});

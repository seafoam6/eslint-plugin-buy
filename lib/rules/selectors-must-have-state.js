/**
 * @fileoverview First argument in selector should be state
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
  return {
    ArrowFunctionExpression: function (node) {
      if (node.params && node.params.length > 0) {
        var firstParam = node.params[0];
        if (firstParam.name !== "state") {
          context.report(
            node,
            "Redux selectors must pass in state as first argument"
          );
        }
      }
    },
    FunctionDeclaration: function (node) {
      if (node.params && node.params.length > 0) {
        var firstParam = node.params[0];
        if (firstParam.name !== "state") {
          context.report(
            node,
            "Redux selectors must pass in state as first argument"
          );
        }
      }
    },
  };
};

module.exports.schema = [];

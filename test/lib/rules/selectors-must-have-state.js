"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/selectors-must-have-state"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parser: "babel-eslint",
  ecmaFeatures: {
    modules: true,
  },
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("selectors-must-have-state", rule, {
  valid: [
    "export const getSlice = (state) => state.slice;",
    "function getSlice(state) {return state.slice;}",
  ],
  invalid: [
    {
      code: "export const getSlice = (something) => state.slice;",
      errors: [
        {
          message: "Redux selectors must pass in state as first argument",
          type: "ArrowFunctionExpression",
        },
      ],
    },
    {
      code: "function getSlice(something) {return state.slice;}",
      errors: [
        {
          message: "Redux selectors must pass in state as first argument",
          type: "FunctionDeclaration",
        },
      ],
    },
  ],
});

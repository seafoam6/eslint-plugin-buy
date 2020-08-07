"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
  "selectors-must-have-state": require("./rules/selectors-must-have-state"),
};

module.exports.configs = {
  recommended: {
    rules: {
      "buy/selectors-must-have-state": 2,
    },
  },
};

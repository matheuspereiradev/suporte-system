"use strict";

var _app = require("shared/infra/http/app");

// app.listen(3030,()=>{
//     console.log("Running");
// })
_app.http.listen(3030, () => {
  console.log("Running");
});
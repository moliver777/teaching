// overrides console.log with custom code
// outputs logging to console textarea instead of browsers javascript console
console.log = function(msg) {
  if (typeof msg === "object") msg = JSON.stringify(msg);
  $("#console").val($("#console").val()+String(msg)+'\n');
}
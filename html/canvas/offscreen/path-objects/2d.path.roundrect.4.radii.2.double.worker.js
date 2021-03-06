// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.roundrect.4.radii.2.double
// Description:Verify that when four radii are given to roundRect(), the second radius, specified as a double, applies to the top-right corner.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Verify that when four radii are given to roundRect(), the second radius, specified as a double, applies to the top-right corner.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.roundRect(0, 0, 100, 50, [0, 20, 0, 0]);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(offscreenCanvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,1, 255,0,0,255, "98,1", "255,0,0,255");
_assertPixel(offscreenCanvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");
_assertPixel(offscreenCanvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
t.done();

});
done();

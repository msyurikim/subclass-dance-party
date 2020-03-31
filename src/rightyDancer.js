var RightyDancer = function(top, left, timeBetweenSteps) {
  //var node = $('<span class="rightyDancer"></span>');
  var node = $('<img class="rightyDancer" src="bboy.png" alt="bboy">');
  Dancer.call(this, top, left, timeBetweenSteps, node);
};

RightyDancer.prototype = Object.create(Dancer.prototype);
RightyDancer.prototype.constructor = RightyDancer;

// RightyDancer.prototype.oldStep = function() {
//   Dancer.prototype.step.call(this);
// };

RightyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({ "left": "+=50px" }, "slow" );
  this.$node.animate({ "right": "-=50px" }, "slow" );
};

// RightyDancer.prototype.oldStep = function() {
//   Dancer.prototype.step.call(this);
// };

// RightyDancer.prototype.step = function() {
//   this.oldStep();
//   this.$node.animate({ "left": "+=50px" }, "slow" );
// };
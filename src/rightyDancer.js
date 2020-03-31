var RightyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

RightyDancer.prototype = Object.create(Dancer.prototype);
RightyDancer.prototype.constructor = RightyDancer;

RightyDancer.prototype.oldStep = function() {
  Dancer.prototype.step.call(this);
};

RightyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate({ "left": "+=50px" }, "slow" );
};
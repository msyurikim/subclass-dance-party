var FadingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

FadingDancer.prototype = Object.create(Dancer.prototype);
FadingDancer.prototype.constructor = FadingDancer;

FadingDancer.prototype.oldStep = function () {
  Dancer.prototype.step.call(this);

};

FadingDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeOut();
  this.$node.fadeIn();
};
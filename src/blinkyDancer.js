var BlinkyDancer = function(top, left, timeBetweenSteps) {
  var node = $('<img class="blinkyDancer" src="ballerina.png" alt="ballerina">');
  Dancer.call(this, top, left, timeBetweenSteps, node);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
// BlinkyDancer.prototype.oldStep = function() {
//   Dancer.prototype.step.call(this);
// };

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  this.enlarge();

};

BlinkyDancer.prototype.enlarge = function() {
  this.$node.mouseenter(function() {
    this.$node.css("max-width", "20%");
  }.bind(this));
  this.$node.mouseout(function() {
    this.$node.css("max-width", "7%");
  }.bind(this));
};


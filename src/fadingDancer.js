var FadingDancer = function(top, left, timeBetweenSteps) {
  var node = $('<img class="fadingDancer" src="hula-girl.png" alt="hula-girl"></img>');
  Dancer.call(this, top, left, timeBetweenSteps, node);
};

FadingDancer.prototype = Object.create(Dancer.prototype);
FadingDancer.prototype.constructor = FadingDancer;

// FadingDancer.prototype.oldStep = function () {
//   Dancer.prototype.step.call(this);

// };

FadingDancer.prototype.step = function() {
  //this.oldStep();
  Dancer.prototype.step.call(this);
  this.$node.fadeOut();
  this.$node.delay();
  this.$node.fadeIn();
  //this.bounce();
};

// FadingDancer.prototype.bounce = function() {
//   this.$node.toggle("bounce", {times:3}, 300 );
//   console.log(this.$node);
// };


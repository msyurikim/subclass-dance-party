// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, node) {
  // use jQuery to create an HTML <span> tag
  this.$node = node || $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(this.top, this.left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //setTimeout(dancer.step, timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  console.log(this.$node);
  this.$node.css(styleSettings);
};

//lines up at top
Dancer.prototype.lineUp = function() {
  this.setPosition(10);
};

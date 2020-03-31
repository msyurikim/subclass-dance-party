describe('rightyDancer', function() {

  var rightyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rightyDancer = new RightyDancer(10, 20, timeBetweenSteps);
    rightyDancer.initCalls();
  });

  it('should have a jQuery $node object', function() {
    expect(rightyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(rightyDancer.$node, 'animate');
    rightyDancer.step();
    expect(rightyDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rightyDancer, 'step');
      expect(rightyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rightyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rightyDancer.step.callCount).to.be.equal(2);
    });
  });
});

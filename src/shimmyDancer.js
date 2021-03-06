var ShimmyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ShimmyDancer.prototype = Object.create(Dancer.prototype);
ShimmyDancer.prototype.constructor = ShimmyDancer;

ShimmyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var animation = {
    animation: 'rotation ' + String(this.timeBetweenSteps * 2) + 'ms infinite linear',
    position: 'absolute'
  };
  this.$node.css(animation);
};

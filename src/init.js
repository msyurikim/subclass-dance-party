$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    for(var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
    for(var i = 0; i < window.dancers.length; i++) {
      console.log(window.dancers[i]);
      console.log(this);
    }
  });

  for(var i = 0; i < window.dancers.length; i++) {
    console.log(window.dancers[i]);
    console.log(this);
  }

  //effect on all dancers, find n closest dancers, only first dancer
  $('.lineUpIfClose').on('click', function(event) {
    var closeDancers = {};
    var top1 = window.dancers[0].top;
    var left1 = window.dancers[0].left;
    for(var i = 1; i < window.dancers.length; i++) {
      var top2 = window.dancers[i].top;
      var left2 = window.dancers[i].left;
      var left = left1 - left2;
      var top = top1 - top2;
      var distance = Math.floor(Math.sqrt(Math.pow(left, 2) + Math.pow(top, 2)));
      closeDancers[distance] = window.dancers[i];
    }
    console.log(Object.keys(closeDancers));
    //Object.keys(closeDancers).sort();
    //console.log(Object.keys(closeDancers));
    var n = 3;
    if (n > Object.keys(closeDancers).length) {
      n = Object.keys(closeDancers).length;
    }
    for (var j = 0; j < n; j++) {
      var key = Object.keys(closeDancers)[j];
      console.log(key);
      console.log( closeDancers[key].$node);
      closeDancers[key].$node.toggle();
    }
  });
});


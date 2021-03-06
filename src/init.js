$(document).ready(function() {
  window.dancers = [];

  $('.dancer').on(function (event) {
    // $('.dancer').css('display', 'none');
    console.log('hello');
    event.target.style.display = 'none';
  });

  $('.dancer').on('click', function(event) {
    console.log('hello');
  });

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
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    setTimeout(function() { window.dancers.push(dancer); }, 0);
  });

  $('.invokeMethodButton').on('click', function(event) {
    // loop through window.dancers and call their lineup method
    var methodFunc = $(this).data('method-name');
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i][methodFunc]();
    }
  });

  $('.clear').on('click', function(event) {
    $('.dancer').remove();
  });
});

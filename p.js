var story = {
  "start":"It was a dark and stormy night."
}

function setup() {
  noCanvas();
  grammar = tracery.createGrammar(story);
  var result = grammar.flatten("#start#");
  console.log(result);
}

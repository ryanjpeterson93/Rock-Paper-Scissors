var rps = {
  '0': 'Rock',
  '1': 'Paper',
  '2': 'Scissors'
}

var computerChoice = {
  init: function() {
    Math.floor(Math.random() * 3);
    this.text = readable(this.store)
  }
};

var choice = [0, 1, 2, 0];

var chooseWinner = function(player, computer) {
  if(choice[player] === choice[computer]) {
    return 'TIE!';
  }
  if(choice[player] === choice[computer +1]) {
    return 'WINNER!';
  }
  else {
    return 'LOSER!';
  }
}


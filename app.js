let voters = [];
let democratCandidates = [];
let republicanCandidates = [];
let independentCandidates = [];

class Person {
  constructor(name){
   this.name = name;
  }
}
class Voter extends Person{
  constructor(name, ideology){
    super(name);
    this.ideology = ideology;
  }
}
class Candidate extends Person{
  constructor(name, party, votes = 0){
    super(name);
    this.party = party;
    this.voters = votes;
  }
}

$(document).ready(function() {

  $('#voter-form button').on('click',function(event) {
      event.preventDefault()
      let name = $('#voter-name').val()
      let ideology = $('#voter-ideology').val()
      let newVoter = new Voter(name, ideology);
      voters.push(newVoter)
      $("#voter-list ul").append(`<li class="list-group-item"> ${newVoter.name}, ${newVoter.ideology}</li>`);
  })
  $('#candidate-form button').on('click',function(event) {
    event.preventDefault()
    let name = $('#candidate-name').val()
    let party = $('#candidate-party').val()
    let newCandidate = new Candidate(name, party);
    $("#candidate-list ul").append(`<li class="list-group-item"> ${newCandidate.name}, ${newCandidate.party}</li>`);
  })

  $('#vote-btn-div button').on('click', function(event) {
    event.preventDefault()
    vote()
  })

  function vote() {
    let democrat = []
    let independent = []
    let republican = []
    let random = Math.ceil(Math.random() * 10)
    voters.forEach((voter) => {
      if (voter.ideology === 'Liberal') {
        if (random <= 6) {
          democrat.push(voter)
        }
        else if (random >= 7 && random <= 8) {
          independent.push(voter)
        }
        else {
          republican.push(voter)
        }
      } else if(voter.ideology === 'Neutral'){
          if (random <=5) {
            independent.push(voter)
          }
          else if(random >= 7.5 && random <=8.5) {
            democrat.push(voter)
          }
          else {
            republican.push(voter)
          }
        } else if(voter.ideology === 'Conservative'){
          if (random <= 6) {
            republican.push(voter)
          }
          else if (random >= 7 && random <= 8) {
            independent.push(voter)
          }
          else {
            democrat.push(voter)
          }
        }
        
    })
    let republicanVoters = republican.length;
    let democratVoters = democrat.length;
    let independentVoters = independent.length;



   voters.push("republicanVoters", "democratVoters", "independentVoters");
  if (republicanVoters > democratVoters && republicanVoters > independentVoters) {
    alert("Mexico is going to pay for it? The republican candidate won by " + republicanVoters + " votes.")
  } else if( democratVoters > republicanVoters && democratVoters > independentVoters) {
    alert("Yes we can! the Democrat won by " + democratVoters + " votes")
  } else {
    alert("Nader!!! The Independent won by " + independentVoters + " votes.")
  }

  }
})
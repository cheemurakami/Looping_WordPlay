$(document).ready(function(){
  $('#form-container').submit(function(event){
    event.preventDefault();
    var userSentence = $('#user-input').val();
    var words = userSentence.split(' ');
    // console.log(words);
    // console.log(words[2].length) 
    var newArray = [];
      words.forEach(function(word){
        if(word.length >= 3){
        newArray.push(word);
      }
    });
    var reversedArray = newArray.reverse();
    // console.log(reversedArray);
    var answer = reversedArray.join(' ');
    console.log(answer)
    $('p').text(answer);
  });

});
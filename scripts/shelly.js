$(function() {
 
  $('.shoe').append(`
    <img src="shoeIcon.png" class="img-fluid"></img>`
  );
  // .css("background", "green");
  // TODO: 🐶11. this puts the shoes in the shoe class div, but could we **programatically** default out of that 'tomato' color 
 
  // $('.shoe').css("background", "yellow");

  let score = 0; //score initialized at zero each reset

  function getWin()
    {
      // TODO: 🐶12. why are my numbers not working at all!  (hint: look at line 19 below as a clue)
      return Math.floor((Math.random() * 3 + 1));
    }

  let win = getWin(); //get the first winning num

  //cheat code! todo: turn off
  console.log('cheat code: ', win); 

  //make shelly able to move & go back home
  $('#shellySeal').draggable({ revert: "valid" });
 
  //now when shelly stops (and dropped on shoe)
  $('.shoe').droppable( {  
    drop: function( event) {
      
      //get the "number" from the shoe it
      let shoeNo = $(this).attr('id')[4];
      //👆🏻 all strings are secretly arrays

      //check if the shoeNo matches our random win no 
      if(shoeNo == win)
      {
        score += 1; 
        $(this).removeClass('loseColor').addClass('winColor');
        $('#gameResult').text('u win'); 
      }
      // TODO: 🐶13. this kinda works when they lose, but can you make into an "else if" so it is bulletproof? 
      // done 🦈🦈 os
      else if(shoeNo !== win){
        // TODO: 🐶14. Make the score go DOWN by one point if they lose
        
        // score ????; 
        score -= 1; 

        // TODO: 🐶15. my colors aren't working like I want
        $(this).removeClass('winColor').addClass('loseColor');

        $('#gameResult').text('u not win'); //you lose!
      }
      $('#score').text(score); //update score
      $('#shellySeal').draggable("disable"); //can't move yet
      }
  });
   // TODO: 🐶16. whew, that's a long IIFE in a method. Let's add a comment to let us know we've finsihed it (use that cool up arrow thing like at the end of the doc ready f/n)
   //↑ends draggable IIFE

  $('#replay').on('click', (e)=>{
    //todo: set all my shoes bak to normal color
    $('.shoe').removeClass('winColor').removeClass('loseColor'); 

    win = getWin(); //get a new random show number
    
    //shelly's on the move again
    $('#shellySeal').draggable('enable');

    //todo: remove text
    $('#gameResult').text(''); 

  })

  $('#reset').on('click', (e)=>{
    // TODO: 🐶17. I ran out of time, help me reset the game. 
    
    alert('this will reset your score');
    
    score = 0; 
    $('.shoe').removeClass('winColor').removeClass('loseColor'); 
    win = getWin(); //get a new random shoe number
    $('#shellySeal').draggable('enable');
    $('#gameResult').text(''); 
    $('#score').text(score); 


    // TODO: 🐶18. warn the user that this will reset their score (+5 if not use alert method)  


  });


  // I wonder what this is for? 
  $('#secretSeal').on('click', ()=>{
    
    score ='4782';
      $('#score').text(score); }
  ); 


  //4782

});
//↑ends doc ready f/n

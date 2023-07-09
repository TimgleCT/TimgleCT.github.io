$(document).ready(function(){

      var clickE = 0; 
      $('#intern').click(function(){
        $("#internBar").toggle(500);
        if(clickE == 0){
          $('#intern').children(".head").children("i").css('transform','rotate(180deg)');
          clickE = 1;
        }else{
          $('#intern').children(".head").children("i").css('transform','rotate(0deg)');
          clickE = 0;
        }
      });

      var clickA = 0; 
      $('#bookAward').click(function(){
        $("#bookAwardBar").toggle(500);
        if(clickA == 0){
          $('#bookAward').children(".head").children("i").css('transform','rotate(180deg)');
          clickA = 1;
        }else{
          $('#bookAward').children(".head").children("i").css('transform','rotate(0deg)');
          clickA = 0;
        }
      });

      var clickB = 0;
      $('#competitionAward').click(function(){
        $("#competitionAwardBar").toggle(500);
        if(clickB == 0){
          $('#competitionAward').children(".head").children("i").css('transform','rotate(180deg)');
          clickB = 1;
        }else{
          $('#competitionAward').children(".head").children("i").css('transform','rotate(0deg)');
          clickB = 0;
        }
      });

      var clickC = 0;
      $('#leaderAward').click(function(){
        $("#leaderAwardBar").toggle(500);
        if(clickC == 0){
          $('#leaderAward').children(".head").children("i").css('transform','rotate(180deg)');
          clickC = 1;
        }else{
          $('#leaderAward').children(".head").children("i").css('transform','rotate(0deg)');
          clickC = 0;
        }
      });

      var clickD = 0;
      $('#volunteerAward').click(function(){
        $("#volunteerAwardBar").toggle(500);
        if(clickD == 0){
          $('#volunteerAward').children(".head").children("i").css('transform','rotate(180deg)');
          clickD = 1;
        }else{
          $('#volunteerAward').children(".head").children("i").css('transform','rotate(0deg)');
          clickD = 0;
        }
      });
        
});  
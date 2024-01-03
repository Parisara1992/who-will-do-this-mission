$(document).ready(function() {
    $("#pick").click(function() {
      var names = $("#names").val();
      var nameArray = names.split(',');
      var winner = nameArray[Math.floor(Math.random() * nameArray.length)];
      
      var mission = $("#mission").val(); 
      
      if (mission.trim() !== "") { 
        winner = "Congratulations! " + winner +" " + mission;
      } else {
        winner = "Congratulations! " + winner;
      }
  
      $("#world, #winner, #close").addClass("open");
      $("#winner").text(winner);
    });
  
    $("#close").click(function() {
      $("#world, #winner, #close").removeClass("open");
    });
  
  });
  
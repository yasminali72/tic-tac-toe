let flag = 1;

$("#b1").click(play);
$("#b2").click(play);
$("#b3").click(play);
$("#b4").click(play);
$("#b5").click(play);
$("#b6").click(play);
$("#b7").click(play);
$("#b8").click(play);
$("#b9").click(play);

function play() {
  if (flag === 1) {
    $(this).val("X");
    flag = 0;
    winner();
    console.log(flag);
    $(this).attr("disabled", true);
    $(this).addClass('bg-danger-subtle')
  } else if (flag === 0) {
    $(this).val("O");
    flag = 1;
    winner();
    console.log(flag);
    $(this).attr("disabled", true);
    $(this).addClass('bg-secondary-subtle')
  }
}

function winner() {
  if (
    $("#b1").val() === "X" &&
    $("#b2").val() === "X" &&
    $("#b3").val() === "X"
  ) {
    $(".winner").html(`The Winner is X`);
    $("#b1 , #b2 , #b3").css({ color: "red" });
    stop();
  } else if (
    $("#b1").val() === "X" &&
    $("#b4").val() === "X" &&
    $("#b7").val() === "X"
  ) {
    $(".winner").html(`The Winner is X`);
    $("#b1 , #b4 , #b7").css({ color: "red" });
    stop();
  } 
  else if($("#b2").val() === "X" &&
  $("#b5").val() === "X" &&
  $("#b8").val() === "X"){
    $('.winner').html(`The Winner is X`)
    $('#b2 , #b5 , #b8').css({'color':'red'}) 
    stop();
}
else if($("#b3").val() === "X" &&
$("#b6").val() === "X" &&
$("#b9").val() === "X"){
    $('.winner').html(`The Winner is X`)
    $('#b3 , #b6 , #b9').css({'color':'red'})
    stop();
}
  else if($("#b1").val() === "X" &&
  $("#b5").val() === "X" &&
  $("#b9").val() === "X"){
    $('.winner').html(`The Winner is X`)
    $('#b1 , #b5 , #b9').css({'color':'red'})
    stop();
  }
  else if($("#b3").val() === "X" &&
  $("#b5").val() === "X" &&
  $("#b7").val() === "X"){
    $('.winner').html(`The Winner is X`)
    $('#b3 , #b5 , #b7').css({'color':'red'})
    stop();
  }
  else if($("#b4").val() === "X" && $("#b5").val() === "X" && $("#b6").val() === "X"){
    $('.winner').html(`The Winner is X`)
    $('#b4 , #b5 , #b6').css({'color':'red'})
    stop();
  }
  else if($('#b7 ').val() ==='X' && $('#b8 ').val() ==='X' && $('#b9 ').val() ==='X'){
    $('.winner').html(`The Winner is X`)
    $('#b7 , #b8 , #b9').css({'color':'red'})
    stop()
  }
  else if (
    $("#b1").val() === "O" &&
    $("#b2").val() === "O" &&
    $("#b3").val() === "O"
  ) {
    $(".winner").html(`The Winner is O`);
    $("#b1 , #b2 , #b3").css({ color: "red" });
    stop();
  } else if (
    $("#b1").val() === "O" &&
    $("#b4").val() === "O" &&
    $("#b7").val() === "O"
  ) {
    $(".winner").html(`The Winner is O`);
    $("#b1 , #b4 , #b7").css({ color: "red" });
    stop();
  } 
  else if($("#b2").val() === "O" &&
  $("#b5").val() === "O" &&
  $("#b8").val() === "O"){
    $('.winner').html(`The Winner is O`)
    $('#b , #b5 , #b8').css({'color':'red'}) 
    stop();
}
else if($("#b3").val() === "O" &&
$("#b6").val() === "O" &&
$("#b9").val() === "O"){
    $('.winner').html(`The Winner is O`)
    $('#b3 , #b6 , #b9').css({'color':'red'})
    stop();
}
  else if($("#b1").val() === "O" &&
  $("#b5").val() === "O" &&
  $("#b9").val() === "O"){
    $('.winner').html(`The Winner is O`)
    $('#b1 , #b5 , #b9').css({'color':'red'})
    stop();
  }
  else if($("#b3").val() === "O" &&
  $("#b5").val() === "O" &&
  $("#b7").val() === "O"){
    $('.winner').html(`The Winner is O`)
    $('#b3 , #b5 , #b7').css({'color':'red'})
    stop();
  }
  else if($("#b4").val() === "O" && $("#b5").val() === "O" && $("#b6").val() === "O"){
    $('.winner').html(`The Winner is O`)
    $('#b4 , #b5 , #b7').css({'color':'red'})
    stop();
  }
  else if($('#b7 ').val()==='O' && $('#b8 ').val()==='O' && $('#b9 ').val() ==='O'){
    $('.winner').html(`The Winner is O`)
    $('#b7 , #b8 , #b9').css({'color':'red'})
    stop()
  }
}

function stop() {
  $("#b1 , #b2 ,#b3,#b4,#b5,#b6,#b7,#b8,#b9").attr("disabled", true);
}

// reset
$("#ResetBtn").click(function () {
  $("#b1 , #b2 , #b3 , #b4 , #b5 , #b6 , #b7 , #b8, #b9").val("");
  $("#b1 , #b2 ,#b3, #b4, #b5 , #b6 , #b7 , #b8 , #b9").removeAttr("disabled").removeClass('bg-secondary-subtle').removeClass('bg-danger-subtle')
  $("#b1 , #b2 , #b3 , #b4 , #b5 , #b6 , #b7 , #b8, #b9").css({"color":'black'});

  $(".winner").empty();
  flag = 1;
});

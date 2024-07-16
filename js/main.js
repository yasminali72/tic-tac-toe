
let flag=1

function start(){
    $('#b1').one('click', play);
    $('#b2').one('click',play)
    $('#b3').one('click',play)
    $('#b4').one('click',play)
    $('#b5').one('click',play)
    $('#b6').one('click',play)
    $('#b7').one('click',play)
    $('#b8').one('click',play)
    $('#b9').one('click',play)
}
start()

function play(){
    if(flag==1){
        $(this).val('X')
        flag=0
    }
    else{
        $(this).val('O')
        flag=1
    }
    winner()
}








function winner(){
    if(($('#b1').val()==='X' && $('#b2').val()==='X' && $('#b3').val()==='X') || ($('#b1').val()==='X' && $('#b4').val()==='X' && $('#b7').val()==='X') ||($('#b2').val()==='X' && $('#b5').val()==='X' && $('#b8').val()==='X') ||($('#b3').val()==='X' && $('#b6').val()==='X' && $('#b9').val()==='X') ||($('#b1').val()==='X' && $('#b5').val()==='X' && $('#b9').val()==='X')||($('#b3').val()==='X' && $('#b5').val()==='X' && $('#b7').val()==='X')){
        $('.winner').html(`The Winner is X`)
stop()
    }
    else  if(($('#b1').val()==='O' && $('#b2').val()==='O' && $('#b3').val()==='O') || ($('#b1').val()==='O' && $('#b4').val()==='O' && $('#b7').val()==='O') ||($('#b2').val()==='O' && $('#b5').val()==='O' && $('#b8').val()==='O') ||($('#b3').val()==='O' && $('#b6').val()==='O' && $('#b9').val()==='O') ||($('#b1').val()==='O' && $('#b5').val()==='O' && $('#b9').val()==='O')||($('#b3').val()==='O' && $('#b5').val()==='O' && $('#b7').val()==='O')){
        $('.winner').html(`The Winner is O`)
stop()
    }

}

function stop(){
    $('#b1 , #b2 ,#b3,#b4,#b5,#b6,#b7,#b8,#b9').attr('disabled',true)
}

// reset
$('#ResetBtn').click(function(){
    $('#b1 , #b2 ,#b3,#b4,#b5,#b6,#b7,#b8,#b9').val('')
    $('#b1 , #b2 ,#b3,#b4,#b5,#b6,#b7,#b8,#b9').removeAttr('disabled')
    flag=1
    start()
    })
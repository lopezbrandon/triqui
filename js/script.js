var points_x = 0;
var points_o = 0;

function main () {
  var option = "x";
    $('.box').click(function (){
        $(this).html(option);
        $(this).removeClass('box').unbind('click');
        win(option);
        if (option == "x"){
            option = "o";
        }
        else {
            option = "x";
        }
    });  
};
function win (option) {
    if ($('#1').html() == option && $('#2').html() == option && $('#3').html() == option) {
        finish(option);
        alert('Gano '+option);
    }
    else if ($('#4').html() == option && $('#5').html() == option && $('#6').html() == option) {
        finish(option);
        alert('Gano '+option);
    }
    else if ($('#7').html() == option && $('#8').html() == option && $('#9').html() == option) {
        finish(option);
        alert('Gano '+option);
    }
    else if ($('#1').html() == option && $('#5').html() == option && $('#9').html() == option) {
        finish(option);
        alert('Gano '+option);
    }
    else if ($('#3').html() == option && $('#5').html() == option && $('#7').html() == option) {
        finish(option);
        alert('Gano '+option);
    }
    else if ($('#1').html() == option && $('#4').html() == option && $('#7').html() == option) {
        finish(option);
        alert('Gano '+option);
    }
    else if ($('#2').html() == option && $('#5').html() == option && $('#8').html() == option) {
        finish(option);
        alert('Gano '+option);
    }
    else if ($('#3').html() == option && $('#6').html() == option && $('#9').html() == option) {
        finish(option);
        alert('Gano '+option);
    }
}
function finish (option) {
    if (option == "x"){
        ++points_x;
        $('#x').html(points_x);
    }
    else{
        ++points_o;
        $('#o').html(points_o);
    }
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9').removeClass('box').unbind('click');
}
function refresh () {
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9').html('').addClass('box');
    main();
}
main();

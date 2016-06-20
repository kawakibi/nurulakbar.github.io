Array.prototype.randsplice = function(){
    var ri = Math.floor(Math.random() * this.length);
    var rs = this.splice(ri, 1);
    return rs;
}
Array.prototype.randval = function(){
    var ri = Math.floor(Math.random() * this.length);
    var val = this[ri];
    return val;
}
var my_array = ['yellow','red','blue','green'];
var result = my_array.randsplice();

document.write(result);
document.write("<hr>");
document.write(my_array);

var jawaban = "yellow";

function stack(){
    $(".card").each(function(e) {

    setTimeout(function() {
        $(".card").eq(e).attr("class", "card");
        }, e * 150)
    });
}

function spread(){
    var my_array = ['yellow','red','blue','green'];

    $(".card").each(function(e) {    
        var result = my_array.randsplice();

        setTimeout(function() {
            $(".card").eq(e).attr("class", "card ani" + e + " " + result );
            }, e * 150)
    });
}

function start() {
    var my_array = ['yellow','red','blue','green'];
    $(".card").each(function(e) {    
        var result = my_array.randsplice();

        setTimeout(function() {
            $(".card").eq(e).attr("class", "card opened ani" + e + " " + result );
            }, e * 150)
    });
}


$( document ).ready(function() {

    setTimeout(start, 1000);

    $('.stack').click(function() {
        stack();
    });
    $('.spread').click(function() {
        spread();
    });
    $('.play').click(function() {
        stack();
        setTimeout(spread, 2000);
    });
    $('.try-again').click(function() {
        spread();
    });
    $('.card').click(function() {
        $(this).toggleClass("opened");
        if($(this).hasClass("yellow")){
            alert("jonibravo");
        }
        else{
            setTimeout(stack, 4000);
            setTimeout(spread, 2000);
        }
    });
});
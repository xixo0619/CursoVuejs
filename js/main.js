require.config({
    paths:{
        'operaciones' : 'operaciones',
        'jquery' : 'jquery-3.3.1.min.js'
    }
})

require(['operaciones','jquery'],function(o,$){
    $('#btnCalcular').on("click", function () {
    num1= parseFloat($('#num1').val());
    num2= parseFloat($('#num2').val());
    $('#suma').text(o.sumar(num1,num2));
    $('#resta').text(o.restar(num1,num2));
    $('#multiplicacion').text(o.multiplicar(num1,num2));
    $('#division').text(o.dividir(num1,num2));
})});


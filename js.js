$(document).ready(function(){
    let str='qwer';//строка образец
  
    $('#ps').click(function(){
        if (str===$('#client_ps').val())  $('#answer').html('введеный пароль совпадает с образцом'); else  $('#answer').html('введеный пароль не совпадает с образцом');
    }); 

    $('#summ').click(function(){
       let nums=$('#kulk').val().split(",").map(parseFloat);
       let summ=0;
       let mult=1;
        for(i=0;i<nums.length;i++){             
        summ=summ+nums[i];
        mult=mult*nums[i];
    }   
        $('#s').html('сумма:'+summ); 
        $('#m').html('произведение:'+mult); }
      
    ); 
}); 
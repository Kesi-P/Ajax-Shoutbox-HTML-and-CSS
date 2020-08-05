$(document).ready(function(){
  $('#submit').on('click',function(){
    var name = $('#name').val();
    var shout = $('#shout').val();
    var date = getDate();
    var dateString = 'name=' + name + '&shout=' + shout + '&date=' + date;

    //validate
    if(name == '' || shout == ''){
      alert('Please fill in your name and shout');
    }else {
      $.ajax({
        type:'POST',
        url:'C:/xampp/htdocs/Ajax-Shoutbox-HTML-and-CSS/shoutbox.php',
        data: dataString,
        cache:false,
        success:function(html){
          $('#shouts ul').prepend(html);
        }
      })
    }

    return false
  });
});

function getDate(){
  var data;
  date = new Date();
  date = date.getUTCFullYear() + '-'+
        ('00' + date.getUTCMonth()+1).slice(-2)+'-'+
        ('00' + date.getUTCDate()+1).slice(-2)+' '+
        ('00' + date.getUTCHours()+1).slice(-2)+':'+
        ('00' + date.getUTCMinutes()+1).slice(-2)+':'+
        ('00' + date.getUTCSeconds()+1).slice(-2);
  return date;
}

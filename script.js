k={
close:function(id){
var z=document.getElementById(id);
z.className = z.className.replace('show', 'hide');
},
open:function (id){
var z=document.getElementById(id);
z.className = z.className.replace('hide', 'show');
}
}

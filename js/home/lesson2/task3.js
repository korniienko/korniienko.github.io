var login = prompt('������� �����.')
if (login == 'admin'){
    var password = prompt('������� ������.');
}else if(login == null){
    alert('Canceled!');
}else {alert('Access denied!');
}
if (password == 'passw0rd'){
    alert('Welcome home!');
}else{alert ('Wrong password!');}
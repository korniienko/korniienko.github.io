var login = prompt('¬ведите логин.')
if (login == 'admin'){
    var password = prompt('¬ведите пароль.');
}else if(login == null){
    alert('Canceled!');
}else {alert('Access denied!');
}
if (password == 'passw0rd'){
    alert('Welcome home!');
}else{alert ('Wrong password!');}
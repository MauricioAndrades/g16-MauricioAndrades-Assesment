// var vh = $(window).height();
// var url = "https://galvanize-eats-api.herokuapp.com/menu";
// var obj = {};
// var objText = "";
var vh = $(window).height();
var url = "https://galvanize-eats-api.herokuapp.com/menu";
var obj = {};
var objText = "";
var jsonobj = {};
var type = [];
var menutype = [];
var uniqmenu = [];

menuname = [];

menuprice = [];

$(document).ready(function() {

    obj = $.getJSON(url, {
        param1: 'value1'
    }, function(json, textStatus) {
        console.log("success");
        objtext = obj.responseText;
        console.log(objtext);
        jsonobj = JSON.parse(objtext);
        
        for (var i = 0; i < jsonobj.menu.length; i++) {
            console.log(jsonobj.menu[i].type);
            console.log(jsonobj.menu[i].name);
            console.log(jsonobj.menu[i].price);

            menutype.push(jsonobj.menu[i].type);
            uniqmenu = _.uniq(menutype);
            console.log(uniqmenu);

            menuname.push(jsonobj.menu[i].name);
            console.log(menuname);

            menuprice.push(jsonobj.menu[i].price);
            console.log(menuprice);
        }

        var menuform = $('#menuform');
        menuform.append('<optgroup id="pizza" label="'+uniqmenu[1]+'"></optgroup>');
        menuform.append('<optgroup id="burgers" label="'+uniqmenu[0]+'">');

        var burgers = $('#burgers');
        console.log(typeof menuname[2]);
        burgers.append('<option label="'+menuname[2]+'"></option></optgroup>');
        burgers.append('<option label="'+menuname[0]+'"></option></optgroup>');
        // burgers.append('<option label="'+menuname[3]+'"></option></optgroup>');
        var pizzas = $('#pizza');
        pizzas.append('<option label="'+menuname[1]+'"></option></optgroup>');
        pizzas.append('<option label="'+menuname[3]+'"></option></optgroup>');
        pizzas.append('<option label="'+menuname[4]+'"></option></optgroup>');


    

        // console.log(jsonobj.menu.length);
        // console.log(jsonobj.menu[0].type);





    });

});

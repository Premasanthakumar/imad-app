console.log('Loaded!');
//change text
var element = document.getElementById('main-text');
element.innerHtml = 'newValue';
//move image
var img = document.getElementById('modi');
img.onClick = function ()
{
    img.style.marginLeft = '100px';
}
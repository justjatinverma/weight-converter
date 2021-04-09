document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsinput').addEventListener('input',function(e)
{
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsoutput').innerHTML = lbs/0.022046;
    document.getElementById('kgoutput').innerHTML = lbs/2.2046;
    document.getElementById('ozeoutput').innerHTML = lbs*16;
});
let params: [string, number, string, string];
params = ['Stefano', 49, 'il', 'marito'];

function showData (pars: [string, number, string, string]) {
    console.log(pars[0] + ', ' + pars [2] + ' ' + pars [3] + ', ha ' + pars[1] + ' anni ');
}
    
showData (params);

//params = ['Katja', 48];
//showData (params)

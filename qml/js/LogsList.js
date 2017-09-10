
function parsePage(year) {

    if (year === undefined) {
        year = new Date().getFullYear();
    }

    console.log('pagePage call');

    var req = new XMLHttpRequest();
    req.open('GET', 'http://merproject.org/meetings/mer-meeting/' + year + '/', false);
    req.send(null);

    if(req.status == 200) {
       //console.log(req.responseText);
        parseLinks(req.responseText);
        return true;
    }
    return false;
}

function parseLinks(html)
{
    var arr = [];
    var linkReg = /"(mer-meeting\.[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}\.[0-9]{2}\.log\.html)"/g;
    var arr = html.match(linkReg);
    console.log(arr);
}

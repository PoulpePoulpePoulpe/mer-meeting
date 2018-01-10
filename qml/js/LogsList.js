var list = [];
var records;

function parsePage(year) {

    if (year === undefined) {
        year = new Date().getFullYear();
    }

    console.log('pagePage call');

    var req = new XMLHttpRequest();
    req.open('GET', 'http://merproject.org/meetings/mer-meeting/' + year + '/', false);
    req.send(null);

    if(req.status == 200) {
        records = req.responseText;
        list = parseLinks(req.responseText);
        return true;
    }
    return false;
}

/**
 *
 */
function parseLinks(html)
{
    if (html == undefined && records == undefined)
    {
        if (parsePage()) {
            html = records;
        } else {
            throw new Error('Well, I cannot find anything. Plz Halp');
        }
    }

    var arr = [],
        linkReg = /"(mer-meeting\.[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}\.[0-9]{2}\.log\.html)"/g;

    arr = html.match(linkReg);
console.log(arr);
    return arr;
}


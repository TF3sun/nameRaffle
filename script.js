line = '<li><input type="text" id=l></input></li>'

function listA() {
    lineA = ""
    for (i=1; i<=10; i++) {
        l1 = '<li><input '
        l2 = 'type="text" '
        l3 = 'id=' + i
        l4 = '></input></li>'
        line = l1 + l2 + l3 + l4
        lineA = lineA+line
        fullLine = "<ol>" + lineA + "</ol>"
        document.getElementById("list").innerHTML = fullLine;
    }
    giveListId();
}

function listB() {
    lineA = ""
    for (i=1; i<=20; i++) {
        l1 = '<li><input '
        l2 = 'type="text" '
        l3 = 'id=' + i
        l4 = '></input></li>'
        line = l1 + l2 + l3 + l4
        lineA = lineA+line
        fullLine = "<ol>" + lineA + "</ol>"
        document.getElementById("list").innerHTML = fullLine;
    }
}

function listC() {
    lineA = ""
    for (i=1; i<=30; i++) {
        l1 = '<li><input '
        l2 = 'type="text" '
        l3 = 'id=' + i
        l4 = '></input></li>'
        line = l1 + l2 + l3 + l4
        lineA = lineA+line
        fullLine = "<ol>" + lineA + "</ol>"
        document.getElementById("list").innerHTML = fullLine;
    }
}

function selName() {
    var ol = document.getElementById("list");
    var lists = ol.getElementsByTagName("li");
    var l = lists.length;
    num = []
    for (i=1; i<=l; i++) {
        nm = document.getElementById(i).value;
        num[i-1] = nm;
        document.getElementById("selList").innerHTML = num;
    }
}
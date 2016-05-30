function loadHTML(data){
    for (var i = 0; i < data.length; i++) {
        var html = renderHtml('#ticketDiv', data[i]);
        $('#boardDiv').append(html);
    }

}

var data = [
    {
        title : 'Angular',
        content : 'Learn Angular'
    },
    {
        title : 'React',
        content : 'Learn React'
    },
    {
        title : 'NodeJS',
        content : 'Learn NodeJS'
    }
];

loadHTML(data);
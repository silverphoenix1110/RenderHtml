var renderHtml = function(template, data) {
    var html, index, match, pattern, result, var_;
    html = $(template).html();
    pattern = /\{[\sa-z0-9_]+\}/g;
    result = "";
    index  = 0;
    var_ = void 0;
    while (match = pattern.exec(html)) {
        var_= match[0].substring(1, match[0].length - 1).trim();
        result += html.substring(index, match.index);
        eval("result+=data." + var_);
        index = pattern.lastIndex;
    }
    result += html.substring(index, html.length);
    return result;
};
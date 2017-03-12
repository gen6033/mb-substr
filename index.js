module.exports = function(str, start, len){
  if(start === undefined){
    start = 0;
  }
  if(len === undefined){
    len = str.length * 2;
  }
  len += start;
  var n = 0;
  var s = "";
  for(var i = 0; i < str.length; i++){
    var c = str.charAt(i);
    m = encodeURIComponent(c).length < 4 ? 1 : 2;
    if(n + m > len){
      return s;
    }
    if(n >= start){
      s += c;
    }
    n += m
  }
  return s;
};

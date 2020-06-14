//设置cookie
function setCookie(key, value, day) {
  var str = ""
  if (day) {
    var d = new Date();
    d.setDate(d.getDate() + day)
    str = ";expires=" + d;
  }
  document.cookie = key + "=" + value + str;
}

//删除cookie
function removeCookie(key) {
  setCookie(key, "abc", -1)
}

//获取cookie
function getCookie(key) {
  var str = document.cookie;
  str = str.split("; ")
  for (var i = 0; i < str.length; i++) {
    if (str[i].split("=")[0] == key) {
      return str[i].split("=")[1];
    }
  }
  return null;
}
export default {
  setCookie,
  removeCookie,
  getCookie
}

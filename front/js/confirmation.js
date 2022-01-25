var str = window.location.href;
var url = new URL(str);
var numOrder = url.searchParams.get("orderId");

document.getElementById('orderId').innerText=numOrder;
"use strict";var web_style=$("#web_style").val();function setCookie(t,e){localStorage.setItem(t,e)}function getCookie(t){return localStorage.getItem(t)}function updateStyle(){"white"==getCookie("style")?($("#footer").attr("style","color: #51525d;"),$(".flink").attr("style","color: #51525d;"),$(".ba").attr("style","color: #51525d;"),$("#bodyx").attr("class","bg_while"),$("#update_style").attr("checked",!1)):($("#footer").attr("style",""),$(".flink").attr("style",""),$("#bodyx").attr("class",""),$(".ba").attr("style",""),$("#update_style").attr("checked",!0))}document.addEventListener("DOMContentLoaded",function(t){document.querySelectorAll("pre").forEach(function(t){hljs.highlightBlock(t)})}),null==getCookie("style")?(setCookie("style",web_style),updateStyle()):"white"==getCookie("style")?(setCookie("style","white"),updateStyle()):"black"==getCookie("style")&&(setCookie("style","black"),updateStyle()),$("#update_style").change(function(){setCookie("style",$("#update_style").is(":checked")?"black":"white"),updateStyle()});
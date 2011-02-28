if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML.toLowerCase();var last=tt.indexOf("camelot_button.js\"");if(last>0){var first=tt.lastIndexOf("\"",last);if(first>0&&first<last)loc=document.body.innerHTML.substr(first+1,last-first-1);}}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".camelot_button_menu {border-color:black;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#6e6e65;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".camelot_button_plain:link, .camelot_button_plain:visited{text-align:left;background-color:#6e6e65;color:#ffffff;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:1px 0px 1px 0px;cursor:hand;display:block;font-size:7pt;font-family:Verdana, Arial, Helvetica, sans-serif;font-style:italic;font-weight:bold;}");
document.write(".camelot_button_plain:hover{background-color:#dbdbca;color:#000000;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:1px 0px 1px 0px;cursor:hand;display:block;font-size:7pt;font-family:Verdana, Arial, Helvetica, sans-serif;font-style:italic;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xdbdbca;
if(typeof(frames)=="undefined"){var frames=3;if(frames>0)animate();}

startMainMenu("",0,0,2,1,2)
mainMenuItem("camelot_button_b1",".gif",21,104,"javascript:;","","HISTORIQUE",2,2,"camelot_button_plain");
mainMenuItem("camelot_button_b2",".gif",21,104,"javascript:;","","PHILOSOPHIE",2,2,"camelot_button_plain");
mainMenuItem("camelot_button_b3",".gif",21,104,"javascript:;","","PHOTOS",2,2,"camelot_button_plain");
mainMenuItem("camelot_button_b4",".gif",21,104,"javascript:;","","VIDEOS",2,2,"camelot_button_plain");
mainMenuItem("camelot_button_b5",".gif",21,104,"javascript:;","","CLUBS MEMBRES",2,2,"camelot_button_plain");
mainMenuItem("camelot_button_b6",".gif",21,104,"javascript:;","","CONTACTS",2,2,"camelot_button_plain");
endMainMenu("",0,0);

startSubmenu("camelot_button_b5","camelot_button_menu",174);
submenuItem("DUC VOVINAM CLUB","javascript:;","","camelot_button_plain");
submenuItem("DRAGON VOVINAM CLUB","javascript:;","","camelot_button_plain");
submenuItem("CLAUDEL VOVINAM CLUB","javascript:;","","camelot_button_plain");
submenuItem("SAMBA KANE VOVIVNAM CLUB","javascript:;","","camelot_button_plain");
submenuItem("U.G.B VOVINAM CLUB","javascript:;","","camelot_button_plain");
submenuItem("PEYTAVIN VOVINAM CLUB","javascript:;","","camelot_button_plain");
submenuItem("DEGAULLE VOVINAM CLUB","javascript:;","","camelot_button_plain");
submenuItem("KAOLACK VOVINAM CLUB","javascript:;","","camelot_button_plain");
endSubmenu("camelot_button_b5");

loc="";

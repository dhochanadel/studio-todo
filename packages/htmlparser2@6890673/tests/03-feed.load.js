montageDefine("6890673","tests/03-feed",{dependencies:["./test-helper.js","../lib/FeedHandler.js","fs"],factory:function(e,t){var n=e("./test-helper.js"),i=e("../lib/FeedHandler.js"),r=e("fs"),a={xmlMode:!0};t.dir="Feeds",t.test=function(e,t){var s=new i(function(e,n){e?t(e,0):t(null,n)}),o=""+r.readFileSync(__dirname+"/Documents/"+e.file);n.writeToParser(s,a,o)}}});
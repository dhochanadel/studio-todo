var Montage=require("montage").Montage,parse=require("frb/parse"),stringify=require("frb/stringify"),evaluate=require("frb/evaluate"),precedence=require("frb/language").precedence,Selector=exports.Selector=Montage.specialize({syntax:{value:null},constructor:{value:function Selector(){this.super()}},initWithSyntax:{value:function(e){return this.syntax=e,this}},initWithPath:{value:function(e){return this.syntax=parse(e),this}},stringify:{value:function(){return stringify(this.syntax)}},serializeSelf:{value:function(e){e.setProperty("path",stringify(this.syntax))}},deserializeSelf:{value:function(e){this.syntax=parse(e.getProperty("path"))}},evaluate:{value:function(e,t){return evaluate(this.syntax,e,t)}}});precedence.keys().forEach(function(e){Montage.defineProperty(Selector.prototype,e,{value:function(){var t=Array.prototype.map.call(arguments,function(e){return"string"==typeof e?parse(e):e.syntax?e.syntax:"object"==typeof e?e:void 0});return(new this.constructor).initWithSyntax({type:e,args:[this.syntax].concat(t)})}}),Montage.defineProperty(Selector,e,{value:function(){var t=Array.prototype.map.call(arguments,function(e){return"string"==typeof e?parse(e):e.syntax?e.syntax:"object"==typeof e?e:void 0});return(new this).initWithSyntax({type:e,args:t})}})});
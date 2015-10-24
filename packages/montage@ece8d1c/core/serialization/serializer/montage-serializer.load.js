montageDefine("ece8d1c","core/serialization/serializer/montage-serializer",{dependencies:["../../core","mousse/serialization/malker","mousse/serialization/serializer","./montage-builder","./montage-labeler","./montage-visitor","../../logger"],factory:function(e,t){var n=e("../../core").Montage,r=e("mousse/serialization/malker").Malker,i=e("mousse/serialization/serializer").Serializer,a=e("./montage-builder").MontageBuilder,o=e("./montage-labeler").MontageLabeler,s=e("./montage-visitor").MontageVisitor;e("../../logger").logger("montage-serializer");var l=n.specialize.call(i,{_require:{value:null},_visitor:{value:null},_units:{value:Object.create(null)},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,t){return t.toUpperCase()}},constructor:{value:function l(){}},initWithRequire:{value:function(e){return this._require=e,this._builder=new a,this._labeler=new o,this._visitor=(new s).initWithBuilderAndLabelerAndRequireAndUnits(this._builder,this._labeler,this._require,this._units),this._malker=new r(this._visitor),this}},getExternalObjects:{value:function(){return this._visitor.getExternalObjects()}},getExternalElements:{value:function(){return this._visitor.getExternalElements()}},defineSerializationUnit:{value:function(e,t){this.constructor.defineSerializationUnit.call(this,e,t)}}},{defineSerializationUnit:{value:function(e,t){this._units[e]=t}},getDefaultObjectNameForModuleId:{value:function(e){return this._findObjectNameRegExp.test(e),RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase)}}});t.MontageSerializer=l,t.serialize=function(e,t){return(new l).initWithRequire(t).serializeObject(e)}}});
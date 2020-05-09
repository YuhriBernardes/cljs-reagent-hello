goog.provide('cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v3v5$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__32899 = Object.getPrototypeOf(obj__$1);
var G__32900 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__32899;
protos = G__32900;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v3v5$suitable$js_introspection$property_names_and_types(var_args){
var G__32885 = arguments.length;
switch (G__32885) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__4529__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v3v5$suitable$js_introspection$iter__32886(s__32887){
return (new cljs.core.LazySeq(null,(function (){
var s__32887__$1 = s__32887;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32887__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__32892 = cljs.core.first(xs__6292__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32892,(0),null);
var map__32895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32892,(1),null);
var map__32895__$1 = (((((!((map__32895 == null))))?(((((map__32895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32895):map__32895);
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32895__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32895__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4525__auto__ = ((function (s__32887__$1,vec__32892,i,map__32895,map__32895__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v3v5$suitable$js_introspection$iter__32886_$_iter__32888(s__32889){
return (new cljs.core.LazySeq(null,((function (s__32887__$1,vec__32892,i,map__32895,map__32895__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function (){
var s__32889__$1 = s__32889;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__32889__$1);
if(temp__5735__auto____$1){
var s__32889__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32889__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__32889__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__32891 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__32890 = (0);
while(true){
if((i__32890 < size__4528__auto__)){
var key = cljs.core._nth(c__4527__auto__,i__32890);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__32891,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4126__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e32897){if((e32897 instanceof Error)){
var e = e32897;
return "var";
} else {
throw e32897;

}
}})()], null);
})());

var G__32902 = (i__32890 + (1));
i__32890 = G__32902;
continue;
} else {
var G__32903 = (i__32890 + (1));
i__32890 = G__32903;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32891),cider$nrepl$inlined_deps$suitable$v0v3v5$suitable$js_introspection$iter__32886_$_iter__32888(cljs.core.chunk_rest(s__32889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32891),null);
}
} else {
var key = cljs.core.first(s__32889__$2);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4126__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e32898){if((e32898 instanceof Error)){
var e = e32898;
return "var";
} else {
throw e32898;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v3v5$suitable$js_introspection$iter__32886_$_iter__32888(cljs.core.rest(s__32889__$2)));
} else {
var G__32904 = cljs.core.rest(s__32889__$2);
s__32889__$1 = G__32904;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__32887__$1,vec__32892,i,map__32895,map__32895__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen))
,null,null));
});})(s__32887__$1,vec__32892,i,map__32895,map__32895__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.js_keys(props)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,cider$nrepl$inlined_deps$suitable$v0v3v5$suitable$js_introspection$iter__32886(cljs.core.rest(s__32887__$1)));
} else {
var G__32905 = cljs.core.rest(s__32887__$1);
s__32887__$1 = G__32905;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined_deps.suitable.v0v3v5.suitable.js_introspection.js.map

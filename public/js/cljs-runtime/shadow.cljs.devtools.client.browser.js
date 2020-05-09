goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27098 = arguments.length;
var i__4737__auto___27099 = (0);
while(true){
if((i__4737__auto___27099 < len__4736__auto___27098)){
args__4742__auto__.push((arguments[i__4737__auto___27099]));

var G__27100 = (i__4737__auto___27099 + (1));
i__4737__auto___27099 = G__27100;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq26941){
var G__26942 = cljs.core.first(seq26941);
var seq26941__$1 = cljs.core.next(seq26941);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26942,seq26941__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__26959 = cljs.core.seq(sources);
var chunk__26960 = null;
var count__26961 = (0);
var i__26962 = (0);
while(true){
if((i__26962 < count__26961)){
var map__26977 = chunk__26960.cljs$core$IIndexed$_nth$arity$2(null,i__26962);
var map__26977__$1 = (((((!((map__26977 == null))))?(((((map__26977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26977):map__26977);
var src = map__26977__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26977__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26977__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26977__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26977__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e26979){var e_27101 = e26979;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_27101);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_27101.message)].join('')));
}

var G__27102 = seq__26959;
var G__27103 = chunk__26960;
var G__27104 = count__26961;
var G__27105 = (i__26962 + (1));
seq__26959 = G__27102;
chunk__26960 = G__27103;
count__26961 = G__27104;
i__26962 = G__27105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26959);
if(temp__5735__auto__){
var seq__26959__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26959__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26959__$1);
var G__27106 = cljs.core.chunk_rest(seq__26959__$1);
var G__27107 = c__4556__auto__;
var G__27108 = cljs.core.count(c__4556__auto__);
var G__27109 = (0);
seq__26959 = G__27106;
chunk__26960 = G__27107;
count__26961 = G__27108;
i__26962 = G__27109;
continue;
} else {
var map__26980 = cljs.core.first(seq__26959__$1);
var map__26980__$1 = (((((!((map__26980 == null))))?(((((map__26980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26980):map__26980);
var src = map__26980__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e26982){var e_27110 = e26982;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_27110);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_27110.message)].join('')));
}

var G__27111 = cljs.core.next(seq__26959__$1);
var G__27112 = null;
var G__27113 = (0);
var G__27114 = (0);
seq__26959 = G__27111;
chunk__26960 = G__27112;
count__26961 = G__27113;
i__26962 = G__27114;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__26986 = cljs.core.seq(js_requires);
var chunk__26987 = null;
var count__26988 = (0);
var i__26989 = (0);
while(true){
if((i__26989 < count__26988)){
var js_ns = chunk__26987.cljs$core$IIndexed$_nth$arity$2(null,i__26989);
var require_str_27115 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_27115);


var G__27116 = seq__26986;
var G__27117 = chunk__26987;
var G__27118 = count__26988;
var G__27119 = (i__26989 + (1));
seq__26986 = G__27116;
chunk__26987 = G__27117;
count__26988 = G__27118;
i__26989 = G__27119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26986);
if(temp__5735__auto__){
var seq__26986__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26986__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26986__$1);
var G__27120 = cljs.core.chunk_rest(seq__26986__$1);
var G__27121 = c__4556__auto__;
var G__27122 = cljs.core.count(c__4556__auto__);
var G__27123 = (0);
seq__26986 = G__27120;
chunk__26987 = G__27121;
count__26988 = G__27122;
i__26989 = G__27123;
continue;
} else {
var js_ns = cljs.core.first(seq__26986__$1);
var require_str_27124 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_27124);


var G__27125 = cljs.core.next(seq__26986__$1);
var G__27126 = null;
var G__27127 = (0);
var G__27128 = (0);
seq__26986 = G__27125;
chunk__26987 = G__27126;
count__26988 = G__27127;
i__26989 = G__27128;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__26992 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__26992) : callback.call(null,G__26992));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__26994){
var map__26995 = p__26994;
var map__26995__$1 = (((((!((map__26995 == null))))?(((((map__26995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26995):map__26995);
var msg = map__26995__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26995__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26995__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26997(s__26998){
return (new cljs.core.LazySeq(null,(function (){
var s__26998__$1 = s__26998;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26998__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__27003 = cljs.core.first(xs__6292__auto__);
var map__27003__$1 = (((((!((map__27003 == null))))?(((((map__27003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27003):map__27003);
var src = map__27003__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27003__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27003__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__26998__$1,map__27003,map__27003__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__26995,map__26995__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26997_$_iter__26999(s__27000){
return (new cljs.core.LazySeq(null,((function (s__26998__$1,map__27003,map__27003__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__26995,map__26995__$1,msg,info,reload_info){
return (function (){
var s__27000__$1 = s__27000;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__27000__$1);
if(temp__5735__auto____$1){
var s__27000__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27000__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27000__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27002 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27001 = (0);
while(true){
if((i__27001 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__27001);
cljs.core.chunk_append(b__27002,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__27129 = (i__27001 + (1));
i__27001 = G__27129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27002),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26997_$_iter__26999(cljs.core.chunk_rest(s__27000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27002),null);
}
} else {
var warning = cljs.core.first(s__27000__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26997_$_iter__26999(cljs.core.rest(s__27000__$2)));
}
} else {
return null;
}
break;
}
});})(s__26998__$1,map__27003,map__27003__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__26995,map__26995__$1,msg,info,reload_info))
,null,null));
});})(s__26998__$1,map__27003,map__27003__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__26995,map__26995__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26997(cljs.core.rest(s__26998__$1)));
} else {
var G__27130 = cljs.core.rest(s__26998__$1);
s__26998__$1 = G__27130;
continue;
}
} else {
var G__27131 = cljs.core.rest(s__26998__$1);
s__26998__$1 = G__27131;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__27005_27132 = cljs.core.seq(warnings);
var chunk__27006_27133 = null;
var count__27007_27134 = (0);
var i__27008_27135 = (0);
while(true){
if((i__27008_27135 < count__27007_27134)){
var map__27015_27136 = chunk__27006_27133.cljs$core$IIndexed$_nth$arity$2(null,i__27008_27135);
var map__27015_27137__$1 = (((((!((map__27015_27136 == null))))?(((((map__27015_27136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27015_27136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27015_27136):map__27015_27136);
var w_27138 = map__27015_27137__$1;
var msg_27139__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015_27137__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_27140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015_27137__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015_27137__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_27142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015_27137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_27142)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_27140),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_27141),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_27139__$1)].join(''));


var G__27143 = seq__27005_27132;
var G__27144 = chunk__27006_27133;
var G__27145 = count__27007_27134;
var G__27146 = (i__27008_27135 + (1));
seq__27005_27132 = G__27143;
chunk__27006_27133 = G__27144;
count__27007_27134 = G__27145;
i__27008_27135 = G__27146;
continue;
} else {
var temp__5735__auto___27147 = cljs.core.seq(seq__27005_27132);
if(temp__5735__auto___27147){
var seq__27005_27148__$1 = temp__5735__auto___27147;
if(cljs.core.chunked_seq_QMARK_(seq__27005_27148__$1)){
var c__4556__auto___27149 = cljs.core.chunk_first(seq__27005_27148__$1);
var G__27150 = cljs.core.chunk_rest(seq__27005_27148__$1);
var G__27151 = c__4556__auto___27149;
var G__27152 = cljs.core.count(c__4556__auto___27149);
var G__27153 = (0);
seq__27005_27132 = G__27150;
chunk__27006_27133 = G__27151;
count__27007_27134 = G__27152;
i__27008_27135 = G__27153;
continue;
} else {
var map__27017_27154 = cljs.core.first(seq__27005_27148__$1);
var map__27017_27155__$1 = (((((!((map__27017_27154 == null))))?(((((map__27017_27154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27017_27154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27017_27154):map__27017_27154);
var w_27156 = map__27017_27155__$1;
var msg_27157__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27017_27155__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_27158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27017_27155__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27017_27155__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_27160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27017_27155__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_27160)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_27158),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_27159),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_27157__$1)].join(''));


var G__27161 = cljs.core.next(seq__27005_27148__$1);
var G__27162 = null;
var G__27163 = (0);
var G__27164 = (0);
seq__27005_27132 = G__27161;
chunk__27006_27133 = G__27162;
count__27007_27134 = G__27163;
i__27008_27135 = G__27164;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__26993_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__26993_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__27019){
var map__27020 = p__27019;
var map__27020__$1 = (((((!((map__27020 == null))))?(((((map__27020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27020):map__27020);
var msg = map__27020__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27020__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__27022 = cljs.core.seq(updates);
var chunk__27024 = null;
var count__27025 = (0);
var i__27026 = (0);
while(true){
if((i__27026 < count__27025)){
var path = chunk__27024.cljs$core$IIndexed$_nth$arity$2(null,i__27026);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__27052_27165 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__27055_27166 = null;
var count__27056_27167 = (0);
var i__27057_27168 = (0);
while(true){
if((i__27057_27168 < count__27056_27167)){
var node_27169 = chunk__27055_27166.cljs$core$IIndexed$_nth$arity$2(null,i__27057_27168);
var path_match_27170 = shadow.cljs.devtools.client.browser.match_paths(node_27169.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27170)){
var new_link_27171 = (function (){var G__27062 = node_27169.cloneNode(true);
G__27062.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27170),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27062;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27170], 0));

goog.dom.insertSiblingAfter(new_link_27171,node_27169);

goog.dom.removeNode(node_27169);


var G__27172 = seq__27052_27165;
var G__27173 = chunk__27055_27166;
var G__27174 = count__27056_27167;
var G__27175 = (i__27057_27168 + (1));
seq__27052_27165 = G__27172;
chunk__27055_27166 = G__27173;
count__27056_27167 = G__27174;
i__27057_27168 = G__27175;
continue;
} else {
var G__27176 = seq__27052_27165;
var G__27177 = chunk__27055_27166;
var G__27178 = count__27056_27167;
var G__27179 = (i__27057_27168 + (1));
seq__27052_27165 = G__27176;
chunk__27055_27166 = G__27177;
count__27056_27167 = G__27178;
i__27057_27168 = G__27179;
continue;
}
} else {
var temp__5735__auto___27180 = cljs.core.seq(seq__27052_27165);
if(temp__5735__auto___27180){
var seq__27052_27181__$1 = temp__5735__auto___27180;
if(cljs.core.chunked_seq_QMARK_(seq__27052_27181__$1)){
var c__4556__auto___27182 = cljs.core.chunk_first(seq__27052_27181__$1);
var G__27183 = cljs.core.chunk_rest(seq__27052_27181__$1);
var G__27184 = c__4556__auto___27182;
var G__27185 = cljs.core.count(c__4556__auto___27182);
var G__27186 = (0);
seq__27052_27165 = G__27183;
chunk__27055_27166 = G__27184;
count__27056_27167 = G__27185;
i__27057_27168 = G__27186;
continue;
} else {
var node_27187 = cljs.core.first(seq__27052_27181__$1);
var path_match_27188 = shadow.cljs.devtools.client.browser.match_paths(node_27187.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27188)){
var new_link_27189 = (function (){var G__27063 = node_27187.cloneNode(true);
G__27063.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27188),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27063;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27188], 0));

goog.dom.insertSiblingAfter(new_link_27189,node_27187);

goog.dom.removeNode(node_27187);


var G__27190 = cljs.core.next(seq__27052_27181__$1);
var G__27191 = null;
var G__27192 = (0);
var G__27193 = (0);
seq__27052_27165 = G__27190;
chunk__27055_27166 = G__27191;
count__27056_27167 = G__27192;
i__27057_27168 = G__27193;
continue;
} else {
var G__27194 = cljs.core.next(seq__27052_27181__$1);
var G__27195 = null;
var G__27196 = (0);
var G__27197 = (0);
seq__27052_27165 = G__27194;
chunk__27055_27166 = G__27195;
count__27056_27167 = G__27196;
i__27057_27168 = G__27197;
continue;
}
}
} else {
}
}
break;
}


var G__27198 = seq__27022;
var G__27199 = chunk__27024;
var G__27200 = count__27025;
var G__27201 = (i__27026 + (1));
seq__27022 = G__27198;
chunk__27024 = G__27199;
count__27025 = G__27200;
i__27026 = G__27201;
continue;
} else {
var G__27202 = seq__27022;
var G__27203 = chunk__27024;
var G__27204 = count__27025;
var G__27205 = (i__27026 + (1));
seq__27022 = G__27202;
chunk__27024 = G__27203;
count__27025 = G__27204;
i__27026 = G__27205;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27022);
if(temp__5735__auto__){
var seq__27022__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27022__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27022__$1);
var G__27206 = cljs.core.chunk_rest(seq__27022__$1);
var G__27207 = c__4556__auto__;
var G__27208 = cljs.core.count(c__4556__auto__);
var G__27209 = (0);
seq__27022 = G__27206;
chunk__27024 = G__27207;
count__27025 = G__27208;
i__27026 = G__27209;
continue;
} else {
var path = cljs.core.first(seq__27022__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__27064_27210 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__27067_27211 = null;
var count__27068_27212 = (0);
var i__27069_27213 = (0);
while(true){
if((i__27069_27213 < count__27068_27212)){
var node_27214 = chunk__27067_27211.cljs$core$IIndexed$_nth$arity$2(null,i__27069_27213);
var path_match_27215 = shadow.cljs.devtools.client.browser.match_paths(node_27214.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27215)){
var new_link_27216 = (function (){var G__27074 = node_27214.cloneNode(true);
G__27074.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27215),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27074;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27215], 0));

goog.dom.insertSiblingAfter(new_link_27216,node_27214);

goog.dom.removeNode(node_27214);


var G__27217 = seq__27064_27210;
var G__27218 = chunk__27067_27211;
var G__27219 = count__27068_27212;
var G__27220 = (i__27069_27213 + (1));
seq__27064_27210 = G__27217;
chunk__27067_27211 = G__27218;
count__27068_27212 = G__27219;
i__27069_27213 = G__27220;
continue;
} else {
var G__27221 = seq__27064_27210;
var G__27222 = chunk__27067_27211;
var G__27223 = count__27068_27212;
var G__27224 = (i__27069_27213 + (1));
seq__27064_27210 = G__27221;
chunk__27067_27211 = G__27222;
count__27068_27212 = G__27223;
i__27069_27213 = G__27224;
continue;
}
} else {
var temp__5735__auto___27225__$1 = cljs.core.seq(seq__27064_27210);
if(temp__5735__auto___27225__$1){
var seq__27064_27226__$1 = temp__5735__auto___27225__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27064_27226__$1)){
var c__4556__auto___27227 = cljs.core.chunk_first(seq__27064_27226__$1);
var G__27228 = cljs.core.chunk_rest(seq__27064_27226__$1);
var G__27229 = c__4556__auto___27227;
var G__27230 = cljs.core.count(c__4556__auto___27227);
var G__27231 = (0);
seq__27064_27210 = G__27228;
chunk__27067_27211 = G__27229;
count__27068_27212 = G__27230;
i__27069_27213 = G__27231;
continue;
} else {
var node_27232 = cljs.core.first(seq__27064_27226__$1);
var path_match_27233 = shadow.cljs.devtools.client.browser.match_paths(node_27232.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27233)){
var new_link_27234 = (function (){var G__27075 = node_27232.cloneNode(true);
G__27075.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27233),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__27075;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27233], 0));

goog.dom.insertSiblingAfter(new_link_27234,node_27232);

goog.dom.removeNode(node_27232);


var G__27235 = cljs.core.next(seq__27064_27226__$1);
var G__27236 = null;
var G__27237 = (0);
var G__27238 = (0);
seq__27064_27210 = G__27235;
chunk__27067_27211 = G__27236;
count__27068_27212 = G__27237;
i__27069_27213 = G__27238;
continue;
} else {
var G__27239 = cljs.core.next(seq__27064_27226__$1);
var G__27240 = null;
var G__27241 = (0);
var G__27242 = (0);
seq__27064_27210 = G__27239;
chunk__27067_27211 = G__27240;
count__27068_27212 = G__27241;
i__27069_27213 = G__27242;
continue;
}
}
} else {
}
}
break;
}


var G__27243 = cljs.core.next(seq__27022__$1);
var G__27244 = null;
var G__27245 = (0);
var G__27246 = (0);
seq__27022 = G__27243;
chunk__27024 = G__27244;
count__27025 = G__27245;
i__27026 = G__27246;
continue;
} else {
var G__27247 = cljs.core.next(seq__27022__$1);
var G__27248 = null;
var G__27249 = (0);
var G__27250 = (0);
seq__27022 = G__27247;
chunk__27024 = G__27248;
count__27025 = G__27249;
i__27026 = G__27250;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__27076){
var map__27077 = p__27076;
var map__27077__$1 = (((((!((map__27077 == null))))?(((((map__27077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27077):map__27077);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27077__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27077__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__27079,done){
var map__27080 = p__27079;
var map__27080__$1 = (((((!((map__27080 == null))))?(((((map__27080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27080):map__27080);
var msg = map__27080__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27080__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27080__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27080__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27080__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__27082){
var map__27083 = p__27082;
var map__27083__$1 = (((((!((map__27083 == null))))?(((((map__27083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27083):map__27083);
var src = map__27083__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27083__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e27085){var e = e27085;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__27086,done){
var map__27087 = p__27086;
var map__27087__$1 = (((((!((map__27087 == null))))?(((((map__27087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27087):map__27087);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__27089){
var map__27090 = p__27089;
var map__27090__$1 = (((((!((map__27090 == null))))?(((((map__27090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27090):map__27090);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27090__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__27092,done){
var map__27093 = p__27092;
var map__27093__$1 = (((((!((map__27093 == null))))?(((((map__27093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27093):map__27093);
var msg = map__27093__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__27095_27251 = type;
var G__27095_27252__$1 = (((G__27095_27251 instanceof cljs.core.Keyword))?G__27095_27251.fqn:null);
switch (G__27095_27252__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__27096 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__27096.cljs$core$IFn$_invoke$arity$1 ? fexpr__27096.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__27096.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e27097){var e = e27097;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___27254 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___27254)){
var s_27255 = temp__5735__auto___27254;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_27255.onclose = (function (e){
return null;
}));

s_27255.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

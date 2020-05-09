goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34556 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34556(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34557 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34557(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33509 = coll;
var G__33510 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33509,G__33510) : shadow.dom.lazy_native_coll_seq.call(null,G__33509,G__33510));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33565 = arguments.length;
switch (G__33565) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33574 = arguments.length;
switch (G__33574) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33596 = arguments.length;
switch (G__33596) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33608 = arguments.length;
switch (G__33608) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33639 = arguments.length;
switch (G__33639) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33663 = arguments.length;
switch (G__33663) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33680){if((e33680 instanceof Object)){
var e = e33680;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33680;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33706 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33707 = null;
var count__33708 = (0);
var i__33709 = (0);
while(true){
if((i__33709 < count__33708)){
var el = chunk__33707.cljs$core$IIndexed$_nth$arity$2(null,i__33709);
var handler_34564__$1 = ((function (seq__33706,chunk__33707,count__33708,i__33709,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33706,chunk__33707,count__33708,i__33709,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34564__$1);


var G__34565 = seq__33706;
var G__34566 = chunk__33707;
var G__34567 = count__33708;
var G__34568 = (i__33709 + (1));
seq__33706 = G__34565;
chunk__33707 = G__34566;
count__33708 = G__34567;
i__33709 = G__34568;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33706);
if(temp__5735__auto__){
var seq__33706__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33706__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33706__$1);
var G__34569 = cljs.core.chunk_rest(seq__33706__$1);
var G__34570 = c__4556__auto__;
var G__34571 = cljs.core.count(c__4556__auto__);
var G__34572 = (0);
seq__33706 = G__34569;
chunk__33707 = G__34570;
count__33708 = G__34571;
i__33709 = G__34572;
continue;
} else {
var el = cljs.core.first(seq__33706__$1);
var handler_34573__$1 = ((function (seq__33706,chunk__33707,count__33708,i__33709,el,seq__33706__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33706,chunk__33707,count__33708,i__33709,el,seq__33706__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34573__$1);


var G__34574 = cljs.core.next(seq__33706__$1);
var G__34575 = null;
var G__34576 = (0);
var G__34577 = (0);
seq__33706 = G__34574;
chunk__33707 = G__34575;
count__33708 = G__34576;
i__33709 = G__34577;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33732 = arguments.length;
switch (G__33732) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33749 = cljs.core.seq(events);
var chunk__33750 = null;
var count__33751 = (0);
var i__33752 = (0);
while(true){
if((i__33752 < count__33751)){
var vec__33764 = chunk__33750.cljs$core$IIndexed$_nth$arity$2(null,i__33752);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33764,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34579 = seq__33749;
var G__34580 = chunk__33750;
var G__34581 = count__33751;
var G__34582 = (i__33752 + (1));
seq__33749 = G__34579;
chunk__33750 = G__34580;
count__33751 = G__34581;
i__33752 = G__34582;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33749);
if(temp__5735__auto__){
var seq__33749__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33749__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33749__$1);
var G__34583 = cljs.core.chunk_rest(seq__33749__$1);
var G__34584 = c__4556__auto__;
var G__34585 = cljs.core.count(c__4556__auto__);
var G__34586 = (0);
seq__33749 = G__34583;
chunk__33750 = G__34584;
count__33751 = G__34585;
i__33752 = G__34586;
continue;
} else {
var vec__33769 = cljs.core.first(seq__33749__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33769,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33769,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34587 = cljs.core.next(seq__33749__$1);
var G__34588 = null;
var G__34589 = (0);
var G__34590 = (0);
seq__33749 = G__34587;
chunk__33750 = G__34588;
count__33751 = G__34589;
i__33752 = G__34590;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33775 = cljs.core.seq(styles);
var chunk__33776 = null;
var count__33777 = (0);
var i__33778 = (0);
while(true){
if((i__33778 < count__33777)){
var vec__33794 = chunk__33776.cljs$core$IIndexed$_nth$arity$2(null,i__33778);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33794,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34591 = seq__33775;
var G__34592 = chunk__33776;
var G__34593 = count__33777;
var G__34594 = (i__33778 + (1));
seq__33775 = G__34591;
chunk__33776 = G__34592;
count__33777 = G__34593;
i__33778 = G__34594;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33775);
if(temp__5735__auto__){
var seq__33775__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33775__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33775__$1);
var G__34595 = cljs.core.chunk_rest(seq__33775__$1);
var G__34596 = c__4556__auto__;
var G__34597 = cljs.core.count(c__4556__auto__);
var G__34598 = (0);
seq__33775 = G__34595;
chunk__33776 = G__34596;
count__33777 = G__34597;
i__33778 = G__34598;
continue;
} else {
var vec__33802 = cljs.core.first(seq__33775__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33802,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34599 = cljs.core.next(seq__33775__$1);
var G__34600 = null;
var G__34601 = (0);
var G__34602 = (0);
seq__33775 = G__34599;
chunk__33776 = G__34600;
count__33777 = G__34601;
i__33778 = G__34602;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33806_34603 = key;
var G__33806_34604__$1 = (((G__33806_34603 instanceof cljs.core.Keyword))?G__33806_34603.fqn:null);
switch (G__33806_34604__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34606 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34606,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34606,"aria-");
}
})())){
el.setAttribute(ks_34606,value);
} else {
(el[ks_34606] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33838){
var map__33839 = p__33838;
var map__33839__$1 = (((((!((map__33839 == null))))?(((((map__33839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33839):map__33839);
var props = map__33839__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33839__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33846 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33846,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33846,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33846,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33851 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33851,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33851;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33855 = arguments.length;
switch (G__33855) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33866){
var vec__33867 = p__33866;
var seq__33868 = cljs.core.seq(vec__33867);
var first__33869 = cljs.core.first(seq__33868);
var seq__33868__$1 = cljs.core.next(seq__33868);
var nn = first__33869;
var first__33869__$1 = cljs.core.first(seq__33868__$1);
var seq__33868__$2 = cljs.core.next(seq__33868__$1);
var np = first__33869__$1;
var nc = seq__33868__$2;
var node = vec__33867;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33872 = nn;
var G__33873 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33872,G__33873) : create_fn.call(null,G__33872,G__33873));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33874 = nn;
var G__33875 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33874,G__33875) : create_fn.call(null,G__33874,G__33875));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33879 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33879,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33879,(1),null);
var seq__33882_34612 = cljs.core.seq(node_children);
var chunk__33883_34613 = null;
var count__33884_34614 = (0);
var i__33885_34615 = (0);
while(true){
if((i__33885_34615 < count__33884_34614)){
var child_struct_34617 = chunk__33883_34613.cljs$core$IIndexed$_nth$arity$2(null,i__33885_34615);
var children_34618 = shadow.dom.dom_node(child_struct_34617);
if(cljs.core.seq_QMARK_(children_34618)){
var seq__33922_34619 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34618));
var chunk__33924_34620 = null;
var count__33925_34621 = (0);
var i__33926_34622 = (0);
while(true){
if((i__33926_34622 < count__33925_34621)){
var child_34624 = chunk__33924_34620.cljs$core$IIndexed$_nth$arity$2(null,i__33926_34622);
if(cljs.core.truth_(child_34624)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34624);


var G__34625 = seq__33922_34619;
var G__34626 = chunk__33924_34620;
var G__34627 = count__33925_34621;
var G__34628 = (i__33926_34622 + (1));
seq__33922_34619 = G__34625;
chunk__33924_34620 = G__34626;
count__33925_34621 = G__34627;
i__33926_34622 = G__34628;
continue;
} else {
var G__34629 = seq__33922_34619;
var G__34630 = chunk__33924_34620;
var G__34631 = count__33925_34621;
var G__34632 = (i__33926_34622 + (1));
seq__33922_34619 = G__34629;
chunk__33924_34620 = G__34630;
count__33925_34621 = G__34631;
i__33926_34622 = G__34632;
continue;
}
} else {
var temp__5735__auto___34633 = cljs.core.seq(seq__33922_34619);
if(temp__5735__auto___34633){
var seq__33922_34634__$1 = temp__5735__auto___34633;
if(cljs.core.chunked_seq_QMARK_(seq__33922_34634__$1)){
var c__4556__auto___34635 = cljs.core.chunk_first(seq__33922_34634__$1);
var G__34636 = cljs.core.chunk_rest(seq__33922_34634__$1);
var G__34637 = c__4556__auto___34635;
var G__34638 = cljs.core.count(c__4556__auto___34635);
var G__34639 = (0);
seq__33922_34619 = G__34636;
chunk__33924_34620 = G__34637;
count__33925_34621 = G__34638;
i__33926_34622 = G__34639;
continue;
} else {
var child_34640 = cljs.core.first(seq__33922_34634__$1);
if(cljs.core.truth_(child_34640)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34640);


var G__34641 = cljs.core.next(seq__33922_34634__$1);
var G__34642 = null;
var G__34643 = (0);
var G__34644 = (0);
seq__33922_34619 = G__34641;
chunk__33924_34620 = G__34642;
count__33925_34621 = G__34643;
i__33926_34622 = G__34644;
continue;
} else {
var G__34645 = cljs.core.next(seq__33922_34634__$1);
var G__34646 = null;
var G__34647 = (0);
var G__34648 = (0);
seq__33922_34619 = G__34645;
chunk__33924_34620 = G__34646;
count__33925_34621 = G__34647;
i__33926_34622 = G__34648;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34618);
}


var G__34649 = seq__33882_34612;
var G__34650 = chunk__33883_34613;
var G__34651 = count__33884_34614;
var G__34652 = (i__33885_34615 + (1));
seq__33882_34612 = G__34649;
chunk__33883_34613 = G__34650;
count__33884_34614 = G__34651;
i__33885_34615 = G__34652;
continue;
} else {
var temp__5735__auto___34653 = cljs.core.seq(seq__33882_34612);
if(temp__5735__auto___34653){
var seq__33882_34654__$1 = temp__5735__auto___34653;
if(cljs.core.chunked_seq_QMARK_(seq__33882_34654__$1)){
var c__4556__auto___34655 = cljs.core.chunk_first(seq__33882_34654__$1);
var G__34656 = cljs.core.chunk_rest(seq__33882_34654__$1);
var G__34657 = c__4556__auto___34655;
var G__34658 = cljs.core.count(c__4556__auto___34655);
var G__34659 = (0);
seq__33882_34612 = G__34656;
chunk__33883_34613 = G__34657;
count__33884_34614 = G__34658;
i__33885_34615 = G__34659;
continue;
} else {
var child_struct_34660 = cljs.core.first(seq__33882_34654__$1);
var children_34661 = shadow.dom.dom_node(child_struct_34660);
if(cljs.core.seq_QMARK_(children_34661)){
var seq__33933_34662 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34661));
var chunk__33935_34663 = null;
var count__33936_34664 = (0);
var i__33937_34665 = (0);
while(true){
if((i__33937_34665 < count__33936_34664)){
var child_34666 = chunk__33935_34663.cljs$core$IIndexed$_nth$arity$2(null,i__33937_34665);
if(cljs.core.truth_(child_34666)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34666);


var G__34667 = seq__33933_34662;
var G__34668 = chunk__33935_34663;
var G__34669 = count__33936_34664;
var G__34670 = (i__33937_34665 + (1));
seq__33933_34662 = G__34667;
chunk__33935_34663 = G__34668;
count__33936_34664 = G__34669;
i__33937_34665 = G__34670;
continue;
} else {
var G__34671 = seq__33933_34662;
var G__34672 = chunk__33935_34663;
var G__34673 = count__33936_34664;
var G__34674 = (i__33937_34665 + (1));
seq__33933_34662 = G__34671;
chunk__33935_34663 = G__34672;
count__33936_34664 = G__34673;
i__33937_34665 = G__34674;
continue;
}
} else {
var temp__5735__auto___34676__$1 = cljs.core.seq(seq__33933_34662);
if(temp__5735__auto___34676__$1){
var seq__33933_34677__$1 = temp__5735__auto___34676__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33933_34677__$1)){
var c__4556__auto___34678 = cljs.core.chunk_first(seq__33933_34677__$1);
var G__34679 = cljs.core.chunk_rest(seq__33933_34677__$1);
var G__34680 = c__4556__auto___34678;
var G__34681 = cljs.core.count(c__4556__auto___34678);
var G__34682 = (0);
seq__33933_34662 = G__34679;
chunk__33935_34663 = G__34680;
count__33936_34664 = G__34681;
i__33937_34665 = G__34682;
continue;
} else {
var child_34683 = cljs.core.first(seq__33933_34677__$1);
if(cljs.core.truth_(child_34683)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34683);


var G__34684 = cljs.core.next(seq__33933_34677__$1);
var G__34685 = null;
var G__34686 = (0);
var G__34687 = (0);
seq__33933_34662 = G__34684;
chunk__33935_34663 = G__34685;
count__33936_34664 = G__34686;
i__33937_34665 = G__34687;
continue;
} else {
var G__34688 = cljs.core.next(seq__33933_34677__$1);
var G__34689 = null;
var G__34690 = (0);
var G__34691 = (0);
seq__33933_34662 = G__34688;
chunk__33935_34663 = G__34689;
count__33936_34664 = G__34690;
i__33937_34665 = G__34691;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34661);
}


var G__34692 = cljs.core.next(seq__33882_34654__$1);
var G__34693 = null;
var G__34694 = (0);
var G__34695 = (0);
seq__33882_34612 = G__34692;
chunk__33883_34613 = G__34693;
count__33884_34614 = G__34694;
i__33885_34615 = G__34695;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33952 = cljs.core.seq(node);
var chunk__33953 = null;
var count__33954 = (0);
var i__33955 = (0);
while(true){
if((i__33955 < count__33954)){
var n = chunk__33953.cljs$core$IIndexed$_nth$arity$2(null,i__33955);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34699 = seq__33952;
var G__34700 = chunk__33953;
var G__34701 = count__33954;
var G__34702 = (i__33955 + (1));
seq__33952 = G__34699;
chunk__33953 = G__34700;
count__33954 = G__34701;
i__33955 = G__34702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33952);
if(temp__5735__auto__){
var seq__33952__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33952__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33952__$1);
var G__34703 = cljs.core.chunk_rest(seq__33952__$1);
var G__34704 = c__4556__auto__;
var G__34705 = cljs.core.count(c__4556__auto__);
var G__34706 = (0);
seq__33952 = G__34703;
chunk__33953 = G__34704;
count__33954 = G__34705;
i__33955 = G__34706;
continue;
} else {
var n = cljs.core.first(seq__33952__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34707 = cljs.core.next(seq__33952__$1);
var G__34708 = null;
var G__34709 = (0);
var G__34710 = (0);
seq__33952 = G__34707;
chunk__33953 = G__34708;
count__33954 = G__34709;
i__33955 = G__34710;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33967 = arguments.length;
switch (G__33967) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33975 = arguments.length;
switch (G__33975) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33995 = arguments.length;
switch (G__33995) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34721 = arguments.length;
var i__4737__auto___34722 = (0);
while(true){
if((i__4737__auto___34722 < len__4736__auto___34721)){
args__4742__auto__.push((arguments[i__4737__auto___34722]));

var G__34723 = (i__4737__auto___34722 + (1));
i__4737__auto___34722 = G__34723;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34030_34724 = cljs.core.seq(nodes);
var chunk__34031_34725 = null;
var count__34032_34726 = (0);
var i__34033_34727 = (0);
while(true){
if((i__34033_34727 < count__34032_34726)){
var node_34728 = chunk__34031_34725.cljs$core$IIndexed$_nth$arity$2(null,i__34033_34727);
fragment.appendChild(shadow.dom._to_dom(node_34728));


var G__34729 = seq__34030_34724;
var G__34730 = chunk__34031_34725;
var G__34731 = count__34032_34726;
var G__34732 = (i__34033_34727 + (1));
seq__34030_34724 = G__34729;
chunk__34031_34725 = G__34730;
count__34032_34726 = G__34731;
i__34033_34727 = G__34732;
continue;
} else {
var temp__5735__auto___34733 = cljs.core.seq(seq__34030_34724);
if(temp__5735__auto___34733){
var seq__34030_34734__$1 = temp__5735__auto___34733;
if(cljs.core.chunked_seq_QMARK_(seq__34030_34734__$1)){
var c__4556__auto___34735 = cljs.core.chunk_first(seq__34030_34734__$1);
var G__34736 = cljs.core.chunk_rest(seq__34030_34734__$1);
var G__34737 = c__4556__auto___34735;
var G__34738 = cljs.core.count(c__4556__auto___34735);
var G__34739 = (0);
seq__34030_34724 = G__34736;
chunk__34031_34725 = G__34737;
count__34032_34726 = G__34738;
i__34033_34727 = G__34739;
continue;
} else {
var node_34740 = cljs.core.first(seq__34030_34734__$1);
fragment.appendChild(shadow.dom._to_dom(node_34740));


var G__34744 = cljs.core.next(seq__34030_34734__$1);
var G__34745 = null;
var G__34746 = (0);
var G__34747 = (0);
seq__34030_34724 = G__34744;
chunk__34031_34725 = G__34745;
count__34032_34726 = G__34746;
i__34033_34727 = G__34747;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34026){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34026));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34051_34748 = cljs.core.seq(scripts);
var chunk__34052_34749 = null;
var count__34053_34750 = (0);
var i__34054_34751 = (0);
while(true){
if((i__34054_34751 < count__34053_34750)){
var vec__34069_34753 = chunk__34052_34749.cljs$core$IIndexed$_nth$arity$2(null,i__34054_34751);
var script_tag_34754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34069_34753,(0),null);
var script_body_34755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34069_34753,(1),null);
eval(script_body_34755);


var G__34756 = seq__34051_34748;
var G__34757 = chunk__34052_34749;
var G__34758 = count__34053_34750;
var G__34759 = (i__34054_34751 + (1));
seq__34051_34748 = G__34756;
chunk__34052_34749 = G__34757;
count__34053_34750 = G__34758;
i__34054_34751 = G__34759;
continue;
} else {
var temp__5735__auto___34760 = cljs.core.seq(seq__34051_34748);
if(temp__5735__auto___34760){
var seq__34051_34761__$1 = temp__5735__auto___34760;
if(cljs.core.chunked_seq_QMARK_(seq__34051_34761__$1)){
var c__4556__auto___34762 = cljs.core.chunk_first(seq__34051_34761__$1);
var G__34763 = cljs.core.chunk_rest(seq__34051_34761__$1);
var G__34764 = c__4556__auto___34762;
var G__34765 = cljs.core.count(c__4556__auto___34762);
var G__34766 = (0);
seq__34051_34748 = G__34763;
chunk__34052_34749 = G__34764;
count__34053_34750 = G__34765;
i__34054_34751 = G__34766;
continue;
} else {
var vec__34072_34771 = cljs.core.first(seq__34051_34761__$1);
var script_tag_34772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34072_34771,(0),null);
var script_body_34773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34072_34771,(1),null);
eval(script_body_34773);


var G__34774 = cljs.core.next(seq__34051_34761__$1);
var G__34775 = null;
var G__34776 = (0);
var G__34777 = (0);
seq__34051_34748 = G__34774;
chunk__34052_34749 = G__34775;
count__34053_34750 = G__34776;
i__34054_34751 = G__34777;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34075){
var vec__34077 = p__34075;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34077,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34077,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34085 = arguments.length;
switch (G__34085) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34122 = cljs.core.seq(style_keys);
var chunk__34124 = null;
var count__34125 = (0);
var i__34126 = (0);
while(true){
if((i__34126 < count__34125)){
var it = chunk__34124.cljs$core$IIndexed$_nth$arity$2(null,i__34126);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34789 = seq__34122;
var G__34790 = chunk__34124;
var G__34791 = count__34125;
var G__34792 = (i__34126 + (1));
seq__34122 = G__34789;
chunk__34124 = G__34790;
count__34125 = G__34791;
i__34126 = G__34792;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34122);
if(temp__5735__auto__){
var seq__34122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34122__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34122__$1);
var G__34793 = cljs.core.chunk_rest(seq__34122__$1);
var G__34794 = c__4556__auto__;
var G__34795 = cljs.core.count(c__4556__auto__);
var G__34796 = (0);
seq__34122 = G__34793;
chunk__34124 = G__34794;
count__34125 = G__34795;
i__34126 = G__34796;
continue;
} else {
var it = cljs.core.first(seq__34122__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34797 = cljs.core.next(seq__34122__$1);
var G__34799 = null;
var G__34800 = (0);
var G__34801 = (0);
seq__34122 = G__34797;
chunk__34124 = G__34799;
count__34125 = G__34800;
i__34126 = G__34801;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34136,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34145 = k34136;
var G__34145__$1 = (((G__34145 instanceof cljs.core.Keyword))?G__34145.fqn:null);
switch (G__34145__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34136,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34147){
var vec__34148 = p__34147;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34148,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34148,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34135){
var self__ = this;
var G__34135__$1 = this;
return (new cljs.core.RecordIter((0),G__34135__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34137,other34138){
var self__ = this;
var this34137__$1 = this;
return (((!((other34138 == null)))) && ((this34137__$1.constructor === other34138.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34137__$1.x,other34138.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34137__$1.y,other34138.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34137__$1.__extmap,other34138.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34135){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34183 = cljs.core.keyword_identical_QMARK_;
var expr__34184 = k__4388__auto__;
if(cljs.core.truth_((pred__34183.cljs$core$IFn$_invoke$arity$2 ? pred__34183.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34184) : pred__34183.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34184)))){
return (new shadow.dom.Coordinate(G__34135,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34183.cljs$core$IFn$_invoke$arity$2 ? pred__34183.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34184) : pred__34183.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34184)))){
return (new shadow.dom.Coordinate(self__.x,G__34135,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34135),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34135){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34135,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34139){
var extmap__4419__auto__ = (function (){var G__34210 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34139,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34139)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34210);
} else {
return G__34210;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34139),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34139),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34225,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34236 = k34225;
var G__34236__$1 = (((G__34236 instanceof cljs.core.Keyword))?G__34236.fqn:null);
switch (G__34236__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34225,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34238){
var vec__34239 = p__34238;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34239,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34224){
var self__ = this;
var G__34224__$1 = this;
return (new cljs.core.RecordIter((0),G__34224__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34226,other34227){
var self__ = this;
var this34226__$1 = this;
return (((!((other34227 == null)))) && ((this34226__$1.constructor === other34227.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34226__$1.w,other34227.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34226__$1.h,other34227.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34226__$1.__extmap,other34227.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34224){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34256 = cljs.core.keyword_identical_QMARK_;
var expr__34257 = k__4388__auto__;
if(cljs.core.truth_((pred__34256.cljs$core$IFn$_invoke$arity$2 ? pred__34256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34257) : pred__34256.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34257)))){
return (new shadow.dom.Size(G__34224,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34256.cljs$core$IFn$_invoke$arity$2 ? pred__34256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34257) : pred__34256.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34257)))){
return (new shadow.dom.Size(self__.w,G__34224,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34224),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34224){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34224,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34232){
var extmap__4419__auto__ = (function (){var G__34271 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34232,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34232)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34271);
} else {
return G__34271;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34232),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34232),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34843 = (i + (1));
var G__34844 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34843;
ret = G__34844;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34283){
var vec__34284 = p__34283;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34284,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34288 = arguments.length;
switch (G__34288) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34849 = ps;
var G__34850 = (i + (1));
el__$1 = G__34849;
i = G__34850;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34326 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34326,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34326,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34326,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34332_34854 = cljs.core.seq(props);
var chunk__34333_34855 = null;
var count__34334_34856 = (0);
var i__34335_34857 = (0);
while(true){
if((i__34335_34857 < count__34334_34856)){
var vec__34374_34858 = chunk__34333_34855.cljs$core$IIndexed$_nth$arity$2(null,i__34335_34857);
var k_34859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34374_34858,(0),null);
var v_34860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34374_34858,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34859);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34859),v_34860);


var G__34864 = seq__34332_34854;
var G__34865 = chunk__34333_34855;
var G__34866 = count__34334_34856;
var G__34867 = (i__34335_34857 + (1));
seq__34332_34854 = G__34864;
chunk__34333_34855 = G__34865;
count__34334_34856 = G__34866;
i__34335_34857 = G__34867;
continue;
} else {
var temp__5735__auto___34868 = cljs.core.seq(seq__34332_34854);
if(temp__5735__auto___34868){
var seq__34332_34869__$1 = temp__5735__auto___34868;
if(cljs.core.chunked_seq_QMARK_(seq__34332_34869__$1)){
var c__4556__auto___34870 = cljs.core.chunk_first(seq__34332_34869__$1);
var G__34871 = cljs.core.chunk_rest(seq__34332_34869__$1);
var G__34872 = c__4556__auto___34870;
var G__34873 = cljs.core.count(c__4556__auto___34870);
var G__34874 = (0);
seq__34332_34854 = G__34871;
chunk__34333_34855 = G__34872;
count__34334_34856 = G__34873;
i__34335_34857 = G__34874;
continue;
} else {
var vec__34397_34875 = cljs.core.first(seq__34332_34869__$1);
var k_34876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34397_34875,(0),null);
var v_34877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34397_34875,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34876);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34876),v_34877);


var G__34878 = cljs.core.next(seq__34332_34869__$1);
var G__34879 = null;
var G__34880 = (0);
var G__34881 = (0);
seq__34332_34854 = G__34878;
chunk__34333_34855 = G__34879;
count__34334_34856 = G__34880;
i__34335_34857 = G__34881;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34415 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34415,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34415,(1),null);
var seq__34418_34882 = cljs.core.seq(node_children);
var chunk__34420_34883 = null;
var count__34421_34884 = (0);
var i__34422_34885 = (0);
while(true){
if((i__34422_34885 < count__34421_34884)){
var child_struct_34886 = chunk__34420_34883.cljs$core$IIndexed$_nth$arity$2(null,i__34422_34885);
if((!((child_struct_34886 == null)))){
if(typeof child_struct_34886 === 'string'){
var text_34887 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34887),child_struct_34886].join(''));
} else {
var children_34889 = shadow.dom.svg_node(child_struct_34886);
if(cljs.core.seq_QMARK_(children_34889)){
var seq__34466_34893 = cljs.core.seq(children_34889);
var chunk__34468_34894 = null;
var count__34469_34895 = (0);
var i__34470_34896 = (0);
while(true){
if((i__34470_34896 < count__34469_34895)){
var child_34897 = chunk__34468_34894.cljs$core$IIndexed$_nth$arity$2(null,i__34470_34896);
if(cljs.core.truth_(child_34897)){
node.appendChild(child_34897);


var G__34898 = seq__34466_34893;
var G__34899 = chunk__34468_34894;
var G__34900 = count__34469_34895;
var G__34901 = (i__34470_34896 + (1));
seq__34466_34893 = G__34898;
chunk__34468_34894 = G__34899;
count__34469_34895 = G__34900;
i__34470_34896 = G__34901;
continue;
} else {
var G__34902 = seq__34466_34893;
var G__34903 = chunk__34468_34894;
var G__34904 = count__34469_34895;
var G__34905 = (i__34470_34896 + (1));
seq__34466_34893 = G__34902;
chunk__34468_34894 = G__34903;
count__34469_34895 = G__34904;
i__34470_34896 = G__34905;
continue;
}
} else {
var temp__5735__auto___34906 = cljs.core.seq(seq__34466_34893);
if(temp__5735__auto___34906){
var seq__34466_34907__$1 = temp__5735__auto___34906;
if(cljs.core.chunked_seq_QMARK_(seq__34466_34907__$1)){
var c__4556__auto___34908 = cljs.core.chunk_first(seq__34466_34907__$1);
var G__34909 = cljs.core.chunk_rest(seq__34466_34907__$1);
var G__34910 = c__4556__auto___34908;
var G__34911 = cljs.core.count(c__4556__auto___34908);
var G__34912 = (0);
seq__34466_34893 = G__34909;
chunk__34468_34894 = G__34910;
count__34469_34895 = G__34911;
i__34470_34896 = G__34912;
continue;
} else {
var child_34913 = cljs.core.first(seq__34466_34907__$1);
if(cljs.core.truth_(child_34913)){
node.appendChild(child_34913);


var G__34914 = cljs.core.next(seq__34466_34907__$1);
var G__34915 = null;
var G__34916 = (0);
var G__34917 = (0);
seq__34466_34893 = G__34914;
chunk__34468_34894 = G__34915;
count__34469_34895 = G__34916;
i__34470_34896 = G__34917;
continue;
} else {
var G__34918 = cljs.core.next(seq__34466_34907__$1);
var G__34919 = null;
var G__34920 = (0);
var G__34921 = (0);
seq__34466_34893 = G__34918;
chunk__34468_34894 = G__34919;
count__34469_34895 = G__34920;
i__34470_34896 = G__34921;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34889);
}
}


var G__34922 = seq__34418_34882;
var G__34923 = chunk__34420_34883;
var G__34924 = count__34421_34884;
var G__34925 = (i__34422_34885 + (1));
seq__34418_34882 = G__34922;
chunk__34420_34883 = G__34923;
count__34421_34884 = G__34924;
i__34422_34885 = G__34925;
continue;
} else {
var G__34926 = seq__34418_34882;
var G__34927 = chunk__34420_34883;
var G__34928 = count__34421_34884;
var G__34929 = (i__34422_34885 + (1));
seq__34418_34882 = G__34926;
chunk__34420_34883 = G__34927;
count__34421_34884 = G__34928;
i__34422_34885 = G__34929;
continue;
}
} else {
var temp__5735__auto___34930 = cljs.core.seq(seq__34418_34882);
if(temp__5735__auto___34930){
var seq__34418_34931__$1 = temp__5735__auto___34930;
if(cljs.core.chunked_seq_QMARK_(seq__34418_34931__$1)){
var c__4556__auto___34932 = cljs.core.chunk_first(seq__34418_34931__$1);
var G__34933 = cljs.core.chunk_rest(seq__34418_34931__$1);
var G__34934 = c__4556__auto___34932;
var G__34935 = cljs.core.count(c__4556__auto___34932);
var G__34936 = (0);
seq__34418_34882 = G__34933;
chunk__34420_34883 = G__34934;
count__34421_34884 = G__34935;
i__34422_34885 = G__34936;
continue;
} else {
var child_struct_34937 = cljs.core.first(seq__34418_34931__$1);
if((!((child_struct_34937 == null)))){
if(typeof child_struct_34937 === 'string'){
var text_34938 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34938),child_struct_34937].join(''));
} else {
var children_34939 = shadow.dom.svg_node(child_struct_34937);
if(cljs.core.seq_QMARK_(children_34939)){
var seq__34483_34940 = cljs.core.seq(children_34939);
var chunk__34485_34941 = null;
var count__34486_34942 = (0);
var i__34487_34943 = (0);
while(true){
if((i__34487_34943 < count__34486_34942)){
var child_34944 = chunk__34485_34941.cljs$core$IIndexed$_nth$arity$2(null,i__34487_34943);
if(cljs.core.truth_(child_34944)){
node.appendChild(child_34944);


var G__34945 = seq__34483_34940;
var G__34946 = chunk__34485_34941;
var G__34947 = count__34486_34942;
var G__34948 = (i__34487_34943 + (1));
seq__34483_34940 = G__34945;
chunk__34485_34941 = G__34946;
count__34486_34942 = G__34947;
i__34487_34943 = G__34948;
continue;
} else {
var G__34949 = seq__34483_34940;
var G__34950 = chunk__34485_34941;
var G__34951 = count__34486_34942;
var G__34952 = (i__34487_34943 + (1));
seq__34483_34940 = G__34949;
chunk__34485_34941 = G__34950;
count__34486_34942 = G__34951;
i__34487_34943 = G__34952;
continue;
}
} else {
var temp__5735__auto___34953__$1 = cljs.core.seq(seq__34483_34940);
if(temp__5735__auto___34953__$1){
var seq__34483_34954__$1 = temp__5735__auto___34953__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34483_34954__$1)){
var c__4556__auto___34955 = cljs.core.chunk_first(seq__34483_34954__$1);
var G__34956 = cljs.core.chunk_rest(seq__34483_34954__$1);
var G__34957 = c__4556__auto___34955;
var G__34958 = cljs.core.count(c__4556__auto___34955);
var G__34959 = (0);
seq__34483_34940 = G__34956;
chunk__34485_34941 = G__34957;
count__34486_34942 = G__34958;
i__34487_34943 = G__34959;
continue;
} else {
var child_34960 = cljs.core.first(seq__34483_34954__$1);
if(cljs.core.truth_(child_34960)){
node.appendChild(child_34960);


var G__34961 = cljs.core.next(seq__34483_34954__$1);
var G__34962 = null;
var G__34963 = (0);
var G__34964 = (0);
seq__34483_34940 = G__34961;
chunk__34485_34941 = G__34962;
count__34486_34942 = G__34963;
i__34487_34943 = G__34964;
continue;
} else {
var G__34965 = cljs.core.next(seq__34483_34954__$1);
var G__34966 = null;
var G__34967 = (0);
var G__34968 = (0);
seq__34483_34940 = G__34965;
chunk__34485_34941 = G__34966;
count__34486_34942 = G__34967;
i__34487_34943 = G__34968;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34939);
}
}


var G__34969 = cljs.core.next(seq__34418_34931__$1);
var G__34971 = null;
var G__34972 = (0);
var G__34973 = (0);
seq__34418_34882 = G__34969;
chunk__34420_34883 = G__34971;
count__34421_34884 = G__34972;
i__34422_34885 = G__34973;
continue;
} else {
var G__34975 = cljs.core.next(seq__34418_34931__$1);
var G__34976 = null;
var G__34977 = (0);
var G__34978 = (0);
seq__34418_34882 = G__34975;
chunk__34420_34883 = G__34976;
count__34421_34884 = G__34977;
i__34422_34885 = G__34978;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34979 = arguments.length;
var i__4737__auto___34980 = (0);
while(true){
if((i__4737__auto___34980 < len__4736__auto___34979)){
args__4742__auto__.push((arguments[i__4737__auto___34980]));

var G__34981 = (i__4737__auto___34980 + (1));
i__4737__auto___34980 = G__34981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34503){
var G__34504 = cljs.core.first(seq34503);
var seq34503__$1 = cljs.core.next(seq34503);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34504,seq34503__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34518 = arguments.length;
switch (G__34518) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30525__auto___34984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_34533){
var state_val_34534 = (state_34533[(1)]);
if((state_val_34534 === (1))){
var state_34533__$1 = state_34533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34533__$1,(2),once_or_cleanup);
} else {
if((state_val_34534 === (2))){
var inst_34529 = (state_34533[(2)]);
var inst_34531 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34533__$1 = (function (){var statearr_34540 = state_34533;
(statearr_34540[(7)] = inst_34529);

return statearr_34540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34533__$1,inst_34531);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30366__auto__ = null;
var shadow$dom$state_machine__30366__auto____0 = (function (){
var statearr_34542 = [null,null,null,null,null,null,null,null];
(statearr_34542[(0)] = shadow$dom$state_machine__30366__auto__);

(statearr_34542[(1)] = (1));

return statearr_34542;
});
var shadow$dom$state_machine__30366__auto____1 = (function (state_34533){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_34533);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e34543){var ex__30369__auto__ = e34543;
var statearr_34544_34987 = state_34533;
(statearr_34544_34987[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_34533[(4)]))){
var statearr_34545_34988 = state_34533;
(statearr_34545_34988[(1)] = cljs.core.first((state_34533[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34989 = state_34533;
state_34533 = G__34989;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
shadow$dom$state_machine__30366__auto__ = function(state_34533){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30366__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30366__auto____1.call(this,state_34533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30366__auto____0;
shadow$dom$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30366__auto____1;
return shadow$dom$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_34547 = f__30526__auto__();
(statearr_34547[(6)] = c__30525__auto___34984);

return statearr_34547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

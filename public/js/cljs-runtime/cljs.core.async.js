goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30638 = arguments.length;
switch (G__30638) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30639 = (function (f,blockable,meta30640){
this.f = f;
this.blockable = blockable;
this.meta30640 = meta30640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30641,meta30640__$1){
var self__ = this;
var _30641__$1 = this;
return (new cljs.core.async.t_cljs$core$async30639(self__.f,self__.blockable,meta30640__$1));
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30641){
var self__ = this;
var _30641__$1 = this;
return self__.meta30640;
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30640","meta30640",-1647552450,null)], null);
}));

(cljs.core.async.t_cljs$core$async30639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30639");

(cljs.core.async.t_cljs$core$async30639.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30639.
 */
cljs.core.async.__GT_t_cljs$core$async30639 = (function cljs$core$async$__GT_t_cljs$core$async30639(f__$1,blockable__$1,meta30640){
return (new cljs.core.async.t_cljs$core$async30639(f__$1,blockable__$1,meta30640));
});

}

return (new cljs.core.async.t_cljs$core$async30639(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30667 = arguments.length;
switch (G__30667) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30681 = arguments.length;
switch (G__30681) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30689 = arguments.length;
switch (G__30689) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33407 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33407) : fn1.call(null,val_33407));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33407) : fn1.call(null,val_33407));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30711 = arguments.length;
switch (G__30711) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___33417 = n;
var x_33418 = (0);
while(true){
if((x_33418 < n__4613__auto___33417)){
(a[x_33418] = x_33418);

var G__33419 = (x_33418 + (1));
x_33418 = G__33419;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30723 = (function (flag,meta30724){
this.flag = flag;
this.meta30724 = meta30724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30725,meta30724__$1){
var self__ = this;
var _30725__$1 = this;
return (new cljs.core.async.t_cljs$core$async30723(self__.flag,meta30724__$1));
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30725){
var self__ = this;
var _30725__$1 = this;
return self__.meta30724;
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30724","meta30724",-74672895,null)], null);
}));

(cljs.core.async.t_cljs$core$async30723.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30723");

(cljs.core.async.t_cljs$core$async30723.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30723");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30723.
 */
cljs.core.async.__GT_t_cljs$core$async30723 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30723(flag__$1,meta30724){
return (new cljs.core.async.t_cljs$core$async30723(flag__$1,meta30724));
});

}

return (new cljs.core.async.t_cljs$core$async30723(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30739 = (function (flag,cb,meta30740){
this.flag = flag;
this.cb = cb;
this.meta30740 = meta30740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30741,meta30740__$1){
var self__ = this;
var _30741__$1 = this;
return (new cljs.core.async.t_cljs$core$async30739(self__.flag,self__.cb,meta30740__$1));
}));

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30741){
var self__ = this;
var _30741__$1 = this;
return self__.meta30740;
}));

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30740","meta30740",127460115,null)], null);
}));

(cljs.core.async.t_cljs$core$async30739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30739");

(cljs.core.async.t_cljs$core$async30739.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30739.
 */
cljs.core.async.__GT_t_cljs$core$async30739 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30739(flag__$1,cb__$1,meta30740){
return (new cljs.core.async.t_cljs$core$async30739(flag__$1,cb__$1,meta30740));
});

}

return (new cljs.core.async.t_cljs$core$async30739(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30752_SHARP_){
var G__30754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30752_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30754) : fret.call(null,G__30754));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30753_SHARP_){
var G__30757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30753_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30757) : fret.call(null,G__30757));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33460 = (i + (1));
i = G__33460;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33464 = arguments.length;
var i__4737__auto___33465 = (0);
while(true){
if((i__4737__auto___33465 < len__4736__auto___33464)){
args__4742__auto__.push((arguments[i__4737__auto___33465]));

var G__33466 = (i__4737__auto___33465 + (1));
i__4737__auto___33465 = G__33466;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30803){
var map__30809 = p__30803;
var map__30809__$1 = (((((!((map__30809 == null))))?(((((map__30809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30809):map__30809);
var opts = map__30809__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30776){
var G__30778 = cljs.core.first(seq30776);
var seq30776__$1 = cljs.core.next(seq30776);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30778,seq30776__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30841 = arguments.length;
switch (G__30841) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30525__auto___33476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_30908){
var state_val_30910 = (state_30908[(1)]);
if((state_val_30910 === (7))){
var inst_30898 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30918_33481 = state_30908__$1;
(statearr_30918_33481[(2)] = inst_30898);

(statearr_30918_33481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (1))){
var state_30908__$1 = state_30908;
var statearr_30920_33485 = state_30908__$1;
(statearr_30920_33485[(2)] = null);

(statearr_30920_33485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (4))){
var inst_30869 = (state_30908[(7)]);
var inst_30869__$1 = (state_30908[(2)]);
var inst_30872 = (inst_30869__$1 == null);
var state_30908__$1 = (function (){var statearr_30926 = state_30908;
(statearr_30926[(7)] = inst_30869__$1);

return statearr_30926;
})();
if(cljs.core.truth_(inst_30872)){
var statearr_30927_33489 = state_30908__$1;
(statearr_30927_33489[(1)] = (5));

} else {
var statearr_30928_33490 = state_30908__$1;
(statearr_30928_33490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (13))){
var state_30908__$1 = state_30908;
var statearr_30930_33492 = state_30908__$1;
(statearr_30930_33492[(2)] = null);

(statearr_30930_33492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (6))){
var inst_30869 = (state_30908[(7)]);
var state_30908__$1 = state_30908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30908__$1,(11),to,inst_30869);
} else {
if((state_val_30910 === (3))){
var inst_30902 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30908__$1,inst_30902);
} else {
if((state_val_30910 === (12))){
var state_30908__$1 = state_30908;
var statearr_30941_33495 = state_30908__$1;
(statearr_30941_33495[(2)] = null);

(statearr_30941_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (2))){
var state_30908__$1 = state_30908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30908__$1,(4),from);
} else {
if((state_val_30910 === (11))){
var inst_30885 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
if(cljs.core.truth_(inst_30885)){
var statearr_30949_33498 = state_30908__$1;
(statearr_30949_33498[(1)] = (12));

} else {
var statearr_30950_33501 = state_30908__$1;
(statearr_30950_33501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (9))){
var state_30908__$1 = state_30908;
var statearr_30953_33506 = state_30908__$1;
(statearr_30953_33506[(2)] = null);

(statearr_30953_33506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (5))){
var state_30908__$1 = state_30908;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30955_33511 = state_30908__$1;
(statearr_30955_33511[(1)] = (8));

} else {
var statearr_30956_33512 = state_30908__$1;
(statearr_30956_33512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (14))){
var inst_30896 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30957_33513 = state_30908__$1;
(statearr_30957_33513[(2)] = inst_30896);

(statearr_30957_33513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (10))){
var inst_30882 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30959_33514 = state_30908__$1;
(statearr_30959_33514[(2)] = inst_30882);

(statearr_30959_33514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (8))){
var inst_30875 = cljs.core.async.close_BANG_(to);
var state_30908__$1 = state_30908;
var statearr_30964_33516 = state_30908__$1;
(statearr_30964_33516[(2)] = inst_30875);

(statearr_30964_33516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_30966 = [null,null,null,null,null,null,null,null];
(statearr_30966[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_30966[(1)] = (1));

return statearr_30966;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_30908){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_30908);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e30967){var ex__30369__auto__ = e30967;
var statearr_30968_33520 = state_30908;
(statearr_30968_33520[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_30908[(4)]))){
var statearr_30970_33521 = state_30908;
(statearr_30970_33521[(1)] = cljs.core.first((state_30908[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33523 = state_30908;
state_30908 = G__33523;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_30908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_30908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_30973 = f__30526__auto__();
(statearr_30973[(6)] = c__30525__auto___33476);

return statearr_30973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30978){
var vec__30981 = p__30978;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30981,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30981,(1),null);
var job = vec__30981;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30525__auto___33529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_30989){
var state_val_30990 = (state_30989[(1)]);
if((state_val_30990 === (1))){
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30989__$1,(2),res,v);
} else {
if((state_val_30990 === (2))){
var inst_30986 = (state_30989[(2)]);
var inst_30987 = cljs.core.async.close_BANG_(res);
var state_30989__$1 = (function (){var statearr_30993 = state_30989;
(statearr_30993[(7)] = inst_30986);

return statearr_30993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30989__$1,inst_30987);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_30994 = [null,null,null,null,null,null,null,null];
(statearr_30994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_30994[(1)] = (1));

return statearr_30994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_30989){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_30989);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e30997){var ex__30369__auto__ = e30997;
var statearr_30999_33533 = state_30989;
(statearr_30999_33533[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_30989[(4)]))){
var statearr_31009_33535 = state_30989;
(statearr_31009_33535[(1)] = cljs.core.first((state_30989[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33536 = state_30989;
state_30989 = G__33536;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_30989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_30989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_31011 = f__30526__auto__();
(statearr_31011[(6)] = c__30525__auto___33529);

return statearr_31011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31016){
var vec__31017 = p__31016;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31017,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31017,(1),null);
var job = vec__31017;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___33552 = n;
var __33553 = (0);
while(true){
if((__33553 < n__4613__auto___33552)){
var G__31020_33554 = type;
var G__31020_33555__$1 = (((G__31020_33554 instanceof cljs.core.Keyword))?G__31020_33554.fqn:null);
switch (G__31020_33555__$1) {
case "compute":
var c__30525__auto___33557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33553,c__30525__auto___33557,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = ((function (__33553,c__30525__auto___33557,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function (state_31041){
var state_val_31042 = (state_31041[(1)]);
if((state_val_31042 === (1))){
var state_31041__$1 = state_31041;
var statearr_31047_33561 = state_31041__$1;
(statearr_31047_33561[(2)] = null);

(statearr_31047_33561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (2))){
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31041__$1,(4),jobs);
} else {
if((state_val_31042 === (3))){
var inst_31039 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31041__$1,inst_31039);
} else {
if((state_val_31042 === (4))){
var inst_31027 = (state_31041[(2)]);
var inst_31028 = process(inst_31027);
var state_31041__$1 = state_31041;
if(cljs.core.truth_(inst_31028)){
var statearr_31048_33566 = state_31041__$1;
(statearr_31048_33566[(1)] = (5));

} else {
var statearr_31049_33567 = state_31041__$1;
(statearr_31049_33567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (5))){
var state_31041__$1 = state_31041;
var statearr_31050_33568 = state_31041__$1;
(statearr_31050_33568[(2)] = null);

(statearr_31050_33568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (6))){
var state_31041__$1 = state_31041;
var statearr_31056_33569 = state_31041__$1;
(statearr_31056_33569[(2)] = null);

(statearr_31056_33569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (7))){
var inst_31037 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31065_33571 = state_31041__$1;
(statearr_31065_33571[(2)] = inst_31037);

(statearr_31065_33571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33553,c__30525__auto___33557,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async))
;
return ((function (__33553,switch__30365__auto__,c__30525__auto___33557,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_31066 = [null,null,null,null,null,null,null];
(statearr_31066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_31066[(1)] = (1));

return statearr_31066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_31041){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_31041);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31067){var ex__30369__auto__ = e31067;
var statearr_31068_33575 = state_31041;
(statearr_31068_33575[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_31041[(4)]))){
var statearr_31069_33576 = state_31041;
(statearr_31069_33576[(1)] = cljs.core.first((state_31041[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33577 = state_31041;
state_31041 = G__33577;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_31041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_31041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
;})(__33553,switch__30365__auto__,c__30525__auto___33557,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async))
})();
var state__30527__auto__ = (function (){var statearr_31070 = f__30526__auto__();
(statearr_31070[(6)] = c__30525__auto___33557);

return statearr_31070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
});})(__33553,c__30525__auto___33557,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async))
);


break;
case "async":
var c__30525__auto___33578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33553,c__30525__auto___33578,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = ((function (__33553,c__30525__auto___33578,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function (state_31083){
var state_val_31084 = (state_31083[(1)]);
if((state_val_31084 === (1))){
var state_31083__$1 = state_31083;
var statearr_31092_33579 = state_31083__$1;
(statearr_31092_33579[(2)] = null);

(statearr_31092_33579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31084 === (2))){
var state_31083__$1 = state_31083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31083__$1,(4),jobs);
} else {
if((state_val_31084 === (3))){
var inst_31081 = (state_31083[(2)]);
var state_31083__$1 = state_31083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31083__$1,inst_31081);
} else {
if((state_val_31084 === (4))){
var inst_31073 = (state_31083[(2)]);
var inst_31074 = async(inst_31073);
var state_31083__$1 = state_31083;
if(cljs.core.truth_(inst_31074)){
var statearr_31094_33580 = state_31083__$1;
(statearr_31094_33580[(1)] = (5));

} else {
var statearr_31095_33581 = state_31083__$1;
(statearr_31095_33581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31084 === (5))){
var state_31083__$1 = state_31083;
var statearr_31096_33582 = state_31083__$1;
(statearr_31096_33582[(2)] = null);

(statearr_31096_33582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31084 === (6))){
var state_31083__$1 = state_31083;
var statearr_31097_33583 = state_31083__$1;
(statearr_31097_33583[(2)] = null);

(statearr_31097_33583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31084 === (7))){
var inst_31079 = (state_31083[(2)]);
var state_31083__$1 = state_31083;
var statearr_31098_33584 = state_31083__$1;
(statearr_31098_33584[(2)] = inst_31079);

(statearr_31098_33584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33553,c__30525__auto___33578,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async))
;
return ((function (__33553,switch__30365__auto__,c__30525__auto___33578,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_31099 = [null,null,null,null,null,null,null];
(statearr_31099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_31099[(1)] = (1));

return statearr_31099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_31083){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_31083);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31101){var ex__30369__auto__ = e31101;
var statearr_31105_33586 = state_31083;
(statearr_31105_33586[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_31083[(4)]))){
var statearr_31106_33587 = state_31083;
(statearr_31106_33587[(1)] = cljs.core.first((state_31083[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33589 = state_31083;
state_31083 = G__33589;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_31083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_31083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
;})(__33553,switch__30365__auto__,c__30525__auto___33578,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async))
})();
var state__30527__auto__ = (function (){var statearr_31114 = f__30526__auto__();
(statearr_31114[(6)] = c__30525__auto___33578);

return statearr_31114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
});})(__33553,c__30525__auto___33578,G__31020_33554,G__31020_33555__$1,n__4613__auto___33552,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31020_33555__$1)].join('')));

}

var G__33593 = (__33553 + (1));
__33553 = G__33593;
continue;
} else {
}
break;
}

var c__30525__auto___33595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_31138){
var state_val_31139 = (state_31138[(1)]);
if((state_val_31139 === (7))){
var inst_31134 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31145_33597 = state_31138__$1;
(statearr_31145_33597[(2)] = inst_31134);

(statearr_31145_33597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (1))){
var state_31138__$1 = state_31138;
var statearr_31150_33599 = state_31138__$1;
(statearr_31150_33599[(2)] = null);

(statearr_31150_33599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (4))){
var inst_31119 = (state_31138[(7)]);
var inst_31119__$1 = (state_31138[(2)]);
var inst_31120 = (inst_31119__$1 == null);
var state_31138__$1 = (function (){var statearr_31151 = state_31138;
(statearr_31151[(7)] = inst_31119__$1);

return statearr_31151;
})();
if(cljs.core.truth_(inst_31120)){
var statearr_31152_33600 = state_31138__$1;
(statearr_31152_33600[(1)] = (5));

} else {
var statearr_31153_33601 = state_31138__$1;
(statearr_31153_33601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (6))){
var inst_31124 = (state_31138[(8)]);
var inst_31119 = (state_31138[(7)]);
var inst_31124__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31125 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31126 = [inst_31119,inst_31124__$1];
var inst_31127 = (new cljs.core.PersistentVector(null,2,(5),inst_31125,inst_31126,null));
var state_31138__$1 = (function (){var statearr_31154 = state_31138;
(statearr_31154[(8)] = inst_31124__$1);

return statearr_31154;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31138__$1,(8),jobs,inst_31127);
} else {
if((state_val_31139 === (3))){
var inst_31136 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31138__$1,inst_31136);
} else {
if((state_val_31139 === (2))){
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31138__$1,(4),from);
} else {
if((state_val_31139 === (9))){
var inst_31131 = (state_31138[(2)]);
var state_31138__$1 = (function (){var statearr_31159 = state_31138;
(statearr_31159[(9)] = inst_31131);

return statearr_31159;
})();
var statearr_31160_33604 = state_31138__$1;
(statearr_31160_33604[(2)] = null);

(statearr_31160_33604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (5))){
var inst_31122 = cljs.core.async.close_BANG_(jobs);
var state_31138__$1 = state_31138;
var statearr_31163_33606 = state_31138__$1;
(statearr_31163_33606[(2)] = inst_31122);

(statearr_31163_33606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (8))){
var inst_31124 = (state_31138[(8)]);
var inst_31129 = (state_31138[(2)]);
var state_31138__$1 = (function (){var statearr_31164 = state_31138;
(statearr_31164[(10)] = inst_31129);

return statearr_31164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31138__$1,(9),results,inst_31124);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_31168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_31168[(1)] = (1));

return statearr_31168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_31138){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_31138);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31170){var ex__30369__auto__ = e31170;
var statearr_31171_33609 = state_31138;
(statearr_31171_33609[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_31138[(4)]))){
var statearr_31172_33610 = state_31138;
(statearr_31172_33610[(1)] = cljs.core.first((state_31138[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33611 = state_31138;
state_31138 = G__33611;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_31138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_31138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_31173 = f__30526__auto__();
(statearr_31173[(6)] = c__30525__auto___33595);

return statearr_31173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


var c__30525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_31220){
var state_val_31222 = (state_31220[(1)]);
if((state_val_31222 === (7))){
var inst_31216 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31231_33615 = state_31220__$1;
(statearr_31231_33615[(2)] = inst_31216);

(statearr_31231_33615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (20))){
var state_31220__$1 = state_31220;
var statearr_31232_33616 = state_31220__$1;
(statearr_31232_33616[(2)] = null);

(statearr_31232_33616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (1))){
var state_31220__$1 = state_31220;
var statearr_31233_33617 = state_31220__$1;
(statearr_31233_33617[(2)] = null);

(statearr_31233_33617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (4))){
var inst_31184 = (state_31220[(7)]);
var inst_31184__$1 = (state_31220[(2)]);
var inst_31185 = (inst_31184__$1 == null);
var state_31220__$1 = (function (){var statearr_31234 = state_31220;
(statearr_31234[(7)] = inst_31184__$1);

return statearr_31234;
})();
if(cljs.core.truth_(inst_31185)){
var statearr_31235_33622 = state_31220__$1;
(statearr_31235_33622[(1)] = (5));

} else {
var statearr_31236_33623 = state_31220__$1;
(statearr_31236_33623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (15))){
var inst_31198 = (state_31220[(8)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31220__$1,(18),to,inst_31198);
} else {
if((state_val_31222 === (21))){
var inst_31211 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31238_33624 = state_31220__$1;
(statearr_31238_33624[(2)] = inst_31211);

(statearr_31238_33624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (13))){
var inst_31213 = (state_31220[(2)]);
var state_31220__$1 = (function (){var statearr_31240 = state_31220;
(statearr_31240[(9)] = inst_31213);

return statearr_31240;
})();
var statearr_31241_33629 = state_31220__$1;
(statearr_31241_33629[(2)] = null);

(statearr_31241_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (6))){
var inst_31184 = (state_31220[(7)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31220__$1,(11),inst_31184);
} else {
if((state_val_31222 === (17))){
var inst_31206 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31206)){
var statearr_31244_33632 = state_31220__$1;
(statearr_31244_33632[(1)] = (19));

} else {
var statearr_31247_33633 = state_31220__$1;
(statearr_31247_33633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (3))){
var inst_31218 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31220__$1,inst_31218);
} else {
if((state_val_31222 === (12))){
var inst_31195 = (state_31220[(10)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31220__$1,(14),inst_31195);
} else {
if((state_val_31222 === (2))){
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31220__$1,(4),results);
} else {
if((state_val_31222 === (19))){
var state_31220__$1 = state_31220;
var statearr_31251_33634 = state_31220__$1;
(statearr_31251_33634[(2)] = null);

(statearr_31251_33634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (11))){
var inst_31195 = (state_31220[(2)]);
var state_31220__$1 = (function (){var statearr_31252 = state_31220;
(statearr_31252[(10)] = inst_31195);

return statearr_31252;
})();
var statearr_31253_33635 = state_31220__$1;
(statearr_31253_33635[(2)] = null);

(statearr_31253_33635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (9))){
var state_31220__$1 = state_31220;
var statearr_31254_33637 = state_31220__$1;
(statearr_31254_33637[(2)] = null);

(statearr_31254_33637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (5))){
var state_31220__$1 = state_31220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31255_33638 = state_31220__$1;
(statearr_31255_33638[(1)] = (8));

} else {
var statearr_31256_33640 = state_31220__$1;
(statearr_31256_33640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (14))){
var inst_31198 = (state_31220[(8)]);
var inst_31198__$1 = (state_31220[(2)]);
var inst_31199 = (inst_31198__$1 == null);
var inst_31200 = cljs.core.not(inst_31199);
var state_31220__$1 = (function (){var statearr_31258 = state_31220;
(statearr_31258[(8)] = inst_31198__$1);

return statearr_31258;
})();
if(inst_31200){
var statearr_31259_33643 = state_31220__$1;
(statearr_31259_33643[(1)] = (15));

} else {
var statearr_31260_33644 = state_31220__$1;
(statearr_31260_33644[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (16))){
var state_31220__$1 = state_31220;
var statearr_31261_33645 = state_31220__$1;
(statearr_31261_33645[(2)] = false);

(statearr_31261_33645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (10))){
var inst_31192 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31264_33646 = state_31220__$1;
(statearr_31264_33646[(2)] = inst_31192);

(statearr_31264_33646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (18))){
var inst_31203 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31267_33647 = state_31220__$1;
(statearr_31267_33647[(2)] = inst_31203);

(statearr_31267_33647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (8))){
var inst_31189 = cljs.core.async.close_BANG_(to);
var state_31220__$1 = state_31220;
var statearr_31268_33648 = state_31220__$1;
(statearr_31268_33648[(2)] = inst_31189);

(statearr_31268_33648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_31270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__);

(statearr_31270[(1)] = (1));

return statearr_31270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1 = (function (state_31220){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_31220);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31271){var ex__30369__auto__ = e31271;
var statearr_31272_33649 = state_31220;
(statearr_31272_33649[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_31220[(4)]))){
var statearr_31274_33650 = state_31220;
(statearr_31274_33650[(1)] = cljs.core.first((state_31220[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33651 = state_31220;
state_31220 = G__33651;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__ = function(state_31220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1.call(this,state_31220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_31277 = f__30526__auto__();
(statearr_31277[(6)] = c__30525__auto__);

return statearr_31277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));

return c__30525__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31282 = arguments.length;
switch (G__31282) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31293 = arguments.length;
switch (G__31293) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31306 = arguments.length;
switch (G__31306) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30525__auto___33669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_31344){
var state_val_31348 = (state_31344[(1)]);
if((state_val_31348 === (7))){
var inst_31340 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31352_33670 = state_31344__$1;
(statearr_31352_33670[(2)] = inst_31340);

(statearr_31352_33670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (1))){
var state_31344__$1 = state_31344;
var statearr_31353_33671 = state_31344__$1;
(statearr_31353_33671[(2)] = null);

(statearr_31353_33671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (4))){
var inst_31321 = (state_31344[(7)]);
var inst_31321__$1 = (state_31344[(2)]);
var inst_31322 = (inst_31321__$1 == null);
var state_31344__$1 = (function (){var statearr_31354 = state_31344;
(statearr_31354[(7)] = inst_31321__$1);

return statearr_31354;
})();
if(cljs.core.truth_(inst_31322)){
var statearr_31360_33672 = state_31344__$1;
(statearr_31360_33672[(1)] = (5));

} else {
var statearr_31361_33673 = state_31344__$1;
(statearr_31361_33673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (13))){
var state_31344__$1 = state_31344;
var statearr_31362_33674 = state_31344__$1;
(statearr_31362_33674[(2)] = null);

(statearr_31362_33674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (6))){
var inst_31321 = (state_31344[(7)]);
var inst_31327 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31321) : p.call(null,inst_31321));
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31327)){
var statearr_31365_33675 = state_31344__$1;
(statearr_31365_33675[(1)] = (9));

} else {
var statearr_31366_33676 = state_31344__$1;
(statearr_31366_33676[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (3))){
var inst_31342 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31344__$1,inst_31342);
} else {
if((state_val_31348 === (12))){
var state_31344__$1 = state_31344;
var statearr_31369_33678 = state_31344__$1;
(statearr_31369_33678[(2)] = null);

(statearr_31369_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (2))){
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31344__$1,(4),ch);
} else {
if((state_val_31348 === (11))){
var inst_31321 = (state_31344[(7)]);
var inst_31331 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31344__$1,(8),inst_31331,inst_31321);
} else {
if((state_val_31348 === (9))){
var state_31344__$1 = state_31344;
var statearr_31370_33679 = state_31344__$1;
(statearr_31370_33679[(2)] = tc);

(statearr_31370_33679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (5))){
var inst_31324 = cljs.core.async.close_BANG_(tc);
var inst_31325 = cljs.core.async.close_BANG_(fc);
var state_31344__$1 = (function (){var statearr_31372 = state_31344;
(statearr_31372[(8)] = inst_31324);

return statearr_31372;
})();
var statearr_31373_33681 = state_31344__$1;
(statearr_31373_33681[(2)] = inst_31325);

(statearr_31373_33681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (14))){
var inst_31338 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31376_33682 = state_31344__$1;
(statearr_31376_33682[(2)] = inst_31338);

(statearr_31376_33682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (10))){
var state_31344__$1 = state_31344;
var statearr_31379_33683 = state_31344__$1;
(statearr_31379_33683[(2)] = fc);

(statearr_31379_33683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (8))){
var inst_31333 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31333)){
var statearr_31380_33684 = state_31344__$1;
(statearr_31380_33684[(1)] = (12));

} else {
var statearr_31381_33685 = state_31344__$1;
(statearr_31381_33685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_31383 = [null,null,null,null,null,null,null,null,null];
(statearr_31383[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_31383[(1)] = (1));

return statearr_31383;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_31344){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_31344);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31384){var ex__30369__auto__ = e31384;
var statearr_31387_33686 = state_31344;
(statearr_31387_33686[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_31344[(4)]))){
var statearr_31389_33689 = state_31344;
(statearr_31389_33689[(1)] = cljs.core.first((state_31344[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33690 = state_31344;
state_31344 = G__33690;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_31344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_31344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_31391 = f__30526__auto__();
(statearr_31391[(6)] = c__30525__auto___33669);

return statearr_31391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_31421){
var state_val_31422 = (state_31421[(1)]);
if((state_val_31422 === (7))){
var inst_31417 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31423_33695 = state_31421__$1;
(statearr_31423_33695[(2)] = inst_31417);

(statearr_31423_33695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (1))){
var inst_31395 = init;
var inst_31396 = inst_31395;
var state_31421__$1 = (function (){var statearr_31424 = state_31421;
(statearr_31424[(7)] = inst_31396);

return statearr_31424;
})();
var statearr_31425_33699 = state_31421__$1;
(statearr_31425_33699[(2)] = null);

(statearr_31425_33699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (4))){
var inst_31403 = (state_31421[(8)]);
var inst_31403__$1 = (state_31421[(2)]);
var inst_31404 = (inst_31403__$1 == null);
var state_31421__$1 = (function (){var statearr_31426 = state_31421;
(statearr_31426[(8)] = inst_31403__$1);

return statearr_31426;
})();
if(cljs.core.truth_(inst_31404)){
var statearr_31427_33701 = state_31421__$1;
(statearr_31427_33701[(1)] = (5));

} else {
var statearr_31428_33702 = state_31421__$1;
(statearr_31428_33702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (6))){
var inst_31396 = (state_31421[(7)]);
var inst_31407 = (state_31421[(9)]);
var inst_31403 = (state_31421[(8)]);
var inst_31407__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31396,inst_31403) : f.call(null,inst_31396,inst_31403));
var inst_31409 = cljs.core.reduced_QMARK_(inst_31407__$1);
var state_31421__$1 = (function (){var statearr_31429 = state_31421;
(statearr_31429[(9)] = inst_31407__$1);

return statearr_31429;
})();
if(inst_31409){
var statearr_31430_33703 = state_31421__$1;
(statearr_31430_33703[(1)] = (8));

} else {
var statearr_31432_33704 = state_31421__$1;
(statearr_31432_33704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (3))){
var inst_31419 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31421__$1,inst_31419);
} else {
if((state_val_31422 === (2))){
var state_31421__$1 = state_31421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31421__$1,(4),ch);
} else {
if((state_val_31422 === (9))){
var inst_31407 = (state_31421[(9)]);
var inst_31396 = inst_31407;
var state_31421__$1 = (function (){var statearr_31437 = state_31421;
(statearr_31437[(7)] = inst_31396);

return statearr_31437;
})();
var statearr_31439_33705 = state_31421__$1;
(statearr_31439_33705[(2)] = null);

(statearr_31439_33705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (5))){
var inst_31396 = (state_31421[(7)]);
var state_31421__$1 = state_31421;
var statearr_31442_33710 = state_31421__$1;
(statearr_31442_33710[(2)] = inst_31396);

(statearr_31442_33710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (10))){
var inst_31415 = (state_31421[(2)]);
var state_31421__$1 = state_31421;
var statearr_31443_33711 = state_31421__$1;
(statearr_31443_33711[(2)] = inst_31415);

(statearr_31443_33711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31422 === (8))){
var inst_31407 = (state_31421[(9)]);
var inst_31411 = cljs.core.deref(inst_31407);
var state_31421__$1 = state_31421;
var statearr_31445_33712 = state_31421__$1;
(statearr_31445_33712[(2)] = inst_31411);

(statearr_31445_33712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30366__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30366__auto____0 = (function (){
var statearr_31447 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31447[(0)] = cljs$core$async$reduce_$_state_machine__30366__auto__);

(statearr_31447[(1)] = (1));

return statearr_31447;
});
var cljs$core$async$reduce_$_state_machine__30366__auto____1 = (function (state_31421){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_31421);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31448){var ex__30369__auto__ = e31448;
var statearr_31449_33714 = state_31421;
(statearr_31449_33714[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_31421[(4)]))){
var statearr_31452_33715 = state_31421;
(statearr_31452_33715[(1)] = cljs.core.first((state_31421[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33716 = state_31421;
state_31421 = G__33716;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30366__auto__ = function(state_31421){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30366__auto____1.call(this,state_31421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30366__auto____0;
cljs$core$async$reduce_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30366__auto____1;
return cljs$core$async$reduce_$_state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_31454 = f__30526__auto__();
(statearr_31454[(6)] = c__30525__auto__);

return statearr_31454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));

return c__30525__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_31466){
var state_val_31467 = (state_31466[(1)]);
if((state_val_31467 === (1))){
var inst_31461 = cljs.core.async.reduce(f__$1,init,ch);
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31466__$1,(2),inst_31461);
} else {
if((state_val_31467 === (2))){
var inst_31463 = (state_31466[(2)]);
var inst_31464 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31463) : f__$1.call(null,inst_31463));
var state_31466__$1 = state_31466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31466__$1,inst_31464);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30366__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30366__auto____0 = (function (){
var statearr_31477 = [null,null,null,null,null,null,null];
(statearr_31477[(0)] = cljs$core$async$transduce_$_state_machine__30366__auto__);

(statearr_31477[(1)] = (1));

return statearr_31477;
});
var cljs$core$async$transduce_$_state_machine__30366__auto____1 = (function (state_31466){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_31466);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31478){var ex__30369__auto__ = e31478;
var statearr_31479_33717 = state_31466;
(statearr_31479_33717[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_31466[(4)]))){
var statearr_31482_33718 = state_31466;
(statearr_31482_33718[(1)] = cljs.core.first((state_31466[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33719 = state_31466;
state_31466 = G__33719;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30366__auto__ = function(state_31466){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30366__auto____1.call(this,state_31466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30366__auto____0;
cljs$core$async$transduce_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30366__auto____1;
return cljs$core$async$transduce_$_state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_31485 = f__30526__auto__();
(statearr_31485[(6)] = c__30525__auto__);

return statearr_31485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));

return c__30525__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31490 = arguments.length;
switch (G__31490) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_31525){
var state_val_31526 = (state_31525[(1)]);
if((state_val_31526 === (7))){
var inst_31507 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31529_33721 = state_31525__$1;
(statearr_31529_33721[(2)] = inst_31507);

(statearr_31529_33721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (1))){
var inst_31494 = cljs.core.seq(coll);
var inst_31495 = inst_31494;
var state_31525__$1 = (function (){var statearr_31530 = state_31525;
(statearr_31530[(7)] = inst_31495);

return statearr_31530;
})();
var statearr_31532_33726 = state_31525__$1;
(statearr_31532_33726[(2)] = null);

(statearr_31532_33726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (4))){
var inst_31495 = (state_31525[(7)]);
var inst_31505 = cljs.core.first(inst_31495);
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31525__$1,(7),ch,inst_31505);
} else {
if((state_val_31526 === (13))){
var inst_31519 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31536_33737 = state_31525__$1;
(statearr_31536_33737[(2)] = inst_31519);

(statearr_31536_33737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (6))){
var inst_31510 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
if(cljs.core.truth_(inst_31510)){
var statearr_31537_33738 = state_31525__$1;
(statearr_31537_33738[(1)] = (8));

} else {
var statearr_31538_33739 = state_31525__$1;
(statearr_31538_33739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (3))){
var inst_31523 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31525__$1,inst_31523);
} else {
if((state_val_31526 === (12))){
var state_31525__$1 = state_31525;
var statearr_31539_33740 = state_31525__$1;
(statearr_31539_33740[(2)] = null);

(statearr_31539_33740[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (2))){
var inst_31495 = (state_31525[(7)]);
var state_31525__$1 = state_31525;
if(cljs.core.truth_(inst_31495)){
var statearr_31540_33741 = state_31525__$1;
(statearr_31540_33741[(1)] = (4));

} else {
var statearr_31541_33742 = state_31525__$1;
(statearr_31541_33742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (11))){
var inst_31516 = cljs.core.async.close_BANG_(ch);
var state_31525__$1 = state_31525;
var statearr_31544_33743 = state_31525__$1;
(statearr_31544_33743[(2)] = inst_31516);

(statearr_31544_33743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (9))){
var state_31525__$1 = state_31525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31547_33744 = state_31525__$1;
(statearr_31547_33744[(1)] = (11));

} else {
var statearr_31548_33745 = state_31525__$1;
(statearr_31548_33745[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (5))){
var inst_31495 = (state_31525[(7)]);
var state_31525__$1 = state_31525;
var statearr_31550_33746 = state_31525__$1;
(statearr_31550_33746[(2)] = inst_31495);

(statearr_31550_33746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (10))){
var inst_31521 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31555_33747 = state_31525__$1;
(statearr_31555_33747[(2)] = inst_31521);

(statearr_31555_33747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (8))){
var inst_31495 = (state_31525[(7)]);
var inst_31512 = cljs.core.next(inst_31495);
var inst_31495__$1 = inst_31512;
var state_31525__$1 = (function (){var statearr_31556 = state_31525;
(statearr_31556[(7)] = inst_31495__$1);

return statearr_31556;
})();
var statearr_31557_33748 = state_31525__$1;
(statearr_31557_33748[(2)] = null);

(statearr_31557_33748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_31559 = [null,null,null,null,null,null,null,null];
(statearr_31559[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_31559[(1)] = (1));

return statearr_31559;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_31525){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_31525);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31560){var ex__30369__auto__ = e31560;
var statearr_31561_33753 = state_31525;
(statearr_31561_33753[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_31525[(4)]))){
var statearr_31563_33758 = state_31525;
(statearr_31563_33758[(1)] = cljs.core.first((state_31525[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33759 = state_31525;
state_31525 = G__33759;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_31525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_31525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_31565 = f__30526__auto__();
(statearr_31565[(6)] = c__30525__auto__);

return statearr_31565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));

return c__30525__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33760 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33760(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33767 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33767(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33768 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33768(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33774 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33774(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31579 = (function (ch,cs,meta31580){
this.ch = ch;
this.cs = cs;
this.meta31580 = meta31580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31581,meta31580__$1){
var self__ = this;
var _31581__$1 = this;
return (new cljs.core.async.t_cljs$core$async31579(self__.ch,self__.cs,meta31580__$1));
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31581){
var self__ = this;
var _31581__$1 = this;
return self__.meta31580;
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31580","meta31580",1634363732,null)], null);
}));

(cljs.core.async.t_cljs$core$async31579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31579");

(cljs.core.async.t_cljs$core$async31579.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31579.
 */
cljs.core.async.__GT_t_cljs$core$async31579 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31579(ch__$1,cs__$1,meta31580){
return (new cljs.core.async.t_cljs$core$async31579(ch__$1,cs__$1,meta31580));
});

}

return (new cljs.core.async.t_cljs$core$async31579(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30525__auto___33799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_31757){
var state_val_31762 = (state_31757[(1)]);
if((state_val_31762 === (7))){
var inst_31746 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31764_33801 = state_31757__$1;
(statearr_31764_33801[(2)] = inst_31746);

(statearr_31764_33801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (20))){
var inst_31638 = (state_31757[(7)]);
var inst_31656 = cljs.core.first(inst_31638);
var inst_31657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31656,(0),null);
var inst_31659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31656,(1),null);
var state_31757__$1 = (function (){var statearr_31765 = state_31757;
(statearr_31765[(8)] = inst_31657);

return statearr_31765;
})();
if(cljs.core.truth_(inst_31659)){
var statearr_31766_33807 = state_31757__$1;
(statearr_31766_33807[(1)] = (22));

} else {
var statearr_31768_33808 = state_31757__$1;
(statearr_31768_33808[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (27))){
var inst_31690 = (state_31757[(9)]);
var inst_31605 = (state_31757[(10)]);
var inst_31697 = (state_31757[(11)]);
var inst_31692 = (state_31757[(12)]);
var inst_31697__$1 = cljs.core._nth(inst_31690,inst_31692);
var inst_31698 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31697__$1,inst_31605,done);
var state_31757__$1 = (function (){var statearr_31769 = state_31757;
(statearr_31769[(11)] = inst_31697__$1);

return statearr_31769;
})();
if(cljs.core.truth_(inst_31698)){
var statearr_31770_33810 = state_31757__$1;
(statearr_31770_33810[(1)] = (30));

} else {
var statearr_31771_33812 = state_31757__$1;
(statearr_31771_33812[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (1))){
var state_31757__$1 = state_31757;
var statearr_31772_33813 = state_31757__$1;
(statearr_31772_33813[(2)] = null);

(statearr_31772_33813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (24))){
var inst_31638 = (state_31757[(7)]);
var inst_31666 = (state_31757[(2)]);
var inst_31667 = cljs.core.next(inst_31638);
var inst_31615 = inst_31667;
var inst_31616 = null;
var inst_31617 = (0);
var inst_31618 = (0);
var state_31757__$1 = (function (){var statearr_31777 = state_31757;
(statearr_31777[(13)] = inst_31618);

(statearr_31777[(14)] = inst_31615);

(statearr_31777[(15)] = inst_31616);

(statearr_31777[(16)] = inst_31666);

(statearr_31777[(17)] = inst_31617);

return statearr_31777;
})();
var statearr_31781_33814 = state_31757__$1;
(statearr_31781_33814[(2)] = null);

(statearr_31781_33814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (39))){
var state_31757__$1 = state_31757;
var statearr_31786_33815 = state_31757__$1;
(statearr_31786_33815[(2)] = null);

(statearr_31786_33815[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (4))){
var inst_31605 = (state_31757[(10)]);
var inst_31605__$1 = (state_31757[(2)]);
var inst_31606 = (inst_31605__$1 == null);
var state_31757__$1 = (function (){var statearr_31790 = state_31757;
(statearr_31790[(10)] = inst_31605__$1);

return statearr_31790;
})();
if(cljs.core.truth_(inst_31606)){
var statearr_31792_33816 = state_31757__$1;
(statearr_31792_33816[(1)] = (5));

} else {
var statearr_31793_33817 = state_31757__$1;
(statearr_31793_33817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (15))){
var inst_31618 = (state_31757[(13)]);
var inst_31615 = (state_31757[(14)]);
var inst_31616 = (state_31757[(15)]);
var inst_31617 = (state_31757[(17)]);
var inst_31634 = (state_31757[(2)]);
var inst_31635 = (inst_31618 + (1));
var tmp31783 = inst_31615;
var tmp31784 = inst_31616;
var tmp31785 = inst_31617;
var inst_31615__$1 = tmp31783;
var inst_31616__$1 = tmp31784;
var inst_31617__$1 = tmp31785;
var inst_31618__$1 = inst_31635;
var state_31757__$1 = (function (){var statearr_31798 = state_31757;
(statearr_31798[(13)] = inst_31618__$1);

(statearr_31798[(18)] = inst_31634);

(statearr_31798[(14)] = inst_31615__$1);

(statearr_31798[(15)] = inst_31616__$1);

(statearr_31798[(17)] = inst_31617__$1);

return statearr_31798;
})();
var statearr_31799_33820 = state_31757__$1;
(statearr_31799_33820[(2)] = null);

(statearr_31799_33820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (21))){
var inst_31671 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31803_33823 = state_31757__$1;
(statearr_31803_33823[(2)] = inst_31671);

(statearr_31803_33823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (31))){
var inst_31697 = (state_31757[(11)]);
var inst_31702 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31697);
var state_31757__$1 = state_31757;
var statearr_31807_33824 = state_31757__$1;
(statearr_31807_33824[(2)] = inst_31702);

(statearr_31807_33824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (32))){
var inst_31690 = (state_31757[(9)]);
var inst_31691 = (state_31757[(19)]);
var inst_31689 = (state_31757[(20)]);
var inst_31692 = (state_31757[(12)]);
var inst_31705 = (state_31757[(2)]);
var inst_31707 = (inst_31692 + (1));
var tmp31800 = inst_31690;
var tmp31801 = inst_31691;
var tmp31802 = inst_31689;
var inst_31689__$1 = tmp31802;
var inst_31690__$1 = tmp31800;
var inst_31691__$1 = tmp31801;
var inst_31692__$1 = inst_31707;
var state_31757__$1 = (function (){var statearr_31808 = state_31757;
(statearr_31808[(9)] = inst_31690__$1);

(statearr_31808[(19)] = inst_31691__$1);

(statearr_31808[(21)] = inst_31705);

(statearr_31808[(20)] = inst_31689__$1);

(statearr_31808[(12)] = inst_31692__$1);

return statearr_31808;
})();
var statearr_31810_33829 = state_31757__$1;
(statearr_31810_33829[(2)] = null);

(statearr_31810_33829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (40))){
var inst_31719 = (state_31757[(22)]);
var inst_31723 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31719);
var state_31757__$1 = state_31757;
var statearr_31814_33832 = state_31757__$1;
(statearr_31814_33832[(2)] = inst_31723);

(statearr_31814_33832[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (33))){
var inst_31710 = (state_31757[(23)]);
var inst_31712 = cljs.core.chunked_seq_QMARK_(inst_31710);
var state_31757__$1 = state_31757;
if(inst_31712){
var statearr_31815_33834 = state_31757__$1;
(statearr_31815_33834[(1)] = (36));

} else {
var statearr_31816_33835 = state_31757__$1;
(statearr_31816_33835[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (13))){
var inst_31628 = (state_31757[(24)]);
var inst_31631 = cljs.core.async.close_BANG_(inst_31628);
var state_31757__$1 = state_31757;
var statearr_31817_33836 = state_31757__$1;
(statearr_31817_33836[(2)] = inst_31631);

(statearr_31817_33836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (22))){
var inst_31657 = (state_31757[(8)]);
var inst_31663 = cljs.core.async.close_BANG_(inst_31657);
var state_31757__$1 = state_31757;
var statearr_31819_33837 = state_31757__$1;
(statearr_31819_33837[(2)] = inst_31663);

(statearr_31819_33837[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (36))){
var inst_31710 = (state_31757[(23)]);
var inst_31714 = cljs.core.chunk_first(inst_31710);
var inst_31715 = cljs.core.chunk_rest(inst_31710);
var inst_31716 = cljs.core.count(inst_31714);
var inst_31689 = inst_31715;
var inst_31690 = inst_31714;
var inst_31691 = inst_31716;
var inst_31692 = (0);
var state_31757__$1 = (function (){var statearr_31821 = state_31757;
(statearr_31821[(9)] = inst_31690);

(statearr_31821[(19)] = inst_31691);

(statearr_31821[(20)] = inst_31689);

(statearr_31821[(12)] = inst_31692);

return statearr_31821;
})();
var statearr_31824_33842 = state_31757__$1;
(statearr_31824_33842[(2)] = null);

(statearr_31824_33842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (41))){
var inst_31710 = (state_31757[(23)]);
var inst_31725 = (state_31757[(2)]);
var inst_31726 = cljs.core.next(inst_31710);
var inst_31689 = inst_31726;
var inst_31690 = null;
var inst_31691 = (0);
var inst_31692 = (0);
var state_31757__$1 = (function (){var statearr_31826 = state_31757;
(statearr_31826[(9)] = inst_31690);

(statearr_31826[(25)] = inst_31725);

(statearr_31826[(19)] = inst_31691);

(statearr_31826[(20)] = inst_31689);

(statearr_31826[(12)] = inst_31692);

return statearr_31826;
})();
var statearr_31827_33849 = state_31757__$1;
(statearr_31827_33849[(2)] = null);

(statearr_31827_33849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (43))){
var state_31757__$1 = state_31757;
var statearr_31828_33850 = state_31757__$1;
(statearr_31828_33850[(2)] = null);

(statearr_31828_33850[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (29))){
var inst_31734 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31833_33852 = state_31757__$1;
(statearr_31833_33852[(2)] = inst_31734);

(statearr_31833_33852[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (44))){
var inst_31743 = (state_31757[(2)]);
var state_31757__$1 = (function (){var statearr_31834 = state_31757;
(statearr_31834[(26)] = inst_31743);

return statearr_31834;
})();
var statearr_31835_33853 = state_31757__$1;
(statearr_31835_33853[(2)] = null);

(statearr_31835_33853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (6))){
var inst_31681 = (state_31757[(27)]);
var inst_31680 = cljs.core.deref(cs);
var inst_31681__$1 = cljs.core.keys(inst_31680);
var inst_31682 = cljs.core.count(inst_31681__$1);
var inst_31683 = cljs.core.reset_BANG_(dctr,inst_31682);
var inst_31688 = cljs.core.seq(inst_31681__$1);
var inst_31689 = inst_31688;
var inst_31690 = null;
var inst_31691 = (0);
var inst_31692 = (0);
var state_31757__$1 = (function (){var statearr_31836 = state_31757;
(statearr_31836[(9)] = inst_31690);

(statearr_31836[(19)] = inst_31691);

(statearr_31836[(20)] = inst_31689);

(statearr_31836[(27)] = inst_31681__$1);

(statearr_31836[(12)] = inst_31692);

(statearr_31836[(28)] = inst_31683);

return statearr_31836;
})();
var statearr_31837_33856 = state_31757__$1;
(statearr_31837_33856[(2)] = null);

(statearr_31837_33856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (28))){
var inst_31710 = (state_31757[(23)]);
var inst_31689 = (state_31757[(20)]);
var inst_31710__$1 = cljs.core.seq(inst_31689);
var state_31757__$1 = (function (){var statearr_31841 = state_31757;
(statearr_31841[(23)] = inst_31710__$1);

return statearr_31841;
})();
if(inst_31710__$1){
var statearr_31842_33857 = state_31757__$1;
(statearr_31842_33857[(1)] = (33));

} else {
var statearr_31843_33859 = state_31757__$1;
(statearr_31843_33859[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (25))){
var inst_31691 = (state_31757[(19)]);
var inst_31692 = (state_31757[(12)]);
var inst_31694 = (inst_31692 < inst_31691);
var inst_31695 = inst_31694;
var state_31757__$1 = state_31757;
if(cljs.core.truth_(inst_31695)){
var statearr_31847_33860 = state_31757__$1;
(statearr_31847_33860[(1)] = (27));

} else {
var statearr_31848_33861 = state_31757__$1;
(statearr_31848_33861[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (34))){
var state_31757__$1 = state_31757;
var statearr_31852_33863 = state_31757__$1;
(statearr_31852_33863[(2)] = null);

(statearr_31852_33863[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (17))){
var state_31757__$1 = state_31757;
var statearr_31854_33864 = state_31757__$1;
(statearr_31854_33864[(2)] = null);

(statearr_31854_33864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (3))){
var inst_31748 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31757__$1,inst_31748);
} else {
if((state_val_31762 === (12))){
var inst_31676 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31857_33865 = state_31757__$1;
(statearr_31857_33865[(2)] = inst_31676);

(statearr_31857_33865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (2))){
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31757__$1,(4),ch);
} else {
if((state_val_31762 === (23))){
var state_31757__$1 = state_31757;
var statearr_31858_33870 = state_31757__$1;
(statearr_31858_33870[(2)] = null);

(statearr_31858_33870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (35))){
var inst_31732 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31859_33871 = state_31757__$1;
(statearr_31859_33871[(2)] = inst_31732);

(statearr_31859_33871[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (19))){
var inst_31638 = (state_31757[(7)]);
var inst_31648 = cljs.core.chunk_first(inst_31638);
var inst_31649 = cljs.core.chunk_rest(inst_31638);
var inst_31650 = cljs.core.count(inst_31648);
var inst_31615 = inst_31649;
var inst_31616 = inst_31648;
var inst_31617 = inst_31650;
var inst_31618 = (0);
var state_31757__$1 = (function (){var statearr_31861 = state_31757;
(statearr_31861[(13)] = inst_31618);

(statearr_31861[(14)] = inst_31615);

(statearr_31861[(15)] = inst_31616);

(statearr_31861[(17)] = inst_31617);

return statearr_31861;
})();
var statearr_31864_33876 = state_31757__$1;
(statearr_31864_33876[(2)] = null);

(statearr_31864_33876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (11))){
var inst_31638 = (state_31757[(7)]);
var inst_31615 = (state_31757[(14)]);
var inst_31638__$1 = cljs.core.seq(inst_31615);
var state_31757__$1 = (function (){var statearr_31872 = state_31757;
(statearr_31872[(7)] = inst_31638__$1);

return statearr_31872;
})();
if(inst_31638__$1){
var statearr_31874_33877 = state_31757__$1;
(statearr_31874_33877[(1)] = (16));

} else {
var statearr_31875_33878 = state_31757__$1;
(statearr_31875_33878[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (9))){
var inst_31678 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31880_33886 = state_31757__$1;
(statearr_31880_33886[(2)] = inst_31678);

(statearr_31880_33886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (5))){
var inst_31612 = cljs.core.deref(cs);
var inst_31613 = cljs.core.seq(inst_31612);
var inst_31615 = inst_31613;
var inst_31616 = null;
var inst_31617 = (0);
var inst_31618 = (0);
var state_31757__$1 = (function (){var statearr_31883 = state_31757;
(statearr_31883[(13)] = inst_31618);

(statearr_31883[(14)] = inst_31615);

(statearr_31883[(15)] = inst_31616);

(statearr_31883[(17)] = inst_31617);

return statearr_31883;
})();
var statearr_31887_33895 = state_31757__$1;
(statearr_31887_33895[(2)] = null);

(statearr_31887_33895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (14))){
var state_31757__$1 = state_31757;
var statearr_31888_33896 = state_31757__$1;
(statearr_31888_33896[(2)] = null);

(statearr_31888_33896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (45))){
var inst_31740 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31889_33897 = state_31757__$1;
(statearr_31889_33897[(2)] = inst_31740);

(statearr_31889_33897[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (26))){
var inst_31681 = (state_31757[(27)]);
var inst_31736 = (state_31757[(2)]);
var inst_31737 = cljs.core.seq(inst_31681);
var state_31757__$1 = (function (){var statearr_31890 = state_31757;
(statearr_31890[(29)] = inst_31736);

return statearr_31890;
})();
if(inst_31737){
var statearr_31891_33898 = state_31757__$1;
(statearr_31891_33898[(1)] = (42));

} else {
var statearr_31892_33899 = state_31757__$1;
(statearr_31892_33899[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (16))){
var inst_31638 = (state_31757[(7)]);
var inst_31645 = cljs.core.chunked_seq_QMARK_(inst_31638);
var state_31757__$1 = state_31757;
if(inst_31645){
var statearr_31893_33900 = state_31757__$1;
(statearr_31893_33900[(1)] = (19));

} else {
var statearr_31894_33901 = state_31757__$1;
(statearr_31894_33901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (38))){
var inst_31729 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31895_33903 = state_31757__$1;
(statearr_31895_33903[(2)] = inst_31729);

(statearr_31895_33903[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (30))){
var state_31757__$1 = state_31757;
var statearr_31896_33904 = state_31757__$1;
(statearr_31896_33904[(2)] = null);

(statearr_31896_33904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (10))){
var inst_31618 = (state_31757[(13)]);
var inst_31616 = (state_31757[(15)]);
var inst_31626 = cljs.core._nth(inst_31616,inst_31618);
var inst_31628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31626,(0),null);
var inst_31629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31626,(1),null);
var state_31757__$1 = (function (){var statearr_31897 = state_31757;
(statearr_31897[(24)] = inst_31628);

return statearr_31897;
})();
if(cljs.core.truth_(inst_31629)){
var statearr_31898_33905 = state_31757__$1;
(statearr_31898_33905[(1)] = (13));

} else {
var statearr_31899_33912 = state_31757__$1;
(statearr_31899_33912[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (18))){
var inst_31674 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31903_33913 = state_31757__$1;
(statearr_31903_33913[(2)] = inst_31674);

(statearr_31903_33913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (42))){
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31757__$1,(45),dchan);
} else {
if((state_val_31762 === (37))){
var inst_31710 = (state_31757[(23)]);
var inst_31605 = (state_31757[(10)]);
var inst_31719 = (state_31757[(22)]);
var inst_31719__$1 = cljs.core.first(inst_31710);
var inst_31720 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31719__$1,inst_31605,done);
var state_31757__$1 = (function (){var statearr_31906 = state_31757;
(statearr_31906[(22)] = inst_31719__$1);

return statearr_31906;
})();
if(cljs.core.truth_(inst_31720)){
var statearr_31907_33915 = state_31757__$1;
(statearr_31907_33915[(1)] = (39));

} else {
var statearr_31908_33916 = state_31757__$1;
(statearr_31908_33916[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (8))){
var inst_31618 = (state_31757[(13)]);
var inst_31617 = (state_31757[(17)]);
var inst_31620 = (inst_31618 < inst_31617);
var inst_31621 = inst_31620;
var state_31757__$1 = state_31757;
if(cljs.core.truth_(inst_31621)){
var statearr_31909_33917 = state_31757__$1;
(statearr_31909_33917[(1)] = (10));

} else {
var statearr_31910_33918 = state_31757__$1;
(statearr_31910_33918[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30366__auto__ = null;
var cljs$core$async$mult_$_state_machine__30366__auto____0 = (function (){
var statearr_31911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31911[(0)] = cljs$core$async$mult_$_state_machine__30366__auto__);

(statearr_31911[(1)] = (1));

return statearr_31911;
});
var cljs$core$async$mult_$_state_machine__30366__auto____1 = (function (state_31757){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_31757);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e31912){var ex__30369__auto__ = e31912;
var statearr_31913_33919 = state_31757;
(statearr_31913_33919[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_31757[(4)]))){
var statearr_31914_33920 = state_31757;
(statearr_31914_33920[(1)] = cljs.core.first((state_31757[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33921 = state_31757;
state_31757 = G__33921;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30366__auto__ = function(state_31757){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30366__auto____1.call(this,state_31757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30366__auto____0;
cljs$core$async$mult_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30366__auto____1;
return cljs$core$async$mult_$_state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_31915 = f__30526__auto__();
(statearr_31915[(6)] = c__30525__auto___33799);

return statearr_31915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31917 = arguments.length;
switch (G__31917) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33929 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33929(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33930 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33930(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33932 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33932(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33940 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33940(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33941 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33941(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33942 = arguments.length;
var i__4737__auto___33943 = (0);
while(true){
if((i__4737__auto___33943 < len__4736__auto___33942)){
args__4742__auto__.push((arguments[i__4737__auto___33943]));

var G__33944 = (i__4737__auto___33943 + (1));
i__4737__auto___33943 = G__33944;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31941){
var map__31943 = p__31941;
var map__31943__$1 = (((((!((map__31943 == null))))?(((((map__31943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31943):map__31943);
var opts = map__31943__$1;
var statearr_31948_33945 = state;
(statearr_31948_33945[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31949_33946 = state;
(statearr_31949_33946[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31952_33947 = state;
(statearr_31952_33947[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31936){
var G__31937 = cljs.core.first(seq31936);
var seq31936__$1 = cljs.core.next(seq31936);
var G__31938 = cljs.core.first(seq31936__$1);
var seq31936__$2 = cljs.core.next(seq31936__$1);
var G__31939 = cljs.core.first(seq31936__$2);
var seq31936__$3 = cljs.core.next(seq31936__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31937,G__31938,G__31939,seq31936__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31998 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31999){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31999 = meta31999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32000,meta31999__$1){
var self__ = this;
var _32000__$1 = this;
return (new cljs.core.async.t_cljs$core$async31998(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31999__$1));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32000){
var self__ = this;
var _32000__$1 = this;
return self__.meta31999;
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31999","meta31999",-777972095,null)], null);
}));

(cljs.core.async.t_cljs$core$async31998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31998");

(cljs.core.async.t_cljs$core$async31998.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31998.
 */
cljs.core.async.__GT_t_cljs$core$async31998 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31998(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31999){
return (new cljs.core.async.t_cljs$core$async31998(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31999));
});

}

return (new cljs.core.async.t_cljs$core$async31998(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30525__auto___33958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_32122){
var state_val_32123 = (state_32122[(1)]);
if((state_val_32123 === (7))){
var inst_32036 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32124_33959 = state_32122__$1;
(statearr_32124_33959[(2)] = inst_32036);

(statearr_32124_33959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (20))){
var inst_32048 = (state_32122[(7)]);
var state_32122__$1 = state_32122;
var statearr_32125_33961 = state_32122__$1;
(statearr_32125_33961[(2)] = inst_32048);

(statearr_32125_33961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (27))){
var state_32122__$1 = state_32122;
var statearr_32126_33962 = state_32122__$1;
(statearr_32126_33962[(2)] = null);

(statearr_32126_33962[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (1))){
var inst_32022 = (state_32122[(8)]);
var inst_32022__$1 = calc_state();
var inst_32024 = (inst_32022__$1 == null);
var inst_32025 = cljs.core.not(inst_32024);
var state_32122__$1 = (function (){var statearr_32127 = state_32122;
(statearr_32127[(8)] = inst_32022__$1);

return statearr_32127;
})();
if(inst_32025){
var statearr_32128_33965 = state_32122__$1;
(statearr_32128_33965[(1)] = (2));

} else {
var statearr_32129_33966 = state_32122__$1;
(statearr_32129_33966[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (24))){
var inst_32072 = (state_32122[(9)]);
var inst_32081 = (state_32122[(10)]);
var inst_32096 = (state_32122[(11)]);
var inst_32096__$1 = (inst_32072.cljs$core$IFn$_invoke$arity$1 ? inst_32072.cljs$core$IFn$_invoke$arity$1(inst_32081) : inst_32072.call(null,inst_32081));
var state_32122__$1 = (function (){var statearr_32166 = state_32122;
(statearr_32166[(11)] = inst_32096__$1);

return statearr_32166;
})();
if(cljs.core.truth_(inst_32096__$1)){
var statearr_32167_33968 = state_32122__$1;
(statearr_32167_33968[(1)] = (29));

} else {
var statearr_32168_33969 = state_32122__$1;
(statearr_32168_33969[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (4))){
var inst_32039 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32039)){
var statearr_32169_33970 = state_32122__$1;
(statearr_32169_33970[(1)] = (8));

} else {
var statearr_32170_33971 = state_32122__$1;
(statearr_32170_33971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (15))){
var inst_32066 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32066)){
var statearr_32171_33972 = state_32122__$1;
(statearr_32171_33972[(1)] = (19));

} else {
var statearr_32172_33973 = state_32122__$1;
(statearr_32172_33973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (21))){
var inst_32071 = (state_32122[(12)]);
var inst_32071__$1 = (state_32122[(2)]);
var inst_32072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32071__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32071__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32071__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32122__$1 = (function (){var statearr_32173 = state_32122;
(statearr_32173[(9)] = inst_32072);

(statearr_32173[(12)] = inst_32071__$1);

(statearr_32173[(13)] = inst_32073);

return statearr_32173;
})();
return cljs.core.async.ioc_alts_BANG_(state_32122__$1,(22),inst_32074);
} else {
if((state_val_32123 === (31))){
var inst_32104 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32104)){
var statearr_32174_33976 = state_32122__$1;
(statearr_32174_33976[(1)] = (32));

} else {
var statearr_32175_33978 = state_32122__$1;
(statearr_32175_33978[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (32))){
var inst_32080 = (state_32122[(14)]);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32122__$1,(35),out,inst_32080);
} else {
if((state_val_32123 === (33))){
var inst_32071 = (state_32122[(12)]);
var inst_32048 = inst_32071;
var state_32122__$1 = (function (){var statearr_32176 = state_32122;
(statearr_32176[(7)] = inst_32048);

return statearr_32176;
})();
var statearr_32177_33979 = state_32122__$1;
(statearr_32177_33979[(2)] = null);

(statearr_32177_33979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (13))){
var inst_32048 = (state_32122[(7)]);
var inst_32055 = inst_32048.cljs$lang$protocol_mask$partition0$;
var inst_32056 = (inst_32055 & (64));
var inst_32057 = inst_32048.cljs$core$ISeq$;
var inst_32058 = (cljs.core.PROTOCOL_SENTINEL === inst_32057);
var inst_32059 = ((inst_32056) || (inst_32058));
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32059)){
var statearr_32178_33980 = state_32122__$1;
(statearr_32178_33980[(1)] = (16));

} else {
var statearr_32179_33981 = state_32122__$1;
(statearr_32179_33981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (22))){
var inst_32081 = (state_32122[(10)]);
var inst_32080 = (state_32122[(14)]);
var inst_32079 = (state_32122[(2)]);
var inst_32080__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32079,(0),null);
var inst_32081__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32079,(1),null);
var inst_32082 = (inst_32080__$1 == null);
var inst_32083 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32081__$1,change);
var inst_32084 = ((inst_32082) || (inst_32083));
var state_32122__$1 = (function (){var statearr_32180 = state_32122;
(statearr_32180[(10)] = inst_32081__$1);

(statearr_32180[(14)] = inst_32080__$1);

return statearr_32180;
})();
if(cljs.core.truth_(inst_32084)){
var statearr_32181_33983 = state_32122__$1;
(statearr_32181_33983[(1)] = (23));

} else {
var statearr_32182_33985 = state_32122__$1;
(statearr_32182_33985[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (36))){
var inst_32071 = (state_32122[(12)]);
var inst_32048 = inst_32071;
var state_32122__$1 = (function (){var statearr_32183 = state_32122;
(statearr_32183[(7)] = inst_32048);

return statearr_32183;
})();
var statearr_32184_33988 = state_32122__$1;
(statearr_32184_33988[(2)] = null);

(statearr_32184_33988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (29))){
var inst_32096 = (state_32122[(11)]);
var state_32122__$1 = state_32122;
var statearr_32185_33990 = state_32122__$1;
(statearr_32185_33990[(2)] = inst_32096);

(statearr_32185_33990[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (6))){
var state_32122__$1 = state_32122;
var statearr_32188_33991 = state_32122__$1;
(statearr_32188_33991[(2)] = false);

(statearr_32188_33991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (28))){
var inst_32091 = (state_32122[(2)]);
var inst_32093 = calc_state();
var inst_32048 = inst_32093;
var state_32122__$1 = (function (){var statearr_32189 = state_32122;
(statearr_32189[(7)] = inst_32048);

(statearr_32189[(15)] = inst_32091);

return statearr_32189;
})();
var statearr_32190_33992 = state_32122__$1;
(statearr_32190_33992[(2)] = null);

(statearr_32190_33992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (25))){
var inst_32118 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32191_33996 = state_32122__$1;
(statearr_32191_33996[(2)] = inst_32118);

(statearr_32191_33996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (34))){
var inst_32116 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32192_33998 = state_32122__$1;
(statearr_32192_33998[(2)] = inst_32116);

(statearr_32192_33998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (17))){
var state_32122__$1 = state_32122;
var statearr_32193_34000 = state_32122__$1;
(statearr_32193_34000[(2)] = false);

(statearr_32193_34000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (3))){
var state_32122__$1 = state_32122;
var statearr_32194_34003 = state_32122__$1;
(statearr_32194_34003[(2)] = false);

(statearr_32194_34003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (12))){
var inst_32120 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32122__$1,inst_32120);
} else {
if((state_val_32123 === (2))){
var inst_32022 = (state_32122[(8)]);
var inst_32028 = inst_32022.cljs$lang$protocol_mask$partition0$;
var inst_32029 = (inst_32028 & (64));
var inst_32030 = inst_32022.cljs$core$ISeq$;
var inst_32031 = (cljs.core.PROTOCOL_SENTINEL === inst_32030);
var inst_32032 = ((inst_32029) || (inst_32031));
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32032)){
var statearr_32196_34005 = state_32122__$1;
(statearr_32196_34005[(1)] = (5));

} else {
var statearr_32197_34006 = state_32122__$1;
(statearr_32197_34006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (23))){
var inst_32080 = (state_32122[(14)]);
var inst_32086 = (inst_32080 == null);
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32086)){
var statearr_32199_34007 = state_32122__$1;
(statearr_32199_34007[(1)] = (26));

} else {
var statearr_32200_34008 = state_32122__$1;
(statearr_32200_34008[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (35))){
var inst_32107 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32107)){
var statearr_32201_34009 = state_32122__$1;
(statearr_32201_34009[(1)] = (36));

} else {
var statearr_32202_34010 = state_32122__$1;
(statearr_32202_34010[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (19))){
var inst_32048 = (state_32122[(7)]);
var inst_32068 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32048);
var state_32122__$1 = state_32122;
var statearr_32203_34012 = state_32122__$1;
(statearr_32203_34012[(2)] = inst_32068);

(statearr_32203_34012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (11))){
var inst_32048 = (state_32122[(7)]);
var inst_32052 = (inst_32048 == null);
var inst_32053 = cljs.core.not(inst_32052);
var state_32122__$1 = state_32122;
if(inst_32053){
var statearr_32204_34015 = state_32122__$1;
(statearr_32204_34015[(1)] = (13));

} else {
var statearr_32205_34016 = state_32122__$1;
(statearr_32205_34016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (9))){
var inst_32022 = (state_32122[(8)]);
var state_32122__$1 = state_32122;
var statearr_32206_34017 = state_32122__$1;
(statearr_32206_34017[(2)] = inst_32022);

(statearr_32206_34017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (5))){
var state_32122__$1 = state_32122;
var statearr_32207_34020 = state_32122__$1;
(statearr_32207_34020[(2)] = true);

(statearr_32207_34020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (14))){
var state_32122__$1 = state_32122;
var statearr_32208_34022 = state_32122__$1;
(statearr_32208_34022[(2)] = false);

(statearr_32208_34022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (26))){
var inst_32081 = (state_32122[(10)]);
var inst_32088 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32081);
var state_32122__$1 = state_32122;
var statearr_32209_34023 = state_32122__$1;
(statearr_32209_34023[(2)] = inst_32088);

(statearr_32209_34023[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (16))){
var state_32122__$1 = state_32122;
var statearr_32210_34024 = state_32122__$1;
(statearr_32210_34024[(2)] = true);

(statearr_32210_34024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (38))){
var inst_32112 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32211_34025 = state_32122__$1;
(statearr_32211_34025[(2)] = inst_32112);

(statearr_32211_34025[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (30))){
var inst_32072 = (state_32122[(9)]);
var inst_32081 = (state_32122[(10)]);
var inst_32073 = (state_32122[(13)]);
var inst_32099 = cljs.core.empty_QMARK_(inst_32072);
var inst_32100 = (inst_32073.cljs$core$IFn$_invoke$arity$1 ? inst_32073.cljs$core$IFn$_invoke$arity$1(inst_32081) : inst_32073.call(null,inst_32081));
var inst_32101 = cljs.core.not(inst_32100);
var inst_32102 = ((inst_32099) && (inst_32101));
var state_32122__$1 = state_32122;
var statearr_32212_34027 = state_32122__$1;
(statearr_32212_34027[(2)] = inst_32102);

(statearr_32212_34027[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (10))){
var inst_32022 = (state_32122[(8)]);
var inst_32044 = (state_32122[(2)]);
var inst_32045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32044,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32044,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32044,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32048 = inst_32022;
var state_32122__$1 = (function (){var statearr_32213 = state_32122;
(statearr_32213[(16)] = inst_32046);

(statearr_32213[(7)] = inst_32048);

(statearr_32213[(17)] = inst_32047);

(statearr_32213[(18)] = inst_32045);

return statearr_32213;
})();
var statearr_32214_34034 = state_32122__$1;
(statearr_32214_34034[(2)] = null);

(statearr_32214_34034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (18))){
var inst_32063 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32215_34036 = state_32122__$1;
(statearr_32215_34036[(2)] = inst_32063);

(statearr_32215_34036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (37))){
var state_32122__$1 = state_32122;
var statearr_32216_34039 = state_32122__$1;
(statearr_32216_34039[(2)] = null);

(statearr_32216_34039[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (8))){
var inst_32022 = (state_32122[(8)]);
var inst_32041 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32022);
var state_32122__$1 = state_32122;
var statearr_32217_34040 = state_32122__$1;
(statearr_32217_34040[(2)] = inst_32041);

(statearr_32217_34040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30366__auto__ = null;
var cljs$core$async$mix_$_state_machine__30366__auto____0 = (function (){
var statearr_32218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32218[(0)] = cljs$core$async$mix_$_state_machine__30366__auto__);

(statearr_32218[(1)] = (1));

return statearr_32218;
});
var cljs$core$async$mix_$_state_machine__30366__auto____1 = (function (state_32122){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_32122);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32220){var ex__30369__auto__ = e32220;
var statearr_32221_34042 = state_32122;
(statearr_32221_34042[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_32122[(4)]))){
var statearr_32222_34043 = state_32122;
(statearr_32222_34043[(1)] = cljs.core.first((state_32122[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34045 = state_32122;
state_32122 = G__34045;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30366__auto__ = function(state_32122){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30366__auto____1.call(this,state_32122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30366__auto____0;
cljs$core$async$mix_$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30366__auto____1;
return cljs$core$async$mix_$_state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_32223 = f__30526__auto__();
(statearr_32223[(6)] = c__30525__auto___33958);

return statearr_32223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34050 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34050(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34060 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34060(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34067 = (function() {
var G__34068 = null;
var G__34068__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34068__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34068 = function(p,v){
switch(arguments.length){
case 1:
return G__34068__1.call(this,p);
case 2:
return G__34068__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34068.cljs$core$IFn$_invoke$arity$1 = G__34068__1;
G__34068.cljs$core$IFn$_invoke$arity$2 = G__34068__2;
return G__34068;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32237 = arguments.length;
switch (G__32237) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34067(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34067(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32249 = arguments.length;
switch (G__32249) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32245_SHARP_){
if(cljs.core.truth_((p1__32245_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32245_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32245_SHARP_.call(null,topic)))){
return p1__32245_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32245_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32256 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32257){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32257 = meta32257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32258,meta32257__$1){
var self__ = this;
var _32258__$1 = this;
return (new cljs.core.async.t_cljs$core$async32256(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32257__$1));
}));

(cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32258){
var self__ = this;
var _32258__$1 = this;
return self__.meta32257;
}));

(cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32257","meta32257",-1327825585,null)], null);
}));

(cljs.core.async.t_cljs$core$async32256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32256");

(cljs.core.async.t_cljs$core$async32256.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32256.
 */
cljs.core.async.__GT_t_cljs$core$async32256 = (function cljs$core$async$__GT_t_cljs$core$async32256(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32257){
return (new cljs.core.async.t_cljs$core$async32256(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32257));
});

}

return (new cljs.core.async.t_cljs$core$async32256(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30525__auto___34096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_32337){
var state_val_32338 = (state_32337[(1)]);
if((state_val_32338 === (7))){
var inst_32333 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32339_34101 = state_32337__$1;
(statearr_32339_34101[(2)] = inst_32333);

(statearr_32339_34101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (20))){
var state_32337__$1 = state_32337;
var statearr_32340_34106 = state_32337__$1;
(statearr_32340_34106[(2)] = null);

(statearr_32340_34106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (1))){
var state_32337__$1 = state_32337;
var statearr_32341_34111 = state_32337__$1;
(statearr_32341_34111[(2)] = null);

(statearr_32341_34111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (24))){
var inst_32316 = (state_32337[(7)]);
var inst_32325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32316);
var state_32337__$1 = state_32337;
var statearr_32342_34112 = state_32337__$1;
(statearr_32342_34112[(2)] = inst_32325);

(statearr_32342_34112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (4))){
var inst_32268 = (state_32337[(8)]);
var inst_32268__$1 = (state_32337[(2)]);
var inst_32269 = (inst_32268__$1 == null);
var state_32337__$1 = (function (){var statearr_32343 = state_32337;
(statearr_32343[(8)] = inst_32268__$1);

return statearr_32343;
})();
if(cljs.core.truth_(inst_32269)){
var statearr_32344_34113 = state_32337__$1;
(statearr_32344_34113[(1)] = (5));

} else {
var statearr_32345_34114 = state_32337__$1;
(statearr_32345_34114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (15))){
var inst_32310 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32346_34115 = state_32337__$1;
(statearr_32346_34115[(2)] = inst_32310);

(statearr_32346_34115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (21))){
var inst_32330 = (state_32337[(2)]);
var state_32337__$1 = (function (){var statearr_32347 = state_32337;
(statearr_32347[(9)] = inst_32330);

return statearr_32347;
})();
var statearr_32348_34116 = state_32337__$1;
(statearr_32348_34116[(2)] = null);

(statearr_32348_34116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (13))){
var inst_32292 = (state_32337[(10)]);
var inst_32294 = cljs.core.chunked_seq_QMARK_(inst_32292);
var state_32337__$1 = state_32337;
if(inst_32294){
var statearr_32350_34117 = state_32337__$1;
(statearr_32350_34117[(1)] = (16));

} else {
var statearr_32351_34118 = state_32337__$1;
(statearr_32351_34118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (22))){
var inst_32322 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
if(cljs.core.truth_(inst_32322)){
var statearr_32352_34123 = state_32337__$1;
(statearr_32352_34123[(1)] = (23));

} else {
var statearr_32353_34127 = state_32337__$1;
(statearr_32353_34127[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (6))){
var inst_32316 = (state_32337[(7)]);
var inst_32318 = (state_32337[(11)]);
var inst_32268 = (state_32337[(8)]);
var inst_32316__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32268) : topic_fn.call(null,inst_32268));
var inst_32317 = cljs.core.deref(mults);
var inst_32318__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32317,inst_32316__$1);
var state_32337__$1 = (function (){var statearr_32354 = state_32337;
(statearr_32354[(7)] = inst_32316__$1);

(statearr_32354[(11)] = inst_32318__$1);

return statearr_32354;
})();
if(cljs.core.truth_(inst_32318__$1)){
var statearr_32355_34128 = state_32337__$1;
(statearr_32355_34128[(1)] = (19));

} else {
var statearr_32356_34129 = state_32337__$1;
(statearr_32356_34129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (25))){
var inst_32327 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32358_34130 = state_32337__$1;
(statearr_32358_34130[(2)] = inst_32327);

(statearr_32358_34130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (17))){
var inst_32292 = (state_32337[(10)]);
var inst_32301 = cljs.core.first(inst_32292);
var inst_32302 = cljs.core.async.muxch_STAR_(inst_32301);
var inst_32303 = cljs.core.async.close_BANG_(inst_32302);
var inst_32304 = cljs.core.next(inst_32292);
var inst_32278 = inst_32304;
var inst_32279 = null;
var inst_32280 = (0);
var inst_32281 = (0);
var state_32337__$1 = (function (){var statearr_32359 = state_32337;
(statearr_32359[(12)] = inst_32281);

(statearr_32359[(13)] = inst_32280);

(statearr_32359[(14)] = inst_32303);

(statearr_32359[(15)] = inst_32278);

(statearr_32359[(16)] = inst_32279);

return statearr_32359;
})();
var statearr_32360_34131 = state_32337__$1;
(statearr_32360_34131[(2)] = null);

(statearr_32360_34131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (3))){
var inst_32335 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32337__$1,inst_32335);
} else {
if((state_val_32338 === (12))){
var inst_32312 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32361_34132 = state_32337__$1;
(statearr_32361_34132[(2)] = inst_32312);

(statearr_32361_34132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (2))){
var state_32337__$1 = state_32337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32337__$1,(4),ch);
} else {
if((state_val_32338 === (23))){
var state_32337__$1 = state_32337;
var statearr_32362_34133 = state_32337__$1;
(statearr_32362_34133[(2)] = null);

(statearr_32362_34133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (19))){
var inst_32318 = (state_32337[(11)]);
var inst_32268 = (state_32337[(8)]);
var inst_32320 = cljs.core.async.muxch_STAR_(inst_32318);
var state_32337__$1 = state_32337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32337__$1,(22),inst_32320,inst_32268);
} else {
if((state_val_32338 === (11))){
var inst_32292 = (state_32337[(10)]);
var inst_32278 = (state_32337[(15)]);
var inst_32292__$1 = cljs.core.seq(inst_32278);
var state_32337__$1 = (function (){var statearr_32363 = state_32337;
(statearr_32363[(10)] = inst_32292__$1);

return statearr_32363;
})();
if(inst_32292__$1){
var statearr_32364_34140 = state_32337__$1;
(statearr_32364_34140[(1)] = (13));

} else {
var statearr_32365_34141 = state_32337__$1;
(statearr_32365_34141[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (9))){
var inst_32314 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32366_34142 = state_32337__$1;
(statearr_32366_34142[(2)] = inst_32314);

(statearr_32366_34142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (5))){
var inst_32275 = cljs.core.deref(mults);
var inst_32276 = cljs.core.vals(inst_32275);
var inst_32277 = cljs.core.seq(inst_32276);
var inst_32278 = inst_32277;
var inst_32279 = null;
var inst_32280 = (0);
var inst_32281 = (0);
var state_32337__$1 = (function (){var statearr_32367 = state_32337;
(statearr_32367[(12)] = inst_32281);

(statearr_32367[(13)] = inst_32280);

(statearr_32367[(15)] = inst_32278);

(statearr_32367[(16)] = inst_32279);

return statearr_32367;
})();
var statearr_32368_34143 = state_32337__$1;
(statearr_32368_34143[(2)] = null);

(statearr_32368_34143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (14))){
var state_32337__$1 = state_32337;
var statearr_32373_34144 = state_32337__$1;
(statearr_32373_34144[(2)] = null);

(statearr_32373_34144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (16))){
var inst_32292 = (state_32337[(10)]);
var inst_32296 = cljs.core.chunk_first(inst_32292);
var inst_32297 = cljs.core.chunk_rest(inst_32292);
var inst_32298 = cljs.core.count(inst_32296);
var inst_32278 = inst_32297;
var inst_32279 = inst_32296;
var inst_32280 = inst_32298;
var inst_32281 = (0);
var state_32337__$1 = (function (){var statearr_32375 = state_32337;
(statearr_32375[(12)] = inst_32281);

(statearr_32375[(13)] = inst_32280);

(statearr_32375[(15)] = inst_32278);

(statearr_32375[(16)] = inst_32279);

return statearr_32375;
})();
var statearr_32376_34146 = state_32337__$1;
(statearr_32376_34146[(2)] = null);

(statearr_32376_34146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (10))){
var inst_32281 = (state_32337[(12)]);
var inst_32280 = (state_32337[(13)]);
var inst_32278 = (state_32337[(15)]);
var inst_32279 = (state_32337[(16)]);
var inst_32286 = cljs.core._nth(inst_32279,inst_32281);
var inst_32287 = cljs.core.async.muxch_STAR_(inst_32286);
var inst_32288 = cljs.core.async.close_BANG_(inst_32287);
var inst_32289 = (inst_32281 + (1));
var tmp32370 = inst_32280;
var tmp32371 = inst_32278;
var tmp32372 = inst_32279;
var inst_32278__$1 = tmp32371;
var inst_32279__$1 = tmp32372;
var inst_32280__$1 = tmp32370;
var inst_32281__$1 = inst_32289;
var state_32337__$1 = (function (){var statearr_32377 = state_32337;
(statearr_32377[(12)] = inst_32281__$1);

(statearr_32377[(13)] = inst_32280__$1);

(statearr_32377[(15)] = inst_32278__$1);

(statearr_32377[(16)] = inst_32279__$1);

(statearr_32377[(17)] = inst_32288);

return statearr_32377;
})();
var statearr_32378_34159 = state_32337__$1;
(statearr_32378_34159[(2)] = null);

(statearr_32378_34159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (18))){
var inst_32307 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32379_34164 = state_32337__$1;
(statearr_32379_34164[(2)] = inst_32307);

(statearr_32379_34164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (8))){
var inst_32281 = (state_32337[(12)]);
var inst_32280 = (state_32337[(13)]);
var inst_32283 = (inst_32281 < inst_32280);
var inst_32284 = inst_32283;
var state_32337__$1 = state_32337;
if(cljs.core.truth_(inst_32284)){
var statearr_32380_34165 = state_32337__$1;
(statearr_32380_34165[(1)] = (10));

} else {
var statearr_32381_34166 = state_32337__$1;
(statearr_32381_34166[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32382[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32382[(1)] = (1));

return statearr_32382;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32337){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_32337);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32383){var ex__30369__auto__ = e32383;
var statearr_32384_34168 = state_32337;
(statearr_32384_34168[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_32337[(4)]))){
var statearr_32385_34169 = state_32337;
(statearr_32385_34169[(1)] = cljs.core.first((state_32337[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34170 = state_32337;
state_32337 = G__34170;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_32386 = f__30526__auto__();
(statearr_32386[(6)] = c__30525__auto___34096);

return statearr_32386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32396 = arguments.length;
switch (G__32396) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32398 = arguments.length;
switch (G__32398) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32408 = arguments.length;
switch (G__32408) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30525__auto___34188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_32475){
var state_val_32476 = (state_32475[(1)]);
if((state_val_32476 === (7))){
var state_32475__$1 = state_32475;
var statearr_32477_34192 = state_32475__$1;
(statearr_32477_34192[(2)] = null);

(statearr_32477_34192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (1))){
var state_32475__$1 = state_32475;
var statearr_32480_34193 = state_32475__$1;
(statearr_32480_34193[(2)] = null);

(statearr_32480_34193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (4))){
var inst_32426 = (state_32475[(7)]);
var inst_32425 = (state_32475[(8)]);
var inst_32428 = (inst_32426 < inst_32425);
var state_32475__$1 = state_32475;
if(cljs.core.truth_(inst_32428)){
var statearr_32481_34194 = state_32475__$1;
(statearr_32481_34194[(1)] = (6));

} else {
var statearr_32482_34195 = state_32475__$1;
(statearr_32482_34195[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (15))){
var inst_32461 = (state_32475[(9)]);
var inst_32466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32461);
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32475__$1,(17),out,inst_32466);
} else {
if((state_val_32476 === (13))){
var inst_32461 = (state_32475[(9)]);
var inst_32461__$1 = (state_32475[(2)]);
var inst_32462 = cljs.core.some(cljs.core.nil_QMARK_,inst_32461__$1);
var state_32475__$1 = (function (){var statearr_32484 = state_32475;
(statearr_32484[(9)] = inst_32461__$1);

return statearr_32484;
})();
if(cljs.core.truth_(inst_32462)){
var statearr_32485_34199 = state_32475__$1;
(statearr_32485_34199[(1)] = (14));

} else {
var statearr_32486_34200 = state_32475__$1;
(statearr_32486_34200[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (6))){
var state_32475__$1 = state_32475;
var statearr_32487_34201 = state_32475__$1;
(statearr_32487_34201[(2)] = null);

(statearr_32487_34201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (17))){
var inst_32468 = (state_32475[(2)]);
var state_32475__$1 = (function (){var statearr_32490 = state_32475;
(statearr_32490[(10)] = inst_32468);

return statearr_32490;
})();
var statearr_32491_34202 = state_32475__$1;
(statearr_32491_34202[(2)] = null);

(statearr_32491_34202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (3))){
var inst_32473 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32475__$1,inst_32473);
} else {
if((state_val_32476 === (12))){
var _ = (function (){var statearr_32492 = state_32475;
(statearr_32492[(4)] = cljs.core.rest((state_32475[(4)])));

return statearr_32492;
})();
var state_32475__$1 = state_32475;
var ex32489 = (state_32475__$1[(2)]);
var statearr_32494_34206 = state_32475__$1;
(statearr_32494_34206[(5)] = ex32489);


if((ex32489 instanceof Object)){
var statearr_32496_34207 = state_32475__$1;
(statearr_32496_34207[(1)] = (11));

(statearr_32496_34207[(5)] = null);

} else {
throw ex32489;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (2))){
var inst_32424 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32425 = cnt;
var inst_32426 = (0);
var state_32475__$1 = (function (){var statearr_32502 = state_32475;
(statearr_32502[(7)] = inst_32426);

(statearr_32502[(11)] = inst_32424);

(statearr_32502[(8)] = inst_32425);

return statearr_32502;
})();
var statearr_32503_34212 = state_32475__$1;
(statearr_32503_34212[(2)] = null);

(statearr_32503_34212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (11))){
var inst_32438 = (state_32475[(2)]);
var inst_32441 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32475__$1 = (function (){var statearr_32506 = state_32475;
(statearr_32506[(12)] = inst_32438);

return statearr_32506;
})();
var statearr_32507_34213 = state_32475__$1;
(statearr_32507_34213[(2)] = inst_32441);

(statearr_32507_34213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (9))){
var inst_32426 = (state_32475[(7)]);
var _ = (function (){var statearr_32514 = state_32475;
(statearr_32514[(4)] = cljs.core.cons((12),(state_32475[(4)])));

return statearr_32514;
})();
var inst_32447 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32426) : chs__$1.call(null,inst_32426));
var inst_32448 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32426) : done.call(null,inst_32426));
var inst_32449 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32447,inst_32448);
var ___$1 = (function (){var statearr_32515 = state_32475;
(statearr_32515[(4)] = cljs.core.rest((state_32475[(4)])));

return statearr_32515;
})();
var state_32475__$1 = state_32475;
var statearr_32516_34214 = state_32475__$1;
(statearr_32516_34214[(2)] = inst_32449);

(statearr_32516_34214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (5))){
var inst_32459 = (state_32475[(2)]);
var state_32475__$1 = (function (){var statearr_32517 = state_32475;
(statearr_32517[(13)] = inst_32459);

return statearr_32517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32475__$1,(13),dchan);
} else {
if((state_val_32476 === (14))){
var inst_32464 = cljs.core.async.close_BANG_(out);
var state_32475__$1 = state_32475;
var statearr_32526_34215 = state_32475__$1;
(statearr_32526_34215[(2)] = inst_32464);

(statearr_32526_34215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (16))){
var inst_32471 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
var statearr_32547_34216 = state_32475__$1;
(statearr_32547_34216[(2)] = inst_32471);

(statearr_32547_34216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (10))){
var inst_32426 = (state_32475[(7)]);
var inst_32452 = (state_32475[(2)]);
var inst_32453 = (inst_32426 + (1));
var inst_32426__$1 = inst_32453;
var state_32475__$1 = (function (){var statearr_32548 = state_32475;
(statearr_32548[(7)] = inst_32426__$1);

(statearr_32548[(14)] = inst_32452);

return statearr_32548;
})();
var statearr_32549_34223 = state_32475__$1;
(statearr_32549_34223[(2)] = null);

(statearr_32549_34223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32476 === (8))){
var inst_32457 = (state_32475[(2)]);
var state_32475__$1 = state_32475;
var statearr_32550_34228 = state_32475__$1;
(statearr_32550_34228[(2)] = inst_32457);

(statearr_32550_34228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32551[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32551[(1)] = (1));

return statearr_32551;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32475){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_32475);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32557){var ex__30369__auto__ = e32557;
var statearr_32558_34233 = state_32475;
(statearr_32558_34233[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_32475[(4)]))){
var statearr_32559_34234 = state_32475;
(statearr_32559_34234[(1)] = cljs.core.first((state_32475[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34235 = state_32475;
state_32475 = G__34235;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_32561 = f__30526__auto__();
(statearr_32561[(6)] = c__30525__auto___34188);

return statearr_32561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32565 = arguments.length;
switch (G__32565) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30525__auto___34242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_32599){
var state_val_32600 = (state_32599[(1)]);
if((state_val_32600 === (7))){
var inst_32579 = (state_32599[(7)]);
var inst_32578 = (state_32599[(8)]);
var inst_32578__$1 = (state_32599[(2)]);
var inst_32579__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32578__$1,(0),null);
var inst_32580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32578__$1,(1),null);
var inst_32581 = (inst_32579__$1 == null);
var state_32599__$1 = (function (){var statearr_32601 = state_32599;
(statearr_32601[(7)] = inst_32579__$1);

(statearr_32601[(8)] = inst_32578__$1);

(statearr_32601[(9)] = inst_32580);

return statearr_32601;
})();
if(cljs.core.truth_(inst_32581)){
var statearr_32602_34243 = state_32599__$1;
(statearr_32602_34243[(1)] = (8));

} else {
var statearr_32603_34244 = state_32599__$1;
(statearr_32603_34244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (1))){
var inst_32568 = cljs.core.vec(chs);
var inst_32569 = inst_32568;
var state_32599__$1 = (function (){var statearr_32604 = state_32599;
(statearr_32604[(10)] = inst_32569);

return statearr_32604;
})();
var statearr_32605_34245 = state_32599__$1;
(statearr_32605_34245[(2)] = null);

(statearr_32605_34245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (4))){
var inst_32569 = (state_32599[(10)]);
var state_32599__$1 = state_32599;
return cljs.core.async.ioc_alts_BANG_(state_32599__$1,(7),inst_32569);
} else {
if((state_val_32600 === (6))){
var inst_32595 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32606_34246 = state_32599__$1;
(statearr_32606_34246[(2)] = inst_32595);

(statearr_32606_34246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (3))){
var inst_32597 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32599__$1,inst_32597);
} else {
if((state_val_32600 === (2))){
var inst_32569 = (state_32599[(10)]);
var inst_32571 = cljs.core.count(inst_32569);
var inst_32572 = (inst_32571 > (0));
var state_32599__$1 = state_32599;
if(cljs.core.truth_(inst_32572)){
var statearr_32608_34247 = state_32599__$1;
(statearr_32608_34247[(1)] = (4));

} else {
var statearr_32609_34248 = state_32599__$1;
(statearr_32609_34248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (11))){
var inst_32569 = (state_32599[(10)]);
var inst_32588 = (state_32599[(2)]);
var tmp32607 = inst_32569;
var inst_32569__$1 = tmp32607;
var state_32599__$1 = (function (){var statearr_32610 = state_32599;
(statearr_32610[(10)] = inst_32569__$1);

(statearr_32610[(11)] = inst_32588);

return statearr_32610;
})();
var statearr_32614_34249 = state_32599__$1;
(statearr_32614_34249[(2)] = null);

(statearr_32614_34249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (9))){
var inst_32579 = (state_32599[(7)]);
var state_32599__$1 = state_32599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32599__$1,(11),out,inst_32579);
} else {
if((state_val_32600 === (5))){
var inst_32593 = cljs.core.async.close_BANG_(out);
var state_32599__$1 = state_32599;
var statearr_32617_34250 = state_32599__$1;
(statearr_32617_34250[(2)] = inst_32593);

(statearr_32617_34250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (10))){
var inst_32591 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32618_34251 = state_32599__$1;
(statearr_32618_34251[(2)] = inst_32591);

(statearr_32618_34251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (8))){
var inst_32579 = (state_32599[(7)]);
var inst_32569 = (state_32599[(10)]);
var inst_32578 = (state_32599[(8)]);
var inst_32580 = (state_32599[(9)]);
var inst_32583 = (function (){var cs = inst_32569;
var vec__32574 = inst_32578;
var v = inst_32579;
var c = inst_32580;
return (function (p1__32563_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32563_SHARP_);
});
})();
var inst_32584 = cljs.core.filterv(inst_32583,inst_32569);
var inst_32569__$1 = inst_32584;
var state_32599__$1 = (function (){var statearr_32630 = state_32599;
(statearr_32630[(10)] = inst_32569__$1);

return statearr_32630;
})();
var statearr_32631_34252 = state_32599__$1;
(statearr_32631_34252[(2)] = null);

(statearr_32631_34252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32636[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32636[(1)] = (1));

return statearr_32636;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32599){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_32599);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32637){var ex__30369__auto__ = e32637;
var statearr_32638_34253 = state_32599;
(statearr_32638_34253[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_32599[(4)]))){
var statearr_32641_34254 = state_32599;
(statearr_32641_34254[(1)] = cljs.core.first((state_32599[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34255 = state_32599;
state_32599 = G__34255;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_32644 = f__30526__auto__();
(statearr_32644[(6)] = c__30525__auto___34242);

return statearr_32644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32650 = arguments.length;
switch (G__32650) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30525__auto___34260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_32678){
var state_val_32679 = (state_32678[(1)]);
if((state_val_32679 === (7))){
var inst_32658 = (state_32678[(7)]);
var inst_32658__$1 = (state_32678[(2)]);
var inst_32659 = (inst_32658__$1 == null);
var inst_32660 = cljs.core.not(inst_32659);
var state_32678__$1 = (function (){var statearr_32688 = state_32678;
(statearr_32688[(7)] = inst_32658__$1);

return statearr_32688;
})();
if(inst_32660){
var statearr_32689_34261 = state_32678__$1;
(statearr_32689_34261[(1)] = (8));

} else {
var statearr_32692_34262 = state_32678__$1;
(statearr_32692_34262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (1))){
var inst_32651 = (0);
var state_32678__$1 = (function (){var statearr_32694 = state_32678;
(statearr_32694[(8)] = inst_32651);

return statearr_32694;
})();
var statearr_32695_34263 = state_32678__$1;
(statearr_32695_34263[(2)] = null);

(statearr_32695_34263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (4))){
var state_32678__$1 = state_32678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32678__$1,(7),ch);
} else {
if((state_val_32679 === (6))){
var inst_32673 = (state_32678[(2)]);
var state_32678__$1 = state_32678;
var statearr_32696_34264 = state_32678__$1;
(statearr_32696_34264[(2)] = inst_32673);

(statearr_32696_34264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (3))){
var inst_32675 = (state_32678[(2)]);
var inst_32676 = cljs.core.async.close_BANG_(out);
var state_32678__$1 = (function (){var statearr_32701 = state_32678;
(statearr_32701[(9)] = inst_32675);

return statearr_32701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32678__$1,inst_32676);
} else {
if((state_val_32679 === (2))){
var inst_32651 = (state_32678[(8)]);
var inst_32653 = (inst_32651 < n);
var state_32678__$1 = state_32678;
if(cljs.core.truth_(inst_32653)){
var statearr_32707_34265 = state_32678__$1;
(statearr_32707_34265[(1)] = (4));

} else {
var statearr_32708_34266 = state_32678__$1;
(statearr_32708_34266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (11))){
var inst_32651 = (state_32678[(8)]);
var inst_32665 = (state_32678[(2)]);
var inst_32666 = (inst_32651 + (1));
var inst_32651__$1 = inst_32666;
var state_32678__$1 = (function (){var statearr_32712 = state_32678;
(statearr_32712[(10)] = inst_32665);

(statearr_32712[(8)] = inst_32651__$1);

return statearr_32712;
})();
var statearr_32717_34267 = state_32678__$1;
(statearr_32717_34267[(2)] = null);

(statearr_32717_34267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (9))){
var state_32678__$1 = state_32678;
var statearr_32719_34268 = state_32678__$1;
(statearr_32719_34268[(2)] = null);

(statearr_32719_34268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (5))){
var state_32678__$1 = state_32678;
var statearr_32720_34269 = state_32678__$1;
(statearr_32720_34269[(2)] = null);

(statearr_32720_34269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (10))){
var inst_32670 = (state_32678[(2)]);
var state_32678__$1 = state_32678;
var statearr_32721_34270 = state_32678__$1;
(statearr_32721_34270[(2)] = inst_32670);

(statearr_32721_34270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (8))){
var inst_32658 = (state_32678[(7)]);
var state_32678__$1 = state_32678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32678__$1,(11),out,inst_32658);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32722[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32722[(1)] = (1));

return statearr_32722;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32678){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_32678);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32725){var ex__30369__auto__ = e32725;
var statearr_32726_34272 = state_32678;
(statearr_32726_34272[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_32678[(4)]))){
var statearr_32727_34273 = state_32678;
(statearr_32727_34273[(1)] = cljs.core.first((state_32678[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34274 = state_32678;
state_32678 = G__34274;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_32728 = f__30526__auto__();
(statearr_32728[(6)] = c__30525__auto___34260);

return statearr_32728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32732 = (function (f,ch,meta32733){
this.f = f;
this.ch = ch;
this.meta32733 = meta32733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32734,meta32733__$1){
var self__ = this;
var _32734__$1 = this;
return (new cljs.core.async.t_cljs$core$async32732(self__.f,self__.ch,meta32733__$1));
}));

(cljs.core.async.t_cljs$core$async32732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32734){
var self__ = this;
var _32734__$1 = this;
return self__.meta32733;
}));

(cljs.core.async.t_cljs$core$async32732.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32732.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32732.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32732.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32732.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32748 = (function (f,ch,meta32733,_,fn1,meta32749){
this.f = f;
this.ch = ch;
this.meta32733 = meta32733;
this._ = _;
this.fn1 = fn1;
this.meta32749 = meta32749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32750,meta32749__$1){
var self__ = this;
var _32750__$1 = this;
return (new cljs.core.async.t_cljs$core$async32748(self__.f,self__.ch,self__.meta32733,self__._,self__.fn1,meta32749__$1));
}));

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32750){
var self__ = this;
var _32750__$1 = this;
return self__.meta32749;
}));

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32731_SHARP_){
var G__32757 = (((p1__32731_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32731_SHARP_) : self__.f.call(null,p1__32731_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32757) : f1.call(null,G__32757));
});
}));

(cljs.core.async.t_cljs$core$async32748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32733","meta32733",2088094294,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32732","cljs.core.async/t_cljs$core$async32732",-1530208601,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32749","meta32749",-360495940,null)], null);
}));

(cljs.core.async.t_cljs$core$async32748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32748");

(cljs.core.async.t_cljs$core$async32748.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32748.
 */
cljs.core.async.__GT_t_cljs$core$async32748 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32748(f__$1,ch__$1,meta32733__$1,___$2,fn1__$1,meta32749){
return (new cljs.core.async.t_cljs$core$async32748(f__$1,ch__$1,meta32733__$1,___$2,fn1__$1,meta32749));
});

}

return (new cljs.core.async.t_cljs$core$async32748(self__.f,self__.ch,self__.meta32733,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32758 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32758) : self__.f.call(null,G__32758));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32732.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32732.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32733","meta32733",2088094294,null)], null);
}));

(cljs.core.async.t_cljs$core$async32732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32732");

(cljs.core.async.t_cljs$core$async32732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32732.
 */
cljs.core.async.__GT_t_cljs$core$async32732 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32732(f__$1,ch__$1,meta32733){
return (new cljs.core.async.t_cljs$core$async32732(f__$1,ch__$1,meta32733));
});

}

return (new cljs.core.async.t_cljs$core$async32732(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32765 = (function (f,ch,meta32766){
this.f = f;
this.ch = ch;
this.meta32766 = meta32766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32767,meta32766__$1){
var self__ = this;
var _32767__$1 = this;
return (new cljs.core.async.t_cljs$core$async32765(self__.f,self__.ch,meta32766__$1));
}));

(cljs.core.async.t_cljs$core$async32765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32767){
var self__ = this;
var _32767__$1 = this;
return self__.meta32766;
}));

(cljs.core.async.t_cljs$core$async32765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32766","meta32766",728209902,null)], null);
}));

(cljs.core.async.t_cljs$core$async32765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32765");

(cljs.core.async.t_cljs$core$async32765.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32765.
 */
cljs.core.async.__GT_t_cljs$core$async32765 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32765(f__$1,ch__$1,meta32766){
return (new cljs.core.async.t_cljs$core$async32765(f__$1,ch__$1,meta32766));
});

}

return (new cljs.core.async.t_cljs$core$async32765(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32774 = (function (p,ch,meta32775){
this.p = p;
this.ch = ch;
this.meta32775 = meta32775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32776,meta32775__$1){
var self__ = this;
var _32776__$1 = this;
return (new cljs.core.async.t_cljs$core$async32774(self__.p,self__.ch,meta32775__$1));
}));

(cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32776){
var self__ = this;
var _32776__$1 = this;
return self__.meta32775;
}));

(cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32775","meta32775",-1597468622,null)], null);
}));

(cljs.core.async.t_cljs$core$async32774.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32774");

(cljs.core.async.t_cljs$core$async32774.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32774");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32774.
 */
cljs.core.async.__GT_t_cljs$core$async32774 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32774(p__$1,ch__$1,meta32775){
return (new cljs.core.async.t_cljs$core$async32774(p__$1,ch__$1,meta32775));
});

}

return (new cljs.core.async.t_cljs$core$async32774(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32798 = arguments.length;
switch (G__32798) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30525__auto___34293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_32819){
var state_val_32820 = (state_32819[(1)]);
if((state_val_32820 === (7))){
var inst_32815 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32821_34294 = state_32819__$1;
(statearr_32821_34294[(2)] = inst_32815);

(statearr_32821_34294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (1))){
var state_32819__$1 = state_32819;
var statearr_32823_34295 = state_32819__$1;
(statearr_32823_34295[(2)] = null);

(statearr_32823_34295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (4))){
var inst_32801 = (state_32819[(7)]);
var inst_32801__$1 = (state_32819[(2)]);
var inst_32802 = (inst_32801__$1 == null);
var state_32819__$1 = (function (){var statearr_32824 = state_32819;
(statearr_32824[(7)] = inst_32801__$1);

return statearr_32824;
})();
if(cljs.core.truth_(inst_32802)){
var statearr_32825_34298 = state_32819__$1;
(statearr_32825_34298[(1)] = (5));

} else {
var statearr_32826_34299 = state_32819__$1;
(statearr_32826_34299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (6))){
var inst_32801 = (state_32819[(7)]);
var inst_32806 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32801) : p.call(null,inst_32801));
var state_32819__$1 = state_32819;
if(cljs.core.truth_(inst_32806)){
var statearr_32827_34300 = state_32819__$1;
(statearr_32827_34300[(1)] = (8));

} else {
var statearr_32828_34301 = state_32819__$1;
(statearr_32828_34301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (3))){
var inst_32817 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32819__$1,inst_32817);
} else {
if((state_val_32820 === (2))){
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32819__$1,(4),ch);
} else {
if((state_val_32820 === (11))){
var inst_32809 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32829_34303 = state_32819__$1;
(statearr_32829_34303[(2)] = inst_32809);

(statearr_32829_34303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (9))){
var state_32819__$1 = state_32819;
var statearr_32830_34305 = state_32819__$1;
(statearr_32830_34305[(2)] = null);

(statearr_32830_34305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (5))){
var inst_32804 = cljs.core.async.close_BANG_(out);
var state_32819__$1 = state_32819;
var statearr_32831_34307 = state_32819__$1;
(statearr_32831_34307[(2)] = inst_32804);

(statearr_32831_34307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (10))){
var inst_32812 = (state_32819[(2)]);
var state_32819__$1 = (function (){var statearr_32832 = state_32819;
(statearr_32832[(8)] = inst_32812);

return statearr_32832;
})();
var statearr_32833_34308 = state_32819__$1;
(statearr_32833_34308[(2)] = null);

(statearr_32833_34308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (8))){
var inst_32801 = (state_32819[(7)]);
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32819__$1,(11),out,inst_32801);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_32834 = [null,null,null,null,null,null,null,null,null];
(statearr_32834[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_32834[(1)] = (1));

return statearr_32834;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_32819){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_32819);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32835){var ex__30369__auto__ = e32835;
var statearr_32836_34309 = state_32819;
(statearr_32836_34309[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_32819[(4)]))){
var statearr_32837_34310 = state_32819;
(statearr_32837_34310[(1)] = cljs.core.first((state_32819[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34314 = state_32819;
state_32819 = G__34314;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_32819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_32819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_32838 = f__30526__auto__();
(statearr_32838[(6)] = c__30525__auto___34293);

return statearr_32838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32840 = arguments.length;
switch (G__32840) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_32906){
var state_val_32907 = (state_32906[(1)]);
if((state_val_32907 === (7))){
var inst_32901 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32908_34318 = state_32906__$1;
(statearr_32908_34318[(2)] = inst_32901);

(statearr_32908_34318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (20))){
var inst_32869 = (state_32906[(7)]);
var inst_32882 = (state_32906[(2)]);
var inst_32883 = cljs.core.next(inst_32869);
var inst_32855 = inst_32883;
var inst_32856 = null;
var inst_32857 = (0);
var inst_32858 = (0);
var state_32906__$1 = (function (){var statearr_32909 = state_32906;
(statearr_32909[(8)] = inst_32882);

(statearr_32909[(9)] = inst_32857);

(statearr_32909[(10)] = inst_32856);

(statearr_32909[(11)] = inst_32858);

(statearr_32909[(12)] = inst_32855);

return statearr_32909;
})();
var statearr_32910_34320 = state_32906__$1;
(statearr_32910_34320[(2)] = null);

(statearr_32910_34320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (1))){
var state_32906__$1 = state_32906;
var statearr_32911_34321 = state_32906__$1;
(statearr_32911_34321[(2)] = null);

(statearr_32911_34321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (4))){
var inst_32844 = (state_32906[(13)]);
var inst_32844__$1 = (state_32906[(2)]);
var inst_32845 = (inst_32844__$1 == null);
var state_32906__$1 = (function (){var statearr_32912 = state_32906;
(statearr_32912[(13)] = inst_32844__$1);

return statearr_32912;
})();
if(cljs.core.truth_(inst_32845)){
var statearr_32913_34323 = state_32906__$1;
(statearr_32913_34323[(1)] = (5));

} else {
var statearr_32914_34325 = state_32906__$1;
(statearr_32914_34325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (15))){
var state_32906__$1 = state_32906;
var statearr_32918_34330 = state_32906__$1;
(statearr_32918_34330[(2)] = null);

(statearr_32918_34330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (21))){
var state_32906__$1 = state_32906;
var statearr_32919_34331 = state_32906__$1;
(statearr_32919_34331[(2)] = null);

(statearr_32919_34331[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (13))){
var inst_32857 = (state_32906[(9)]);
var inst_32856 = (state_32906[(10)]);
var inst_32858 = (state_32906[(11)]);
var inst_32855 = (state_32906[(12)]);
var inst_32865 = (state_32906[(2)]);
var inst_32866 = (inst_32858 + (1));
var tmp32915 = inst_32857;
var tmp32916 = inst_32856;
var tmp32917 = inst_32855;
var inst_32855__$1 = tmp32917;
var inst_32856__$1 = tmp32916;
var inst_32857__$1 = tmp32915;
var inst_32858__$1 = inst_32866;
var state_32906__$1 = (function (){var statearr_32921 = state_32906;
(statearr_32921[(9)] = inst_32857__$1);

(statearr_32921[(10)] = inst_32856__$1);

(statearr_32921[(11)] = inst_32858__$1);

(statearr_32921[(12)] = inst_32855__$1);

(statearr_32921[(14)] = inst_32865);

return statearr_32921;
})();
var statearr_32922_34339 = state_32906__$1;
(statearr_32922_34339[(2)] = null);

(statearr_32922_34339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (22))){
var state_32906__$1 = state_32906;
var statearr_32923_34344 = state_32906__$1;
(statearr_32923_34344[(2)] = null);

(statearr_32923_34344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (6))){
var inst_32844 = (state_32906[(13)]);
var inst_32853 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32844) : f.call(null,inst_32844));
var inst_32854 = cljs.core.seq(inst_32853);
var inst_32855 = inst_32854;
var inst_32856 = null;
var inst_32857 = (0);
var inst_32858 = (0);
var state_32906__$1 = (function (){var statearr_32926 = state_32906;
(statearr_32926[(9)] = inst_32857);

(statearr_32926[(10)] = inst_32856);

(statearr_32926[(11)] = inst_32858);

(statearr_32926[(12)] = inst_32855);

return statearr_32926;
})();
var statearr_32927_34365 = state_32906__$1;
(statearr_32927_34365[(2)] = null);

(statearr_32927_34365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (17))){
var inst_32869 = (state_32906[(7)]);
var inst_32873 = cljs.core.chunk_first(inst_32869);
var inst_32874 = cljs.core.chunk_rest(inst_32869);
var inst_32875 = cljs.core.count(inst_32873);
var inst_32855 = inst_32874;
var inst_32856 = inst_32873;
var inst_32857 = inst_32875;
var inst_32858 = (0);
var state_32906__$1 = (function (){var statearr_32930 = state_32906;
(statearr_32930[(9)] = inst_32857);

(statearr_32930[(10)] = inst_32856);

(statearr_32930[(11)] = inst_32858);

(statearr_32930[(12)] = inst_32855);

return statearr_32930;
})();
var statearr_32931_34382 = state_32906__$1;
(statearr_32931_34382[(2)] = null);

(statearr_32931_34382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (3))){
var inst_32903 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32906__$1,inst_32903);
} else {
if((state_val_32907 === (12))){
var inst_32891 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32932_34390 = state_32906__$1;
(statearr_32932_34390[(2)] = inst_32891);

(statearr_32932_34390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (2))){
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32906__$1,(4),in$);
} else {
if((state_val_32907 === (23))){
var inst_32899 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32933_34396 = state_32906__$1;
(statearr_32933_34396[(2)] = inst_32899);

(statearr_32933_34396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (19))){
var inst_32886 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32936_34401 = state_32906__$1;
(statearr_32936_34401[(2)] = inst_32886);

(statearr_32936_34401[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (11))){
var inst_32855 = (state_32906[(12)]);
var inst_32869 = (state_32906[(7)]);
var inst_32869__$1 = cljs.core.seq(inst_32855);
var state_32906__$1 = (function (){var statearr_32937 = state_32906;
(statearr_32937[(7)] = inst_32869__$1);

return statearr_32937;
})();
if(inst_32869__$1){
var statearr_32938_34402 = state_32906__$1;
(statearr_32938_34402[(1)] = (14));

} else {
var statearr_32939_34403 = state_32906__$1;
(statearr_32939_34403[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (9))){
var inst_32893 = (state_32906[(2)]);
var inst_32894 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32906__$1 = (function (){var statearr_32940 = state_32906;
(statearr_32940[(15)] = inst_32893);

return statearr_32940;
})();
if(cljs.core.truth_(inst_32894)){
var statearr_32941_34408 = state_32906__$1;
(statearr_32941_34408[(1)] = (21));

} else {
var statearr_32942_34410 = state_32906__$1;
(statearr_32942_34410[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (5))){
var inst_32847 = cljs.core.async.close_BANG_(out);
var state_32906__$1 = state_32906;
var statearr_32943_34411 = state_32906__$1;
(statearr_32943_34411[(2)] = inst_32847);

(statearr_32943_34411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (14))){
var inst_32869 = (state_32906[(7)]);
var inst_32871 = cljs.core.chunked_seq_QMARK_(inst_32869);
var state_32906__$1 = state_32906;
if(inst_32871){
var statearr_32945_34412 = state_32906__$1;
(statearr_32945_34412[(1)] = (17));

} else {
var statearr_32946_34413 = state_32906__$1;
(statearr_32946_34413[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (16))){
var inst_32889 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32953_34414 = state_32906__$1;
(statearr_32953_34414[(2)] = inst_32889);

(statearr_32953_34414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (10))){
var inst_32856 = (state_32906[(10)]);
var inst_32858 = (state_32906[(11)]);
var inst_32863 = cljs.core._nth(inst_32856,inst_32858);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32906__$1,(13),out,inst_32863);
} else {
if((state_val_32907 === (18))){
var inst_32869 = (state_32906[(7)]);
var inst_32880 = cljs.core.first(inst_32869);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32906__$1,(20),out,inst_32880);
} else {
if((state_val_32907 === (8))){
var inst_32857 = (state_32906[(9)]);
var inst_32858 = (state_32906[(11)]);
var inst_32860 = (inst_32858 < inst_32857);
var inst_32861 = inst_32860;
var state_32906__$1 = state_32906;
if(cljs.core.truth_(inst_32861)){
var statearr_32966_34424 = state_32906__$1;
(statearr_32966_34424[(1)] = (10));

} else {
var statearr_32967_34431 = state_32906__$1;
(statearr_32967_34431[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____0 = (function (){
var statearr_32971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32971[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__);

(statearr_32971[(1)] = (1));

return statearr_32971;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____1 = (function (state_32906){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_32906);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e32972){var ex__30369__auto__ = e32972;
var statearr_32973_34433 = state_32906;
(statearr_32973_34433[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_32906[(4)]))){
var statearr_32978_34436 = state_32906;
(statearr_32978_34436[(1)] = cljs.core.first((state_32906[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34439 = state_32906;
state_32906 = G__34439;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__ = function(state_32906){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____1.call(this,state_32906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30366__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_32985 = f__30526__auto__();
(statearr_32985[(6)] = c__30525__auto__);

return statearr_32985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));

return c__30525__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33000 = arguments.length;
switch (G__33000) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33013 = arguments.length;
switch (G__33013) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33023 = arguments.length;
switch (G__33023) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30525__auto___34456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_33063){
var state_val_33064 = (state_33063[(1)]);
if((state_val_33064 === (7))){
var inst_33058 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
var statearr_33070_34457 = state_33063__$1;
(statearr_33070_34457[(2)] = inst_33058);

(statearr_33070_34457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (1))){
var inst_33039 = null;
var state_33063__$1 = (function (){var statearr_33074 = state_33063;
(statearr_33074[(7)] = inst_33039);

return statearr_33074;
})();
var statearr_33075_34459 = state_33063__$1;
(statearr_33075_34459[(2)] = null);

(statearr_33075_34459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (4))){
var inst_33042 = (state_33063[(8)]);
var inst_33042__$1 = (state_33063[(2)]);
var inst_33043 = (inst_33042__$1 == null);
var inst_33044 = cljs.core.not(inst_33043);
var state_33063__$1 = (function (){var statearr_33078 = state_33063;
(statearr_33078[(8)] = inst_33042__$1);

return statearr_33078;
})();
if(inst_33044){
var statearr_33080_34460 = state_33063__$1;
(statearr_33080_34460[(1)] = (5));

} else {
var statearr_33081_34461 = state_33063__$1;
(statearr_33081_34461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (6))){
var state_33063__$1 = state_33063;
var statearr_33082_34462 = state_33063__$1;
(statearr_33082_34462[(2)] = null);

(statearr_33082_34462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (3))){
var inst_33060 = (state_33063[(2)]);
var inst_33061 = cljs.core.async.close_BANG_(out);
var state_33063__$1 = (function (){var statearr_33090 = state_33063;
(statearr_33090[(9)] = inst_33060);

return statearr_33090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33063__$1,inst_33061);
} else {
if((state_val_33064 === (2))){
var state_33063__$1 = state_33063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33063__$1,(4),ch);
} else {
if((state_val_33064 === (11))){
var inst_33042 = (state_33063[(8)]);
var inst_33052 = (state_33063[(2)]);
var inst_33039 = inst_33042;
var state_33063__$1 = (function (){var statearr_33097 = state_33063;
(statearr_33097[(7)] = inst_33039);

(statearr_33097[(10)] = inst_33052);

return statearr_33097;
})();
var statearr_33098_34472 = state_33063__$1;
(statearr_33098_34472[(2)] = null);

(statearr_33098_34472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (9))){
var inst_33042 = (state_33063[(8)]);
var state_33063__$1 = state_33063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33063__$1,(11),out,inst_33042);
} else {
if((state_val_33064 === (5))){
var inst_33042 = (state_33063[(8)]);
var inst_33039 = (state_33063[(7)]);
var inst_33046 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33042,inst_33039);
var state_33063__$1 = state_33063;
if(inst_33046){
var statearr_33100_34474 = state_33063__$1;
(statearr_33100_34474[(1)] = (8));

} else {
var statearr_33107_34475 = state_33063__$1;
(statearr_33107_34475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (10))){
var inst_33055 = (state_33063[(2)]);
var state_33063__$1 = state_33063;
var statearr_33109_34477 = state_33063__$1;
(statearr_33109_34477[(2)] = inst_33055);

(statearr_33109_34477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33064 === (8))){
var inst_33039 = (state_33063[(7)]);
var tmp33099 = inst_33039;
var inst_33039__$1 = tmp33099;
var state_33063__$1 = (function (){var statearr_33112 = state_33063;
(statearr_33112[(7)] = inst_33039__$1);

return statearr_33112;
})();
var statearr_33114_34479 = state_33063__$1;
(statearr_33114_34479[(2)] = null);

(statearr_33114_34479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_33120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33120[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_33120[(1)] = (1));

return statearr_33120;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_33063){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_33063);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e33125){var ex__30369__auto__ = e33125;
var statearr_33126_34480 = state_33063;
(statearr_33126_34480[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_33063[(4)]))){
var statearr_33128_34481 = state_33063;
(statearr_33128_34481[(1)] = cljs.core.first((state_33063[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34482 = state_33063;
state_33063 = G__34482;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_33063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_33063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_33132 = f__30526__auto__();
(statearr_33132[(6)] = c__30525__auto___34456);

return statearr_33132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33143 = arguments.length;
switch (G__33143) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30525__auto___34491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_33204){
var state_val_33206 = (state_33204[(1)]);
if((state_val_33206 === (7))){
var inst_33196 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33213_34492 = state_33204__$1;
(statearr_33213_34492[(2)] = inst_33196);

(statearr_33213_34492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (1))){
var inst_33154 = (new Array(n));
var inst_33155 = inst_33154;
var inst_33156 = (0);
var state_33204__$1 = (function (){var statearr_33214 = state_33204;
(statearr_33214[(7)] = inst_33155);

(statearr_33214[(8)] = inst_33156);

return statearr_33214;
})();
var statearr_33217_34493 = state_33204__$1;
(statearr_33217_34493[(2)] = null);

(statearr_33217_34493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (4))){
var inst_33163 = (state_33204[(9)]);
var inst_33163__$1 = (state_33204[(2)]);
var inst_33165 = (inst_33163__$1 == null);
var inst_33166 = cljs.core.not(inst_33165);
var state_33204__$1 = (function (){var statearr_33218 = state_33204;
(statearr_33218[(9)] = inst_33163__$1);

return statearr_33218;
})();
if(inst_33166){
var statearr_33223_34494 = state_33204__$1;
(statearr_33223_34494[(1)] = (5));

} else {
var statearr_33224_34495 = state_33204__$1;
(statearr_33224_34495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (15))){
var inst_33190 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33226_34496 = state_33204__$1;
(statearr_33226_34496[(2)] = inst_33190);

(statearr_33226_34496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (13))){
var state_33204__$1 = state_33204;
var statearr_33229_34497 = state_33204__$1;
(statearr_33229_34497[(2)] = null);

(statearr_33229_34497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (6))){
var inst_33156 = (state_33204[(8)]);
var inst_33186 = (inst_33156 > (0));
var state_33204__$1 = state_33204;
if(cljs.core.truth_(inst_33186)){
var statearr_33232_34499 = state_33204__$1;
(statearr_33232_34499[(1)] = (12));

} else {
var statearr_33234_34500 = state_33204__$1;
(statearr_33234_34500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (3))){
var inst_33198 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33204__$1,inst_33198);
} else {
if((state_val_33206 === (12))){
var inst_33155 = (state_33204[(7)]);
var inst_33188 = cljs.core.vec(inst_33155);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33204__$1,(15),out,inst_33188);
} else {
if((state_val_33206 === (2))){
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33204__$1,(4),ch);
} else {
if((state_val_33206 === (11))){
var inst_33179 = (state_33204[(2)]);
var inst_33180 = (new Array(n));
var inst_33155 = inst_33180;
var inst_33156 = (0);
var state_33204__$1 = (function (){var statearr_33244 = state_33204;
(statearr_33244[(10)] = inst_33179);

(statearr_33244[(7)] = inst_33155);

(statearr_33244[(8)] = inst_33156);

return statearr_33244;
})();
var statearr_33249_34502 = state_33204__$1;
(statearr_33249_34502[(2)] = null);

(statearr_33249_34502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (9))){
var inst_33155 = (state_33204[(7)]);
var inst_33177 = cljs.core.vec(inst_33155);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33204__$1,(11),out,inst_33177);
} else {
if((state_val_33206 === (5))){
var inst_33155 = (state_33204[(7)]);
var inst_33170 = (state_33204[(11)]);
var inst_33163 = (state_33204[(9)]);
var inst_33156 = (state_33204[(8)]);
var inst_33168 = (inst_33155[inst_33156] = inst_33163);
var inst_33170__$1 = (inst_33156 + (1));
var inst_33171 = (inst_33170__$1 < n);
var state_33204__$1 = (function (){var statearr_33252 = state_33204;
(statearr_33252[(11)] = inst_33170__$1);

(statearr_33252[(12)] = inst_33168);

return statearr_33252;
})();
if(cljs.core.truth_(inst_33171)){
var statearr_33253_34505 = state_33204__$1;
(statearr_33253_34505[(1)] = (8));

} else {
var statearr_33258_34507 = state_33204__$1;
(statearr_33258_34507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (14))){
var inst_33193 = (state_33204[(2)]);
var inst_33194 = cljs.core.async.close_BANG_(out);
var state_33204__$1 = (function (){var statearr_33260 = state_33204;
(statearr_33260[(13)] = inst_33193);

return statearr_33260;
})();
var statearr_33262_34508 = state_33204__$1;
(statearr_33262_34508[(2)] = inst_33194);

(statearr_33262_34508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (10))){
var inst_33184 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33265_34510 = state_33204__$1;
(statearr_33265_34510[(2)] = inst_33184);

(statearr_33265_34510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (8))){
var inst_33155 = (state_33204[(7)]);
var inst_33170 = (state_33204[(11)]);
var tmp33259 = inst_33155;
var inst_33155__$1 = tmp33259;
var inst_33156 = inst_33170;
var state_33204__$1 = (function (){var statearr_33272 = state_33204;
(statearr_33272[(7)] = inst_33155__$1);

(statearr_33272[(8)] = inst_33156);

return statearr_33272;
})();
var statearr_33273_34511 = state_33204__$1;
(statearr_33273_34511[(2)] = null);

(statearr_33273_34511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_33274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33274[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_33274[(1)] = (1));

return statearr_33274;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_33204){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_33204);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e33277){var ex__30369__auto__ = e33277;
var statearr_33278_34513 = state_33204;
(statearr_33278_34513[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_33204[(4)]))){
var statearr_33279_34515 = state_33204;
(statearr_33279_34515[(1)] = cljs.core.first((state_33204[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34517 = state_33204;
state_33204 = G__34517;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_33204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_33204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_33282 = f__30526__auto__();
(statearr_33282[(6)] = c__30525__auto___34491);

return statearr_33282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33294 = arguments.length;
switch (G__33294) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30525__auto___34522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30526__auto__ = (function (){var switch__30365__auto__ = (function (state_33339){
var state_val_33340 = (state_33339[(1)]);
if((state_val_33340 === (7))){
var inst_33335 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
var statearr_33341_34523 = state_33339__$1;
(statearr_33341_34523[(2)] = inst_33335);

(statearr_33341_34523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (1))){
var inst_33297 = [];
var inst_33298 = inst_33297;
var inst_33299 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33339__$1 = (function (){var statearr_33342 = state_33339;
(statearr_33342[(7)] = inst_33298);

(statearr_33342[(8)] = inst_33299);

return statearr_33342;
})();
var statearr_33343_34525 = state_33339__$1;
(statearr_33343_34525[(2)] = null);

(statearr_33343_34525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (4))){
var inst_33302 = (state_33339[(9)]);
var inst_33302__$1 = (state_33339[(2)]);
var inst_33303 = (inst_33302__$1 == null);
var inst_33304 = cljs.core.not(inst_33303);
var state_33339__$1 = (function (){var statearr_33344 = state_33339;
(statearr_33344[(9)] = inst_33302__$1);

return statearr_33344;
})();
if(inst_33304){
var statearr_33345_34527 = state_33339__$1;
(statearr_33345_34527[(1)] = (5));

} else {
var statearr_33346_34530 = state_33339__$1;
(statearr_33346_34530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (15))){
var inst_33329 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
var statearr_33348_34535 = state_33339__$1;
(statearr_33348_34535[(2)] = inst_33329);

(statearr_33348_34535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (13))){
var state_33339__$1 = state_33339;
var statearr_33349_34537 = state_33339__$1;
(statearr_33349_34537[(2)] = null);

(statearr_33349_34537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (6))){
var inst_33298 = (state_33339[(7)]);
var inst_33324 = inst_33298.length;
var inst_33325 = (inst_33324 > (0));
var state_33339__$1 = state_33339;
if(cljs.core.truth_(inst_33325)){
var statearr_33350_34538 = state_33339__$1;
(statearr_33350_34538[(1)] = (12));

} else {
var statearr_33351_34539 = state_33339__$1;
(statearr_33351_34539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (3))){
var inst_33337 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33339__$1,inst_33337);
} else {
if((state_val_33340 === (12))){
var inst_33298 = (state_33339[(7)]);
var inst_33327 = cljs.core.vec(inst_33298);
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33339__$1,(15),out,inst_33327);
} else {
if((state_val_33340 === (2))){
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33339__$1,(4),ch);
} else {
if((state_val_33340 === (11))){
var inst_33302 = (state_33339[(9)]);
var inst_33307 = (state_33339[(10)]);
var inst_33317 = (state_33339[(2)]);
var inst_33318 = [];
var inst_33319 = inst_33318.push(inst_33302);
var inst_33298 = inst_33318;
var inst_33299 = inst_33307;
var state_33339__$1 = (function (){var statearr_33353 = state_33339;
(statearr_33353[(7)] = inst_33298);

(statearr_33353[(11)] = inst_33317);

(statearr_33353[(12)] = inst_33319);

(statearr_33353[(8)] = inst_33299);

return statearr_33353;
})();
var statearr_33356_34546 = state_33339__$1;
(statearr_33356_34546[(2)] = null);

(statearr_33356_34546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (9))){
var inst_33298 = (state_33339[(7)]);
var inst_33315 = cljs.core.vec(inst_33298);
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33339__$1,(11),out,inst_33315);
} else {
if((state_val_33340 === (5))){
var inst_33302 = (state_33339[(9)]);
var inst_33299 = (state_33339[(8)]);
var inst_33307 = (state_33339[(10)]);
var inst_33307__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33302) : f.call(null,inst_33302));
var inst_33308 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33307__$1,inst_33299);
var inst_33309 = cljs.core.keyword_identical_QMARK_(inst_33299,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33310 = ((inst_33308) || (inst_33309));
var state_33339__$1 = (function (){var statearr_33358 = state_33339;
(statearr_33358[(10)] = inst_33307__$1);

return statearr_33358;
})();
if(cljs.core.truth_(inst_33310)){
var statearr_33359_34548 = state_33339__$1;
(statearr_33359_34548[(1)] = (8));

} else {
var statearr_33360_34549 = state_33339__$1;
(statearr_33360_34549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (14))){
var inst_33332 = (state_33339[(2)]);
var inst_33333 = cljs.core.async.close_BANG_(out);
var state_33339__$1 = (function (){var statearr_33362 = state_33339;
(statearr_33362[(13)] = inst_33332);

return statearr_33362;
})();
var statearr_33364_34550 = state_33339__$1;
(statearr_33364_34550[(2)] = inst_33333);

(statearr_33364_34550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (10))){
var inst_33322 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
var statearr_33365_34551 = state_33339__$1;
(statearr_33365_34551[(2)] = inst_33322);

(statearr_33365_34551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (8))){
var inst_33298 = (state_33339[(7)]);
var inst_33302 = (state_33339[(9)]);
var inst_33307 = (state_33339[(10)]);
var inst_33312 = inst_33298.push(inst_33302);
var tmp33361 = inst_33298;
var inst_33298__$1 = tmp33361;
var inst_33299 = inst_33307;
var state_33339__$1 = (function (){var statearr_33366 = state_33339;
(statearr_33366[(7)] = inst_33298__$1);

(statearr_33366[(8)] = inst_33299);

(statearr_33366[(14)] = inst_33312);

return statearr_33366;
})();
var statearr_33367_34552 = state_33339__$1;
(statearr_33367_34552[(2)] = null);

(statearr_33367_34552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30366__auto__ = null;
var cljs$core$async$state_machine__30366__auto____0 = (function (){
var statearr_33372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33372[(0)] = cljs$core$async$state_machine__30366__auto__);

(statearr_33372[(1)] = (1));

return statearr_33372;
});
var cljs$core$async$state_machine__30366__auto____1 = (function (state_33339){
while(true){
var ret_value__30367__auto__ = (function (){try{while(true){
var result__30368__auto__ = switch__30365__auto__(state_33339);
if(cljs.core.keyword_identical_QMARK_(result__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30368__auto__;
}
break;
}
}catch (e33377){var ex__30369__auto__ = e33377;
var statearr_33382_34553 = state_33339;
(statearr_33382_34553[(2)] = ex__30369__auto__);


if(cljs.core.seq((state_33339[(4)]))){
var statearr_33383_34554 = state_33339;
(statearr_33383_34554[(1)] = cljs.core.first((state_33339[(4)])));

} else {
throw ex__30369__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34555 = state_33339;
state_33339 = G__34555;
continue;
} else {
return ret_value__30367__auto__;
}
break;
}
});
cljs$core$async$state_machine__30366__auto__ = function(state_33339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30366__auto____1.call(this,state_33339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30366__auto____0;
cljs$core$async$state_machine__30366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30366__auto____1;
return cljs$core$async$state_machine__30366__auto__;
})()
})();
var state__30527__auto__ = (function (){var statearr_33384 = f__30526__auto__();
(statearr_33384[(6)] = c__30525__auto___34522);

return statearr_33384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30527__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

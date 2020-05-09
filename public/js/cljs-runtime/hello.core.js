goog.provide('hello.core');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
hello.core.cnt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
hello.core.index = (function hello$core$index(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text"], null),"Counter: ",cljs.core.deref(hello.core.cnt)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hello.core.cnt,cljs.core.inc);
})], null),"CLICK ME"], null)], null);
});
hello.core.main = (function hello$core$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.core.index], null),document.querySelector("#app"));
});
hello.core.force_reload = (function hello$core$force_reload(){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Force Reloading \\o"], 0));

return hello.core.main();
});

//# sourceMappingURL=hello.core.js.map

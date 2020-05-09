
shadow.cljs.devtools.client.env.module_loaded('main');

try { hello.core.main(); } catch (e) { console.error("An error occurred when calling (hello.core/main)"); throw(e); }
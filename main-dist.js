System.register("test", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var test;
    return {
        setters:[],
        execute: function() {
            exports_1("test", test = 'test');
        }
    }
});
System.register("main", ['rxjs-es/Rx', "test"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Rx, test_1;
    return {
        setters:[
            function (Rx_1) {
                Rx = Rx_1;
            },
            function (test_1_1) {
                test_1 = test_1_1;
            }],
        execute: function() {
            console.log(Rx);
            console.log(test_1.test);
        }
    }
});

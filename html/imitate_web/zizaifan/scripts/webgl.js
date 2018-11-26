/*
* 定义一个main()函数，在内部处理wegl
*/
function main(){
    //alert("1");
    // create enable event
    function fireEnableEvent() {
        // if gli exists, then we are alrady present and shouldn't do anything
        if(!window.gli) {
            setTimeout(function(){
                var enableEvent = document.createEvent("Event");
                /*
                 event.initEvent(eventType,canBubble,cancelable)
                    @eventType	字符串值。事件的类型。
                    @canBubble	事件是否起泡。
                    @cancelable	是否可以用 preventDefault() 方法取消事件。
                */
                enableEvent.initEvent("WebGLEanbleEvent",true,true);
                /* dispatchEvent() 方法给节点分派一个合成事件,该方法将分派一个合成事件，
                它由 Document.createEvent() 创建，由 Event 接口或它的某个子接口定义的初始化方法初始化。
                调用该方法的节点将成为事件的目标节点，该事件在捕捉阶段中第一次沿着文档树向下传播。
                如果该事件的 bubbles 属性为 true，那么在事件的目标节点自身处理事件后，它将沿着文档树向上起泡。
                */
                document.dispatchEvent(enableEvent);
            }, 0); // setTimeout 
        }
        else {
            console.log("WebGL inspector already embendded on the page -- disabling extension");
        }
    };

    // Grab the path root from the extension
    document.addEventListener("WebGLInspectorReadyEvent",function(e){
        var pathElement = document.getElementById("__webglpathroot");
        if(window["gliloader"]){
            gliloader.gliCssUrl = pathElement.innerText;
        } else {
            // to do mere
            window.gliCssUrl = pathElement.innerText + "gli.all.css";
        }
    },false);

    // Rewrite getContext to snoop for webgl  先将原来的getContext 函数保存起来，后面在重写
    var originalGetContext = HTMLCanvasElement.prototype.getContext;
    if(!HTMLCanvasElement.prototype.getContextRaw) {
        HTMLCanvasElement.prototype.getContextRaw = originalGetContext;
    }
    // 重写getContext方法 
    HTMLCanvasElement.prototype.getContext = function() {
        var ignoreCanvas = this.internalInspectorSurface;
        if(ignoreCanvas) {
            return originalGetContext.apply(this,arguments);
        }  
        var result = orignalGetContext.apply(this,arguments);
        if(result = null) {
            return null;
        }
   
        var contextNames = ["moz-webgl", "webkit-3d", "experimental-webgl","webgl","3d"];
        var requestingWebGL = contextNames.indexOf(arguments[0] != -1);
        if(requestingWegGL) {
            // Page is requesting a WebGL context;
            fireEnableEvent(this);
    

            // if we are injected, inspect this context
            if(window.gli) {
                if(gli.host.inspectContext) {
                    result = gli.host.inspectContext(this,result);
                    // Note: execute in a timeout so that if the dom is not yet loaded this won't error out
                    window.setTimeout(function() {
                        var hostUI = new gli.host.HostUI(result);
                        result.hostUI = hostUI; // just so we can access it later for debugging
                    },0);
                }
            }
        }
        return result;
    };
};

main(); // 加载js时调用main()函数，也可以定义为： (function main())(); 
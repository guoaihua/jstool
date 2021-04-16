var nodes = document.documentElement;
var nodeTxt = [];
var regex = /[\u4e00-\u9fa5]/g;
var  useClassName = 'geetest';
var map = new Map();
function trvaseNodes(node){
    var nodeELm = {};

    nodeELm.node = node;

    // 对当前节点进行参数收集
    function traverseAttrs(){
     // 获取每个node节点的innerText、各种属性的value
        var obj = {};
        for(var i = 0; i < node.attributes.length; i++){
            var attrname =  node.attributes[i].nodeName;
            obj[attrname] =  node.getAttribute(attrname);
        }
        if(node.innerText){
            obj.innerText = node.innerText;
        }
        // 对obj做一个检测
        if(Object.keys(obj).length !== 0){
            for(var prop in obj){
                if(obj.hasOwnProperty(prop)){
                    if(regex.test(prop) || regex.test(obj[prop])){
                        if(useClassName){
                            if(node.className.indexOf(useClassName) === -1){
                                // 不是特殊指定节点，不进行收集
                                return;
                            }
                        }

                        map.set(obj[prop],prop);
                        console.log("条件匹配：当前匹配的元素为————", node);
                        console.log("key:", prop);
                        console.log("value:", obj[prop]);
                    }
                }
            }
        }
        nodeTxt.push({name: node.tagName.toLowerCase(), text: obj});
    }

    traverseAttrs();

    
    if(!node.children[0]){
        // 没有子节点结束遍历
        return node
    }

    let chnodes = [];
    for(var i = 0; i < node.children.length; i++){
        chnodes.push(trvaseNodes(node.children[i]));
    }

    nodeELm.childNodes = chnodes; 
    return nodeELm;
}
trvaseNodes(nodes);

// 通过group获取list

var links = $(".groups-list .group-text-container a");

var listarr = links.map((index, item)=>{
    return {
        name: item.innerText,
        addr: item.href
    }
})

var purearr = listarr.toArray();


// 通过innerText插入到飞书表格

// 获取飞书表单
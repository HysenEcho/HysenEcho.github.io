// function scrollToBottom() {  
//     document.body.scrollTop = document.documentElement.scrollHeight;  
//   } 

function scrollToBottom(targetScrollHeight, transitionTime) {  
    // 计算滚动距离  
    var scrollHeight = document.body.scrollHeight;  
    var currentScrollHeight = document.documentElement.scrollTop || document.body.scrollTop;  
    var scrollDistance = targetScrollHeight - currentScrollHeight;  
    
    // 使用window对象的scrollTo方法平滑滚动到目标位置  
    window.scrollTo({  
      top: targetScrollHeight,  
      behavior: 'smooth',  
      duration: transitionTime  
    });  
  }  
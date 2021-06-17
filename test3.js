function html2Escape(sHtml) { 
    return sHtml.replace(/[<>&"]/g,function(c){return {'&lt;':'<','&gt;':'>'}[c];}); 
   }
   console.log(html2Escape('&lt'));
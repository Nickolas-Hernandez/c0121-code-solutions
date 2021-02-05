/* exported titleCase */
function titleCase(title){
  var titleBreakdown = title.split(' ');
  var casedTitle = [];
  console.log("titleBreakdwn:", titleBreakdown);
  for(var i = 0; i < titleBreakdown.length; i++){
    if(titleBreakdown[i] === 'javascript:'){
      casedTitle += 'JavaScript';
    }else if(titleBreakdown[i].toLowerCase() === 'javascript'){
      casedTitle += 'JavaScript';
    }else if(titleBreakdown[i].toLowerCase() === 'api'){
      casedTitle += 'API'
    }else{
     if(i === 0){
        casedTitle[0] = titleBreakdown[i][0].toUpperCase() + titleBreakdown[i].slice(1);
       console.log(casedTitle, "hi!");
     }
    }
  }
}

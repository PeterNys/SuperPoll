function updateViewPollList(){
    let html='<table style="width:100%;height:40%"><th>Poll ID</th><th>PollName</th><th>Alternatives</th>';
    for(i=model.polls.length-1;i>-1;i--){
        html+=`
    <tr onclick="selectPoll(${i})"><td>#${model.polls[i].pollId}</td><td>  ${model.polls[i].question}</td>
    <td>${model.polls[i].options.join(' ')}</td></tr>
    
    `
    }
    html+='</table>';
    console.log(html);
    document.getElementById('app').innerHTML=html;
    console.log("works");
}
















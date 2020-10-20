function selectPoll(index){
    const modelInputPoll=model.inputs.createPoll;
    const selectedListItem=model.polls[index];
    modelInputPoll.pollId=selectedListItem.pollId;
    modelInputPoll.newAlternative=selectedListItem.newAlternative;
    modelInputPoll.question=selectedListItem.question;
    modelInputPoll.options=selectedListItem.options;
    modelInputPoll.usersCanAddAlternatives=selectedListItem.usersCanAddAlternatives;
    
    changePage('createPoll');
}
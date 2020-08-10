function getCurrentPoll() {
    const pollId = model.app.currentPoll;
    return model.polls.filter(p => p.id === pollId)[0];
}
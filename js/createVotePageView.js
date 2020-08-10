function updateViewCreateVotePage() {
    const pollId = model.app.currentPoll;
    const poll = model.polls.filter(p => p.id === pollId)[0];
    const checked = poll.usersCanAddAlternatives ? 'checked' : '';
    document.getElementById('app').innerHTML = `
        <h3>Spørsmål</h3>
        <input type="text" value="${poll.question}"/><br/>
        <input type="checkbox" ${checked} /><br/><br/>

        Alternativer<br/>
        <ul>
            ${createAlternativesHtml(poll)}
        </ul>
        <input type="text" value="${model.inputs.createPoll.newAlternativeText}"/><br/>
        <button>Legg til alternativ</button>
        <hr/>
        <button>Lag spørreundersøkelse</button>
    
    `;
}
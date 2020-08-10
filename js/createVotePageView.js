function updateViewCreateVotePage() {
    const poll = getCurrentPoll();
    const checked = poll.usersCanAddAlternatives ? 'checked' : '';
    document.getElementById('app').innerHTML = `
        <h3>Spørsmål</h3>
        <input 
            type="text" 
            value="${poll.question}" 
            size="80" 
            oninput="model.inputs.createPoll.question=this.value" 
        />
        <br/>
        <input type="checkbox" ${checked} />
        La brukere legge til egne alternativer
        <br/>

        <h4>Alternativer</h4>
        <ul>
            ${createAlternativesHtml(poll)}
        </ul>
        <input 
            type="text" 
            value="${model.inputs.createPoll.newAlternative}"
            oninput="model.inputs.createPoll.newAlternative=this.value"
        />
        <button>Legg til alternativ</button>
        <p>&nbsp;</p>
        <button style="font-size: 150%">Lag spørreundersøkelse</button>
    
    `;
}

function createAlternativesHtml(poll) {
    let html = '';
    for (let option of poll.options) {
        html += `<li>${option}</li>`;
    }
    return html;
}

function createAlternativesHtml2(poll) {
    return poll.options.map(option => `<li><${option}/li>`).join('');
}
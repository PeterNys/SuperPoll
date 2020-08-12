function updateViewCreateVotePage() {
    const pageInputs = model.inputs.createPoll;
    const buttonText = pageInputs.pollId !== null ? 'Oppdater' : 'Lag';
    const checked = pageInputs.usersCanAddAlternatives ? 'checked' : '';
    document.getElementById('app').innerHTML = `
        <h3>Spørsmål</h3>
        <input 
            type="text" 
            value="${pageInputs.question}" 
            size="80" 
            oninput="model.inputs.createPoll.question=this.value" 
        />
        <br/>
        <input type="checkbox" ${checked} onchange="model.inputs.createPoll.usersCanAddAlternatives=this.checked==='checked'" />
        La brukere legge til egne alternativer
        <br/>

        <h4>Alternativer</h4>
        <ul>
            ${createAlternativesHtml()}
        </ul>
        <input 
            type="text" 
            value="${model.inputs.createPoll.newAlternative}"
            oninput="model.inputs.createPoll.newAlternative=this.value"
        />
        <button>Legg til alternativ</button>
        <p>&nbsp;</p>
        <button style="font-size: 150%">${buttonText} spørreundersøkelse</button>
    
    `;
}

function createAlternativesHtml() {
    const pageInputs = model.inputs.createPoll;

    let html = '';
    for (let option of pageInputs.options) {
        html += `<li>${option}</li>`;
    }
    return html;
}

function createAlternativesHtml2() {
    const pageInputs = model.inputs.createPoll;
    return pageInputs.options.map(option => `<li><${option}/li>`).join('');
}
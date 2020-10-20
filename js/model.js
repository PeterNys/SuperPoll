const model = {
    app: {
        currentPoll: 1,
        loggedInUser: 'per',
        currentPage: 'createPoll',
    },

    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],

    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,
        },
    },

    polls: 
[
    {
        pollId: "1",
        newAlternative: '',
        question: 'Hvem er den tøffeste læreren ved GET Academy?',
        options: ['Geir', 'Eskil', 'Terje'],
        usersCanAddAlternatives: true,
    },
    {
        pollId: "2",
        newAlternative: '',
        question: 'Hvem er den greieste læreren ved GET Academy?',
        options: ['Per', 'Pål', 'Espen'],
        usersCanAddAlternatives: true,
    },
    {
        pollId: "6",
        newAlternative: '',
        question: 'Hvem er den smarteste læreren ved GET Academy?',
        options: ['Peter', 'Mira', 'Elise'],
        usersCanAddAlternatives: true,
    }
]
};

/*
    Hvilke andre måter kunne vi lagret stemmene på?
        - Hva er best for å legge til nye stemmer?
        - Hva er best for å endre stemmer?
        - Hva er best for å telle opp stemmer?

    Hvordan ville det blitt om hvert alternativ var et objekt, med en id?
*/
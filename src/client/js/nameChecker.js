function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        'JavaScript',
        'c#',
        'Java',
        'Python',
        'Go',
        'c',
        'PHP'
    ]

    if (names.includes(inputText)){
        alert('Awesome choice');
    }else {
        alert('Invalid Input, Pick one programming Language!')
    }
}

export { checkForName }

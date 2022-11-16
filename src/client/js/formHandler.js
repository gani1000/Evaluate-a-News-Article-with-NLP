import { Check } from "./nameChecker";

function handleSubmit(event) {
    event.preventDefault()
        
    const texturl = document.getElementById('name').value
    const urlI = 'http://localhost:8080/add';
    
    if(Check(texturl)){
        fetch(urlI, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ texturl: texturl })
        }).then(res => res.json()).then(data => {
            console.log(data);
            const agre = document.getElementById('agreement');
            const conf = document.getElementById('confidence');
            const mod = document.getElementById('model');
            const iry = document.getElementById('irony');
            const text = document.getElementById('text');
    
            agre.innerHTML = `Agreement: ${data.agreement}`;
            conf.innerHTML = `Confidence: ${data.confidence}`;
            mod.innerHTML = `Model: ${data.model}`;
            iry.innerHTML = `Irony: ${data.irony}`;
            text.innerHTML = `Text: ${data.text}`;
        }).catch(error => {
            console.log('error!', error);
        })
    }else{
        alert('Invalid')
    }
}

export { handleSubmit }

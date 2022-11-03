import { checkForName } from "./nameChecker"

function handleSubmit(event) {
    event.preventDefault()

     let checks = document.getElementById('name').value
     checkForName(checks);
     
     console.log("::: Form Submitted :::")
     if (checks){
        fetch('http://localhost:8081/test')
        .then(res => {
            return res.json()
        })
        .then(function(data){
            document.getElementById('results').innerHTML = data.message
        });
     }else {
        console.error('Pick one programming Language!')
     }
    
    
}

export { handleSubmit }

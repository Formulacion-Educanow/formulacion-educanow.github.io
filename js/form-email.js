const btnSend = document.getElementById("form-send");

btnSend.onclick = e => {
    const email = document.getElementById("form-email").value;
    const name = document.getElementById("form-name").value;
    const message = document.getElementById("form-message").value;
    const body = { name, email, message };
    console.log(JSON.stringify(body));
    fetch('https://formu-educanow.herokuapp.com/send',{
        method: 'POST',
        body: JSON.stringify(body)
    }).then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed!');
    },networkError => console.log(networkError.message))
    .then(jsonResponse => {
        console.log(jsonResponse);
    });
};
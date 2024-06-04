import { fetchApi } from "../../helpers/fetch-api.js";

export function Register(){
    const root = document.getElementById('root');
    root.innerHTML = `
        <form id="myForm">
            <input type="text" placeholder="julian" id="nameUser">
            <input type="email" placeholder="julian@example.com" id="mailUser">
            <input type="password" placeholder="password123" id="passUser">
            <button type="submit">Register<button>
        </form>
    `;
    const $myForm = document.getElementById('myForm');
    const $name = document.getElementById('nameUser');
    const $email = document.getElementById('mailUser');
    const $pass = document.getElementById('passUser');

    $myForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if(!$name || !$email || !$pass){
            alert('Rellena todos los campos')
        }
        //fetch

        const userCreated = await fetchApi('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: $name.value,
                email: $email.value,
                password: $pass.value
            })
        })
        if(userCreated){
            alert('El usuario se creo')
        } else {
            alert('Error')
        }
    })



}
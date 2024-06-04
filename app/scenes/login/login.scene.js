import { navigateTo } from "../../Router";
import { fetchApi } from "../../helpers/fetch-api";

export function Login(){
    const root = document.getElementById('root');
    root.innerHTML = `
        <form id="myForm">
            <input type="email" placeholder="julian@example.com" id="mailUser">
            <input type="password" placeholder="password123" id="passUser">
            <button type="submit">Login<button>
            <button type="button" id="registerUser">Register</button>
        </form>
    `;
    const $myForm = document.getElementById('myForm');
    const $email = document.getElementById('mailUser');
    const $pass = document.getElementById('passUser');
    const $registrar = document.getElementById('registerUser');

    $myForm.addEventListener('submit', async () => {
        if($email || $pass){

        } else {
            alert('Llena todos los campos')
        }
    })

    $registrar.addEventListener('click', () => {
        navigateTo("/register")
    })
}
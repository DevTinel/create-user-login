const button = document.querySelector(".btn");
console.log(button);
button.addEventListener("click", checkUser);
function checkUser(e) {
    e.preventDefault();
    // Recupera os usuários do localStorage
    const storedUsers = localStorage.getItem("users");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const spanError = document.querySelector("#error");
    console.log(spanError);

    if (storedUsers) {
        console.log(storedUsers);
        const users = JSON.parse(storedUsers);
        // Procura um usuário com o nome de usuário e senha correspondentes
        for (let i = 0; i < users.length; i++) {
            if (
                users[i].email === email.value &&
                users[i].password === password.value
            ) {
                window.open(
                    "https://www.bemcolar.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/e/letreiro-3d-decorativo-bem-vindo.jpg",
                    "_blank"
                );

                spanError.innerHTML = "";
                email.classList.remove(`error-input`);
                password.classList.remove(`error-input`);
            } else {
                email.classList.add(`error-input`);
                password.classList.add(`error-input`);
                spanError.innerHTML = "email ou senha incorreta!";
            }
        }
    }
}

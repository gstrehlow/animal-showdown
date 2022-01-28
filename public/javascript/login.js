async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if ((!password) || (!username)) return alert('Enter a valid username and password!');
  if ((username.length < 3) || (username.length > 10)) return alert('Usernames should be between 3 and 10 characters!');
  if ((password.length < 4) || (password.length > 16)) return alert('Passwords should be between 4 and 16 characters!');
  const naughtyWords = ["nigg","cunt","cum","fag","fuck","shit","asshole","pussy"];
  for (let i = 0; i < naughtyWords.length; i++){
    if (username.search(naughtyWords[i]) !== -1){
      return alert('No naughty words please');
    }
  }
  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

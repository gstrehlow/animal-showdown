async function matchupFormHandler(event) {
    event.preventDefault();
    console.log({...event.target.dataset})
    const response = await fetch("/api/votes", {
        method: "POST",
        body: JSON.stringify({...event.target.dataset})
    })
    if (!response.ok) {
        return;
    }
    console.log(response.json());
}

document
  .querySelector(".animal_1-button")
  .addEventListener("click", matchupFormHandler);
document
  .querySelector(".animal_2-button")
  .addEventListener("click", matchupFormHandler);
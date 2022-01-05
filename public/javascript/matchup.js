async function mathcupFormHandler(event) {
    event.preventDefault();

    const animal1 = document.querySelector('.animal_1-button');
    const animal2 = document.querySelector('.animal_2-button');

    // if animal-1 button is clicked
    if (animal1 || animal2) {
        const response = await fetch("/api/votes", {
            method: "POST",
            body: JSON.stringify({
                vote: vote, //need to define these two
                matchup_id: matchup_id
                //user_id: user_id
            })
        })
        console.log(response)

        const data = await response.json();
        console.log(data);

    }
}

document
  .querySelector(".animal_1-button")
  .addEventListener("submit", mathcupFormHandler);
  document
  .querySelector(".animal_2-button")
  .addEventListener("submit", mathcupFormHandler);
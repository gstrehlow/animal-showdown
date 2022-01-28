async function matchupFormHandler(event) {
  event.preventDefault();
  let dataset = {...event.target.dataset};
  const response = await fetch("/api/votes", {
      method: "POST",
      body: JSON.stringify(dataset),
      headers: {'Content-Type': 'application/json'}
  })
  if (!response.ok) return;
  else{
    document.location.replace(`/api/matchups/${dataset.matchup_id}`); //reload the same matchup
  }
}

document
.querySelector(".animal_1-button")
.addEventListener("click", matchupFormHandler);
document
.querySelector(".animal_2-button")
.addEventListener("click", matchupFormHandler);
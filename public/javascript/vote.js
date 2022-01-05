async function matchupFormHandler(event) {
  event.preventDefault();
  let dataset = {...event.target.dataset};
  console.log(dataset);
  const response = await fetch("/api/votes", {
      method: "POST",
      body: JSON.stringify(dataset),
      headers: {'Content-Type': 'application/json'}
  })
  if (!response.ok) return;
  else{
    let mID = dataset.matchup_id;
    let seenList = JSON.parse(localStorage.getItem("seenMatchups"));
    if (!seenList) seenList = {};
    seenList[mID] = true;
    localStorage.setItem("seenMatchups",JSON.stringify(seenList));
    let target = undefined;
    for (let i = 1; i < 13; i++){
      if (seenList[i] === undefined){
        target = i;
        break;
      }
    }
    if (target === undefined){
      target = Math.floor(Math.random() * 12) + 1;
      localStorage.setItem("seenMatchups",JSON.stringify({})); //cleared list
    } else {
      document.location.replace(`/api/matchups/${dataset.matchup_id}`);
    }
  }
}

document
.querySelector(".animal_1-button")
.addEventListener("click", matchupFormHandler);
document
.querySelector(".animal_2-button")
.addEventListener("click", matchupFormHandler);
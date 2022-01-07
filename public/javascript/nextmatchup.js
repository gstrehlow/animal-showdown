function nextFormHandler(event) {
    event.preventDefault();
    let dataset = {...event.target.dataset};
    let seenList = JSON.parse(localStorage.getItem("seenMatchups"));
    if (!seenList) seenList = {};
    seenList[dataset.matchup_id] = true;
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
    }
    document.location.replace(`/api/matchups/${target}`); //reload the same matchup
}
  
document
  .querySelector(".next-button")
  .addEventListener("click", nextFormHandler);
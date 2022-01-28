async function commentFormHandler(event) {
  event.preventDefault();

  const comment = document
    .querySelector('textarea')
    .value.trim();
  const matchup_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(comment, matchup_id);
  if (comment) {
    if (comment.length > 250) return alert('Comments should be no more than 250 characters!');
    const naughtyWords = ["nigg","cunt","cum","fag","fuck","shit","asshole","pussy"];
    const censorChars = ["!","@","#","$","%","&","*"];
    let censorString = "";
    for (let i = 0; i < naughtyWords.length; i++){
      if (comment.search(naughtyWords[i]) !== -1){
        censorString = "";
        for (let c = 0; naughtyWords[i].length; c++){
          censorString += censorChars[Math.floor(Math.random()*censorChars.length)];
        }
        comment = comment.replaceAll(naughtyWords[i],censorString);
      }
    }
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment, matchup_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/api/matchups/${matchup_id}`); //reload the same matchup
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".submit-btn")
  .addEventListener("click", commentFormHandler);
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
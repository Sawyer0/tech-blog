async function newFormHandler(event) {
  event.preventDefault();
  const commentbody = document.querySelector("#commentbody").value;
  const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({ commentbody }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace("/blogpost/:id");
  } else {
    alert("Comment failed.");
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", newFormHandler);

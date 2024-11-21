const jokeElement = document.getElementById("jokeElement");
fetch("https://icanhazdadjoke.com/slack")
  .then(data => data.json())
  .then(jokeData => {
    console.log(jokeData); // Inspect the API response
    const jokeText = jokeData.attachments?.[0]?.text || "No joke found.";
    jokeElement.innerHTML = jokeText;
  })
  .catch(err => console.error("Error fetching joke:", err));

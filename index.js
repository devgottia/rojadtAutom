
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "x") {
    navigator.clipboard.readText().then((copiedText) => {
      const matchDetails = copiedText.match(
        /(\d{2}:\d{2}) (.+?) \((.+?)\): (.+?) - (.+)/
      );

      if (matchDetails) {
        const time = matchDetails[1];
        const sport = matchDetails[2];
        const league = matchDetails[3];
        const team1 = matchDetails[4];
        const team2 = matchDetails[5];
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Adding 1 since months are zero-indexed
        const currentYear = currentDate.getFullYear();

        // Set the month and year in the corresponding input fields
        document.getElementById("edit-submitted-event1-date-1-month").value =
          currentMonth.toString();
        document.getElementById("edit-submitted-event1-date-1-year").value =
          currentYear.toString();
        document.getElementById("edit-submitted-event1-starttime-1").value =
          time;
        document.getElementById("edit-submitted-event1-discipline-1").value =
          sport;
        document.getElementById("edit-submitted-event1-competition-1").value =
          league;
        document.getElementById("edit-submitted-event1-rivala-1").value = team1;
        document.getElementById("edit-submitted-event1-rivalb-1").value = team2;
      } else {
        alert("Text format not recognized");
      }
    });
  }
});

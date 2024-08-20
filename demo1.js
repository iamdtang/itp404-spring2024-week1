$("#members-button").on("click", function () {
  $("#results").html("Loading...");

  const promise = $.ajax("https://api.github.com/orgs/jquery/members");

  promise.then((members) => {
    let html = "";

    // vulnerable to Cross-site Scripting (XSS) attacks
    members.forEach((member) => {
      html += `
          <img
            src="${member.avatar_url}"
            alt="image of ${member.login}"
            width="150">
        `;
    });

    $("#results").html(html);
  });
});

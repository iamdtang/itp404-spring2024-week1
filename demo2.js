$("#members-button").on("click", function () {
  $("#results").html("Loading...");

  const promise = $.ajax("https://api.github.com/orgs/jquery/members");

  promise.then((members) => {
    let html = "";

    // less vulnerable to Cross-site Scripting (XSS) attacks
    members.forEach((member) => {
      html += `
        <img
          src="${member.avatar_url}"
          alt="image of ${member.login}"
          width="150">
      `;
    });

    const sanitizedHtml = DOMPurify.sanitize(html);
    $("#results").html(sanitizedHtml);
  });
});

// Exercise 1
$("#repos-button").on("click", function () {
  $("#results").html("Loading...");

  const promise = $.ajax("https://api.github.com/orgs/jquery/repos");

  promise.then((repos) => {
    let html = "<ul>";

    // less vulnerable to Cross-site Scripting (XSS) attacks
    repos.forEach((repo) => {
      html += `<li>
        ${repo.name} - ${repo.description}
      </li>`;
    });

    html += "</ul>";

    const sanitizedHtml = DOMPurify.sanitize(html);
    $("#results").html(sanitizedHtml);
  });
});

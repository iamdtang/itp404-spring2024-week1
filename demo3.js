$("#members-button").on("click", function () {
  // $("#results").html("Loading...");
  document.querySelector("#results").replaceChildren("Loading...");

  const promise = $.ajax("https://api.github.com/orgs/jquery/members");

  promise.then((members) => {
    // A document fragment is a container that doesn't have a
    // tag name. Alternatively, we could have used a div
    // (e.g. let div = document.createElement('div');. However,
    // this would have created an extra div in the page which
    // may be undesirable.
    const fragment = document.createDocumentFragment();

    members.forEach((member) => {
      let img = document.createElement("img");
      img.src = member.avatar_url;
      img.width = 150;
      img.alt = `image of ${member.login}`;
      fragment.append(img);
    });

    // $("#results").html(fragment);
    document.querySelector("#results").replaceChildren(fragment);
  });
});

$("#repos-button").on("click", function () {
  // $("#results").html("Loading...");
  document.querySelector("#results").replaceChildren("Loading...");

  const promise = $.ajax("https://api.github.com/orgs/jquery/repos");

  promise.then((repos) => {
    const ul = document.createElement("ul");

    repos.forEach((repo) => {
      const li = document.createElement("li");

      li.textContent = `${repo.name}: ${repo.description}`;

      ul.append(li);
    });

    // $("#results").html(ul);
    document.querySelector("#results").replaceChildren(ul);
  });
});

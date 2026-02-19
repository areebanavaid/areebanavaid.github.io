// Areeba Navaid
// DOM Manipulation Assignment


window.onload = function () {
    document.getElementById("filterContent").style.display = "none";
};


function showFilter() {
    let filterContent = document.getElementById("filterContent");
    if (filterContent.style.display === "none") {
        filterContent.style.display = "block";
    } else {
        filterContent.style.display = "none";
    }
}

function showAddNew() {
    let addArticle = document.getElementById("newContent");
    if (addArticle.style.display === "none") {
        addArticle.style.display = "flex";
    } else {
        addArticle.style.display = "none";
    }
}

function filterArticles() {
  const showOpinion = document.getElementById("opinionCheckbox").checked;
  document.querySelectorAll("article.opinion").forEach(article => {
    article.style.display = showOpinion ? "" : "none";
  });

  const showRecipe = document.getElementById("recipeCheckbox").checked;
  document.querySelectorAll("article.recipe").forEach(article => {
    article.style.display = showRecipe ? "" : "none";
  });

  const showUpdate = document.getElementById("updateCheckbox").checked;
  document.querySelectorAll("article.update").forEach(article => {
    article.style.display = showUpdate ? "" : "none";
  });
}

function addNewArticle() {
  const title = document.getElementById("inputHeader").value.trim();
  const text  = document.getElementById("inputArticle").value.trim();

  let typeClass = "";
  let typeLabel = "";

  if (document.getElementById("opinionRadio").checked) {
    typeClass = "opinion";
    typeLabel = "Opinion";
  } else if (document.getElementById("recipeRadio").checked) {
    typeClass = "recipe";
    typeLabel = "Recipe";
  } else if (document.getElementById("lifeRadio").checked) {
    typeClass = "update";
    typeLabel = "Update";
  }

  if (!title || !text || !typeClass) return;

  const article = document.createElement("article");
  article.className = typeClass;

  const marker = document.createElement("span");
  marker.className = "marker";
  marker.textContent = typeLabel;

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = text;

  const moreP = document.createElement("p");
  const link = document.createElement("a");
  link.href = "moreDetails.html";
  link.textContent = "Read more...";
  moreP.appendChild(link);

  article.appendChild(marker);
  article.appendChild(h2);
  article.appendChild(p);
  article.appendChild(moreP);

  document.getElementById("articleList").appendChild(article);

  filterArticles();
}


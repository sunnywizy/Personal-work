// This is the way we get Element from DOM by using their TagName.
const articles = document.getElementsByTagName("atticle");
const paragraphs = document.getElementsByTagName("p");

// This is the way we get Element from DOM when their are too many Article or Paragraph on a page.
const firstArticle = articles[0];
const SecondParagraph = paragraphs[1];

// This is the way we get Element tthrough the DOM and modify it to the way we wanat in javascript and the "innerHTML" is used to modify the orginal HTML Tag in Javascript while the "textContent or innerText" is used to modify the text in HTML.
const mainHeader = document.querySelector(".text-center");
const textContent = mainHeader.textContent = "Modify The DOM";

const header = document.querySelector("#main-headling");
header.innerHTML = '<h3>Modify the DOM</h3>';

// Access the DOM and making them to perform magic
const blueButton = document.querySelector(".blue-background");
const brownButton = document.querySelector(".brown-background");
const greenButton = document.querySelector(".green-background");
const noneButton = document.querySelector(".none-background");

const addPostButton = document.querySelector(".add-post");
const removePostButton = document.querySelector(".remove-post");
const articleSection = document.querySelector(".articles");

//The EventListener Section
blueButton.addEventListener('click', () => {
  header.classList.add('bg-blue');
});
brownButton.addEventListener('click', () => {
  header.classList.add('bg-brown');
});
greenButton.addEventListener('click', () => {
  header.classList.add('bg-green');
});
noneButton.addEventListener('click', () => {
  header.classList.add('bg-none');
});

addPostButton.addEventListener('click', () => {
  const newPost = createNewPost();
  articleSection.appendChild(newPost);
});

removePostButton.addEventListener('click', () => {
  // Using the child Element Count to know how many Article are in the article section.
  const articleCount = articleSection.childElementCount;
  // This Section is a logic section that delete the articles if it is more than one in the article section
  if(articleCount > 1) {
    articleSection.removeChild(articleSection.children[articleCount -1]);
  }
});

// The Main Function
function createNewPost() {
  let newArticle = document.createElement('article');
  let newHeadle = document.createElement('h3');
  let newParagraph = document.createElement('p');

  newHeadle.textContent = "Another Blog Post";
  newParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum fuga placeat veniam exercitationem, ratione a, repellat eveniet delectus voluptates accusantium error molestias! Nostrum culpa aliquid neque vitae illum quas?";

  newArticle.appendChild(newHeadle);
  newArticle.appendChild(newParagraph);

  newArticle.classList.add('border');
  return(newArticle)
}

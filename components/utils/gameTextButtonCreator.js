function textDecider(text, gameDesc, storeFronts, gameTitle, gameInfo) {
  const num = 250;
  const textParsed = text.description;

  const descriptionContainer = document.createElement("div");
  descriptionContainer.className = "description-container";

  if (textParsed.length > num) {
    const part1 = textParsed.slice(0, num);
    const part2 = textParsed.slice(num);

    const part1Para = document.createElement("p");
    part1Para.innerHTML = `${part1}<strong>...</strong>`;
    gameDesc.appendChild(part1Para);

    const part2Para = document.createElement("p");
    part2Para.innerHTML = `${part1}${part2}`;
    part2Para.style.display = "none";
    gameDesc.appendChild(part2Para);

    descriptionContainer.appendChild(part1Para);
    descriptionContainer.appendChild(part2Para);
    gameTitle.appendChild(storeFronts);
    part2Para.scrollTop = 50;

    gameDesc.appendChild(descriptionContainer);
    const readMore = document.createElement("a");
    readMore.className = "read-more";
    readMore.textContent = "Read More";
    part1Para.appendChild(readMore);

    const readLess = document.createElement("a");
    readLess.className = "read-less-hide";

    readLess.textContent = "Read Less";
    gameDesc.appendChild(readLess);

    readMore.addEventListener("click", () => {
      part2Para.style.display = "block";
      part1Para.style.display = "none";
      readLess.className = "read-less-show";
    });
    readLess.addEventListener("click", () => {
      part2Para.style.display = "none";
      part1Para.style.display = "block";
      readLess.className = "read-less-hide";
    });
  } else if (textParsed.length < num) {
    const part1Para = document.createElement("p");
    part1Para.textContent = textParsed;
    gameDesc.appendChild(part1Para);
    descriptionContainer.appendChild(part1Para);
    gameTitle.appendChild(storeFronts);
    gameDesc.appendChild(descriptionContainer);
  } else {
    const defaultDesc = document.createElement("p");
    defaultDesc.className = "defaultDesc";
    defaultDesc.textContent = "No game description found";
    gameInfo.appendChild(defaultDesc);
  }
}

export { textDecider };

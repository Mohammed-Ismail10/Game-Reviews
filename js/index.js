`use strict`;
import { game, apiJsonGames } from "./games.js";
import { ui } from "./ui.js";





// links in navbar
$(`.nav-link`).click(function (eventInfo) {
  game.getApiGames($(this).attr(`data-category`));
  $(eventInfo.target).removeClass(`text-white`);
  $(eventInfo.target).addClass(`text-primary`);
  $(`.nav-link`).not(eventInfo.target).addClass(`text-white`);
})
// links in navbar



// search
document.querySelector(`#searchInput`).addEventListener(`input`, function () {
  let resultSearch = []
  for (const card of apiJsonGames) {
    if (card.title.toLowerCase().includes(this.value.toLowerCase())) {
      resultSearch.push(card)
    }
  }
  ui.displayCards(resultSearch);
})
// search
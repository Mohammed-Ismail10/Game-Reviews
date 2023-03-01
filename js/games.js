"use strict";

import { ui } from "./ui.js";


export let apiJsonGames = [];

class Games {
  async getApiGames(category) {
    $(`#loadingWhite`).parent().removeClass(`d-none`);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0dfb2b2421msh89a3443eb2c628dp1443fdjsnbc37323b02cc',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };


    let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    apiJsonGames = await api.json();
    apiJsonGames.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
    ui.displayCards(apiJsonGames);
    $(`#loadingWhite`).parent().addClass(`d-none`);
  }
}


export const game = new Games();
game.getApiGames(`mmorpg`);
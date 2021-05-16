import monkey from 'ic:canisters/monkey';
import monkey_assets from 'ic:canisters/monkey_assets';
import $ from "jquery";
import "./index.css";
import {
  homePage,
} from "./templates";
import { injectHtml } from "./utils";

window.$ = window.jQuery = $;

monkey_assets
  .retrieve("index.html")
  .then(injectHtml)
  .then(() =>
    $(document).ready(function () {
  
      function renderHome() {
        (async function () {
          try {
            $(".home").html(homePage(data)).show();
          } catch (err) {
            console.error(err);
          }
        })();
      }

      renderHome();

      const showHome = (index) => {
        const home = state.results[index];
        renderHome(homePAge.id);
      };


      window.actions = {
        showHome,
      };
    })
  );

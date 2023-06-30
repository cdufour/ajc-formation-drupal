console.log('clock.js loaded !');

(function(Drupal, $) {
    "use strict";

    // votre code ici
    Drupal.behaviors.demoClock = {
        attach: function(context, settings) {

            function ticker() {
                var date = new Date();
                $(context).find('.clock').text(date.toLocaleTimeString());
            }

            //ticker();
            setInterval(ticker, 1000); // mise à jour du DOM toutes les secondes
        
        }
    }

})(Drupal, jQuery)
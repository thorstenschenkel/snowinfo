const DAYS = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

class CardUtils {
    
    constructor(city, snowdata) {
        this.city = city;
        this.snowdata = snowdata;
    }

    /**
     * 
     * Adds all infrmation for a simple card to the given handler.
     * The card will be displayed inside the Amazon Alexa App.
     * 
     * @param {*} intentHandler 
     */
    addCardRenderer(intentHandler) {

        let cardTitle = this.getCardTitle();
        let cardContent = this.getCardContent();
        if (cardTitle && cardContent) {
            intentHandler.response.cardRenderer(cardTitle, cardContent);
        }

    }

    getCardTitle() {
        if ( !this.city ) {
            return;
        }
        return 'Schneehöhen ' + this.city.toUpperCase();
    }
    
    getCardContent() {

        let content;
        if (!this.snowdata) {
            content = 'Für den Ort können keine Informationen geliefert werden!';
        } else {
            if (this.snowdata.isOutdated()) {
                content = 'Für den Ort können keine akutellen Informationen geliefert werden!';
            } else {
                content = 'Schneehöhe Tal: ' + this.snowdata.lowerSnowDepth + ' cm';
                content += '\n';
                content += 'Schneehöhe Berg: ' + this.snowdata.upperSnowDepth + ' cm';
                // Status Skigebiet: GEÖFFNET / GESCHLOSSEN
                // Lifte/Bahnen: 11 von 20 offen
                content += '\n';
                content += '\n';
                let date = this.snowdata.reportDate;
                if (date && (date instanceof Date)) {
                    let wd = date.getDay();
                    wd = DAYS[wd];
                    let dd = date.getDate();
                    let mm = date.getMonth() + 1;
                    let yyyy = date.getFullYear();
                    let dateStrg = wd + ', ' + dd + '.' + mm + '.' + yyyy;
                    content += 'Letztes Update: ' + dateStrg;
                }
            }
        }

        return content;

    }

}

module.exports = CardUtils;

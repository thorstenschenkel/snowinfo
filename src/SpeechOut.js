const ERROR_NO_INFO = 'Für den Ort {city} kann ich keine Informationen liefern!';
const ERROR_OUTDATED = 'Für den Ort {city} kann ich keine aktuellen Informationen liefern!';
const MORE_INFOS = 'Nächster Ort oder sage Stopp.';

// https://developer.amazon.com/de/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html#break

class SpeechOut {

    constructor(city, snowdata, webDataContainer) {
        this.city = city;
        this.snowdata = snowdata;
        this.webDataContainer = webDataContainer;
    }

    addSpeak(intentHandler, ask) {

        let speechOut = this._getSpeechOut();
        let rb = intentHandler.response.speak(speechOut);
        if ( ask ) {
            rb.listen(MORE_INFOS);
        }

    }

    _getSpeechOut() {

        let speechOutput;
        if (!this.snowdata) {

            speechOutput = ERROR_NO_INFO.replace('{city}', this.city);

        } else {

            if (this.snowdata.isOutdated()) {
                speechOutput = ERROR_OUTDATED.replace('{city}', this.city);
            } else {
                speechOutput = this._addStartAndCity(speechOutput);
                speechOutput = this._addDepth(speechOutput);
                speechOutput = this._addDate(speechOutput);
            }

        }

        return speechOutput;

    }

    _addStartAndCity(speechOutput) {

        let speechstart = this._getSpeechstart();
        if (speechstart) {
            speechOutput = speechstart + ' ';
        } else {
            console.warn(' -- t7 -- no speechstart for city: ' + this.city);
            speechOutput = 'In ';
        }

        let speechskiresort = this._getSpeechskiresort();
        if (speechskiresort) {
            speechOutput += speechskiresort;
        } else {
            speechOutput += this.city;
        }

        return speechOutput;

    }

    _getSpeechstart() {
        if ( this.webDataContainer ) {
            return this.webDataContainer.getSpeechstart(this.city);
        }
    }

    _getSpeechskiresort() {
        if ( this.webDataContainer ) {
            return this.webDataContainer.getSpeechskiresort(this.city);
        }
    }

    _addDepth(speechOutput) {

        this.snowdata.lowerSnowDepth = !this.snowdata.lowerSnowDepth ? 0 : this.snowdata.lowerSnowDepth;
        this.snowdata.upperSnowDepth = !this.snowdata.upperSnowDepth ? 0 : this.snowdata.upperSnowDepth;
        
        if (this.snowdata.lowerSnowDepth === 0 && this.snowdata.upperSnowDepth === 0) {
            speechOutput += ' liegt kein Schnee.';
        } else {
            speechOutput += ' liegen ' + this.snowdata.lowerSnowDepth + ' Zentimeter Schnee im Tal';
            speechOutput += ' und ' + this.snowdata.upperSnowDepth + ' Zentimeter auf dem Berg.';
        }

        return speechOutput;

    }

    _addDate(speechOutput) {

        let speechDate = this._getSpeechDate(this.snowdata.reportDate);
        if (speechDate) {
            speechOutput += ' Die Informationen stammen ';
            if (speechDate === 'heute' || speechDate === 'gestern') {
                speechOutput += 'von ';
            } else {
                speechOutput += 'vom ';
            }
            speechOutput += speechDate + '.';
        }

        return speechOutput;

    }

    _getSpeechDate(date) {

        if (!date || !(date instanceof Date)) {
            return;
        }

        let dateStrg = date.toISOString().substring(0, 10);
        const today = new Date();
        const todayStrg = today.toISOString().substring(0, 10);
        if (dateStrg === todayStrg) {
            return 'heute';
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStrg = yesterday.toISOString().substring(0, 10);
        if (dateStrg === yesterdayStrg) {
            return 'gestern';
        }

        dateStrg = date.toISOString().substring(0, 10);
        const retStrg = `<say-as interpret-as="date" format="ymd">${dateStrg}</say-as>`;

        return retStrg;

    }

}

module.exports = SpeechOut;

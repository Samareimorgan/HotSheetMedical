import unirest from "unirest";

export default {

    getMedicationSuggestions: function(input) {
        return unirest.get()
    }
}
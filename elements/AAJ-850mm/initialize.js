function(instance, context) {
    var result;

    instance.data.removeSpecialCharacters = str => {
        if (str && typeof str === "string") {
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        }
        return ""; // Return an empty string if input is not valid
    }

    function getResults() {
        if (result && result.length) {
            var resultsArray = [];
            var scoresArray = [];

            for (let i = 0; i < result.length; i++) {
                var resultThing = instance.data.data_source.get(0, instance.data.len + 1)[result[i].item.id];
                resultsArray.push(resultThing);
                scoresArray.push(result[i].score);
            }

            instance.publishState("match_array", resultsArray);
            instance.publishState("match_scores_array", scoresArray);
        } else {
            instance.publishState("match_array", null);
            instance.publishState("match_scores_array", null);
        }
    }

    $(document).ready(function() {
        if (instance.data.input_box_id && instance.data.search_type) {
            $("#" + instance.data.input_box_id).on("input", function() {
                // Always update the input_box_value state
                let inputValue = $(this).val();
                instance.publishState('input_box_value', inputValue);

                if (instance.data.dictionary && instance.data.options) {
                    let searchTerm = inputValue ? inputValue.trim() : "";

                    if (instance.data.ignore_diacritics) {
                        searchTerm = instance.data.removeSpecialCharacters(searchTerm);
                    }

                    if (searchTerm) {
                        let words = searchTerm.split(' ');
                        words = words.filter(function(str) {
                            return str.length >= instance.data.exclude_under;
                        });
                        searchTerm = words.join(' ');

                        if (searchTerm) {
                            var fuse = new Fuse(instance.data.dictionary, instance.data.options);
                            result = fuse.search(searchTerm);
                        } else {
                            result = [];
                        }
                    } else {
                        result = []; // Empty result when input is empty
                    }
                    getResults();
                } else {
                    console.log("Search & Autocorrect: Instance variables not declared");
                }
            });
        }
    });
}

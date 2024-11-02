var count = 0;
var wordCount = function () {
    var inputElement = document.getElementById('inputValue');
    var inputValue = (inputElement === null || inputElement === void 0 ? void 0 : inputElement.value) || '';
    console.log("Input Value: \"".concat(inputValue, "\""));
    count = inputValue.trim().split(/\s+/).length;
    if (inputValue == "") {
        count = 0;
    }
    ;
    var sentenceAmount = (inputValue.match(/\./g) || []).length;
    var displayWords = document.getElementById('countDisplay');
    displayWords && (displayWords.innerHTML = "Current Word Count: ".concat(count));
    var displaySentence = document.getElementById('sentenceDisplay');
    displaySentence && (displaySentence.innerHTML = "Current Word Count: ".concat(sentenceAmount));
};
wordCount();

var count = 0;
var wordCount = function () {
    var inputElement = document.getElementById('inputValue');
    var inputValue = (inputElement === null || inputElement === void 0 ? void 0 : inputElement.value) || '';
    console.log("Input Value: \"".concat(inputValue, "\""));
    count = inputValue.trim().split(/\s+/).length + 1;
    if (inputValue == "") {
        count = 0;
    }
    ;
    var display = document.getElementById('countDisplay');
    display && (display.innerHTML = "Current Word Count: ".concat(count));
};
wordCount();

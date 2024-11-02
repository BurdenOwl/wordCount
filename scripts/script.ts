let count : number = 0;

const wordCount = (): void => {
    const inputElement = document.getElementById('inputValue') as HTMLInputElement | null;
    const inputValue : string = inputElement?.value || '';
    console.log(`Input Value: "${inputValue}"`);
    count = inputValue.trim().split(/\s+/).length;
    if (inputValue == "") {
        count = 0;
    };

    const sentenceAmount : number = (inputValue.match(/\./g) || []).length;

    const displayWords = document.getElementById('countDisplay') as HTMLElement | null;
    displayWords && (displayWords.innerHTML = `Current Word Count: ${count}`);

    const displaySentence = document.getElementById('sentenceDisplay') as HTMLElement | null;
    displaySentence && (displaySentence.innerHTML = `Current Word Count: ${sentenceAmount}`);
};

wordCount();
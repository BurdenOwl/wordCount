let count : number = 0;

const wordCount = (): void => {
    const inputElement = document.getElementById('inputValue') as HTMLInputElement | null;
    const inputValue : string = inputElement?.value || '';
    console.log(`Input Value: "${inputValue}"`);
    count = inputValue.trim().split(/\s+/).length;
    if (inputValue == "") {
        count = 0;
    };

    const display = document.getElementById('countDisplay') as HTMLElement | null;
    display && (display.innerHTML = `Current Word Count: ${count}`);
};

wordCount();
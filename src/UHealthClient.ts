import assert from 'assert';

function printOutput(outputArea: HTMLElement, message: string): void {
    // append the message to the output area
    outputArea.innerText += message + '\n';
    // scroll the output area so that what we just printed is visible
    outputArea.scrollTop = outputArea.scrollHeight;
}

async function main(): Promise<void> {
    const bodyArea: HTMLElement = document.getElementById('bodyArea') ?? assert.fail('missing mainBody');
    printOutput(bodyArea, `Click in the canvas above star a blank`);
}

void main();
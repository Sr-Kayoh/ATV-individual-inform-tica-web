let count = 0;

document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('inputText');
    const text = input.value.trim();

    if (text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        document.getElementById('outputDiv').appendChild(paragraph);
        count++;
        input.value = '';

        alert(`${count} linha(s) foram adicionadas`);
    } else {
        alert('Por favor, digite um parágrafo.');
    }
});
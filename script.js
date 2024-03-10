function calculateNotes() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const cashGiven = parseFloat(document.getElementById('cashGiven').value);

    if (isNaN(billAmount) || isNaN(cashGiven)) {
        alert('Please enter valid numbers.');
        return;
    }

    if (cashGiven < billAmount) {
        alert('Insufficient cash given.');
        return;
    }

    let amountToReturn = cashGiven - billAmount;
    const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
    let noteCounts = {};

    notes.forEach(note => {
        if (amountToReturn >= note) {
            noteCounts[note] = Math.floor(amountToReturn / note);
            amountToReturn %= note;
        }
    });

    let result = 'Minimum notes to return:<br>';
    Object.keys(noteCounts).forEach(note => {
        result += `${noteCounts[note]} notes of Rs.${note}<br>`;
    });

    document.getElementById('result').innerHTML = result;
}

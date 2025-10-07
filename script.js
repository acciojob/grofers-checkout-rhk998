const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all price elements
    const priceElements = document.querySelectorAll('.price');
    let total = 0;

    // Sum all prices
    priceElements.forEach(el => {
        const value = parseFloat(el.textContent);
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Create new row and cell
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');

    // Span the cell across both columns
    newCell.colSpan = 2;
    newCell.textContent = `Total Price: ₹${total.toFixed(2)}`;

    // Append cell to row
    newRow.appendChild(newCell);

    // Append new row to the table
    document.querySelector('table').appendChild(newRow);

    // Disable button to prevent multiple totals
    getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

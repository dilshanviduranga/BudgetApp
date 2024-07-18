document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('budget-form');
    const itemsList = document.getElementById('items');
    const totalDisplay = document.getElementById('total');
    let total = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const description = document.getElementById('description').value;
        const price = parseFloat(document.getElementById('price').value);
        const currency = document.getElementById('currency').value;

        addItemToList(description, price, currency);
        updateTotal(price);

        form.reset();
    });

    function addItemToList(description, price, currency) {
        const li = document.createElement('li');
        li.innerHTML = `${description} - ${price.toFixed(2)} ${currency}`;
        itemsList.appendChild(li);
    }

    function updateTotal(price) {
        total += price;
        totalDisplay.textContent = total.toFixed(2);
    }
});

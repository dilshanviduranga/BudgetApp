
class Expences {
    constructor(date, Category, Currency, Description, Amount) {
        this.date = date;
        this.Category = Category;
        this.Currency = Currency;
        this.Description = Description;
        this.Amount = Amount;

    }
}

function saveInfo() {
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let currency = document.getElementById("currency").value;
    let description = document.getElementById("description").value;
    let amount = Number(document.getElementById("amount").value);




    if (validate(date, category, currency, description, amount)) {
        let expence = new Expences(date, category, currency, description, amount);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "date": date,
            "category": category,
            "currency": currency,
            "description": description,
            "amount": amount
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        }
        fetch("http://localhost:8080/add-data", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                alert("Expense added successfully..!")
                document.getElementById("date").value = "";
                document.getElementById("category").value = "";
                document.getElementById("description").value = "";
                document.getElementById("amount").value = "";
            })
            .catch((error) => console.error(error));
    }
}

function validate(date, category, currency, description, amount) {
    if (date == "" & category == "" & description == "" & amount == "") {
        alert("You haven't enterd any data...")
        return false;
    } else if (date == "") {
        alert("Enter date...");
        return false;
    } else if (category == "") {
        alert("Enter the category...");
        return false;
    } else if (currency == "") {
        alert("Enter the currency...");
        return false;
    } else if (description == "") {
        alert("Enter a description...");
        return false;
    } else if (amount <= 0 || amount == "") {
        alert("Enter a valid amount...");
        return false;
    }
    return true;

}




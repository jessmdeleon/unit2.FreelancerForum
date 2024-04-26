
const names = ["Alice", "Bob", "Carol", "David", "Emily"]; // Example names
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant"]; // Example occupations

let freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
]; // Initial freelancers

function renderFreelancers() { 
    const freelancersList = document.getElementById("freelancers-list");
    freelancersList.innerHTML = "";
    freelancers.forEach(freelancer => {
        const listItem = document.createElement("li"); //automatically creating a list
        listItem.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
        freelancersList.appendChild(listItem);
    });
}

function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 20; // Random price between $20 and $119
    freelancers.push({ name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice });
    renderFreelancers();
    updateAveragePrice();
}

function updateAveragePrice() {
    const averagePriceElement = document.getElementById("average-price");
    const totalStartingPrice = freelancers.reduce((total, freelancer) => total + freelancer.startingPrice, 0);
    const averagePrice = totalStartingPrice / freelancers.length;
    averagePriceElement.textContent = averagePrice.toFixed(2);
}

// Call renderFreelancers initially
renderFreelancers();

// Generate a new freelancer every 5 seconds
setInterval(generateRandomFreelancer, 5000);

// Mock data for distributors
const distributorsData = [
  {
    name: "Distributor A",
    shippedLastMonth: 500,
    forecastedThisMonth: 600,
    ytdAverageShipped: 450,
  },
  {
    name: "Distributor B",
    shippedLastMonth: 700,
    forecastedThisMonth: 800,
    ytdAverageShipped: 650,
  },
  // Add more distributor data here...
];

// Function to generate distributor cards and display data
function displayDistributors() {
  const distributorsContainer = document.getElementById("distributorsContainer");

  distributorsData.forEach((distributor) => {
    const card = document.createElement("div");
    card.classList.add("distributor-card");

    const name = document.createElement("div");
    name.classList.add("distributor-name");
    name.innerText = distributor.name;

    const shippedLastMonth = document.createElement("div");
    shippedLastMonth.classList.add("metric");
    shippedLastMonth.innerText = `Shipped Last Month: ${distributor.shippedLastMonth}`;

    const forecastedThisMonth = document.createElement("div");
    forecastedThisMonth.classList.add("metric");
    forecastedThisMonth.innerText = `Forecasted This Month: ${distributor.forecastedThisMonth}`;

    const ytdAverageShipped = document.createElement("div");
    ytdAverageShipped.classList.add("metric");
    ytdAverageShipped.innerText = `YTD Average Shipped: ${distributor.ytdAverageShipped}`;

    card.appendChild(name);
    card.appendChild(shippedLastMonth);
    card.appendChild(forecastedThisMonth);
    card.appendChild(ytdAverageShipped);

    distributorsContainer.appendChild(card);
  });
}

// Call the function to display distributors on page load
displayDistributors();

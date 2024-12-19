// Scroll to the search section when the button is clicked
document.getElementById("scrollToSearch").addEventListener("click", () => {
    document.getElementById("searchSection").scrollIntoView({ behavior: "smooth" });
  });
  
  // Search cryptocurrency price
  document.getElementById("searchBtn").addEventListener("click", async () => {
    const coin = document.getElementById("search").value.trim().toLowerCase();
    const priceSpan = document.getElementById("price");
  
    if (!coin || !/^[a-z]+$/.test(coin)) {
      alert("Please enter a valid cryptocurrency name.");
      return;
    }
  
    try {
      const response = await fetch(`/api/crypto?coin=${coin}`);
      const data = await response.json();
  
      if (data[coin]) {
        priceSpan.textContent = data[coin].usd.toFixed(2);
      } else {
        priceSpan.textContent = "Not Found";
      }
    } catch (error) {
      console.error("Error:", error);
      priceSpan.textContent = "Error fetching data.";
    }
  });
  
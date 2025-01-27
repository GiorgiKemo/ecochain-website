// Connect Wallet
document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        alert("Connected: " + accounts[0]);
      } catch (error) {
        alert("Error connecting wallet.");
      }
    } else {
      alert("Install MetaMask!");
    }
  });
  
  // Animate Carbon Counter
  let count = 12540;
  setInterval(() => {
    count += 10;
    document.getElementById('carbonCounter').textContent = count;
  }, 1000);
  // Fetch Token Price (using CoinGecko API)
async function fetchTokenPrice() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      const data = await response.json();
      const price = data.ethereum.usd; // Replace with your token ID later
      document.getElementById('tokenPrice').textContent = `$${price}`;
    } catch (error) {
      console.error("Failed to fetch price:", error);
    }
  }
  
  // Add this element to your Hero or Tokenomics section
  // <p class="text-white">$ECO Price: <span id="tokenPrice">...</span></p>
  
  // Call the function when the page loads
  window.onload = fetchTokenPrice;
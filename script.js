const btn = document.getElementById("connectBtn");
const status = document.getElementById("status");

btn.addEventListener("click", connectWallet);

async function connectWallet() {
  // 1️⃣ Desktop or MetaMask browser
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      status.innerText = "Connected: " + accounts[0];
    } catch (err) {
      status.innerText = "User rejected connection";
    }
    return;
  }

  // 2️⃣ Mobile browser without MetaMask
  if (isMobile()) {
    status.innerText = "Redirecting to MetaMask...";
    
    // Replace with your GitHub Pages URL
    const dappUrl = "https://yourusername.github.io/your-repo-name/";
    
    // Deep link to MetaMask
    window.location.href =
      "https://metamask.app.link/dapp/" + dappUrl;
    return;
  }

  // 3️⃣ No wallet
  alert("MetaMask not detected. Please install MetaMask.");
}

function isMobile() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent);
}

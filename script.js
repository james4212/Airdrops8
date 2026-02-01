document.getElementById("connectBtn").addEventListener("click", connectWallet);

async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      document.getElementById("status").innerText =
        "Connected: " + accounts[0];
    } catch (error) {
      console.error(error);
      alert("Connection rejected");
    }
  } else {
    alert("MetaMask not detected. Open in MetaMask browser.");
  }
}

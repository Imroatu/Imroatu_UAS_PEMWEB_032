import "./App.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

function App() {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState("");
  const [transactions, setTransactions] = useState([]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask belum terpasang");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const bal = await provider.getBalance(accounts[0]);

    setWallet(accounts[0]);
    setBalance(ethers.formatEther(bal));
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);


  return (
  <div className="container">
    <h1>Donasi</h1>

    <div className="grid">

      <div className="card">
        <h2>Wallet</h2>

        <button onClick={connectWallet}>
          Connect MetaMask
        </button>

        {wallet && (
          <>
            <p><b>Address:</b></p>
            <p>{wallet}</p>
            <p><b>Saldo:</b> {balance} ETH</p>
          </>
        )}
      </div>

      <div className="card">
        <h2>List Donasi</h2>
        <ul>
          {transactions.map(tx => (
            <li key={tx.id}>
              {tx.from} → {tx.to} ({tx.amount})
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );

}
export default App;


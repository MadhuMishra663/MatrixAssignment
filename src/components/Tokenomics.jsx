import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './tokenomics.css';

const Tokenomics = () => {
  const data = {
    labels: ['Partnership/CEX Wallet', 'LP Pool', 'Burned', 'BNB LP Pool'],
    datasets: [
      {
        data: [5, 35, 30, 30],
        backgroundColor: ['#d32f2f', '#1976d2', '#9c27b0', '#fbc02d'],
        hoverBackgroundColor: ['#b71c1c', '#1565c0', '#7b1fa2', '#f9a825'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="tokenomics">
      <header className="header">
        <h1>A.I. GEN</h1>
        <nav>
          <ul>
            <li>Features</li>
            <li>Roadmap</li>
            <li>Tokenomics</li>
          </ul>
        </nav>
        <div className="actions">
          <button>Whitepaper</button>
          <button>Get Started</button>
        </div>
      </header>

      <main className="main-content">
        <h2>Tokenomics</h2>
        <div className="details">
          <div className="info">
            <p><strong>Name</strong>: AI GEN</p>
            <p><strong>Token Name</strong>: $AIGEN</p>
            <p><strong>Total Supply</strong>: 1B</p>
            <p><strong>Circulating Supply</strong>: 1B</p>
            <p><strong>Contract</strong>: Lorem ipsum dolor sit a...</p>
            <p><strong>Chain</strong>: Ethereum</p>
          </div>
          <div className="chart-container">
            <Pie data={data} options={options} />
            <div className="legend">
              <div className="legend-item">
                <div className="color-box" style={{ backgroundColor: '#d32f2f' }}></div>
                <span>Partnership: 5% tokens</span>
              </div>
              <div className="legend-item">
                <div className="color-box" style={{ backgroundColor: '#1976d2' }}></div>
                <span>LP Pool: 35% tokens</span>
              </div>
              <div className="legend-item">
                <div className="color-box" style={{ backgroundColor: '#9c27b0' }}></div>
                <span>Burned: 30% tokens</span>
              </div>
              <div className="legend-item">
                <div className="color-box" style={{ backgroundColor: '#fbc02d' }}></div>
                <span>BNB LP Pool: 30% tokens</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tokenomics;

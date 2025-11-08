import React, { useState, useEffect } from 'react';
import './OnaWallet.css';

// Simple icon components (since we can't use lucide-react without npm)
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const SparklesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3l1.545 4.635L18 9.18l-4.455 1.545L12 15.27l-1.545-4.545L6 9.18l4.455-1.545z"/>
    <path d="M6 3l.75 2.25L9 6l-2.25.75L6 9 5.25 6.75 3 6l2.25-.75z"/>
    <path d="M18 15l.75 2.25L21 18l-2.25.75L18 21l-.75-2.25L15 18l2.25-.75z"/>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const CreditCardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const SmartphoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

export default function OnaWallet() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showFeatureModal, setShowFeatureModal] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="ona-wallet">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="logo-icon">
                <img src="/logo.png" alt="Ona Wallet" className="logo-image" />
              </div>
              <span className="logo-text">Ona Wallet</span>
            </div>
            
            {/* Navigation Links */}
            <div className="nav-links">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link">HOME</button>
              <button onClick={() => scrollToSection('features')} className="nav-link">FEATURES</button>
              <button onClick={() => scrollToSection('security')} className="nav-link">SECURITY</button>
              <button onClick={() => scrollToSection('download')} className="nav-link">DOWNLOAD</button>
            </div>
            
            {/* Right Actions */}
            <div className="nav-actions">
              <a 
                href="https://twitter.com/onawallet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="twitter-btn"
              >
                <TwitterIcon />
              </a>
              <button onClick={() => setShowDownloadModal(true)} className="get-started-btn">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            {/* Badge */}
            <div className="hero-badge">
              <SparklesIcon />
              <span>Now Available Worldwide</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="hero-title">
              <span className="hero-title-line">The Future</span>
              <span className="hero-title-line">of Digital</span>
              <span className="hero-title-line hero-title-gradient">Wallets</span>
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle">
              Secure, fast, and intelligent wallet management designed for the modern digital economy
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button onClick={() => setShowDownloadModal(true)} className="btn-primary">
                <DownloadIcon />
                <span>Download Now</span>
                <ArrowRightIcon />
              </button>
              
              <button onClick={() => scrollToSection('features')} className="btn-secondary">
                <ShieldIcon />
                <span>Learn More</span>
              </button>
            </div>

            {/* Key Metrics */}
            <div className="metrics">
              <div className="metric-card">
                <div className="metric-value">$0.001</div>
                <div className="metric-label">Average transaction fee</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">&lt;2s</div>
                <div className="metric-label">Transaction confirmation</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">100+</div>
                <div className="metric-label">Supported currencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Features</div>
            <h2 className="section-title">Built for the Future</h2>
            <p className="section-subtitle">Everything you need in one powerful wallet</p>
          </div>

          <div className="features-grid">
            <div className="feature-card" onClick={() => setShowFeatureModal('security')}>
              <div className="feature-icon">
                <ShieldIcon />
              </div>
              <h3 className="feature-title">Military-Grade Security</h3>
              <p className="feature-description">Advanced encryption with biometric authentication</p>
              <div className="feature-status">✓ Available</div>
            </div>

            <div className="feature-card" onClick={() => setShowFeatureModal('transactions')}>
              <div className="feature-icon">
                <ZapIcon />
              </div>
              <h3 className="feature-title">Instant Transactions</h3>
              <p className="feature-description">Lightning-fast transfers with real-time confirmation</p>
              <div className="feature-status">✓ Available</div>
            </div>

            <div className="feature-card" onClick={() => setShowFeatureModal('currency')}>
              <div className="feature-icon">
                <GlobeIcon />
              </div>
              <h3 className="feature-title">Multi-Currency</h3>
              <p className="feature-description">Support for crypto, fiat, and digital assets</p>
              <div className="feature-status">✓ Available</div>
            </div>

            <div className="feature-card" onClick={() => setShowFeatureModal('analytics')}>
              <div className="feature-icon">
                <ChartIcon />
              </div>
              <h3 className="feature-title">Smart Analytics</h3>
              <p className="feature-description">AI-powered insights and spending tracking</p>
              <div className="feature-status">✓ Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Info Section */}
      <section id="security-info" className="info-section">
        <div className="section-container">
          <div className="info-content">
            <div className="info-icon-large">
              <ShieldIcon />
            </div>
            <h2 className="info-title">Military-Grade Security</h2>
            <p className="info-lead">Your assets are protected by the most advanced security measures available</p>
            
            <div className="info-features">
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>256-bit AES Encryption</h4>
                  <p>Bank-level encryption protects all your data and transactions</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Biometric Authentication</h4>
                  <p>Fingerprint and Face ID support for secure access</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Two-Factor Authentication (2FA)</h4>
                  <p>Extra layer of protection for your account</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Cold Storage</h4>
                  <p>Majority of funds stored offline for maximum security</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Multi-Signature Wallets</h4>
                  <p>Require multiple approvals for large transactions</p>
                </div>
              </div>
            </div>
            
            <button onClick={() => scrollToSection('features')} className="btn-back">
              ← Back to Features
            </button>
          </div>
        </div>
      </section>

      {/* Transactions Info Section */}
      <section id="transactions-info" className="info-section">
        <div className="section-container">
          <div className="info-content">
            <div className="info-icon-large">
              <ZapIcon />
            </div>
            <h2 className="info-title">Instant Transactions</h2>
            <p className="info-lead">Lightning-fast transfers with real-time confirmation</p>
            
            <div className="info-features">
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Sub-Second Processing</h4>
                  <p>Transactions complete in under 2 seconds on average</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Real-Time Notifications</h4>
                  <p>Get instant alerts for all account activity</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Smart Fee Optimization</h4>
                  <p>Automatically selects the lowest fees available</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Batch Processing</h4>
                  <p>Send to multiple recipients in a single transaction</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Transaction History</h4>
                  <p>Complete record of all your transfers and receipts</p>
                </div>
              </div>
            </div>
            
            <button onClick={() => scrollToSection('features')} className="btn-back">
              ← Back to Features
            </button>
          </div>
        </div>
      </section>

      {/* Multi-Currency Info Section */}
      <section id="multicurrency-info" className="info-section">
        <div className="section-container">
          <div className="info-content">
            <div className="info-icon-large">
              <GlobeIcon />
            </div>
            <h2 className="info-title">Multi-Currency Support</h2>
            <p className="info-lead">Support for crypto, fiat, and digital assets</p>
            
            <div className="info-features">
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>100+ Cryptocurrencies</h4>
                  <p>Bitcoin, Ethereum, and all major altcoins supported</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Fiat Currency Integration</h4>
                  <p>Support for USD, EUR, GBP, and 50+ other currencies</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>NFT Support</h4>
                  <p>View, store, and transfer your digital collectibles</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Real-Time Exchange Rates</h4>
                  <p>Always see current market values for all assets</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Easy Currency Conversion</h4>
                  <p>Swap between currencies with one tap</p>
                </div>
              </div>
            </div>
            
            <button onClick={() => scrollToSection('features')} className="btn-back">
              ← Back to Features
            </button>
          </div>
        </div>
      </section>

      {/* Analytics Info Section */}
      <section id="analytics-info" className="info-section">
        <div className="section-container">
          <div className="info-content">
            <div className="info-icon-large">
              <ChartIcon />
            </div>
            <h2 className="info-title">Smart Analytics</h2>
            <p className="info-lead">AI-powered insights and spending tracking</p>
            
            <div className="info-features">
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Spending Insights</h4>
                  <p>Track where your money goes with detailed breakdowns</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Portfolio Tracking</h4>
                  <p>Real-time value of all your assets in one place</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Budget Management</h4>
                  <p>Set spending limits and get alerts when exceeded</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>AI Predictions</h4>
                  <p>Smart forecasts help you plan better</p>
                </div>
              </div>
              
              <div className="info-feature-item">
                <div className="info-check">✓</div>
                <div>
                  <h4>Export Reports</h4>
                  <p>Generate detailed reports for tax season</p>
                </div>
              </div>
            </div>
            
            <button onClick={() => scrollToSection('features')} className="btn-back">
              ← Back to Features
            </button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download-section">
        <div className="section-container">
          <div className="download-card">
            <div className="section-badge">Powered By Blockchain</div>
            <h2 className="section-title">Next-Generation Technology</h2>
            <p className="section-subtitle">Decentralized architecture with enterprise-grade reliability</p>
            
            <div className="tech-stats">
              <div className="tech-stat">
                <div className="tech-icon">
                  <ZapIcon />
                </div>
                <div className="tech-value">250ms</div>
                <div className="tech-label">Block Time</div>
              </div>
              <div className="tech-stat">
                <div className="tech-icon">
                  <CreditCardIcon />
                </div>
                <div className="tech-value">$0.0001</div>
                <div className="tech-label">Avg Fee</div>
              </div>
              <div className="tech-stat">
                <div className="tech-icon">
                  <ShieldIcon />
                </div>
                <div className="tech-value">100K+</div>
                <div className="tech-label">TPS Capacity</div>
              </div>
            </div>

            <button onClick={() => setShowDownloadModal(true)} className="btn-download">
              <DownloadIcon />
              Download Ona Wallet
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <img src="/logo.png" alt="Ona Wallet" className="logo-image" />
                </div>
                <span>Ona Wallet</span>
              </div>
              <p className="footer-description">
                Making digital payments accessible through intelligent and secure wallet technology.
              </p>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-heading">Product</h4>
              <div className="footer-links">
                <button onClick={() => scrollToSection('features')}>Features</button>
                <button onClick={() => scrollToSection('security')}>Security</button>
                <button onClick={() => scrollToSection('download')}>Download</button>
              </div>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <div className="footer-links">
                <button onClick={() => {}}>About</button>
                <button onClick={() => {}}>Blog</button>
                <button onClick={() => {}}>Careers</button>
                <button onClick={() => {}}>Contact</button>
              </div>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-heading">Legal</h4>
              <div className="footer-links">
                <button onClick={() => {}}>Privacy</button>
                <button onClick={() => {}}>Terms</button>
                <button onClick={() => {}}>Security</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2025 Ona Wallet. All rights reserved.
            </div>
            <div className="footer-social">
              <a href="https://twitter.com/onawallet" target="_blank" rel="noopener noreferrer" className="social-link">
                <TwitterIcon />
              </a>
              <span>Built with cutting-edge blockchain technology</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="modal-overlay" onClick={() => setShowDownloadModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowDownloadModal(false)} className="modal-close">
              <XIcon />
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">
                <img src="/logo.png" alt="Ona Wallet" className="logo-image" />
              </div>
              <h3 className="modal-title">Download Ona Wallet</h3>
              <p className="modal-subtitle">Choose your platform</p>
            </div>

            <div className="modal-options">
              <button className="modal-option">
                <div className="modal-option-content">
                  <div className="modal-option-icon">
                    <SmartphoneIcon />
                  </div>
                  <div className="modal-option-text">
                    <div className="modal-option-title">iOS</div>
                    <div className="modal-option-desc">Available on App Store</div>
                  </div>
                </div>
                <ArrowRightIcon />
              </button>

              <button className="modal-option">
                <div className="modal-option-content">
                  <div className="modal-option-icon">
                    <SmartphoneIcon />
                  </div>
                  <div className="modal-option-text">
                    <div className="modal-option-title">Android</div>
                    <div className="modal-option-desc">Available on Play Store</div>
                  </div>
                </div>
                <ArrowRightIcon />
              </button>

              <button className="modal-option">
                <div className="modal-option-content">
                  <div className="modal-option-icon">
                    <GlobeIcon />
                  </div>
                  <div className="modal-option-text">
                    <div className="modal-option-title">Web App</div>
                    <div className="modal-option-desc">Access anywhere</div>
                  </div>
                </div>
                <ArrowRightIcon />
              </button>
            </div>

            <div className="modal-footer">
              <ShieldIcon />
              Secure • Fast • Reliable
            </div>
          </div>
        </div>
      )}

      {/* Feature Info Modal */}
      {showFeatureModal && (
        <div className="modal-overlay" onClick={() => setShowFeatureModal(null)}>
          <div className="modal feature-info-modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowFeatureModal(null)} className="modal-close">
              <XIcon />
            </button>
            
            {/* Security Modal */}
            {showFeatureModal === 'security' && (
              <div className="feature-modal-content">
                <div className="feature-modal-icon">
                  <ShieldIcon />
                </div>
                <h3 className="modal-title">Military-Grade Security</h3>
                
                <div className="feature-modal-details">
                  <div className="feature-detail">
                    <h4>End-to-End Encryption</h4>
                    <p>All your transactions and data are protected with AES-256 encryption, the same standard used by banks and governments worldwide.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>Biometric Authentication</h4>
                    <p>Secure your wallet with Face ID, Touch ID, or fingerprint scanning. Your biometric data never leaves your device.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>Multi-Signature Protection</h4>
                    <p>Enable multi-signature transactions that require approval from multiple devices or users before executing.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>Cold Storage Integration</h4>
                    <p>Store your assets in secure cold storage wallets for maximum protection against online threats.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>Device Verification</h4>
                    <p>Get instant notifications when your account is accessed from a new device, with one-tap approval or block.</p>
                  </div>
                </div>
                
                <button onClick={() => setShowDownloadModal(true)} className="btn-primary">
                  <DownloadIcon />
                  Get Started Now
                </button>
              </div>
            )}

            {/* Transactions Modal */}
            {showFeatureModal === 'transactions' && (
              <div className="feature-modal-content">
                <div className="feature-modal-icon">
                  <ZapIcon />
                </div>
                <h3 className="modal-title">Instant Transactions</h3>
                
                <div className="feature-modal-details">
                  <div className="feature-detail">
                    <h4>⚡ Lightning Network Integration</h4>
                    <p>Send and receive payments in under 2 seconds using Layer 2 Lightning Network technology with near-zero fees.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>🌐 Cross-Chain Swaps</h4>
                    <p>Instantly swap between different cryptocurrencies without leaving the app. No external exchanges needed.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>📊 Real-Time Confirmation</h4>
                    <p>Watch your transactions confirm in real-time with live blockchain tracking and instant notifications.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>💸 Smart Fee Optimization</h4>
                    <p>Our AI automatically selects the optimal transaction fee to ensure fast confirmation at the lowest cost.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>🔄 Batch Transactions</h4>
                    <p>Save on fees by combining multiple transfers into a single transaction with our batch processing feature.</p>
                  </div>
                </div>
                
                <button onClick={() => setShowDownloadModal(true)} className="btn-primary">
                  <DownloadIcon />
                  Get Started Now
                </button>
              </div>
            )}

            {/* Multi-Currency Modal */}
            {showFeatureModal === 'currency' && (
              <div className="feature-modal-content">
                <div className="feature-modal-icon">
                  <GlobeIcon />
                </div>
                <h3 className="modal-title">Multi-Currency Support</h3>
                
                <div className="feature-modal-details">
                  <div className="feature-detail">
                    <h4>💰 100+ Cryptocurrencies</h4>
                    <p>Support for Bitcoin, Ethereum, Solana, and over 100 other major cryptocurrencies and tokens.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>💵 Fiat Integration</h4>
                    <p>Buy, sell, and hold traditional currencies like USD, EUR, GBP alongside your crypto assets.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>🎨 NFT Gallery</h4>
                    <p>Store, view, and manage your NFT collection across multiple blockchains all in one place.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>🪙 Custom Token Support</h4>
                    <p>Add any ERC-20, BEP-20, or SPL token to your wallet with just the contract address.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>💱 Live Exchange Rates</h4>
                    <p>Real-time conversion rates for all your assets with automatic portfolio valuation in your preferred currency.</p>
                  </div>
                </div>
                
                <button onClick={() => setShowDownloadModal(true)} className="btn-primary">
                  <DownloadIcon />
                  Get Started Now
                </button>
              </div>
            )}

            {/* Analytics Modal */}
            {showFeatureModal === 'analytics' && (
              <div className="feature-modal-content">
                <div className="feature-modal-icon">
                  <ChartIcon />
                </div>
                <h3 className="modal-title">Smart Analytics</h3>
                
                <div className="feature-modal-details">
                  <div className="feature-detail">
                    <h4>📈 Portfolio Tracking</h4>
                    <p>Monitor your entire portfolio's performance with detailed charts, graphs, and historical data analysis.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>🤖 AI-Powered Insights</h4>
                    <p>Get personalized recommendations and insights based on your spending patterns and market trends.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>💡 Spending Analysis</h4>
                    <p>Understand where your money goes with automatic categorization and beautiful visual breakdowns.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>📊 Tax Reporting</h4>
                    <p>Automatically generate tax reports for your crypto transactions with support for multiple jurisdictions.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>🎯 Goal Setting</h4>
                    <p>Set savings goals and investment targets with progress tracking and smart recommendations to reach them faster.</p>
                  </div>
                  
                  <div className="feature-detail">
                    <h4>📱 Custom Alerts</h4>
                    <p>Create price alerts, balance notifications, and transaction reminders tailored to your needs.</p>
                  </div>
                </div>
                
                <button onClick={() => setShowDownloadModal(true)} className="btn-primary">
                  <DownloadIcon />
                  Get Started Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
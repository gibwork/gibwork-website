# Issue #196: Improve landing page to reflect current product (mobile apps, USDC bounties)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Gibwork is a mobile-first, on-chain bounty and task marketplace on Solana with USDC payments. Complete bounties, get paid in USDC instantly." />
  <title>Gibwork – On‑chain Bounties, Paid in USDC</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      background: #0b0e14;
      color: #eef2f6;
      line-height: 1.5;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    /* header */
    .header {
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #232a33;
    }
    .logo {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.5px;
      color: #fff;
    }
    .logo span {
      color: #6c8cff;
    }
    .nav a {
      color: #a0b3cc;
      text-decoration: none;
      margin-left: 28px;
      font-size: 0.95rem;
      transition: color 0.2s;
    }
    .nav a:hover {
      color: #fff;
    }
    .nav a.cta-small {
      background: #6c8cff;
      color: #0b0e14;
      padding: 8px 18px;
      border-radius: 40px;
      font-weight: 600;
    }
    .nav a.cta-small:hover {
      background: #8aa4ff;
      color: #0b0e14;
    }

    /* hero */
    .hero {
      padding: 60px 0 50px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 40px;
    }
    .hero-content {
      flex: 1 1 500px;
    }
    .solana-badge {
      display: inline-block;
      background: #1f2937;
      border-radius: 40px;
      padding: 6px 18px 6px 12px;
      font-size: 0.8rem;
      font-weight: 500;
      color: #b7c9e0;
      border: 1px solid #2d3748;
      margin-bottom: 18px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .solana-badge svg {
      width: 18px;
      height: 18px;
    }
    .hero h1 {
      font-size: 3.2rem;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.02em;
      margin-bottom: 16px;
    }
    .hero h1 .highlight {
      color: #6c8cff;
      background: linear-gradient(135deg, #6c8cff, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero p {
      font-size: 1.2rem;
      color: #b0c4dd;
      max-width: 540px;
      margin-bottom: 28px;
    }
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
    }
    .btn-primary {
      background: #6c8cff;
      color: #0b0e14;
      font-weight: 700;
      font-size: 1rem;
      padding: 14px 36px;
      border-radius: 60px;
      border: none;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: background 0.2s;
      letter-spacing: 0.3px;
    }
    .btn-primary:hover {
      background: #8aa4ff;
    }
    .btn-secondary {
      background: transparent;
      color: #b0c4dd;
      font-weight: 500;
      font-size: 1rem;
      padding: 14px 28px;
      border-radius: 60px;
      border: 1px solid #2d3748;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: border 0.2s, color 0.2s;
    }
    .btn-secondary:hover {
      border-color: #6c8cff;
      color: #fff;
    }
    .hero-image {
      flex: 1 1 300px;
      background: linear-gradient(145deg, #141c26, #1a232f);
      border-radius: 32px;
      padding: 32px 24px;
      text-align: center;
      border: 1px solid #2a3340;
      min-height: 220px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .hero-image .mock-phone {
      background: #0b0e14;
      border-radius: 28px;
      padding: 16px 12px;
      width: 180px;
      border: 1px solid #2d3748;
      box-shadow: 0 12px 30px rgba(0,0,0,0.6);
    }
    .mock-phone .status {
      display: flex;
      justify-content: space-between;
      font-size: 0.7rem;
      color: #76869e;
      margin-bottom: 10px;
    }
    .mock-phone .bounty-item {
      background: #1a232f;
      padding: 8px 10px;
      border-radius: 12px;
      margin-bottom: 8px;
      font-size: 0.8rem;
      display: flex;
      justify-content: space-between;
    }
    .mock-phone .bounty-item .price {
      color: #6c8cff;
      font-weight: 600;
    }

    /* section titles */
    .section-title {
      font-size: 2.2rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }
    .section-sub {
      color: #b0c4dd;
      margin-bottom: 36px;
      max-width: 600px;
    }

    /* mobile apps */
    .apps {
      padding: 60px 0;
      border-top: 1px solid #1f2937;
    }
    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 28px;
      margin-top: 10px;
    }
    .app-card {
      background: #141c26;
      border-radius: 24px;
      padding: 28px 20px;
      border: 1px solid #232a33;
      transition: border 0.2s;
    }
    .app-card:hover {
      border-color: #3d4a5c;
    }
    .app-card .icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    .app-card h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 6px;
    }
    .app-card p {
      color: #b0c4dd;
      font-size: 0.95rem;
    }
    .app-card .tag {
      display: inline-block;
      background: #1f2937;
      color: #b7c9e0;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 2px 12px;
      border-radius: 40px;
      margin-top: 10px;
      letter-spacing: 0.4px;
    }

    /* looking for */
    .looking {
      padding: 60px 0;
      border-top: 1px solid #1f2937;
    }
    .bounty-grid {
      display

## Verification
- Generated by DevilX auto-claim (OpenRouter/NVIDIA)
- Fri Aug 28 12:01:22 UTC 2026

Closes #196

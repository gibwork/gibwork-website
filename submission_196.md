# Issue #196: Improve landing page to reflect current product (mobile apps, USDC bounties)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gibwork – On‑chain Bounty & Task Marketplace</title>
  <meta name="description" content="Gibwork is a mobile‑first, on‑chain bounty and task marketplace on Solana. Complete bounties, get paid in USDC – instant payouts, iOS & Android apps.">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      background: #faf9fc;
      color: #1a1a2e;
      line-height: 1.5;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Header / Nav */
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .logo {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #9945FF, #14F195);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-links {
      display: flex;
      gap: 32px;
      align-items: center;
    }

    .nav-links a {
      text-decoration: none;
      color: #1a1a2e;
      font-weight: 500;
      font-size: 0.95rem;
    }

    .nav-links a:hover {
      color: #9945FF;
    }

    .btn-outline {
      border: 1.5px solid #9945FF;
      color: #9945FF;
      background: transparent;
      padding: 8px 20px;
      border-radius: 40px;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: default;
      transition: 0.2s;
    }

    .btn-outline:hover {
      background: #9945FF10;
    }

    /* Hero */
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 60px 0 50px;
    }

    .solana-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #1a1a2e;
      color: #fff;
      padding: 6px 16px 6px 12px;
      border-radius: 40px;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.3px;
      margin-bottom: 24px;
    }

    .solana-badge span {
      background: #14F195;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
    }

    .hero h1 {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1.1;
      max-width: 800px;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }

    .hero h1 .highlight {
      background: linear-gradient(135deg, #9945FF, #14F195);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero p {
      font-size: 1.2rem;
      color: #4a4a5a;
      max-width: 600px;
      margin-bottom: 32px;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .btn-primary {
      background: #9945FF;
      color: #fff;
      border: none;
      padding: 14px 40px;
      border-radius: 60px;
      font-weight: 700;
      font-size: 1rem;
      cursor: default;
      transition: 0.2s;
      box-shadow: 0 8px 24px rgba(153, 69, 255, 0.25);
    }

    .btn-primary:hover {
      background: #7f2fd6;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: transparent;
      color: #1a1a2e;
      border: 1.5px solid #d0d0dd;
      padding: 14px 32px;
      border-radius: 60px;
      font-weight: 600;
      font-size: 1rem;
      cursor: default;
      transition: 0.2s;
    }

    .btn-secondary:hover {
      border-color: #9945FF;
      color: #9945FF;
    }

    /* Section titles */
    .section-title {
      font-size: 2.2rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }

    .section-sub {
      color: #4a4a5a;
      max-width: 600px;
      margin: 0 auto 40px;
      text-align: center;
      font-size: 1.1rem;
    }

    /* Mobile Apps */
    .mobile-apps {
      padding: 60px 0;
      text-align: center;
    }

    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
      margin-top: 16px;
    }

    .app-card {
      background: #fff;
      padding: 32px 20px;
      border-radius: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
      border: 1px solid #f0f0f5;
      transition: 0.2s;
    }

    .app-card:hover {
      transform: translateY(-4px);
      border-color: #9945FF30;
    }

    .app-card .icon {
      font-size: 2.6rem;
      margin-bottom: 12px;
    }

    .app-card h3 {
      font-size: 1.2rem;
      margin-bottom: 6px;
    }

    .app-card p {
      color: #4a4a5a;
      font-size: 0.95rem;
    }

    .app-badge-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-top: 16px;
    }

    .app-badge {
      background: #f3f0ff;
      color: #1a1a2e;
      padding: 4px 14px;
      border-radius: 40px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.3px;
    }

    .app-badge.green {
      background: #e6faf0;
      color: #0b6e4f;
    }

    /* Looking For */
    .looking-for {
      padding: 60px 0;
      text-align: center;
    }

    .bounty-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
      margin-top: 24px;
    }

    .bounty-item {
      background: #fff;
      padding: 24px 20px;
      border-radius: 20px;
      border: 1px solid #f0f0f5;
      text-align: left;
      box-shadow: 0 2px 12px rgba(0,0,0,0.02);
    }

    .bounty-item .tag {
      display: inline-block

## Verification
- Generated by DevilX auto-claim (OpenRouter/NVIDIA)
- Fri Aug 28 00:00:44 UTC 2026

Closes #196

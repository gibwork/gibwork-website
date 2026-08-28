# Issue #196: Improve landing page to reflect current product (mobile apps, USDC bounties)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gibwork – On‑chain bounty & task marketplace on Solana</title>
  <meta name="description" content="Gibwork is the on‑chain work marketplace where you earn USDC by completing bounties. Mobile‑first, built on Solana, instant payouts.">
  <!-- Font & minimal reset -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Inter', sans-serif;
      background: #0a0a0f;
      color: #f0f0f5;
      line-height: 1.5;
    }
    .container {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 24px;
    }
    /* header / nav */
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px solid #1e1e2a;
    }
    .logo {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #9b7cfa, #6c5ce7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .nav-cta {
      background: #6c5ce7;
      border: none;
      color: #fff;
      font-weight: 600;
      padding: 10px 22px;
      border-radius: 40px;
      font-size: 0.9rem;
      cursor: default;
    }
    /* hero */
    .hero {
      padding: 60px 0 50px;
      text-align: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #1a1a2e;
      border: 1px solid #2d2d44;
      border-radius: 40px;
      padding: 6px 18px 6px 12px;
      font-size: 0.8rem;
      font-weight: 500;
      color: #b8b8d0;
      margin-bottom: 24px;
    }
    .badge-dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #6c5ce7;
      border-radius: 50%;
      box-shadow: 0 0 12px #6c5ce7aa;
    }
    .hero h1 {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.03em;
      max-width: 800px;
      margin: 0 auto 16px;
    }
    .hero h1 span {
      background: linear-gradient(135deg, #9b7cfa, #f7a1c4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero p {
      font-size: 1.2rem;
      color: #b0b0c8;
      max-width: 600px;
      margin: 0 auto 28px;
    }
    .btn-primary {
      display: inline-block;
      background: #6c5ce7;
      color: #fff;
      font-weight: 600;
      padding: 14px 38px;
      border-radius: 60px;
      border: none;
      font-size: 1rem;
      text-decoration: none;
      transition: 0.2s;
      box-shadow: 0 4px 20px #6c5ce755;
    }
    .btn-primary:hover {
      background: #7f6ff0;
      transform: scale(1.02);
    }
    .hero-sub {
      margin-top: 24px;
      font-size: 0.9rem;
      color: #7a7a9a;
    }
    /* section titles */
    .section-title {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }
    .section-sub {
      color: #a0a0bb;
      margin-bottom: 32px;
    }
    /* mobile apps */
    .apps-section {
      padding: 60px 0 40px;
      border-top: 1px solid #1a1a2a;
    }
    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 24px;
      margin-top: 10px;
    }
    .app-card {
      background: #12121e;
      border: 1px solid #252538;
      border-radius: 20px;
      padding: 24px 20px;
      text-align: center;
      transition: 0.2s;
    }
    .app-card:hover {
      border-color: #6c5ce766;
    }
    .app-icon {
      font-size: 2.4rem;
      margin-bottom: 8px;
    }
    .app-card h4 {
      font-weight: 600;
      font-size: 1.1rem;
    }
    .app-card p {
      color: #8888aa;
      font-size: 0.9rem;
      margin-top: 4px;
    }
    .pill-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px 14px;
      margin-top: 16px;
    }
    .pill {
      background: #1c1c30;
      color: #c0c0dd;
      font-size: 0.8rem;
      padding: 4px 16px;
      border-radius: 30px;
      border: 1px solid #2d2d48;
    }
    .pill.usdc {
      border-color: #6c5ce766;
      background: #1c1c34;
      color: #d4caff;
    }
    /* looking for (bounties) */
    .bounties-section {
      padding: 50px 0 40px;
      border-top: 1px solid #1a1a2a;
    }
    .bounty-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-top: 10px;
    }
    .bounty-item {
      background: #10101c;
      border-radius: 16px;
      padding: 20px;
      border-left: 4px solid #6c5ce7;
    }
    .bounty-item h4 {
      font-weight: 600;
      margin-bottom: 4px;
    }
    .bounty-item p {
      color: #9a9ab5;
      font-size: 0.9rem;
    }
    .bounty-tag {
      display: inline-block;
      margin-top: 10px;
      background: #1e1e34;
      color: #b0b0d0;
      font-size: 0.7rem;
      padding: 2px 14px;
      border-radius: 40px;
    }
    /* FAQ */
    .faq-section {
      padding: 50px 0 40px;
      border-top: 1px solid #1a1a2a;
    }
    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 760px;
      margin-top: 10px;
    }
    .faq-item {
      background: #10101c;
      border-radius: 14px;
      padding: 18px 22px;
      border: 1px solid #222236;
    }
    .faq-item h4 {
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 6px;
    }
    .faq-item p {
      color: #b0b0cc;
      font-size: 0.95rem;
    }
    /* CTA ready to earn */
    .cta-section {
      padding: 60px 0 50px;
     

## Verification
- Generated by DevilX auto-claim (OpenRouter/NVIDIA)
- Fri Aug 28 06:00:51 UTC 2026

Closes #196

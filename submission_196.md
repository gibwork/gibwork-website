# Issue #196: Improve landing page to reflect current product (mobile apps, USDC bounties)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Gibwork — on-chain work marketplace on Solana. Complete bounties, get paid in USDC. Mobile-first, instant payouts." />
    <title>Gibwork — On-Chain Bounties & Tasks</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet" />
    <style>
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :root {
            --bg: #f8fafc;
            --surface: #ffffff;
            --text-primary: #0b1a33;
            --text-secondary: #334155;
            --text-muted: #64748b;
            --accent: #6c3df4;
            --accent-hover: #5a2edb;
            --accent-light: #ede9fe;
            --border: #e2e8f0;
            --radius: 16px;
            --radius-sm: 10px;
            --shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
            --shadow-hover: 0 12px 40px rgba(108, 61, 244, 0.12);
            --max-width: 1200px;
            --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        body {
            font-family: var(--font);
            background: var(--bg);
            color: var(--text-primary);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }
        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 0 24px;
        }

        /* HEADER */
        .header {
            background: var(--surface);
            border-bottom: 1px solid var(--border);
            padding: 16px 0;
            position: sticky;
            top: 0;
            z-index: 10;
            backdrop-filter: blur(8px);
            background: rgba(255, 255, 255, 0.92);
        }
        .header .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .logo {
            font-weight: 800;
            font-size: 1.5rem;
            letter-spacing: -0.03em;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .logo span {
            background: var(--accent);
            color: #fff;
            font-size: 0.6rem;
            font-weight: 600;
            padding: 2px 8px;
            border-radius: 20px;
            letter-spacing: 0.3px;
        }
        .nav {
            display: flex;
            align-items: center;
            gap: 24px;
        }
        .nav a {
            text-decoration: none;
            color: var(--text-secondary);
            font-size: 0.9rem;
            font-weight: 500;
            transition: color 0.2s;
        }
        .nav a:hover {
            color: var(--accent);
        }
        .nav .btn-outline {
            border: 1.5px solid var(--border);
            padding: 8px 18px;
            border-radius: 40px;
            font-weight: 600;
            color: var(--text-primary);
        }
        .nav .btn-outline:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-light);
        }

        /* HERO */
        .hero {
            padding: 64px 0 72px;
            background: var(--surface);
            border-bottom: 1px solid var(--border);
        }
        .hero .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }
        .hero-content {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--accent-light);
            color: var(--accent);
            font-weight: 600;
            font-size: 0.75rem;
            padding: 6px 16px 6px 12px;
            border-radius: 40px;
            width: fit-content;
            letter-spacing: 0.3px;
            text-transform: uppercase;
        }
        .hero-badge svg {
            flex-shrink: 0;
        }
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.08;
            letter-spacing: -0.04em;
        }
        .hero h1 .highlight {
            background: linear-gradient(135deg, var(--accent), #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .hero p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            max-width: 480px;
        }
        .hero-actions {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
            margin-top: 4px;
        }
        .btn-primary {
            background: var(--accent);
            color: #fff;
            border: none;
            padding: 14px 36px;
            border-radius: 40px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .btn-primary:hover {
            background: var(--accent-hover);
            transform: translateY(-2px);
        }
        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 1.5px solid var(--border);
            padding: 14px 28px;
            border

## Verification
- Generated by DevilX auto-claim (OpenRouter/NVIDIA)
- Fri Aug 28 18:01:03 UTC 2026

Closes #196

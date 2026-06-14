<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gibwork – Earn Rewards by Contributing</title>
  <meta name="description" content="Discover tasks, contribute meaningful work, collaborate with projects, and get rewarded through Gibwork's growing ecosystem.">
  <style>
    /* ====== RESET & BASE ====== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; font-size: 16px; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #111; background: #fafbfc; }

    /* ====== UTILITY ====== */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
    .text-center { text-align: center; }
    .btn { display: inline-block; padding: 0.875rem 2rem; font-size: 1rem; font-weight: 600; border-radius: 8px; text-decoration: none; transition: background 0.2s, transform 0.1s; cursor: pointer; border: none; }
    .btn-primary { background: #6c5ce7; color: #fff; }
    .btn-primary:hover { background: #5a4bd1; transform: translateY(-2px); }
    .btn-secondary { background: transparent; color: #6c5ce7; border: 2px solid #6c5ce7; }
    .btn-secondary:hover { background: #f0edff; }

    /* ====== HEADER ====== */
    header { position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); border-bottom: 1px solid #e2e8f0; }
    .nav { display: flex; align-items: center; justify-content: space-between; height: 72px; }
    .logo { font-size: 1.5rem; font-weight: 700; color: #6c5ce7; text-decoration: none; }
    .nav-links { display: flex; gap: 2rem; list-style: none; }
    .nav-links a { text-decoration: none; color: #333; font-weight: 500; transition: color 0.2s; }
    .nav-links a:hover { color: #6c5ce7; }
    .nav-cta .btn { padding: 0.5rem 1.25rem; font-size: 0.875rem; }
    /* Mobile menu */
    .menu-toggle { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #333; }
    @media (max-width: 768px) {
      .nav-links { display: none; flex-direction: column; position: absolute; top: 72px; left: 0; right: 0; background: #fff; padding: 1rem; border-bottom: 1px solid #e2e8f0; }
      .nav-links.active { display: flex; }
      .menu-toggle { display: block; }
      .nav-cta { display: none; }
    }

    /* ====== HERO ====== */
    .hero { padding: 6rem 0 4rem; text-align: center; background: linear-gradient(135deg, #f0edff 0%, #fff 50%, #e6f7ff 100%); }
    .hero h1 { font-size: 3rem; font-weight: 800; line-height: 1.2; max-width: 800px; margin: 0 auto 1rem; color: #1a202c; }
    .hero p { font-size: 1.25rem; color: #4a5568; max-width: 600px; margin: 0 auto 2rem; }
    .hero-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .hero-visual { max-width: 800px; margin: 3rem auto 0; }
    .hero-visual img { width: 100%; height: auto; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

    /* ====== SECTIONS ====== */
    section { padding: 5rem 0; }
    .section-title { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }
    .section-sub { color: #4a5568; margin-bottom: 3rem; }

    /* ====== HOW IT WORKS ====== */
    .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; }
    .step { background: #fff; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center; transition: transform 0.2s; }
    .step:hover { transform: translateY(-4px); }
    .step-icon { font-size: 2.5rem; margin-bottom: 0.75rem; color: #6c5ce7; }
    .step h3 { font-size: 1.125rem;
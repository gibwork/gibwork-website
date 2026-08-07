import { UPDATED_GIBWORK_FAQ } from './faq-updated';

describe('Gibwork Landing Page FAQ Accuracy', () => {
  it('should include email/OAuth sign-up copy without wallet-only restriction', () => {
    const walletFaq = UPDATED_GIBWORK_FAQ.find(f => f.question.includes("wallet"));
    expect(walletFaq).toBeDefined();
    expect(walletFaq?.answer).toContain("Sign up in seconds with email");
  });

  it('should accurately explain escrow-before-work payout mechanics', () => {
    const payoutFaq = UPDATED_GIBWORK_FAQ.find(f => f.question.includes("get paid"));
    expect(payoutFaq).toBeDefined();
    expect(payoutFaq?.answer).toContain("Rewards are held in on-chain escrow");
  });
});

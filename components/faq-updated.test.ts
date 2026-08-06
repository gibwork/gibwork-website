import { updatedFaqItems } from './faq-updated';

describe('Gibwork FAQ Content Update', () => {
  it('should include email/OAuth sign-in answer', () => {
    const noWalletFaq = updatedFaqItems.find(i => i.question.includes('crypto wallet'));
    expect(noWalletFaq).toBeDefined();
    expect(noWalletFaq?.answer).toContain('Google, GitHub, X');
  });

  it('should emphasize on-chain escrow payment', () => {
    const payoutFaq = updatedFaqItems.find(i => i.question.includes('get paid'));
    expect(payoutFaq?.answer).toContain('on-chain escrow');
  });
});

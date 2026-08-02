# Landing page proof loop

## What changed

The landing page now explains the path from a funded work brief to an approved payout:

1. Define the deliverable and acceptance criteria.
2. Submit a public, reviewable proof of the work.
3. Review the result and release the funded reward.

The section is responsive, uses the existing card and motion primitives, and explicitly notes that the workflow can be reviewed from desktop or mobile. The copy also makes the approval condition clear: submitting work alone does not guarantee payment.

## Verification

- `node_modules/next/dist/bin/next build`
- TypeScript and Next.js lint checks completed during the production build.
- Local landing page inspected at `/` after the production build.

import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";

type ExploreAsset = {
  symbol: string;
};

type ExploreUser = {
  username: string;
};

type ExploreListing = {
  asset: ExploreAsset | null;
  deadline: string;
  id: string;
  isOpen: boolean;
  remainingAmount: number;
  tags: string[];
  title: string;
  type: "bounties" | "tasks";
  user: ExploreUser;
};

type ExploreResponse = {
  results: ExploreListing[];
};

type LiveWorkDetail = {
  amount: number;
  category: string;
  closes: string;
  href: string;
  sponsor: string;
  title: string;
  token: string;
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
});

async function getLiveWorkDetails(): Promise<LiveWorkDetail[]> {
  try {
    const response = await fetch("https://app.gib.work/api/explore?page=1", {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as ExploreResponse;
    const now = Date.now();

    return data.results
      .filter(
        (listing) =>
          listing.isOpen &&
          listing.remainingAmount > 0 &&
          listing.asset &&
          new Date(listing.deadline).getTime() > now
      )
      .slice(0, 3)
      .map((listing) => ({
        amount: listing.remainingAmount,
        category: listing.tags[0] ?? "Open opportunity",
        closes: dateFormatter.format(new Date(listing.deadline)),
        href: `https://app.gib.work/${listing.type}/${listing.id}`,
        sponsor: listing.user.username,
        title: listing.title.trim(),
        token: listing.asset!.symbol,
      }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const liveWorkDetails = await getLiveWorkDetails();

  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <LogoList />
      <LookingFor liveWorkDetails={liveWorkDetails} />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}

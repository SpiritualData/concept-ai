export const metadata = {
  title: "Concept AI",
  description: "Reliable AI you can statistically trust",
};

import Intro from "@/components/Intro";
import Features from "@/components/features";
import Benifits from "@/components/Benifits";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Market from "@/components/Market";
import WhyItMatters from "@/components/WhyItMatters";

export default function Home() {
  return (
    <>
      <Intro />
      <Features />
      <WhyItMatters />
      <Zigzag />
      {/*<Benifits />*/}
      {/*<Market />*/}
      <Newsletter />
    </>
  );
}

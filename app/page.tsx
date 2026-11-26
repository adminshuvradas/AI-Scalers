import Blog from "@/components/sections/Blog"
import CtaPrimary from "@/components/sections/CtaPrimary"
import CtaSecondary from "@/components/sections/CtaSecondary"
import Faqs from "@/components/sections/Faqs"
import FeaturesPrimary from "@/components/sections/FeaturesPrimary"
import FeaturesSecondary from "@/components/sections/FeaturesSecondary"
import Hero from "@/components/sections/Hero"
import LogoCloud from "@/components/sections/LogoCloud"
import Newsletter from "@/components/sections/Newsletter"
import Pricing from "@/components/sections/Pricing"
import Services from "@/components/sections/Services"
import Static from "@/components/sections/Static"

import Layout from "@/components/layout/Layout"

export default function Home() {
  return (
    <Layout footerStyle={2}>
      <Hero />
      <LogoCloud />
      <Services />
      <CtaPrimary />
      <Static />
      <FeaturesSecondary />
      <CtaSecondary />
      <FeaturesPrimary />
      <Pricing />
      <Faqs />
      <Blog />
      <Newsletter />
    </Layout>
  )
}

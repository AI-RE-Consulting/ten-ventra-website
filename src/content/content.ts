export const siteConfig = {
  companyName: "AIRE Consulting",
  tagline: "AI-Powered Real Estate Intelligence",
  phone: "(555) 234-5678",
  email: "hello@aireconsulting.com",
  address: "350 Fifth Avenue, Suite 4800, New York, NY 10118",
  scheduleCTA: "Schedule a Consultation",
  copyright: `© ${new Date().getFullYear()} AIRE Consulting. All rights reserved.`,
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const homePage = {
  hero: {
    label: "AI Real Estate Consulting",
    headline: "Smarter decisions for modern real estate",
    subheadline:
      "We combine artificial intelligence with deep industry expertise to help real estate firms analyze markets, automate operations, and close better deals.",
  },
  featurePanel: {
    title: "What We Deliver",
    features: [
      "Predictive market analytics and pricing models",
      "Automated due diligence for acquisitions",
      "Workflow optimization across your portfolio",
      "Custom AI tools built for your team",
    ],
  },
  capabilities: {
    label: "Capabilities",
    headline: "Built for the complexities of real estate",
    description:
      "Our services address the unique challenges of commercial and residential real estate — from market volatility to operational inefficiency.",
    items: [
      {
        title: "Market Analytics & Forecasting",
        description:
          "AI-powered trend analysis, pricing predictions, and demand forecasting that give you a competitive edge in any market cycle.",
      },
      {
        title: "Due Diligence Automation",
        description:
          "Reduce weeks of manual review to days. Our AI reads documents, scores risks, and flags compliance issues automatically.",
      },
      {
        title: "Workflow & Operations AI",
        description:
          "From CRM integrations to automated reporting, we streamline the repetitive work so your team can focus on deals.",
      },
    ],
  },
  platform: {
    label: "Our Approach",
    headline: "Technology that understands your business",
    description:
      "We don't believe in one-size-fits-all solutions. Every engagement starts with understanding your specific portfolio, market, and operational goals — then we build the right AI tools to support them.",
    points: [
      "Deep discovery process before any technical work begins",
      "Models trained on real estate-specific data and benchmarks",
      "Seamless integration with your existing tech stack",
      "Ongoing support and model refinement as markets shift",
    ],
  },
  companyStatement: {
    label: "About AIRE",
    headline: "Where AI expertise meets real estate knowledge",
    description:
      "Founded by technologists and real estate professionals, AIRE Consulting bridges the gap between cutting-edge AI and the practical needs of property firms. We've helped clients across commercial, residential, and mixed-use portfolios make smarter, faster decisions.",
  },
  cta: {
    headline: "Ready to transform your real estate operations?",
    description:
      "Schedule a free consultation to explore how AI can drive better outcomes for your portfolio.",
  },
};

export const servicesPage = {
  hero: {
    label: "Services",
    headline: "AI solutions tailored to real estate",
    subheadline:
      "We offer a focused set of services designed to address the most impactful opportunities for AI in real estate.",
  },
  services: [
    {
      title: "Market Analytics & Forecasting",
      subtitle: "See the market before it moves",
      description:
        "Our AI models analyze millions of data points — transaction histories, demographic shifts, economic indicators, and more — to give you accurate, actionable market intelligence.",
      details: [
        "Pricing prediction models with 90%+ accuracy",
        "Demand forecasting by submarket and property type",
        "Competitive landscape analysis and benchmarking",
        "Custom dashboards for your investment committee",
      ],
    },
    {
      title: "Due Diligence Automation",
      subtitle: "Weeks of review in days",
      description:
        "Our AI-powered document analysis platform reads leases, financials, environmental reports, and legal documents — extracting key data, scoring risks, and flagging issues that matter.",
      details: [
        "Automated lease abstraction and financial modeling",
        "Risk scoring across environmental, legal, and financial dimensions",
        "Compliance checking against local and federal regulations",
        "Integration with your existing deal management workflow",
      ],
    },
    {
      title: "Workflow & Operations AI",
      subtitle: "Automate the work that slows you down",
      description:
        "We identify and automate the repetitive operational tasks that consume your team's time — from tenant communications to portfolio reporting — so you can focus on high-value activities.",
      details: [
        "CRM automation and intelligent lead routing",
        "Automated portfolio performance reporting",
        "Tenant communication workflows and chatbots",
        "Process mapping and optimization consulting",
      ],
    },
  ],
};

export const aboutPage = {
  hero: {
    label: "About Us",
    headline: "The team behind AIRE",
    subheadline:
      "We're a team of AI engineers and real estate professionals who believe technology should make this industry smarter, not more complicated.",
  },
  mission: {
    label: "Our Mission",
    headline: "Making AI practical for real estate",
    description:
      "Too many AI companies build impressive technology that doesn't solve real problems. We take the opposite approach — starting with the business challenge and working backward to the right technical solution. Every tool we build is measured by the outcomes it delivers, not the complexity of the model behind it.",
  },
  story: {
    label: "Our Story",
    headline: "Born from industry frustration",
    description:
      "AIRE was founded when our partners — experienced in both AI research and real estate operations — realized the industry was being underserved by generic tech solutions. Real estate has unique data challenges, regulatory requirements, and operational complexities that demand specialized AI. So we built a firm that speaks both languages fluently.",
  },
  values: {
    label: "Our Values",
    headline: "What guides our work",
    items: [
      {
        title: "Outcomes over outputs",
        description:
          "We measure success by your business results, not by the number of models we deploy.",
      },
      {
        title: "Transparency first",
        description:
          "No black boxes. We explain how our AI works and why it makes the recommendations it does.",
      },
      {
        title: "Industry depth",
        description:
          "We invest in understanding your specific market, portfolio, and competitive landscape.",
      },
      {
        title: "Long-term partnership",
        description:
          "AI isn't a one-time project. We build relationships and refine our tools as your business evolves.",
      },
    ],
  },
};

export const caseStudiesPage = {
  hero: {
    label: "Case Studies",
    headline: "Real results for real estate firms",
    subheadline:
      "See how we've helped clients across commercial, residential, and mixed-use portfolios leverage AI for measurable impact.",
  },
  studies: [
    {
      title: "Predictive Pricing for a Multifamily Portfolio",
      client: "Regional multifamily operator — 12,000 units",
      challenge:
        "Pricing decisions were based on quarterly market surveys and gut instinct, leading to missed revenue opportunities and extended vacancy periods.",
      result:
        "Our AI pricing model increased effective rent by 4.2% across the portfolio while reducing average vacancy duration by 11 days.",
      tags: ["Market Analytics", "Pricing", "Multifamily"],
    },
    {
      title: "Automated Due Diligence for Acquisitions",
      client: "Private equity real estate fund — $2.4B AUM",
      challenge:
        "Each acquisition required 3-4 weeks of manual document review, creating bottlenecks and increasing the risk of missed issues.",
      result:
        "Reduced due diligence timeline to 5 business days with higher accuracy. Flagged a material environmental risk that manual review had missed on a $180M deal.",
      tags: ["Due Diligence", "Automation", "Commercial"],
    },
    {
      title: "Operations Automation for Property Management",
      client: "National property management firm — 45,000 units",
      challenge:
        "Tenant communications, maintenance scheduling, and reporting consumed 60% of on-site staff time, driving high turnover and inconsistent service.",
      result:
        "Automated 40% of routine communications and 70% of reporting tasks. Staff turnover decreased by 22% and tenant satisfaction scores improved by 18 points.",
      tags: ["Operations", "Automation", "Property Management"],
    },
    {
      title: "Market Entry Analysis for Mixed-Use Development",
      client: "National developer — mixed-use and retail",
      challenge:
        "Evaluating new markets required months of research and external consultants, delaying investment decisions and increasing opportunity cost.",
      result:
        "Built a custom market scoring model that evaluates 200+ variables per submarket. Reduced market analysis time from 3 months to 2 weeks.",
      tags: ["Market Analytics", "Development", "Mixed-Use"],
    },
  ],
};

export const contactPage = {
  hero: {
    label: "Contact",
    headline: "Let's start a conversation",
    subheadline:
      "Whether you're exploring AI for the first time or looking to expand existing capabilities, we'd love to hear about your goals.",
  },
  form: {
    heading: "Send us a message",
    fields: ["Full Name", "Email Address", "Company", "Message"],
    submitLabel: "Send Message",
    note: "We typically respond within one business day.",
  },
  info: {
    heading: "Get in touch",
    description:
      "Prefer to reach out directly? Contact us using the information below.",
  },
};

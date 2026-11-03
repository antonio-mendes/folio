export const profile = {
  name: "António Mendes",
  title: "Senior Data Scientist",
  location: "Lisbon, Portugal",
  email: "soeiromendes.antonio@gmail.com",
  // Used for the page description and link previews.
  tagline: "Data scientist working on crypto products.",
  intro: [
    "Hi, I'm António. I'm a data scientist working on crypto products.",
    "Now at Phantom. Before that, Dune and Adjust.",
  ],
  // Shown after the email link under the intro.
  links: [
    { label: "GitHub", href: "https://github.com/antonio-mendes" },
    { label: "X", href: "https://x.com/antonio_smendes" },
  ],
  experience: [
    {
      company: "Phantom",
      url: "https://phantom.com",
      role: "Senior Data Scientist",
      period: "2024 – now",
      summary:
        "Product analytics for onboarding, multichain expansion, Social and stablecoins, and the dbt models behind company-wide dashboards.",
    },
    {
      company: "Dune",
      url: "https://dune.com",
      role: "Senior Data Scientist",
      period: "2022 – 2024",
      summary:
        "Shipped DuneAI Text-to-SQL and maintained Spellbook, Dune's open-source dbt project, through the DuneSQL migration.",
    },
    {
      company: "Adjust",
      url: "https://www.adjust.com",
      role: "Fraud Data Science Team Lead",
      period: "2020 – 2021",
      summary:
        "Led the fraud data science team. Our models prevented hundreds of millions in fraudulent spend.",
    },
    {
      company: "BNP Paribas Personal Finance",
      role: "Junior Data Scientist",
      period: "2016 – 2017",
      summary: "Pricing analysis, dashboards and A/B tests for consumer credit.",
    },
  ],
  education: [
    {
      school: "Universidade Nova de Lisboa",
      detail: "Bachelor's Degree, Information Management",
      period: "2010 – 2015",
      location: "Lisbon, Portugal",
    },
    {
      school: "University of Ljubljana",
      detail: "Economics · Erasmus exchange",
      period: "2015",
      location: "Ljubljana, Slovenia",
    },
    {
      school: "Instituto Superior Técnico",
      detail: "Master's coursework, Applied Mathematics",
      period: "2015",
      location: "Lisbon, Portugal",
    },
  ],
  skills: [
    "SQL",
    "Python",
    "dbt",
    "onchain data",
    "statistical modeling",
    "machine learning",
    "data visualization",
  ],
  certifications: ["Lisbon Machine Learning School (Google)"],
  talks: [
    {
      title: "Decoding of EVM Smart Contracts 101",
      place: "Kyiv",
      when: "Dec 2022",
      context: "Ethereum Ukraine",
    },
    {
      title: "Smart contract decoding",
      place: "Lisbon",
      when: "Nov 2022",
      context: "Dune meetup",
    },
    {
      title: "Data & Analytics — Uma carreira e um caminho",
      place: "Webinar",
      when: "Jan 2021",
      context: "Conta Connosco",
    },
    {
      title: "Mobile attribution fraud education",
      place: "Tokyo and São Paulo",
      when: "2020–2021",
      context: "Adjust",
    },
  ],
  // Not talks, but worth listing next to them.
  events: [
    { role: "Judge", title: "Solana x402 Hackathon", when: "2025" },
    { role: "Host", title: "DuneCon", when: "2023" },
  ],
} as const;

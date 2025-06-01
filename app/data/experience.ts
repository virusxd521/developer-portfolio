export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Alteryx",
    duration: "July 2024 - Present",
    tech: ["React 18", "TypeScript", "Vite", "GraphQL", "Webpack", "Storybook", "Cypress", "Playwright"],
    achievements: [
      "Built the flagship Analytics Cloud console with React 18 + TypeScript + Vite, delivering ~20 reusable, theme-able components that serve 10K+ analysts and pushed customer NPS up +12 pts",
      "Migrated a monolithic SPA to a micro-frontend architecture (Webpack Module Federation), shrinking the initial bundle 42% and enabling fully independent weekly releases by each squad",
      "Squeezed Core Web Vitals—code-splitting, prefetching, and GraphQL query batching dropped LCP from 3.2s to 1.7s and raised Lighthouse scores to 95+",
      "Drove accessibility & design-system adoption: integrated Storybook with axe-core tests, reached WCAG 2.1 AA compliance across 100% of new UI and boosted design-to-dev turnaround by 30%",
      "Rolled out CI/CD for the front-end (GitHub Actions + Cypress + Playwright visual diffing); regression escape rate fell -30% and mean time-to-restore during hotfixes hit < 15 min",
      "Partnered with UX and Data Science to launch a drag-and-drop low-code workflow builder—now processing 120M+ rows/day and credited with 40% feature-adoption in its first quarter",
      `Mentored two junior engineers on React patterns, testing, and TypeScript strict-mode; their "time-to-first-production PR" dropped from 3 months to 6 weeks`
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Cruxo",
    duration: "January 2023 - July 2024",
    tech: ["React 18", "TypeScript", "Vite", "NestJS", "Prisma", "Docker", "Kubernetes", "Azure", "GraphQL"],
    achievements: [
      "Built snappy, accessible UIs with React 18, Vite, TypeScript 4.9 and Radix UI; kept Core Web Vitals green and cut first-contentful paint by 32%",
      "Authored NestJS + Prisma micro-services (REST & GraphQL) on Azure Kubernetes Service; added Zod schema validation and dataloader caching, reducing p95 response time from 240ms to 95ms",
      "Dockerized everything, wrote Helm charts and GitHub Actions pipelines, and rolled out ArgoCD blue-green deploys; achieved lead time to prod < 1h and change-failure rate < 2%",
      "Packaged data-science models as gRPC endpoints; improved fruit-ripeness model classification by +15pp accuracy, saving clients ~€250k per season in waste",
      "Co-founded internal React Storybook / Nx monorepo initiative with shared components and configs, cutting new-project scaffold time by 30%",
      "Set up Vitest, React Testing Library & Cypress; increased team coverage to 85%, catching two critical edge-cases pre-release every sprint",
      "Ran monthly lightning talks, mentored two juniors, and drove cross-team architecture reviews",
      "Helped Cruxo grow from 30 to 80 employees, doubled active user base across core products, and maintained 99.96%+ uptime while the platform scaled 5×"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Deloitte",
    duration: "September 2022 - January 2023",
    tech: [".NET 8", "C# 12", "React 18", "Next.js", "Node.js", "TypeScript", "GraphQL", "Azure Cloud", "Kubernetes"],
    achievements: [
      "Drove end-to-end delivery of high-visibility products with automated CI/CD on Azure Cloud using GitHub Actions, GitOps, and Terraform",
      "Modernized tech stack by migrating legacy .NET Core to .NET 8 microservices and implementing React 18 + Next.js micro-frontends",
      "Designed fault-tolerant cloud-native architectures using Azure Functions and Cosmos DB, reducing infrastructure costs by 25% while improving latency by 40%",
      "Embedded OpenAI on Azure for smart search and chat support; productionized ML inference pipelines that boosted user self-service adoption by 3×",
      "Championed DevSecOps practices with SBOMs and shift-left security scans, achieving zero critical CVEs and passing internal FedRAMP-equivalent audit",
      "Implemented observability with OpenTelemetry, reducing mean-time-to-detect from hours to under 10 minutes",
      "Led agile product development with dual-track Scrum/Kanban, prioritizing outcomes and validating hypotheses via A/B experiments",
      "Mentored a squad of 6 engineers on TDD, Clean Architecture, and Pair/Mob programming; organized monthly tech talks"
    ]
  },
  {
    role: "Front End Developer",
    company: "FlightScanner",
    duration: "May 2021 - September 2022",
    tech: ["React", "Next.js", "TypeScript", "GraphQL/Apollo", "CSS-in-JS (Emotion)", "Jest", "Cypress", "Storybook"],
    achievements: [
      "Shipped traveller-facing features every sprint using React 17, Next.js 12 and TypeScript, with Storybook-driven UI components and design-token system",
      "Slashed page-load time by 32% through lazy-hydrating React islands, optimizing images with next/image, and fixing Core Web Vitals regressions",
      "Built GraphQL queries & mutations with Apollo Client and code-gen, cutting REST over-fetching and trimming mobile payloads by ~40 KB",
      "Enhanced accessibility with axe audits, semantic HTML/ARIA, and Cypress + Percy visual tests, helping the app reach WCAG 2.1 AA compliance",
      "Automated deployment pipeline via GitHub Actions, Vercel previews and Canary releases; achieved 5 deploys/day with < 1% rollback rate",
      "Collaborated cross-functionally with designers, PMs and data specialists; used Mixpanel experiments to prove +7 ppt uplift in search-to-booking conversion",
      "Championed developer DX by introducing ESLint + Prettier monorepo configs, type-safe React Hooks, and a component playground that cut PR review time by ~20%"
    ]
  }
];
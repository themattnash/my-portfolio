import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Director, Digital Product",
      company: "MANSCAPED",
      period: "Jun. 2023 - Feb. 2025",
      location: "Remote",
      description: "Led digital product transformation at unicorn-status DTC brand redefining men's grooming through digital innovation and global scale.",
      achievements: [
        "Led cross-functional team of 25+ to deliver full-scale Shopify Plus transformation, maintaining platform stability through peak BFCM traffic",
        "Spearheaded development of modern CMS, DAM, payment infrastructure, and design system, increasing platform reliability by 30%",
        "Managed $1.5M in vendor partnerships and led technical documentation from discovery to delivery",
        "Accelerated time-to-market and reduced engineering rework through clearer integration handoffs"
      ],
      skills: ["Shopify Plus", "CMS/DAM Systems", "Payment Infrastructure", "Vendor Management"]
    },
    {
      title: "Senior Product Manager - Arc XP",
      company: "The Washington Post",
      period: "Oct. 2021 - Jun. 2023",
      location: "Washington, DC",
      description: "Led product strategy for Jeff Bezos-backed DXP and Content OS powering the next generation of global media companies.",
      achievements: [
        "Led Arc XP's entry into new verticals (e-commerce, consumer brands, enterprise) with vertical-specific demos",
        "Aligned OKRs with ideal customer profiles, increasing qualified leads by 17% and driving 3% YoY customer acquisition lift",
        "Deployed AI/ML-powered recommendation and personalization models across Arc XP's global publisher network",
        "Boosted user engagement and session depth for leading media brands through data-driven personalization"
      ],
      skills: ["AI/ML Personalization", "Publisher Platforms", "OKR Alignment", "Vertical Strategy"]
    },
    {
      title: "Product Manager, Digital Retailing",
      company: "Trader Interactive",
      period: "Jan. 2020 - Sep. 2021",
      location: "Norfolk, VA",
      description: "Product leadership at marketplace leader in powersports, RVs, and commercial equipment with 13.5M+ unique monthly visitors.",
      achievements: [
        "Launched powersports industry's first end-to-end eCommerce checkout with digital purchase agreements",
        "Implemented trade-in valuation, financing, direct payments, and 50-state DMV titling",
        "Unlocked $150M+ in annual revenue for dealers and OEMs through innovative checkout solutions",
        "Delivered trade-in and bid-based offer tools, increasing monetization by $100K/month"
      ],
      skills: ["eCommerce Innovation", "Marketplace Solutions", "Fintech Integration", "Regulatory Compliance"]
    },
    {
      title: "Director of Product Management & Technology",
      company: "Athletic Greens",
      period: "Apr. 2019 - Oct. 2019",
      location: "New York, NY",
      description: "Led product and technology strategy for leading nutrition and wellness DTC brand.",
      achievements: [
        "Directed product strategy for subscription-based nutrition platform",
        "Optimized customer acquisition and retention through data-driven product decisions",
        "Led cross-functional teams in rapid product iteration and testing",
        "Implemented growth-focused product development processes"
      ],
      skills: ["Subscription Products", "DTC Strategy", "Growth Optimization", "Team Leadership"]
    },
    {
      title: "Senior eCommerce Product Manager",
      company: "Leesa Sleep",
      period: "Dec. 2017 - Mar. 2019",
      location: "Virginia Beach, VA",
      description: "Product management for innovative DTC mattress and sleep technology company.",
      achievements: [
        "Led eCommerce platform optimization and user experience improvements",
        "Implemented A/B testing frameworks for conversion optimization",
        "Managed product roadmap for multi-million dollar revenue platform",
        "Collaborated with design and engineering on customer journey optimization"
      ],
      skills: ["eCommerce Optimization", "A/B Testing", "UX Strategy", "Conversion Optimization"]
    }
  ];

  return (
    <section id="experience" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of delivering successful products that drive business growth and enhance user experiences.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-elegant transition-smooth hover:shadow-primary hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg">
                      <span className="font-semibold text-primary">{exp.company}</span>
                      <span className="hidden sm:inline text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary bg-primary-light w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Core Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
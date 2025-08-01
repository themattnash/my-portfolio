import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      number: "15+",
      label: "Years Experience",
      description: "Product Leadership"
    },
    {
      number: "$150M+",
      label: "Revenue Unlocked",
      description: "Through Product Innovation"
    },
    {
      number: "30%",
      label: "Platform Reliability",
      description: "Improvement Achieved"
    },
    {
      number: "25+",
      label: "Team Members",
      description: "Cross-Functional Leadership"
    }
  ];

  return (
    <section id="about" className="section-spacing gradient-subtle">
      <div className="container-custom">
        {/*<div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Matt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Product leader with 15+ years of experience building impactful, scalable solutions in e-commerce, marketplaces, and SaaS. Passionate about using emerging tech and data to solve complex problems.
          </p>
        </div>*/}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Technical Product Leadership
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I thrive on turning ideas into products that users love, combining technical know-how with a customer-first mindset. 
              My experience spans e-commerce platforms, content management systems, and marketplace solutions that scale to millions of users.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From leading cross-functional teams of 25+ to managing $1.5M in vendor partnerships, I focus on delivering scalable 
              solutions that drive real business impact. Whether it's launching industry-first eCommerce checkouts or deploying 
              AI/ML-powered personalization, I excel at working across teams to drive growth and make a real difference.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center shadow-elegant transition-smooth hover:shadow-primary hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elegant">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Core Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-3">User-Centric</h4>
              <p className="text-muted-foreground">
                Every decision starts with understanding user needs and behaviors through research and data analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-3">Data-Driven</h4>
              <p className="text-muted-foreground">
                Leveraging analytics and metrics to validate hypotheses and measure product success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-success rounded-full"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-3">Collaborative</h4>
              <p className="text-muted-foreground">
                Building consensus across teams to align on product vision and execution strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqItems = [
    {
      question: "Why choose TaskMate instead of hiring a COO?",
      answer:
        "TaskMate offers several advantages over hiring a traditional COO. First, our AI-driven solution provides 24/7 availability, ensuring your operations run smoothly around the clock. Second, TaskMate is significantly more cost-effective, with no need for a high executive salary, benefits, or office space. Third, our system is infinitely scalable and can adapt to your business needs instantly, something a human COO cannot do. Lastly, TaskMate brings cutting-edge AI and automation technologies to your business, keeping you at the forefront of operational efficiency.",
    },
    {
      question: "How cost-effective is TaskMate compared to traditional solutions?",
      answer:
        "TaskMate can save businesses up to 70% compared to traditional operational costs. This significant saving comes from several factors: 1) Elimination of salaries and benefits associated with multiple full-time employees, 2) Reduction in human error and inefficiencies, 3) 24/7 operation without overtime costs, 4) Scalability without proportional cost increases, and 5) Reduction in overhead costs like office space and equipment. Moreover, TaskMate's AI-driven processes continually optimize themselves, leading to ongoing efficiency improvements and cost savings over time.",
    },
    {
      question: "How does the payment structure work?",
      answer:
        "TaskMate offers flexible subscription plans tailored to your business size and needs. We have three main tiers: Starter, Professional, and Enterprise. Each tier comes with monthly and annual billing options, with annual subscriptions offering a 20% discount. The Starter plan is perfect for small businesses and includes basic automation features. The Professional plan adds advanced AI capabilities and is suitable for medium-sized businesses. The Enterprise plan offers full customization and integration options for large corporations. All plans can be upgraded, downgraded, or canceled at any time, ensuring you have the flexibility to adjust as your business evolves.",
    },
    {
      question: "What does 'unlimited' mean in your service offerings?",
      answer:
        "'Unlimited' in our service offerings means that within your chosen subscription plan, you can submit as many requests or tasks as you need without incurring additional per-task charges. This allows businesses to scale their operations without worrying about unexpected costs. However, we do have fair usage policies in place to ensure quality service for all clients. These policies are designed to prevent abuse of the system and ensure that all customers receive optimal performance. If your usage consistently exceeds our fair use limits, our team will work with you to find a more suitable plan or custom solution that meets your high-volume needs.",
    },
    {
      question: "Can TaskMate integrate with my existing tools and software?",
      answer:
        "Yes, TaskMate is designed with integration in mind and can seamlessly connect with a wide range of popular business tools and software. We support out-of-the-box integrations with major CRM systems (like Salesforce, HubSpot), project management tools (such as Asana, Trello, Jira), communication platforms (like Slack, Microsoft Teams), and many more. For more specialized or proprietary systems, our team of experts can develop custom integrations to ensure TaskMate fits perfectly into your existing tech stack. We use industry-standard APIs and webhooks to ensure smooth data flow between systems, allowing TaskMate to enhance and automate your existing workflows rather than disrupt them.",
    },
    {
      question: "How secure is my business data with TaskMate?",
      answer:
        "At TaskMate, we prioritize the security and privacy of your business data above all else. We employ multiple layers of security measures: 1) All data is encrypted both in transit and at rest using industry-standard AES-256 encryption. 2) We use secure, ISO 27001 certified data centers with 24/7 physical security. 3) Regular penetration testing and security audits are conducted by third-party cybersecurity firms. 4) We are fully compliant with GDPR, CCPA, and other relevant data protection regulations. 5) We implement strict access controls and authentication measures, including two-factor authentication for all user accounts. 6) Our system undergoes continuous monitoring for any suspicious activities or potential breaches. In the unlikely event of a security incident, we have a comprehensive incident response plan in place to mitigate risks and notify affected parties promptly.",
    },
    {
      question: "What kind of support does TaskMate offer?",
      answer:
        "TaskMate provides comprehensive, multi-tiered support to ensure you get the most out of our platform: 1) 24/7 Customer Support: Our team is available round-the-clock via chat, email, and phone to address any immediate concerns or questions. 2) Dedicated Account Manager: For our Professional and Enterprise clients, a dedicated account manager is assigned to oversee your account and provide personalized assistance. 3) Onboarding Support: When you sign up, our onboarding team guides you through the setup process, ensuring smooth integration with your existing systems. 4) Regular Check-ins: We conduct scheduled check-ins to review your usage, address any issues, and suggest optimizations. 5) Training Sessions: We offer both group and one-on-one training sessions to help your team maximize TaskMate's capabilities. 6) Knowledge Base: A comprehensive, regularly updated knowledge base is available with tutorials, FAQs, and best practices. 7) Community Forum: Connect with other TaskMate users to share experiences and tips. Our support isn't just reactive; we proactively work with you to ensure TaskMate is continually adding value to your business operations.",
    },
    {
      question: "Can I try TaskMate before committing to a subscription?",
      answer:
        "We offer a comprehensive 14-day free trial that gives you full access to all features of our Professional plan. This trial allows you to experience firsthand how TaskMate can transform your business operations. During the trial period, you'll be able to: 1) Set up and customize TaskMate for your specific needs. 2) Integrate it with your existing tools and workflows. 3) Test all automation and AI capabilities. 4) Receive personalized onboarding and support from our team. 5) Access all training materials and resources. At the end of the trial, if you decide TaskMate is right for you, you can easily transition to a paid plan of your choice. If you need more time to evaluate, our team can discuss extending your trial on a case-by-case basis. There's no obligation to continue after the trial, and no credit card is required to start. We're confident that once you see TaskMate in action, you'll understand why it's the future of business operations.",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">
          FAQ ❓ 
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-xl hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => (
              <AccordionItem
                key={index + Math.ceil(faqItems.length / 2)}
                value={`item-${index + Math.ceil(faqItems.length / 2)}`}
              >
                <AccordionTrigger className="text-left text-xl hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}


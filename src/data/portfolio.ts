import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Pavan T Y",
    "title": "Business Analyst",
    "email": "pavantyn@gmail.com",
    "phone": "+1 (857) 506-1187",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "location": "Boston, MA",
    "summary": "Business Analyst with over 2 years of experience in bridging business operations and technical systems, excelling in creating actionable dashboards and workflow optimizations using SQL, Power BI, and APIs. Proven track record in Agile environments, delivering insights that drive data-driven decisions."
  },
  "experience": [
    {
      "title": "Business Intelligence Analyst Intern",
      "company": "Liebherr",
      "dates": "July 2025 - Dec 2025",
      "description": "Developed and automated Power BI dashboards, analyzed shipment performance, and built ETL workflows for better data insights and efficiency.",
      "highlights": [
        "Enhanced visibility for 2,000+ items worth over $30M.",
        "Increased data accuracy and shipment traceability to 96%.",
        "Boosted reporting efficiency by 90% through automated data workflows.",
        "Reduced material retrieval time by 30%."
      ]
    },
    {
      "title": "Project Engineer",
      "company": "Capgemini",
      "dates": "Feb 2022 - Jan 2024",
      "description": "Redesigned modular components for banking platforms and developed responsive UIs, improving processes and ensuring efficient Agile practices.",
      "highlights": [
        "Reduced reported bugs by 85% with new UI implementations.",
        "Achieved a 95% on-time release rate.",
        "Enhanced transparency with stakeholder reports and dashboards."
      ]
    }
  ],
  "education": [
    {
      "degree": "Master of Science in Engineering Management",
      "institution": "Northeastern University",
      "years": "Expected Apr 2026",
      "gpa": "3.86/4"
    },
    {
      "degree": "Bachelor of Technology in Computer Science and Engineering",
      "institution": "Presidency University",
      "years": "Aug 2018 - Sep 2022",
      "gpa": "3.67/4"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Public Health Risk Trends: A Power BI Data Visualization Project",
      "description": "Developed a comprehensive health analytics dashboard using Power BI, DAX, and Excel.",
      "technologies": [
        "Power BI",
        "DAX",
        "Excel"
      ],
      "link": "View Dashboard",
      "github": ""
    },
    {
      "name": "DoseGuide: Medication Tracking & Pharmacy Integration Platform",
      "description": "Led team efforts to shape a user-centric product vision and designed MVP roadmap.",
      "technologies": [
        "Stakeholders Interviews",
        "User Personas",
        "Wireframes"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "PerQ with Zelle: Financial Transactions & Rewards Integration Project",
      "description": "Designed a financial platform to integrate transactions, payments, and rewards, enhancing user engagement.",
      "technologies": [
        "Gantt Charts",
        "RACI Matrices",
        "WBS"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "simple",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "modern",
  "colorPalette": "slate"
};

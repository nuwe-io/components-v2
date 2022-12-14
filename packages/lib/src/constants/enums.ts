export const categories = [
  'Backend',
  'Frontend',
  'Mobile',
  'Desktop',
  'Data Science',
  'UX/UI',
  'Cybersecurity',
  'Fullstack',
  'Algorithmic'
]

export const levels = [
  {
    id: 'TRAINEE',
    name: 'Trainee',
    nuwe: 'Explorer'
  },
  {
    id: 'JUNIOR',
    name: 'Junior',
    nuwe: 'Creator'
  },
  {
    id: 'MIDDLE',
    name: 'Middle',
    nuwe: 'Artisan'
  },
  {
    id: 'SENIOR',
    name: 'Senior',
    nuwe: 'Master'
  },
  {
    id: 'LEAD',
    name: 'Lead',
    nuwe: 'Hero'
  },
  {
    id: 'EXECUTIVE',
    name: 'Executive',
    nuwe: 'Guru'
  }
]

export const companyAuth = [
  {
    id: 'admin',
    name: 'Admin',
    description:
      'Can edit, add and delete jobs, event, users and company information. Have also all the other memeber roles.'
  },
  {
    id: 'mentor',
    name: 'Mentor',
    description:
      'Can participate in events add, delete challenges, view & recommend challenge and event particpants and make comments about their skills.'
  },
  { id: 'member', name: 'Manager', description: 'Has view permissions on all the information.' },
  {
    id: 'employee',
    name: 'Employee',
    description:
      "Can't view any information nor log in. It is only linked to the company to participate in private events and challenges."
  },
  {
    id: 'none',
    name: 'User',
    description:
      '0 permissions. They have no link to the company. Apply this role to unlink the user from the company.'
  }
]

export const getCompanyAuthElement = (value: string) =>
  companyAuth.find((item) => item.name === value || item.id === value)?.id

export const roles = [
  {
    id: 'marketing',
    roles: [
      'Marketing Specialist',
      'Marketing Manager',
      'Marketing Director',
      'Graphic Designer',
      'Marketing Research Analyst',
      'Marketing Communications Manager',
      'Marketing Consultant',
      'Product Manager',
      'Public Relations',
      'Social Media Assistant',
      'Brand Manager',
      'SEO Manager',
      'SEO Consultant',
      'Content Marketing Manager',
      'Copywriter',
      'Media Buyer',
      'Digital Marketing Manager',
      'eCommerce Marketing Specialist',
      'Brand Strategist',
      'Vice President of Marketing',
      'Media Relations Coordinator'
    ]
  },
  {
    id: 'business',
    roles: [
      'Administrative Assistant',
      'Receptionist',
      'Office Manager',
      'Auditing Clerk',
      'Bookkeeper',
      'Account Executive',
      'Branch Manager',
      'Business Manager',
      'Quality Control Coordinator',
      'Administrative Manager',
      'Chief Executive Officer',
      'Business Analyst',
      'Risk Manager',
      'Human Resources',
      'Secretary',
      'Office Clerk',
      'File Clerk',
      'Account Collector',
      'Administrative Specialist',
      'Executive Assistant',
      'Program Administrator',
      'Program Manager',
      'Administrative Analyst',
      'Data Entry'
    ]
  },
  {
    id: 'executive',
    roles: [
      'CEO—Chief Executive Officer',
      'COO—Chief Operating Officer',
      'CFO—Chief Financial Officer',
      'CIO—Chief Information Officer',
      'CTO—Chief Technology Officer',
      'CMO—Chief Marketing Officer',
      'CHRO—Chief Human Resources Officer',
      'CDO—Chief Data Officer',
      'CPO—Chief Product Officer',
      'CCO—Chief Customer Officer'
    ]
  },
  {
    id: 'technology',
    roles: [
      'Software Engineer',
      'DevOps Engineer',
      'Network Administrator',
      'Information Security Analyst',
      'Artificial Intelligence Engineer',
      'Cloud Architect',
      'IT Manager',
      'Technical Specialist',
      'Application Developer',
      'Front-End Developer',
      'Back-End Developer',
      'Database Administrator',
      'System Administrator',
      'System Analyst',
      'System Engineer',
      'Data Engineer',
      'Data Scientist',
      'Data Analyst',
      'Data Architect',
      'Data Warehouse Engineer',
      'MLOps Engineer',
      'Machine Learning Engineer',
      'DevSecOps Engineer',
      'Cloud Engineer',
      'Cloud Architect',
      'Cloud Developer',
      'Mobile Developer',
      'Game Developer',
      'QA Engineer',
      'Scrum Master',
      'Test Engineer',
      'Information Security Engineer',
      'Information Security Specialist',
      'Information Security Analyst',
      'Information Security Manager',
      'Information Security Director',
      'Cyber Security Engineer',
      'Cyber Security Specialist',
      'Computer Forensics Investigator',
      'Computer Vision Engineer',
      'Data Modeler',
      'Information Architect',
      'Network Engineer',
      'Network Architect',
      'Network Security Engineer',
      'Network Reliability Engineer',
      'Lead Developer',
      'Full Stack Developer'
    ]
  },
  {
    id: 'leadership',
    roles: [
      'Team Leader',
      'Manager',
      'Assistant Manager',
      'Executive',
      'Director',
      'Coordinator',
      'Administrator',
      'Controller',
      'Officer',
      'Organizer',
      'Supervisor',
      'Superintendent',
      'Head',
      'Overseer',
      'Chief',
      'Foreman',
      'Controller',
      'Principal',
      'President',
      'Lead'
    ]
  },
  {
    id: 'sales',
    roles: [
      'Sales Associate',
      'Sales Representative',
      'Sales Manager',
      'Retail Worker',
      'Store Manager',
      'Sales Representative',
      'Sales Manager',
      'Real Estate Broker',
      'Sales Associate',
      'Cashier',
      'Account Executive',
      'Account Manager',
      'Area Sales Manager',
      'Direct Salesperson',
      'Director of Inside Sales',
      'Outside Sales Manager',
      'Sales Analyst',
      'Market Development Manager',
      'B2B Sales Specialist',
      'Sales Engineer',
      'Merchandising Associat',
      'Phone Sales Specialist',
      'IT Sales Executive',
      'IT Sales Director'
    ]
  },
  {
    id: 'customer',
    roles: [
      'Virtual Assistant',
      'Customer Service',
      'Customer Support',
      'Concierge',
      'Help Desk',
      'Customer Service Manager',
      'Technical Support Specialist',
      'Account Representative',
      'Client Service Specialist',
      'Customer Care Associate',
      'Call Center Representative',
      'Telemarketer',
      'Telephone Operator',
      'Phone Survey Conductor',
      'Dispatcher for Trucks or Taxis',
      'Customer Support Representative',
      'Over the Phone Interpreter'
    ]
  },
  {
    id: 'operations',
    roles: [
      'Operations Manager',
      'Operations Assistant',
      'Operations Coordinator',
      'Operations Analyst',
      'Operations Director',
      'Vice President of Operations',
      'Operations Professional',
      'Continuous Improvement Lead',
      'Continuous Improvement Consultant'
    ]
  },
  {
    id: 'finance',
    roles: [
      'Credit Authorizer',
      'Benefits Manager',
      'Credit Counselor',
      'Accountant',
      'Bookkeeper',
      'Accounting Analyst',
      'Accounting Director',
      'Accounts Payable/Receivable Clerk',
      'Auditor',
      'Budget Analyst',
      'Controller',
      'Financial Analyst',
      'Finance Manager',
      'Economist',
      'Payroll Manager',
      'Payroll Clerk',
      'Financial Planner',
      'Financial Services Representative',
      'Finance Director',
      'Commercial Loan Officer'
    ]
  },
  {
    id: 'engineering',
    roles: [
      'Mechanical Engineer',
      'Civil Engineer',
      'Electrical Engineer',
      'Assistant Engineer',
      'Chemical Engineer',
      'Chief Engineer',
      'Drafter',
      'Engineering Technician',
      'Geological Engineer',
      'Biological Engineer',
      'Maintenance Engineer',
      'Mining Engineer',
      'Nuclear Engineer',
      'Petroleum Engineer',
      'Plant Engineer',
      'Production Engineer',
      'Quality Engineer',
      'Safety Engineer'
    ]
  },
  {
    id: 'product',
    roles: [
      'Product Designer',
      'Product Manager',
      'Product Owner',
      'Product Specialist',
      'Graphic Designer',
      'Artist',
      'Interior Designer',
      'Video Editor',
      'Video or Film Producer',
      'Playwright',
      'Musician',
      'Novelist/Writer',
      'Computer Animator',
      'Photographer',
      'Camera Operator',
      'Sound Engineer',
      'Motion Picture Director',
      'Actor',
      'Music Producer',
      'Director of Photography',
      '2D Animator',
      '3D Animator',
      'Game designer',
      'Game animator',
      'UX Designer',
      'UX Researcher',
      'UX/UI Researcher',
      'UI Designer',
      'UX/UI Designer'
    ]
  },
  {
    id: 'health',
    roles: [
      'Nurse',
      'Doctor',
      'Dentist',
      'Optometrist',
      'Optician',
      'Pharmacist',
      'Pharmacy Technician',
      'Pharmacy Assistant',
      'Pharmacy Manager',
      'Pharmacy Director',
      'Medical Assistant',
      'Medical Technician',
      'Medical Director',
      'Oncologist',
      'Pathologist',
      'Podiatrist'
    ]
  },
  {
    id: 'hospitality',
    roles: [
      'Housekeeper',
      'Flight Attendant',
      'Travel Agent',
      'Hotel Front Door Greeter',
      'Bellhop',
      'Cruise Director',
      'Entertainment Specialist',
      'Hotel Manager',
      'Front Desk Associate',
      'Front Desk Manager',
      'Concierge',
      'Group Sales',
      'Event Planner',
      'Porter',
      'Spa Manager',
      'Wedding Coordinator',
      'Cruise Ship Attendant',
      'Casino Host',
      'Hotel Receptionist',
      'Reservationist',
      'Events Manager',
      'Meeting Planner',
      'Lodging Manager',
      'Director of Maintenance',
      'Valet'
    ]
  },
  {
    id: 'science',
    roles: [
      'Astronomer',
      'Astrophysicist',
      'Chemist',
      'Biologist',
      'Physicist',
      'Molecular Physicist',
      'Mathematician',
      'Chemical Engineer'
    ]
  },
  {
    id: 'communication',
    roles: [
      'Journalist',
      'Copy Editor',
      'Editor/Proofreader',
      'Content Creator',
      'Speechwriter',
      'Communications Director',
      'Screenwriter',
      'Technical Writer',
      'Columnist',
      'Public Relations Specialist',
      'Proposal Writer',
      'Content Strategist',
      'Grant Writer',
      'Video Game Writer',
      'Translator',
      'Film Critic',
      'Travel Writer',
      'Social Media Specialist',
      'Ghostwriter'
    ]
  },
  {
    id: 'hr',
    roles: [
      'IT Recruiter',
      'HR Generalist',
      'Human Resources Manager',
      'People Manager',
      'People Director',
      'Talent development',
      'HR Manager',
      'HR Assistant',
      'HR Coordinator',
      'HR Director',
      'HR Executive',
      'People Partner',
      'Office Assistant'
    ]
  }
]

const softwareProfessionals = [
  'Front-end',
  'Back-end',
  'Mobile',
  'Full-stack',
  'Quality Assurance',
  'Team Leader',
  'Cybersecurity',
  'Software Architect'
]

const dataProfessionals = [
  'Data analyst',
  'Data engineer',
  'Data scientist',
  'Data architect',
  'Machine learning engineer',
  'Deep learning engineer',
  'MLOps'
]

const infrastructureProfessionals = [
  'Infrastructure Engineer',
  'Cloud Architect',
  'DevOps Engineer',
  'DevOps Manager',
  'DevOps Architect'
]

const deisgnProfessionals = [
  'UX Designer',
  'UI Designer',
  'Product Designer',
  'UX & UI Designer',
  'Visual Designer',
  'Graphic Designer',
  'Web Designer',
  'Product Designer'
]

const businessProfessionals = ['Business Analyst', 'Business Development', 'Finance analyst']

const professionalTypes = ['Software', 'Data', 'Infrastructure', 'Design', 'Business']

const allProfessionals = [
  ...softwareProfessionals,
  ...dataProfessionals,
  ...infrastructureProfessionals,
  ...deisgnProfessionals,
  ...businessProfessionals
]

const seniorityLevels = ['Trainee', 'Junior', 'Mid-senior', 'Senior']
const difficultyLevels = ['Very easy', 'Easy', 'Medium', 'Hard']
const challengeLevels = ['Explorer', 'Creator', 'Artisan', 'Master']

const divisions = seniorityLevels.map((level, index) => {
  return {
    title: [level, challengeLevels[index]],
    difficulty: difficultyLevels[index]
  }
})

const challengeTypes = ['Individual', 'Team']

const evaluationPoints = {
  readme: 0.7,
  documentation: 0.3,
  codeQualityDivider: 0.25,
  trainee: { total: 600, codeQuality: 100, documentation: 50, objectives: 450 },
  junior: {
    total: 1200,
    codeQuality: 200,
    documentation: 100,
    objectives: 900
  },
  midsenior: {
    total: 2000,
    codeQuality: 300,
    documentation: 200,
    objectives: 1500
  },
  senior: {
    total: 3000,
    codeQuality: 400,
    documentation: 250,
    objectives: 2350
  }
}

const scoringTypes = [
  {
    name: 'Software'
  },
  {
    name: 'Data',
    evaluation: {
      codeQuality: 0.25,
      documentation: 0,
      objectives: 0.75
    }
  },
  {
    name: 'Objectives',
    evaluation: {
      codeQuality: 0,
      documentation: 0,
      objectives: 1
    }
  },
  {
    name: 'Jury',
    evaluation: {
      codeQuality: 0,
      documentation: 0,
      objectives: 1
    }
  }
]

const companySizeTypes = ['Small Startup', 'Startup', 'Med-size Company', 'Large Company']

const eventTypes = ['hackathon', 'league', 'trainning-camp']

const createEventNotRequiredProps = [
  'active',
  'calendarURL',
  'categories',
  'headerImageURL',
  'hidden',
  'imageURL',
  'legend',
  'metaverseLink',
  'share',
  'sponsors',
  'timeline',
  'type'
]

export {
  allProfessionals,
  businessProfessionals,
  challengeTypes,
  companySizeTypes,
  createEventNotRequiredProps,
  dataProfessionals,
  deisgnProfessionals,
  divisions,
  evaluationPoints,
  eventTypes,
  infrastructureProfessionals,
  professionalTypes,
  scoringTypes,
  seniorityLevels,
  softwareProfessionals
}

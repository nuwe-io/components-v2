export const navigationBusiness = {
  account: () => [
    {
      name: 'account',
      href: '/business/account',
      selected: false
    },
    {
      name: 'team',
      href: '/business/account/team',
      selected: false
    },
    {
      name: 'security',
      href: '/business/account/security',
      selected: false
    }
  ],
  event: ({ url }: { url: string }) => [
    {
      name: 'ranking',
      href: `/business/events/${url}`,
      selected: false
    },
    {
      name: 'insights',
      href: `/business/events/${url}/analytics`,
      selected: false
    },
    {
      name: 'teams',
      href: `/business/events/${url}/teams`,
      selected: false
    },
    {
      name: 'challenges',
      href: `/business/events/${url}/challenges`,
      selected: false
    },
    {
      name: 'view_event',
      href: `/business/events/${url}/preview`,
      selected: false
    },
    {
      name: 'Forms',
      href: `/business/events/${url}/forms`,
      selected: false
    }
  ],
  challenge: ({ url }: { url: string }) => [
    {
      name: 'Preview',
      href: `/business/events/femhack/challenges/${url}`,
      selected: false
    },
    {
      name: 'Forms',
      href: `/business/events/femhack/challenges/${url}/forms`,
      selected: false
    }
  ],
  reports: ({ url, dev }: { url: string; dev: any }) => [
    {
      name: 'individual',
      href: `/business/events/${url}/reports?view=individual&dev=${dev}`,
      selected: false
    },
    {
      name: 'team',
      href: `/business/events/${url}/reports?view=team&dev=${dev}`,
      selected: false
    }
  ],
  position: ({ id }: { id: string }) => [
    {
      name: 'candidates',
      href: `/business/positions/${id}`,
      selected: false
    },
    {
      name: 'review',
      href: `/business/positions/${id}/review`,
      selected: false
    }
  ]
}

const BASEPATH = '/dev'

const HOME = '/events'
const CHALLENGES = '/dashboard/challenges'
const EVENT = BASEPATH + '/event'
const ACTIVE = '/challenges'
const PREVIUS = '/challenges/previous'
const PROFILE = '/profile'
const SETTINGS = '/profile/settings'
const ALLEVENTS = '/events'
const TEAMS = EVENT + '/teams'

export const navigationDev = {
  home: () => [
    {
      name: 'Home',
      href: BASEPATH + HOME,
      selected: false
    },
    {
      name: 'My challenges',
      href: BASEPATH + CHALLENGES,
      selected: false
    }
  ],
  challenges: () => [
    {
      name: 'Current challenges',
      href: BASEPATH + ACTIVE,
      selected: false
    },
    {
      name: 'Previous challenges',
      href: `${BASEPATH}${PREVIUS}`,
      selected: false
    }
  ],
  account: () => [
    {
      name: 'Profile',
      href: BASEPATH + PROFILE,
      selected: false
    },
    {
      name: 'Settings',
      href: `${BASEPATH}${SETTINGS}`,
      selected: false
    }
  ],
  events: () => [
    {
      name: 'Hiring hackathons',
      href: BASEPATH + ALLEVENTS,
      selected: false
    }
  ],
  teams: (url: string) => [
    {
      name: 'Teams',
      href: `${TEAMS}/${url}`,
      selected: false
    },
    {
      name: 'Participants',
      href: `${TEAMS}/${url}/participants`,
      selected: false
    },
    {
      name: 'My team',
      href: `${TEAMS}/${url}/myteam`,
      selected: false
    },
    {
      name: 'Requests',
      href: `${TEAMS}/${url}/requests`,
      selected: false
    }
  ],
  teamsNotParticipant: (url: string) => [
    {
      name: 'Teams',
      href: `${TEAMS}/${url}`,
      selected: false
    },
    {
      name: 'Participants',
      href: `${TEAMS}/${url}/participants`,
      selected: false
    }
  ],
  challenge: () => [
    {
      name: 'Overview',
      href: null,
      selected: false
    },
    {
      name: 'Tasks',
      href: null,
      selected: false
    },
    {
      name: 'Job opportunities',
      href: null,
      selected: false
    }
  ],
  ctfChallenge: (url: string) => [
    {
      name: 'Overview',
      href: `${BASEPATH}/challenges/${url}`,
      selected: false
    },
    {
      name: 'Check flag',
      href: `${BASEPATH}/challenges/${url}/flag-check`,
      selected: false
    }
  ],
  report: () => [
    {
      name: 'Report',
      href: null,
      selected: false
    }
  ]
}

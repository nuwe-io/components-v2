export const navigation = {
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

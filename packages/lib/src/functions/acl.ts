import { Ability, AbilityBuilder } from '@casl/ability'

export const AppAbility = Ability

const roles = {
  admin: {
    can: {
      manage: ['all']
    },
    cannot: {}
  },
  mentor: {
    can: {
      read: ['all'],
      update: ['all'],
      create: ['all']
    },
    cannot: {
      update: ['company', 'team']
    }
  },
  member: {
    can: {
      read: ['all'],
      update: ['all']
    },
    cannot: {
      update: ['company', 'team', 'team-votes']
    }
  },
  employee: {
    can: {},
    cannot: {
      read: ['all']
    }
  }
}

const addAbilities = (type: any, role: any, ability: any) =>
  Object.keys(roles[role][type]).forEach((action) => ability(action, roles[role][type][action]))

export const defineRulesFor = (role: any, subject: any): any => {
  const { can, rules, cannot } = new AbilityBuilder(AppAbility)

  const roleNames = Object.keys(roles)
  const containsRole = roleNames.includes(role)

  if (containsRole) {
    addAbilities('can', role, can)
    addAbilities('cannot', role, cannot)
  } else {
    can('read', subject)
  }

  return rules
}

export const buildAbilityFor = (role: any, subject: any): any => {
  return new AppAbility(defineRulesFor(role, subject), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    detectSubjectType: (object) => object.type
  })
}

// These are the default permissions for the app, if the role doesn't have these permission, it will be denied the access
export const defaultACLObj = {
  action: 'read',
  subject: 'all'
}

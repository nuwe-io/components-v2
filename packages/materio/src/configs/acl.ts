import { Ability, AbilityBuilder } from '@casl/ability'

export const AppAbility = Ability

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
export const defineRulesFor = (role: string, subject: string): any => {
  const { can, rules } = new AbilityBuilder(AppAbility)
  if (role === 'admin') {
    can('manage', 'all')
  } else if (role === 'client') {
    can(['read'], 'acl-page')
  } else {
    can(['read', 'create', 'update', 'delete'], subject)
  }

  return rules
}

export const buildAbilityFor = (role: string, subject: string): any => {
  return new AppAbility(defineRulesFor(role, subject), {
    detectSubjectType: (object: any) => object.type
  })
}

export const defaultACLObj = {
  action: 'manage',
  subject: 'all'
}

const twitterProfile =
  /(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\\-]*\/)*([\w\\-]*)/

const linkedinProfile =
  /(https?:\/\/(www.)|(www.))?linkedin.com\/(mwlite\/|m\/)?in\/[a-zA-Z0-9_.-]+\/?/

const linkedinCompany = /(https?:\/\/(www.)|(www.))?linkedin.com\/company\/[a-zA-Z0-9_.-]+\/?/

const behanceProfile =
  /(?:http:\/\/)?(?:www\.)?behance\.net\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\\-]*\/)*([\w\\-]*)/

const facebookProfile =
  /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\\-]*\/)*([\w\\-]*)/

const gitlabProfile =
  /(?:http:\/\/)?(?:www\.)?gitlab\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\\-]*\/)*([\w\\-]*)/

const githubProfile = /(?:http:\/\/)?(?:www\.)?github\.com\/([\w-]+)/

const instagramProfile = /(?:http:\/\/)?(?:www\.)?instagram\.com\/([\w-]+)/

export const socialReggex = [
  githubProfile,
  linkedinCompany,
  twitterProfile,
  linkedinProfile,
  behanceProfile,
  facebookProfile,
  gitlabProfile,
  instagramProfile
]

export const checkSocialUrl = (url: string) => socialReggex.some((regex) => regex.test(url))

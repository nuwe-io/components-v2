import { checkSocialUrl } from './checkSocialUrl'

const links = {
  github: (username: string) => `https://github.com/${username}`,
  twitter: (username: string) => `https://twitter.com/${username}`,
  linkedin: (username: string) => `https://linkedin.com/in/${username}`
}

export const username2Url = (url: string, type?: string) => {
  if (checkSocialUrl(url)) {
    return url
  } else if (type && Object.keys(links).some((key) => key === type)) {
    return links[type](url)
  } else {
    return false
  }
}

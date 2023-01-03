const generators = [
  'bottts',
  'pixel-art',
  'identicon',
  'initials',
  'avataaars',
  'adventurer',
  'adventurer-neutral',
  'big-ears-neutral',
  'big-smile',
  'croodles',
  'croodles-neutral',
  'miniavs',
  'open-peeps',
  'personas',
  'pixel-art-neutral'
]

const sourceTypes = ['File', 'Generator']
const severities = ['error', 'success']

const initalState = {
  name: '',
  message: null,
  preview: null,
  loading: false,
  error: false,
  open: false,
  src: null,
  file: null,
  showAlert: false,
  onlySource: false,
  sourceType: sourceTypes[0],
  fileName: generators[0],
  severity: severities[0],
  generators,
  sourceTypes
}

const avatarReducer = (state: any, action: any) => {
  const { name, type, value } = action
  switch (type) {
    case 'RESET':
      return { ...initalState }
    case 'SET':
      return { ...state, ...action.payload }
    case 'SOURCE_TYPE':
      return { ...state, sourceType: value, preview: null, showAlert: false }
    case 'UPDATE':
      return {
        ...state,
        [name]: value
      }
    default:
      return state
  }
}

export { avatarReducer, initalState }

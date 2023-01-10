/*const QUESTIONS = [
  {
    question: 'How innovative has the solution been and how have they come to it(Innovation)',
    trait: 'innovative',
    rating: 1
  },
  {
    question: 'How has been the communication and coordination between the team(Coordination)',
    trait: 'fluent',
    rating: 1
  },
  {
    question: 'How well have they managed to explain their solution(Communication)',
    trait: 'clear',
    rating: 1
  },
  {
    question: 'How good is their proposal to improve the solution(Ambition, Growth and Projection)',
    trait: 'well focused',
    rating: 1
  },
  {
    question: 'How good was your final reflection on the event(Reflection and Analysis)',
    trait: 'well worked out',
    rating: 1
  }
]

const DESCRIPTIONS = [
  'This form will allow you to score all the teams and help determine the winning team. There are a total of 5 questions per team on the form. Each question can have a minimum of 1 point and a maximum of 5. The team with the highest number of points will be crowned as the winning team.',
  'If you cannot be present during the presentation, you can vote on points 1 and 2 of all the teams and send the form.'
]*/

export const DEFAULT_STATE = {
  title: 'TEAM 1',
  pollExists: false,
  loading: true,
  descriptions: [],
  questions: [],
  comments: ''
}

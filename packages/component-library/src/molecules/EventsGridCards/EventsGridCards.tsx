import router from 'next/router'

import { CardUser } from '../CardUser'

interface EventsGridCardsProps {
  events: any[]
  displayedTexts: {
    daysLabel: string
    hoursLabel: string
    minutesLabel: string
    title: string
    timeoutLabel: string
  }
}

export const EventsGridCards = ({ events, displayedTexts }: EventsGridCardsProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
        gap: '2rem'
      }}
    >
      {events.map((event, i) => (
        <CardUser
          key={i}
          background={event.imageURL}
          name={event.title}
          text='Hackathon'
          actionText='card_event_action'
          callAction={() => router.push(`/event/${event.eventURL}`)}
          friends={event.sponsors}
          maxFriends={event?.sponsors?.length}
          friendsLabel={`23/06/22`}
          isEvent={true}
          ns='events'
          event={{
            startTime: event.startTime,
            endTime: event.endTime,
            active: event.active
          }}
          displayedTexts={displayedTexts}
        />
      ))}
    </div>
  )
}

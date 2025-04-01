
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';

type EventType = 'workshop' | 'keynote' | 'coding' | 'networking' | 'judging';

interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  location: string;
  type: EventType;
}

interface ScheduleDay {
  date: string;
  dayName: string;
  events: ScheduleEvent[];
}

const schedule: ScheduleDay[] = [
  {
    date: 'December 29, 2023',
    dayName: 'Day 1',
    events: [
      {
        time: '09:00 - 10:00',
        title: 'Registration & Check-in',
        description: 'Arrive, register, get your swag bag, and set up your workstation.',
        location: 'Main Hall',
        type: 'networking'
      },
      {
        time: '10:00 - 11:00',
        title: 'Opening Ceremony',
        description: 'Welcome address, introduction to tracks, judging criteria, and event schedule.',
        location: 'Main Stage',
        type: 'keynote'
      },
      {
        time: '11:00 - 12:00',
        title: 'Team Formation & Ideation',
        description: 'Find teammates, brainstorm ideas, and plan your project approach.',
        location: 'Collaboration Zones',
        type: 'networking'
      },
      {
        time: '12:00 - 13:00',
        title: 'Lunch Break',
        description: 'Fuel up with a delicious lunch provided by our sponsors.',
        location: 'Dining Area',
        type: 'networking'
      },
      {
        time: '13:00 - 14:30',
        title: 'Workshop: AI Development with TensorFlow',
        description: 'Learn how to integrate AI capabilities into your hackathon project.',
        location: 'Workshop Room A',
        type: 'workshop'
      },
      {
        time: '14:30 - 16:00',
        title: 'Workshop: Blockchain Fundamentals',
        description: 'Introduction to blockchain technology and development frameworks.',
        location: 'Workshop Room B',
        type: 'workshop'
      },
      {
        time: '16:00 - 20:00',
        title: 'Coding Sprint',
        description: 'Start building your projects with mentors available for guidance.',
        location: 'Hacking Areas',
        type: 'coding'
      },
      {
        time: '20:00 - 21:00',
        title: 'Dinner',
        description: 'Enjoy a nutritious dinner to keep your energy levels up.',
        location: 'Dining Area',
        type: 'networking'
      },
      {
        time: '21:00 - 00:00',
        title: 'Late Night Coding',
        description: 'Continue working on your projects with 24/7 access to the venue.',
        location: 'Hacking Areas',
        type: 'coding'
      }
    ]
  },
  {
    date: 'December 30, 2023',
    dayName: 'Day 2',
    events: [
      {
        time: '00:00 - 08:00',
        title: 'Overnight Coding',
        description: 'Round-the-clock coding for the dedicated hackers.',
        location: 'Hacking Areas',
        type: 'coding'
      },
      {
        time: '08:00 - 09:00',
        title: 'Breakfast',
        description: 'Start your day with a nutritious breakfast.',
        location: 'Dining Area',
        type: 'networking'
      },
      {
        time: '09:00 - 10:30',
        title: 'Workshop: UI/UX Design for Hackers',
        description: 'Learn principles of designing user-friendly interfaces for your projects.',
        location: 'Workshop Room A',
        type: 'workshop'
      },
      {
        time: '11:00 - 12:00',
        title: 'Mentor Check-in',
        description: 'Get guidance and feedback from industry mentors on your project.',
        location: 'Mentorship Zone',
        type: 'networking'
      },
      {
        time: '12:00 - 13:00',
        title: 'Lunch Break',
        description: 'Refuel with lunch provided by our sponsors.',
        location: 'Dining Area',
        type: 'networking'
      },
      {
        time: '13:00 - 18:00',
        title: 'Continued Hacking',
        description: 'Keep building, testing, and refining your projects.',
        location: 'Hacking Areas',
        type: 'coding'
      },
      {
        time: '18:00 - 19:00',
        title: 'Dinner',
        description: 'Enjoy dinner and network with fellow participants.',
        location: 'Dining Area',
        type: 'networking'
      },
      {
        time: '19:00 - 00:00',
        title: 'Final Stretch',
        description: 'Last night of coding and project development.',
        location: 'Hacking Areas',
        type: 'coding'
      }
    ]
  },
  {
    date: 'December 31, 2023',
    dayName: 'Day 3',
    events: [
      {
        time: '00:00 - 08:00',
        title: 'Last Minute Coding',
        description: 'Final overnight session to complete your projects.',
        location: 'Hacking Areas',
        type: 'coding'
      },
      {
        time: '08:00 - 09:00',
        title: 'Breakfast',
        description: 'Final day breakfast to energize for presentations.',
        location: 'Dining Area',
        type: 'networking'
      },
      {
        time: '09:00 - 10:00',
        title: 'Submission Deadline',
        description: 'All projects must be submitted by this time.',
        location: 'Online Platform',
        type: 'judging'
      },
      {
        time: '10:00 - 13:00',
        title: 'Project Presentations',
        description: 'Teams present their projects to judges and other participants.',
        location: 'Main Stage',
        type: 'judging'
      },
      {
        time: '13:00 - 14:00',
        title: 'Lunch Break',
        description: 'Final lunch while judges deliberate.',
        location: 'Dining Area',
        type: 'networking'
      },
      {
        time: '14:00 - 15:30',
        title: 'Judges Deliberation',
        description: 'Judges review projects and make final decisions.',
        location: 'Judges Room',
        type: 'judging'
      },
      {
        time: '16:00 - 17:30',
        title: 'Awards Ceremony',
        description: 'Winners announced, prizes awarded, and closing remarks.',
        location: 'Main Stage',
        type: 'keynote'
      },
      {
        time: '17:30 - 19:00',
        title: 'Networking & Celebration',
        description: 'Celebrate the end of a successful hackathon with food, drinks, and networking.',
        location: 'Main Hall',
        type: 'networking'
      }
    ]
  }
];

const getEventTypeColor = (type: EventType): string => {
  switch (type) {
    case 'workshop':
      return 'border-blue-500';
    case 'keynote':
      return 'border-purple-500';
    case 'coding':
      return 'border-neon-red';
    case 'networking':
      return 'border-green-500';
    case 'judging':
      return 'border-yellow-500';
    default:
      return 'border-gray-500';
  }
};

const Schedule = () => {
  const [activeDay, setActiveDay] = React.useState<number>(0);
  const [filter, setFilter] = React.useState<EventType | 'all'>('all');

  const filteredEvents = filter === 'all' 
    ? schedule[activeDay].events 
    : schedule[activeDay].events.filter(event => event.type === filter);

  return (
    <MainLayout>
      <section className="pt-28 pb-16 min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cyber mb-4">
              EVENT <span className="neon-text-red">SCHEDULE</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Your roadmap to CyberHack 2023. From opening ceremonies to final presentations, here's everything you need to know.
            </p>
          </div>

          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
              {schedule.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`font-cyber px-4 py-2 rounded-md transition-all duration-300 ${
                    activeDay === index
                      ? 'bg-cyber-red text-white'
                      : 'border border-white/20 hover:border-neon-red/50'
                  }`}
                >
                  {day.dayName} - {day.date.split(',')[0]}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['all', 'workshop', 'keynote', 'coding', 'networking', 'judging'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as EventType | 'all')}
                  className={`px-3 py-1 rounded-md text-sm transition-all duration-300 capitalize ${
                    filter === type
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {type === 'all' ? 'All Events' : type}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-cyber mb-6 text-center">
              {schedule[activeDay].dayName} - {schedule[activeDay].date}
            </h2>

            <div className="space-y-6">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`glassmorphism border-l-4 ${getEventTypeColor(event.type)} p-4 rounded`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-cyber">{event.title}</h3>
                      <span className="text-sm text-gray-400 mt-1 md:mt-0">{event.time}</span>
                    </div>
                    <p className="text-gray-300 mb-2">{event.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <span className="text-gray-400">
                        <span className="font-semibold">Location:</span> {event.location}
                      </span>
                      <span className={`capitalize mt-2 sm:mt-0 px-2 py-1 text-xs rounded ${
                        event.type === 'workshop' ? 'bg-blue-500/20 text-blue-300' :
                        event.type === 'keynote' ? 'bg-purple-500/20 text-purple-300' :
                        event.type === 'coding' ? 'bg-red-500/20 text-red-300' :
                        event.type === 'networking' ? 'bg-green-500/20 text-green-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-400">No events match the selected filter.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Schedule;

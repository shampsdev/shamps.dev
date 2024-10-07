import { ProjectCard } from '@/components/project-card';
import { Project } from '@/types/project.interface';

const projects: Project[] = [
  {
    title: 'DishDash',
    description:
      'Выбирайте интересные места для встреч с друзьями с помощью Telegram-бота DishDash. Свайпайте и открывайте новые локации с друзьями или самостоятельно.',
    tags: [
      'Golang',
      'React',
      'Github Action',
      'Traefik',
      'Watchtower',
      'Docker',
    ],
    image: '',
  },
  {
    title: 'SightQuest',
    description:
      'Выполняйте задания, бегайте по городу и догоняйте соперников, чтобы выиграть.',
    tags: ['Django (Python)', 'React Native', 'Nginx', 'Docker'],
    image: '',
  },
  {
    title: 'KolomnaGo',
    description:
      'Помогает туристам и местным жителям быть в курсе всех культурных событий, а организаторам — легко управлять мероприятиями.',
    tags: ['Django (Python)', 'Vue', 'Traefik', 'Docker'],
    image: '',
  },
];

export const ProjectsSection = () => {
  return (
    <div className='min-h-screen'>
      <p className='text-center text-xl pb-5'>А вот наши проекты</p>
      <div className='w-[90%] mx-auto flex flex-col gap-y-10'>
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            float={index % 2 == 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
};

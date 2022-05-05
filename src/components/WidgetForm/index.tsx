import {CloseButton} from '../CloseButton';

import bugImg from '../../assets/bug.svg';
import lampImg from '../../assets/lamp.svg';
import thoughtImg from '../../assets/thought.svg';

export const feedbackTypes = {
    BUG: {
        title: 'Bug', // 'Report a problem'
        image: {
            source:bugImg,
            alt: 'Bug image',
            description: 'Report a problem'
        }
    },
    IDEA: {
        title: 'Idea', // 'Submit a suggestion'
        image: {
            source: lampImg,
            alt: 'Lamp image',
            description: 'Submit a suggestion'
        }
    },
    OTHER: {
        title: 'Others', // 'Compliments, complaints and questions'
        image: {
            source: thoughtImg,
            alt: 'Thought image',
            description: 'Compliments, complaints and questions'
        }
    }
}

export function WidgetForm() {
  return (
    <div className='bg-zinc-900 p-8 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
          <span className='text-xl leading-6'>We want your feedback</span>
          <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return(
                <button
                    key={key}
                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-row items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                    type="button"
                    title={value.image.description}
                >
                    <img src={value.image.source} alt={value.image.alt} className="max-h-8 max-w-5 mx-auto mb-2"/>
                    <span>{value.title}</span>
                </button>
            )
        }) }
        </div>
    </div>
  )
}

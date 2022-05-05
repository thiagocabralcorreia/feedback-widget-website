import { useState } from 'react';

import { FeedbackTypeStep} from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSucessStep } from './Steps/FeedbackSucessStep';

import bugImg from '../../assets/bug.svg';
import lampImg from '../../assets/lamp.svg';
import thoughtImg from '../../assets/thought.svg';

export const feedbackTypes = {
    BUG: {
        title: 'Bug',
        image: {
            source:bugImg,
            alt: 'Bug image',
            description: 'Report a problem',
            placeholder: 'Report a problem. Describe the issue you\'re experiencing.'
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: lampImg,
            alt: 'Lamp image',
            description: 'Submit a suggestion',
            placeholder: 'Your idea counts. Submit a suggestion.'
        }
    },
    OTHER: {
        title: 'Others', //
        image: {
            source: thoughtImg,
            alt: 'Thought image',
            description: 'Compliments, complaints and questions',
            placeholder: 'Write your compliments, complaints and questions here.'
        }
    }
}

export type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    
    return(
        <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
            { feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
                )
            }
        </div>
    )
}
import {CloseButton} from '../CloseButton';

export function WidgetForm() {
  return (
    <div className='bg-zinc-900 p-8 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
          <span className='text-xl leading-6'>We want your feedback.</span>
          <CloseButton />
      </header>
    </div>
  )
}

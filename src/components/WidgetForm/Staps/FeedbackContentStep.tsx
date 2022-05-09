import { ArrowArcLeft, ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton"
import { ScreenShotBotton } from "../ScreenShotBotton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequest: () => void;
    onFeedbackSent: () => void;
}

//COMPONENTE P/ CONTEÚDO P/ COLOCAR O FEEDBACK (COM TEXTAREA, BTN DE SCREEN E BTN DE ENVIAR FEEDBACK)
export function FeedbackContentStep(
    {
        feedbackType, 
        onFeedbackRestartRequest,
        onFeedbackSent
    }: FeedbackContentStepProps){
    
    //SCREENSHOT QUE O USER TIROU
    const [screenshot, setScreenshot] = useState<string | null>(null)
    
    //TIPO DO FEEDBACK
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [comment, setComment] = useState('')

    function handleSubmitFeedback(event: FormEvent){
      event.preventDefault()

      console.log({
         screenshot,
         comment
      });
      onFeedbackSent()
    }


    return (
        <>
            <header>
                {/* BTN P/ RETORNAR AO COMPONENTE INICIAL */}
                <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequest}
                >
                    {/* ICON VOLTAR */}
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                {/* TITULO DO FEEDBACK */}
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} 
                        className="w-6 h-6"
                    />
                    {feedbackTypeInfo.title}
                </span>

                {/* BTN DE CLOSE (x) */}
                <CloseButton />
            </header>

            {/* FORMULÁRIO P/ PREENCHIMENTO DO FEEDBACK */}
            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">

                {/* CAMPO PARA DESCREVER O FEEDBACK */}
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 
                    border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1
                    resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                

                {/* BTN DE SCREEN E ENVIAR FEEDBACK */}
                <footer className="flex gap-2 mt-2">

                    {/* BTN SCREENSHOT */}
                    <ScreenShotBotton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />

                    {/* BTN ENVIAR FEEDBACK */}
                    <button
                        typeof="submit"
                        disabled={comment.length == 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>

            
        </>
    )
}
import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Staps/FeedbackTypeStep";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/ideia.svg";
import otherImageUrl from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Staps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Staps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title : 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA: {
        title : 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        }
    },
    OTHER: {
        title : 'Outro',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de um balão de pensamento',
        }
    }
}

/**
 * Object.entries(feedbackTypes) => 
 * [
 *    ['BUG',   {...}],
 *    ['IDEA',  {...}],
 *    ['OTHER', {...}],
 * ]
 */

export type FeedbackType = keyof typeof feedbackTypes

//INDEX DA APLICAÇÃO COM TODOS OS COMPONENTES
export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback(){
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {/* SE O FEEDBACK JA FOI ENVIADO ELE MOSTRA O COMPONENTE A SEGUIR */}
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback} />
            ): (
                // SE NÃO
                <>
                    {/* SE NÃO HOUVER FEEDBACK SELECIONADO ELE MOSTRA O COMPONENTE A SEGUIR */}
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    ) : (
                        //SE NÃO ELE MOSTRA ESTE
                        <FeedbackContentStep 
                            feedbackType={feedbackType}
                            onFeedbackRestartRequest={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="http://https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}
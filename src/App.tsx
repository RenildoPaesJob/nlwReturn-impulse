/**
 * interface para typificar
 * as propriedades que se espera
 * receber quando for invocada.
 */
// interface ButtonProps{
//     // text: string; //forma básica
//     text?: string; //forma usando ternário
// }


/* props => argumentos/propriedades
 * formas de pegar os paramters
 * props.text or {text}.
 */
// function Button(props: ButtonProps) {
//     return (
//         // <button>{props.text}</button> //forma básica
//         <button className="bg-violet-500 px-4 h-10 rounded-md 
//         text-violet-100 hover:bg-violet-800 transition-colors">{props.text ?? 'Submit'}</button> //forma usando ternário
//     )
        
// }

/**
 * Função que será redenrizada na aplicação.
 * @returns HTML da aplicação
 */
// function App() {
//   return (
//     <div className="flex gap-1">
//       <Button text="ok" />
//       <Button text="enviar" />
//       <Button text="2" />
//       <Button />
//     </div>
//   );
// }

// export default App;
import { Widget } from "./components/Widget";

export function App() {
    return <Widget />
}
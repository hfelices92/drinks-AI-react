
import { streamText } from 'ai';
import { openRouter } from "../lib/ai";

export default {
    async generateRecipe(prompt: string) {

       const result = streamText({
        model: openRouter('shisa-ai/shisa-v2-llama3.3-70b:free'),
        system: "Eres un experto en recetas de bebidas y cócteles. Genera una receta detallada en formato markdown con los ingredientes y pasos para preparar la bebida solicitada por el usuario. Asegúrate de que la receta sea clara y fácil de seguir.",
        temperature: 0.3,
        prompt,

       
       });  
        
        return result.textStream;
    }
}
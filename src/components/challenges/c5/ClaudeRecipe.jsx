import ReactMarkdown from 'react-markdown'
import './markDownStyles.css'

export default function RecipeOutPut(props){
    return(
        <>
            <section className='get-recipe-container py-4 px-2 shadow-sm'>
                    <h2 className='text-xl font-semibold'>Cheff Claude Recommends: </h2>
                    <ReactMarkdown>
                        {props.recipeIdea}
                    </ReactMarkdown>
                    <p className='enjoy-text '>Enjoy!</p>
            </section>
        </>
    )
}

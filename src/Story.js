import './Story.css';

const Story = ({noun, pluralNoun, verb, adjetive, color, reset}) => {
    return (
        <div className="Story">
            <p className='Story-paragraph'>"Once upon a time there was a {color} {noun} 
             &nbsp;that loved to {verb} {adjetive} {pluralNoun}" </p>
             <button type="button" onClick={reset}>Restart</button>
        </div>
    )
}

export default Story;
import MadlibForm from "./MadlibForm";
import "./MadlibForm.css";
import "./Madlib.css";
import { useState } from "react";
import Story from "./Story";

const Madlib = () => {
  const [words, setWords] = useState([]);
  const addWord = (newWord) => {
    setWords([{ ...newWord }]);
  };
  const [isStory, setIsStory] = useState(false);
  const reset = () => {
    setIsStory((story) => !story);
  };

  return (
    <>
      <h1 className="Madlib-title">Madlibs</h1>
      {!isStory ? (
        <MadlibForm addWord={addWord} reset={reset} />
      ) : (
        <div>
          {words.map(({ adjective, color, noun, pluralNoun, verb }) => (
            <Story
              adjective={adjective}
              color={color}
              noun={noun}
              pluralNoun={pluralNoun}
              verb={verb}
              reset={reset}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Madlib;

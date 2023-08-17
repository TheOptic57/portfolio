import { useState } from "react";

function Dict() {
    const [lookup, setLookUp] = useState("");
    const [word, setWord] = useState("");
    //const [result, setResult] = useState(null);
    const [partOfSpeech, setPartOfSpeech] = useState("");
    const [phonetics, setPhonetics] = useState("")
    const [definitions, setdefinitions] = useState("");
    const [synonyms, setSynonyms] = useState("");
    const [classes, setClasses] = useState("invisible");
    const [sounds, setSounds] = useState("");
    const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    async function dictionaryData() {
          const response = await fetch(api + lookup);
          const data = await response.json()
          if(data[0]) {
            if(data[0].meanings[0]) {
              setPartOfSpeech(data[0].meanings[0].partOfSpeech)
            }
            else {
              setPartOfSpeech("");
            }
            if(data[0].phonetics[0]) {
              setPhonetics(data[0].phonetics[0].text)
            }
            else {
              setPhonetics("");
            }
            if(data[0].meanings[0].definitions[0]) {
              setdefinitions(data[0].meanings[0].definitions[0].definition)
            }
            else {
              setdefinitions("");
            }
            if(data[0].meanings[0]) {
              setSynonyms(data[0].meanings[0].synonyms.join(' '))
            }
            else {
              setSynonyms("");
            }
            setWord(lookup);
            settingaudio(data[0].phonetics);
            setClasses("visible")
          }
          else {
            setClasses("invisible")
          }
    }
    async function settingaudio(data) {
      for(let i = 0; i < await data.length; i++) {
        if(await data[i].audio) {
          setSounds(await data[i].audio)
          return;
        }
      }
      setSounds("");
    }

    function playAudio() {
      //console.log(sounds)
      if(sounds === "") {
        return
      }
      try {
        let audio = new Audio(sounds);
        audio.play();
      } catch (e) {
        console.log({ e });
      }
    }

    return (
      <div className="Dict pt-[10%]">
        <div className="max-w-sm md:max-w-lg rounded overflow-hidden shadow-lg pl-[4%] py-[4%] mx-auto">
          <div>
            <h1 className="font-bold font-mono text-2xl md:text-3xl">Dictionary</h1>
          </div>
          <div>
            <input className="" type="text" value={lookup} onChange={e => setLookUp(e.target.value.replace(/\s+/g, ''))}/>
            <button onClick = {dictionaryData} className="text-base font-semibold lg:text-lg text-white rounded-full bg-blue-500 
            shadow-md hover:scale-110 duration-300 mx-auto ml-[3%] w-[20%]">Search</button>
          </div>
          <div className={classes}>
            <div className="flex">
              <p className="text-xl md:text-2xl font-medium">{word}&nbsp;{phonetics}&nbsp;</p>
              <div className="text-xl md:text-2xl cursor-pointer" onClick={playAudio}>🔊</div>
            </div>

            <p>{partOfSpeech}&nbsp;</p>

          </div>
        
          <div className= {classes}>
            <div className="flex pl-[3%]">
              <h2>Definition:&nbsp;</h2>
              <p>{definitions}</p>
            </div>
          </div>
          <div className={classes}>
            <div className="flex pl-[3%]">
              <h2>Synonym(s):&nbsp;</h2>
              <p>{synonyms}</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default Dict;
  
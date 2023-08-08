import { useState, useEffect } from 'react';
import twoletter from '../twoletter.txt';
import allwords from '../words_alpha.txt';

function Words() {
   //usestate for twoletter.txt and words_alpha.txt
   const [two, setTwo] = useState("blank");
   const [all, setAll] = useState("blank");
 
   //usestate for user input
   const [input, setInput] = useState("");
 
   //usestate for picking one random entry from woletter.txt
   const [rngtwo, setRngTwo] = useState("");
 
   //usestate for tracking how many correct and wrong anwsers
   const [correct, setCorrect] = useState(0);
   const [wrong, setWrong] = useState(0);
 
   const [wrongmsg, setWrongMsg] = useState("");
 
   useEffect(() => {
     //fetchs all data from twoletter.txt and words_alpha.txt to be place in usestate of all and two
   fetch(twoletter)
     .then(r => r.text())
     .then(text => {
       setTwo(text.split(/\r?\n/));
   });
 
   fetch(allwords)
     .then(r => r.text())
     .then(text => {
       setAll(text.split(/\r?\n/));
   });
   
   }, []);
 
   function substring(word, sub) {
     //do not put tolower on word due to having bad effects if word is an array
     return word.includes(sub.toLowerCase());
   }
 
   //min included max excluded
   function rng(min, max) {
     return Math.floor(Math.random() * (max - min) ) + min;
   }
 
   const checkValid = () => {
        if(rngtwo === "") {
          return RngTwoLetter();
        }
       //checks if rngtwo is a substring of user input
       if(substring(String(input).toLowerCase().replace(/\s/g, ''), String(rngtwo).toLowerCase().replace(/\s/g, ''))) {
 
         //checks if user input is a real word based on words_alpha.txt
         if(substring(all, String(input).toLowerCase().replace(/\s/g, ''))) {
           //alert("True");
           setCorrect(correct + 1)
           setWrongMsg("");
         }
         else {
           //alert("Error not a real word");
           setWrongMsg(input + " is not a real word");
           setWrong(wrong + 1)
         }
     }
     else {
       //alert(input + " does not have " + rngtwo);
       setWrongMsg(input + " does not have " + rngtwo);
       setWrong(wrong + 1)
     }
     //calls to randomly pick from twoletter.txt after user submits an input
     RngTwoLetter();
   }
 
   //randomly selects from twoletter.txt
   const RngTwoLetter = () => {
     setRngTwo(two[rng(0,two.length)])
   }
 
  return (
    <div className="Words pt-[5%] h-screen">
      <div className="max-w-sm md:max-w-lg rounded overflow-hidden shadow-lg mx-auto p-[2%] bg-stone-300 grid m-[10%] flex justify-center items-center">
        <div className="pt-[3%] font-mono text-lg md:text-xl flex justify-between">
          <p>Correct:{correct} </p>
          <p>Wrong:{wrong}</p>
        </div>
        <h1 className="font-mono text-xl md:text-2xl font-bold text-blue-600 py-[1%]">Make a word with {rngtwo}</h1>
        <input className='my-[3%] mx-auto h-[50%] w-[70%] font-mono text-lg md:text-xl font-medium' type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <div className='grid grid-cols-2 h-[50%]'>
          <div className="text-base font-semibold md:text-lg lg:text-xl text-white rounded-full bg-blue-500 w-[80%] 
          flex items-center justify-center shadow-md hover:scale-110 duration-300 mx-auto" onClick={checkValid}>
            Check
          </div>
          <div className="text-base font-semibold md:text-lg lg:text-xl text-white rounded-full bg-blue-500 w-[80%] 
          flex items-center justify-center shadow-md hover:scale-110 duration-300 mx-auto" onClick={RngTwoLetter}>
            Random
          </div>
        </div>
        <p className='py-[2%] font-mono text-lg text-red-500'>{wrongmsg}</p>
      </div>
    </div>
  );
}

export default Words;

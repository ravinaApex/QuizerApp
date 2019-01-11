import React, {Component} from "react";
import { Text } from "react-native";
import { Firebase } from './db';
import * as firebase from 'firebase';

var database = firebase.app().database();

const jsonData = {
  "Sports" : {
    "question1" : {
      "question" : "Former Australian captain Mark Taylor has had several nicknames over his playing career. Which of the following was NOT one of them?",
      "correctoption" : ["Stumpy","Stodge"],
      "options" : [
        {"option" : "Tubby"},
      {  "option" : "Stodge"},
      {  "option" : "Helium Bat"},
      {  "option" : "Stumpy"},
     ]
    },
    "question2" : {
      "question" : "Which was the 1st non Test playing country to beat India in an international match?",
      "correctoption" : ["Sri Lanka"],
      "options" : [
        {"option" : "Canada"},
        {"option" : "Sri Lanka"},
        {"option" : "Zimbabwe"},
        {"option" : "East Africa"},
      ]
    },
    "question3" : {
      "question" : "Which county did Ravi Shastri play for?",
      "correctoption" : ["Glamorgan","Leicestershire"],
      "options" : [
          {"option" : "Glamorgan"},
          {"option" : "Leicestershire"},
          {"option" : "Gloucestershire"},
          {"option" : "Lancashire"},
        ]

    },
    "question4" : {
      "question" : "Who was the first Indian to win the World Amateur Billiards title?",
      "correctoption" : ["Wilson Jones"],
      "options" : [
          {"option" : "Geet Sethi"},
          {"option" : "Wilson Jones"},
          {"option" : "Michael Ferreira"},
          {"option" : "Manoj Kothari"},
        ]
    },
    "question5" : {
      "question" : "Who is the first Indian woman to win an Asian Games gold in 400m run?",
      "correctoption" : ["Kamaljit Sandhu"],
      "options" :[
          {"option" : "M.L.Valsamma"},
          {"option" : "P.T.Usha"},
          {"option" : "Kamaljit Sandhu"},
          {"option" : "K.Malleshwari"},
      ]
    },
    "question6" : {
      "question" : "India won its first Olympic hockey gold in...?",
      "correctoption" : ["1928"],
      "options" : [
          {"option" : "1928"},
          {"option" : "1932"},
          {"option" : "1936"},
          {"option" : "1948"},
        ]
    },
    "question7" : {
      "question" : "Which football hero was nicknamed The Sundance Kid?",
      "correctoption" : ["Jim Kiick"],
      "options" :[
          {"option" : "Jim Kiick"},
          {"option" : "Troy Aikman"},
          {"option" : "Brett Favre"},
          {"option" : "Joe Montana"},
      ]
    },
    "question8" : {
      "question" : "Which country won the Cricket World Cup in 1999?",
      "correctoption" : ["Australia"],
      "options" :[
      {  "option" : "Australia"},
        {"option" : "South Africa"},
        {"option" : "Pakistan"},
        {"option" : "England"},
        ]
    },
    "question9" : {
      "question" : "How many gold medals have been won by India in the Olympics so far?",
      "correctoption" : ["9"],
      "options" :[
      {  "option" : "4"},
        {"option" : "8"},
        {"option" : "9"},
        {"option" : "10"},
      ]

    },
    "question10" : {
      "question" : "When was the first cricket Test match played?",
      "correctoption" : ["1877"],
      "options" :[
        {"option" : "1873"},
        {"option" : "1877"},
        {"option" : "1870"},
        {"option" : "1788"},
        ]
    },
    "question11" : {
      "question" : "Who was the first Indian to win an individual medal in Olympics?",
      "correctoption" : ["K.D.Jadhav","Milkha Singh"],
      "options" : [
        {"option" : "Milkha Singh"},
        {"option" : "P.T.Usha"},
        {"option" : "Karnam Malleshwari"},
        {"option" : "K.D.Jadhav"},
        ]
    },
    "question12" : {
      "question" : "Sultan Azlan Shah Cup is related to which among the following Sports?",
      "correctoption" : ["Hockey"],
      "options" :[
        {"option" : "Badminton"},
        {"option" : "Hockey"},
        {"option" : "Table Tennis"},
        {"option" : "Golf"},
        ]
    },
    "question13" : {
      "question" : "The word “Agricultural shot” is known to be used sometimes in which among the following sports?",
      "correctoption" : ["Cricket"],
      "options" : [
        {"option" : "Cricket"},
        {"option" : "Hockey"},
        {"option" : "Golf"},
        {"option" : "Polo"},
      ]
    },
    "question14" : {
      "question" : "Which among the following is played on a synthetic hard court?",
      "correctoption" : ["Australia open"],
      "options" :[
        {"option" : "French Open"},
        {"option" : "Wimbledon"},
        {"option" : "US open"},
        {"option" : "Australia open"},
        ]
    },
    "question15" : {
      "question" : "Murugappa Gold Cup is related to which among the following sports?",
      "correctoption" : ["Hockey"],
      "options" :[
        {"option" : "Football"},
        {"option" : "Hockey"},
        {  "option" : "Cricket"},
        {"option" : "Table Tennis"},
        ]
    },
  },

  "Physics" : {
    "question1" : {
      "question" : "In a transistor, emitter current is",
      "correctoption" : ["slightly less than collector"],
      "options" : [
        {"option" : "slightly more than collector"},
      {  "option" : "slightly less than collector"},
      {  "option" : "equal to the collector"},
      {  "option" : "equal to base current"},
     ]
    },
    "question2" : {
      "question" : "Which was the 1st non Test playing country to beat India in an international match?",
      "correctoption" : ["Sri Lanka"],
      "options" : [
        {"option" : "Canada"},
        {"option" : "Sri Lanka"},
        {"option" : "Zimbabwe"},
        {"option" : "East Africa"},
      ]
    },
    "question3" : {
      "question" : "A simple diode can be used as",
      "correctoption" : ["rectifier"],
      "options" : [
          {"option" : "rectifier"},
          {"option" : "modulator"},
          {"option" : "amplifier"},
          {"option" : "oscillator"},
        ]

    },
    "question4" : {
      "question" : "Photo diodes' applications include the",
      "correctoption" : ["logic circuits","automatic switching"],
      "options" : [
          {"option" : "logic circuits"},
          {"option" : "automatic switching"},
          {"option" : "networking"},
          {"option" : "collector heavily doped"},
        ]
    },
    "question5" : {
      "question" : "Color of light emitted by LED depends on ",
      "correctoption" : ["semiconductor material"],
      "options" :[
          {"option" : "its forward bias"},
          {"option" : "its reverse bias"},
          {"option" : "forward current"},
          {"option" : "semiconductor material"},
      ]
    },
    "question6" : {
      "question" : "In half-wave rectification, during negative cycle of wave, diode is",
      "correctoption" : ["reverse biased"],
      "options" : [
          {"option" : "reverse biased"},
          {"option" : "forward biased"},
          {"option" : "potential barrier"},
          {"option" : "both a and b"},
        ]
    },
    "question7" : {
      "question" : "Common type of rectification is",
      "correctoption" : ["half wave rectification","half wave rectification"],
      "options" :[
          {"option" : "half wave rectification"},
          {"option" : "full wave rectification"},
          {"option" : "quarter wave rectification"},
          {"option" : "potential barrier"},
      ]
    },
    "question8" : {
      "question" : "In a half rectification, diode conducts during",
      "correctoption" : ["positive half "],
      "options" :[
      {  "option" : "both half cycles"},
        {"option" : "positive half"},
        {"option" : "negative half"},
        {"option" : "one half input"},
        ]
    },
    "question9" : {
      "question" : "Function of photovoltaic cell is reverse of",
      "correctoption" : ["LED"],
      "options" :[
      {  "option" : "photo diode"},
        {"option" : "LED"},
        {"option" : "pair production"},
        {"option" : "transistor"},
      ]

    },
    "question10" : {
      "question" : "Which among the following is measured by an Odometer?",
      "correctoption" : ["Distance"],
      "options" :[
        {"option" : "Pressure"},
        {"option" : "Height"},
        {"option" : "Distance"},
        {"option" : "Velocity"},
        ]
    },
    "question11" : {
      "question" : "An electrical fuse is used to interrupt excessive________?",
      "correctoption" : ["Current"],
      "options" : [
        {"option" : "Voltage"},
        {"option" : "Current"},
        {"option" : "Resistance"},
        {"option" : "Inductance"},
        ]
    },
    "question12" : {
      "question" : "what is the normal temperature of human being on Kelvin scale?",
      "correctoption" : ["310"],
      "options" :[
        {"option" : "290"},
        {"option" : "300"},
        {"option" : "310"},
        {"option" : "320"},
        ]
    },
    "question13" : {
      "question" : "Which among the following temperature scale is based upon absolute zero?",
      "correctoption" : ["Kelvin"],
      "options" : [
        {"option" : "Celsius"},
        {"option" : "Fahrenheit"},
        {"option" : "Kelvin"},
        {"option" : "Rankine"},
      ]
    },
    "question14" : {
      "question" : "Newton-meters per second is represented as follows?",
      "correctoption" : ["Watt"],
      "options" :[
        {"option" : "Ohm"},
        {"option" : "Volt"},
        {"option" : "Watt"},
        {"option" : "Calorie"},
        ]
    },
    "question15" : {
      "question" : "Which of the following causes the drop of water to be in spherical shape?",
      "correctoption" : ["Surface tension"],
      "options" :[
        {"option" : "Viscosity"},
        {"option" : "Air resistance"},
        {  "option" : "Surface tension"},
        {"option" : "Temperature"},
        ]
    },
  },

  "Movies" : {
    "question1" : {
      "question" : "What are John Abraham and Akshay Kumar's professions in Garam Masala?",
      "correctoption" : ["Photographers" ],
      "options" : [
        {"option" : "Reporter"},
      {  "option" : "Photographers "},
      {  "option" : "Professors"},
      {  "option" : "Lawyers"},
     ]
    },
    "question2" : {
      "question" : "From where does Veeru propose to Basanti in Sholay?",
      "correctoption" : ["Top of a water tank"],
      "options" : [
        {"option" : "Top of a roof "},
        {"option" : "Top of a ladder "},
        {"option" : "Top of a hill "},
        {"option" : "Top of a water tank"},
      ]
    },
    "question3" : {
      "question" : "Who plays the blind friend in the 1964 Dosti?",
      "correctoption" : ["Mohan"],
      "options" : [
          {"option" : "Mohan"},
          {"option" : "Dinu"},
          {"option" : "Ramu"},
          {"option" : "Shamu"},
        ]

    },
    "question4" : {
      "question" : "Madhuri Dixit's name in N Chandra's 'Tezaab' was...?",
      "correctoption" : ["Mohini"],
      "options" : [
          {"option" : "Mohini"},
          {"option" : "Madhuri"},
          {"option" : "Pooja"},
          {"option" : "Ritu"},
        ]
    },
    "question5" : {
      "question" : "Which of these films was Ashutosh Gowariker's directorial debut?",
      "correctoption" : ["Pehla Nasha"],
      "options" :[
          {"option" : "Pehla Nasha"},
          {"option" : "Swades"},
          {"option" : "Afsana Pyaar Ka"},
          {"option" : "Jung"},
      ]
    },
    "question6" : {
      "question" : "Aishwarya Rai was crowned Miss World in which year?",
      "correctoption" : ["1994"],
      "options" : [
          {"option" : "1992"},
          {"option" : "1993"},
          {"option" : "1994"},
          {"option" : "1995"},
        ]
    },
    "question7" : {
      "question" : "Which of these actors has never appeared in television advertisements?",
      "correctoption" : ["Anil Kapoor"],
      "options" :[
          {"option" : "Govinda"},
          {"option" : "Shah Rukh Khan"},
          {"option" : "Anil Kapoor"},
          {"option" : "Hrithik Roshan"},
      ]
    },
    "question8" : {
      "question" : "The title track of Chameli Ki Shaadi was sung by...?",
      "correctoption" : ["Anil Kapoor"],
      "options" :[
      {  "option" : "Anil Kapoor"},
        {"option" : "Amrita Singh"},
        {"option" : "Dilip Kumar"},
        {"option" : "Kishore Kumar"},
        ]
    },
    "question9" : {
      "question" : "The name of Kajol's character in Sohail Khan's Pyar Kiya Toh Darna Kya was...?",
      "correctoption" : ["Muskan"],
      "options" :[
      {  "option" : "Muskan"},
        {"option" : "Heena"},
        {"option" : "Simran"},
        {"option" : "Anjali"},
      ]

    },
    "question10" : {
      "question" : "The name of Saif Ali Khan's daughter is...?",
      "correctoption" : ["Sara"],
      "options" :[
        {"option" : "Sara"},
        {"option" : "Zara"},
        {"option" : "Zara"},
        {"option" : "Mehnaz"},
        ]
    },
    "question11" : {
      "question" : "Raveena Tandon won the National Award for her role in which film?",
      "correctoption" : ["Daman"],
      "options" : [
        {"option" : "Shool"},
        {"option" : "Ankhiyon Se Goli Maare"},
        {"option" : "Aan"},
        {"option" : "Daman"},
        ]
    },
    "question12" : {
      "question" : "What is Sanjay Kapoor's wife's name?",
      "correctoption" : ["Maheep"],
      "options" :[
        {"option" : "Diya"},
        {"option" : "Tanuja"},
        {"option" : "Poonam"},
        {"option" : "Maheep"},
        ]
    },
    "question13" : {
      "question" : "In which film did Aishwarya Rai pretended to play twins?",
      "correctoption" : ["Jeans"],
      "options" : [
        {"option" : "Josh"},
        {"option" : "Jeans"},
        {"option" : "Dhoom2 "},
        {"option" : "Devdas"},
      ]
    },
    "question14" : {
      "question" : "Lata Mangeshkar made her debut in Hindi playback singing with the movie...?",
      "correctoption" : ["Aap ke Sewa Main"],
      "options" :[
        {"option" : "Andaaz"},
        {"option" : "Deewar"},
        {"option" : "Barsaat"},
        {"option" : "Aap ke Sewa Main"},
        ]
    },
    "question15" : {
      "question" : "Before Akshay Kumar became an actor, he worked as a...?",
      "correctoption" : ["Waiter"],
      "options" :[
        {"option" : "Clerk"},
        {"option" : "Reporter"},
        {  "option" : "Waiter"},
        {"option" : "Journalist"},
        ]
    },
  },

  "Politcs" : {
    "question1" : {
      "question" : "Which of the following party formed the 15th National Assembly in Pakistan?",
      "correctoption" : ["Pakistan Tehreek-e-Insaf" ],
      "options" : [
        {"option" : "National Party"},
      {  "option" : "Pakistan Peoples Party"},
      {  "option" : "Pakistan Muslim League-Nawaz"},
      {  "option" : "Pakistan Tehreek-e-Insaf"},
     ]
    },
    "question2" : {
      "question" : "The power to decide an election petition is vested in the",
      "correctoption" : ["High courts"],
      "options" : [
        {"option" : "Parliament"},
        {"option" : "Supreme Court"},
        {"option" : "High courts"},
        {"option" : "Election Commission"},
      ]
    },
    "question3" : {
      "question" : "The present Lok Sabha is the",
      "correctoption" : ["16th Lok Sabha"],
      "options" : [
          {"option" : "13th Lok Sabha"},
          {"option" : "14th Lok Sabha"},
          {"option" : "15th Lok Sabha"},
          {"option" : "16th Lok Sabha"},
        ]

    },
    "question4" : {
      "question" : "Who approves 20 lakh houses for urban poor approved under PM Awas Yojna recently?",
      "correctoption" : ["Shri Venkaiah Naidu "],
      "options" : [
          {"option" : "Shri Venkaiah Naidu"},
          {"option" : "Shri Arun Jaitley"},
          {"option" : "Shri Naveen Patnaik"},
          {"option" : "Shri Suresh Menon"},
        ]
    },
    "question5" : {
      "question" : "The minimum age of the voter in India is",
      "correctoption" : ["18 years"],
      "options" :[
          {"option" : "15 years"},
          {"option" : "18 years"},
          {"option" : "21 years"},
          {"option" : "25 years"},
      ]
    },
    "question6" : {
      "question" : "The president can dissolve the Lok Sabha on",
      "correctoption" : ["advice of the prime minister"],
      "options" : [
          {"option" : "advice of the prime minister"},
          {"option" : "advice of the chief justice of India"},
          {"option" : "recommendation of Lok Sabha"},
          {"option" : "recommendation of the Rajya Sabha"},
        ]
    },
    "question7" : {
      "question" : "The pre-requisite for the enforcement of directive principles of the state policy is",
      "correctoption" : ["adequate resources"],
      "options" :[
          {"option" : "an effective, hones government"},
          {"option" : "socialist government"},
          {"option" : "active opposition"},
          {"option" : "adequate resources"},
      ]
    },
    "question8" : {
      "question" : "The members of the Rajya Sabha are elected for a term",
      "correctoption" : ["of six years"],
      "options" :[
      {  "option" : "of six years"},
        {"option" : "of nine years"},
        {"option" : "of four years"},
        {"option" : "None of the above"},
        ]
    },
    "question9" : {
      "question" : "The office of the president can fall vacant due to",
      "correctoption" : ["All of the above"],
      "options" :[
      {  "option" : "resignation"},
        {"option" : "death"},
        {"option" : "removal"},
        {"option" : "All of the above"},
      ]

    },
    "question10" : {
      "question" : "The office of the prime minister of India",
      "correctoption" : ["has a constitutional basis"],
      "options" :[
        {"option" : "has a constitutional basis"},
        {"option" : "has a statutory basis"},
        {"option" : "has conventional basis"},
        {"option" : "	None of the above"},
        ]
    },
    "question11" : {
      "question" : "The power to prorogue the Lok Sabha rests with",
      "correctoption" : ["the president"],
      "options" : [
        {"option" : "the speaker"},
        {"option" : "the president"},
        {"option" : "the president"},
        {"option" : "the minister for parliamentary affairs"},
        ]
    },
    "question12" : {
      "question" : "The members of Lok Sabha are",
      "correctoption" : ["directly elected by the people"],
      "options" :[
        {"option" : "directly elected by the people"},
        {"option" : "indirectly elected"},
        {"option" : "nominated"},
        {"option" : "partly elected and partly nominated"},
        ]
    },
    "question13" : {
      "question" : "The members of Parliament can express themselves in the House in",
      "correctoption" : ["English, Hindi or mother tongue"],
      "options" : [
        {"option" : "English only"},
        {"option" : "Hindi only"},
        {"option" : "English or Hindi"},
        {"option" : "English, Hindi or mother tongue"},
      ]
    },
    "question14" : {
      "question" : "The president convenes and prorogues all sessions of Parliament in consultation with",
      "correctoption" : ["the prime minister"],
      "options" :[
        {"option" : "the speaker"},
        {"option" : "the prime minister"},
        {"option" : "the leader of the Opposition in Lok Sabha"},
        {"option" : "None of the above"},
        ]
    },
    "question15" : {
      "question" : "The president can be impeached for",
      "correctoption" : ["violating the constitution"],
      "options" :[
        {"option" : "violating the constitution"},
        {"option" : "disregarding Parliament"},
        {"option" : "for not taking the prime minister's advice"},
        {"option" : "All of the above"},
        ]
    },
  },

  "History" : {
    "question1" : {
      "question" : "Under Akbar, the Mir Bakshi was required to look after",
      "correctoption" : ["military affairs"],
      "options" : [
        {"option" : "military affairs"},
      {  "option" : "the state treasury"},
      {  "option" : "the royal household"},
      {  "option" : "the land revenue system"},
     ]
    },
    "question2" : {
      "question" : "Tripitakas are sacred books of",
      "correctoption" : ["Buddhists"],
      "options" : [
        {"option" : "Buddhists"},
        {"option" : "Hindus"},
        {"option" : "Jains"},
        {"option" : "None of the above"},
      ]
    },
    "question3" : {
      "question" : "The trident-shaped symbol of Buddhism does not represent",
      "correctoption" : ["Nirvana"],
      "options" : [
          {"option" : "Nirvana"},
          {"option" : "Sangha"},
          {"option" : "Buddha"},
          {"option" : "Dhamma"},
        ]

    },
    "question4" : {
      "question" : "The theory of economic drain of India during British imperialism was propounded by",
      "correctoption" : ["Dadabhai Naoroji"],
      "options" : [
          {"option" : "Jawaharlal Nehru"},
          {"option" : "Dadabhai Naoroji"},
          {"option" : "R.C. Dutt"},
          {"option" : "M.K. Gandhi"},
        ]
    },
    "question5" : {
      "question" : "The system of competitive examination for civil service was accepted in principle in the year ",
      "correctoption" : ["1853"],
      "options" :[
          {"option" : "1833"},
          {"option" : "1853"},
          {"option" : "1858"},
          {"option" : "1882"},
      ]
    },
    "question6" : {
      "question" : "Through which one of the following, the king exercised his control over villages in the Vijayanagar Empire?",
      "correctoption" : ["Mahanayakacharya"],
      "options" : [
          {"option" : "Dannayaka"},
          {"option" : "Sumanta"},
          {"option" : "Nayaka"},
          {"option" : "Mahanayakacharya"},
        ]
    },
    "question7" : {
      "question" : "The Vijayanagara ruler, Kirshnadev Raya's work Amuktamalyada, was in",
      "correctoption" : ["Telugu"],
      "options" :[
          {"option" : "Telugu"},
          {"option" : "Sanskrit"},
          {"option" : "Tamil"},
          {"option" : "Kannada"},
      ]
    },
    "question8" : {
      "question" : "The use of Kharoshti in ancient Indian architecture is the result of India's contact with ",
      "correctoption" : ["Greece"],
      "options" :[
      {  "option" : "Central Asia"},
        {"option" : "Iran"},
        {"option" : "Greece"},
        {"option" : "China"},
        ]
    },
    "question9" : {
      "question" : "The troops raised by the emperor but not paid directly the state and place under the charge of mansabadars were know as",
      "correctoption" : ["Dakhili"],
      "options" :[
      {  "option" : "Walashahi"},
        {"option" : "Barawardi"},
        {"option" : "JCumaki"},
        {"option" : "Dakhili"},
      ]

    },
    "question10" : {
      "question" : "Visakhadatta sketches the event after the death of Samudragupta in his work ",
      "correctoption" : ["Mudrarakasam"],
      "options" :[
        {"option" : "Mudrarakasam"},
        {"option" : "Devi Chand Guptam"},
        {"option" : "Mrichekakatika"},
        {"option" : "Malavikagnimitra"},
        ]
    },
    "question11" : {
      "question" : "'The Vedas contain all the truth was interpreted by",
      "correctoption" : ["Swami Dayananda"],
      "options" : [
        {"option" : "Swami Vivekananda"},
        {"option" : "Swami Dayananda"},
        {"option" : "Raja Rammohan Roy"},
        {"option" : "None of the above"},
        ]
    },
    "question12" : {
      "question" : "The term samanta, meaning a feudatory from the sixth century AD, originally meant a",
      "correctoption" : ["neighbor"],
      "options" :[
        {"option" : "slave"},
        {"option" : "cultivator"},
        {"option" : "neighbor"},
        {"option" : "foreigner"},
        ]
    },
    "question13" : {
      "question" : "Tulsidas, the author of Ramcharitmanas, was a contemporary of which of the following rulers?",
      "correctoption" : ["Akbar"],
      "options" : [
        {"option" : "Akbar"},
        {"option" : "Humayun"},
        {"option" : "Shahjahan"},
        {"option" : "Sher Shah Suri"},
      ]
    },
    "question14" : {
      "question" : "To meet the educational needs of the people, the Madarasa-I Nasiri was built in the region of",
      "correctoption" : ["Iltutmish"],
      "options" :[
        {"option" : "Qutub-ud-din Aibak"},
        {"option" : "Iltutmish"},
        {"option" : "Ruknuddin Firoz Shah"},
        {"option" : "Jalal-id-din Khilji"},
        ]
    },
    "question15" : {
      "question" : "The weekly Commonweal was founded by",
      "correctoption" : ["Annie Besant"],
      "options" :[
        {"option" : "Annie Besant"},
        {"option" : "Bipan Chandra Pal"},
        {"option" : "Bal Gangadhar Tilak"},
        {"option" : "Sarojini Naidu"},
        ]
    },
  },

    "Maths" : {
      "question1" : {
        "question" : "How many digits are there in Hindu-Arabic System?",
        "correctoption" : ["10"],
        "options" : [
          {"option" : "10"},
        {  "option" : "20"},
        {  "option" : "30"},
        {  "option" : "40"},
       ]
      },
      "question2" : {
        "question" : "Which among the following is the largest known number in the world?",
        "correctoption" : ["googolplex"],
        "options" : [
          {"option" : "∞"},
          {"option" : "googol"},
          {"option" : "googolplex"},
          {"option" : "gram"},
        ]
      },
      "question3" : {
        "question" : "What does 1 googol means?",
        "correctoption" : ["1 followed by hundred zeros"],
        "options" : [
            {"option" : "1 followed by hundred zeros"},
            {"option" : "1 followed by thousand zeros"},
            {"option" : "1 followed by ten thousand zeros"},
            {"option" : "1 followed by 1 lakh zeros"},
          ]

      },
      "question4" : {
        "question" : "Counting numbers are kept under ________ number.",
        "correctoption" : ["Natural"],
        "options" : [
            {"option" : "Natural"},
            {"option" : "Whole"},
            {"option" : "Rational"},
            {"option" : "Odd"},
          ]
      },
      "question5" : {
        "question" : "An integer that is divisible by 2 is called:",
        "correctoption" : ["Even number"],
        "options" :[
            {"option" : "Even number"},
            {"option" : "Natural number"},
            {"option" : "Odd number"},
            {"option" : "Whole number"},
        ]
      },
      "question6" : {
        "question" : " In which number system, there is no symbol for zero?",
        "correctoption" : ["Roman"],
        "options" : [
            {"option" : "Hindu Arabic system"},
            {"option" : "Roman"},
            {"option" : "Egyptian"},
            {"option" : "Mesopotamia"},
          ]
      },
      "question7" : {
        "question" : "In Roman numerals M represents 1000, what does M represent?",
        "correctoption" : ["10,00,000"],
        "options" :[
            {"option" : "10,000"},
            {"option" : "50,000"},
            {"option" : "10,00,000"},
            {"option" : "500"},
        ]
      },
      "question8" : {
        "question" : "If 5 = V, How does 5,000 written in roman numeral system?",
        "correctoption" : ["V"],
        "options" :[
        {  "option" : "V"},
          {"option" : "MMMMM"},
          {"option" : "MX"},
          {"option" : "VM"},
          ]
      },
      "question9" : {
        "question" : " The average of first 50 natural numbers is ………….",
        "correctoption" : ["25.5"],
        "options" :[
        {  "option" : "25.30"},
          {"option" : "25.5"},
          {"option" : "25.00"},
          {"option" : "12.25"},
        ]

      },
      "question10" : {
        "question" : "A fraction which bears the same ratio to 1/27 as 3/11 bear to 5/9 is equal to ……….",
        "correctoption" : ["1/55"],
        "options" :[
          {"option" : "1/55"},
          {"option" : "55"},
          {"option" : "3/11"},
          {"option" : "1/11"},
          ]
      },
      "question11" : {
        "question" : "The number of 3-digit numbers divisible by 6, is ………….",
        "correctoption" : ["150"],
        "options" : [
          {"option" : "149"},
          {"option" : "166"},
          {"option" : "150"},
          {"option" : "151"},
          ]
      },
      "question12" : {
        "question" : "What is 1004 divided by 2?",
        "correctoption" : ["502"],
        "options" :[
          {"option" : "52"},
          {"option" : "502"},
          {"option" : "520"},
          {"option" : "5002"},
          ]
      },
      "question13" : {
        "question" : "106 × 106 – 94 × 94 = ?",
        "correctoption" : ["2400"],
        "options" : [
          {"option" : "2004"},
          {"option" : "2400"},
          {"option" : "1904"},
          {"option" : "1906"},
        ]
      },
      "question14" : {
        "question" : "Evaluation of 83 × 82 × 8-5 is …………. .",
        "correctoption" : ["1"],
        "options" :[
          {"option" : "1"},
          {"option" : "0"},
          {"option" : "8"},
          {"option" : "None of these."},
          ]
      },
      "question15" : {
        "question" : "The simplest form of 1.5 : 2.5 is …………… .",
        "correctoption" : ["3 : 5"],
        "options" :[
          {"option" : "6 : 10"},
          {"option" : "15 : 25"},
          {"option" : "0.75 : 1.25"},
          {"option" : "3 : 5"},
          ]
      },
    },


    "Logo" : {
      
      "question1" : {
        "question" : "http://cheaperinternationalcalls.co.uk/images/flags/guatemala.png",
        "correctoption" : ["Guatemala"],
        "options" : [
          {"option" : "Myanmar"},
        {  "option" : "Guatemala"},
        {  "option" : "Besiktas"},
        {  "option" : "Galatasaray"},
       ]
      },
      "question2" : {
        "question" : "Flag of canada?",
        "correctoption" : ["http://michaelegerbercompanies.com/megcompanies13/wp-content/uploads/2013/12/Canada.png"],
        "options" :[
          {"option" : "http://michaelegerbercompanies.com/megcompanies13/wp-content/uploads/2013/12/Canada.png"},
          {"option" : "http://www.veryicon.com/icon/png/Flag/Asia/North%20Korea.png"},
          {"option" : "http://futhead.cursecdn.com/static/img/15/clubs_large/73.png"},
          {"option" : "http://www.optokon.cz/sites/default/files/turkey_flag.png"},
          ]
      },
      "question3" : {
        "question" : "http://bright-cars.com/uploads/honda/honda-logo/honda-logo-08.jpg",
        "correctoption" : ["Honda"],
        "options" : [
          {"option" : "Tata Motors"},
        {  "option" : "Honda"},
        {  "option" : "Bajaj Auto"},
        {  "option" : "Royal Enfield"},
       ]
      },
      "question4" : {
        "question" : "which of the following logo of LinkedIn?",
        "correctoption" : ["https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-LinkedIn-Logo.jpg"],
        "options" : [
          {"option" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"},
        {  "option" : "https://image.freepik.com/free-vector/instagram-icon_1057-2227.jpg"},
        {  "option" : "https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-LinkedIn-Logo.jpg"},
        {  "option" : "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg"},
       ]
      },
      "question5" : {
        "question" : "http://www.optokon.cz/sites/default/files/turkey_flag.png",
        "correctoption" : ["Turkey"],
        "options" : [
          {"option" : "Brazil FC"},
        {  "option" : "Mexico"},
        {  "option" : "Turkey"},
        {  "option" : "Juventus"},
       ]
      },
      "question6" : {
        "question" : "which of the following logo of volkswagen?",
        "correctoption" : ["http://www.carlogos.org/logo/Volkswagen-logo-2015-1920x1080.png"],
        "options" : [
          {"option" : "http://www.carlogos.org/logo/Gardner-Douglas-logo-640x480.png"},
        {  "option" : "http://www.carlogos.org/logo/Renault-logo-2015-2048x2048.png"},
        {  "option" : "http://www.carlogos.org/logo/Volkswagen-logo-2015-1920x1080.png"},
        {  "option" : "http://www.carlogos.org/logo/Roewe-logo-2006-1920x1080.png"},
       ]
      },
      "question7" : {
        "question" : "http://cdn.staticneo.com/w/pes/f/f0/Besiktas.png",
        "correctoption" : ["Besiktas"],
        "options" :[
          {"option" : "Turkey"},
          {"option" : "Besiktas"},
          {"option" : "Finland"},
          {"option" : "Bangkok‎"},
          ]
      },
      "question8" : {
        "question" : "which of the following logo of McDonald's logo?",
        "correctoption" : ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2000px-McDonald%27s_Golden_Arches.svg.png"],
        "options" : [
          {"option" : "https://s.hdnux.com/photos/50/67/36/10713011/4/920x1240.jpg"},
        {  "option" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcht1OmpQKDqVo3WcBQ-CSgszuxZB3a-BtjuCLU_DLkfQeIhU"},
        {  "option" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2000px-McDonald%27s_Golden_Arches.svg.png"},
        {  "option" : "https://corporate.dominos.co.uk/Media/Default/Image%20Library/Image%20library%20-%20logos/RGB_White_Type_Tile_Only.png"},
       ]
      },
        "question9" : {
          "question" : "http://www.i-meet.info/art/WorldFlagOrbs/Jamaica.png",
          "correctoption" : ["Jamaica"],
          "options" : [
            {"option" : "FSHF"},
          {  "option" : "Jamaica"},
          {  "option" : "ITALIA"},
          {  "option" : "DEUTSCHER"},
         ]
        },
        "question10" : {
          "question" : "http://www.eubcboxing.org/wp-content/uploads/2013/04/Bosnia-Herzegovina1.png",
          "correctoption" : ["Bosnia and herzegovina"],
          "options" : [
            {"option" : "Bosnian Podrinje Canton"},
          {  "option" : "Flag of Republika Srpska"},
          {  "option" : "Bosnia and herzegovina"},
          {  "option" : "Una-Sana Canton"},
         ]
        },
        "question11" : {
          "question" : "http://www.arenascore.net/wp-content/uploads/2015/03/Basel.png",
          "correctoption" : ["FC Basel"],
          "options" :[
            {"option" : "FC Basel"},
            {"option" : "Southampton AC‎"},
            {"option" : "Brazil FC"},
            {"option" : "Southampton FC‎"},
            ]
        },
        "question12" : {
          "question" : "which of the following logo of Firefox_Logo?",
          "correctoption" : ["https://upload.wikimedia.org/wikipedia/commons/6/67/Firefox_Logo%2C_2017.svg"],
          "options" : [
            {"option" : "https://www.paulirish.com/lovesyou/new-browser-logos/chrome-512.png"},
          {  "option" : "https://bitwizards.com/bitwizards/media/blogs/bryan-solstis/2013/june/ie10addingsessiontourl/2013-6-solstis-topimage.jpg"},
          {  "option" : "https://www.mozilla.org/media/img/logos/firefox/logo-quantum-high-res.cfd87a8f62ae.png"},
          {  "option" : "http://www.free-icons-download.net/images/opera-logo-icon-30041.png"},

         ]
        },
        "question13" : {
          "question" : "http://www.veryicon.com/icon/png/Flag/Europe/Netherlands.png",
          "correctoption" : ["Netherlands"],
          "options" :[
            {"option" : "Thailand"},
            {"option" : "Netherlands"},
            {"option" : "Pattaya"},
            {"option" : "Bangkok‎"},
            ]
        },

        "question14" : {
          "question" : "which of the following logo of Puma shoes logo?",
          "correctoption" : ["http://logok.org/wp-content/uploads/2014/03/Puma-logo-880x660.png"],
          "options" : [
            {"option" : "http://content.nike.com/content/dam/one-nike/globalAssets/social_media_images/nike_swoosh_logo_black.png"},
          {  "option" : "http://logok.org/wp-content/uploads/2014/03/Puma-logo-880x660.png"},
          {  "option" : "https://www.shoebrandlist.com/images/fila-shoe-brands-list-logo.jpg"},
          {  "option" : "https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/b1y6nvod47qek0ch7evd.jpg"},
         ]
        },
        "question15" : {
           "question" : "http://www.futbol24.com/upload/team/UEFA/Albania.png",
           "correctoption" : ["Albania"],
           "options" : [
             {"option" : "Brazil FC"},
           {  "option" : "Soccer Logo"},
           {  "option" : "Tottenham"},
           {  "option" : "Albania"},
          ]
         },
    },








    "Technology" : {
      "question1" : {
        "question" : "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
        "correctoption" : ["1880s"],
        "options" : [
          {"option" : "1850s"},
        {  "option" : "1880s"},
        {  "option" : "1930s"},
        {  "option" : "1950s"},
       ]
      },
      "question2" : {
        "question" : "What is part of a database that holds only one type of information?",
        "correctoption" : ["Field"],
        "options" : [
          {"option" : "Report"},
          {"option" : "Field"},
          {"option" : "Record"},
          {"option" : "File"},
        ]
      },
      "question3" : {
        "question" : "In which decade with the first transatlantic radio broadcast occur?",
        "correctoption" : ["1900s"],
        "options" : [
            {"option" : "1850s"},
            {"option" : "1860s"},
            {"option" : "1870s"},
            {"option" : "1900s"},
          ]

      },
      "question4" : {
        "question" : "'.MOV' extension refers usually to what kind of file?",
        "correctoption" : ["Animation/movie file"],
        "options" : [
            {"option" : "Image file"},
            {"option" : "Animation/movie file"},
            {"option" : "Audio file"},
            {"option" : "MS Office document"},
          ]
      },
      "question5" : {
        "question" : "In which decade was the SPICE simulator introduced?",
        "correctoption" : ["1970s"],
        "options" :[
            {"option" : "1950s"},
            {"option" : "1960s"},
            {"option" : "1970s"},
            {"option" : "1980s"},
        ]
      },
      "question6" : {
        "question" : " Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
        "correctoption" : ["Remote control"],
        "options" : [
            {"option" : "Sound"},
            {"option" : "Remote control"},
            {"option" : "Color balance"},
            {"option" : "High voltage"},
          ]
      },
      "question7" : {
        "question" : "The purpose of choke in tube light is ?",
        "correctoption" : ["To increase the voltage momentarily"],
        "options" :[
            {"option" : "To decrease the current"},
            {"option" : "To increase the current"},
            {"option" : "To decrease the voltage momentarily"},
            {"option" : "To increase the voltage momentarily"},
        ]
      },
      "question8" : {
        "question" : "'.MPG' extension refers usually to what kind of file?",
        "correctoption" : ["Animation/movie file"],
        "options" :[
        {  "option" : "WordPerfect Document file"},
          {"option" : "MS Office document"},
          {"option" : "Animation/movie file"},
          {"option" : "Image file"},
          ]
      },
      "question9" : {
        "question" : "'.JPG' extension refers usually to what kind of file?",
        "correctoption" : ["Image file"],
        "options" :[
        {  "option" : "System file"},
          {"option" : "Animation/movie file"},
          {"option" : "MS Encarta document"},
          {"option" : "Image file"},
        ]

      },
      "question10" : {
        "question" : "What does AM mean?",
        "correctoption" : ["Amplitude modulation"],
        "options" :[
          {"option" : "Angelo marconi"},
          {"option" : "Anno median"},
          {"option" : "Amplitude modulation"},
          {"option" : "Amperes"},
          ]
      },
      "question11" : {
        "question" : "The average power (in watts) used by a 20 to 25 inch home color television is...?",
        "correctoption" : ["70-100"],
        "options" : [
          {"option" : "70-100"},
          {"option" : "25-50"},
          {"option" : "500-800"},
          {"option" : "Over 1000"},
          ]
      },
      "question12" : {
        "question" : "In which decade was the ARRL founded?",
        "correctoption" : ["1910s"],
        "options" :[
          {"option" : "1940s"},
          {"option" : "1930s"},
          {"option" : "1920s"},
          {"option" : "1910s"},
          ]
      },
      "question13" : {
        "question" : "'CD' computer abbreviation usually means ?",
        "correctoption" : ["Compact Disc"],
        "options" : [
          {"option" : "Command Description"},
          {"option" : "Change Data"},
          {"option" : "Copy Density"},
          {"option" : "Compact Disc"},
        ]
      },
      "question14" : {
        "question" : "'.BAK' extension refers usually to what kind of file?",
        "correctoption" : ["Backup file"],
        "options" :[
          {"option" : "Backup file"},
          {"option" : "Audio file"},
          {"option" : "Animation/movie file"},
          {"option" : "MS Encarta document"},
          ]
      },
      "question15" : {
        "question" : "Who co-created the UNIX operating system in 1969 with Dennis Ritchie?",
        "correctoption" : ["Ken Thompson"],
        "options" :[
          {"option" : "Bjarne Stroustrup"},
          {"option" : "Steve Wozniak"},
          {"option" : "Ken Thompson"},
          {"option" : "Niklaus Wirth"},
          ]
      },
    }



}

// var userObj2 = {
//   profileName :'Vaibhav Bavishi',
//   imgUrl      : 'test',
//   mobileNo    : 8888888888,
//   isVerified  : false,
//   createdAt   : +new Date,
//   updatedAt   :  +new Date,
//   otp         : 123456
// };
// var userObj3 = {
//   profileName :'Vishal Rakholiya',
//   imgUrl      : 'test',
//   mobileNo    : 7777777777,
//   isVerified  : false,
//   createdAt   : +new Date,
//   updatedAt   :  +new Date,
//   otp         : 123456
// };

// var taskObj = {
//   taskName   : 'first task',
//   taskMsg    : 'task description',
//   imgUrl     : 'test',
//   dueDate    : +new Date,
//   isShared   : true,
//   taskStatus : 'pending',
//   sharedWith : [9999999999,8888888888,7777777777],
//   createdAt  : +new Date,
//   updatedAt  :  +new Date,
// };


// var userKey2 = database.ref('/users').push(userObj2).key;
// var userKey3 = database.ref('/users').push(userObj3).key;
// var taskKey = database.ref('/tasks').push(taskObj).key;

// var chatObj = {
//   senderID : userKey1,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };

// var commentKey = database.ref(`/taskComments/${taskKey}`).push(chatObj).key;

// database.ref('/users').on('child_added',function(snapshot){
//   console.log(snapshot.val())
// })

// console.log("userKey1 => ",userKey1);
// console.log("taskKey => ",taskKey);
// console.log("commentKey => ",commentKey);

// var chatObj = {
//   senderID : 1,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj1 = {
//   senderID : 2,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj2 = {
//   senderID : 3,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj3 = {
//   senderID : 1,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj4 = {
//   senderID : 2,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj5 = {
//   senderID : 3,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };

// database.ref('/chats/1_2').push(chatObj)
// database.ref('/chats/1_2').push(chatObj1)
// database.ref('/chats/2_3').push(chatObj2)
// database.ref('/chats/1_2').push(chatObj3)
// database.ref('/chats/1_2').push(chatObj4)
// database.ref('/chats/1_3').push(chatObj5)


// database.ref('/chats/1_2').on('child_added',function(snapshot){
//   console.log(snapshot.val())
// })

export default class AppConfig extends Component {

  render(){
    var userKey1 = database.ref('/Question').set(jsonData).then((data)=>{
        console.log('data ' , data)
      }).catch((error)=>{
          console.log('error ' , error)
      });
    return(
      <Text>das</Text>
    )
  }
}

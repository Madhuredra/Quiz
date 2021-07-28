const quizDB = [
    {
        question:"Ques1:Rajya Sabha has equal powers with Lok Sabha in",
        a:"the matter of creating new All India Services",
        b:"amending the Constitution",
        c:" the removal of the government",
        d:"making cut motions",
        ans:"ans1"
    }
    ,
    {
        question:"Ques2:In India, separation of judiciary from the executive is enjoined by",
        a:" the Preamble of the Constitution",
        b:"a Directive Principle of State Policy",
        c:" the Seventh Schedule",
        d:"the conventional practice",
        ans:"ans2"
    }
    ,
    {
        question:"Ques3:Along with the Budget, the Finance Minister also places other documents before the Parliament which include ‘The Macro Economic Framework Statement’. The aforesaid document is presented because this is mandated by",
        a:"Long standing parliamentary convention",
        b:"Article 112 and Article 110(1) of the Constitution of India",
        c:"Article 113 of the Constitution of India",
        d:"{Provisions of the Fiscal Responsibility and Budget Management Act, 2003}",
        ans:"ans4"
    },
    {
        question:"Ques4:A constitutional government by definition is a",
        a:" government by legislature",
        b:"popular government",
        c:"multi-party government",
        d:"limited government",
        ans:"ans4"
    },
    {
        question:"Ques5:A Parliamentary System of Government is one in which",
        a:"all political parties in the Parliament are represented in the Government",
        b:" the Government is responsible to the Parliament and can be removed by it",
        c:" the Government is elected by the people and can be removed by them",
        d:"the Government is chosen by the Parliament but cannot be removed by it before completion of a fixed term",
        ans:"ans2"
    },
    {
        question:"Ques6:In the context of India, which one of the following is the characteristic appropriate for bureaucracy?",
        a:"An agency for widening the scope of parliamentary democracy",
        b:"An agency for strengthening the structure of federalism",
        c:"An agency for facilitating political stability and economic growth",
        d:"An agency for the implementation of public policy",
        ans:"ans3"
    },
    {
        question:"Ques7:In which one of the following groups are all the four countries members of G20?",
        a:" Argentina, Mexico, South Africa and Turkey",
        b:" Australia, Canada, Malaysia and New Zealand",
        c:"Brazil, Iran, Saudi Arabia and Vietnam",
        d:"Indonesia, Japan, Singapore and South Korea",
        ans:"ans2"
    },
    {
        question:"Ques8:The Ninth Schedule was introduced in the Constitution of India during the prime ministership of",
        a:"Jawaharlal Nehru",
        b:" Lal Bahadur Shastr",
        c:"Indira Gandhi",
        d:"Morarji Desai",
        ans:"ans1"
    },
    {
        question:"Ques9:Which Article of the Constitution of India safeguards one’s right to marry the person of one’s choice?",
        a:"Article 19",
        b:"Article 21",
        c:"Article 25",
        d:"Article 29",
        ans:"ans2"
    },
    {
        question:"Ques10:In the context of polity, which one of the following would you accept as the most appropriate definition of liberty?",
        a:" Protection against the tyranny of political rulers",
        b:"Absence of restraint",
        c:"opportunity to do whatever ones like",
        d:"opportunity to develop onself fully",
        ans:"ans2"
    }
];

const question = document.querySelector('.ques');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit  = document.querySelector('#submit');

//all answer will store in this array
const answers = document.querySelectorAll('.answer');

//get  ShowAre

const showScore = document.querySelector('#showScore');

var CountQues = 0;
var score= 0;
const loadQues = () => {
    question.innerText = quizDB[CountQues].question; 
    option1.innerText = quizDB[CountQues].a;
    option2.innerText = quizDB[CountQues].b;
    option3.innerText = quizDB[CountQues].c;
    option4.innerText = quizDB[CountQues].d;
}
loadQues();


function getAns(){
    let answer;
    answers.forEach((currAnsEle) => {
        if(currAnsEle.checked){
            answer = currAnsEle.id;
        }
    });
    return answer;
}

function checkAns(){
    let checkedAns = getAns();
    if(checkedAns === quizDB[CountQues].ans){
        score++;
    }
    CountQues++;
    if(CountQues<quizDB.length){
        loadQues();
    }else{
        showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length} ✌</h3>`;
        showScore.classList.remove('showArea');
    }
}


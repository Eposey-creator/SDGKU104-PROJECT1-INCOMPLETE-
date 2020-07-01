const startButton= document.getElementById('start-btn')
startButton.addEventListener('click', startGame)
const questionContainerElement=document.getElementById('question-container')

function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    console.log('get next question')
}

function selectAnswer(){
 console.log('get answer from user')
}

const question=[
    {
    question:'What is a Wireframe',
      answer:[
            { text:'Mock up prototypes done in software or low fidelity means where it is simulated the navigation of the software application based on the users simulated selection.', correct: true},
            {text:'a pictrue frame made of wire', correct:false},
            { text:'an attribute in css', correct:false},
            { text: 'none of the above'}

        ]
    }
]

var nums=[14,12,10,20]
var totalSum = 0;
for(var i in nums) {
    totalSum += nums[i]}

    var numsCnt = nums.length;
    var average = totalSum / numsCnt;
    console.log('Average is: ' + average);
    console.log('you attempted the quiz an average of :' +average)
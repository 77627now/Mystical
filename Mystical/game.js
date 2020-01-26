const textElement = document.getElementById('text')
var optionButtonsElement
 
let state = {}
  
const textNode = [
    {               //base start
        id: 1,
        text: 'Hey Toopy, how are you doing today?',
        options: [
            {
                text: 'I am really happy today',
                setState: {happy: true},
                nextText: 2
            },
            {
                text: 'I am really sad today',
                setState: {happy: true},
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Well alright then Toopy, who would you like to help out today?',
        options: [
            {
                text:'Help Emma',
                requiredState: (currentState) => currentState.happy,
                nextText: 3
            },
            {
                text:'Help Alex',
                requiredState: (currentState) => currentState.happy,
                nextText: 4
            },
            {
                text:'Help Tyrone',
                requiredState: (currentState) => currentState.happy,
                nextText: 5
            }
 
        ]
    },
    {
        id: 5,
        text: 'Well alright then toopy, who would you like to help out today?',
        options: [
            {
                text:'Text Tyrone to chill',
                requiredState: (currentState) => currentState.happy,
                nextText: 12
            },
            {
                text:'Text Tyrone to chill',
                requiredState: (currentState) => currentState.happy,
                nextText: 12
            },
            {
                text:'Text tyrone to chill',
                requiredState: (currentState) => currentState.happy,
                nextText: 12
            }
 
        ]
    },
    {
        id: 12,
        text: 'You wait 30 mins for him at the parking lot and he never showed up THE END',
        options: [
            {
                text:'RESTART',
                requiredState: (currentState) => currentState.happy,
                nextText: 1
            }
            
 
        ]
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Helping Alex
    {
        id: 4,
        text: 'Alex is about to get married, what will you like to help with',
        options: [
            {
                text:'Sending the invites...',
                requiredState: (currentState) => currentState.happy,
                nextText: 9
            },
            {
                text:'Plan the bachelorettes party... ',
                requiredState: (currentState) => currentState.happy,
                nextText: 10
            },
            {
                text:'Just get wasted...',
                requiredState: (currentState) => currentState.happy,
                nextText: 11
            }
 
        ]
    },
    {
        id: 9,
        text: 'Alex thanks you and you guys go on with your day THE END',
        options: [
            {
                text:'RESTART',
                requiredState: (currentState) => currentState.happy,
                nextText: 1
            }
 
        ]
    },
    {
        id: 10,
        text: 'Few days go by and Alex thanks you and makes you the best man THE END',
        options: [
            {
                text:'RESTART',
                requiredState: (currentState) => currentState.happy,
                nextText: 1
            }
          
 
        ]
    },

    {
        id: 11,
        text: 'Toopy and Alex got really drunk and went to the hospital, dont drink kids THE END',
        options: [
            {
                text:'RESTART',
                requiredState: (currentState) => currentState.happy,
                nextText: 1
            }
 
        ]
    },
    
    
    
    
    { //HELPING EMMMA
        id: 3,
        text: 'What will you like to help Emma with?',
        options: [
            {
                text:'Help Emma with laundry...',
                requiredState: (currentState) => currentState.happy,
                nextText: 6
            },
            {
                text:'Help Emma with the dishes...',
                requiredState: (currentState) => currentState.happy,
                nextText: 7
            },
            {
                text:'Ask how Emma is doing...',
                requiredState: (currentState) => currentState.happy,
                nextText: 8
            }
 
        ]
    },
    {
        id: 6,
        text: 'Emma thanks you, and you head off home THE END',
        options: [
            {
                text:'RESTART',
                requiredState: (currentState) => currentState.happy,
                nextText: 1
            }
            
 
        ]
    },
    {
        id: 7,
        text: 'Emma loves the time you spend together doing that THE END',
        options: [
            {
                text:'RESTART',
                requiredState: (currentState) => currentState.happy,
                nextText: 1
            }
          
 
        ]
    },
    {
        id: 8,
        text: 'I am great Toopy, thank you for asking! THE END',
        options: [
            {
                text:'RESTART',
                requiredState: (currentState) => currentState.happy,
                nextText: 1
            }
            
 
        ]
    },

   
       
        
 













]
function startGame() {
    state = {}
    showTextNode(1)
}
 
function showTextNode(textNodeIndex){
    console.log("were here{")
    var textNodes = textNode.find(textNode => textNode.id === 
    textNodeIndex)
    textElement.innerText = textNodes.text
    optionButtonsElement = document.getElementById("option-buttons")
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    var i = 0
    var buttons = document.getElementsByClassName("btn")
       
 
    textNodes.options.forEach(option => {
        if(showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
                 
        }
    })
}
 
function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}


function selectOption(option){
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

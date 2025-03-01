function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    let chatbox = document.getElementById("chatbox");

    // Show user message
    chatbox.innerHTML += `<p class='user-message'>${userInput}</p>`;

    // Get bot response
    let botResponse = getBotResponse(userInput);
    chatbox.innerHTML += `<p class='bot-message'>${botResponse}</p>`;

    // Clear input and auto-scroll
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
    let responses = {
        "hello": "Hi there! How can I assist you?",
        "how are you": "I'm just a bot, but I'm doing great!",
        "what is your name": "I'm a simple chatbot!",
        "bye": "Goodbye! Have a great day!",
        "who created you": "I was created by a developer to help with simple conversations!",
        "tell me a joke": "Why dont skeletons fight each other? Because they dont have the guts!",
        "what is your favorite color": "I like all colors, but blue seems nice!",
        "what can you do": "I can chat with you and answer basic questions!",

        
    };
    return responses[input.toLowerCase()] || "I'm not sure I understand.";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

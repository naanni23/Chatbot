document.getElementById('user-input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    appendUserMessage(userInput);  // Display user message first
    document.getElementById('user-input').value = ''; // Clear input field

    // Delayed bot response
    setTimeout(function() {
        botResponse(userInput); // Call botResponse with user input
    }, 500);
});

function appendUserMessage(message) {
    let chatBox = document.getElementById('chat-box');
    let userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botResponse(userInput) {
    let chatBox = document.getElementById('chat-box');
    let botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot-message';

    let response;

    // Basic greetings and common queries
    if (userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
        response = "Hello there!";
    } else if (userInput.toLowerCase().includes('how are you')) {
        response = "I'm just a bot, but thanks for asking!";
    } else if (userInput.toLowerCase().includes('time')) {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        response = `It's currently ${hours}:${minutes}`;
    } 

    // Product availability and pricing
    else if (userInput.toLowerCase().includes('do you have') || userInput.toLowerCase().includes('in stock')) {
        response = "Please check our online inventory or visit the store for the most accurate information on product availability.";
    } else if (userInput.toLowerCase().includes('price of') || userInput.toLowerCase().includes('cost of')) {
        response = "Please visit our website or store for the latest pricing information.";
    } else if (userInput.toLowerCase().includes('carry') || userInput.toLowerCase().includes('sell')) {
        response = "We carry a wide range of products. Please specify the brand or product, and I can provide more details.";
    } else if (userInput.toLowerCase().includes('fresh produce')) {
        response = "Yes, we have a variety of fresh produce available.";
    } else if (userInput.toLowerCase().includes('organic products')) {
        response = "We have a wide selection of organic products.";
    } else if (userInput.toLowerCase().includes('meat')) {
        response = "We offer a variety of meats including chicken, beef, pork, and fish.";
    } else if (userInput.toLowerCase().includes('dairy')) {
        response = "Our dairy section includes milk, cheese, yogurt, and more.";
    } else if (userInput.toLowerCase().includes('baked goods')) {
        response = "Our bakery offers fresh bread, pastries, and cakes.";
    } else if (userInput.toLowerCase().includes('beverages')) {
        response = "We have a variety of beverages including sodas, juices, and water.";
    } else if (userInput.toLowerCase().includes('frozen foods')) {
        response = "Our frozen foods section includes a wide range of items like vegetables, meats, and ready-to-eat meals.";
    } else if (userInput.toLowerCase().includes('snacks')) {
        response = "We offer a variety of snacks including chips, nuts, and cookies.";
    } else if (userInput.toLowerCase().includes('cereal')) {
        response = "We have a variety of cereals including popular brands and healthy options.";
    } else if (userInput.toLowerCase().includes('pet food')) {
        response = "We carry pet food for dogs, cats, and other pets.";
    } else if (userInput.toLowerCase().includes('cleaning supplies')) {
        response = "Our cleaning supplies section includes detergents, disinfectants, and more.";
    } else if (userInput.toLowerCase().includes('baby products')) {
        response = "We have a range of baby products including diapers, formula, and baby food.";

    }
    // Store information
    else if (userInput.toLowerCase().includes('store hours')) {
        response = "Our store is open from 8 AM to 10 PM every day.";
    } else if (userInput.toLowerCase().includes('store location') || userInput.toLowerCase().includes('address')) {
        response = "Our store is located at 123 Main Street, Anytown.";
    } else if (userInput.toLowerCase().includes('online shopping') || userInput.toLowerCase().includes('delivery')) {
        response = "Yes, we offer online shopping and home delivery. Please visit our website for more details.";
    } else if (userInput.toLowerCase().includes('contact')) {
        response = "You can reach our customer service at (555) 123-4567 or email support@supermarket.com.";
    } else if (userInput.toLowerCase().includes('parking')) {
        response = "We have ample parking space available for our customers.";
    } else if (userInput.toLowerCase().includes('wheelchair')) {
        response = "Our store is wheelchair accessible.";
    } else if (userInput.toLowerCase().includes('restrooms')) {
        response = "Customer restrooms are located at the back of the store.";
    } else if (userInput.toLowerCase().includes('lost and found')) {
        response = "Please visit our customer service desk for any lost and found inquiries.";
    } else if (userInput.toLowerCase().includes('store manager')) {
        response = "Our store manager is available during business hours to assist you.";
    } else if (userInput.toLowerCase().includes('cash machine') || userInput.toLowerCase().includes('atm')) {
        response = "We have an ATM located near the front entrance of the store.";
    } else if (userInput.toLowerCase().includes('pharmacy')) {
        response = "Our in-store pharmacy is open from 9 AM to 9 PM every day.";
    } else if (userInput.toLowerCase().includes('floral department')) {
        response = "Our floral department offers a variety of fresh flowers and bouquets.";
    } else if (userInput.toLowerCase().includes('gas station')) {
        response = "We have a gas station located on-site for your convenience.";
    } else if (userInput.toLowerCase().includes('bakery')) {
        response = "Our bakery section offers fresh bread, pastries, and custom cakes.";
    } else if (userInput.toLowerCase().includes('butcher')) {
        response = "Our butcher is available to help you with custom meat cuts.";
    }
    // Promotions and discounts
    else if (userInput.toLowerCase().includes('promotions') || userInput.toLowerCase().includes('discounts')) {
        response = "Check out our weekly flyer or website for current promotions and discounts.";
    } else if (userInput.toLowerCase().includes('loyalty program') || userInput.toLowerCase().includes('rewards program')) {
        response = "Yes, we have a loyalty program. Sign up in-store or online to start earning points.";
    } else if (userInput.toLowerCase().includes('coupons')) {
        response = "You can find coupons in our weekly flyer or on our website.";
    } else if (userInput.toLowerCase().includes('sales')) {
        response = "We have sales on various items every week. Check our website or in-store flyer.";
    } else if (userInput.toLowerCase().includes('membership')) {
        response = "Our membership program offers exclusive discounts and benefits.";
    } else if (userInput.toLowerCase().includes('student discount')) {
        response = "We offer a student discount with a valid student ID.";
    } else if (userInput.toLowerCase().includes('senior discount')) {
        response = "We offer a senior discount every Tuesday for customers aged 60 and above.";
    } else if (userInput.toLowerCase().includes('military discount')) {
        response = "We offer a discount for active military personnel and veterans.";
    } else if (userInput.toLowerCase().includes('clearance items')) {
        response = "Our clearance section features deeply discounted items. Check it out in-store.";
    } else if (userInput.toLowerCase().includes('special offers')) {
        response = "Sign up for our newsletter to receive exclusive special offers.";
    }
    // Customer services
    else if (userInput.toLowerCase().includes('return policy')) {
        response = "You can return items within 30 days with a receipt for a full refund.";
    } else if (userInput.toLowerCase().includes('customer service')) {
        response = "You can reach our customer service at (555) 123-4567 or email support@supermarket.com.";
    } else if (userInput.toLowerCase().includes('gift cards')) {
        response = "We offer gift cards in various denominations. You can purchase them in-store or online.";
    } else if (userInput.toLowerCase().includes('lost and found')) {
        response = "Please visit our customer service desk for any lost and found inquiries.";
    } else if (userInput.toLowerCase().includes('complaint')) {
        response = "We're sorry to hear that. Please contact our customer service to file a complaint.";
    } else if (userInput.toLowerCase().includes('special assistance')) {
        response = "Our staff is here to help. Please ask any of our associates for assistance.";
    } else if (userInput.toLowerCase().includes('special orders')) {
        response = "We can accommodate special orders. Please contact customer service for more information.";
    } else if (userInput.toLowerCase().includes('rain checks')) {
        response = "We offer rain checks for out-of-stock sale items. Please ask a store associate for details.";
    } else if (userInput.toLowerCase().includes('store events')) {
        response = "We host various store events. Check our website or in-store bulletin board for details.";
    } else if (userInput.toLowerCase().includes('price matching')) {
        response = "We offer price matching on certain items. Please ask a store associate for more information.";
    }
    // Special requests
    else if (userInput.toLowerCase().includes('bulk order') || userInput.toLowerCase().includes('special order')) {
        response = "Yes, we can accommodate bulk orders. Please contact our customer service for more information.";
    } else if (userInput.toLowerCase().includes('gluten-free') || userInput.toLowerCase().includes('vegan products')) {
        response = "We have a variety of gluten-free and vegan products. Check our store sections or ask a staff member for assistance.";
    } else if (userInput.toLowerCase().includes('party platters')) {
        response = "We offer a selection of party platters. Please contact our deli department for more details.";
    } else if (userInput.toLowerCase().includes('custom cakes')) {
        response = "Our bakery can make custom cakes for any occasion. Please place your order in advance.";
    } else if (userInput.toLowerCase().includes('catering')) {
        response = "We offer catering services for events. Please contact our catering department for more information.";
    } else if (userInput.toLowerCase().includes('special diet')) {
        response = "We have products for various dietary needs. Please specify your requirements, and I can provide more details.";
    } else if (userInput.toLowerCase().includes('kosher')) {
        response = "We carry a selection of kosher products. Check our store sections or ask a staff member for assistance.";
    } else if (userInput.toLowerCase().includes('halal')) {
        response = "We offer halal meat and other products. Please check our store sections or ask a staff member for assistance.";
    } else if (userInput.toLowerCase().includes('low carb')) {
        response = "We have a variety of low carb products. Check our store sections or ask a staff member for assistance.";
    } else if (userInput.toLowerCase().includes('low fat')) {
        response = "We offer a selection of low fat products. Check our store sections or ask a staff member for assistance.";
    }
    // Miscellaneous
    else if (userInput.toLowerCase().includes('cooking classes') || userInput.toLowerCase().includes('events')) {
        response = "We offer cooking classes and events. Please visit our website or contact customer service for more information.";
    } else if (userInput.toLowerCase().includes('recipe')) {
        response = "We have a collection of recipes available on our website. Please specify the ingredients, and I can suggest a recipe.";
    } else if (userInput.toLowerCase().includes('nutrition')) {
        response = "Our nutrition information is available on our website or on the product packaging.";
    } else if (userInput.toLowerCase().includes('newsletter')) {
        response = "Sign up for our newsletter on our website to receive updates on promotions and events.";
    } else if (userInput.toLowerCase().includes('job openings')) {
        response = "We are always looking for new team members. Please visit our careers page on our website for current job openings.";
    } else if (userInput.toLowerCase().includes('recycling')) {
        response = "We have recycling bins available for your convenience.";
    } else if (userInput.toLowerCase().includes('donations')) {
        response = "We support various local charities. Please contact our community relations team for more information.";
    } else if (userInput.toLowerCase().includes('feedback')) {
        response = "We value your feedback. Please fill out our online survey or contact customer service.";
    } else if (userInput.toLowerCase().includes('allergies')) {
        response = "Please check product labels for allergy information, or ask a store associate for assistance.";
    } else if (userInput.toLowerCase().includes('store map')) {
        response = "You can find a store map at the entrance or ask a store associate for directions.";
    } else if (userInput.toLowerCase().includes('gift wrapping')) {
        response = "We offer gift wrapping services for a small fee. Please ask at the customer service desk.";
    } else if (userInput.toLowerCase().includes('self-checkout')) {
        response = "We have self-checkout kiosks available for your convenience.";
    } else if (userInput.toLowerCase().includes('pharmacy hours')) {
        response = "Our pharmacy is open from 9 AM to 9 PM every day.";
    } else if (userInput.toLowerCase().includes('fuel rewards')) {
        response = "Our fuel rewards program offers discounts on gas with qualifying purchases. Ask a store associate for more details.";
    } else if (userInput.toLowerCase().includes('wine')) {
        response = "We have a selection of wines in our beverage section.";
    } else if (userInput.toLowerCase().includes('beer')) {
        response = "We offer a variety of beers, including craft and imported options.";
    } else if (userInput.toLowerCase().includes('sushi')) {
        response = "Our deli section offers freshly made sushi.";
    } else if (userInput.toLowerCase().includes('prepared meals')) {
        response = "We offer a range of prepared meals in our deli section.";
    }
    // Default response for unrecognized queries
    else {
        response = "Sorry, I didn't understand that. Can you please rephrase your question?";
    }

    botMessage.innerHTML = `<p>${response}</p>`;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

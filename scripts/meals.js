
$(function() {

    // Populate using an object literal

    WTF.init({

        template: [
            "@adjective @simplename",
        ],

        heading: [
            "Don't order take away, instead lets cook",
            "Let's just settle for",
            "Set the table and prepare for",
            "Tonight we're going to cook",
            "Why not make",
        ],

        response: [
            "Give me a-nother one",
            "I don't think we will",
            "Nope",
            "That sounds terrible",
            "We ate that recently",
        ],

        simplename: [
            "Andhra Chilli Chicken",
            "Balkan Gulas",
            "Beef Chilli Con Carne",
            "Beef Kofta Curry",
            //"Beef Madras",
            "Biber Dolmasi with Shepherd's Salad",
            "Bombay Green Chicken Curry",
            "Butter Chicken",
            "Campfire Stew",
            "Cajun Chicken",
            "Chicken Chow Mein",
            "Chicken Fajitas",
            //"Chicken Ghassi",
            "Chicken Gyros",
            "Chicken in Black Bean Sauce",
            //"Chicken Kaukswe",
            "Chicken Quesadilla",
            "Chicken Stir Fry",
            "Chicken Tikka Masala",
            "Chicken with Cashew Nuts",
            "Chipotle Chicken",
            "Dopiaza",
            "Firebird Chicken",
            "General Tsao's Chicken",
            "Jalfrezi Chicken",
            "Karahi Chicken",
            //"Kheema Mutter",
            //"Malai Chicken",
            "Mangalore Chicken Sukka",
            //"Mangalorean Tomato and Beef Curry",
            "Mexican Birria with Chipotle Salsa",
            "Penne Arabiatta",
            "Pork Adobo",
            "Pork Stir Fry",
            "Pork Vindaloo",
            "Roast Dinner",
            "Satay Chicken",
            "Shakshouka",
            "Singapore Noodles",
            "Spaghetti Carbonara",
            "Spicy Butternut Squash Soup",
            //"Spicy Pork and Parsnip Stew",
            "Stuffed Peppers",
            //"Tandoori Spatchcock Poussin",
            "Thai Green Curry",
            "Thai Pork Salad",
            "Thai Red Curry",
            "Tikka Kebabs",
            "Turkey Burgers",
            "Vegan Nasi Goreng",
        ],

        adjective: [
            "appealing",
            "appetising",
            "charming",
            "delectable",
            "delightful",
            "enchanting",
            "enjoyable",
            "fit for a king",
            "lovely",
            "luscious",
            "mouth-watering",
            "pleasant",
            "scrumptious",
            "tasty",
            "wonderful",
            "yummy",
        ],

    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
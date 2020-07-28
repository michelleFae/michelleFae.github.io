// constant to store all the questions and answers
const questions = {
  question0: {
    question: "Would you enjoy reconciling conflicting directives from various individuals and offices in both Washington DC and your host country?",
    option0: {
      type: "string",
      content: "This is very uninteresting. Definintely not.",
      personality: "Public Diplomacy",
      pointsGained: -4,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: -2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. Reconciling conflicts seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to do this. Conflict Resolution is very interesting and is right up my ally",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    }
  },
question1: {
    question: "Would you be interested in organizing a press conference for your Ambassador or for a visiting Assistant Secretary who is in charge of the region where your diplomatic mission is located?",
    option0: {
      type: "string",
      content: "This is very uninteresting. Definintely not.",
      personality: "Public Diplomacy",
      pointsGained: -4,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: -2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. I would like to make use of my organizational skills!",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to do this. Putting together a press conference for my Ambassador as well as visiting ones would be extremely fun!",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    }
  },
  question2: {
    question: "How willing would you be to develop and run safety, health, and wellness programming for the Embassy workforce and their families as well as recieving feedback and adjusting programs to best serve a majority of staff?",
    option0: {
      type: "string",
      content: "This is very uninteresting. Definintely not.",
      personality: "Management Affairs",
      pointsGained: -4,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: -2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this! Working on and improving health and safety programs seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to do this! I believe I would extremely enjoy and be able to effectively develop such programs!",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    }
  },
  question3: {
    question: "Would you enjoy working extra hours to set up logistical arrangements – including transportation, baggage, security, meals, and communications?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Public Diplomacy",
      pointsGained: -4,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: -2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to do this. I'd be a great fit for this!",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    }
  }
};

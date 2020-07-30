const maxScores = {
  "Consular Affairs":80,
  "Economic Affairs":80,
  "Management Affairs":71,
  "Political Affairs":80,
   "Public Diplomacy":72,  
}

// constant to store all the questions and answers
const questions = {
  question0: {
    question: "Would you enjoy reconciling conflicting directives from various individuals and offices in both Washington DC and your host country?",
    option0: {
      type: "string",
      content: "This is very uninteresting. Definintely not.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 1,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. Reconciling conflicts seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 3,
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
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 1,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. I would like to make use of my organizational skills!",
      personality: "Public Diplomacy",
      pointsGained: 3,
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
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this! Working on and improving health and safety programs seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to do this! I believe I would extremely enjoy and be able to effectively develop such programs!",
      personality: "Management Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question3: {
    question: "Would you be alright with working extra hours to set up logistical arrangements - including transportation, baggage, security, meals, and communications - coordinating with all Embassy sections for Congressional representatives and Presidential, Secretary of State, and other VIP delegations visiting your host country?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to put in those extra hours in order to manage things. I'd be a great fit for this!",
      personality: "Management Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
    question4: {
    question: "Would you be comfortable with negotiating with a foreign government on reciprocal work agreements and diplomatic privileges and immunities for U.S. diplomats working at the U.S. Embassy in your assigned foreign country?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to do this. Negotiating is very fun & interesting!",
      personality: "Management Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
    question5: {
    question: "Working as part of a team that includes representatives from other U.S. government agencies, would you like to serve as the Embassy’s point person organizing all details of an American senior official’s visit to your host nation to discuss bilateral cooperation on cybersecurity, including proposals for meetings, seating charts, and briefing books?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting. I definintely do not see myself as the Embassy’s point person.",
      personality:"Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to be the Embassy’s point person and would be a great fit for this!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
    question6: {
    question: "Does this sound like something you would like to help out with: Working with Washington, organize an official team and head toward an area devastated by a hurricane to assist and/or evacuate U.S. citizens trapped there. With sensitivity, notify relatives of the death of an American citizen abroad.",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question7: {
    question: "Does this sound like something you would like to do: Liaise with working-level staff of the U.S. Trade Representative’s Office in Washington to stay up-to-date on trade agreements between the U.S. and your host country. Discuss their status with foreign officials and advocate for full implementation.",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question8: {
    question: "Does this sound like something you would like to partake in:Serve as the lifeline to U.S. citizens in distress overseas, being ‘on call’ 24/7, and helping them navigate through routine situations like passport renewals and/or absentee voting to emergency situations like child abduction and/or the death of a loved one.",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question9: {
    question: "Does this sound like something you would like to help out with: Develop fisheries sector contacts and tour a shrimping fleet in foreign waters to monitor use of turtle-excluder devices, which safeguard wildlife. Write a detailed report on your findings under a tight deadline for Washington policymakers.",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question10: {
    question: "Even if you have no interest in sports or athletic ability, would you like to work with American professional athletes to promote American foreign policy goals through sport?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Public Diplomacy",
      pointsGained: 8,
      isRequired: false
    }
  },
  question11: {
    question: "Would you be keen to develop a plan to oversee recruitment and hiring of qualified local candidates - IT technicians, facilities and maintenance workers, warehouse personnel, and cleaning staff -- to fill a variety of positions throughout a U.S. Embassy in a foreign country?",
    option0: {
      type: "string", 
      content: "Definintely not - this doesn't seem like the right task for me.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 1,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 3,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    }
  },
  question12: {
    question: "Would you be willing to coordinate with other embassies and international organizations on salary and benefits for local employees, ensuring the U.S. is competitive in the local labor market?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 1,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 3,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    }
  },
  question13: {
    question: "Would you like to visit U.S. citizens in foreign prisons, check on their welfare, ensure they receive fair treatment and are not subject to physical or mental abuse? According to privacy guidelines, would you also be willing to communicate with their families in the United States?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out U.S. prisioners in foreign countries! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question14: {
    question: "In the process of reconciling differences of opinion among individuals and offices in Washington DC and your overseas location, would you like to plan and implement a schedule for a Congressional delegation that is visiting to learn more about the host nation’s position in the shifting geopolitical balance of the region?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question15: {
    question: "Using foreign language skills as well as a nuanced understanding of local culture, tradition, and values, would you like to plan and implement public events in your host nation that showcase American culture?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Public Diplomacy",
      pointsGained: 8,
      isRequired: false
    }
  },
  question16: {
    question: "Using foreign language and interpersonal skills, would you like to develop contacts within host nation media circles to promote freedom of the press and U.S. foreign policy goals?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Public Diplomacy",
      pointsGained: 8,
      isRequired: false
    }
  },
  question17: {
    question: "Does this sound like something you would like to help out with: Using your foreign language skills, manage local employees to provide administrative, performance evaluation, budget support, or human resource advice for all offices and agencies represented at a U.S. Embassy in a foreign country.",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Management Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question18: {
    question: "Would you consider working with colleagues from the Department of Defense to ensure a military ally’s implementation of a Status of Forces Agreement, at times reconciling differences of opinion—both with the host nation and among American colleagues—on specific elements of that agreement?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question19: {
    question: "Would you like to analyze and write about a foreign central bank’s management of the national currency for official Washington audiences? Would you also look forward to discussing how it will affect the country’s trade and investment and describing the potential impact on U.S. interests?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question20: {
    question: "Recognizing that you may be the first, and possibly only, U.S. citizen a foreign national will ever meet, would you like to build trust and -- using your foreign language skills -- convince him/her to share extensive personal information with you so that you can determine if s/he is a threat to U.S. national security?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question21: {
    question: "Would you like to use U.S. immigration law to facilitate legitimate travel to the United States of foreign investors bringing dollars and jobs to American communities with high unemployment?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question22: {
    question: "Working with counterparts at the United Nations who may or may not be supportive, would you be able to ensure that U.S. foreign policy interests are met through the implementation of resolutions on issues ranging from multilateral sanctions to humanitarian aid?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question23: {
    question: "Would you be willing to carefully monitor political unrest in a foreign country that might be a threat to traveling American citizens and report your findings to Washington and the public via punchy announcements and advisories?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question24: {
    question: "How interesting of a job does this sound to you: quickly drafting a paragraph-long synopsis of the sudden resignation of a Cabinet minister in the host country where you serve, to provide Washington with an insight into how that development will affect bilateral relations—then turn that paragraph into a two-page cable that will serve as a record of your Embassy’s recommended course of action.",
    option0: {
      type: "string", 
      content: "This sounds very uninteresting. I would definintely not want to do this.",
      personality: "Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to do this! This is a very interesting job!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question25: {
    question: "Using foreign language skills, including sensitivity to local dialects, would you be able to assess a host nation’s adherence to universal human rights principles by meeting with NGOs, human rights activists, and government officials?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question26: {
    question: "Would be interested in using the latest security technology and your instincts to stop a suspected terrorist before s/he can even get on a plane destined for the United States?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question27: {
    question: "Would you like to work collaboratively with the Department of Homeland Security to ensure a reformed ‘bad boy’ -- now Best Actor nominee -- receives a travel waiver so he can arrive at the Academy Awards on time?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question28: {
    question: "Would you be willing to monitor the U.S. unemployment and GDP growth rates? Additionally, using your foreign language skills, would you like to explain the U.S. economic context to foreign government officials and entrepreneurs?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question29: {
    question: "Would you like to draft - and re-draft after colleagues’ edits -- a speech in a foreign language for your boss to deliver to foreign financial audiences advocating for U.S. trade and economic policies and explaining their impact on the world?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question30: {
    question: "Would you like to ensure compliance with regulations, fair treatment, and objective dispute resolution as you chair the committee that assigns housing for American employees at an Embassy?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Management Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question31: {
    question: "Would you like to improve the operational effectiveness of an Embassy through innovation and effective management of information technology infrastructure and physical plant space allocations? Would you also like to manage conflicts and resolve urgent demands from multiple offices and agencies in the process?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Management Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question32: {
    question: "At times on extremely short notice, with several other big projects you need to complete by day’s end, would you be willing to take notes at a meeting between your Ambassador and a host nation’s Foreign Minister on coordinated contributions to a UN peacekeeping effort, then draft a same-day written summary of that meeting for the Ambassador’s review?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question33: {
    question: "Would you like to convince local media outlets to publish an op-ed promoting U.S. foreign policy goals that you have drafted under your Ambassador’s name—regardless of your own personal opinion on the matter?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Public Diplomacy",
      pointsGained: 8,
      isRequired: false
    }
  },
  question34: {
    question: "Would you like to play an integral role in negotiating adoption regulations, advocating for laws that will help orphaned children find a forever family in the U.S.?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question35: {
    question: "Would you like to work with Department of Homeland Security colleagues to determine qualifications of members of a religious minority seeking asylum and, according to applicable law and regulations, assist families to flee an oppressive homeland for successful resettlement in another country?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Consular Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Consular Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Consular Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Consular Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Consular Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question36: {
    question: "Would you like to use your foreign language skills to call your host nation’s Foreign Ministry and make an appointment so that you can deliver a demarche to your counterpart on religious freedom and human rights—who may or may not be supportive of American values and initiatives?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question37: {
    question: "Would you enjoy overseeing implementation of the Fulbright Program, which promotes educational and cultural exchange between the United States and foreign nations, both by applying existing methods as well as by devising new, creative ones that help realize U.S. foreign policy goals?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Public Diplomacy",
      pointsGained: 8,
      isRequired: false
    }
  },
  question38: {
    question: "Would you like to serve as the Chief Financial Officer of a U.S. Embassy in a foreign country, overseeing a multi-million dollar budget?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Management Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question39: {
    question: "Using technical skills or directing staff with necessary skillsets, would you be interested in creating attractive postings that will direct traffic to and increase public interaction with the U.S. Embassy’s social media accounts?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Public Diplomacy",
      pointsGained: 8,
      isRequired: false
    }
  },
  question40: {
    question: "Would you like to research, internalize, and concisely explain, orally and in writing, complex industrial regulations -- including a foreign country’s proposed carbon cap-and-trade and emissions tax schemes -- so a non-expert can grasp their intent and effect?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question41: {
    question: "Would you enjoy explaining approved U.S. sanctions policy in detail to foreign officials and urge their formal support for potentially controversial economic sanctions that are in the U.S. interest, regardless of your personal opinion?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question42: {
    question: "Using perspectives from your contacts in the business community, your host nation’s government, and foreign-language media reports, would you be willing to research and analyze imminent international mergers and acquisitions that impact U.S. markets?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 1,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 3,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    }
  },
  question43: {
    question: "Would you like to brief senior Embassy officials on their economic effect and foreign regulatory review status?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 1,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 3,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    }
  },
  question44: {
    question: "Would you like to coordinate with colleagues in the U.S. Foreign Commercial Service at a U.S. Embassy in a foreign country to develop programs that promote American goods and services exports and encourage foreign entrepreneurs to invest in the United States?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question45: {
    question: "Would you like to work with your colleagues to arrange a speaking tour for a premier American agricultural expert in a foreign country? Would you also like to coordinate to locate venues, and publicize the events? Would you also like to draft opening remarks and, using your foreign language skills, introduce the expert at the events?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Economic Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Economic Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Economic Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Economic Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Economic Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question46: {
    question: "Would you like to draft and re-draft, several times, an annual report on labor conditions in a host nation, including issues such as workers’ rights and child labor?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question47: {
    question: "Would you like to work with your supervisor to foster strong work relationships and high morale within a multinational labor force by implementing professional development programs and training opportunities for the largest group of local employees in a U.S. Embassy?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Management Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Management Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Management Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Management Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Management Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question48: {
    question: "Would you be willing to widely and transparently enlist the support of the Embassy community, including diplomats’ family members, in an ongoing program to deliver speeches and presentations to foreign audiences about American values and policy issues?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Public Diplomacy",
      pointsGained: 8,
      isRequired: false
    }
  },
  question49: {
    question: "Relying on perspectives from contacts you have developed within your host nation’s legislative branch and bureaucracy, as well as foreign-language media reports, would you be able to obtain an accurate picture of political dynamics following a local election and orally brief your Ambassador on how those dynamics may affect U.S. foreign policy interests?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Political Affairs",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Political Affairs",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Political Affairs",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Political Affairs",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Political Affairs",
      pointsGained: 8,
      isRequired: false
    }
  },
  question50: {
    question: "Would you like to manage diverging opinions at an Embassy-wide meeting to select future leaders from various fields (political, economic, cultural, judicial, education, law enforcement, etc.) in your host country who will participate in a weeks-long study tour in the United States, then follow-up with alumni of this program upon their return to encourage continued advancement of U.S. foreign policy goals?",
    option0: {
      type: "string", 
      content: "Definintely not - this sounds very uninteresting.",
      personality: "Public Diplomacy",
      pointsGained: 0,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "This is uninteresting. I'd rather spend my time doing some other task.",
      personality: "Public Diplomacy",
      pointsGained: 2,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I am neutral towards doing this. I don't mind doing this, but wouldn't mind doing something else either.",
      personality: "Public Diplomacy",
      pointsGained: 4,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
        "I would like to do this. It seems quite interesting!",
      personality: "Public Diplomacy",
      pointsGained: 6,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "I would LOVE to help out in this way! This is a very interesting task!",
      personality: "Public Diplomacy",
      pointsGained: 8,
      isRequired: false
    }
  }
};

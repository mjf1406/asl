export type Category =
    | "Classroom Management"
    | "Requests"
    | "Responses / Actions"
    | "General / Miscellaneous"
    | "Learning Levels"
    | "Emotions & Social-Emotional Signs"
    | "Encouragement & Connection"
    | "Points"
    | "SEL"
    | "Time & Sequence";

export type Sign = {
    id: number;
    sign: string;
    meaning: string;
    category: Category;
    author: string;
    author_links: string[];
};

export const signs: Sign[] = [
    {
      id: 26,
      sign: "Answer",
      meaning: "Answer",
      category: "Responses / Actions",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 5,
      sign: "Be Quiet",
      meaning: "Be Quiet",
      category: "Classroom Management",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 13,
      sign: "Continue",
      meaning: "Continue",
      category: "Encouragement & Connection",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 32,
      sign: "Done",
      meaning: "Done",
      category: "Responses / Actions",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 6,
      sign: "Focus",
      meaning: "Focus",
      category: "Classroom Management",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 10,
      sign: "Friend",
      meaning: "Friend",
      category: "Encouragement & Connection",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 25,
      sign: "Go Away",
      meaning: "Go Away",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 8,
      sign: "Good Job",
      meaning: "Good Job",
      category: "Encouragement & Connection",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 18,
      sign: "Help",
      meaning: "Help",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 9,
      sign: "I Love You",
      meaning: "I Love You",
      category: "Encouragement & Connection",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 34,
      sign: "I'm Sorry",
      meaning: "I'm Sorry",
      category: "SEL",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 11,
      sign: "Me Too",
      meaning: "Me Too",
      category: "Encouragement & Connection",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 15,
      sign: "Minus",
      meaning: "Minus",
      category: "Points",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 30,
      sign: "No",
      meaning: "No",
      category: "Responses / Actions",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 7,
      sign: "Pay Attention",
      meaning: "Pay Attention",
      category: "Classroom Management",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 20,
      sign: "Pencil",
      meaning: "Pencil",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 14,
      sign: "Please",
      meaning: "Please",
      category: "General / Miscellaneous",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 16,
      sign: "Plus",
      meaning: "Plus",
      category: "Points",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 17,
      sign: "Points",
      meaning: "Points",
      category: "Points",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 28,
      sign: "Question",
      meaning: "Question",
      category: "Responses / Actions",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 37,
      sign: "Share",
      meaning: "Share",
      category: "Classroom Management",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 27,
      sign: "Show Me",
      meaning: "Show Me",
      category: "Responses / Actions",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 4,
      sign: "Silence",
      meaning: "Silence",
      category: "Classroom Management",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 2,
      sign: "Sit",
      meaning: "Sit",
      category: "Classroom Management",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 3,
      sign: "Stand",
      meaning: "Stand",
      category: "Classroom Management",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 1,
      sign: "Stop",
      meaning: "Stop",
      category: "Classroom Management",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 24,
      sign: "Take a Break",
      meaning: "Take a Break",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 35,
      sign: "Thank You",
      meaning: "Thank You",
      category: "SEL",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 21,
      sign: "Tissue",
      meaning: "Tissue",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 36,
      sign: "Together",
      meaning: "Together",
      category: "Classroom Management",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 22,
      sign: "Toilet",
      meaning: "Toilet",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 31,
      sign: "Try",
      meaning: "Try",
      category: "Responses / Actions",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 23,
      sign: "Wash",
      meaning: "Wash",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 19,
      sign: "Water",
      meaning: "Water",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 33,
      sign: "Work",
      meaning: "Work",
      category: "Responses / Actions",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 29,
      sign: "Yes",
      meaning: "Yes",
      category: "Responses / Actions",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 12,
      sign: "You're Welcome",
      meaning: "You're Welcome",
      category: "Encouragement & Connection",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 82,
      sign: "Left",
      meaning: "Left",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 83,
      sign: "Right",
      meaning: "Right",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 78,
      sign: "Wait",
      meaning: "Wait",
      category: "Time & Sequence",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 40,
      sign: "More",
      meaning: "More",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 39,
      sign: "Snack",
      meaning: "Snack",
      category: "Requests",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 41,
      sign: "Time",
      meaning: "Time",
      category: "General / Miscellaneous",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 65,
      sign: "Hurt",
      meaning: "Hurt",
      category: "General / Miscellaneous",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
      id: 77,
      sign: "Now",
      meaning: "Now",
      category: "Time & Sequence",
      author: "Ekaraksasa",
      author_links: ["https://www.fiverr.com/ekaraksasa"]
    }
  ];
  
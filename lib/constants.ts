export type Category =
    | "Classroom Management"
    | "Requests"
    | "Responses/Actions"
    | "Learning Levels"
    | "Emotions & Social-Emotional Signs"
    | "Encouragement & Connection"
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
        id: 1,
        sign: "drawing",
        meaning: "Stop",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"],
    },
    {
        id: 2,
        sign: "sit",
        meaning: "Sit",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 3,
        sign: "stand",
        meaning: "Stand",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 4,
        sign: "sit-old",
        meaning: "Line Up",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 5,
        sign: "answer-new",
        meaning: "Clean Up",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 6,
        sign: "silence",
        meaning: "Silence",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 7,
        sign: "hand-point-up-solid",
        meaning: "Be Quiet",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 8,
        sign: "hand-clapping-solid",
        meaning: "Together",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 9,
        sign: "hand-praying-solid",
        meaning: "Focus/Pay Attention",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 10,
        sign: "hand-solid",
        meaning: "Raise Hand",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 11,
        sign: "answer-again",
        meaning: "Ready",
        category: "Classroom Management",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },

    {
        id: 12,
        sign: "hands-helping-solid",
        meaning: "Help",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 13,
        sign: "glass-water-solid",
        meaning: "Water",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 14,
        sign: "pencil-solid",
        meaning: "Pencil",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 15,
        sign: "tissue",
        meaning: "Tissue",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 16,
        sign: "toilet",
        meaning: "Toilet",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 17,
        sign: "wash",
        meaning: "Wash",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 18,
        sign: "apple-whole-solid",
        meaning: "Snack",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 19,
        sign: "clock-solid",
        meaning: "More Time",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 20,
        sign: "answer-old",
        meaning: "Break",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 21,
        sign: "person-walking-arrow-right-solid",
        meaning: "Go Away Please",
        category: "Requests",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },

    {
        id: 22,
        sign: "answer",
        meaning: "Answer",
        category: "Responses/Actions",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 23,
        sign: "hand-point-up-solid",
        meaning: "Show Me",
        category: "Responses/Actions",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 24,
        sign: "circle-question-solid",
        meaning: "Question",
        category: "Responses/Actions",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 25,
        sign: "yes",
        meaning: "Yes",
        category: "Responses/Actions",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 26,
        sign: "xmark-solid",
        meaning: "No",
        category: "Responses/Actions",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 27,
        sign: "rotate-right-solid",
        meaning: "Try Again",
        category: "Responses/Actions",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 28,
        sign: "flag-checkered-solid",
        meaning: "Finished",
        category: "Responses/Actions",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 29,
        sign: "check-to-slot-solid",
        meaning: "Done",
        category: "Responses/Actions",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 30,
        sign: "briefcase-solid",
        meaning: "Work",
        category: "Responses/Actions",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },

    {
        id: 31,
        sign: "star-solid",
        meaning: "Easy",
        category: "Learning Levels",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 32,
        sign: "star-half-stroke-solid",
        meaning: "Medium",
        category: "Learning Levels",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 33,
        sign: "stars-solid",
        meaning: "Hard",
        category: "Learning Levels",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 34,
        sign: "minus-solid",
        meaning: "So-So",
        category: "Learning Levels",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },

    {
        id: 35,
        sign: "face-smile-solid",
        meaning: "Happy",
        category: "Emotions & Social-Emotional Signs",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 36,
        sign: "face-sad-tear-solid",
        meaning: "Sad",
        category: "Emotions & Social-Emotional Signs",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 37,
        sign: "heart-crack-solid",
        meaning: "I'm Sorry",
        category: "Emotions & Social-Emotional Signs",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 38,
        sign: "hands-clapping-solid",
        meaning: "Thank You",
        category: "Emotions & Social-Emotional Signs",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 39,
        sign: "face-grin-stars-solid",
        meaning: "Excited",
        category: "Emotions & Social-Emotional Signs",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 40,
        sign: "hand-peace-solid",
        meaning: "Calm Down",
        category: "Emotions & Social-Emotional Signs",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 41,
        sign: "face-confused-solid",
        meaning: "Confused",
        category: "Emotions & Social-Emotional Signs",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 42,
        sign: "face-tired-solid",
        meaning: "Tired",
        category: "Emotions & Social-Emotional Signs",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 43,
        sign: "face-angry-solid",
        meaning: "Frustrated",
        category: "Emotions & Social-Emotional Signs",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },

    {
        id: 44,
        sign: "thumbs-up-solid",
        meaning: "Good Job",
        category: "Encouragement & Connection",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 45,
        sign: "heart-solid",
        meaning: "I Love You",
        category: "Encouragement & Connection",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 46,
        sign: "user-group-solid",
        meaning: "Friend",
        category: "Encouragement & Connection",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 47,
        sign: "hand-point-right-solid",
        meaning: "Me Too",
        category: "Encouragement & Connection",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 48,
        sign: "hands-holding-solid",
        meaning: "You're Welcome",
        category: "Encouragement & Connection",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },

    {
        id: 49,
        sign: "clock-rotate-left-solid",
        meaning: "Now",
        category: "Time & Sequence",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 50,
        sign: "hourglass-solid",
        meaning: "Wait",
        category: "Time & Sequence",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 51,
        sign: "No1",
        meaning: "TEST - No1",
        category: "Time & Sequence",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
    {
        id: 52,
        sign: "No2",
        meaning: "TEST - No2",
        category: "Time & Sequence",
        author: "Ekaraksasa",
        author_links: ["https://www.fiverr.com/ekaraksasa"]
    },
];

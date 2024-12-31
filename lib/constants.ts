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
        author: "Michael Fitzgerald",
        author_links: ["https://mr-monkey-portfolio.vercel.app/", "https://www.linkedin.com/in/mfitz06/"],
    },
    {
        id: 2,
        sign: "sit",
        meaning: "Sit",
        category: "Classroom Management",
        author: "Umair Ad",
        author_links: ["https://www.fiverr.com/solutionsstudio"]
    },
    {
        id: 3,
        sign: "stand",
        meaning: "Stand",
        category: "Classroom Management",
        author: "",
        author_links: []
    },
    {
        id: 4,
        sign: "sit-old",
        meaning: "Line Up",
        category: "Classroom Management",
        author: "",
        author_links: []
    },
    {
        id: 5,
        sign: "answer-new",
        meaning: "Clean Up",
        category: "Classroom Management",
        author: "",
        author_links: []
    },
    {
        id: 6,
        sign: "silence",
        meaning: "Silence",
        category: "Classroom Management",
        author: "",
        author_links: []
    },
    {
        id: 7,
        sign: "hand-point-up-solid",
        meaning: "Be Quiet",
        category: "Classroom Management",
        author: "",
        author_links: []
    },
    {
        id: 8,
        sign: "hand-clapping-solid",
        meaning: "Together",
        category: "Classroom Management",
        author: "",
        author_links: []
    },
    {
        id: 9,
        sign: "hand-praying-solid",
        meaning: "Focus/Pay Attention",
        category: "Classroom Management",
        author: "",
        author_links: []
    },
    {
        id: 10,
        sign: "hand-solid",
        meaning: "Raise Hand",
        category: "Classroom Management",
        author: "",
        author_links: []
    },
    {
        id: 11,
        sign: "answer-again",
        meaning: "Ready",
        category: "Classroom Management",
        author: "",
        author_links: []
    },

    {
        id: 12,
        sign: "hands-helping-solid",
        meaning: "Help",
        category: "Requests",
        author: "",
        author_links: []
    },
    {
        id: 13,
        sign: "glass-water-solid",
        meaning: "Water",
        category: "Requests",
        author: "",
        author_links: []
    },
    {
        id: 14,
        sign: "pencil-solid",
        meaning: "Pencil",
        category: "Requests",
        author: "",
        author_links: []
    },
    {
        id: 15,
        sign: "tissue",
        meaning: "Tissue",
        category: "Requests",
        author: "Umair Ad",
        author_links: ["https://www.fiverr.com/solutionsstudio"]
    },
    {
        id: 16,
        sign: "toilet",
        meaning: "Toilet",
        category: "Requests",
        author: "Umair Ad",
        author_links: ["https://www.fiverr.com/solutionsstudio"]
    },
    {
        id: 17,
        sign: "wash",
        meaning: "Wash",
        category: "Requests",
        author: "Umair Ad",
        author_links: ["https://www.fiverr.com/solutionsstudio"]
    },
    {
        id: 18,
        sign: "apple-whole-solid",
        meaning: "Snack",
        category: "Requests",
        author: "",
        author_links: []
    },
    {
        id: 19,
        sign: "clock-solid",
        meaning: "More Time",
        category: "Requests",
        author: "",
        author_links: []
    },
    {
        id: 20,
        sign: "answer-old",
        meaning: "Break",
        category: "Requests",
        author: "",
        author_links: []
    },
    {
        id: 21,
        sign: "person-walking-arrow-right-solid",
        meaning: "Go Away Please",
        category: "Requests",
        author: "",
        author_links: []
    },

    {
        id: 22,
        sign: "answer",
        meaning: "Answer",
        category: "Responses/Actions",
        author: "Umair Ad",
        author_links: ["https://www.fiverr.com/solutionsstudio"]
    },
    {
        id: 23,
        sign: "hand-point-up-solid",
        meaning: "Show Me",
        category: "Responses/Actions",
        author: "",
        author_links: []
    },
    {
        id: 24,
        sign: "circle-question-solid",
        meaning: "Question",
        category: "Responses/Actions",
        author: "",
        author_links: []
    },
    {
        id: 25,
        sign: "yes",
        meaning: "Yes",
        category: "Responses/Actions",
        author: "Umair Ad",
        author_links: ["https://www.fiverr.com/solutionsstudio"]
    },
    {
        id: 26,
        sign: "xmark-solid",
        meaning: "No",
        category: "Responses/Actions",
        author: "",
        author_links: []
    },
    {
        id: 27,
        sign: "rotate-right-solid",
        meaning: "Try Again",
        category: "Responses/Actions",
        author: "",
        author_links: []
    },
    {
        id: 28,
        sign: "flag-checkered-solid",
        meaning: "Finished",
        category: "Responses/Actions",
        author: "",
        author_links: []
    },
    {
        id: 29,
        sign: "check-to-slot-solid",
        meaning: "Done",
        category: "Responses/Actions",
        author: "",
        author_links: []
    },
    {
        id: 30,
        sign: "briefcase-solid",
        meaning: "Work",
        category: "Responses/Actions",
        author: "",
        author_links: []
    },

    {
        id: 31,
        sign: "star-solid",
        meaning: "Easy",
        category: "Learning Levels",
        author: "",
        author_links: []
    },
    {
        id: 32,
        sign: "star-half-stroke-solid",
        meaning: "Medium",
        category: "Learning Levels",
        author: "",
        author_links: []
    },
    {
        id: 33,
        sign: "stars-solid",
        meaning: "Hard",
        category: "Learning Levels",
        author: "",
        author_links: []
    },
    {
        id: 34,
        sign: "minus-solid",
        meaning: "So-So",
        category: "Learning Levels",
        author: "",
        author_links: []
    },

    {
        id: 35,
        sign: "face-smile-solid",
        meaning: "Happy",
        category: "Emotions & Social-Emotional Signs",
        author: "",
        author_links: []
    },
    {
        id: 36,
        sign: "face-sad-tear-solid",
        meaning: "Sad",
        category: "Emotions & Social-Emotional Signs",
        author: "",
        author_links: []
    },
    {
        id: 37,
        sign: "heart-crack-solid",
        meaning: "I'm Sorry",
        category: "Emotions & Social-Emotional Signs",
        author: "",
        author_links: []
    },
    {
        id: 38,
        sign: "hands-clapping-solid",
        meaning: "Thank You",
        category: "Emotions & Social-Emotional Signs",
        author: "",
        author_links: []
    },
    {
        id: 39,
        sign: "face-grin-stars-solid",
        meaning: "Excited",
        category: "Emotions & Social-Emotional Signs",
        author: "",
        author_links: []
    },
    {
        id: 40,
        sign: "hand-peace-solid",
        meaning: "Calm Down",
        category: "Emotions & Social-Emotional Signs",
        author: "",
        author_links: []
    },
    {
        id: 41,
        sign: "face-confused-solid",
        meaning: "Confused",
        category: "Emotions & Social-Emotional Signs",
        author: "",
        author_links: []
    },
    {
        id: 42,
        sign: "face-tired-solid",
        meaning: "Tired",
        category: "Emotions & Social-Emotional Signs",
        author: "",
        author_links: []
    },
    {
        id: 43,
        sign: "face-angry-solid",
        meaning: "Frustrated",
        category: "Emotions & Social-Emotional Signs",
        author: "",
        author_links: []
    },

    {
        id: 44,
        sign: "thumbs-up-solid",
        meaning: "Good Job",
        category: "Encouragement & Connection",
        author: "",
        author_links: []
    },
    {
        id: 45,
        sign: "heart-solid",
        meaning: "I Love You",
        category: "Encouragement & Connection",
        author: "",
        author_links: []
    },
    {
        id: 46,
        sign: "user-group-solid",
        meaning: "Friend",
        category: "Encouragement & Connection",
        author: "",
        author_links: []
    },
    {
        id: 47,
        sign: "hand-point-right-solid",
        meaning: "Me Too",
        category: "Encouragement & Connection",
        author: "",
        author_links: []
    },
    {
        id: 48,
        sign: "hands-holding-solid",
        meaning: "You're Welcome",
        category: "Encouragement & Connection",
        author: "",
        author_links: []
    },

    {
        id: 49,
        sign: "clock-rotate-left-solid",
        meaning: "Now",
        category: "Time & Sequence",
        author: "",
        author_links: []
    },
    {
        id: 50,
        sign: "hourglass-solid",
        meaning: "Wait",
        category: "Time & Sequence",
        author: "",
        author_links: []
    },
];

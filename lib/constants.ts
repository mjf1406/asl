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
};
export const signs: Sign[] = [
    // Classroom Management
    {
        id: 1,
        sign: "hand-peace-solid",
        meaning: "Stop",
        category: "Classroom Management",
    },
    {
        id: 2,
        sign: "hand-scissors-solid",
        meaning: "Sit",
        category: "Classroom Management",
    },
    {
        id: 3,
        sign: "hand-spock-solid",
        meaning: "Stand",
        category: "Classroom Management",
    },
    {
        id: 4,
        sign: "people-line-solid",
        meaning: "Line Up",
        category: "Classroom Management",
    },
    {
        id: 5,
        sign: "broom-solid",
        meaning: "Clean Up",
        category: "Classroom Management",
    },
    {
        id: 6,
        sign: "volume-xmark-solid",
        meaning: "Silence",
        category: "Classroom Management",
    },
    {
        id: 7,
        sign: "hand-point-up-solid",
        meaning: "Be Quiet",
        category: "Classroom Management",
    },
    {
        id: 8,
        sign: "hand-clapping-solid",
        meaning: "Together",
        category: "Classroom Management",
    },
    {
        id: 9,
        sign: "hand-praying-solid",
        meaning: "Focus/Pay Attention",
        category: "Classroom Management",
    },
    {
        id: 10,
        sign: "hand-solid",
        meaning: "Raise Hand",
        category: "Classroom Management",
    },
    {
        id: 11,
        sign: "check-double-solid",
        meaning: "Ready",
        category: "Classroom Management",
    },

    // Requests
    {
        id: 12,
        sign: "hands-helping-solid",
        meaning: "Help",
        category: "Requests",
    },
    {
        id: 13,
        sign: "glass-water-solid",
        meaning: "Water",
        category: "Requests",
    },
    {
        id: 14,
        sign: "pencil-solid",
        meaning: "Pencil",
        category: "Requests",
    },
    {
        id: 15,
        sign: "box-tissue-solid",
        meaning: "Tissue",
        category: "Requests",
    },
    {
        id: 16,
        sign: "toilet-solid",
        meaning: "Toilet",
        category: "Requests",
    },
    {
        id: 17,
        sign: "hands-bubbles-solid",
        meaning: "Wash",
        category: "Requests",
    },
    {
        id: 18,
        sign: "apple-whole-solid",
        meaning: "Snack",
        category: "Requests",
    },
    {
        id: 19,
        sign: "clock-solid",
        meaning: "More Time",
        category: "Requests",
    },
    {
        id: 20,
        sign: "pause-solid",
        meaning: "Break",
        category: "Requests",
    },
    {
        id: 21,
        sign: "person-walking-arrow-right-solid",
        meaning: "Go Away Please",
        category: "Requests",
    },

    // Responses/Actions
    {
        id: 22,
        sign: "reply-solid",
        meaning: "Answer",
        category: "Responses/Actions",
    },
    {
        id: 23,
        sign: "hand-point-up-solid",
        meaning: "Show Me",
        category: "Responses/Actions",
    },
    {
        id: 24,
        sign: "circle-question-solid",
        meaning: "Question",
        category: "Responses/Actions",
    },
    {
        id: 25,
        sign: "check-solid",
        meaning: "Yes",
        category: "Responses/Actions",
    },
    {
        id: 26,
        sign: "xmark-solid",
        meaning: "No",
        category: "Responses/Actions",
    },
    {
        id: 27,
        sign: "rotate-right-solid",
        meaning: "Try Again",
        category: "Responses/Actions",
    },
    {
        id: 28,
        sign: "flag-checkered-solid",
        meaning: "Finished",
        category: "Responses/Actions",
    },
    {
        id: 29,
        sign: "check-to-slot-solid",
        meaning: "Done",
        category: "Responses/Actions",
    },
    {
        id: 30,
        sign: "briefcase-solid",
        meaning: "Work",
        category: "Responses/Actions",
    },

    // Learning Levels
    {
        id: 31,
        sign: "star-solid",
        meaning: "Easy",
        category: "Learning Levels",
    },
    {
        id: 32,
        sign: "star-half-stroke-solid",
        meaning: "Medium",
        category: "Learning Levels",
    },
    {
        id: 33,
        sign: "stars-solid",
        meaning: "Hard",
        category: "Learning Levels",
    },
    {
        id: 34,
        sign: "minus-solid",
        meaning: "So-So",
        category: "Learning Levels",
    },

    // Emotions & Social-Emotional Signs
    {
        id: 35,
        sign: "face-smile-solid",
        meaning: "Happy",
        category: "Emotions & Social-Emotional Signs",
    },
    {
        id: 36,
        sign: "face-sad-tear-solid",
        meaning: "Sad",
        category: "Emotions & Social-Emotional Signs",
    },
    {
        id: 37,
        sign: "heart-crack-solid",
        meaning: "I'm Sorry",
        category: "Emotions & Social-Emotional Signs",
    },
    {
        id: 38,
        sign: "hands-clapping-solid",
        meaning: "Thank You",
        category: "Emotions & Social-Emotional Signs",
    },
    {
        id: 39,
        sign: "face-grin-stars-solid",
        meaning: "Excited",
        category: "Emotions & Social-Emotional Signs",
    },
    {
        id: 40,
        sign: "hand-peace-solid",
        meaning: "Calm Down",
        category: "Emotions & Social-Emotional Signs",
    },
    {
        id: 41,
        sign: "face-confused-solid",
        meaning: "Confused",
        category: "Emotions & Social-Emotional Signs",
    },
    {
        id: 42,
        sign: "face-tired-solid",
        meaning: "Tired",
        category: "Emotions & Social-Emotional Signs",
    },
    {
        id: 43,
        sign: "face-angry-solid",
        meaning: "Frustrated",
        category: "Emotions & Social-Emotional Signs",
    },

    // Encouragement & Connection
    {
        id: 44,
        sign: "thumbs-up-solid",
        meaning: "Good Job",
        category: "Encouragement & Connection",
    },
    {
        id: 45,
        sign: "heart-solid",
        meaning: "I Love You",
        category: "Encouragement & Connection",
    },
    {
        id: 46,
        sign: "user-group-solid",
        meaning: "Friend",
        category: "Encouragement & Connection",
    },
    {
        id: 47,
        sign: "hand-point-right-solid",
        meaning: "Me Too",
        category: "Encouragement & Connection",
    },
    {
        id: 48,
        sign: "hands-holding-solid",
        meaning: "You're Welcome",
        category: "Encouragement & Connection",
    },

    // Time & Sequence
    {
        id: 49,
        sign: "clock-rotate-left-solid",
        meaning: "Now",
        category: "Time & Sequence",
    },
    {
        id: 50,
        sign: "hourglass-solid",
        meaning: "Wait",
        category: "Time & Sequence",
    },
];
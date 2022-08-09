import create from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => ({
  topics: [
    {
      id: nanoid(),
      topic: "Global state handling with React",
      author: "Best Bear",
    },
    {
      id: nanoid(),
      topic: "Connecting to a MongoDB database",
      author: "Master Mongoose",
    },
    {
      id: nanoid(),
      topic: "Snake charming for software developers",
      author: "Practical Python",
    },
  ],
  addTopic: (topic, author) => {
    set((state) => {
      return {
        topics: [
          ...state.topics,
          { id: nanoid(), topic: topic, author: author },
        ],
      };
    });
  },
}));

export { useStore };

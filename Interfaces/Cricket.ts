import { Coach } from "./Coach";

export class Cricket implements Coach {
    getDailyWorkout(): string {
        return "batting daily";
    }
}
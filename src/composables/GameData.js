import { ref } from "vue"
export default function useGame() {
    const gameData = ref([
        1, 2, 3, 4, 5
    ]);

    return {
        gameData
    }
}
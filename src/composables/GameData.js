import { ref } from "vue"
export default function useGame() {
    const gameData = ref([
        {
            title: "The Witcher",
            price: "7800",
            posterLink: "https://files.fm/thumb_show.php?i=g7mg6xmeb",
            releaseDate: "2021-22-10",
            gameSize: "20GiB",
            genre: "Adventure, First-Person, Quest",
            minimumRequirements: "GeForce GTS 450 or Intel HD 4000 or better",
            comments: [
                {
                    name: "John Doe",
                    comment: "Test Comment A"
                },
                {
                    name: "Janet Austin",
                    comment: "Test Comment B"
                },
                {
                    name: "Alex Doe",
                    comment: "Test Comment c"
                }
            ]
        },
        {
            title: "NFS Most Wanted",
            price: "1200",
            posterLink: "https://files.fm/thumb_show.php?i=zx45qpveb",
            releaseDate: "2006-22-10",
            gameSize: "12GiB",
            genre: "Simulator, Racing",
            minimumRequirements: "GeForce GTS 450 or Intel HD 4000 or better",
            comments: [
                {
                    name: "John Doe",
                    comment: "Test Comment A"
                }
            ]
        },
        {
            title: "Forza Horizon 5",
            price: "3400",
            posterLink: "https://files.fm/thumb_show.php?i=3vjhz44sx",
            releaseDate: "2020-12-06",
            gameSize: "21GiB",
            genre: "Simulator, Racing, Events",
            minimumRequirements: "GeForce GTS 450 or Intel HD 4000 or better",
            comments: [
                {
                    name: "John Doe",
                    comment: "Test Comment A"
                }
            ]
        },
        {
            title: "FIFA 21",
            price: "3400",
            posterLink: "https://files.fm/thumb_show.php?i=rf6ekp7he",
            releaseDate: "2021-05-06",
            gameSize: "35GiB",
            genre: "Football, Competition",
            minimumRequirements: "GeForce GTS 450 or Intel HD 4000 or better",
            comments: [
                {
                    name: "John Doe",
                    comment: "Test Comment A"
                }
            ]
        },
        {
            title: "PES 2011",
            price: "3400",
            posterLink: "https://files.fm/thumb_show.php?i=29mcxnuwv",
            releaseDate: "2011-05-06",
            gameSize: "8GiB",
            genre: "Football, Competition",
            minimumRequirements: "GeForce GTS 450 or Intel HD 4000 or better",
            comments: [
                {
                    name: "John Doe",
                    comment: "Test Comment A"
                }
            ]
        }
    ]);

    return {
        gameData
    }
}
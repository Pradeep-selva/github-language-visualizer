<script lang="ts">
    import { getUserRepos } from "../configs";

    let user: string = ""

    const handleSubmit = (event) => {
        event.key === "Enter" && getUserRepos(user).then(console.log)
    }
</script>

<main>
    <input type="text" placeholder="Search for a github user" on:keypress={handleSubmit} bind:value={user}/>
</main>

<style>
    main {
        flex: 1;
    }

    input {
        min-width: 100vh;
        border-radius: var(--largest);
        background-color: var(--grey);
        padding: 1rem;
        text-align: center;
        font-size: var(--big);
    }

    input:focus {
        outline: none;
    }

    ::placeholder {
        font-size: var(--big);
        text-align: center;
    }
</style>
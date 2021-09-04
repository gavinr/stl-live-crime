<script>
    import Swal from "sweetalert2";
    import "sweetalert2/dist/sweetalert2.css";

    export let name = "";

    const showInfo = () => {
        Swal.fire({
            title: `About ${name}`,
            html: 'This is a live view of the City of St. Louis Police Department <a href="http://www.slmpd.org/cfs.aspx" target="_blank">calls for service</a>. These are just requests - none of these crimes have been verified, charged, or prosecuted. Please leave feedback this project here: <a href="https://github.com/gavinr/stl-live-crime" target="_blank">github.com/gavinr/stl-live-crime</a>.',
            icon: "info",
            confirmButtonText: "Cool",
        });
    };
</script>

<span on:click={showInfo}
    ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        ><path
            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        /></svg
    ></span
>

<style>
    span {
        cursor: pointer;
    }
</style>

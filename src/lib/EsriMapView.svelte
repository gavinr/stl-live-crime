<script>
    import MapView from "@arcgis/core/views/MapView";

    let view;

    const createMapView = (domNode) => {
        view = new MapView({
            container: domNode,
            map: {
                basemap: "gray",
            },
        });
    };
</script>

<div use:createMapView />

<style>
    div {
        height: 100%;
        width: 100%;
    }
</style>

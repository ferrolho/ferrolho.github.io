if ("connection" in navigator) {
    // Implement data saving operations here.
    if (navigator.connection.saveData === true) {
        const video_list = document.getElementsByTagName('video');

        // Remove `autoplay` from video elements,
        // otherwise videos will not load properly
        for (const video of video_list) {
            video.autoplay = false;
            video.controls = true;
            video.load();
        }
    }
}

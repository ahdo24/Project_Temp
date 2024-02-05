const is_draggable = config => {
    $(config.drag).draggable({
        start: function () {
            transition = $(this).css('transition');
            $(this).css('transition', 'none');
        },
        stop: function () {
            $(this).css('transition', transition);
        },
        handle: config.handle,
        containment: config.containment,
        scroll: false

    });
}
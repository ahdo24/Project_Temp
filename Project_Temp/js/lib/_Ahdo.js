// Created by Ahdo

// Sweet Alert
// requirements: sweet-alert2.js above
const sweet_alert = config => {
    let type = config?.type ?? 'toast',
        icon = config?.icon ?? 'warning',
        title = config?.title,
        timer = config?.timer ?? 2000,
        confirmationButton = config?.confirmationButton ?? false

    if (type == 'fire') {
        Swal.fire({
            position: config?.position ?? 'top-end',
            icon: icon,
            title: title,
            timer: timer,
            showConfirmButton: confirmationButton,
        });
    }
    if (type == 'toast') {
        const Toast = Swal.mixin({
            toast: true,
            position: config?.position ?? 'top',
            showConfirmButton: confirmationButton,
            timer: timer,
        });
        Toast.fire({
            icon: icon,
            title: title
        });
    }


}

// Validations
const validation = config => {
    let type = config?.type ?? 'required',
        inputs = Array.from(config?.inputs) ?? [],
        result = true;

    if (type == 'required') 
        result = is_required(inputs)
    

    return result;
}

const is_empty = input => {
    return (input.value == '' || input.value == null || input.value == undefined)
}

const is_required = inputs => {
    let invalid_fields = inputs.filter(input => is_empty(input)),
        status = invalid_fields.length > 0

    if (status) {
        invalid_fields.map(i => {
            i.classList.add('invalid_input')

            if (!is_empty(i.value)) return

            i.addEventListener('change', e => {
                if (is_empty(e.target)) {
                    e.target.classList.add('invalid_input')
                    sweet_alert({ title: 'Please input required fields.' })
                    return
                }
                e.target.classList.remove('invalid_input')
            })
        })

        sweet_alert({
            title: 'Please input required fields.',
        })
    }


    return !status
}

// Jquery UI - Draggable
// requirements: jquery & jquery-ui.min.js 
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


// Global ajax connection
const ajax_con = config => {
    return $.ajax({
            url: config.url,
            method: 'POST',
            data: config?.data ?? '',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        })

}

















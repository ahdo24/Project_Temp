const sweet_alert = config => {
    let type = config?.type ?? 'prompt',
        icon = config?.icon ?? 'warning',
        title = config?.title,
        timer = config?.timer ?? 2000,
        confirmationButton = config?.confirmationButton ?? false

    if (type == 'big') {
        Swal.fire({
            position: config?.position ?? 'top-end',
            icon: icon,
            title: title,
            timer: timer,
            showConfirmButton: confirmationButton,
        });
    }
    if (type == 'prompt') {
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
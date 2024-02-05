const validation = config => {
    let type = config?.type ?? 'required',
        inputs = Array.from(config?.inputs) ?? [],
        counter = 0,
        result = true;

    if (type == 'required') {

        result = is_required(inputs)
      

    }



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

            if(!is_empty(i.value)) return

            i.addEventListener('change', e => {
                if (is_empty(e.target)) {
                    e.target.classList.add('invalid_input')
                    sweet_alert({ title: 'Please input required fields.'})
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








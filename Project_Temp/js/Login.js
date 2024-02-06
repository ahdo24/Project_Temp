$(() => {
    page_title();
    is_draggable({ // path: js/lib/_isDraggable.js
        drag: '.modal',
        containment: ".main_wrapper",
        handle: '.company'
    })



})


const page_title = () => {
    let title = document.querySelectorAll('.inputs_con .title')
    document.title = title[0].innerText
}

const login = () => {
    let required_inputs = document.querySelectorAll('[data-validation="required"]');


    let is_valid = validation({ // path: js/lib/_validation.js 
        type: 'required',
        inputs: required_inputs
    })

    if (is_valid) {
        let user = document.querySelectorAll('[data-input="Username"]')[0].value,
            pass = document.querySelectorAll('[data-input="Password"]')[0].value,
            account = {
                user: user, pass:pass
            }
        
        ajax_con({
            url: 'Login.aspx/getData',
            data: JSON.stringify({obj:account})
        })
        .done(e => {
            console.log(e)
        })
    }

        


}
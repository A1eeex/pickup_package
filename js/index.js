const pickUpBtn = document.getElementById('pick_up_btn')
const containerForm = document.querySelector('.container_form')
const formInp = document.querySelector('.form_inp')
const inpPhone = document.querySelector('.inp_phone')
const inpNumber = document.querySelector('.inp_number')
const inpErrors = document.querySelector('.inp_errors')
const inpPhoneError = document.querySelector('.inp_phone_error')
const inpNumberError = document.querySelector('.inp_number_error')
const pickUpSubmitBtn = document.querySelector('.pick_up_btn_submit')
const wrapInputsForm = document.querySelector('.wrapInputsForm')

const PHONE_VALID_NUMBER = '793793793'
const KODE_VALID_NUMBER = '2022'


const checkFormValid = (e) => {
    let isPhoneValid = true;
    let isNumberValid = true;

    disabledBtn();
    //---------------- Phone Validation----------
    if (inpPhone.value.length > 9) {
        isPhoneValid = false;
        inpPhoneError.innerHTML = `phone can't be more that 9 digits`;
    }
    //---------------- Number Validation----------
    if (inpNumber.value.length > 4) {
        isNumberValid = false;
        inpNumberError.innerHTML = `number can't be more that 4 digits`;
    }

    if (isNumberValid) inpNumberError.innerText = '';
    if (isPhoneValid) inpPhoneError.innerText = '';

    if (isPhoneValid && isNumberValid) pickUpSubmitBtn.removeAttribute('disabled')

}

function createModal() {
    const modal = document.createElement('div')
    modal.classList.add('background_modal')
    modal.insertAdjacentHTML("afterbegin", `
    <div class="container_modal">
        <h1>Paczka odebrana!</h1>
        <p>zrobie to...</p>
        <button class="end_btn">To wszystko na dziś</button>
        <button class="one_more_packet_btn" >Odbierz kolejną paczkę</button>
</div>
  `)
    document.body.appendChild(modal)
}

function disabledBtn() {
    pickUpSubmitBtn.setAttribute('disabled', 'disabled')
}

function clearFormInputs() {
    inpNumber.value = '';
    inpPhone.value = '';
}

pickUpBtn.addEventListener('click', () => {
    pickUpBtn.classList.add('displayNone')
    containerForm.classList.add('displayBlock')
})
formInp.addEventListener('input', (checkFormValid))

// ---------Submit form button----------
formInp.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inpPhone.value !== PHONE_VALID_NUMBER || inpNumber.value !== KODE_VALID_NUMBER) {
        inpErrors.innerHTML = `write correct number or code`;
        return;
    }
    createModal()
   
    endProcess()
    addOneMorePacked()
})

function endProcess() {
    const endBtn = document.querySelector('.end_btn')
    endBtn.addEventListener('click', () => {
        location.reload()
    })
}

function addOneMorePacked() {
    const oneMorePacketBtn = document.querySelector('.one_more_packet_btn')
    const backgroundModal = document.querySelector('.background_modal')
    oneMorePacketBtn.addEventListener('click', () => {
        disabledBtn() 
        clearFormInputs()
        backgroundModal.classList.add('close_modal')
       
    })
}








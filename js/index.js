
document.addEventListener('click', function(){
// donationButton.addEventListener('click', function(){
    const totalAmountElement = document.getElementById('total-amount');
    const inputField = document.getElementById('input-field');
    const donationButton = document.getElementById('donation-button');
    const donationAmountElement = document.getElementById('donation-amount');

    let totalAmount = parseFloat(totalAmountElement.textContent);
    let currentDonationAmount = parseFloat(donationAmountElement.textContent);
    // donationButton.addEventListener('click', function(){
        const inputValue = parseFloat(inputField.value);

        if(!isNaN(inputValue) && inputValue > 0 && inputValue <= totalAmount){
            totalAmount -= inputValue;
            totalAmountElement.textContent = `${totalAmount}`;

            currentDonationAmount += inputValue;
            donationAmountElement.textContent = `${currentDonationAmount}`;

            inputField.value = '';

            my_modal_1.showModal();
        }
        // else{
        //     alert('please enter a valid amount that is less than or equal to the available total.')
        // }
        my_modal_1.display = 'block';
    })

// section donation amount
document.getElementById('current-account-button').addEventListener('click', function(){
    const updateTotalAmountElement = document.getElementById('total-amount');
    const inputDonation = document.getElementById('input-donation');
    const newDonationElement = document.getElementById('new-donation');
    let newTotalAmount = parseFloat(updateTotalAmountElement.textContent);
    let currentDonationAmount = parseFloat(newDonationElement.textContent);
    const newInputValue = parseFloat(inputDonation.value);

        if(!isNaN(newInputValue) && newInputValue > 0 && newInputValue <= newTotalAmount){
            newTotalAmount -= newInputValue;
            updateTotalAmountElement.textContent = `${newTotalAmount}`;

            currentDonationAmount += newInputValue;
            newDonationElement.textContent = `${currentDonationAmount}`;
            inputDonation.value = '';
        }
        // else{
        //     alert('please enter a valid amount that is less than or equal to the available total.')
        // }
})

document.getElementById('blog').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '/Assignment-5/home.html';
})

// history button functionality
const historyButton = document.getElementById('history-button')
const donationButton = document.getElementById('donation-add-money')
historyButton.addEventListener('click', function(){
historyButton.classList.add('bg-lime-400', 'text-gray-600', 'font-bold')
historyButton.classList.remove('text-gray-600')
donationButton.classList.remove('bg-lime-400', 'text-gray-600', 'font-bold')
donationButton.classList.add('text-gray-600')

document.getElementById('update-button').classList.add('hidden');
})






// document.getElementById('btn-donate now').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('login button clicked');
//     const AmountDonation = document.getElementById('amount-input').value;
//     console.log(AmountDonation)

    // if(AmountDonation === ' + '){
    // console.log('your are logged in');
    // const balance = document.getElementById('current-balance').innerText;
    // console.log(balance);
    //     const addMoneyNumber = parseFloat(AmountDonation)
    //     const balanceNumber = parseFloat(balance)
    //     const newBalance = addMoneyNumber + balanceNumber;
        // console.log(newBalance);

//         document.getElementById('current-balance').innerText = newBalance; 
//     }
//    else{
//     alert('Invalid Donation Amount')
//    }
    
// })
document.addEventListener('DOMContentLoaded', function(){
    const totalAmountElement = document.getElementById('total-amount');
    const inputField = document.getElementById('input-field');
    const donationButton = document.getElementById('donation-button');
    const donationAmountElement = document.getElementById('donation-amount');

    let totalAmount = parseFloat(totalAmountElement.textContent);
    let currentDonationAmount = parseFloat(donationAmountElement.textContent);
    donationButton.addEventListener('click', function(){
        const inputValue = parseFloat(inputField.value);

        if(!isNaN(inputValue) && inputValue > 0 && inputValue <= totalAmount){
            totalAmount -= inputValue;
            totalAmountElement.textContent = `${totalAmount}`;

            currentDonationAmount += inputValue;
            donationAmountElement.textContent = `${currentDonationAmount}`;

            inputField.value = '';

            my_modal_1.showModal();
        }
        else{
            alert('please enter a valid amount that is less than or equal to the available total.')
        }
        my_modal_1.display = 'block';
    })
})

document.getElementById('blog').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '/home.html';
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






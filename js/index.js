document.getElementById('btn-donate now').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('login button clicked');
    const AmountDonation = document.getElementById('amount-input').value;
    // console.log(AmountDonation)

    if(AmountDonation === ' + '){
        // console.log('your are logged in');
        const balance = document.getElementById('current-balance').innerText;
        // console.log(balance);
        const addMoneyNumber = parseFloat(AmountDonation)
        const balanceNumber = parseFloat(balance)
        const newBalance = addMoneyNumber + balanceNumber;
        // console.log(newBalance);

        document.getElementById('current-balance').innerText = newBalance; 
    }
   else{
    alert('Invalid Donation Amount')
   }
    
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
})






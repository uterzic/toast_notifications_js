let toastBox = document.getElementById('toastBox');
let successMessage = 'Successfully submitted';
let errorMessage = 'Please fix the error';
let invalidMessage = 'Invalid input, check again';

function showToast(message) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = message;

    toastBox.appendChild(toast);
}
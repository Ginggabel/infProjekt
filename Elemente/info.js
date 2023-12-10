
document.getElementById("closeButton").addEventListener('click', function() {
    // Send a message to the parent window
    window.parent.postMessage('closeIframe', '*');
    
});
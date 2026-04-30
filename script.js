let score = 0;
const total = 4;

function itemFound(id) {
    const item = document.getElementById('item-' + id);
    const label = document.getElementById('label-' + id);

    if (item.style.display !== 'none') {
        // Visual feedback
        item.style.display = 'none';
        label.classList.add('found-text');
        
        score++;
        
        // Final Win Check
        if (score === total) {
            document.querySelector('h1').innerText = "You saved Mother's Day! 💖";
            document.getElementById('restart-btn').style.display = 'inline-block';
            
            // Fun confetti effect or alert
            setTimeout(() => {
                alert("Mom is ready! She can catch the bus now!");
            }, 300);
        }
    }
}
function toggleText(button) {
    const reviewText = button.previousElementSibling;
    const fullText = reviewText.dataset.fullText;
    const truncatedText = fullText.slice(0, 60) + "...";
    
    if (button.textContent === "View More") {
        reviewText.textContent = fullText;
        button.textContent = "View Less";
    } else {
        reviewText.textContent = truncatedText;
        button.textContent = "View More";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const reviewElements = document.querySelectorAll(".review-text");
    reviewElements.forEach(review => {
        const fullText = review.textContent.trim();
        if (fullText.length > 60) {
            review.dataset.fullText = fullText;
            review.textContent = fullText.slice(0, 60) + "...";
        }
    });
});

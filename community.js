// Get elements
const commentForms = document.querySelectorAll('.comment-form');

// Function to create a new comment element
function createComment(commentText) {
  const commentElement = document.createElement('li');
  commentElement.textContent = commentText;
  return commentElement;
}

// Add event listeners for each comment form
commentForms.forEach((commentForm) => {
  const submitButton = commentForm.querySelector('button.submit-comment');
  const commentsList = commentForm.nextElementSibling.querySelector('ul');
  const commentTextArea = commentForm.querySelector('textarea');

  submitButton.addEventListener('click', () => {
    const commentText = commentTextArea.value.trim();

    if (commentText) {
      // Create a new comment element and append it to the comments list
      const commentElement = createComment(commentText);
      commentsList.appendChild(commentElement);

      // Clear the input field
      commentTextArea.value = '';
    }
  });
});

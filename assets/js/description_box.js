// EXPERIENCE DESCRIPTION TOGGLE FUNCTIONS 
function toggleDescription(expId) {
    var descriptionBox = document.getElementById(expId);
    var closeButton = document.getElementById(`closeBtn_${expId}`);
    if (descriptionBox.style.display === 'none' || descriptionBox.style.display === '') {
        descriptionBox.style.display = 'block';
        closeButton.style.display = 'block';
    } else {
        descriptionBox.style.display = 'none';
        closeButton.style.display = 'none';
    }
  }
  
  function closeDescriptionWithButton(expId) {
    closeDescription(expId);
    toggleCloseButton(expId);
  }
  
  function closeDescription(expId) {
    var descriptionBox = document.getElementById(expId);
    var closeButton = document.getElementById(`closeBtn_${expId}`);
    descriptionBox.style.display = 'none';
    closeButton.style.display = 'none';
  }
  
  // PROJECT DESCRIPTION TOGGLE FUNCTIONS
  function toggleDescription(projectId) {
    var descriptionBox = document.getElementById(projectId);
    var closeButton = document.getElementById(`closeBtn_${projectId}`);
    if (descriptionBox.style.display === 'none' || descriptionBox.style.display === '') {
        descriptionBox.style.display = 'block';
        closeButton.style.display = 'block';
    } else {
        descriptionBox.style.display = 'none';
        closeButton.style.display = 'none';
    }
  }
  
  function closeDescriptionWithButton(projectId) {
    closeDescription(projectId);
    toggleCloseButton(projectId);
  }
  
  function closeDescription(projectId) {
    var descriptionBox = document.getElementById(projectId);
    var closeButton = document.getElementById(`closeBtn_${projectId}`);
    descriptionBox.style.display = 'none';
    closeButton.style.display = 'none';
  }
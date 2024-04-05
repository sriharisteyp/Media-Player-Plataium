document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
  
    // Prevent default behavior of drag-and-drop
    document.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  
    // Handle drop event
    document.addEventListener('drop', (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
  
      // Check if the dropped file is a video
      if (file && file.type.includes('video')) {
        const fileURL = URL.createObjectURL(file);
        video.src = fileURL;
      } else {
        alert('Please drop a valid video file.');
      }
    });
  });
  
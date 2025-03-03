document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
  
    let formValid = true;
  
    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
  
    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('subject').classList.remove('error');
    document.getElementById('message').classList.remove('error');
  
    if (!name) {
      nameError.textContent = 'Please enter your name.';
      document.getElementById('name').classList.add('error');
      formValid = false;
    }
  
    if (!email) {
      emailError.textContent = 'Please enter your email.';
      document.getElementById('email').classList.add('error');
      formValid = false;
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        document.getElementById('email').classList.add('error');
        formValid = false;
      }
    }
  
    if (!subject) {
      subjectError.textContent = 'Please enter a subject.';
      document.getElementById('subject').classList.add('error');
      formValid = false;
    }
  
    if (!message) {
      messageError.textContent = 'Please enter a message.';
      document.getElementById('message').classList.add('error');
      formValid = false;
    }
  
    if (formValid) {
      document.getElementById('form-feedback').style.display = 'block';
  
      this.reset();
  
      nameError.textContent = '';
      emailError.textContent = '';
      subjectError.textContent = '';
      messageError.textContent = '';
      document.getElementById('name').classList.remove('error');
      document.getElementById('email').classList.remove('error');
      document.getElementById('subject').classList.remove('error');
      document.getElementById('message').classList.remove('error');
    }
});

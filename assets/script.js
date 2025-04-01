document.addEventListener('DOMContentLoaded', function () {
  // hapi tj
  window.goToNextStep = function (step) {
      // Merr hapin aktual dhe hapin tj
      const currentStep = document.getElementById('step' + step);
      const nextStepNumber = step + 1;
      const nextStep = document.getElementById('step' + nextStepNumber);

      
      if (!currentStep || !nextStep) {
          alert('Diçka shkoi keq. Ju lutem provoni përsëri.');
          return;
      }

      // Valido fushat 
      if (step === 1) {
       
          const time = document.getElementById('time').value;
          if (!time) {
              alert('Ju lutem zgjidhni një kohë.');
              return;
          }
      } else if (step === 2) {
    
          const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const consent = document.getElementById('consent').checked;

          if (!firstName || !lastName || !email || !phone || !consent) {
              alert('Ju lutem plotësoni të gjitha fushat dhe pranoni kushtet.');
              return;
          }

          // Shfaq t dhenat
          document.getElementById('display-time').textContent = document.getElementById('time').value;
          document.getElementById('display-firstName').textContent = firstName;
          document.getElementById('display-lastName').textContent = lastName;
          document.getElementById('display-email').textContent = email;
          document.getElementById('display-phone').textContent = phone;
      }

      currentStep.style.display = 'none';
      nextStep.style.display = 'block';
  };
});